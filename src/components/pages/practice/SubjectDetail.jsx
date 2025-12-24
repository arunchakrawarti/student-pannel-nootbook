import Card6 from "@/components/molecules/DocumentCard";
import React from "react";
import subjectCards from "../../../../public/db/subjectCards.json";

const SubjectDetail = () => {
  return (
    <div>
      <h1 className="font-inter font-normal mt-4 text-[20px] leading-[28px] tracking-[-0.45px] mb-4">
        Select Subject
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjectCards.map((card) => (
          <Card6
            key={card.id}
            variant={card.variant}
            title={card.title}
            icon={card.icon}
            iconBgColor={card.iconBgColor}
            cardBgColor={card.cardBgColor}
            accuracyText={card.accuracyText}
            accuracyBgColor={card.accuracyBgColor}
            accuracyTextColor={card.accuracyTextColor}
            questions={card.questions}
            attempted={card.attempted}
            progress={card.progress}
            dividerColor={card.dividerColor}
          />
        ))}
      </div>
    </div>
  );
};

export default SubjectDetail;
