'use client'
import React, { useState } from 'react'
import logoImg from '@/assets/images/logo.png'
import Image from 'next/image'
import { headerPaths } from '@/utils/paths'
import Link from 'next/link'
import ButtonCustom from '@/components/tags/ButtonCustom'
import Line from '@/components/common/Line'
import Line2 from '@/components/common/Line2'
import { usePathname } from 'next/navigation'
import Navbar from './Navbar'
import closeImg from '@/assets/images/svg/close.svg'

const Header = () => {
    const [show, setShow] = useState()
    const pathname = usePathname()
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
    <div className='absolute z-50 top-0 header whitespace-nowrap overflow-x-hidden max-md:h-[14.6408vw] max-md:bg-[#01026D] max-md:fixed'>
        <div className=' flex text-main h-[5.94vw] items-center mx-[13.16vw] mr-[16.19vw] justify-between 
        max-md:items-center max-md:h-[14.6408vw] max-md:w-[calc(100vw-10.88vw)] max-md:mx-[5.44vw]'>
            <Link href={'/'}><Image src={logoImg} alt='logo' className='w-[9.875vw] h-[2.00894vw] mr-[2.5vw] max-md:w-[32.1104vw] max-md:h-[6.53vw]'/></Link>
            <ul className='flex gap-[0.25vw] mr-[1.5vw] max-md:hidden'>
            {
                headerPaths?.map((item) => (
                    <Link onClick={handleScroll} 
                      href={item?.link} key={item?.id} className='text-[1vw] font-bold font-exoFont uppercase px-[1vw] '>
                        {item?.name}
                    </Link>
                ))
            }
            </ul>
            {pathname !== '/form-register' && <Link className='max-md:hidden' href={'/form-register'}><ButtonCustom text={'Đăng kí dự thi'} /></Link>}

            <div className='max-md:flex hidden items-center gap-[4.32vw]'>
                <Link href={'/form-register'}><ButtonCustom text={'Đăng kí dự thi'} /></Link>
                {!show && <div className='hidden max-md:block' onClick={() => setShow(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path d="M3.57617 7.45117H21.5762" stroke="#FFD5FE" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M3.57617 12.4512H21.5762" stroke="#FFD5FE" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M3.57617 17.4512H21.5762" stroke="#FFD5FE" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                </div>}
                {show && <div onClick={() => setShow(false)}>
                    <Image src={closeImg} alt='close'/>
                </div>}
            </div>
            
        </div>
        <Line2 />
        {show && <Navbar setShow={setShow}/>}
    </div>
  )
}

export default Header