import React from 'react'
import { overview } from '@/utils/resources'
import Image from 'next/image'
import racingBoyImg from '@/assets/images/racingboy.png'
import tradingImg from '@/assets/images/trading.png'
import backgroundOverView from '@/assets/images/backgroundOverview.png'
import run1 from '@/assets/images/run.png'
import overviewTitle from '@/assets/images/svg/overviewTitle.png'
import ellipse from '@/assets/images/svg/Ellipse.png'
import flash from '@/assets/images/svg/flashShort.png'
import TimeDown from './TimeDown'
import Line2 from '@/components/common/Line2'
import ButtonCustom from '@/components/tags/ButtonCustom'

const Overview = () => {
  return (
      <div className='relative'>
        <Image src={backgroundOverView} alt='background' className='absolute top-0 left-0 h-full -z-10'/>
        <div className=' pt-[5.84vw]'>
          <Image src={overviewTitle} alt='title' className='mx-auto z-100'/>
          <div className='mr-[11.69vw] ml-[7.96vw] flex mt-[3.86vw] gap-[2.75vw] '>
            <div className='w-[45vw]'>
              <Image src={tradingImg} alt='Racing boy' className='absolute top-[17.37vw] w-[45.56438vw] h-[23.52638vw] object-fill'/>
              <Image src={racingBoyImg} alt='Trading' className='absolute bottom-[30%] -scale-x-90 w-[45vw] h-[24.5vw] object-cover'/>
            </div>
            <div className='w-[32.60094vw]'>
              <h3 className='text-[1.75vw] font-exoFont mb-[0.75vw] font-bold leading-[2.25vw] space-[0.00438vw] text__color'>{overview?.titleTop}</h3> 
              <p className='text-[#E3F7FF] mb-[0.75vw]'>{overview?.contentTop1}</p>
              <p className='text-[#E3F7FF] mb-[2.25vw]'>{overview?.contentTop2}</p>
              <h3 className='text-[1.75vw] font-exoFont mb-[0.75vw] font-bold leading-[2.25vw] space-[0.00438vw] text__color'>{overview?.titleBottom}</h3> 
              <p className='text-[#E3F7FF] mb-[3.12vw]'>{overview?.contentBottom}</p>
            </div>
          </div>
          <div className='absolute bottom-[34%] translate-y-[20%]  -z-10'>
              <Line2 />
          </div>
          <Image src={run1} alt='' className='absolute bottom-[33%] opacity-50 -z-10 -left-[10%] w-[29.52119vw] h-[6.462vw]'/>
          <Image src={flash} alt='' className='absolute bottom-[29%] opacity-70 -z-10 left-[4%] w-[29.52119vw] h-[6.462vw]'/>
          <Image src={ellipse} alt='' className='absolute bottom-[33.3%] opacity-70 -z-10 right-[7.6vw] h-[2vw] w-[29.52119vw]'/>
          <ButtonCustom text={'ĐĂNG KÝ NGAY'} className='absolute bottom-[32.3%] -z-10 right-[31.69vw]'/>
          <TimeDown />
          <Line2 />
        </div>
        
    </div>
  )
}

export default Overview