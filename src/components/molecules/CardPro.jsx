import Image from "next/image";
import React from "react";

const CardPro = ({ img, percent, value, title, color }) => {
  return (
    <div className="border border-gray-200 rounded-xl px-6 py-5 bg-white shadow-sm w-full">
      <div className="flex justify-between items-start">
        {/* Icon Box */}
        <div
          className={`h-12 w-12 flex items-center justify-center rounded-xl`}
          style={{ backgroundColor: `${color}20` }} // soft tint
        >
          <Image src={img} height={24} width={24} alt="logo" />
        </div>

        {/* Percentage */}
        <p className="font-inter text-[#00A63E] font-medium text-[14px] leading-[20px] tracking-[-0.15px]">
          {percent}
        </p>
      </div>

      <div className="mt-4">
        {/* Big Value */}
        <p className="font-inter font-medium text-[24px] leading-[36px] tracking-[0.07px]">
          {value}
        </p>

        {/* Subtitle */}
        <p className="font-inter mt-1 font-normal text-[14px] leading-[20px] tracking-[-0.15px] text-gray-500">
          {title}
        </p>
      </div>
    </div>
  );
};

export default CardPro;
