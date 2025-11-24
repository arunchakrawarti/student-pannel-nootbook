import React from "react";
import Card1 from "../../molecules/Card1";
import data from "../../../../public/db/data.json";
import Card2 from "../../molecules/Card2";
import Image from "next/image";

const cardData = [
  {
    id: 1,
    title: "Prelims Mock 14",
    score: 142,
    total: 200,
    percentile: "89%",
  },
  {
    id: 2,
    title: "History Chapter Test",
    score: 45,
    total: 50,
    percentile: "95%",
  },
];

const Pending = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mt-5">
      
     
      <div className="flex flex-col gap-4 bg-white border border-gray-300 rounded-md p-4">
        <div className="flex gap-2 items-center">
          <Image src="/img/icon1.png" height={20} width={20} alt="icon.png" />
          <p className="font-inter font-normal text-[16px] leading-[16px] tracking-[-0.31px]">
            Pending Tests
          </p>
        </div>

        {data.map((item) => (
          <Card1
            key={item.id}
            title={item.title}
            description={item.description}
            days={item.days}
            Question={item.Question}
          />
        ))}
      </div>
      
      <div className="flex flex-col gap-4 bg-white border border-gray-300 rounded-md p-4">
        <div className="flex gap-2 items-center">
          <Image src="/img/icon2.png" height={20} width={20} alt="icon.png" />
          <p className="font-inter font-normal text-[16px] leading-[16px] tracking-[-0.31px]">
            Recent Results
          </p>
        </div>

        {cardData.map((item) => (
          <Card2
            key={item.id}
            title={item.title}
            score={item.score}
            total={item.total}
            percentile={item.percentile}
          />
        ))}

        <div className="text-center border border-gray-500 rounded-md py-2">
          <button>View All Result</button>
        </div>
      </div>
    </div>
  );
};

export default Pending;
