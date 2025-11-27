import React from "react";

const getColorClasses = (color) => {
  switch (color) {
    case "green":
      return {
        bg: "bg-green-50",
        text: "text-green-600",
        border: "border-green-200",
      };
    case "yellow":
      return {
        bg: "bg-yellow-50",
        text: "text-yellow-600",
        border: "border-yellow-200",
      };
    default:
      return {
        bg: "bg-gray-50",
        text: "text-gray-600",
        border: "border-gray-200",
      };
  }
};

const Card10 = ({ count, label, color }) => {
  const colorClass = getColorClasses(color);

  return (
    <div
      className={`flex items-center justify-between p-3 mb-2 border rounded-md ${colorClass.bg} ${colorClass.border}`}
    >
      <h1 className={`font-inter font-medium text-[16px] ${colorClass.text}`}>
        {label}
      </h1>

      <span
        className={`font-inter font-semibold text-[18px] ${colorClass.text}`}
      >
        {count}
      </span>
    </div>
  );
};

export default Card10;
