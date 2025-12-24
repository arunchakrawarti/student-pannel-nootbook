import Card9 from '@/components/molecules/BaseCard';
import React from 'react'
import { IoAtCircleOutline } from "react-icons/io5";
import practice from "../../../../public/db/practice.json"

const Practices = () => {
  return (
    <div>
      <div className='flex items-center gap-3 mt-3'>

        <div className='h-[48px] w-[48px] bg-red-50 flex items-center justify-center rounded-md'>
          <IoAtCircleOutline size
            ={25} className="text-red-500" />

        </div>

        <div>
          <h1 className="font-inter font-normal text-[30px] leading-[36px] tracking-[0.4px]">
            Practice
          </h1>

          <p className="font-inter font-normal text-[16px] leading-[24px] tracking-[-0.31px]">
            Practice subject-wise questions with instant feedback
          </p>
        </div>

      </div>
      <div className="grid mt-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {practice.map((metric, index) => (
          <Card9
            key={index}
            iconSrc={metric.iconSrc}
            value={metric.value}
            label={metric.label}
            colorClass={metric.colorClass}
            imagePosition={metric.imagePosition}
            reverseText={metric.reverseText}
            isFullColorCard={metric.isFullColorCard}
          />
        ))}
      </div>
    </div>
  )
}

export default Practices
