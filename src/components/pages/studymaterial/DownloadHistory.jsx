import React from "react";
import Card8 from "../../molecules/Card8"; 
import pdf from "../../../../public/db/pdf.json"; 

const DownloadHistory = () => {
  return (
    <div className="mt-5">
      
      <h1 className="font-inter font-normal text-[16px] tracking-[-0.31px]">
        All Materials
      </h1>

      <div className="mt-4 space-y-4">
        {pdf.map((item, index) => (
          <Card8
            key={index}
            data={item} 
            type={item.type} 
          />
        ))}
      </div>

    </div>
  );
};

export default DownloadHistory;