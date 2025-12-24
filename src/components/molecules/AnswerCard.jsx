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
    <div className="w-full p-7 rounded-2xl border border-gray-200 bg-white px-8 mt-5">
     
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-3">
        {selectedAnswer && (
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 mt-1 flex items-center justify-center rounded-full text-[18px] bg-gray-100 text-gray-700 text-sm font-extralight">
              {number}
            </div>
            <span
              className={`px-3 py-0.5 rounded-lg text-white font-inter font-medium text-[14px] 
                ${
                  selectedAnswer === correctAnswer
                    ? "bg-[#00A63E]"
                    : "bg-red-500"
                }`}
            >
              {selectedAnswer === correctAnswer ? "Correct" : "Incorrect"}
            </span>
          </div>
        )}

        <div className="flex gap-2">
          <span className="text-gray-950 font-inter text-[15px] border border-gray-400 px-3 rounded-lg">
            {category} 
          </span>
          <span className="text-green-600 font-inter text-[15px] border border-green-200 px-3 rounded-lg">
            {difficulty}
          </span>
        </div>
      </div>

     
      <p className="font-inter font-normal pt-2.5 text-[21px] mb-7 text-gray-900">
        {question}
      </p>

     
      <div className="flex flex-col  gap-2">
        {options.map((option, index) => {
          const isCorrect = option === correctAnswer;
          const isSelected = option === selectedAnswer;

          return (
            <div
              key={index}
              className={`
                flex items-center py-5 justify-between p-3 rounded-xl border w-full
                ${
                  isCorrect
                    ? "border-3 border-green-500 bg-green-50"
                    : "border-3 border-gray-200"
                }
                ${isSelected && !isCorrect ? "border-red-500 bg-red-50" : ""}
              `}
            >
              <div className="flex items-center">
                <div
                  className={`
                    flex items-center justify-center w-10 h-10 rounded-full font-medium text-[14px] mr-3
                    ${
                      isCorrect
                        ? "border-3 border-gray-300 text-black"
                        : isSelected
                        ? "border-3  border-gray-300 text-black"
                        : "border-3 border-gray-300 text-black"
                    }
                  `}
                >
                  {String.fromCharCode(65 + index)}
                </div>

                <p className="font-inter text-[20px] text-gray-900">
                  {option}
                </p>
              </div>
              <div className="text-sm font-medium">
                {isCorrect && (
                  <span className="text-green-600 flex items-center gap-1">
                    ✔ Correct Answer
                  </span>
                )}

                {isSelected && !isCorrect && (
                  <span className="text-red-600 flex items-center gap-1">
                    ✖ Your Answer
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {explanation && (
        <div className="mt-4 p-4 py-6 px-5 bg-[#EFF6FF] text-[14px] text-gray-700 rounded-md border-l-4 border-l-red-500">
          <span className="font-medium text-[19px]  tracking-[-0.31px]">
            Explanation
          </span>
          <br />
          <p className="mt-2 text-[19px]">{explanation}</p>
        </div>
      )}
    </div>
  );
};

export default AnswerCard;
