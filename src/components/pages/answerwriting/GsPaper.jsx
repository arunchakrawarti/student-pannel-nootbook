import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { CiClock2 } from "react-icons/ci";
import { Button } from "@/components/comman/Button";

const GsPaper = () => {
  return (
    <div
      className="
        w-full
        flex flex-col mt-3 gap-4
        sm:flex-row shadow p-4 sm:items-center sm:justify-between
      "
    >
      <div className="flex items-start sm:items-center gap-3">
        <div className="flex gap-1 sm:gap-2 items-center cursor-pointer">
          <IoIosArrowRoundBack className="text-2xl sm:text-3xl" />
          <h3 className="font-inter font-medium text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] tracking-[-0.15px]">
            Back
          </h3>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="font-inter font-normal text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] tracking-[-0.31px]">
            GS Paper 3 – Agriculture
          </h1>

          <span
            className="
              w-fit
              font-inter font-medium
              px-2 py-0.5
              rounded-md
              text-white
              text-[12px] leading-[16px] tracking-[0px]
              bg-[var(--color-accent-orange)]
            "
          >
            Medium
          </span>
        </div>
      </div>

      <div
        className="
          flex items-center justify-between gap-4
          sm:justify-end
        "
      >
        <div className="flex items-center gap-1 sm:gap-2">
          <CiClock2 className="text-lg sm:text-xl" />
          <p className="font-inter font-normal text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] tracking-[-0.31px]">
            15:00
          </p>
        </div>
        <Button className="text-white text-[12px] sm:text-[14px] px-3 sm:px-4 py-1.5 sm:py-2">
          Submit Answer
        </Button>
      </div>
    </div>
  );
};

export default GsPaper;
