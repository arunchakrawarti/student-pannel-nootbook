import MainHome from '@/components/pages/home/MainHome'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <MainHome/>
      </MainLayout>
    </div>
  )
}

export default page
