import React from "react";
import examcard1 from "../../../../public/db/examcard1.json"
import BaseCard from "@/components/molecules/BaseCard";

const ExamCategory = () => {
  return (
    <div className="grid grid-cols-1 gap-4 mt-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {examcard1.map((item) => (
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

export default ExamCategory;