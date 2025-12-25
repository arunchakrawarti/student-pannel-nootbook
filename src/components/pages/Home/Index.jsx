import React from 'react'
import DashboardStats from './DashboardStats'
import Profile from './Profile'
import TestOverview from './TestOverview'
import AnnouncementList from './AnnouncementList'

const MainHome = () => {
    return (
        <div className='md:px-10 px-6'>
            <Profile />
            <DashboardStats />
            <TestOverview />
            <AnnouncementList />
        </div>
    )
}

export default MainHome
