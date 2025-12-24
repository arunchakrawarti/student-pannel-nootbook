import React from "react";
import test from "../../../../public/db/test.json";
import BaseCard from "@/components/molecules/BaseCard";

const TestSeries = () => {
  return (
    <div className="mt-3">
      <div>
        <h1 className="font-inter font-medium text-[28px] tracking-[0.07px]">
          Test Series
        </h1>
        <p className="font-inter mt-2 font-normal text-[20px] text-gray-700 tracking-[-0.31px]">
          Attempt tests and track your performance
        </p>
      </div>
      <div className="grid mt-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {test.map((item, i) => {
          return (
            <BaseCard
              key={i}

              iconSrc={item.img}
              value={item.title}
              label={item.description}
              colorClass={item.color}
              imagePosition={item.imagePosition}
              reverseText={item.reverseText}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TestSeries;
