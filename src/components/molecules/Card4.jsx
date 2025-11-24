import Image from "next/image";
import React from "react";

const Card4 = ({ title, file, iconBgColor }) => {
  return (
    
    <div className="w-full border border-gray-200 rounded-[16px] flex flex-col items-center justify-center p-4 hover:shadow-md transition-shadow bg-white">
      
      
      <div className={`w-[64px] h-[64px] rounded-[16px] flex items-center justify-center mb-3 ${iconBgColor}`}>
        <Image 
          src="/img/vector.png" 
          height={32} 
          width={32} 
          alt="icon"
        />
      </div>
      
      <h3 className="font-inter font-medium text-[14px] leading-[20px] text-[#1E293B] text-center mb-1">
        {title}
      </h3>
      <p className="font-inter font-normal text-[12px] leading-[16px] text-[#64748B] text-center">
        {file}
      </p>
    </div>
  );
};

export default Card4;