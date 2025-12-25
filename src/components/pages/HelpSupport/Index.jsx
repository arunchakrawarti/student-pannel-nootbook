import React from 'react'
import HelpAndSupport from './HelpAndSupport'
import ContactSupportCard from './ContactSupportCard'
import FrequentlyQuestion from './FrequentlyQuestion'

const Index = () => {
  return (
    <div className='md:px-10 px-6'>
      <HelpAndSupport/>
      <ContactSupportCard/>
      <FrequentlyQuestion/>
    </div>
  )
}

export default Index
