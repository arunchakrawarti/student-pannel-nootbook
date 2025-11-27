import React from "react";

const Card11 = ({ number, isCurrent }) => {
  return (
    <div
      className={`w-10 h-10 flex items-center justify-center rounded-md border
      font-inter font-medium text-[16px]
      ${isCurrent ? "bg-green-300 text-green-900" : "bg-gray-100 text-gray-700 border-gray-300"}
      `}
    >
      {number}
    </div>
  );
};

export default Card11;
