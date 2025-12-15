"use client";
import CardQuestion from "@/components/molecules/CardQuestion";
import React, { useEffect, useState } from "react";
import { LuChevronLeft, LuChevronRight, LuFlag } from "react-icons/lu";
import optional from "../../../../public/db/optional.json";
import summaryStatsData from "../../../../public/db/summaryStats.json";
import Card10 from "@/components/molecules/Card10";
import Card11 from "@/components/molecules/Cad11";
import { Button } from "@/components/comman/Button";

const QuestionTestQuestion = () => {
  const [summaryStats, setSummaryStats] = useState([]);
  const [questionNumbers, setQuestionNumbers] = useState([]);

  useEffect(() => {
    setSummaryStats(summaryStatsData.summaryStats);
    setQuestionNumbers(summaryStatsData.questionNumbers);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-between gap-5 mt-5 w-full">
     
      <div className="bg-white border border-gray-200 rounded-md p-4 w-full lg:w-[75%]">
        <div className="flex justify-between">
          <h2 className="font-inter font-normal text-[18px] leading-[28px] tracking-[-0.44px]">
            Question 1
          </h2>
          <LuFlag />
        </div>

        <div className="mt-4 p-4 rounded-md bg-[#EFF6FF]">
          <h1 className="font-inter font-normal text-[18px] leading-[28px] tracking-[-0.44px]">
            Who was the first President of India?
          </h1>
        </div>

        <div className="space-y-2 mt-3">
          {optional.map((option, index) => (
            <CardQuestion
              key={index}
              alphabet={option.alphabet}
              title={option.title}
              status={option.status}
            />
          ))}
        </div>

        <div className="flex mt-4 justify-between flex-col sm:flex-row md:flex-row lg:flex-row">
          <div className="flex items-center  gap-3">
            <LuChevronLeft />
            <Button className="bg-white">Previous</Button>
          </div>

          <div className="flex justify-between flex-col sm:flex-row md:flex-row gap-5">
            <Button className="bg-white">Clear Response</Button>

            <div className="flex items-center justify-center gap-3 text-white px-3 py-2 rounded-md">
              <Button>Next</Button>
              <LuChevronRight />
            </div>
          </div>
        </div>
      </div>

      
      <div className="w-full lg:w-[25%] border border-gray-300 rounded-md p-4">
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow">
          {summaryStats.map((stat, index) => (
            <Card10
              key={index}
              count={stat.count}
              label={stat.label}
              color={stat.color}
            />
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mt-3">
          {questionNumbers.map((q, index) => (
            <Card11 key={index} number={q.number} isCurrent={q.isCurrent} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionTestQuestion;
