import React from 'react'
import Slide from './Slide'
import Overview from './Overview'
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