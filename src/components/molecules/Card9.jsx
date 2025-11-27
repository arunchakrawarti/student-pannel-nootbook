import Image from "next/image";
import React from "react";

const Card9 = ({ img, title, description, color }) => {
  return (
    <div className="flex items-center bg-white border border-gray-200 shadow-sm rounded-md gap-3 px-4 py-6">
      <div
        className={`h-10 w-10 rounded-md flex items-center justify-center ${color}`}
      >
        <Image
          src={img}
          height={22}
          width={22}
          alt="icon"
          className="object-contain"
        />
      </div>

      <div>
        <h1 className="font-inter font-medium text-[20px] leading-[24px] text-gray-900">
          {title}
        </h1>

        <p className="font-inter text-[14px] text-gray-600 leading-[18px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card9;
