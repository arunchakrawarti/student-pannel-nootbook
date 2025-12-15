import Card9 from '@/components/molecules/Card9';
import statdata from "../../../../public/db/statdata.json"
import Image from 'next/image';
import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";

const ResultSummaryCard = () => {

  return (
    <div>
      <div className="flex mt-3 gap-2 items-center cursor-pointer">
        <IoIosArrowRoundBack className="text-2xl sm:text-3xl" />
        <h3 className="font-inter font-medium text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] tracking-[-0.15px]">
          Back to Tests
        </h3>
      </div>
      <div
        className=" mt-5"
        style={{
          background:
            "linear-gradient(90deg, rgba(255, 96, 41, 0.1) 0%, rgba(22, 52, 78, 0.1) 100%)",
        }}
      >
        <div className=" pt-5 w-full flex justify-center">
          <div className="h-[80px] w-[80px] bg-[var(--color-accent-orange)] flex rounded-full justify-center items-center">
            <Image
              src="/img/result.png"
              height={40}
              width={40}
              alt="result.png"
            />
          </div>
        </div>
        <div>
          <h1 className="font-inter font-normal mt-5 text-[16px] leading-[24px] tracking-[-0.31px] text-center">
            Prelims Mock Test 15
          </h1>
          <p className="font-inter mt-3  font-normal text-base leading-6 tracking-[-0.31px] text-center">
            GS Paper 1
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  mt-10 pb-10 mx-8 gap-10">
          {statdata.map((item) => (
            <Card9
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
