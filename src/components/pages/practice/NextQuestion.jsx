"use client";
import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { CiCircleRemove } from "react-icons/ci";
import Button from "@/components/comman/Button";

const NextQuestion = ({ currentQuestion = 2, totalQuestions = 5 }) => {
  const progressPercentage = (currentQuestion / totalQuestions) * 100;

  const options = [
    { text: "Lord Wellesley", status: "normal" },
    { text: "Lord Dalhousie", status: "wrong" },
    { text: "Lord Cornwallis", status: "normal" },
    { text: "Lord William Bentinck", status: "normal" },
  ];

  return (
    <div className=" py-4">
      <div className="p-4 sm:p-5 md:p-6 shadow rounded-md bg-white w-full
                      px-4 sm:px-8 md:px-20 lg:px-40 -mt-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-2">
          <button className="text-gray-500 font-medium text-sm sm:text-base">
            ← Back to Topics
          </button>
          <span className="text-gray-500 text-sm sm:text-base">
            Question {currentQuestion} of {totalQuestions}
          </span>
        </div>

        <div className="w-full h-2 bg-red-100 rounded-full mt-4">
          <div
            className="h-2 bg-[var(--color-accent-orange)] rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>
      <div className="max-w-[910px]  mx-auto mt-8 bg-white rounded-xl shadow p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
          <span className="px-3 py-0.5 text-xs sm:text-sm rounded-lg  bg-orange-500 text-white">
            Easy
          </span>

          <div className="flex gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-1">
              <IoMdCheckmarkCircleOutline size={18} className="text-green-600" />
              <p>0</p>
            </div>
            <div className="flex items-center gap-1">
              <CiCircleRemove size={18} className="text-red-600" />
              <p>1</p>
            </div>
          </div>
        </div>
        <h2 className="font-inter font-normal text-[21px] tracking-[-0.45px] text-[var(--color-accent-blue)]">
          The doctrine of 'Lapse' was introduced by which Governor-General?
        </h2>
        <div className="space-y-2 mt-5 sm:space-y-3">
          {options.map((option, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-4 rounded-lg border-3 border-gray-200"
            >
              {option.status === "wrong" && (
                <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-red-500" />
              )}

              <span className="text-gray-800 text-sm sm:text-base">
                {option.text}
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-3 mt-6">
          <Button variant="danger" className="">
            Skip
          </Button>
          <Button className="text-white w-full bg-orange-200">
            Submit Answer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NextQuestion;
