import Image from "next/image";
import React from "react";
import { MdOutlineArrowBack } from "react-icons/md";
import { RiVidiconLine } from "react-icons/ri";
import { MdOutlineDateRange, MdOutlineTaskAlt } from "react-icons/md";

const FoundationCourse = () => {
  const progress = 45;

  return (
    <div className="pt-4 px-4">

     
      <div className="flex items-center gap-3 mb-4">
        <MdOutlineArrowBack className="text-[20px]" />
        <h2 className="font-inter font-medium text-[14px] md:text-[16px]">
          Back to Courses
        </h2>
      </div>

      
      <div className="flex flex-col md:flex-row bg-white rounded-md shadow p-4 gap-6">

       
        <div className="w-full md:w-[30%]">
          <Image
            src="/img/MyCourse/course1.png"
            height={300}
            width={500}
            alt="course.png"
            className="w-full h-50 rounded-lg object-cover"
          />
        </div>

       
        <div className="w-full md:w-[70%] flex flex-col gap-4">
          <h2 className="font-inter font-semibold text-[18px] md:text-[20px]">
            UPSC GS Foundation Course
          </h2>

          <p className="font-inter text-[14px] md:text-[16px]">
            by Dr. Vikas Singh
          </p>

          
          <div className="flex flex-wrap gap-4 md:gap-6">
            <div className="flex items-center gap-2">
              <RiVidiconLine className="text-red-800 text-[18px]" />
              <p className="font-inter text-[14px]">150 Lectures</p>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineTaskAlt className="text-[18px]" />
              <p className="font-inter text-[14px]">68 Completed</p>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineDateRange className="text-[18px]" />
              <p className="font-inter text-[14px]">Valid until 31 Dec 2025</p>
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <h3 className="font-inter text-[14px]">Course Progress</h3>
            <p className="font-inter text-[14px]">{progress}%</p>
          </div>

         
          <div className="w-full bg-gray-200 rounded-full h-[6px]">
            <div
              className="bg-[var(--color-accent-orange)] h-full rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundationCourse;
