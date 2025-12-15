import React from "react";
import document from "../../../../public/db/document.json";
import Card6 from "@/components/molecules/Card6";

const SubjectCategory = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-6">
      {document.map((card) => (
        <Card6
          key={card.id}               
          variant="pdf"               
          title={card.title}
          icon={card.icon}
          accuracyText={card.accuracyText}
          accuracyBgColor={card.accuracyBgColor}
          accuracyTextColor={card.accuracyTextColor}
          pages={card.pages}
          size={card.size}
          uploaded={card.uploaded}
          downloads={card.downloads}
          cardBgColor={card.cardBgColor}
          iconBgColor={card.iconBgColor}
          buttonColor={card.buttonColor}  
        />
      ))}
    </div>
  );
};

export default SubjectCategory;
