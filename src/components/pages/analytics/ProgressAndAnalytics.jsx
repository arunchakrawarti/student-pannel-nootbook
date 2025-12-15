import Card9 from "@/components/molecules/Card9";
import progress from "../../../../public/db/progress.json"
import React from "react";

const ProgressAndAnalytics = () => {
  return (
    <div>
      <div className="mt-3">
        <h1 className="font-inter font-medium text-[24px] leading-[36px] tracking-[0.07px]">
          Progress & Analytics
        </h1>
        <p className="font-inter mt-2 font-normal text-[16px] leading-[24px] tracking-[-0.31px]">
          Track your learning journey and performance
        </p>
      </div>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {progress.map((item) => (
        <Card9
          key={item.id}
          iconSrc={item.iconSrc}
          value={item.value}
          label={item.label}
          changeText={item.changeText}
          layout={item.layout}
          colorClass={item.colorClass}
        />
      ))}
    </div>
    </div>
  );
};

export default ProgressAndAnalytics;
