"use client";
import React from "react";
import Link from "next/link";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoCubeOutline } from "react-icons/io5";
import { FaRegCircleCheck } from "react-icons/fa6";
import Button from "../comman/Button";


const statIcons = {
  Questions: IoCubeOutline,
  Tests: IoCubeOutline,
  Duration: AiOutlineClockCircle,
  Marks: FaRegCircleCheck,
};

const ExamCard = ({
  title,
  paper,
  status = "upcoming",
  difficulty,         
  tagText,             
  tagColor = "orange",
  stats = [],
  resultStats = [],
}) => {
 
  const tagStyles =
    tagColor === "green"
      ? "bg-[#E7F6EC] text-[#15803D]"
      : "bg-[#DBEAFE] text-[#1447E6]";

  const TagIcon =
    tagText === "Completed" ? FaRegCircleCheck : AiOutlineClockCircle;

 
  const difficultyStyles =
    difficulty === "Hard"
      ? "bg-[#FFE2E2] text-[#C10007]"
      : "bg-[#FFEDD4] text-[#CA3500]";

  return (
    <div className="w-full bg-white border border-gray-200 rounded-2xl p-6">
      <div className="flex justify-between items-start gap-2">
        <div>
          <h1 className="font-inter font-normal text-[19px] tracking-[-0.31px] text-[var(--color-accent-blue)]">
            {title}
          </h1>
          <p className="text-[18px] mt-1 text-gray-700">{paper}</p>

          {difficulty && (
            <div
              className={`inline-block mt-2 px-2 py-0.5 rounded-full ${difficultyStyles}`}
            >
              <p className="font-inter font-medium text-[12px] tracking-[0px]">
                {difficulty}
              </p>
            </div>
          )}
        </div>

        {tagText && (
          <div
            className={`flex items-center gap-1 px-3 py-0.5 rounded-full ${tagStyles}`}
          >
            <TagIcon size={14} />
            <p className="text-[14px] font-medium">{tagText}</p>
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        {stats.map((item, i) => {
          const Icon = statIcons[item.label];
          return (
            <div
              key={i}
              className="bg-[#F9FAFB] rounded-md px-3 py-3 flex flex-col items-center text-center"
            >
              <Icon size={18} className="text-gray-500 mb-1" />
              <h2 className="font-inter font-normal text-[21px] tracking-[-0.31px] text-[var(--color-accent-blue)]">
                {item.no}
              </h2>
              <p className="font-inter font-normal text-[19px] tracking-[-0.31px] text-gray-600">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
      {status === "completed" && (
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 py-4 rounded-md"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,96,41,0.05) 0%, rgba(22,52,78,0.05) 100%)",
          }}
        >
          {resultStats.map((item, i) => {
            const valueColor =
              item.label === "Percentile"
                ? "text-[#F97316]"   
                : "text-[#1E3A8A]"; 

            return (
              <div key={i} className="text-center">
                <h3
                  className={`font-inter font-medium text-[18px] tracking-[-0.44px] ${valueColor}`}
                >
                  {item.value}
                </h3>
                <p className="font-inter font-normal text-[14px] text-gray-700">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      )}
      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <Link
          href={
            status === "completed"
              ? "/test-series/result-details"
              : "/test-series/instructions"
          }
          className="w-full sm:w-1/2"
        >
          <button className="w-full border border-gray-300 text-gray-700 font-medium text-[16px] py-3 rounded-lg hover:bg-gray-100">
            {status === "completed" ? "View Results" : "View Instructions"}
          </button>
        </Link>

        <Link href="/test-series/start-test" className="w-full sm:w-1/2">
          <Button className="w-full bg-[var(--color-accent-orange)] hover:bg-[#ff6a33] text-white font-medium text-[16px] py-3 rounded-lg">
            {status === "completed" ? "Reattempt" : "Start Test"}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ExamCard;
