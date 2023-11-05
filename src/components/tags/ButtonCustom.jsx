import { Button } from '@mui/material'
import React from 'react'

const ButtonCustom = ({text, className,id, onclick}) => {
  return (
    <button  data-aos="fade-up" onClick={onclick} id={id} type="submit" className={`font-bold leading-[1.5vw] text-[1vw] uppercase 
    text-[#FFF8FF] h-[3.375vw] w-[14.9375vw] px-[1.5vw] shadow-button bg-button 
    rounded-full border-[0.09375vw] border-[#FFDBC7] max-md:w-[28.4vw] max-md:h-[7.424vw] max-md:text-[2.26vw] cursor-pointer z-50
    ${className}`}>{text}</button>
  )
}

export default ButtonCustom