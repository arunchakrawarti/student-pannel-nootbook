import Image from "next/image";
import React from "react";

const VideoCard = ({ img, title, description, button }) => {
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow w-full">
      <div className="flex gap-3 items-center">
        <Image 
          src={img} 
          height={30} 
          width={30} 
          alt="video-icon"
        />

        <div>
          <h2 className="font-inter font-normal text-[16px] leading-[24px] tracking-[-0.31px]">
            {title}
          </h2>
          <p className="font-inter font-normal text-[14px] leading-[20px] tracking-[-0.15px] text-secondary">
            {description}
          </p>
        </div>
      </div>

    
      <button className="
        font-inter font-medium text-[14px] leading-[20px] tracking-[-0.15px]
        container px-4 py-1 rounded-md
      ">
        {button}
      </button>

    </div>
  );
};

export default VideoCard;
