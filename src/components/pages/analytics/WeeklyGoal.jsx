import React from "react";
import announ1 from "../../../../public/db/announ1.json";
import Image from "next/image";

import { Target } from "lucide-react";
import study from "../../../../public/db/study.json";
import Card12 from "@/components/molecules/Card12";
import Card8 from "@/components/molecules/AnswerPracticeCard";


const WeeklyGoal = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full gap-4">
      {/* Weekly Goals */}
      <div className="w-full lg:w-1/2 p-4 bg-white border border-gray-300 mt-5 rounded-xl">
        <div className="flex items-center mb-6">
          <Target className="text-orange-500 w-6 h-6 mr-2" />
          <h2 className="text-xl font-bold text-gray-800">Weekly Goals</h2>
        </div>

        <div className="space-y-4">
          {study.map((item) => (
            <Card8
              key={item.id}
              type="practice"
              showImageProgress={true}
              imageProgressSrc={item.iconSrc}
              data={{
                title: item.label,
                totalQuestions: item.total,
                completed: item.value,
                progress: item.progress
              }}
            />
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="w-full lg:w-1/2 p-4 mt-5 bg-white rounded-lg border border-gray-200">
        <div className="flex gap-3 items-center mb-4">
          <Image src="/img/Icona.png" height={20} width={20} alt="icona.png" />
          <h2 className="font-inter font-normal text-[16px] leading-[24px] tracking-[-0.31px]">
            Recent Activity
          </h2>
        </div>

        <div className="p-2 space-y-2">
          {announ1.map((item) => (
            <Card12
              key={item.id}
              color={item.color}
              title={item.title}
              month={item.month}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeeklyGoal;
