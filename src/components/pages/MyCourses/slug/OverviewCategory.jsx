import React from "react";

const OverviewCategory = () => {
  return (
    <div className="w-full mt-8 flex">
      <div
        className="
          flex flex-col sm:flex-row 
          justify-evenly gap-3
          bg-white rounded-lg 
          max-w-xl w-full
        "
      >
        <p className="font-medium text-[14px] tracking-[-0.15px] text-center py-2">
          Overview
        </p>

        <p className="font-medium text-[14px] tracking-[-0.15px] text-center py-2">
          Syllabus
        </p>

        <p className="font-medium text-[14px] tracking-[-0.15px] text-center py-2">
          Video Lectures
        </p>
      </div>
    </div>
  );
};

export default OverviewCategory;
