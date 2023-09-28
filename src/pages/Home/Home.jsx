import React from 'react'
import Slide from './Slide'
import Overview from './Overview'
import TarSharing from './TarSharing'
import Rules from './Rules'
import FinalRules from './FinalRules'
import Reward from './Reward'
import Partners from './Partners'
import Registers from './Register'
import '@/scss/page/home.css'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Slide />    
      <Overview /> 
      <TarSharing />  
      <Rules />
      <FinalRules />
      <Reward />
      <Partners />
      <Registers />
    </div>
  )
}

export default Home