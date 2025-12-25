import React from "react";

import testresult from "../../../../public/db/testresult.json";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
import Image from "next/image";
import Link from "next/link";
import TestSeriesCard from "@/components/molecules/TestSeriesCard";
import { TfiCup } from "react-icons/tfi";

import TestResultCard from "@/components/molecules/TestResultCard";

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

const TestOverview = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
      
     
      <div className="flex flex-col gap-4 bg-white border border-gray-200 rounded-2xl p-6">
        <div className="flex gap-2 items-center">
          <HiOutlineDocumentCheck  size={24} className="text-[var(--color-accent-orange)]"/>

          <p className="font-inter font-normal text-[19px]  tracking-[-0.31px]">
            Pending Tests
          </p>
        </div>

        {testresult.map((item) => (
          <TestSeriesCard
            key={item.id}
            title={item.title}
            description={item.description}
            days={item.days}
            Question={item.Question}
          />
        ))}
      </div>
      
      <div className="flex flex-col gap-4 bg-white border border-gray-200 rounded-2xl p-6">
        <div className="flex mb-4 gap-3 items-center">
          <TfiCup size={20} className="text-[var(--color-accent-orange)]" />

          <p className="font-inter font-normal text-[19px]   tracking-[-0.31px]">
            Recent Results
          </p>
        </div>

        {cardData.map((item) => (
          <TestResultCard
            key={item.id}
            title={item.title}
            score={item.score}
            total={item.total}
            percentile={item.percentile}
          />
        ))}

        <div className="text-center mx-3 border border-gray-500 text-[#16344E] rounded-lg py-2 font-inter font-medium text-[20px]">
          <Link href='test-series'>
          <button>View All Result</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestOverview;
