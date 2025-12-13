"use client"
import React, { useState } from "react";
import answerwriting from "../../../../public/db/answerwriting.json";
import Card8 from "@/components/molecules/Card8";
import { Button } from "@/components/comman/Button";

const AnswerWritingList = () => {
    const [activeTab, setActiveTab] = useState("upcoming");
  return (
    <div>
        <div className="flex flex-wrap sm:flex-nowrap gap-4 mt-4 sm:gap-8 items-center bg-gray-50 w-full sm:w-[370px] rounded-md shadow">
              <Button
                onClick={() => setActiveTab("All Questions")}
                className={`cursor-pointer  ${
                  activeTab === "All Questions" ? "bg-gray-200" : "bg-transparent"
                }`}
              >
                All Questions
              </Button>
              <Button
                onClick={() => setActiveTab(" Pending")}
                className={`cursor-pointer  ${
                  activeTab === " Pending" ? "bg-gray-200" : "bg-transparent"
                }`}
              >
               Pending
              </Button>
              <Button
                onClick={() => setActiveTab(" Evaluated")}
                className={`${
                  activeTab === " Evaluated" ? "bg-gray-200" : "bg-transparent"
                }`}
              >
               Evaluated
              </Button>
            </div>  
    <div className="flex flex-col gap-4 mt-5">
      {answerwriting.map((item,index) => (
        <Card8 
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
