import Browser from '@/components/pages/BrowserBySubject/Browser'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Browser/>
      </MainLayout>
    </div>
  )
}

export default page
