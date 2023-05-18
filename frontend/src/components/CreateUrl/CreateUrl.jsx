import React, { useState } from "react";

function CreateUrl() {
  const [url, setUrl] = useState("");

  const handleClick = (e) => {
    fetch("http://localhost:3000/uuid") // 엔드포인트 URL을 입력하세요
      .then((response) => response.text())
      .then((data) => {
        setUrl(`https://notion-raffle-embeded/embed/${data}`);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleCopy = (e) => {
    const text = e.target.innerText;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Error copying text:", err);
      });
  };


  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">노션 임베드</h1>
            <p className="py-6">
              아래 버튼을 눌러 임베드 URL을 생성해 보세요!! <br/><br/>
              복사하려면 URL을 클릭해주세요!!
            </p>
            <div
                  className="input input-bordered"
                  style={{ height: "fit-content", minHeight: "3rem" }}
                  onClick={handleCopy}
                >
                  {url !== "" ? url : "버튼을 눌러주세요"}
                </div>
            <div className="max-w-md">
              <label
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "stretch",
                  justifyContent: "center"
                }}
              >
                

                <button
                  className="btn btn-primary"
                  style={{ height: "inherit", minHeight: "3rem" }}
                  onClick={() => handleClick()}
                >
                  Get Started
                </button>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateUrl;
