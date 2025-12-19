import React from "react";
import { FaPlay } from "react-icons/fa";


const getInitial = (name = "") => name.charAt(0).toUpperCase();

const LessonCard = ({
    type = "recorded",  
    title,
    duration,
    status,
    userName,
    role,
    isOnline,
    message,
    time
}) => {
    if (type === "recorded") {
        return (
            <div className="flex items-center mt-5 gap-4 p-3 bg-white mx-2">
                
                <div className="h-18 w-25 bg-[#E5E7EB] rounded-md flex items-center justify-center">
                    <FaPlay size={20} className="text-gray-400" />
                </div>

                <div className="flex-1">
                    <h3 className=" font-inter font-normal text-[16px] text-gray-700 tracking-[-0.15px]">
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
    }
    if (type === "participants") {
        return (
            <div className="flex items-center justify-between p-3 bg-white">

                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[var(--color-accent-orange)] flex items-center justify-center text-white font-semibold">
                        {getInitial(userName)}
                    </div>

                    <div>
                        <h3 className="font-inter font-normal text-[15px]  tracking-[-0.15px] text-[#1E293B]">{userName}</h3>
                        <p className="text-[14px] text-[#64748B]">{role}</p>
                    </div>
                </div>

                {isOnline && (
                    <span className="block w-2 h-2 bg-green-500 rounded-full"></span>
                )}
            </div>
        );
    }
    if (type === "chat") {
        return (
            <div className="flex flex-col gap-1 p-3">

                <p className="text-[14px] font-normal font-inter text-[var(--color-accent-orange)]">
                    {userName} <span className="text-[13px] text-gray-500 ">{time}</span>
                </p>

                <div className="bg-gray-50 px-3 py-2 rounded-md text-[15px] font-inter font-normal text-[#334155] leading-[20px]">
                    {message}
                </div>
            </div>
        );
    }

    return null;
};

export default LessonCard;
