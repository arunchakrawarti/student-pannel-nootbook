import React from "react";
import { LuClock } from "react-icons/lu";

const Prelism = () => {
  return (
    <div className="mt-4 bg-white border border-gray-300 p-4 rounded-md shadow">
      <div className="flex justify-between">
        <div>
          <h1 className="font-inter font-normal text-[16px] leading-[24px] tracking-[-0.31px]">
            Prelims Mock Test 15
          </h1>
          <p className="font-inter font-normal text-[14px] leading-[20px] tracking-[-0.15px]">
            Question 1 of 5
          </p>
        </div>
        <div className="flex gap-5 items-center flex-col sm:flex-col md:flex-row">
          <div className="flex items-center gap-3 bg-[#FFF7ED] px-2 rounded-md text-[#F54900]">
            <LuClock />
            <p className="font-inter font-normal text-[18px] leading-[28px] tracking-[0px]">
              0:59:45
            </p>
          </div>
          <div>
            <button className="font-inter font-medium text-[14px] leading-[20px] tracking-[-0.15px] border px-3 rounded-md py-1 border-gray-200">
              Submit Test
            </button>
          </div>
        </div>
      </div>
     <div className="mt-3">
  <div className="h-2 w-full rounded-2xl 
    bg-[linear-gradient(to_right,#FF6029_30%,#FF602933_30%)]">
  </div>
</div>


    </div>
  );
};

export default Prelism;
