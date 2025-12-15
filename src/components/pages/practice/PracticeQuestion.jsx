"use client";
import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { CiCircleRemove } from "react-icons/ci";
import { Button } from "@/components/comman/Button";

const PracticeQuestion = ({ currentQuestion = 1, totalQuestions = 5 }) => {
  const progressPercentage = (currentQuestion / totalQuestions) * 100;

  const options = [
    { text: "Harappa", isCorrect: false },
    { text: "Mohenjo-daro", isCorrect: false },
    { text: "Dholavira", isCorrect: true },
    { text: "Lothal", isCorrect: false },
  ];

  return (
    <div className="px-2 sm:px-4 md:px-6 lg:px-8 py-4">
      {/* Top navigation & progress */}
      <div className="p-4 shadow rounded-md bg-white w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2 sm:gap-0">
          <button className="text-gray-500 font-medium text-sm sm:text-base">
            &larr; Back to Topics
          </button>
          <span className="text-gray-500 text-sm sm:text-base mt-1 sm:mt-0">
            Question {currentQuestion} of {totalQuestions}
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
          <div
            className="h-2 bg-orange-500 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Question Card */}
      <div className="max-w-2xl w-full mx-auto p-4 sm:p-6 mt-4 bg-white rounded-lg shadow-md">
        {/* Difficulty + stats */}
        <div className="mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
          <span className="px-3 py-1 rounded-md text-sm font-medium bg-orange-500 text-white">
            Medium
          </span>

          <div className="flex gap-4 mt-2 sm:mt-0">
            <div className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base">
              <IoMdCheckmarkCircleOutline size={20} className="text-green-600" />
              <p>0</p>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base">
              <CiCircleRemove size={20} className="text-red-600" />
              <p>1</p>
            </div>
          </div>
        </div>

        {/* Question */}
        <h2 className="text-gray-900 text-base sm:text-lg md:text-xl font-medium mb-4">
          Which Indus Valley Civilization site is known for its advanced water management system?
        </h2>

        {/* Options */}
        <div className="space-y-2 mb-4">
          {options.map((option, index) => (
            <p
              key={index}
              className={`w-full flex justify-between items-center px-3 sm:px-4 py-2 rounded border text-sm sm:text-base ${
                option.isCorrect
                  ? "border-green-500 bg-green-100 cursor-not-allowed"
                  : option.text === "Mohenjo-daro"
                  ? "border-red-500 bg-red-100 cursor-not-allowed"
                  : "border-gray-300 bg-white cursor-pointer hover:bg-gray-50"
              } text-gray-800`}
            >
              {option.text}
              {option.isCorrect && <IoMdCheckmarkCircleOutline size={20} />}
              {!option.isCorrect && option.text === "Mohenjo-daro" && (
                <CiCircleRemove size={20} />
              )}
            </p>
          ))}
        </div>

        {/* Info Box */}
        <div className="flex items-start bg-gray-50 p-3 rounded mb-4 border-l-4 border-blue-500 text-sm sm:text-base">
          <span className="mr-2 text-blue-500 font-bold">i</span>
          <p className="text-gray-700">
            Dholavira is renowned for its sophisticated water conservation and harvesting system, featuring reservoirs, dams, and an intricate water management network.
          </p>
        </div>

        {/* Next Button */}
        <div className="mt-2">
          <Button className="w-full text-white px-4 py-2">
            Next Question
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PracticeQuestion;
