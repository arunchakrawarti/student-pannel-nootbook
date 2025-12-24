import Button from '@/components/comman/Button'
import QuestionCard from '@/components/molecules/QuestionCard'
import Link from 'next/link'
import React from 'react'



const TestAnalysisPage = () => {
  return (
    <div>
      <div className="w-full mt-3 flex flex-col lg:flex-row justify-between gap-5">

        <div className="mt-5 w-full border border-gray-300 bg-white shadow rounded-2xl p-7">
          <h1 className="font-inter font-medium text-[20px] tracking-[-0.31px]">
            Question Analysis
          </h1>

          <div className=" space-y-1 mt-8">
            <QuestionCard no="Correct Answers" title="71" color="text-green-600" />
            <QuestionCard no="Wrong Answers" title="24" color="text-red-600" />
            <QuestionCard no="Unattempted" title="5" color="text-gray-400" />
            <QuestionCard no="Negative Marks" title="-16" color="text-red-600" />
          </div>
        </div>


        <div className="mt-5 w-full border border-gray-300  bg-white shadow rounded-2xl p-7">
          <h1 className="font-inter font-medium text-[20px] tracking-[-0.31px]">
            Time Analysis
          </h1>

          <div className=" space-y-1 mt-8">
            <QuestionCard no="Total Time" title="118 min" color="text-gray-800" />
            <QuestionCard no="Avg Time/Question" title="1.2 min" color="text-gray-800" />
            <QuestionCard no="Time Saved" title="2 min" color="text-green-600" />
          </div>
        </div>

      </div>
      <div className="flex pt-10 justify-end">
        <Link href={`/test-series/$[testId]/solution `}>
          <Button className='text-white px-20'>
            View Solutions
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default TestAnalysisPage


