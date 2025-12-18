import Index from '@/components/pages/marketplace/Index'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Index type="study-material" title="All Courses"/>
      </MainLayout>
    </div>
  )
}

export default page
