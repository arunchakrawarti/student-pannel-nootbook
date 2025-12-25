"use client";
import Button from "@/components/comman/Button";
import React from "react";
import { CiCircleCheck } from "react-icons/ci";

const Success = () => {
  return (
    <div className="w-full px-4 sm:px-6">
      <div className="max-w-[750px] mx-auto bg-white rounded-2xl border border-gray-200 py-8 px-4 sm:px-8 text-center">
        <div className="mx-auto h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
          <CiCircleCheck size={34} className="text-green-600" />
        </div>
        <h1 className="font-inter font-normal text-gray-800 text-[20px] sm:text-[26px] tracking-[0.07px] mb-2">
          Answer Submitted Successfully!
        </h1>
        <p className="font-inter font-normal text-gray-500 text-[14px] sm:text-[17px] leading-[22px] sm:leading-[26px] px-2 sm:px-12 mb-8">
          Your answer has been submitted for evaluation. You will receive detailed
          feedback within 24-48 hours.
        </p>
        <div className="bg-gray-50 rounded-xl px-4 sm:px-6 py-5 text-left mb-8">
          <h2 className="font-inter font-normal text-gray-600 text-[18px] tracking-[-0.31px] mb-4">
            Submission Summary
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 text-[14px] text-gray-600">
            <span className="font-inter text-[15px] tracking-[-0.15px]">Question:</span>
            <span className="truncate sm:truncate-none text-right font-inter text-[15px] tracking-[-0.15px]">
              Discuss the role of technology in improving agricultural productivity in India.
            </span>

            <span className="font-inter text-[15px] tracking-[-0.15px]">Word Count:</span>
            <span className="text-right font-inter text-[15px] tracking-[-0.15px]">0 words</span>

            <span className="font-medium font-inter text-[15px] tracking-[-0.15px]">Time Taken:</span>
            <span className="text-right font-inter text-[15px] tracking-[-0.15px]">0 minutes</span>

            <span className="font-inter text-[15px] tracking-[-0.15px]">Status:</span>
            <span className="flex justify-end">
              <span className="px-2 py-0.5 border border-gray-300 font-inter rounded-xl text-black font-medium text-[12px] tracking-[0px]">
                Under Evaluation
              </span>
            </span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 sm:mx-40">
          <Button className="w-full sm:w-auto bg-[var(--color-accent-orange)] text-white px-6 py-2 rounded-full">
            Back to Questions
          </Button>

          <Button
            variant="danger"
            className="w-full sm:w-auto px-6 py-2 rounded-full"
          >
            Practice Another
          </Button>
        </div>

      </div>
    </div>
  );
};

export default Success;
