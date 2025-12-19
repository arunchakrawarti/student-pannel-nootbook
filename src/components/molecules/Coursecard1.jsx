import React from "react";

const Coursecard1 = ({ items }) => {
  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={index} className="flex items-start gap-2">
          
          
          <span className="mt-2 w-2 h-2 rounded-full bg-orange-500"></span>

          
          <p className="text-[16px] text-gray-600 font-inter">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Coursecard1;
