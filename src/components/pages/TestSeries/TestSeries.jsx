import Card9 from "@/components/molecules/Card9";
import React from "react";
import test from "../../../../public/db/test.json";

const TestSeries = () => {
  return (
    <div className="mt-3">
      <div>
        <h1 className="font-inter font-medium text-[24px] leading-[36px] tracking-[0.07px]">
        Test Series
      </h1>
      <p className="font-inter font-normal text-[16px] leading-[24px] tracking-[-0.31px]">
        Attempt tests and track your performance
      </p>
      </div>
        <div className="grid mt-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {test.map((item, i) => {
        return (
          <Card9
            key={i}
            
            iconSrc={item.img}           
            value={item.title}          
            label={item.description}     
            colorClass={item.color}     
            imagePosition={item.imagePosition} 
            reverseText={item.reverseText}    
          />
        );
      })}
    </div>
    </div>
  );
};

export default TestSeries;
