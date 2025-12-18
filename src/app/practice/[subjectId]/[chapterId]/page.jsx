import NextQuestion from '@/components/pages/practice/NextQuestion'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <NextQuestion/>
      </MainLayout>
    </div>
  )
}

export default page
