import Image from "next/image";
import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";

const Card3 = ({ color, img, title, month, buttonType = "view" }) => {
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
      <div className="font-inter font-medium text-[14px] leading-[20px] tracking-[-0.15px] flex items-center gap-1">
        {buttonType === "view" && (
          <button className="flex items-center gap-1 text-[12px] font-medium text-[#1E293B]">
            View 
          </button>
        )}
        {buttonType === "download" && (
          <button className="flex items-center gap-1 text-[12px] font-medium text-[#1E293B]">
            <MdOutlineFileDownload 
            className="text-[18px]"
            />
          </button>
        )}
      </div>
      

    </div>
  );
};

export default Card3;
