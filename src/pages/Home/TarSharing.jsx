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
import img1 from '@/assets/images/svg/avate/image1.jpg'
import img2 from '@/assets/images/svg/avate/image2.jpg'
import img3 from '@/assets/images/svg/avate/image3.jpg'
import img4 from '@/assets/images/svg/avate/image4.jpg'
import img5 from '@/assets/images/svg/avate/image5.jpg'
import img6 from '@/assets/images/svg/avate/image6.jpg'

const newArr = [
  {
    title: 'Chị ĐINH THU HOÀI',
    img: img1,
    text1: 'Chuyên viên tuyển dụng & Quản lý Nguồn nhân lực,',
    text2: 'PwC Việt Nam ',
    text3: 'The Audit Race là một sân chơi học thuật được đánh giá cao bởi luôn giữ vững được tính chuyên môn cũng như chất lượng thí sinh tham gia thông qua sự giám sát và hỗ trợ từ phía các thầy cô, chuyên gia trong lĩnh vực.'
  },
  {
    title: 'Chị VŨ THÙY LINH',
    img: img2,
    text1: 'Chuyên viên nhân sự cấp cao',
    text2: ' Grant Thornton Việt Nam',
    text3: 'Là cuộc thi học thuật mang tính thực tế, The Audit Race đem tới 04 vòng thi mang tính chuyên môn cao, mở ra cơ hội tham gia vào các tình huống giả định giúp các thí sinh hình dung được công việc kiểm toán trong thực tiễn.'
  },
  {
    title: 'PGS TS. ĐINH THẾ HÙNG',
    img: img3,
    text1: 'Phó Viện trưởng Viện Kế toán - Kiểm toán',
    text2: 'Trường Đại học Kinh tế Quốc dân',
    text3: 'Tham gia The Audit Race giúp nâng cao sự linh hoạt, tính năng động, cơ hội cọ xát, thử sức cho các bạn sinh viên, để từ đó, thích ứng nhanh với môi trường văn hóa của nhà tuyển dụng sau khi ra trường.'
  },
  {
    title: 'VŨ HUYỀN LINH',
    img: img4,
    text1: 'QUÁN QUÂN ',
    text2: 'THE AUDIT RACE 2022  ',
    text3: 'Bên cạnh những phần thưởng hiện kim, hiện vật, kiến thức, kỹ năng,.. điều mà mình trân trọng nhất chính là những trải nghiệm và những mối quan hệ tuyệt vời mà mình có được trong suốt quá trình tham gia TAR 2022.'
  },
  {
    title: 'LÊ HỮU PHÚC THÀNH',
    img: img5,
    text1: 'Á QUÂN 1',
    text2: 'THE AUDIT RACE 2022',
    text3: 'Mình quyết định tham gia The Audit Race vì tin rằng cuộc thi có thể mang lại cho mình nhiều giá trị về kiến thức chuyên môn. Trên thực tế, mình có cơ hội học hỏi nhiều điều thú vị và có ích cho bản thân, đó là điều mình rất trân trọng.'
  },
  {
    title: 'TRẦN NGỌC MAI',
    img: img6,
    text1: 'Á QUÂN 2 ',
    text2: 'THE AUDIT RACE 2022 ',
    text3: 'The Audit Race đem tới cho mình cơ hội được tiếp xúc với rất nhiều anh/chị mentor đến từ các công ty kiểm toán lớn như EY, Deloitte, RSM,... Với mình, đây là trải nghiệm đáng giá nhất mà chưa chắc những cuộc thi khác có thể đem lại được.'
  },
]
import { Navigation } from 'swiper/modules';
const TarSharing = () => {
  const [indexSlider, setIndexSlider] = useState(0)
  const [slideData, setSlideData] = useState([])
  const swiperRef = useRef()
  const handleNextSlide = () => {
    swiperRef.current?.slideNext()
  }
  const handlePrevSlide = () => {
    swiperRef.current?.slidePrev()
  }

  const handleSlideChange = (swiper) => {
    setIndexSlider(swiper.activeIndex)
  }

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
                <button  className=''>    
                    <Image   onClick={handlePrevSlide} src={buttonLeft} className='w-[2.5vw] h-[2.5vw] mr-[1vw] max-md:hidden' alt='background' />
                </button>
                <Swiper       style={{
                      "--swiper-navigation-color": "white",
                      "--swiper-navigation-size": "20px",
                    }}
                        onBeforeInit={(swiper) => {
                          swiperRef.current = swiper
                        }}    onSlideChange={handleSlideChange}
                 navigation={true} modules={[Navigation]} className="mySwiper w-[44.8125vw] h-[20.125vw] info max-md:w-[69.96vw] max-md:h-[43.41vw]">
                {
                    newArr.map(item => (
                        <SwiperSlide key={item}>
                        <div key={-item}>
                            <div className='ml-[3.38vw] mt-[2.5vw] flex max-md:mx-[7%] max-md:mt-[6.61vw] items-center mb-[2.25vw]'>
                                <Image src={item?.img} alt='block' width={100} height={100} className='w-[5.5625vw] rounded-full object-cover h-[5.5625vw] max-md:w-[10.22vw] max-md:h-[10.22vw]'/>
                                <div className='ml-[1.5vw]'>
                                    <h2 className='text-[1.25vw] text-[#EC4AE7]  font-bold max-md:text-[2.66vw] mb-[0.5vw]'>{item.title}</h2>
                                    <p className='text-[#A4DEFF] max-md:text-[2.13vw]'>{item.text1} </p>
                                    <p className='text-[#A4DEFF] max-md:text-[2.13vw]'>{item.text2}</p>
                                </div>
                            </div>
                            <p className='ml-[3.38vw] mr-[3vw] text-white max-md:text-[2.4vw] max-md:mt-[6.4vw] max-md:mx-[7%]'>{item.text3}</p>
                        </div>
                        </SwiperSlide>
                    ))
                }
                </Swiper>
                <button>     
                    <Image  onClick={handleNextSlide} src={buttonRight}  className='w-[2.5vw] h-[2.5vw] ml-[1vw] max-md:hidden' alt='background' />
                </button>
            </div>
        </div>
    </div>
  )
}

export default TarSharing