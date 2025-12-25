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
    <div className="p-4 mt-6 sm:p-5 bg-white rounded-2xl border border-gray-200 w-full ">
      <h3 className="font-sans font-medium text-[17px] tracking-[-0.31px] mt-2 text-[#1E293B] mb-4">
        {data.title}
      </h3>
      <ul className="space-y-1 pt-5">
        {data.tips.map((tip, index) => (
          <li key={index} className="flex items-start gap-2">
            <CiCircleCheck size={20} className='text-green-400 '/>

            <p className="font-inter text-[15px] text-[#475569] leading-relaxed">
              {tip}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default WritingTips;