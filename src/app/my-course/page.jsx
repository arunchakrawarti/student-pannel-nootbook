import MyCourse from '@/components/pages/myCourses/MyCourse'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <MyCourse/>
      </MainLayout>
    </div>
  )
}

export default page
