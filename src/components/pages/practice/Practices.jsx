import BaseCard from '@/components/molecules/BaseCard';
import React from 'react'
import { IoAtCircleOutline } from "react-icons/io5";
import practice from "../../../../public/db/practice.json"

const Practices = () => {
  return (
    <div>
      <div className='flex items-center gap-3 mt-3'>

        <div className='h-13 w-13 bg-red-100 flex items-center justify-center rounded-xl'>
          <IoAtCircleOutline size
            ={27} className="text-red-600" />

        </div>

        <div>
          <h1 className="font-inter font-normal text-[32px] text-gray-800 tracking-[0.4px]">
            Practice
          </h1>

          <p className="font-inter font-normal text-[17px] text-gray-600 tracking-[-0.31px]">
            Practice subject-wise questions with instant feedback
          </p>
        </div>

      </div>
      <div className="grid mt-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {practice.map((item, i) => (
           <BaseCard
              key={item.id}
              iconSrc={item.iconSrc}
              value={item.value}
              label={item.label}
              colorClass={item.colorClass}
              imagePosition={item.imagePosition}
              reverseText={item.reverseText}
            />
        ))}
      </div>
    </div>
  )
}

export default Practices
