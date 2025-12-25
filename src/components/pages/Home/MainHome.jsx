import React from 'react'
import Profile from './Profile'
import DashboardStats from './DashboardStats'
import TestOverview from './TestOverview'
import AnnouncementList from './AnnouncementList'

const MainHome = () => {
  return (
    <div>
      <Profile/>
      <DashboardStats/>
      <TestOverview/>
      <AnnouncementList/>
    </div>
  )
}

export default MainHome
