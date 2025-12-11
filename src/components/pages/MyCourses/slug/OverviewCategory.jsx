import React from "react";

const OverviewCategory = () => {
  return (
    <div className="w-full px-4 mt-4 flex">
      <div
        className="
          flex flex-col sm:flex-row 
          justify-evenly gap-3
          bg-white shadow rounded-md 
          p-4
          max-w-lg w-full
        "
      >
        <p className="font-inter font-medium text-[14px] leading-[20px] tracking-[-0.15px] text-center px-4 py-2 rounded-md">
          Overview
        </p>

        <p className="font-inter font-medium text-[14px] leading-[20px] tracking-[-0.15px] text-center px-4 py-2 rounded-md">
          Syllabus
        </p>

        <p className="font-inter font-medium text-[14px] leading-[20px] tracking-[-0.15px] text-center px-4 py-2 rounded-md">
          Video Lectures
        </p>
      </div>
    </div>
  );
};

export default OverviewCategory;
