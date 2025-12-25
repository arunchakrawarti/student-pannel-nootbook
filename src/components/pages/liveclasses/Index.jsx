import React from 'react'
import LiveClasses from './LiveClasses'
import UpcomingLiveClasses from './UpcomingLiveClasses'

const Mainliveclasses = () => {
  return (
    <div className='md:px-10 px-6'>
      <LiveClasses/>
      <UpcomingLiveClasses/>
    </div>
  )
}

export default Mainliveclasses
