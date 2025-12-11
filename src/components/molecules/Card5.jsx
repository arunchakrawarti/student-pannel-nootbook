import React from "react";

const Card5 = ({ title, no }) => {
  return (
    <div className="flex justify-between items-center bg-white px-3 py-2 rounded-md shadow-sm">
      <p className="font-inter text-[#0A0A0A] font-medium text-[14px] leading-[20px] tracking-[-0.15px] truncate">
        {title}
      </p>
      <div className=" bg-[var(--color-accent-blue)]
 px-3 py-1 rounded-md text-center min-w-[30px]">
        <button className="text-white font-medium">{no}</button>
      </div>
    </div>
  );
};

export default Card5;
