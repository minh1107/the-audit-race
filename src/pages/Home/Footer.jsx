'use client'
import React from 'react'
import toRight from '@/assets/images/svg/toRIght.svg' 
import mail from '@/assets/images/svg/mail.svg' 
import phone from '@/assets/images/svg/phone.svg' 
import local from '@/assets/images/svg/local.svg' 
import Image from 'next/image'
import logoFooterImg from '@/assets/images/svg/logoFooter.svg'
import '@/scss/page/footer.css'
import backgroundFooter from '@/assets/images/backgroundFooter.jpg'
import footerLogoUp from '@/assets/images/footerLogoUp.png'
import footerLogoDown from '@/assets/images/footerLogoDown.png'
import footerBlur from '@/assets/images/svg/footerBlur.svg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Footer = () => {
    const pathname = usePathname()
    console.log(pathname)
    const handleScroll = (e) => {
        e.preventDefault();
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
          behavior: "smooth",
        });
      };
  return (
    <div className='flex footer flex-col' id='vechungtoi'>
        <div className='flex bg-[#000018] relative text-white pt-[8.19vw] pb-[6.12vw] max-md:flex-col max-md:pt-[19.09vw] max-md:pb-[18.488vw]'>
            <Image  src={footerBlur} alt='background' className='absolute top-0 w-[24vw] blur-2xl right-[10%] -z-10'/>
            <Image src={footerLogoUp} alt='' className='absolute w-[18.875vw] h-[18.875vw] top-[-50%] left-[2%] z-50 translate-y-[50%] max-md:hidden'/>
            <Image src={footerLogoDown} alt='' className='absolute w-[31.5vw] h-[31.5vw] top-[-50%] left-[-4%] translate-y-[10%] z-30 max-md:hidden'/>
            <div data-aos="fade-up" className='footer__left font-exoFont flex flex-col ml-[28.62vw] max-md:ml-[7.736vw]'>
                <h2 className='text-[1.25vw] mb-[1vw] max-md:text-[3.2vw] max-md:mb-[1.06vw] max-md:leading-[166%]'>VỀ CHÚNG TÔI</h2>
                <h2 className='w-[19.25vw] mb-[2.31vw] max-md:text-[5.3vw] max-md:leading-[150%] max-md:mb-[4.34vw] max-md:w-[67.11vw]'>CLB KIỂM TOÁN VIÊN TƯƠNG LAI t.FAC - NEU</h2>
                <p className='text-[0.875vw] footer__content max-md:w-[84.29vw] max-md:leading-[150%] max-md:text-[3.2vw]'>
                    Hoạt động dưới sự bảo trợ của Viện Kế toán - Kiểm toán trường Đại học Kinh tế Quốc dân (SAA) và Hiệp Hội Kế toán Công chứng Anh Quốc (ACCA), CLB Kiểm toán viên tương lai t.FAC đã trải qua 18 năm hình thành và phát triển, tiếp tục thực hiện sứ mệnh đồng hành cùng các bạn sinh viên Kế - Kiểm trên con đường chinh phục tương lai của mình.</p>
            </div>
            <div data-aos="fade-up" className='ml-[6.25vw] footer__right contract mr-[1.7vw] max-md:ml-[7.736vw] max-md:mt-[18.568vw]'>
              <h2 className='text-[1.25vw]  mb-[1.06vw] footer__right-title max-md:text-[5.33vw] max-md:mb-[6.2vw]'>LIÊN HỆ</h2>
              <div className='flex flex-col gap-[0.5vw]'>
                <Link href={'https://www.facebook.com/theauditrace'} className='w-fit cursor-pointer font-exoFont contract__button flex mr-[0.5vw]
                px-[1.12vw] py-[0.38vw] border-[#8B8B8B] rounded-full border-[1px] items-center '>
                    <span className='max-md:text-[4.26vw] max-md:py-[1.6vw] max-md:px-[4.8vw] max-md:font-normal'>FANPAGE CUỘC THI</span> <Image src={toRight} alt='img'/></Link>
                <Link href={'https://www.facebook.com/club.tFAC.neu'} className='w-fit cursor-pointer font-exoFont contract__button max-md:mt-[2vw]
                flex mr-[0.5vw] px-[1.12vw] py-[0.38vw] border-[#8B8B8B] rounded-full border-[1px] items-center'>
                    <span className='max-md:text-[4.26vw] max-md:py-[1.6vw] max-md:px-[4.8vw] max-md:font-normal'>FANPAGE CLB t.FAC</span> <Image src={toRight} alt='img'/></Link>
              </div>
              <div className='mt-[2vw] flex flex-col gap-[0.62vw] w-[27.9568vw] max-md:w-full max-md:gap-[2.66vw] max-md:mt-[8.53vw]'>
                <div className='flex gap-[0.94vw] contract__info items-start max-md:gap-[4vw]'>
                    <Image src={phone} alt='img'/>
                    <span className='max-md:text-[3.73vw]'>0908 051 103 (Ms. Hoàng Ngân)</span>
                </div>
                <div  className='flex gap-[0.94vw] contract__info items-start max-md:gap-[4vw]'>
                    <Image src={mail} alt='img'/>
                    <span className='max-md:text-[3.73vw]'>thefutureauditorsclub@gmail.com</span>
                </div>
                <div  className='flex gap-[0.94vw] contract__info items-start max-md:gap-[4vw]'>
                    <Image src={local} alt='img'/>
                    <span className='w-[22.670838vw] max-md:text-[3.73vw] max-md:w-full max-md:leading-normal'>Trường Đại học Kinh tế Quốc dân, 207 Giải Phóng, Hai Bà Trưng, Hà Nội.</span>
                </div>
              </div>
            </div>
        </div>
        <div className='relative'>
            <Image src={backgroundFooter} alt='background' className='absolute -z-10 h-[20.7vw] w-full max-md:h-[100vw]'/>
            <div data-aos="fade-up" className='flex justify-between mx-[6.25vw] mb-[1.02vw] mt-[10.38vw] max-md:mt-[25.24vw] max-md:mb-[6.48vw] max-md:mx-[2.93vw]'>
                <div className='self-end'>
                    <p className='font-exoFont text-[1vw] font-normal leading-[1.5vw]
                     text-[#E3F7FF] mb-[1.19vw] uppercase max-md:leading-[150%] max-md:text-[4.26vw] max-md:mb-[6.13vw]'>QUICK LINKS</p>
                    <ul className='list-footer w-[37.0625vw] justify-between flex max-md:hidden'>
                        <Link onClick={pathname !== '/form-register' && handleScroll} href={pathname == '/form-register' ? '/' : '#home'} className='text-white text-[0.75vw] uppercase'>TRANG CHỦ</Link>
                        <Link onClick={pathname !== '/form-register' && handleScroll} className='text-white uppercase text-[0.75vw]' href={pathname == '/form-register' ? '/#gioithieu' : '#gioithieu'}>Giới thiệu</Link>
                        <Link onClick={pathname !== '/form-register' && handleScroll} className='text-white uppercase text-[0.75vw]' href={pathname == '/form-register' ? '/#thele' : '#thele'}>Thể lệ</Link>
                        <Link onClick={pathname !== '/form-register' && handleScroll} className='text-white uppercase text-[0.75vw]' href={pathname == '/form-register' ? '/#top6' : '#top6'}>Top 6</Link>
                        <Link onClick={pathname !== '/form-register' && handleScroll} className='text-white uppercase text-[0.75vw]' href={pathname == '/form-register' ? '/#giaithuong' : '#giaithuong'}>Giải thưởng</Link>
                        <Link onClick={pathname !== '/form-register' && handleScroll} className='text-white uppercase text-[0.75vw]' href={pathname == '/form-register' ? '/#doitac' : '#doitac'}>Đối tác</Link>
                        <Link onClick={pathname !== '/form-register' && handleScroll} className='text-white uppercase text-[0.75vw]' href={pathname == '/form-register' ? '/#vechungtoi' : '#vechungtoi'}>Về chúng tôi</Link>
                    </ul>
                    <ul className='list-footer hidden w-[37.0625vw] justify-between max-md:flex max-md:gap-[10.93vw] max-md:w-[53.33vw] max-md:h-[21.6vw]'>
                        <div className='flex flex-col justify-between'>
                            <Link onClick={pathname !== '/form-register' && handleScroll} className='text-white text-[3.2vw] uppercase' href={pathname == '/form-register' ? '/' : '#home'}>TRANG CHỦ</Link>
                            <Link onClick={pathname !== '/form-register' && handleScroll} className='text-white uppercase text-[3.2vw]' href={pathname == '/form-register' ? '/#gioithieu' : '#gioithieu'}>Giới thiệu</Link>
                            <Link onClick={pathname !== '/form-register' && handleScroll} className='text-white uppercase text-[3.2vw]' href={pathname == '/form-register' ? '/#thele' : '#thele'}>Thể lệ</Link>
                            <Link onClick={pathname !== '/form-register' && handleScroll} className='text-white uppercase text-[3.2vw]' href={pathname == '/form-register' ? '/#top6' : '#top6'}>Top 6</Link>
                        </div>
                        <div className='flex flex-col justify-between'>
                            <Link onClick={pathname !== '/form-register' && handleScroll} className='text-white uppercase text-[3.2vw]' href={pathname == '/form-register' ? '/#giaithuong' : '#giaithuong'}>Giải thưởng</Link>
                            <Link onClick={pathname !== '/form-register' && handleScroll} className='text-white uppercase text-[3.2vw]' href={pathname == '/form-register' ? '/#doitac' : '#doitac'}>Đối tác</Link>
                            <Link onClick={pathname !== '/form-register' && handleScroll} className='text-white uppercase text-[3.2vw]' href={pathname == '/form-register' ? '/#vechungtoi' : '#vechungtoi'}>Về chúng tôi</Link>
                            <Link onClick={pathname !== '/form-register' && handleScroll} className='text-white uppercase text-[3.2vw] opacity-0' href={pathname == '/form-register' ? '/#vechungtoi' : '#vechungtoi'}>""</Link>
                        </div>
                    </ul>
                </div>
                <div className='max-md:mb-0 max-md:self-end'>
                    <Image src={logoFooterImg} alt='' className='w-[9.62531vw] h-[3.93775vw] max-md:h-[7.97vw] max-md:w-[19.46vw]'/>
                    <p className='bg-white text-black text-[0.77788vw] font-arial mt-[0.18vw] px-[0.54vw] max-md:text-[1.6vw]'>The Future Auditors Club</p>
                </div>
            </div>
            <div className='w-[87.5vw] h-[0.0625vw] mx-auto bg-[#FF9EFC] max-md:w-[94.13vw]'></div>
            <p className='text-[#A4DEFF] text-[0.75vw] font-normal leading-[1vw] w-full text-right pr-[6.25vw] pb-[1.7vw] mt-[0.85vw]
            max-md:text-[3.2vw] max-md:leading-[133.333%] max-md:mt-[2.944vw] max-md:pb-[7.912vw]'>© 2023 The Audit Race 2023</p>
        </div>
    </div>
  )
}

export default Footer