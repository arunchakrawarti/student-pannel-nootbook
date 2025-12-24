
import React from "react";
import Image from "next/image";

const SessionOverviewCard = ({
  type = "list",      
  items = [],         
  img,
  title,
  value,
  bgColor = "",
}) => {
  if (type === "list") {
    return (
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-2">
            <span className="mt-2 w-2 h-2 rounded-full bg-orange-500"></span>
            <p className="text-[16px] text-gray-600 font-inter">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className={`flex items-center p-3 rounded-xl gap-3 ${bgColor}`}>
      {img && (
        <Image src={img} height={38} width={38} alt="icon" />
      )}

      <div className="">
        <p className="font-inter font-normal text-[19px] tracking-[-0.15px] text-gray-500">
          {title}
        </p>
        <p className="font-inter font-normal text-[29px] tracking-[0.07px]">
          {value}
        </p>
      </div>
    </div>
  );
};

export default SessionOverviewCard;
