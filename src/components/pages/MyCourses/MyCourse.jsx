import React from 'react'
import CourseCard from "../../molecules/CourseCard";
import course from "../../../../public/db/course.json";

const MyCourse = () => {
    return (
        <div>
            <h1 class="font-inter pt-3 font-medium text-[24px] leading-[36px] text-black tracking-[0.07px]">
                My Courses
            </h1>
            <p class="font-inter font-normal text-[16px] leading-[24px] text-gray-800 tracking-[-0.31px]">
                Continue learning and track your progress
            </p>
            <div className="grid mt-5 grid-cols-1 sm:grid-cols-2 md:grid-col-2 lg:grid-cols-3 gap-5">
                {course.map((item, index) => (
                    <CourseCard key={index} {...item} />
                ))}
            </div>
        </div>
    )
}

export default MyCourse
