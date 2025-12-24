import Array from "../../../../public/db/Array.json"
import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import SessionOverviewCard from "@/components/molecules/SessionOverviewCard";

const
  SolutionSummaryBar = () => {
    return (
      <div>
        <div className="flex mt-3 gap-2 items-center cursor-pointer">
          <IoIosArrowRoundBack className="text-2xl sm:text-3xl" />
          <h3 className="font-inter font-medium text-[14px] sm:text-[16px] tracking-[-0.15px]">
            Back to Results
          </h3>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-7 mt-5">
          <div>
            <h1 class="font-inter font-normal text-[20px] tracking-[-0.31px]">
              Prelims Mock Test 15 - Solutions
            </h1>
            <p class="font-inter mt-1.5 font-normal text-[17px] tracking-[-0.15px] text-gray-600">
              Detailed solutions with explanations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 mt-8 md:grid-cols-3 lg:grid-cols-3  gap-5">
            {Array.map((item, i) => {
              return (
                <SessionOverviewCard
                  type="card"
                  img={item.img}
                  title={item.title}
                  value={item.no}
                  bgColor={item.color}
                />
              );
            })}
          </div>
        </div>
        <div className="inline-flex items-center gap-1 bg-[#ECECF0] p-1 mt-8 flex-col w-full lg:max-w-fit sm:max-w-fit sm:flex-row md:flex-row rounded-full">

          <button className="px-3 py-1.5 text-sm text-[16px] font-semibold bg-white text-black rounded-full shadow">
            All Questions
          </button>

          <button className="px-3 py-1.5 text-sm text-[16px] font-semibold text-black rounded-full">
            Incorrect Only
          </button>

          <button className="px-3 py-1.5 text-sm text-[16px] font-semibold text-black rounded-full">
            Not Attempted
          </button>
        </div>

      </div>
    );
  };

export default SolutionSummaryBar;
