import Card7 from "@/components/molecules/Card7";
import Image from "next/image";
import React from "react";
import carddata from "../../../../public/db/carddata.json";
import { IoIosArrowRoundBack } from "react-icons/io";

const IndianPolitySubject = () => {
  return (
    <div className="">
      <div className="flex mt-3 gap-2 items-center cursor-pointer">
        <IoIosArrowRoundBack className="text-2xl sm:text-3xl" />
        <h3 className="font-inter font-medium text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] tracking-[-0.15px]">
          Back to Study Materials
        </h3>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-4">
        <div className="flex items-center justify-center bg-[#EFF6FF] border border-[#BEDBFF] rounded-md w-12 h-12 sm:w-12 sm:h-12 p-2">
          <Image
            src="/img/Material.png"
            height={32}
            width={32}
            className="object-contain"
            alt="material.png"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="font-inter font-medium text-[24px] sm:text-[28px] leading-[36px] sm:leading-[40px] tracking-[0.07px]">
            Indian Polity
          </h1>
          <p className="font-inter font-normal text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] tracking-[-0.31px]">
            10 study materials available
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      {carddata.map((card) => (
        <Card7
          key={card.id}
          img={card.imgSrc}
          title={card.title}
          no={card.no}
          iconColor={card.iconColor}
        />
      ))}
    </div>
    </div>
  );
};

export default IndianPolitySubject;
