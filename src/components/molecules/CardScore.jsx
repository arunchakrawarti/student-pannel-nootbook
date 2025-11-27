import React from "react";

const CardScore = ({ no, title, color }) => {
  return (
    <div
      className={` flex w-full py-5 flex-col items-center justify-center  rounded-xl 
      bg-gradient-to-br from-[#F5F3FF] to-[#F8FAFC]`}
    >
      <h1
        className={`font-inter font-normal text-[30px] leading-[36px] tracking-[0.4px] text-center ${color}`}
      >
        {no}
      </h1>

      <p className="font-inter font-normal text-[14px] leading-[20px] tracking-[-0.15px] text-center text-gray-500">
        {title}
      </p>
    </div>
  );
};

export default CardScore;
