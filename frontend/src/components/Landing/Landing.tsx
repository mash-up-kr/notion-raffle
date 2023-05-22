import React, { useEffect, useState } from "react";
import {
  ArrowPathIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";
import { useGetEmbedUrl } from "../../api/query/embed";

export function Landing() {
  let { data: url, isSuccess, refetch } = useGetEmbedUrl();
  if (!isSuccess) return null;

  const handleClick = async () => {
    const { data } = await refetch();
    url = data;
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    alert("주소가 복사되었습니다. 노션에서 embed해보세요!");
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
                {url !== "" ? url : "주소를 가져오지 못했습니다."}
              </span>
              <button
                className="btn btn-square rounded-2xl"
                onClick={handleClick}
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

export default Landing;
