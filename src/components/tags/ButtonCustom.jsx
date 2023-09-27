import React from 'react'

const ButtonCustom = ({text, className}) => {
  return (
    <button type="submit" className={`font-bold leading-[1.5vw] text-[1vw] uppercase 
    text-[#FFF8FF] h-[3.375vw] w-[12.9375vw] px-[1.5vw] shadow-button bg-button
    rounded-full border-[0.09375vw] border-[#FFDBC7] max-md:w-[28.4vw] max-md:h-[7.424vw] max-md:text-[2.26vw]
    ${className}`}>{text}</button>
  )
}

export default ButtonCustom