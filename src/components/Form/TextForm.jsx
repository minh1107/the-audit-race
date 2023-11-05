import Image from 'next/image'
import React from 'react'
import rowRight from '@/assets/images/svg/rowRightColor.svg' 

const TextForm = ({text, marginBottom=true}) => {
  return (
    <div className={`flex ${marginBottom ? "mb-[1vw]" : ''} items-center max-md:items-start`}>
        <Image src={rowRight} alt='row' className='-translate-x-[30%] max-md:-translate-x-[30%] max-md:w-[5.3vw] max-md:h-[5.3vw] max-md:mt-[1vw]'/>
        <Image src={rowRight} alt='row' className='-translate-x-[90%] max-md:-translate-x-[90%] max-md:w-[5.3vw] max-md:h-[5.3vw] max-md:mt-[1vw]'/>
        <h2 className='form-register__title2 font-exoFont -translate-x-[2vw] max-md:mt-[1.25vw] max-md:translate-x-[-5vw]'>{text}</h2>
    </div>
  )
}

export default TextForm