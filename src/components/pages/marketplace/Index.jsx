"use client"
import React from 'react'
import Marketplace from './Marketplace'
import CourseMagaSale from './CourseMagaSale'
import AllCourses from './AllCourses'

const Index = ({ type, title }) => {
  return (
    <div className='md:px-10 px-6' >
      <Marketplace/>
      <CourseMagaSale/>
      <AllCourses type={type} title={title}/>
    </div>
  )
}

export default Index
