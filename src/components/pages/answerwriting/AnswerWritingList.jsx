"use client"
import React, { useState } from "react";
import answerwriting from "../../../../public/db/answerwriting.json";
import AnswerPracticeCard from "@/components/molecules/AnswerPracticeCard";



const AnswerWritingList = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  return (
    <div>
      <div className="mt-8 w-full sm:w-[470px] bg-gray-100 rounded-full p-1 flex items-center justify-between">
        <button
          onClick={() => setActiveTab("All Questions")}
          className={`flex-1 text-center py-2 rounded-full text-[16px] font-semibold transition-all
      ${activeTab === "All Questions"
              ? "bg-white text-black"
              : "text-gray-700"
            }`}
        >
          All Questions
        </button>
        <button
          onClick={() => setActiveTab("Pending")}
          className={`flex-1 text-center py-2 rounded-full text-[16px] font-semibold transition-all
      ${activeTab === "Pending"
              ? "bg-white text-black"
              : "text-gray-700"
            }`}
        >
          Pending
        </button>
        <button
          onClick={() => setActiveTab("Evaluated")}
          className={`flex-1 text-center py-2 rounded-full text-[16px] font-semibold transition-all
      ${activeTab === "Evaluated"
              ? "bg-white text-black"
              : "text-gray-700"
            }`}
        >
          Evaluated
        </button>
      </div>

      <div className="flex flex-col gap-4 mt-10">
        {answerwriting.map((item, index) => (
          <AnswerPracticeCard
            key={index}
            data={item}
            type={item.type}
          />
        ))}
      </div>
    </div>
  );
};

export default AnswerWritingList;
