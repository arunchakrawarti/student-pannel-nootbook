import React from "react";

const QuestionCard = ({ no, title, color }) => {
  return (
    <div
      className={` flex w-full  justify-between space-y-4`}
    >
      <h1
        className="font-inter font-normal text-[19px] text-[#4A5565] tracking-[-0.31px]"
      >
        {no}
      </h1>

      <p className={`font-inter font-normal text-[19px] tracking-[-0.31px] text-gray-500 ${color}`}>
        {title}
      </p>
    </div>
  );
};

export default QuestionCard;
