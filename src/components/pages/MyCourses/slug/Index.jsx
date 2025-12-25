import React from 'react'
import FoundationCourse from './FoundationCourse'
import Overview from './OverviewCategory'
import VideoLecture from './VideoLecture'

const MainSlug = () => {
  return (
    <div className='md:px-10 px-6'>
      <FoundationCourse/>
      <Overview/>
      <VideoLecture/>
    </div>
  )
}

export default MainSlug
