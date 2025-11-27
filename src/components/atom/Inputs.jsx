import React from "react";

const Inputs = ({ label, type, placeholder }) => {
  return (
    <div className="flex flex-col w-full mb-6">
      
      <label className="font-inter font-medium text-[15px] leading-[14px] tracking-[-0.15px] text-gray-800 mb-2">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="
          w-full
          py-2 px-2
          bg-gray-300
          rounded-md border border-gray-400
          font-inter font-normal text-[14px] leading-5 tracking-[-0.15px]
          placeholder:text-gray-500
          flex items-center
        "
      />
    </div>
  );
};

export default Inputs;
