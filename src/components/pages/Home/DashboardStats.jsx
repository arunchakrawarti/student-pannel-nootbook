import React from "react";
import card from "../../../../public/db/card.json";
import BaseCard from "@/components/molecules/BaseCard";

const DashboardStats = () => {
  return (
    <div>
      <div className="mt-2 flex flex-col sm:flex-row justify-between items-start md:items-center gap-4">

        <div className="w-full md:w-auto flex flex-col mt-15">
          <h1 className="font-inter font-medium text-[30px]">
            Welcome back, Rahul Sharma!
          </h1>

          <p className="font-inter mt-1 font-normal text-[20px] text-gray-600">
            UPSC CSE 2025 - Batch A
          </p>
        </div>



      </div>
      <div className="grid grid-cols-1 mt-4  md:grid-cols-2 lg:grid-cols-3 gap-4">
        {card.map((item) => (
          <BaseCard
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

export default DashboardStats;
