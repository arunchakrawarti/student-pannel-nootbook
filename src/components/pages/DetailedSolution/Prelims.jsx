import Cardsol from "@/components/molecules/Cardsol";
import Array from "../../../../public/db/Array.json"
import React from "react";

const Prelims = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mt-5">
      <div>
        <h1 class="font-inter mt-4 font-normal text-[16px] leading-[16px] tracking-[-0.31px]">
          Prelims Mock Test 15 - Solutions
        </h1>
        <p class="font-inter mt-2 font-normal text-[14px] leading-[20px] tracking-[-0.15px]">
          Detailed solutions with explanations
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 mt-6 md:grid-cols-3 lg:grid-cols-3 gap-2">
        {Array.map((item, i) => {
          return (
            <Cardsol
              img={item.img}
              title={item.title}
              no={item.no}
              color={item.color}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Prelims;
