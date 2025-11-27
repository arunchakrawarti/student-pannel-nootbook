import Image from "next/image";
import React from "react";

const Card7 = ({ img, title, no, iconColor }) => {
  return (
    <div className="flex bg-white border border-gray-100 rounded-lg shadow py-5 w-full gap-3">
      <div
        className="flex items-center justify-center ml-2 rounded-md w-12 h-12 sm:w-12 sm:h-12"
        style={{ backgroundColor: iconColor }} 
      >
        <Image src={img} height={20} width={20} alt="icon" />
      </div>
      <div>
        <h3 className="font-inter font-normal text-[14px] leading-[20px] tracking-[-0.15px]">
          {title}
        </h3>
        <p className="font-inter font-normal text-[20px] leading-[28px] tracking-[-0.45px]">
          {no}
        </p>
      </div>
    </div>
  );
};

export default Card7;
