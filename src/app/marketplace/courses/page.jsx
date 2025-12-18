import Index from '@/components/pages/marketplace/Index'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Index type="courses" title="All Courses" />
      </MainLayout>
    </div>
  )
}

export default page
