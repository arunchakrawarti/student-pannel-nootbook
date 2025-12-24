import statdata from "../../../../public/db/statdata.json"
import Image from 'next/image';
import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import BaseCard from '@/components/molecules/BaseCard';

const ResultSummaryCard = () => {

  return (
    <div>
      <div className="flex mt-3 gap-2 items-center cursor-pointer">
        <IoIosArrowRoundBack className="text-2xl sm:text-3xl" />
        <h3 className="font-inter font-medium text-[14px] sm:text-[16px] tracking-[-0.15px]">
          Back to Tests
        </h3>
      </div>
      <div
        className=" mt-7 mx-2 rounded-2xl border border-gray-300"
        style={{
          background:
            "linear-gradient(90deg, rgba(255, 96, 41, 0.1) 0%, rgba(22, 52, 78, 0.1) 100%)",
        }}
      >
        <div className=" pt-5 w-full flex justify-center">
          <div className="h-[100px] w-[100px] mt-5 bg-[var(--color-accent-orange)] flex rounded-full justify-center items-center">
            <Image
              src="/img/result.png"
              height={50}
              width={50}
              alt="result.png"
            />
          </div>
        </div>
        <div>
          <h1 className="font-inter font-normal mt-5 text-[20px] tracking-[-0.31px] text-center">
            Prelims Mock Test 15
          </h1>
          <p className="font-inter mt-3 font-normal text-[20px] text-gray-700 tracking-[-0.31px] text-center">
            GS Paper 1
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  mt-8 pb-8 mx-9 gap-5">
          {statdata.map((item) => (
            <BaseCard
              key={item.id}
              value={item.value}
              label={item.label}
              valueColor={item.valueColor}
              variant="stat"
            />
          ))}
        </div>

      </div>
    </div>
  )
}

export default ResultSummaryCard
