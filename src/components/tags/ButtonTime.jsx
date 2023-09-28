import Image from 'next/image'
import React from 'react'
import layoutButton from '@/assets/images/layoutButton.png'

const ButtonTime = ({title, time, index, className}) => {
  return (
    <button className={`text-[#fff] ${className} slide__button relative`}>
        <Image src={layoutButton} alt='button' className={`h-[5.1875vw] ${index === 2 ? 'w-[14.9375vw]' : 'w-[11.9375vw]'}`}/>
        <div className={`absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 ${index === 2 ? 'w-[14.9375vw]' : 'w-[11.9375vw]'}`}>
          <h2 className='text-center w-full text-[1.25vw] font-bold leading-[1.875vw]'>{title}</h2>
          <p className='text-center font-normal leading-[1.5vw] text-[1vw]'>{time}</p>
        </div>
    </button>
)
}

export default ButtonTime