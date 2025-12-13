import React from 'react';
import { CiCircleCheck } from "react-icons/ci";


const writingTipsData = {
  "title": "Writing Tips",
  "tips": [
    "Start with a clear introduction that addresses the question directly",
    "Use relevant examples and recent data to support your arguments",
    "Maintain a balanced perspective while presenting your views",
    "Conclude with a forward-looking solution or summary"
  ]
};

const WritingTips = ({ data = writingTipsData }) => {
  return (
    <div className="p-4 mt-4 sm:p-5 bg-white rounded-lg shadow-md border border-gray-100 w-full ">
      <h3 className="font-inter font-semibold text-lg sm:text-xl text-[#1E293B] mb-4">
        {data.title}
      </h3>
      <ul className="space-y-3">
        {data.tips.map((tip, index) => (
          <li key={index} className="flex items-start gap-2">
            <CiCircleCheck size={20} className='text-green-400 '/>

            <p className="font-inter text-base text-[#475569] leading-relaxed">
              {tip}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default WritingTips;