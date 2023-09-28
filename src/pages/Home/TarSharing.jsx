'use client'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import bgImg from '@/assets/images/bg2.png'
import comment from '@/assets/images/svg/comment.svg'
import buttonLeft from  '@/assets/images/svg/buttonLeft.svg'
import buttonRight from  '@/assets/images/svg/buttonRight.svg'
import avatar from  '@/assets/images/avatar.jpeg' 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
const TarSharing = () => {
    const swiperRef = useRef(null);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  
    const changeSlidePrev = () => {
      if (swiperRef.current && currentSlideIndex > 0) {
        swiperRef.current.slideTo(currentSlideIndex - 1);
        setCurrentSlideIndex(currentSlideIndex - 1); // Cập nhật index slide hiện tại
      }
    };
  
    const changeSlideNext = () => {
      if (swiperRef.current && currentSlideIndex < 3) { // Chuyển slide trong phạm vi index tương ứng
        swiperRef.current.slideTo(currentSlideIndex + 1);
        setCurrentSlideIndex(currentSlideIndex + 1); // Cập nhật index slide hiện tại
      }
    };
  
    const handleSlideChange = (swiper) => {
      setCurrentSlideIndex(swiper.realIndex); // or swiper.activeIndex
    };
    const newArr = Array.from(Array(10).keys())
  return (
    <div className='relative tar-sharing h-[38.25vw] max-md:h-[95vw]'>
        <Image src={bgImg} className='-z-50 absolute h-[40vw] top-0 left-0 w-screen max-md:h-[95vw]' alt='background' />
        <div className='blur__bottom z-40 w-full absolute rotate-180 top-[9%] hidden max-md:block'></div>
        <div className='z-10 flex max-md:flex-col'>
            <div className='mr-[2.41vw]'>
                <div className='ml-[6.28vw] mt-[11.79vw] flex gap-[1.82vw] max-md:leading-normal max-md:mt-[25vw]'> 
                    <Image src={comment} className='w-[6.07775vw] h-[7.90113vw] object-contain' alt='background' />
                    <Image src={comment} className='w-[6.07775vw] h-[7.90113vw] object-contain' alt='background' />
                </div>
                <h2 className='text-[3.24919vw] title2__color ml-[11.78vw] max-md:text-[4.26vw] max-md:leading-normal'>TAR Sharing</h2>
            </div>
            <div className='mt-[11.07vw] flex max-md:ml-[3.28vw] max-md:mt-[4.6vw]'>
                <button onClick={changeSlidePrev}>    
                    <Image src={buttonLeft} className='w-[2.5vw] h-[2.5vw] mr-[1vw] max-md:hidden' alt='background' />
                </button>
                <Swiper onSwiper={handleSlideChange} navigation={true} modules={[Navigation]} className="mySwiper w-[44.8125vw] h-[20.125vw] info max-md:w-[69.96vw] max-md:h-[43.41vw]">
                {
                    newArr.map(item => (
                        <SwiperSlide key={item}>
                        <div key={-item}>
                            <div className='ml-[3.38vw] mt-[2.5vw] flex max-md:mx-[7%] max-md:mt-[6.61vw] items-center mb-[2.25vw]'>
                                <Image src={avatar} alt='' className='w-[5.5625vw] rounded-full h-[5.5625vw] max-md:w-[10.22vw] max-md:h-[10.22vw]'/>
                                <div className='ml-[1.5vw]'>
                                    <h2 className='text-[1.25vw] text-[#EC4AE7]  font-bold max-md:text-[2.66vw] mb-[0.5vw]'>Chị ĐINH THU HOÀI</h2>
                                    <p className='text-[#A4DEFF] max-md:text-[2.13vw]'>Chuyên viên tuyển dụng </p>
                                    <p className='text-[#A4DEFF] max-md:text-[2.13vw]'>& Quản lý Nguồn nhân lực, PwC Việt Nam</p>
                                </div>
                            </div>
                            <p className='ml-[3.38vw] mr-[3vw] text-white max-md:text-[2.4vw] max-md:mt-[6.4vw] max-md:mx-[7%]'>The Audit Race là một sân chơi học thuật được đánh giá cao bởi luôn giữ vững được tính chuyên môn cũng như chất lượng thí sinh tham gia thông qua sự giám sát và hỗ trợ từ phía các thầy cô, chuyên gia trong lĩnh vực.</p>
                        </div>
                        </SwiperSlide>
                    ))
                }
                </Swiper>
                <button onClick={changeSlideNext}>     
                    <Image src={buttonRight}  className='w-[2.5vw] h-[2.5vw] ml-[1vw] max-md:hidden' alt='background' />
                </button>
            </div>
        </div>
    </div>
  )
}

export default TarSharing