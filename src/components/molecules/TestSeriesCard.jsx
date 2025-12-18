import Link from "next/link";
import React from "react";

const TestSeriesCard = ({ title, description, days, Question }) => {
  return (
    <div className=" p-4 mt-3 rounded-xl border border-[#E2E8F0]  bg-white">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="font-inter font-normal text-[20px] tracking-[-0.31px]">
            {title}
          </h2>

          <p className="font-inter mt-2 font-normal text-[18px] tracking-[-0.15px] text-gray-600">
            {description}
          </p>
        </div>

        <p className="font-inter bg-[#FFEDD4] px-2 py-1 rounded text-[14px] tracking-[0px] text-[#CA3500]">
          {days}
        </p>
      </div>

      <div className="mt-3 flex justify-between items-center">
        <p className="font-inter font-normal text-[18px] tracking-[-0.15px] text-gray-600">
          {Question}
        </p>

       <Link href='/test-series'>
        <button className="bg-[var(--color-accent-orange)] text-white px-4 py-2 rounded-lg text-[16px] leading-[20px]">
          Start Test
        </button>
       </Link>
      </div>
    </div>
  );
};

export default TestSeriesCard;
