import React from 'react'
import Header from './Header'
import Slide from './Slide'
import Line from '@/components/common/Line'
import Overview from './Overview'
import TimeDown from './TimeDown'
import TarSharing from './TarSharing'
import Rules from './Rules'

const Home = () => {
  return (
    <div>
      <Slide />    
      <Overview /> 
      <TarSharing />  
      <Rules />
    </div>
  )
}

export default Home