import React from "react";

const Card2 = ({ title, score, total, percentile }) => {
  return (
    <div className="p-4 bg-[#FFF9F6] border border-[#FFE4D6] rounded-lg">
      
      <h2 className="font-inter font-normal text-[16px] leading-[24px] tracking-[-0.31px] text-[#1E293B] mb-4">
        {title}
      </h2>

      <div className="flex justify-between items-center p-2">
        
        <div className="flex flex-col items-center">
          <p className="font-inter text-[20px] leading-[28px] tracking-[-0.45px] text-[#1E293B]">
            {score}
          </p>
          <p className="font-inter text-[12px] leading-[16px] tracking-[0px] text-[#64748B]">
            Score
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className="font-inter text-[20px] leading-[28px] tracking-[-0.45px] text-[#1E293B]">
            {total}
          </p>
          <p className="font-inter text-[12px] leading-[16px] tracking-[0px] text-[#64748B]">
            Total
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className="font-inter text-[20px] leading-[28px] tracking-[-0.45px] text-[#FF6029]">
            {percentile}
          </p>
          <p className="font-inter text-[12px] leading-[16px] tracking-[0px] text-[#64748B]">
            Percentile
          </p>
        </div>

      </div>
    </div>
  );
};

export default Card2;
