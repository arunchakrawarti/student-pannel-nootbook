import CourseVideoPlayer from '@/components/pages/myCourses/slug/syllabus/CourseVideoPlayer'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <CourseVideoPlayer/>
      </MainLayout>
    </div>
  )
}

export default page
