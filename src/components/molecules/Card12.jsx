import Image from "next/image";
import React from "react";
import { IoMdDownload } from "react-icons/io";

const Card12 = ({ color, img, title, month }) => {
  return (
    <div className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">

     
      <div className="flex gap-3 items-center">
        {img ? (
          <div className="h-10 w-10 flex items-center justify-center rounded-md bg-[#FFEDE5]">
            <Image src={img} height={24} width={24} alt="logo" />
          </div>
        ) : (
          <span className={`block w-2 h-2 rounded-full ${color}`}></span>
        )}

       
        <div>
          <h2 className="font-inter font-normal text-[16px] leading-[24px] tracking-[-0.31px]">
            {title}
          </h2>
          <p className="font-inter font-normal text-[12px] text-[#94A3B8] leading-[16px] mt-0.5">
            {month}
          </p>
        </div>
      </div>
      

    </div>
  );
};

export default Card12;
