import React from "react";

const CardQuestion = ({ alphabet, title, status = 'default' }) => {

  const isSelected = status === 'selected';
  
  const cardClass = `
    flex items-center p-3 mt-2 rounded-lg shadow-sm w-full cursor-pointer 
    ${isSelected 
      ? 'border border-[#FF6029] bg-white' 
      : 'border border-gray-200 bg-white'  
    }
  `;
  
  const circleClass = `
    flex items-center justify-center w-8 h-8 rounded-full 
    font-inter font-medium text-[14px] leading-[20px] mr-3
    ${isSelected 
      ? 'bg-[#FF6029] text-white'     
      : 'bg-[#F5F7FA] text-gray-700'  
    }
  `;

  return (
    <div className={cardClass}>
      <div className={circleClass}>
        {alphabet}
      </div>

      <div>
        <p className="font-inter font-normal text-[16px] leading-[24px] tracking-[-0.31px] text-gray-900">
          {title}
        </p>
      </div>
    </div>
  );
};

export default CardQuestion;