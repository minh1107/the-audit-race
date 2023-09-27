'use client'
import React from 'react'
import logoImg from '@/assets/images/logo.png'
import Image from 'next/image'
import { headerPaths } from '@/utils/paths'
import Link from 'next/link'
import ButtonCustom from '@/components/tags/ButtonCustom'
import Line from '@/components/common/Line'
import Line2 from '@/components/common/Line2'
import { usePathname } from 'next/navigation'

const Header = () => {
    const pathname = usePathname()
    console.log(pathname)
    return (
    <div className='absolute z-50 top-0 header whitespace-nowrap overflow-x-hidden'>
        <div className=' flex text-main h-[5.94vw] items-center mx-[13.16vw] mr-[16.19vw] justify-between'>
            <Link href={'/'}><Image src={logoImg} alt='logo' className='w-[9/875vw] h-[2.00894vw] mr-[2.5vw]'/></Link>
            <ul className='flex gap-[0.25vw] mr-[1.5vw] max-md:hidden'>
            {
                headerPaths?.map((item) => (
                    <Link href={item?.link} key={item?.id} className='text-[1vw] font-bold font-exoFont uppercase px-[1vw] '>
                        {item?.name}
                    </Link>
                ))
            }
            </ul>
            {pathname !== '/form-register' && <Link href={'/form-register'}><ButtonCustom text={'Đăng kí dự thi'} /></Link>}
        </div>
        <Line2 />
    </div>
  )
}

export default Header