import React from "react";

const AnswerCard = ({
  number,
  question,
  options = [],
  correctAnswer,
  selectedAnswer,
  category = "Indian Polity",
  difficulty = "Easy",
  explanation = "",
}) => {
  return (
    <div className="w-full p-4 rounded-lg border border-gray-300 bg-white mt-5">
      <div className="flex justify-between items-center mb-3">
        {selectedAnswer && (
          <div className="flex items-center gap-2">
            {/* Dynamic Number */}
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 text-sm font-medium">
              {number}
            </div>

            {/* Status Badge */}
            <span
              className={`px-2 py-1 rounded text-white text-[12px] font-medium
                ${
                  selectedAnswer === correctAnswer
                    ? "bg-green-500"
                    : "bg-red-500"
                }`}
            >
              {selectedAnswer === correctAnswer ? "Correct" : "Incorrect"}
            </span>
          </div>
        )}

        <div className="flex gap-2">
          <span className="text-gray-950 text-[12px] border border-gray-400 px-2 rounded-md">
            {category}
          </span>
          <span className="text-green-600 text-[12px] border border-green-200 px-2 rounded">
            {difficulty}
          </span>
        </div>
      </div>

      <p className="font-inter font-normal text-[16px] leading-[24px] mb-4 text-gray-900">
        {question}
      </p>

      <div className="flex flex-col gap-2">
        {options.map((option, index) => {
          const isCorrect = option === correctAnswer;
          const isSelected = option === selectedAnswer;

          return (
            <div
              key={index}
              className={`
                flex items-center p-3 rounded-lg border w-full cursor-pointer
                ${
                  isCorrect
                    ? "border-green-500 bg-green-50"
                    : "border-gray-200 bg-white"
                }
                ${isSelected && !isCorrect ? "border-red-500 bg-red-50" : ""}
              `}
            >
              <div
                className={`
                  flex items-center justify-center w-8 h-8 rounded-full font-medium text-[14px] mr-3
                  ${
                    isCorrect
                      ? "bg-green-500 text-white"
                      : "bg-gray-100 text-gray-700"
                  }
                `}
              >
                {String.fromCharCode(65 + index)}
              </div>

              <p className="font-inter text-[16px] leading-[24px] text-gray-900">
                {option}
              </p>
            </div>
          );
        })}
      </div>

      {explanation && (
        <div className="mt-4 p-3 bg-[#EFF6FF] rounded text-[14px] text-gray-700 border-l-2 border-l-red-500">
          <span className="font-medium text-[16px] leading-6 tracking-[-0.31px]">
            Explanation
          </span>
          <br />
          {explanation}
        </div>
      )}
    </div>
  );
};

export default AnswerCard;
