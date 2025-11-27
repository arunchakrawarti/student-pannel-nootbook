"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const data1 = [
  { month: "Jun", value: 55 },
  { month: "Jul", value: 62 },
  { month: "Aug", value: 70 },
  { month: "Sep", value: 74 },
  { month: "Oct", value: 78 },
  { month: "Nov", value: 82 },
];

const data = [
  { day: "Mon", value: 4 },
  { day: "Tue", value: 6 },
  { day: "Wed", value: 6 },
  { day: "Thu", value: 7 },
  { day: "Fri", value: 5 },
  { day: "Sat", value: 8 },
  { day: "Sun", value: 7 },
];

const Weekly = () => {
  return (
    <div
      className="
        flex flex-col lg:flex-row 
        gap-5 w-full
      "
    >
      {/* WEEKLY BAR CHART */}
      <div className="w-full bg-white rounded-xl shadow-sm p-5">
        <h2 className="font-inter font-medium text-[18px] text-gray-900">
          Weekly Study Time
        </h2>

        {/* Responsive Height for all devices */}
        <div className="mt-4 h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="day" tick={{ fontSize: 12 }} />
              <YAxis domain={[0, 12]} tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="value" radius={[4, 4, 4, 4]} fill="#FF6A2E" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 bg-[#F4F7FB] py-3 px-4 rounded-lg flex flex-col lg:flex-row justify-between items-center">
          <p className="font-inter text-[14px] text-gray-600">
            Total this week
          </p>
          <p className="font-inter font-medium text-[16px] text-gray-900">
            44.2 hours
          </p>
        </div>
      </div>

      {/* PERFORMANCE TREND LINE CHART */}
      <div className="w-full bg-white rounded-xl shadow-sm p-5">
        <h2 className="font-inter font-medium text-[18px] text-gray-900">
          Performance Trend
        </h2>

        {/* Responsive Height */}
        <div className="mt-4 h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data1}>
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#0D3559"
                strokeWidth={3}
                dot={{ r: 5, fill: "#0D3559" }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 bg-[#F8F5F3] py-3 px-4 rounded-lg flex flex-col lg:flex-row justify-between items-center">
          <p className="font-inter text-[14px] text-gray-600">Improvement</p>
          <p className="font-inter font-medium text-[16px] text-[#00A63E]">
            +23% from June
          </p>
        </div>
      </div>
    </div>
  );
};

export default Weekly;
