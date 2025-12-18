"use client";
import React from "react";
import { Button } from "@/components/comman/Button";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { CiCircleRemove } from "react-icons/ci";

const NextQuestion = ({ currentQuestion = 2, totalQuestions = 5 }) => {
  const progressPercentage = (currentQuestion / totalQuestions) * 100;

  const options = [
    { text: "Lord Wellesley", status: "normal" },
    { text: "Lord Dalhousie", status: "wrong" },
    { text: "Lord Cornwallis", status: "normal" },
    { text: "Lord William Bentinck", status: "normal" },
  ];

  return (
    <div className="px-3 sm:px-6 lg:px-10 py-4">
      {/* Top Bar */}
      <div className="p-3 sm:p-4 bg-white rounded-md shadow">
        <div className="flex flex-col sm:flex-row justify-between gap-2 text-xs sm:text-sm text-gray-500 mb-2">
          <button className="text-left">&larr; Back to Topics</button>
          <span className="text-left sm:text-right">
            Question {currentQuestion} of {totalQuestions}
          </span>
        </div>

        <div className="w-full h-1.5 sm:h-2 bg-gray-200 rounded-full">
          <div
            className="h-1.5 sm:h-2 bg-orange-400 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="max-w-full sm:max-w-xl md:max-w-2xl mx-auto mt-4 bg-white rounded-lg shadow p-4 sm:p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
          <span className="px-3 py-1 text-xs sm:text-sm rounded bg-orange-500 text-white">
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

        {/* Question */}
        <h2 className="text-gray-900 text-sm sm:text-base md:text-lg font-medium mb-4 leading-relaxed">
          The doctrine of 'Lapse' was introduced by which Governor-General?
        </h2>

        {/* Options */}
        <div className="space-y-2 sm:space-y-3">
          {options.map((option, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded border border-gray-200"
            >
              {option.status === "wrong" && (
                <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-red-500 flex-shrink-0" />
              )}

              <span className="text-gray-800 text-sm sm:text-base">
                {option.text}
              </span>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-3 mt-6">
          <Button className="bg-white border text-gray-500 w-full sm:w-auto px-8 sm:px-23 md:px-30">
            Skip
          </Button>
          <Button className="text-white w-full bg-orange-200 sm:w-auto px-8 sm:px-23 md:px-30">
            Submit Answer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NextQuestion;
