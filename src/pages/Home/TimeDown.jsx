import React from 'react'
import rowImg from '@/assets/images/svg/row.svg'
import Image from 'next/image'
import CountDown from '@/components/Home/CountDown'
import Line2 from '@/components/common/Line2'

const arr = Array.from(Array(10).keys())
const TimeDown = () => {
  return (
    <div className='w-full h-[18.6875vw] mb-[3.13vw]'>
        <div className='flex overflow-hidden absolute -z-10 right-0 left-0 h-[18.6875vw] max-md:h-[30.164vw]'>{arr?.map(item => 
        <Image className='max-md:w-[30.164vw] max-md:h-[30.164vw]' key={item} src={rowImg} alt='img'/>)}</div>
        <div className='ml-[7.96vw] mt-[4.31vw] mb-[3.12vw] font-exoFont'>
            <h2 className='text-[2.25vw] pt-[2.8vw] font-bold leading-[3.375vw]  title__color max-md:text-[4.26vw] max-md:leading-normal'>ĐẾM NGƯỢC THỜI GIAN</h2>
            <h2 className='text-[2.25vw] font-bold leading-[3.375vw]  title__color max-md:text-[4.26vw] max-md:leading-normal max-md:mb-[4.08vw]'>ĐÓNG CỔNG ĐĂNG KÝ</h2>
            <div className='flex text-[#fff] text-[3.75vw] font-atmospheric leading-[5vw] mt-[1.87vw] max-md:text-[6.4vw] gap-[1.5vw]'>
                <CountDown time={'03'}/>
                <span>:</span>
                <CountDown time={'06'}/>
                <span>:</span>
                <CountDown time={24}/>
                <span>:</span>
                <CountDown time={29}/>
            </div>
        </div>
    </div>
  )
}

export default TimeDown