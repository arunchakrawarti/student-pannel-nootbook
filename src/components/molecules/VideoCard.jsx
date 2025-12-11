import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { GoVideo } from "react-icons/go";
import { Button } from "../comman/Button";

const VideoCard = ({ title, description, button, status }) => {
  return (
    <div
      className="
        flex flex-col sm:flex-row sm:justify-between sm:items-center 
        bg-white p-4 rounded-lg shadow w-full gap-4 sm:gap-0
      "
    >
     
      <div className="flex gap-3 items-center">

        
        <div
          className="w-[30px] h-[30px] rounded-full flex items-center justify-center"
          style={{
            backgroundColor: status === "completed" ? "#DCFCE7" : "#FFEDD4",
          }}
        >
          {status === "completed" ? (
            <AiOutlineCheckCircle size={20} className="text-[#00A63E]" />
          ) : (
            <GoVideo size={16} className="text-[#FF6029]" />
          )}
        </div>

        <div>
          <h2 className="font-inter text-[16px] leading-[24px] tracking-[-0.31px]">
            {title}
          </h2>
          <p className="font-inter text-[14px] leading-[20px] tracking-[-0.15px] text-secondary">
            {description}
          </p>
        </div>
      </div>

     
      <Button
        className="
          text-white
          w-full sm:w-auto
          full width, desktop auto 
          text-center
        "
      >
        {button}
      </Button>
    </div>
  );
};

export default VideoCard;
