import Cardsol from "@/components/molecules/Cardsol";
import Array from "../../../../public/db/Array.json"
import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

const SolutionSummaryBar = () => {
  return (
    <div>
      <div className="flex mt-3 gap-2 items-center cursor-pointer">
        <IoIosArrowRoundBack className="text-2xl sm:text-3xl" />
        <h3 className="font-inter font-medium text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] tracking-[-0.15px]">
          Back to Results
        </h3>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-4 mt-5">
      <div>
        <h1 class="font-inter mt-4 font-normal text-[16px] leading-[16px] tracking-[-0.31px]">
          Prelims Mock Test 15 - Solutions
        </h1>
        <p class="font-inter mt-2 font-normal text-[14px] leading-[20px] tracking-[-0.15px]">
          Detailed solutions with explanations
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 mt-6 md:grid-cols-3 lg:grid-cols-3 gap-2">
        {Array.map((item, i) => {
          return (
            <Cardsol
              img={item.img}
              title={item.title}
              no={item.no}
              color={item.color}
            />
          );
        })}
      </div>
    </div>
    <div className="w-full max-w-md  px-3 sm:px-5 mt-5 py-1 flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0 bg-gray-300 rounded-md sm:rounded-full md:rounded-full lg:rounded-full ">
      <button className="bg-white py-2 rounded-full px-3 sm:px-5 w-full sm:w-auto text-center">All Question</button>
      <button className=" py-2 rounded-full px-3 sm:px-5 w-full sm:w-auto text-center">Incorrect Only</button>
      <button className=" py-2 rounded-full px-3 sm:px-5 w-full sm:w-auto text-center">Not Attempt</button>
    </div>
    </div>
  );
};

export default SolutionSummaryBar;
