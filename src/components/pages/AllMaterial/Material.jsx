import React from 'react'
import Heading from './Heading'
import Browser from './Browser'
import Materials from './Materials'
import Document from './Document'
import Recent from './Recent'

const Material = () => {
  return (
    <div>
      <Heading/>
      <Browser/>
      <Materials/>
      <Document/>
      <Recent/>
    </div>
  )
}

export default Material
