import React from "react";
const getPaletteStyle = (color) => {
  switch (color) {
    case "green":
      return "bg-green-100 border-2 border-green-400 text-green-700";
    case "gray":
      return "bg-gray-100  border-gray-400 text-gray-700";
    case "orange":
      return "bg-orange-100  border-orange-400 text-orange-700";
    default:
      return "bg-gray-100 border-gray-300 text-gray-700";
  }
};


const QuizCard = ({
  
  alphabet,
  title,
  status = "default",
  label,
  count,
  color = "gray",
  number,
  isCurrent = false,
  variant = "question", 
  
}) => {
  if (variant === "question") {
    const isSelected = status === "selected";

    const cardClass = `
      flex items-center p-4 mt-2 rounded-xl shadow-sm w-full cursor-pointer 
      ${
        isSelected
          ? "border-3 border-[#FF6029] bg-[#FFF7ED]"
          : "border-3 border-gray-200 bg-white"
      }
    `;

    const circleClass = `
      flex items-center justify-center w-10 h-10 rounded-full 
      font-inter font-medium text-[14px] leading-[20px] mr-3
      ${
        isSelected
          ? "bg-[var(--color-accent-orange)] text-white"
          : "border-3 border-gray-300 text-gray-700"
      }
    `;

    return (
      <div className={cardClass}>
        <div className={circleClass}>{alphabet}</div>

        <p className="font-inter py-2 font-normal text-[20px] tracking-[-0.31px] text-gray-900">
          {title}
        </p>
      </div>
    );
  }
  if (variant === "step") {
    return (
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-md border
        text-sm font-medium cursor-pointer  -ml-1
        ${
          isCurrent
            ? "bg-green-100 border-3 border-green-500 text-gray-600"
            : "bg-gray-100 border-3 border-gray-300 text-gray-700"
        }`}
      >
        {number}
      </div>
    );
  }
  return (
    <div className="flex items-center gap-3">
      <div
        className={`w-10 h-10 flex items-center justify-center rounded border text-sm font-semibold
        ${getPaletteStyle(color)}`}
      >
        {count}
      </div>

      <span className="font-inter font-normal text-[16px] tracking-[-0.15px] text-gray-700">
        {label}
      </span>
    </div>
  );
};

export default QuizCard;
