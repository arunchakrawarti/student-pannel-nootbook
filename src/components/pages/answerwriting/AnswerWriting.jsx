import React from 'react'
import { PiHandDepositLight } from "react-icons/pi";
import answer from "../../../../public/db/answer.json"
import BaseCard from '@/components/molecules/BaseCard';
import Link from 'next/link';

const AnswerWriting = () => {
  return (
    <div className='mt-3'>
      <div className='flex items-center gap-3'>

        <div className='h-[48px] w-[48px] bg-red-50 flex items-center justify-center rounded-md'>
          <PiHandDepositLight size={25} className='text-red-500' />
        </div>

        <div>
          <h1 className="font-inter font-normal text-[33px] tracking-[0.4px]">
            Answer Writing
          </h1>

          <p className="font-inter font-normal text-[18px] text-gray-700 tracking-[-0.31px]">
            Practice and improve your answer writing skills
          </p>
        </div>

      </div>
      <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-4">
        {answer.map((item) => (
          <Link href="/">
            <BaseCard
              key={item.id}
              iconSrc={item.iconSrc}
              value={item.value}
              label={item.label}
              colorClass={item.colorClass}
              imagePosition={item.imagePosition}
              reverseText={item.reverseText}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default AnswerWriting
