import React from "react";
import Card9 from "../../molecules/BaseCard";
import examcard from "../../../../public/db/examcard.json";

const ExamCard = () => {
  return (
    <div className="grid grid-cols-1 gap-4 mt-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {examcard.map((item) => (
        <Card9
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