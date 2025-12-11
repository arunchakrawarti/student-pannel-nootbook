import React from 'react'
import FoundationCourse from './FoundationCourse'
import Overview from './OverviewCategory'
import VideoLecture from './VideoLecture'

const MainSlug = () => {
  return (
    <div>
      <FoundationCourse/>
      <Overview/>
      <VideoLecture/>
    </div>
  )
}

export default MainSlug
