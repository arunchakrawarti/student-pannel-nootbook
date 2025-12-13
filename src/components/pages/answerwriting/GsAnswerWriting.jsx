import Textarea from "@/components/atom/TextArea";
import { Button } from "@/components/comman/Button";
import React from "react";

const GsAnswerWriting = () => {
  return (
    <div className="mt-5 w-full bg-white shadow p-4 rounded-md">
      
      <h1 className="font-inter font-normal text-[14px] sm:text-[16px] leading-[20px] sm:leading-[16px] tracking-[-0.31px]">
        Discuss the role of technology in improving agricultural productivity in India.
      </h1>
      <div
        className="
          flex flex-wrap items-center
          mt-3 gap-x-5 gap-y-2
        "
      >
        <h3 className="font-inter font-normal text-[14px] leading-[20px] tracking-[-0.15px]">
          Word Limit: 250
        </h3>

        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-gray-300"></div>
          <h3 className="font-inter font-normal text-[14px] leading-[20px] tracking-[-0.15px]">
            Marks: 15
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-gray-300"></div>
          <h3 className="font-inter font-normal text-[14px] leading-[20px] tracking-[-0.15px]">
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
        <h3 className="font-inter font-normal text-[14px] leading-[20px] tracking-[-0.15px]">
          Word Count: 0 / 250
        </h3>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <Button className="text-white w-full sm:w-auto">
            Upload
          </Button>
          <Button className="bg-white border border-gray-300 w-full sm:w-auto">
            Save a Draft
          </Button>
        </div>
      </div>

    </div>
  );
};

export default GsAnswerWriting;
