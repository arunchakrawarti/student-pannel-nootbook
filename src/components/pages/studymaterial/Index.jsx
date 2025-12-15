import React from 'react'
import SubjectList from './SubjectList'
import RecentDownloadSubject from './RecentDownloadSubject'
import StudyMaterial from './StudyMaterial'

const Index = () => {
  return (
    <div>
      <StudyMaterial/>
      <SubjectList/>
      <RecentDownloadSubject/>
    </div>
  )
}

export default Index
