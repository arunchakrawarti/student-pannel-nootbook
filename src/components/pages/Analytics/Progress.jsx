import CardPro from "@/components/molecules/CardPro";
import React from "react";

const Progress = () => {
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
        <CardPro
        img="/img/Pro1.png"
        color="#3B82F6"
        percent="+8%"
        value="42.5h"
        title="Study Hours"
      />

      <CardPro
        img="/img/Pro.png"
        color="#22C55E"
        percent="+12%"
        value="78%"
        title="Avg Score"
      />

      <CardPro
        img="/img/Pro2.png"
        color="#A855F7"
        percent="+5"
        value="87%"
        title="Percentile"
      />
      </div>
    </div>
  );
};

export default Progress;
