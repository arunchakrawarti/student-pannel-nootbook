import Link from "next/link";
import React from "react";

const CardPrelims = ({ title, paper, days, stats = [] }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow p-4 w-full pb-23">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="font-inter font-normal text-[16px] leading-[24px] tracking-[-0.31px]">
            {title}
          </h1>
          <p className="font-inter font-normal text-[14px] leading-[20px] tracking-[-0.15px] text-gray-600">
            {paper}
          </p>
        </div>

        <div className="bg-[#FFEDD4] text-[#CA3500] px-3 py-1 rounded-full">
          <p className="font-inter font-medium text-[12px] leading-[16px] tracking-[0px]">
            {days}
          </p>
        </div>
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-3 mt-4">
        {stats.map((item, i) => (
          <div
            key={i}
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

      <Link href='/start-test'>
      <button className="w-full bg-[#FF6029] text-white font-medium text-[16px] py-3 rounded-lg mt-8">
        Start Test
      </button>
      </Link>
    </div>
  );
};

export default CardPrelims;
