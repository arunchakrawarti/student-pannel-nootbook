import React from 'react'
import Profile from './Profile'
import ProfileStatsCard from './ProfileStatsCard'
import ProfilePersonalInfo from './ProfilePersonalInfo'

const Mainprofile = () => {
  return (
    <div className='md:px-10 px-6'>
      <Profile/>
      <ProfileStatsCard/>
      <ProfilePersonalInfo/>
    </div>
  )
}

export default Mainprofile
