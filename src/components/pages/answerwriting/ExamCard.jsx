import React from "react";
import BaseCard from "../../molecules/BaseCard";
import examcard from "../../../../public/db/examcard.json";

const ExamCard = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:gap-8 mt-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {examcard.map((item) => (
        <BaseCard
          key={item.id}
          iconSrc={item.iconSrc}
          value={item.value}
          label={item.label}
          colorClass={item.colorClass}
          imagePosition={item.imagePosition}
          reverseText={item.reverseText}
          isFullColorCard={item.isFullColorCard}
          iconHeight={item.iconHeight}
          iconWidth={item.iconWidth}
        />
      ))}
    </div>
  );
};

export default ExamCard;