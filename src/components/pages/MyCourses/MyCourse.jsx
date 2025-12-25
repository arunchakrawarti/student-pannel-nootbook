import React from 'react'
import course from "../../../../public/db/course.json";
import CourseProgressCard from '@/components/molecules/CourseProgressCard';

const MyCourse = () => {
    return (
        <div className='md:px-10 px-6'>
            <h1 className="font-inter pt-3 font-medium text-[24px] tracking-[0.07px]">
                My Courses
            </h1>
            <p class="font-inter font-normal text-[18px] text-gray-600 tracking-[-0.31px]">
                Continue learning and track your progress
            </p>
            <div className="grid mt-5 grid-cols-1 sm:grid-cols-2 md:grid-col-2 lg:grid-cols-3 gap-5">
                {course.map((item, index) => (
                    <CourseProgressCard key={index} {...item} />
                ))}
            </div>
        </div>
    )
}

export default MyCourse
