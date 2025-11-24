import React from "react";
import { LuFilter } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";

const Heading = () => {
  return (
   <div className="mt-2">
  <div>
    <h1 className="font-inter font-medium text-[24px] leading-[36px] tracking-[0.07px]">
      Study Materials
    </h1>
    <p className="font-inter text-gray-600 mt-1 font-normal text-[16px] leading-[24px] tracking-[-0.31px]">
      Access notes, PDFs and study resources
    </p>
  </div>

 <div className="flex flex-col sm:flex-row gap-3 mt-4 justify-between w-full">

 
  <div className="flex items-center gap-2 border px-2 py-2 rounded-md border-gray-300 bg-gray-100 w-full">
    <IoSearchOutline />
    <input
      className="w-full font-inter font-normal text-[14px] leading-[100%] tracking-[-0.15px] outline-none"
      type="text"
      placeholder="Search study materials..."
    />
  </div>

  
  <div className="flex items-center gap-2 border px-3 py-2 rounded-md border-gray-300 whitespace-nowrap sm:w-auto w-full justify-center sm:justify-start">
    <LuFilter />
    <p className="font-inter font-medium text-[14px] leading-[20px] tracking-[-0.15px]">
      Filter
    </p>
  </div>

</div>

</div>

  );
};

export default Heading;
