import React from "react";
import Card8 from "../../molecules/Card8"; 
import pdf from "../../../../public/db/pdf.json"; 

const AllMaterial = () => {
  return (
    <div className="mt-5 bg-white p-4 sm:p-6 md:p-0">
      
      <h1 className="font-inter font-normal text-[16px] leading-[24px] tracking-[-0.31px]">
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

export default AllMaterial;