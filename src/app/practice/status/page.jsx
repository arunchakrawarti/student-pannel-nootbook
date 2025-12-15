import StudyMaterialList from '@/components/pages/practice/StudyMaterialList'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
       <StudyMaterialList/>
      </MainLayout>
    </div>
  )
}

export default page
