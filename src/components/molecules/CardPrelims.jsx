import Link from "next/link";
import React from "react";


import { AiOutlineClockCircle } from "react-icons/ai";
import { IoCubeOutline } from "react-icons/io5";
import { FaRegCircleCheck } from "react-icons/fa6";
import Button from "../comman/Button";


const statIcons = {
  Questions: IoCubeOutline,
  Duration: AiOutlineClockCircle,
  Marks: FaRegCircleCheck,
  Tests: IoCubeOutline,
};

const CardPrelims = ({
  title,
  paper,
  status = "upcoming", 
  type = "test",       
  difficulty,          
  tagText,
  tagColor = "orange",
  stats = [],
  resultStats = [],
}) => {

  const tagStyles =
    tagColor === "green"
      ? "bg-[#E7F6EC] text-[#15803D]"
      : "bg-[#FFEDD4] text-[#CA3500]";

  const difficultyStyles =
    difficulty === "Hard"
      ? "bg-[#FEE2E2] text-[#DC2626]"
      : "bg-[#DBEAFE] text-[#2563EB]";

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow p-4">

      
      <div className="flex justify-between items-start gap-2">
        <div>
          <h1 className="font-inter font-medium text-[16px] leading-[24px]">
            {title}
          </h1>
          <p className="text-[14px] text-gray-600">{paper}</p>

          {type === "test" && difficulty && (
            <div
              className={`inline-block mt-2 px-2 py-0.5 rounded-full ${difficultyStyles}`}
            >
              <p className="text-[10px] font-medium uppercase">
                {difficulty}
              </p>
            </div>
          )}
        </div>

        {tagText && (
          <div className={`px-3 py-1 rounded-full ${tagStyles}`}>
            <p className="text-[12px] font-medium">{tagText}</p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        {stats.map((item, i) => {
          const Icon = statIcons[item.label] || AiOutlineClockCircle;
          return (
            <div
              key={i}
              className="bg-[#F5F7FA] rounded-md px-3 py-3 flex flex-col items-center justify-center text-center"
            >
              {type === "test" && (
                <Icon size={20} className="text-gray-500 mb-1" />
              )}
              <h2 className="text-[16px] font-medium">{item.no}</h2>
              <p className="text-[12px] text-gray-500">{item.label}</p>
            </div>
          );
        })}
      </div>
      {type === "test" && status === "completed" && (
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 py-4 rounded-md"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,96,41,0.05) 0%, rgba(22,52,78,0.05) 100%)",
          }}
        >
          {resultStats.map((item, i) => (
            <div key={i} className="text-center">
              <h3 className="text-[16px] font-semibold">{item.value}</h3>
              <p className="text-[12px] text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>
      )}
      <div className="mt-6">
        {type === "test" ? (
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href={
                status === "completed"
                  ? "/test-series/result-details"
                  : "/test-series/instructions"
              }
              className="w-full sm:w-1/2"
            >
              <button className="w-full border border-gray-300 text-gray-700 font-medium text-[16px] py-3 rounded-lg hover:bg-gray-100">
                {status === "completed"
                  ? "View Results"
                  : "View Instructions"}
              </button>
            </Link>

            <Link href="/test-series/start-test" className="w-full sm:w-1/2">
              <Button className="w-full bg-[var(--color-accent-orange)] hover:bg-[#ff6a33] text-white font-medium text-[16px] py-3 rounded-lg">
                {status === "completed" ? "Reattempt" : "Start Test"}
              </Button>
            </Link>
          </div>
        ) : (
          <Link href="/course/details" className="block w-full">
            <Button className="w-full bg-[var(--color-accent-orange)] text-white font-medium text-[16px] py-3 rounded-lg">
              Start Test
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CardPrelims;
