import Image from "next/image";
import React from "react";

const Card = ({ img, percent, value, title }) => {
  return (
    <div className="border border-gray-200 rounded-lg px-5 py-4 bg-white shadow-sm w-full">
      <div className="flex justify-between items-start">
        <div className="h-10 w-10 flex items-center justify-center rounded-md bg-[#FFEDE5]">
          <Image src={img} height={20} width={20} alt="logo" />
        </div>

        <p className="font-inter text-[#00A63E] font-normal text-[14px] leading-[20px] tracking-[-0.15px]">
          {percent}
        </p>
      </div>

      <div className="mt-4">
        <p className="font-inter font-normal text-[24px] leading-[32px] tracking-[0.07px]">
          {value}
        </p>

        <p className="font-inter mt-2 font-normal text-[14px] leading-[20px] tracking-[-0.15px]">
          {title}
        </p>
      </div>
    </div>
  );
};

export default Card;
