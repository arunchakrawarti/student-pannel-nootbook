import React from 'react'
import startest from "../../../../public/db/startest.json"
import CardPrelims from '@/components/molecules/CardPrelims'
import { IoIosArrowRoundBack } from 'react-icons/io'
const AvailableTest = () => {
    return (
        <div>
            <div className="flex mt-3 gap-2 items-center cursor-pointer">
                <IoIosArrowRoundBack className="text-2xl sm:text-3xl" />
                <h3 className="font-inter font-medium text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] tracking-[-0.15px]">
                    Back to Tests
                </h3>
            </div>
            <div>
                <h1 className="font-inter font-medium text-[24px] leading-[36px] tracking-[0.07px]">
                    Available Tests
                </h1>
                <p className="font-inter font-normal text-[16px] leading-[24px] tracking-[-0.31px]">
                    Select a test to begin your practice session
                </p>

            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {startest.map((test, index) => (
          
          <CardPrelims
            key={index}
            title={test.title}
            paper={test.paper}
            status={test.status}
            tagText={test.tagText}
            tagColor={test.tagColor}
            stats={test.stats}
            resultStats={test.resultStats}
          />
        ))}
      </div>
        </div>
    )
}

export default AvailableTest
