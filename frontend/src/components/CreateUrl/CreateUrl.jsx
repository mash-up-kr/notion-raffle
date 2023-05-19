import React, { useEffect, useState } from "react";
import {
  ArrowPathIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";

function CreateUrl() {
  const [url, setUrl] = useState("");

  const handleClick = () => {
    fetch("http://localhost:3000/uuid") // 엔드포인트 URL을 입력하세요
      .then((response) => response.text())
      .then((data) => {
        setUrl(`https://notion-raffle-embeded/embed/${data}`);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    handleClick();
  }, []);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        alert("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Error copying text:", err);
      });
  };

  return (
    <div>
      <div
        className="hero bg-base-200"
        style={{
          minHeight: `calc(100vh - 11rem)`,
        }}
      >
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">노션 임베드</h1>
            <p className="py-6">
              아래 버튼을 눌러 임베드 URL을 생성해 보세요!! <br />
              <br />
              복사하려면 URL을 클릭해주세요!!
            </p>
            <div
              className="input input-bordered flex items-center"
              style={{ height: "fit-content", minHeight: "3rem" }}
            >
              <span className="flex-grow">
                {url !== "" ? url : "버튼을 눌러주세요"}
              </span>
              <button
                className="btn btn-square rounded-2xl"
                onClick={() => handleClick()}
              >
                <ArrowPathIcon className="h-6 w-6 text-gray-1000" />
              </button>
              <button
                className="btn btn-square rounded-2xl"
                onClick={handleCopy}
              >
                <ClipboardDocumentListIcon className="h-6 w-6 text-gray-1000" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateUrl;
