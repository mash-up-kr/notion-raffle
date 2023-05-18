import React, { useState } from "react";
import "./Lot.css";
import { useGetLot } from "../../api/query/lotQuery";
import { useParams } from "react-router-dom";
import { useTryLot } from "../../api/mutation";

function App() {
  const [user, setUser] = useState("익명의 누군가");
  const { uuid, id } = useParams();

  const { data, isSuccess } = useGetLot(uuid, id);
  const { mutate: tryLot } = useTryLot({ uuid, id, user });

  if (!(isSuccess && data)) return null;
  const handleDraw = () => {
    tryLot();
  };

  return (
    <div className="container">
      <h1>제비 뽑기 - {data.title}</h1>
      <div className="w-1/3 mr-2">
        <label htmlFor="totalPrizes" className="block font-bold mb-2">
          제비 개수 : {data.maxLotsCnt}
        </label>
      </div>
      <div className="w-1/3 mr-2">
        <label htmlFor="numWinningPrizes" className="block font-bold mb-2">
          당첨 개수 : {data.luckCnt}
        </label>
      </div>
      <div>
        <label htmlFor="maxLotsCnt" className="block font-bold mb-2">
          내 이름
        </label>
        <input
          type="string"
          id="user"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="w-full py-2 px-3 border border-gray-400 rounded shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-400"
        />
      </div>
      <button className="button" onClick={handleDraw}>
        제비 뽑기
      </button>
      <p className="result">추첨 결과: 당첨</p>
      {/* {result !== "" ? <p className="result">추첨 결과: {result}</p> : null} */}
    </div>
  );
}

export default App;
