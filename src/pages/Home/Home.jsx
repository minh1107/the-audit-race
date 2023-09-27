import React from 'react'
import Header from './Header'
import Slide from './Slide'
import Line from '@/components/common/Line'
import Overview from './Overview'
import TimeDown from './TimeDown'
import TarSharing from './TarSharing'
import Rules from './Rules'
import FinalRules from './FinalRules'
import Reward from './Reward'
import Partners from './Partners'
import Registers from './Register'

const Home = () => {
  return (
    <div>
      <Header />
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