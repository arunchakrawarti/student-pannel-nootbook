import React from "react";

const SubjectCard1 = ({ subject, correct, wrong, small, progress }) => {
  return (
    <div className="w-full">
      <div className="flex justify-between  items-center mb-1">
        <p className="font-inter mt-4 text-[14px] text-gray-700">{subject}</p>

        <p className="font-inter text-[14px] text-gray-700">
          {correct}
        </p>
      </div>

      <div className="relative mt-2 w-full h-2 rounded-full bg-orange-100">
        <div
          className="h-2 bg-orange-500 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      {/* <p className="text-[15px] text-gray-400 -mt-4 mr-5 scale-z-75 text-right">{small}</p> */}
    </div>
  );
};

export default SubjectCard1;
