import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCreateLot } from "../../api/mutation";
import "./Lot.css";

function CreateLot() {
  const [title, setTitle] = useState("신나는 제비뽑기");
  const [maxLotsCnt, setMaxLotsCnt] = useState(10);
  const [luckCnt, setLuckCnt] = useState(2);
  const { uuid } = useParams();
  const { mutate } = useCreateLot({ uuid, maxLotsCnt, luckCnt, title });

  const navigate = useNavigate();
  const createLot = React.useCallback(() => {
    mutate();
    navigate(`/embed/${uuid}`);
  }, []);

  return (
    <div className="container">
      <h1>제비뽑기 만들기</h1>
      <div className="w-1/3 mr-2">
        <label htmlFor="maxLotsCnt" className="block font-bold mb-2">
          제비 뽑기 제목
        </label>
        <input
          type="string"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full py-2 px-3 border border-gray-400 rounded shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-400"
        />
      </div>
      <div className="w-1/3 mr-2">
        <label htmlFor="maxLotsCnt" className="block font-bold mb-2">
          제비 개수
        </label>
        <input
          type="number"
          id="maxLotsCnt"
          value={maxLotsCnt}
          onChange={(e) => setMaxLotsCnt(parseInt(e.target.value))}
          className="w-full py-2 px-3 border border-gray-400 rounded shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-400"
        />
      </div>
      <div className="w-1/3 mr-2">
        <label htmlFor="luckCnt" className="block font-bold mb-2">
          꽝 개수
        </label>
        <input
          type="number"
          id="luckCnt"
          value={maxLotsCnt - luckCnt}
          onChange={(e) => setLuckCnt(maxLotsCnt - parseInt(e.target.value))}
          className="w-full py-2 px-3 border border-gray-400 rounded shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-400"
        />
      </div>
      <button onClick={() => createLot()}>뽑기 생성</button>
    </div>
  );
}

export default CreateLot;
