import Image from "next/image";
import React from "react";
import { 
  LuFileChartColumnIncreasing, 
  LuClock4, 
  LuDownload, 
  LuEye 
} from "react-icons/lu";

const Card8 = ({ title, paragraph, pages, MB, month, download }) => {
  return (
    <div className="w-full border border-gray-200 bg-white rounded-lg p-4 
                    flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

     
      <div className="flex items-start gap-3 w-full sm:w-[70%]">

       
        <div className="flex items-center justify-center bg-[#EFF6FF] border border-[#BEDBFF] 
                        rounded-md w-12 h-12 p-2">
          <Image
            src="/img/Material.png"
            height={32}
            width={32}
            className="object-contain"
            alt="material"
          />
        </div>

        
        <div className="flex flex-col gap-1">
          <h2 className="font-inter font-medium text-[16px] leading-[24px] text-[#1F2937]">
            {title}
          </h2>

          <p className="font-inter text-[14px] text-[#6B7280] leading-[20px]">
            {paragraph}
          </p>

         
          <div className="flex flex-wrap items-center gap-4 mt-1 text-[#6B7280]">

            <div className="flex items-center gap-1 text-[13px]">
              <span className="font-medium text-[#111827]">PDF</span>
            </div>

            <div className="flex items-center gap-1">
              <LuFileChartColumnIncreasing size={16} />
              <span className="text-[14px]">{pages}</span>
            </div>

            <div className="flex items-center gap-1">
              <span className="text-[14px]">{MB}</span>
            </div>

            <div className="flex items-center gap-1">
              <LuClock4 size={16} />
              <span className="text-[14px]">{month}</span>
            </div>

            <div className="flex items-center gap-1">
              <LuDownload size={16} />
              <span className="text-[14px]">{download}</span>
            </div>

          </div>
        </div>
      </div>

     
      <div className="flex flex-col sm:flex-col md:flex-row items-center gap-5 justify-end w-full sm:w-auto">

       
        <div className="flex items-center gap-1 text-[#6B7280] cursor-pointer">
          <LuEye size={18} />
          <button className="font-inter text-[14px] font-medium">
            Preview
          </button>
        </div>

        {/* DOWNLOAD BUTTON */}
        <div className="flex items-center gap-1 bg-[#FF6029] text-white px-3 py-1 rounded-md cursor-pointer">
          <LuDownload size={18} />
          <button className="font-inter text-[14px] font-medium">
            Download
          </button>
        </div>

      </div>
    </div>
  );
};

export default Card8;
