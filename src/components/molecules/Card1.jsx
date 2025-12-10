import Link from "next/link";
import React from "react";

const Card1 = ({ title, description, days, Question }) => {
  return (
    <div className="p-4 rounded-lg border border-[#E2E8F0] bg-white">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="font-inter font-normal text-[16px] leading-[24px] tracking-[-0.31px]">
            {title}
          </h2>

          <p className="font-inter font-normal text-[14px] leading-[20px] tracking-[-0.15px] text-gray-600">
            {description}
          </p>
        </div>

        <p className="font-inter bg-[#FFEDD4] px-2 py-1 rounded text-[12px] leading-[16px] tracking-[0px] text-[#FF6029]">
          {days}
        </p>
      </div>

      <div className="mt-3 flex justify-between items-center">
        <p className="font-inter font-normal text-[14px] leading-[20px] tracking-[-0.15px] text-gray-700">
          {Question}
        </p>

       <Link href='/test-series'>
        <button className="container  px-3 py-2 rounded text-[14px] leading-[20px]">
          Start Test
        </button>
       </Link>
      </div>
    </div>
  );
};

export default Card1;
