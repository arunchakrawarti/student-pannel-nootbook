"use client";
import React from "react";
import Subject1 from "../../../../public/db/Subject1.json";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import SubjectCard1 from "@/components/molecules/SubjectCard1";

const data = [
  { name: "History", value: 75, color: "#0D3559" },
  { name: "Polity", value: 80, color: "#FF6A2E" },
  { name: "Science", value: 70, color: "#8A5CF6" },
  { name: "Economy", value: 62, color: "#F7A400" },
  { name: "Geo", value: 78, color: "#18B67F" },
];

const Subject = () => {
  return (
    <div className="w-full flex mt-5 flex-col md:flex-col lg:flex-row gap-5">
      
      <div className="w-full lg:w-[40%] bg-white rounded-xl  border border-gray-300 p-5">
        <h2 className="font-inter font-medium text-[18px] text-gray-900">
          Subject-wise Scores
        </h2>

        <div className="mt-4 w-full h-[300px] sm:h-[340px] md:h-[360px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius="70%"
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
                labelLine={false}
              >
                {data.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

     
      <div className="w-full lg:w-[60%] space-y-4 border border-gray-300 rounded-md p-4">
        <h1 className="font-inter font-medium text-[18px] leading-[16px] mt-5 tracking-[-0.31px]">
          Subject-wise Performance
        </h1>

        {Subject1.map((item, index) => (
          <SubjectCard1
            key={index}
            subject={item.subject}
            correct={item.correct}
            small={item.small}
            progress={item.progress}
          />
        ))}
      </div>
    </div>
  );
};

export default Subject;
