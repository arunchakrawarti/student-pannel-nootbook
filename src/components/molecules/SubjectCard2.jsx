import Image from "next/image";
import React from "react";

const SubjectCard2 = ({ subject, completed, img, total, small }) => {
  const progress = (completed / total) * 100;

  return (
    <div className="w-full p-2 bg-white rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <div className="flex gap-2">
            <Image
            src={img}
            height={20}
            width={20}
            alt="icon.png"
            />
            <p className="font-inter font-normal text-[16px] leading-6 tracking-[-0.31px]">{subject}</p>
            
        </div>
        <p className="font-inter font-medium text-[14px] text-gray-700">
          {completed}/{total}
        </p>
      </div>

      <div className="relative w-full h-2 rounded-full mt-3 bg-orange-100">
        <div
          className="h-2 bg-orange-500 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {small && (
        <p className="text-[12px] text-gray-400 mt-1 text-right">{small}</p>
      )}
    </div>
  );
};

export default SubjectCard2;
