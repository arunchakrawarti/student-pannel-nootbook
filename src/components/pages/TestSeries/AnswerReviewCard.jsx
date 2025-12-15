import React from "react";
import AnswerCard from "../../molecules/AnswerCard";
import answerdata from "../../../../public/db/answerdata.json";

const AnswerReviewCard = () => {
  return (
    <div className="flex flex-col items-center">
      {answerdata.map((data, index) => (
        <AnswerCard
          key={index}
          number={index + 1}
          question={data.question}
          options={data.options}
          correctAnswer={data.correctAnswer}
          selectedAnswer={data.selectedAnswer}
          category={data.category}
          difficulty={data.difficulty}
          explanation={data.explanation}
        />
      ))}
    </div>
  );
};

export default AnswerReviewCard;
