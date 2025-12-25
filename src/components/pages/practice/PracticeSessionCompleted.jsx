import React from "react";
import BaseCard from "@/components/molecules/BaseCard";
import statsData from "../../../../public/db/statsData.json";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { Button } from "@/components/comman/Button";

const PracticeSessionCompleted = () => {
  return (
    <div className="w-full mt-4 md:px-10 px-10 sm:px-6">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-4 sm:p-6">

        <div className="flex justify-center mb-3">
          <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-orange-50 flex items-center justify-center">
            <IoCheckmarkCircleOutline className="text-[var(--color-accent-orange)] text-xl sm:text-2xl" />
          </div>
        </div>


        <h2 className="text-center text-base sm:text-lg font-semibold text-gray-900">
          Practice Session Complete!
        </h2>
        <p className="text-center text-xs sm:text-sm text-gray-500 mt-1">
          Great job! Here's your performance summary
        </p>


        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-5 sm:mt-6">
          {statsData.map((item) => (
            <BaseCard
              key={item.id}
              variant="stat"
              value={item.value}
              label={item.label}
              iconSrc={item.iconSrc}
              valueColor={item.valueColor}
              colorClass={item.colorClass}
            />
          ))}
        </div>

        <div className="mt-5 sm:mt-6 bg-white border border-gray-300 rounded-md shadow-sm p-3 sm:p-4">
          <div className="flex justify-between text-xs sm:text-sm text-gray-600 mb-1">
            <span>Accuracy</span>
            <span>0%</span>
          </div>

          <div className="h-2 w-full bg-orange-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-[var(--color-accent-orange)] rounded-full transition-all"
              style={{ width: "0%" }}
            />
          </div>
        </div>

        <div className="flex flex-col w-full sm:flex-row gap-2 sm:gap-3 mt-5 sm:mt-6">
          <Button className="w-full px-10 sm:flex-1 text-white">
            Practice Again
          </Button>

          <Button className="w-full sm:flex-1 text-gray-500 border px-10 border-gray-400 bg-white">
            Choose Different Topic
          </Button>

          <Button className="w-full  sm:flex-1 text-gray-500 border px-10 border-gray-400 bg-white">
            Back to Subjects
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PracticeSessionCompleted;
