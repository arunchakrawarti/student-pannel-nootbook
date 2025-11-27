import { ArrowBigDown } from "lucide-react";
import React, { useState } from "react";

const FreqCard = ({ item, question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded-lg p-4 mb-3">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="flex gap-3 items-center">
          <span className="bg-[#16344E] text-white px-2 py-1 text-[12px] font-medium rounded">
            {item}
          </span>
          <p className="font-inter font-medium text-[12px] leading-[16px] tracking-[0px]">
            {question}
          </p>
        </div>
        <ArrowBigDown
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
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
