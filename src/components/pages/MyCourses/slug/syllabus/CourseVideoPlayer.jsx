import Coursecard1 from '@/components/molecules/Coursecard1'
import LessonCard from '@/components/molecules/LessionCard'
import LessionData from "../../../../../../public/db/LessionData.json"

import Image from 'next/image'
import React from 'react'
import { MdOutlineArrowBack } from 'react-icons/md'

const CourseVideoPlayer = () => {
  const data = [
    { text: "Indian Polity is based on the Constitution of India which came into force on 26th January 1950" },
    { text: "The Constitution is the supreme law of India" },
    { text: "It lays down the framework defining fundamental political principles" },
    { text: "Key features: Federal system, Parliamentary government, Fundamental Rights, Independent Judiciary" }
  ];

  return (
    <div className="w-full pt-4 pb-10">

     
      <div className="flex items-center gap-3 mb-4">
        <MdOutlineArrowBack className="text-[20px]" />
        <h2 className="font-inter font-medium text-[14px] md:text-[16px]">
          Back to Courses
        </h2>
      </div>

      
      <div className="flex flex-col lg:flex-row gap-8">

        <div className="w-full lg:w-[70%]">

         
          <div className="w-full">
            <Image
              src="/img/MyCourse/VideoPlayer.png"
              height={412}
              width={731}
              alt="video"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

          <h1 className="font-inter font-medium text-[20px] md:text-[24px] leading-[30px] md:leading-[36px] mt-3">
            Introduction to Indian Polity
          </h1>

          <p className="font-inter font-normal text-sm md:text-base leading-6 tracking-tight">
            UPSC GS Foundation Course
          </p>

      
          <div className="flex justify-between rounded-md mt-4 bg-gray-200 max-w-[260px] items-center px-1 py-1">
            <p className="font-inter font-medium text-sm bg-white leading-5 py-2 px-3 rounded-md tracking-tight text-center">
              Notes
            </p>
            <p className="font-inter font-medium text-sm leading-5 tracking-tight text-center">
              Resources
            </p>
            <p className="font-inter font-medium text-sm leading-5 tracking-tight text-center">
              Q&A
            </p>
          </div>

          
          <div className="mt-4">
            <h2 className="font-inter font-normal text-base md:text-lg leading-6 tracking-tight">
              Key Takeaways
            </h2>
          </div>

          <div className="p-3 md:p-4">
            <Coursecard1 items={data} />
          </div>
        </div>

        
        <div className="w-full lg:w-[30%]">
          <div className="bg-white rounded-lg shadow-sm p-3 md:p-4">
            {LessionData.map((item, index) => (
              <LessonCard key={index} {...item} />
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default CourseVideoPlayer
