import React from "react";

const TestResultCard = ({ title, score, total, percentile }) => {
  return (
    <div className="p-5 mx-3 bg-[linear-gradient(90deg,rgba(255,96,41,0.05)_0%,rgba(22,52,78,0.05)_100%)]  rounded-xl">
      
      <h2 className="font-inter font-normal text-[19px] tracking-[-0.31px] text-[#1E293B] mb-4 text-center sm:text-left">
        {title}
      </h2>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0 sm:px-10">
        <div className="flex flex-col items-center">
          <p className="font-inter text-[24px] tracking-[-0.45px] text-[#1E293B]">
            {score}
          </p>
          <p className="font-inter text-[16px] text-[#64748B]">
            Score
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-inter text-[24px] tracking-[-0.45px] text-[#1E293B]">
            {total}
          </p>
          <p className="font-inter text-[16px] text-[#64748B]">
            Total
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-inter text-[24px] tracking-[-0.45px] text-[var(--color-accent-orange)]">
            {percentile}
          </p>
          <p className="font-inter text-[16px] text-[#64748B]">
            Percentile
          </p>
        </div>

      </div>
    </div>
  );
};

export default TestResultCard;
