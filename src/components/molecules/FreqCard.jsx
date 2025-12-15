"use client";
import React, { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
const FreqCard = ({ item, question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-300 rounded-lg p-4 mb-3">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="flex gap-3 items-center">
          <span className="bg-[var(--color-accent-blue)] px-2 py-1 rounded-md text-white text-[12px] font-medium ">
            {item}
          </span>
          <p className="font-inter font-normal text-[16px] leading-[24px] tracking-[-0.31px]">
            {question}
          </p>
        </div>
        <MdKeyboardArrowUp
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>
      {open && (
        <p className="font-inter font-normal text-[16px] leading-[24px] tracking-[-0.31px] mt-2">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FreqCard;
