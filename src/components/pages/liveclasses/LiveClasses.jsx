import CourseCard from '@/components/molecules/CourseCard'
import React from 'react'
import liveclass from "../../../../public/db/liveclass.json"

const LiveClasses = () => {
  return (
    <div>
      <h1 className="font-inter font-medium mt-3 text-[24px] leading-[36px] tracking-[0.07px]">
        Live Classes
      </h1>
      <p className="font-inter font-normal text-[16px] leading-[24px] tracking-[-0.31px]">
        Join live sessions and access recordings
      </p>
      <div>
        <h2 className="font-inter font-normal text-[16px] leading-[24px] tracking-[-0.31px]">
          Today's Classes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {liveclass.map((course) => (
          <CourseCard
                    key={course.id}
                    img={course.img}
                    title={course.title}
                    teacher={course.teacher}
                    isLiveSession={course.isLiveSession}
                    liveBadgeText={course.liveBadgeText}
                    sessionTime={course.sessionTime}
                    registeredCount={course.registeredCount}
                    
                />
          ))}
        </div>
      </div>
    </div>
  )
}

export default LiveClasses
