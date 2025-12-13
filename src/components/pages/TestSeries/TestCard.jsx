import Card9 from "@/components/molecules/Card9";
import React from "react";
// Assuming the updated JSON file is now imported as 'test'
import test from "../../../../public/db/test.json"; 

const TestCard = () => {
  return (
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
  );
};

export default TestCard;