// "use client";
// import React from "react";
// import { IoMdCheckmarkCircleOutline } from "react-icons/io";
// import { CiCircleRemove } from "react-icons/ci";
// import Button from "@/components/comman/Button";


// const PracticeQuestion = ({ currentQuestion = 1, totalQuestions = 5 }) => {
//   const progressPercentage = (currentQuestion / totalQuestions) * 100;

//   const options = [
//     { text: "Harappa", isCorrect: false },
//     { text: "Mohenjo-daro", isCorrect: false },
//     { text: "Dholavira", isCorrect: true },
//     { text: "Lothal", isCorrect: false },
//   ];

//   return (
//     <div className="">
//       <div className="p-4 shadow rounded-md  px-40 -mt-8 bg-white w-full">
//         <div className="flex flex-col mt-1 sm:flex-row justify-between items-start sm:items-center mb-2 gap-2 sm:gap-0">
//           <button className="text-gray-500 font-medium text-sm sm:text-base">
//             &larr; Back to Topics
//           </button>
//           <span className="text-gray-500 text-sm sm:text-base mt-1 sm:mt-0">
//             Question {currentQuestion} of {totalQuestions}
//           </span>
//         </div>
//         <div className="w-full h-2 bg-red-100 rounded-full mt-6">
//           <div
//             className="h-2 bg-[var(--color-accent-orange)] rounded-full transition-all duration-300"
//             style={{ width: `${progressPercentage}%` }}
//           ></div>
//         </div>
//       </div>

//       <div className="max-w-[910px] w-full mx-auto p-4 sm:p-6 mt-8 bg-white rounded-2xl border border-gray-200">
//         <div className="mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
//           <span className="px-3 py-0.5 rounded-xl text-sm bg-[var(--color-accent-orange)] text-white">
//             Medium
//           </span>

//           <div className="flex gap-4 mt-2 sm:mt-0">
//             <div className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base">
//               <IoMdCheckmarkCircleOutline size={20} className="text-green-600" />
//               <p>0</p>
//             </div>
//             <div className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base">
//               <CiCircleRemove size={20} className="text-red-600" />
//               <p>1</p>
//             </div>
//           </div>
//         </div>
//         <h2 className="text-[var(--color-accent-blue)] font-inter font-normal text-[21px] tracking-[-0.45px]  mb-4">
//           Which Indus Valley Civilization site is known for its advanced water management system?
//         </h2>
//         <div className="space-y-3 mb-4">
//           {options.map((option, index) => (
//             <p
//               key={index}
//               className={`w-full flex justify-between items-center px-3 sm:px-4 py-4 rounded-lg border text-sm font-semibold sm:text-[16px] ${
//                 option.isCorrect
//                   ? "border-green-600 border-2 bg-green-100 cursor-not-allowed"
//                   : option.text === "Mohenjo-daro"
//                   ? "border-red-600 border-2 bg-[#FEF2F2]     cursor-not-allowed"
//                   : "border-gray-300 border-2 bg-white cursor-pointer hover:bg-gray-50"
//               } text-gray-800`}
//             >
//               {option.text}
//               {option.isCorrect && <IoMdCheckmarkCircleOutline size={20} />}
//               {!option.isCorrect && option.text === "Mohenjo-daro" && (
//                 <CiCircleRemove size={20} />
//               )}
//             </p>
//           ))}
//         </div>
//         <div className=" items-start p-3  mb-4  text-sm sm:text-base bg-[#BEDBFF] border border-gray-200 rounded-lg">
//           <div className="flex items-center">
//             <span className="mr-2 text-[#1C398E] font-semibold">i</span>
//             <p className="text-[#1C398E] font-semibold">Explantion:</p>
//           </div>
//           <p className="font-inter font-normal mt-1 text-[16px] tracking-[-0.31px] text-[#1C398E]">
//             Dholavira is renowned for its sophisticated water conservation and harvesting system, featuring reservoirs, dams, and an intricate water management network.
//           </p>
//         </div>
//         <div className="mt-2">
//           <Button className="w-full text-white px-4 py-2">
//             Next Question
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PracticeQuestion;


"use client";
import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { CiCircleRemove } from "react-icons/ci";
import Button from "@/components/comman/Button";

const PracticeQuestion = ({ currentQuestion = 1, totalQuestions = 5 }) => {
  const progressPercentage = (currentQuestion / totalQuestions) * 100;

  const options = [
    { text: "Harappa", isCorrect: false },
    { text: "Mohenjo-daro", isCorrect: false },
    { text: "Dholavira", isCorrect: true },
    { text: "Lothal", isCorrect: false },
  ];

  return (
    <div className="w-full">
      <div className="p-4 sm:p-5 md:p-6 shadow rounded-md bg-white w-full
                      px-4 sm:px-8 md:px-20 lg:px-40 -mt-8">
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
      <div className="max-w-[910px] w-full mx-auto mt-6 sm:mt-8
                      p-4 sm:p-6 md:p-8
                      bg-white rounded-2xl border border-gray-200">
        <div className="mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <span className="px-3 py-0.5 rounded-xl text-sm bg-[var(--color-accent-orange)] text-white">
            Medium
          </span>

          <div className="flex gap-4">
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
        <h2
          className="text-[var(--color-accent-blue)] font-inter font-normal
                     text-[16px] sm:text-[18px] md:text-[21px]
                     tracking-[-0.45px] mb-4"
        >
          Which Indus Valley Civilization site is known for its advanced water
          management system?
        </h2>
        <div className="space-y-3 mb-4">
          {options.map((option, index) => (
            <p
              key={index}
              className={`w-full flex justify-between items-center
                px-3 sm:px-4 py-3 sm:py-5
                rounded-lg border-3
                text-sm sm:text-[16px] font-semibold
                ${
                  option.isCorrect
                    ? "border-green-600 bg-green-100 cursor-not-allowed"
                    : option.text === "Mohenjo-daro"
                    ? "border-red-600 bg-[#FEF2F2] cursor-not-allowed"
                    : "border-gray-300 bg-white cursor-pointer hover:bg-gray-50"
                }
                text-gray-800`}
            >
              {option.text}
              {option.isCorrect && <IoMdCheckmarkCircleOutline size={20} />}
              {!option.isCorrect && option.text === "Mohenjo-daro" && (
                <CiCircleRemove size={20} />
              )}
            </p>
          ))}
        </div>
        <div className="p-3 sm:p-4 mb-4 bg-[#EFF6FF] border border-gray-200 rounded-xl">
          <div className="flex items-center">
            <span className="mr-2 text-[#1C398E] font-semibold">i</span>
            <p className="text-[#1C398E] font-semibold">Explantion:</p>
          </div>
          <p className="font-inter font-normal mt-1
                        text-[14px] sm:text-[16px]
                        tracking-[-0.31px] text-[#1C398E]">
            Dholavira is renowned for its sophisticated water conservation and
            harvesting system, featuring reservoirs, dams, and an intricate
            water management network.
          </p>
        </div>
        <Button className="w-full text-white px-4 py-2 sm:py-3">
          Next Question
        </Button>
      </div>
    </div>
  );
};

export default PracticeQuestion;
