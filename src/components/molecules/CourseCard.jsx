import Image from "next/image";
import React from "react";
import { GoSingleSelect } from "react-icons/go";
import { TbStopwatch } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { SlClock } from "react-icons/sl";
import { LuCalendar } from "react-icons/lu";

const CourseCard = ({
  img,
  title,
  teacher,
  isLiveSession = false,
  lecture,
  date,
  progress,
  sessionTime,
  registeredCount,
  liveBadgeText,
}) => {
  const badgeText = isLiveSession ? liveBadgeText || "Live" : `${progress}% Complete`;

  const buttonText = isLiveSession ? "Join Class" : "Continue Learning";

  const liveTitleOnImage = isLiveSession ? title : "";

  const badgePositionClass = isLiveSession ? "bottom-10 left-3 sm:left-4" : "top-3 right-3";

  const badgeColorClass = isLiveSession
    ? "bg-red-600 text-white"
    : "bg-white text-black";

  return (
    <div className="w-full bg-white rounded-xl shadow-md overflow-hidden">

      <div className="relative w-full">

        <div
          className={`
            absolute ${badgePositionClass} z-20
            px-2 py-1 sm:px-4 sm:py-1
            rounded-full text-[10px] sm:text-[14px] shadow
            whitespace-nowrap font-inter font-normal 
            ${badgeColorClass}
          `}
        >
          {badgeText}
        </div>

        {isLiveSession && (
          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-10 text-gray-100 font-inter text-sm sm:text-md font-medium">
            {liveTitleOnImage}
          </div>
        )}

        <Image
          src={img}
          width={100}
          height={150}
          alt="course image"
          className="
            object-cover w-full 
            h-40 sm:h-52 md:h-50 
            rounded-t-xl
          "
        />
      </div>

      <div className="p-3 sm:p-4">

        {!isLiveSession && (
          <h2 className="font-inter font-normal text-[18px] mt-5 tracking-[-0.31px] text-gray-800">
            {title}
          </h2>
        )}

        <p className={`font-inter text-gray-600 text-[12px] sm:text-[14px] ${isLiveSession ? "mt-1" : "mt-2"}`}>
          by {teacher}
        </p>
        {isLiveSession ? (
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-3 sm:mt-4 text-gray-700 gap-3 sm:gap-0">

            <div className="flex items-center gap-1 sm:gap-2">
              <SlClock size={16} className="text-gray-500" />
              <span className="font-inter text-[12px] sm:text-[14px]">
                {sessionTime}
              </span>
            </div>

            <div className="flex items-center gap-1 sm:gap-2">
              <FiUsers size={16} className="text-gray-500" />
              <span className="font-inter text-[12px] sm:text-[14px]">
                {registeredCount} registered
              </span>
            </div>
          </div>
        ) : (
          <>
            <div className="w-full bg-gray-200 rounded-full h-[5px] sm:h-[6px] mt-3">
              <div
                className="bg-[var(--color-accent-orange)] h-full rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-3 sm:mt-4 text-gray-700 gap-3 sm:gap-0">

              <div className="flex items-center gap-1 sm:gap-2">
                <GoSingleSelect size={16} className="text-gray-500" />
                <span className="font-inter text-[12px] font-normal sm:text-[14px]">
                  {lecture}
                </span>
              </div>

              <div className="flex items-center gap-1 sm:gap-2">
                <TbStopwatch size={20} className="text-gray-500" />
                <span className="font-inter text-[12px] font-normal sm:text-[14px]">
                  {date}
                </span>
              </div>

            </div>
          </>
        )}

        <button
          className="
            w-full mt-4 sm:mt-5 
            text-white 
            py-2 sm:py-3 cursor-pointer
            rounded-lg 
            text-[12px] sm:text-[14px] font-medium
            bg-[var(--color-accent-orange)]
            flex justify-center items-center gap-2
          "
        >
          {isLiveSession && <LuCalendar size={16} className="text-white" />}
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
