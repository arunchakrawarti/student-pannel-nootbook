import React from "react";
import { FaPlay } from "react-icons/fa";

const LessonCard = ({ title, duration, status }) => {
  return (
    <div className="flex items-center gap-4 p-3 bg-white border-b border-gray-100 last:border-none">

      {/* Play Icon Box */}
      <div className="h-12 w-12 bg-gray-100 rounded-md flex items-center justify-center">
        <FaPlay className="text-gray-400 text-[14px]" />
      </div>

      {/* Text Section */}
      <div className="flex-1">
        <h3 className="text-[15px] font-medium text-[#1E293B] leading-[20px]">
          {title}
        </h3>

        <div className="flex items-center gap-2 text-[13px] text-[#64748B] mt-1">
          <span>{duration}</span>

          {status === "completed" && (
            <span className="text-green-600 font-medium">✓ Completed</span>
          )}
        </div>
      </div>

    </div>
  );
};

export default LessonCard;
