import Image from 'next/image'
import React from 'react'
import slideImg from '@/assets/images/slide.png'
import bigLogo from '@/assets/images/BigLogo.png'
import { round, roundTime } from '@/utils/resources'
import ButtonTime from '@/components/tags/ButtonTime'
import racingBoyImg from '@/assets/images/racingboySlide.png'
import roadLine from '@/assets/images/svg/roandLine.svg'
import circle from '@/assets/images/svg/cirle.svg'

const Slide = () => {
  return (
    <div className='relative slide h-[51.75vw] max-md:h-[78.4vw]'>
        <Image src={slideImg} alt='slide' className='w-screen -z-10 h-[51.75vw] max-md:h-[78.4vw] object-cover'/>
        <div className='absolute top-[5.94vw] -translate-x-1/2 left-1/2'>
            <Image src={bigLogo} alt='Big Logo' className='mx-auto max-md:mt-[10%] w-[50.25vw] h-[15.03675vw]'/>
            <div className='flex mb-[1.44vw] font-exoFont shadow-textCustom text-[#fff] 
            text-center text-[1.5vw] uppercase font-bold leading-[2.25vw] text__shadow max-md:gap-[5vw] max-md:whitespace-nowrap'>
                <h2 className='text__shadow translate-x-[8.31vw] max-md:scale-125 max-md:font-semibold '>First Launch</h2>
                <h2 className='text__shadow translate-x-[10.95vw] max-md:scale-125 max-md:font-semibold '>enter the fast lane</h2>
                <h2 className='text__shadow translate-x-[15vw] max-md:scale-125 max-md:font-semibold '>Acceleration</h2>
                <h2 className='text__shadow translate-x-[18.31vw] max-md:scale-125 max-md:font-semibold '>Velocity unleash</h2>
            </div>
            <div className='relative w-[74.52966vw] max-md:w-[90vw] max-md:my-[1.4vw]'>
                <Image src={roadLine} alt='road line'/>
                <Image src={circle} alt='circle' className='absolute left-[12.31vw] top-1/2 -translate-y-1/2 max-md:w-[0.777vw] max-md:h-[0.777vw]'/>
                <Image src={circle} alt='circle' className='absolute left-[27.95vw] top-1/2 -translate-y-1/2 max-md:left-[33vw] max-md:w-[0.777vw] max-md:h-[0.777vw]'/>
                <Image src={circle} alt='circle' className='absolute right-[27.95vw] top-1/2 -translate-y-1/2 max-md:left-[56vw] max-md:w-[0.777vw] max-md:h-[0.777vw]'/>
                <Image src={circle} alt='circle' className='absolute right-[12.31vw] top-1/2 -translate-y-1/2 max-md:left-[76vw] max-md:w-[0.777vw] max-md:h-[0.777vw]'/>
            </div>
            <div className='flex justify-center gap-[5.15vw] mt-[1.06vw] max-md:gap-[10vw] max-md:mt-[2vw]'>
                <ButtonTime className="translate-x-[2.31vw]" index={0} title={'Mở đơn'} time={'28/09 - 13/10'} />
                <ButtonTime className="translate-x-[1.31vw]" index={1} title={'Test Offline'} time={'21/10 - 22/10'} />
                <ButtonTime className="translate-x-[0.31vw]" index={2} title={'Thử thách Case Study'} time={'29/10 - 05/11'} />
                <ButtonTime className="-translate-x-[2.3vwF]" index={3} title={'Chung kết'} time={'17/11'} />
            </div>
            <Image src={racingBoyImg} className='w-[27vw] h-[13.94vw] object-cover absolute left-1/2 
            -translate-x-1/2 max-md:translate-y-[20%] max-md:w-[41vw] max-md:h-[22.1vw]' alt='racing boy '/>
        </div>
        <div className='blur__bottom z-40 w-full'></div>
    </div>
  )
}

export default Slide