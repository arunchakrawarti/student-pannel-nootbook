import React from "react";
import { CiSearch } from "react-icons/ci";
import { FiFilter } from "react-icons/fi";
import Inputs from "@/components/atom/Inputs"; 
import Button from "@/components/comman/Button";

const Marketplace = () => {
  return (
    <div className="w-full mt-8">
     
      <div className="mb-8">
        <h1 className="font-inter font-semibold text-[#101828] text-[28px] tracking-tight">
          Marketplace
        </h1>
        <p className="font-inter font-normal text-[16px] text-[#475467] mt-1">
          Explore and purchase courses, classes, tests & materials
        </p>
      </div>
      <div className="flex items-end justify-between gap-4 w-full">
       
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <CiSearch className="text-[#667085] text-xl stroke-[0.5]" />
          </div>
          <Inputs
            className="pl-12 w-full bg-[#F9FAFB] border-[#F2F4F7] text-[#667085] placeholder-[#667085] rounded-xl py-3 text-[16px] border shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-100"
            placeholder="Search courses, tests, materials..."
          />
        </div>
        <div className="flex flex-col gap-1">
      
          <Button className="flex items-center gap-2 border border-[#D0D5DD] rounded-lg px-5 py-2.5 bg-white shadow-xs hover:bg-gray-50 transition-all">
            <FiFilter className="text-[#344054] w-5 h-5" />
            <span className="font-inter font-semibold text-[14px] text-[#344054]">
              Filter
            </span>
          </Button>
        </div>

      </div>
    </div>
  );
};

export default Marketplace;