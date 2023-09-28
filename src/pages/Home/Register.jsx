import React from 'react'
import Image from 'next/image'
import barImg from '@/assets/images/svg/thanhngang.svg'
import registerBg from '@/assets/images/registerBg.png'
import partnerTitle from '@/assets/images/svg/partner.svg'
import logoImg from '@/assets/images/logo.png'
import partnerBgMb from '@/assets/images/partnerbgMb.png'

const Registers = () => {
  return (
    <div className='relative w-full pt-[5.625vw] pb-[18.5vw] pr-[6.25vw] pl-[13.9375vw] mt-[-0.1vw max-md:px-[5.3vw] max-md:pt-[11.2vw] max-md:pb-[104.5vw]'>
        <Image fill src={registerBg} alt='partner__bg' className='absolute top-0 left-0 object-cover z-[-1]'></Image>
        <Image fill src={partnerBgMb} alt='partner__bg' className='hidden absolute top-0 left-0 object-cover z-[-1] max-md:block'></Image>
        <div className='flex justify-end'>
            {/* <h2>Thể lệ</h2>
            <div>Icon</div> */}
            <Image src={barImg} alt='bar' width={328.9} height={65.55} className='w-[20.55625vw]'></Image>
        </div>
        <div className='flex flex-col items-start mt-[5.8125vw] max-md:items-center max-md:mt-[-7vw]'>
            <Image src={logoImg} width={152.286} height={30.981} className='w-[9.5vw] max-md:w-[17.8vw]'></Image>
            <h2 className='font-exoFont font-medium leading-[1.38] uppercase text-[2.6875vw] mt-[2vw] text-[#E3F7FF] max-md:text-[6.4vw] max-md:text-center max-md:mt-[5.8vw]'>Tham gia cuộc đua <br></br> và trở thành <b className='font-bold'> Nhà vô địch </b> </h2>
            <span className='mt-[0.5vw] text-[#A4DEFF] leading-[1.5] tracking-[-0.08px] text-[1vw] max-md:text-[2.6vw] max-md:mt-[2.3vw]'>Điền vào đơn đăng ký phía dưới để nộp hồ sơ tham dự cuộc thi.</span>
            <button className='py-[0.875vw] px-[2.5625vw] border border-solid bodder-[#FFDBC7] rounded-[1.6875vw] font-exoFont text-[1vw] font-bold leading-[1.5] mt-[2vw] text-[#FFF8FF] uppercase max-md:text-[2.6vw] max-md:mt-[5.8vw] max-md:py-[2.1vw] max-md:px-[6.3vw] rounded-[4vw]' style={{background:'linear-gradient(92deg, #F07DED 0.27%, #EC4AE7 51.91%, #F281EF 99.31%)', boxShadow:'0px 0px 36px 0px rgba(223, 97, 255, 0.38), 0px 0px 11px 0px rgba(255, 97, 239, 0.33), 0px 0px 75px 0px rgba(233, 97, 255, 0.59), 0px 0px 18px 0px rgba(252, 97, 255, 0.06), 0px 0px 20px 0px rgba(228, 57, 183, 0.20)'}}> Đăng ký dự thi </button>
        </div>
    </div>
  )
}

export default Registers