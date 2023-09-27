import React from 'react'
import lineImg from '@/assets/images/svg/line.svg'
import Image from 'next/image'


const Line = () => {
  
  return (
    <div className='w-screen z-50'>
        <Image src={lineImg} alt='line' className='w-full'/>
    </div>
  )
}

export default Line