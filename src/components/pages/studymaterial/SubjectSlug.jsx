import React from 'react'
import StudyMaterial from './StudyMaterial'
import SubjectList from './SubjectList'
import RecentDownloadSubject from './RecentDownloadSubject'
import SubjectCategory from './SubjectCategory'

const SubjectSlug = () => {
  return (
    <div>
      <StudyMaterial/>
      <SubjectList/>
      <SubjectCategory/>
      <RecentDownloadSubject/>
      
    </div>
  )
}

export default SubjectSlug
