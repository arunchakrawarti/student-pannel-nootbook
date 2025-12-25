import DocumentCard from "@/components/molecules/DocumentCard";
import React from "react";
import subjectCards from "../../../../public/db/subjectCards.json";

const SubjectDetail = () => {
  return (
    <div>
      <h1 className="font-inter font-normal mt-8 text-[22px] text-[#16344E] tracking-[-0.45px] mb-4">
        Select Subject
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 gap-6">
        {subjectCards.map((card) => (
          <DocumentCard
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
