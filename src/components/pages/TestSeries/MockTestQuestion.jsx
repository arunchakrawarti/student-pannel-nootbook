"use client";
import React, { useEffect, useState } from "react";
import { LuChevronLeft, LuChevronRight, LuFlag } from "react-icons/lu";
import optional from "../../../../public/db/optional.json";
import summaryStatsData from "../../../../public/db/summaryStats.json";
import Button from "@/components/comman/Button";
import QuizCard from "@/components/molecules/QuizCard";


const MockTestQuestion = () => {
  const [summaryStats, setSummaryStats] = useState([]);
  const [questionNumbers, setQuestionNumbers] = useState([]);

  useEffect(() => {
    setSummaryStats(summaryStatsData.summaryStats);
    setQuestionNumbers(summaryStatsData.questionNumbers);
  }, []);

  return (
    <div className="grid grid-cols-1  sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-4 gap-5 lg:gap-8 mt-5 w-full">

      <div className="bg-white border border-gray-200 rounded-2xl p-8 w-full col-span-1 sm:col-span-1 md:col-span-3 lg:col-span-3">
        <div className="flex justify-between">
          <h2 className="font-inter font-normal text-[22px] tracking-[-0.44px]">
            Question 1
          </h2>
          <LuFlag size={20} className="text-gray-500" />
        </div>

        <div className="mt-4 p-4 rounded-xl bg-[#EFF6FF]">
          <h1 className="font-inter py-1 text-[22px] tracking-[-0.44px]">
            Who was the first President of India?
          </h1>
        </div>

        <div className="space-y-4 mt-5">
          {optional.map((option, index) => (
            <QuizCard
              key={index}
              variant="question"
              alphabet={option.alphabet}
              title={option.title}
              status={option.status}
            />
          ))}
        </div>


        <div className="flex mt-4 justify-between flex-col sm:flex-row md:flex-row lg:flex-row">
          <div className="flex items-center gap-3">
            <LuChevronLeft />
            <Button variant="secondary" className="">Previous</Button>
          </div>

          <div className="flex items-center justify-between flex-col sm:flex-col md:flex-row gap-5">
            <div className="border border-gray-300 rounded-md px-2">
              <Button variant="secondary" className="">Clear Response</Button>
            </div>

            <div className="flex items-center justify-center gap-3  px-3 py-2 rounded-md">
              <Button iconPosition="right" icon={<LuChevronRight />
              } className="px-3">Next</Button>
            </div>
          </div>
        </div>
      </div>


      <div className="w-full col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-1 h-[330px] lg:h-[350px] sm:h-[400px]  bg-white border border-gray-200 rounded-2xl p-4 px-6">
        <h2 className="font-inter font-normal text-[21px] tracking-[-0.31px] text-gray-700 mb-4">Question Palette</h2>

        <div className="space-y-2 mt-9">
          {summaryStats.map((stat, index) => (
            <QuizCard
              key={index}
              variant="palette"
              count={stat.count}
              label={stat.label}
              color={stat.color}
            />
          ))}
        </div>

        <div className="flex  mt-9">
          {questionNumbers.map((q, index) => (
            <QuizCard
              key={index}
              variant="step"
              number={q.number}
              isCurrent={q.isCurrent}
            />
          ))}
        </div>
      </div>


    </div>
  );
};

export default MockTestQuestion;



