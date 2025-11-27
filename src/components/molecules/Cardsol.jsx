import Image from "next/image";
import React from "react";

const Cardsol = ({ img, title, no, color }) => {
  return (
    <div className={`flex item-center p-4 rounded-lg gap-3 ${color}`}>
      <div className="flex items-center">
        <Image src={img} height={27} width={27} alt="icon.png" />
      </div>
      <div>
        <p class="font-inter font-normal text-[14px] leading-[20px] tracking-[-0.15px]">
          {title}
        </p>
        <p class="font-inter font-normal text-[24px] leading-[32px] tracking-[0.07px]">
          {no}
        </p>
      </div>
    </div>
  );
};

export default Cardsol;
