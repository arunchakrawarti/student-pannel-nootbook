import Image from "next/image";
import React from "react";
import { GoFileDirectory } from "react-icons/go";

const BaseCard = ({
  iconSrc,
  value,
  label,
  colorClass,
  iconColor,
  imagePosition = "left",
  reverseText = false,
  isFullColorCard = false,
  iconHeight = 22,
  iconWidth = 22,
  layout = "row",
  changeText,
  variant = "default",
  centerText = false,
  valueColor = "text-gray-900",
  isActive = false,
}) => {
  const containerClasses = isFullColorCard
    ? `rounded-xl px-3 py-4 md:px-4 md:py-5 ${colorClass}`
    : `rounded-2xl bg-white border border-gray-200  px-3 py-4 md:px-6 md:py-5`;

  const iconWrapperClasses = isFullColorCard
    ? "h-9 w-9 md:h-10 md:w-10 rounded-md flex items-center justify-center shrink-0"
    : `h-9 w-9 md:h-11 md:w-11 rounded-xl flex items-center justify-center shrink-0 ${colorClass}`;
  if (variant === "filter") {
    return (
      <div className="flex items-center gap-2 cursor-pointer whitespace-nowrap group">
        <span className={`text-[13px] md:text-[14px] font-medium transition-colors ${
          isActive ? "text-[#16344E] font-bold" : "text-gray-600 group-hover:text-black"
        }`}>
          {label}
        </span>
        <span 
          className="px-2 md:px-2.5 py-0.5 rounded-md text-[10px] md:text-[12px] font-bold text-white transition-all flex items-center justify-center"
          style={{ backgroundColor: '#16344E' }} 
        >
          {value}
        </span>
      </div>
    );
  }
  if (variant === "folder") {
    return (
      <div className="bg-white border border-gray-100 rounded-[20px] p-4 md:p-5 flex flex-col items-center justify-center
      w-full transition-all  cursor-pointer">
        <div className={`w-12 h-12 md:w-16 md:h-16 rounded-[15px] md:rounded-[20px] flex items-center justify-center mb-3 md:mb-4 ${colorClass}`}>
          {iconSrc ? (
            <div className="relative w-6 h-6 md:w-8 md:h-8">
              <Image src={iconSrc} fill className="object-contain" alt={label} />
            </div>
          ) : (
            <GoFileDirectory className={`w-6 h-6 md:w-8 md:h-8 ${iconColor}`} />
          )}
        </div>
        <div className="text-center">
          <h3 className="font-inter font-normal text-[13px] md:text-[14px] text-center">
            {label}
          </h3>
          <p className="text-[11px] md:text-[12px] text-gray-400 mt-1 font-medium">
            {value}
          </p>
        </div>
      </div>
    );
  }
  if (variant === "stat") {
    return (
      <div className={`rounded-xl px-3 py-4 md:px-5 md:py-4 text-center border h-full ${colorClass || "bg-white border-gray-200"}`}>
        {iconSrc && (
          <div className="flex justify-center mb-2">
            <div className="h-7 w-7 md:h-8 md:w-8 flex items-center justify-center rounded-full bg-white/70">
              <Image src={iconSrc} height={16} width={16} alt={label} />
            </div>
          </div>
        )}
        <h1 className={` font-inter text-[37px] tracking-[0.4px] text-center ${valueColor}`}>
          {value}
        </h1>
        <p className=" font-inter text-[17px] tracking-[-0.15px] text-center text-gray-600">{label}</p>
      </div>
    );
  }
  if (layout === "row") {
    return (
      <div className={`flex items-center gap-2 md:gap-3 ${containerClasses}`}>
        {iconSrc && imagePosition === "left" && (
          <div className={iconWrapperClasses}>
            <Image src={iconSrc} height={iconHeight} width={iconWidth} alt={label} />
          </div>
        )}
        
        <div className={`flex-1 min-w-0 ${centerText ? "text-center" : ""}`}>
          {!reverseText ? (
            <>
              <h1 className={`text-[16px] md:text-[28px] font-inter font-normal  tracking-[0.07px] ${valueColor}`}>{value}</h1>
              <p className="text-[12px] md:text-[17px] text-gray-600 mt-0.5 truncate">{label}</p>
            </>
          ) : (
            <>
              <p className="text-[12px] md:text-[16px] text-gray-600 truncate">{label}</p>
              <h1 className={`text-[16px] md:text-[23px] font-medium truncate ${valueColor}`}>{value}</h1>
            </>
          )}
        </div>

        {changeText && (
          <span className="text-[11px] md:text-sm font-medium text-green-600 whitespace-nowrap">
            {changeText}
          </span>
        )}
        {iconSrc && imagePosition === "right" && (
          <div className={iconWrapperClasses}>
            <Image src={iconSrc} height={iconHeight} width={iconWidth} alt={label} />
          </div>
        )}
      </div>
    );
  }
  return (
    <div className={`${containerClasses} relative overflow-hidden`}>
      <div className="flex justify-between items-start mb-4 md:mb-2">
        {iconSrc && (
          <div className={iconWrapperClasses}>
            <Image src={iconSrc} height={iconHeight} width={iconWidth} alt={label} />
          </div>
        )}
        {changeText && (
          <span className="font-inter font-normal text-[16px] text-green-500 ">
            {changeText}
          </span>
        )}
      </div>

      <div>
        <h1 className={`font-inter text-[28px] ${valueColor}`}>
          {value}
        </h1>
        <p className="font-inter font-normal text-[18px] text-gray-600 mt-1">
          {label}
        </p>
      </div>
    </div>
  );
};

export default BaseCard;

