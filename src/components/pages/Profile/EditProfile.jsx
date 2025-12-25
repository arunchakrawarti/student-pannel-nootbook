import React from 'react'
import ProfileHeader from './ProfileHeader'
import ProfileStatsCard from './ProfileStatsCard'
import ProfileEditInformation from './ProfileEditInformation'

const EditProfile = () => {
  return (
    <div className='md:px-10 px-6'>
      <ProfileHeader/>
      <ProfileStatsCard/>
      <ProfileEditInformation/>
    </div>
  )
}

export default EditProfile
