import Link from "next/link";
import React from "react";

const CardTest = ({ title, paper, completionStatus, stats = [], resultStats = [] }) => {
  
  const statusClass =
    completionStatus === "Completed"
      ? "bg-green-100 text-green-700"
      : "bg-[#FFEDD4] text-[#CA3500]";

  const buttonText =
    completionStatus === "Completed" ? "View Analysis" : "Start Test";

  const buttonClass =
    completionStatus === "Completed"
      ? "w-full bg-white border border-gray-300 font-medium text-[16px] py-3 rounded-lg mt-4"
      : "w-full bg-[#FF6029] text-white font-medium text-[16px] py-3 rounded-lg mt-4";

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow p-4 w-full">
      
     
      <div className="flex justify-between items-start">
        <div>
          <h1 className="font-inter font-normal text-[16px] leading-[24px] tracking-[-0.31px]">
            {title}
          </h1>
          <p className="font-inter font-normal text-[14px] leading-[20px] tracking-[-0.15px] text-gray-600">
            {paper}
          </p>
        </div>

        <div className={`${statusClass} px-3 py-1 rounded-full`}>
          <p className="font-inter font-medium text-[12px] leading-[16px] tracking-[0px]">
            {completionStatus}
          </p>
        </div>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-3 mt-4">
        {stats.map((item, i) => (
          <div
            key={`stat-${i}`}
            className="bg-[#F5F7FA] rounded-md px-4 py-3 text-center"
          >
            <h2 className="font-inter font-normal text-[16px] leading-[24px] tracking-[-0.31px]">
              {item.no}
            </h2>
            <p className="font-inter font-normal text-[14px] leading-[20px] tracking-[-0.15px] text-gray-600">
              {item.label}
            </p>
          </div>
        ))}
      </div>
      {resultStats.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-3 mt-4 p-3 rounded-lg"
        style={{
    background: "linear-gradient(90deg, rgba(255, 96, 41, 0.05) 0%, rgba(22, 52, 78, 0.05) 100%)"
  }}
        >
          {resultStats.map((item, i) => (
            <div key={`result-${i}`} className="px-2 py-1 text-center">
              <h2
                className={`font-inter font-normal text-[16px] leading-[24px] tracking-[-0.31px] ${
                  item.label === "Percentile" ? "text-red-600" : "text-gray-900"
                }`}
              >
                {item.no}
              </h2>

              <p className="font-inter font-normal text-[14px] leading-[20px] tracking-[-0.15px] text-gray-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      )}

     <Link href={`test-series/$[testId]/result`}>
      <button className={buttonClass}>{buttonText}</button>
     </Link>
    </div>
  );
};

export default CardTest;
