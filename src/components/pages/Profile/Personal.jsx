import React from "react";

const Personal = () => {
  return (
    <div
      className="
        flex flex-wrap 
        gap-3 sm:gap-5 md:gap-10 
        justify-center md:justify-start
      "
    >
      <p className="font-inter font-medium text-[14px] leading-5 tracking-[-0.15px]">
        Personal Info
      </p>

      <p className="font-inter font-medium text-[14px] leading-5 tracking-[-0.15px]">
        Academic Info
      </p>

      <p className="font-inter font-medium text-[14px] leading-5 tracking-[-0.15px]">
        Security
      </p>

      <p className="font-inter font-medium text-[14px] leading-5 tracking-[-0.15px]">
        Achievements
      </p>
    </div>
  );
};

export default Personal;
