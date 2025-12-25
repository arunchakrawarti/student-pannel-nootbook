import React from 'react'
import SubjectList from './SubjectList'
import RecentDownloadSubject from './RecentDownloadSubject'
import StudyMaterial from './StudyMaterial'

const Index = () => {
  return (
    <div className='md:px-10 px-6'>
      <StudyMaterial/>
      <SubjectList/>
      <RecentDownloadSubject/>
    </div>
  )
}

export default Index
