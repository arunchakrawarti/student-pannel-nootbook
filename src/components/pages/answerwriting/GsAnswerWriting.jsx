import Textarea from "@/components/atom/TextArea";
import Button from "@/components/comman/Button";
import React from "react";

const GsAnswerWriting = () => {
  return (
    <div className="mt-7 w-full bg-white border border-gray-200 p-6 rounded-2xl">
      
      <h1 className="font-inter font-normal text-[14px] sm:text-[17px] text-gray-700 tracking-[-0.31px]">
        Discuss the role of technology in improving agricultural productivity in India.
      </h1>
      <div
        className="
          flex flex-wrap items-center
          mt-3 gap-x-5 gap-y-2
        "
      >
        <h3 className="font-sans font-normal text-[15px] text-gray-600 tracking-[-0.15px]">
          Word Limit: 250
        </h3>

        <div className="flex items-center gap-2">
          <div className="h-1 w-1 rounded-full bg-gray-900"></div>
          <h3 className="font-sans font-normal text-[15px] text-gray-600 tracking-[-0.15px]">
            Marks: 15
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-1 w-1 rounded-full bg-gray-900"></div>
          <h3 className="font-sans font-normal text-[15px] text-gray-600 tracking-[-0.15px]">
            Time: 15 minutes
          </h3>
        </div>
      </div>

      
      <div className="mt-5">
        <Textarea placeholder="Start writing your answer here..." />
      </div>

      
      <div
        className="
          flex flex-col gap-3
          sm:flex-row sm:items-center sm:justify-between
          mt-3
        "
      >
        <h3 className="font-inter font-normal text-[16px] text-gray-600 tracking-[-0.15px]">
          Word Count: 0 / 250
        </h3>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-7">
          <Button className="text-white px-9 w-full sm:w-auto">
            Upload
          </Button>
          <button className="bg-white px-3 rounded-lg border border-gray-300 w-full sm:w-auto">
            Save a Draft
          </button>
        </div>
      </div>

    </div>
  );
};

export default GsAnswerWriting;
