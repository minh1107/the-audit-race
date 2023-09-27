import React from 'react'
import toRight from '@/assets/images/svg/toRIght.svg' 
import mail from '@/assets/images/svg/mail.svg' 
import phone from '@/assets/images/svg/phone.svg' 
import local from '@/assets/images/svg/local.svg' 
import Image from 'next/image'
import logoFooterImg from '@/assets/images/svg/logoFooter.svg'
import '@/scss/page/footer.css'
import backgroundFooter from '@/assets/images/backgroundFooter.jpg'

const Footer = () => {
  return (
    <div className='flex footer flex-col '>
        <div className='flex bg-[#000018] text-white pt-[8.19vw] pb-[6.12vw]'>
            <div className='footer__left font-exoFont flex flex-col ml-[28.62vw]'>
                <h2 className='text-[1.25vw] mb-[1vw]'>VỀ CHÚNG TÔI</h2>
                <h2 className='w-[19.25vw] mb-[2.31vw]'>CLB KIỂM TOÁN VIÊN TƯƠNG LAI t.FAC - NEU</h2>
                <p className='text-[0.875vw] footer__content'>Hoạt động dưới sự bảo trợ của Viện Kế toán - Kiểm toán trường Đại học Kinh tế Quốc dân (SAA) và Hiệp Hội Kế toán Công chứng Anh Quốc (ACCA), CLB Kiểm toán viên tương lai t.FAC đã trải qua 18 năm hình thành và phát triển, tiếp tục thực hiện sứ mệnh đồng hành cùng các bạn sinh viên Kế - Kiểm trên con đường chinh phục tương lai của mình.</p>
            </div>
            <div className='ml-[6.25vw] footer__right contract mr-[1.7vw]'>
              <h2 className='text-[1.25vw]  mb-[1.06vw] footer__right-title'>LIÊN HỆ</h2>
              <div className='flex flex-col gap-[0.5vw]'>
                <p className='w-fit cursor-pointer font-exoFont contract__button flex mr-[0.5vw] px-[1.12vw] py-[0.38vw] border-[#8B8B8B] rounded-full border-[1px]'>FANPAGE CUỘC THI <Image src={toRight} alt='img'/></p>
                <p className='w-fit cursor-pointer font-exoFont contract__button flex mr-[0.5vw] px-[1.12vw] py-[0.38vw] border-[#8B8B8B] rounded-full border-[1px]'>FANPAGE CLB t.FAC <Image src={toRight} alt='img'/></p>
              </div>
              <div className='mt-[2vw] flex flex-col gap-[0.62vw] w-[24.9568vw]'>
                <div className='flex gap-[0.94vw] contract__info items-start'>
                    <Image src={phone} alt='img'/>
                    <span>0908 051 103 (Ms. Hoàng Ngân)</span>
                </div>
                <div  className='flex gap-[0.94vw] contract__info items-start'>
                    <Image src={mail} alt='img'/>
                    <span>thefutureauditorsclub@gmail.com</span>
                </div>
                <div  className='flex gap-[0.94vw] contract__info items-start'>
                    <Image src={local} alt='img'/>
                    <span className='w-[19.00838vw]'>Trường Đại học Kinh tế Quốc dân, 207 Giải Phóng, Hai Bà Trưng, Hà Nội.</span>
                </div>
              </div>
            </div>
        </div>
        <div className='relative'>
            <Image src={backgroundFooter} alt='' className='absolute -z-10 h-[20.7vw] w-full'/>
            <div className='flex justify-between mx-[6.25vw] mb-[1.02vw] mt-[10.38vw]'>
                <div>
                    <p className='font-exoFont text-[1vw] font-normal leading-[1.5vw] text-[#E3F7FF] mb-[1.19vw] uppercase'>QUICK LINKS</p>
                    <ul className='list-footer flex w-[37.0625vw] justify-between'>
                        <li>TRANG CHỦ</li>
                        <li>Giới thiệu</li>
                        <li>Thể lệ</li>
                        <li>Giải thưởng</li>
                        <li>Đối tác</li>
                        <li>Về chúng tôi</li>
                    </ul>
                </div>
                <div>
                    <Image src={logoFooterImg} alt='' className='w-[9.62531vw] h-[3.93775vw]'/>
                    <p className='bg-white text-black text-[0.77788vw] font-arial mt-[0.18vw] px-[0.54vw]'>The Future Auditors Club</p>
                </div>
            </div>
            <div className='w-[87.5vw] h-[0.0625vw] mx-auto bg-[#FF9EFC]'></div>
            <p className='text-[#A4DEFF] text-[0.75vw] font-normal leading-[1vw] w-full text-right pr-[6.25vw] pb-[1.7vw] mt-[0.85vw]'>© 2023 The Audit Race 2023</p>
        </div>
    </div>
  )
}

export default Footer