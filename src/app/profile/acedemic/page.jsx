import EditProfile from '@/components/pages/profile/EditProfile'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <EditProfile/>
      </MainLayout>
    </div>
  )
}

export default page
