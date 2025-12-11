import Image from "next/image";
import { GoSingleSelect } from "react-icons/go";
import { TbStopwatch } from "react-icons/tb";
import React from "react";

const CourseCard = ({ img, title, teacher, lecture, date, progress }) => {
  return (
    <div className="w-full bg-white rounded-xl shadow-md overflow-hidden relative">

      
      <div className="absolute top-3 -right-7 -translate-x-1/2 bg-white px-3 py-1 rounded-full text-[12px] font-medium shadow">
        {progress}% Complete
      </div>

     
      <Image
        src={img}
        width={355}
        height={190}
        alt="course image"
        className="object-cover w-full h-50 rounded-t-xl"
      />

      <div className="p-4">
        
       
        <h2 className="font-inter mt-4 text-[16px] font-semibold text-black leading-[24px]">
          {title}
        </h2>

     
        <p className="font-inter text-gray-900 text-[14px] text-gray-600 mt-2">
          {teacher}
        </p>

        
        <div className="w-full bg-gray-200 rounded-full h-[6px] mt-3">
          <div
            className="bg-[var(--color-accent-orange)] h-[6px] rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        
        <div className="flex justify-between items-center mt-4 text-gray-700">

          <div className="flex items-center gap-1">
            <GoSingleSelect size={18} />
            <span className="font-inter text-gray-600 text-[14px]">{lecture}</span>
          </div>

          <div className="flex items-center gap-1">
            <TbStopwatch size={18} />
            <span className="font-inter text-gray-600 text-[14px]">{date}</span>
          </div>
        </div>

      
        <button className="w-full mt-5 bg-[var(--color-accent-orange)] text-white py-3 rounded-lg text-[14px] font-medium">
          Continue Learning
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
