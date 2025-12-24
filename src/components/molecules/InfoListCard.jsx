import Image from "next/image";
import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { SlCalender, SlClock } from "react-icons/sl";
import { BsCameraVideo } from "react-icons/bs";

const InfoListCard = ({
  color,
  img,
  title,
  month,
  buttonType = "view",
  status,
  type = "default",
  sessionTitle,
  sessionBy,
  sessionDate,
  sessionTime,
  sessionDuration,
}) => {

  const getStatusIcon = () => {
    if (status === "completed") {
      return { bg: "bg-[#E8FDF3]", icon: "/img/pathicon.png" };
    }
    if (status === "pending") {
      return { bg: "bg-[#FFF3EB]", icon: "/img/youtube.png" };
    }
    return null;
  };

  const statusIcon = getStatusIcon();
  
  if (type === "session") {
    return (
      <div className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <h2 className="font-inter font-medium text-[14px] sm:text-[16px] text-[#1E293B] leading-6">
              {sessionTitle || "Polity - Constitutional Amendments"}
            </h2>

            <p className="font-inter text-[12px] sm:text-[14px] text-[#475569]">
              by {sessionBy || "Dr. Vikas Singh"}
            </p>

            <div className="flex flex-wrap gap-3 text-[12px] sm:text-[14px] text-[#475569]">
              <span className="flex items-center gap-1">
                <SlCalender className="text-[12px]" />
                {sessionDate || "16 Nov 2025"}
              </span>
              <span className="flex items-center gap-1">
                <SlClock className="text-[12px]" />
                {sessionTime || "6:00 PM"}
              </span>
              <span className="flex items-center gap-1">
                <BsCameraVideo className="text-[12px]" />
                {sessionDuration || "90 min"}
              </span>
            </div>
          </div>
          <button className="w-full md:w-auto bg-[#1E293B] text-white text-[12px] sm:text-[14px] font-medium px-4 py-2 rounded-md hover:bg-[#0f172a] transition">
            Set Reminder
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full bg-white px-4 py-3">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-start gap-3 flex-1 min-w-0">
          
          {img && (
            <div className="h-10 w-10 flex items-center justify-center rounded-md mt-4 bg-[#FFEDE5] shrink-0">
              <Image src={img} height={22} width={22} alt="icon" />
            </div>
          )}

          {!img && statusIcon && (
            <div className={`h-10 w-10 rounded-full flex items-center justify-center mt-4 shrink-0 ${statusIcon.bg}`}>
              <Image src={statusIcon.icon} height={22} width={22} alt="status" />
            </div>
          )}

          {!img && !statusIcon && (
            <span className={`mt-6 block w-2 h-2 rounded-full ${color}`} />
          )}

          <div className="min-w-0 mt-3">
            <h2 className="font-inter font-normal text-[14px] sm:text-[20px] text-[#1E293B]">
              {title}
            </h2>
            <p className="font-inter mt-1 text-[12px] sm:text-[16px] text-[#94A3B8] truncate">
              {month}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 justify-start sm:justify-end">

          {buttonType === "view" && (
            <button className="font-inter font-medium text-[18px] text-[#1E293B]">
              View
            </button>
          )}

          {buttonType === "download" && (
            <button className="flex items-center gap-1 text-[#1E293B]">
              <MdOutlineFileDownload className="text-[28px]" />
            </button>
          )}

          {(buttonType === "watch" || buttonType === "rewatch") && (
            <button className="bg-[var(--color-accent-orange)] text-white text-[12px] sm:text-[14px] font-medium px-4 py-1.5 rounded-md">
              {buttonType === "watch" ? "Watch" : "Rewatch"}
            </button>
          )}

          {buttonType === "reminder" && (
            <button className="bg-[var(--color-accent-blue)] text-white text-[12px] sm:text-[14px] font-medium px-4 py-1.5 rounded-md">
              Set Reminder
            </button>
          )}

        </div>
      </div>
    </div>
  );
};

export default InfoListCard;
