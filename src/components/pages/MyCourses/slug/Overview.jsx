import React from "react";

const Overview = () => {
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
        <button className="font-inter font-medium text-[14px] leading-[20px] tracking-[-0.15px] text-center px-4 py-2 rounded-md">
          Overview
        </button>

        <button className="font-inter font-medium text-[14px] leading-[20px] tracking-[-0.15px] text-center px-4 py-2 rounded-md">
          Syllabus
        </button>

        <button className="font-inter font-medium text-[14px] leading-[20px] tracking-[-0.15px] text-center px-4 py-2 rounded-md">
          Video Lectures
        </button>
      </div>
    </div>
  );
};

export default Overview;
