import React from "react";
import Card6 from "../../molecules/Card6"; 
import document from "../../../../public/db/document.json"

const Document = () => {
  return (
  
  <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-1 mt-6  lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {document.map((doc) => (
          <Card6
            key={doc.id}
            title={doc.title}
            subjectTag={doc.subjectTag}
            pages={doc.pages}
            size={doc.size}
            uploaded={doc.uploaded}
            downloads={doc.downloads}
            cardBgColor={doc.cardBgColor}
            iconBgColor={doc.iconBgColor}
            tagBgColor={doc.tagBgColor}
            tagTextColor={doc.tagTextColor}
            
          />
        ))}
      </div>
   
  );
};

export default Document;