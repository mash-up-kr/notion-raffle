import React, { useState, useRef } from "react";
import "./Lot.css";

function App() {
  const [result, setResult] = useState("");
  const [totalPrizes, setTotalPrizes] = useState(10);
  const [numWinningPrizes, setNumWinningPrizes] = useState(2);
  const [results, setResults] = useState([]);

  const handleDraw = () => {
    const items = ["당첨", "꽝", "꽝", "꽝"];
    setResult(items[Math.floor(Math.random() * items.length)]);
  };

  return (
    <div className="container">
      <h1>제비뽑기</h1>
      <div className="w-1/3 mr-2">
        <label htmlFor="totalPrizes" className="block font-bold mb-2">
          제비 개수 :
        </label>
      </div>
      <div className="w-1/3 mr-2">
        <label htmlFor="numWinningPrizes" className="block font-bold mb-2">
          꽝 개수 :
        </label>
      </div>
      <button className="button" onClick={handleDraw}>
        제비 뽑기
      </button>
      {result !== "" ? <p className="result">추첨 결과: {result}</p> : null}
    </div>
  );
}

export default App;
