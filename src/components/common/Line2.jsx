import React from 'react'
import line2 from '@/assets/images/svg/line2.svg'
import Image from 'next/image'

const Line2 = () => {
  return (
    <div className='w-screen line'>
        <Image src={line2} alt='line' className='w-screen opacity-80'/>
    </div>
  )
}

export default Line2