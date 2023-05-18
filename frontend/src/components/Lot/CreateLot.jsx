import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Lot.css";

function CreateLot() {
  const [title, setTitle] = useState("신나는 제비뽑기");
  const [totalPrizes, setTotalPrizes] = useState(10);
  const [numWinningPrizes, setNumWinningPrizes] = useState(2);

  const navigate = useNavigate();
  const createLot = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <h1>제비뽑기 만들기</h1>
      <div className="w-1/3 mr-2">
        <label htmlFor="totalPrizes" className="block font-bold mb-2">
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
        <label htmlFor="totalPrizes" className="block font-bold mb-2">
          제비 개수
        </label>
        <input
          type="number"
          id="totalPrizes"
          value={totalPrizes}
          onChange={(e) => setTotalPrizes(parseInt(e.target.value))}
          className="w-full py-2 px-3 border border-gray-400 rounded shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-400"
        />
      </div>
      <div className="w-1/3 mr-2">
        <label htmlFor="numWinningPrizes" className="block font-bold mb-2">
          꽝 개수
        </label>
        <input
          type="number"
          id="numWinningPrizes"
          value={totalPrizes - numWinningPrizes}
          onChange={(e) =>
            setNumWinningPrizes(totalPrizes - parseInt(e.target.value))
          }
          className="w-full py-2 px-3 border border-gray-400 rounded shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-400"
        />
      </div>
      <button onClick={() => createLot()}>뽑기 생성</button>
    </div>
  );
}

export default CreateLot;
