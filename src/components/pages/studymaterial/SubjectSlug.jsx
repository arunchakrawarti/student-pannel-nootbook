import React from 'react'
import StudyMaterial from './StudyMaterial'
import SubjectList from './SubjectList'
import RecentDownloadSubject from './RecentDownloadSubject'
import SubjectCategory from './SubjectCategory'

const SubjectSlug = () => {
  return (
    <div className='md:px-10 px-6'>
      <StudyMaterial/>
      <SubjectList/>
      <SubjectCategory/>
      <RecentDownloadSubject/>
      
    </div>
  )
}

export default SubjectSlug
