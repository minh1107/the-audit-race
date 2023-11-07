import Image from 'next/image'
import React from 'react'
import rewardBg from '@/assets/images/rewardBg.png'
import '@/scss/page/top6.css'
import bgimg from '../../../public/bgtop6.png'
import avatar from '../../../public/976a23d80fc7011be6aee1ee2db9c01b.png'

const Avatar = ({className, img, id, name, school, id1, id2}) => {
    return (  
        <div className={`avatar-container max-md:mx-auto flex ${className}`}>
            <div className=' flex mx-auto max-md:mx-0 flex-col items-center'>
                <div className='avatar-frame overflow-hidden'>
                  <Image  alt='' className={`${id && 'w-[17.625vw] scale-125 h-[17.625vw] object-cover max-md:w-[87vw] max-md:h-[87vw] max-md:translate-y-[-20vw] max-md:scale-[100%]'}
                  ${id1 && 'w-[16.625vw] scale-125 h-[23.625vw]  object-contain  max-md:w-[100vw] max-md:scale-[160%] max-md:translate-y-[7vw]'}
                  ${id2 && 'w-[17.625vw] scale-125 h-[20.625vw] object-contain translate-x-[-1vw] max-md:translate-y-[-25vw] max-md:w-[87vw] max-md:h-[87vw]'}
                  `} width={1000} height={1000} src={img}/>
                </div>
                <div className='max-md:mt-[2.13vw]'>
                    <div className='flex w-full mb-[0.2vw] mt-[1.44vw] gap-[0.44vw]'>
                        <svg className='max-md:self-center' xmlns="http://www.w3.org/2000/svg" width="39" height="15" viewBox="0 0 39 15" fill="none">
                        <path d="M21.9784 14.3575L38.6982 14.3567L34.5096 12.6175H21.9784L3.82573 0.199895H0.713001L21.9784 14.3575Z" fill="#FFC6FD"/>
                        </svg>
                        <p className='name max-md:w-full w-[16.25vw] font-exoFont line-clamp-1 uppercase max-md:mt-[2vw]' data-aos="fade-up">{name}</p>
                        <svg className='max-md:self-center' xmlns="http://www.w3.org/2000/svg" width="39" height="15" viewBox="0 0 39 15" fill="none">
                            <path d="M17.1454 14.3575L0.425537 14.3567L4.61418 12.6175H17.1454L35.298 0.199895H38.4108L17.1454 14.3575Z" fill="#FFC6FD"/>
                        </svg>
                    </div>
                    <p className='text-center content font-exoFont line-clamp-1 max-md:text-[2.66667vw]' data-aos="fade-up">{school}</p>
                    {/* <p className='text-center content font-exoFont line-clamp-1' data-aos="fade-up">Fiancial Manager tại HANOI PUACA</p> */}
                    
                </div>
            </div>
        </div>
    )
}

const Top6 = () => {
  return (
    <div className='relative h-[100vw] max-md:h-[200vw]  pt-[6vw]' id='top6'>
        <div className='bg-[#01026D] absolute -z-10 top-0 bottom-0 right-0 left-0'></div>
        <Image src={bgimg} className='absolute -z-10 w-full h-[100vw] max-md:h-[200vw]' alt='hello' /> 
        <Top6bg1 className={'absolute max-md:top-[-2vw] top-[11vw] flex justify-between w-full'}/>
        <div className='flex items-center gap-[1vw] w-full justify-center'>
            <Row1 />
            <p className='title1 font-exoFont' data-aos="fade-up">ĐÊM CHUNG KẾT</p>
            <Row1 classname={'rotate-180'} />
        </div>
        <Image src={'/velocity_unleash.png'} alt='vococentre' className='w-[40vw] mx-auto items-center' data-aos="fade-up" width={1000} height={1000}/> 
        <p className='title3 font-exoFont' data-aos="fade-up">TOP  6 THÍ SINH XUẤT SẮC NHẤT</p>
        <div className='absolute flex flex-wrap justify-between gap-y-[1.5vw] max-md:items-center mx-[10.75vw] mt-[5.19vw]'>
            <Avatar img={'/top1.jpg'} name={'Đào Uy Đạt'} school={'Trường Đại học Ngoại thương'}/>
            {/* <Avatar className={'mt-[2.62vw]'}/> */}
            <Avatar img={'/top2.png'} id1={true} name={'Lương Hoàng Nga'} school={'Trường Đại học Ngoại thương'}/>
            <Avatar img={'/top3.JPG'} id={true}  name={'Lý Bảo Việt'} school={'Trường Đại học Ngoại thương'}/>
            <Avatar img={'/top4.jpg'} name={'Mai Thu Trang'} school={'Trường Đại học Kinh tế Quốc dân'}/>
            {/* <Avatar className={'mt-[-2.62vw]'} name={''}/> */}
            <Avatar img={'/top5.png'} id2={true} name={'Ngô Tuấn Đức'} school={'Trường Đại học Kinh tế Quốc dân'}/>
            <Avatar img={'/top6.png'} name={'Chu Minh Ánh'} school={'Trường Đại học Kinh tế Quốc dân'}/>
        </div>
    </div>
  )
}

export default Top6

const Row1 = ({classname}) => {
    return ( 
        <svg data-aos="fade-up" className={`${classname} w-[9.00244vw] h-[5.30775vw] mb-[-1vw]`} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 150 106" fill="none">
  <g filter="url(#filter0_ddd_5212_1223)">
    <path d="M95.409 27H71L98.6301 53.4628L71 79.9241H95.409L123.039 53.4628L95.409 27Z" fill="url(#paint0_linear_5212_1223)"/>
  </g>
  <g filter="url(#filter1_ddd_5212_1223)">
    <path d="M51.409 27H27L54.6301 53.4628L27 79.9241H51.409L79.0391 53.4628L51.409 27Z" fill="url(#paint1_linear_5212_1223)"/>
  </g>
  <defs>
    <filter id="filter0_ddd_5212_1223" x="44.9239" y="0.92388" width="104.191" height="105.076" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset/>
      <feGaussianBlur stdDeviation="13.0381"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.925 0 0 0 0 0.289062 0 0 0 0 0.904486 0 0 0 1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5212_1223"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset/>
      <feGaussianBlur stdDeviation="4.34602"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.980246 0 0 0 0 0.457958 0 0 0 0 0.963398 0 0 0 1 0"/>
      <feBlend mode="normal" in2="effect1_dropShadow_5212_1223" result="effect2_dropShadow_5212_1223"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="5.79469" dy="11.5894"/>
      <feGaussianBlur stdDeviation="5.79469"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"/>
      <feBlend mode="normal" in2="effect2_dropShadow_5212_1223" result="effect3_dropShadow_5212_1223"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_5212_1223" result="shape"/>
    </filter>
    <filter id="filter1_ddd_5212_1223" x="0.92388" y="0.92388" width="104.191" height="105.076" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset/>
      <feGaussianBlur stdDeviation="13.0381"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.925 0 0 0 0 0.289062 0 0 0 0 0.904486 0 0 0 1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5212_1223"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset/>
      <feGaussianBlur stdDeviation="4.34602"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.980246 0 0 0 0 0.457958 0 0 0 0 0.963398 0 0 0 1 0"/>
      <feBlend mode="normal" in2="effect1_dropShadow_5212_1223" result="effect2_dropShadow_5212_1223"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="5.79469" dy="11.5894"/>
      <feGaussianBlur stdDeviation="5.79469"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"/>
      <feBlend mode="normal" in2="effect2_dropShadow_5212_1223" result="effect3_dropShadow_5212_1223"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_5212_1223" result="shape"/>
    </filter>
    <linearGradient id="paint0_linear_5212_1223" x1="97.0195" y1="27" x2="97.0195" y2="79.9241" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFC6FD"/>
      <stop offset="0.489583" stop-color="#FF9EFC"/>
      <stop offset="1" stop-color="#FFC6FD"/>
    </linearGradient>
    <linearGradient id="paint1_linear_5212_1223" x1="53.0195" y1="27" x2="53.0195" y2="79.9241" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFC6FD"/>
      <stop offset="0.489583" stop-color="#FF9EFC"/>
      <stop offset="1" stop-color="#FFC6FD"/>
    </linearGradient>
  </defs>
</svg>
    )
}


const Top6bg1 = ({className}) => (
    <svg data-aos="fade-up" width="1447" className={className} height="234" viewBox="0 0 1447 234" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_4981_476)">
<ellipse cx="723.5" cy="117" rx="670.5" ry="63.9999" transform="rotate(-180 723.5 117)" fill="url(#paint0_linear_4981_476)" fill-opacity="0.4"/>
</g>
<defs>
<filter id="filter0_f_4981_476" x="0" y="0" width="1447" height="234" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="26.5" result="effect1_foregroundBlur_4981_476"/>
</filter>
<linearGradient id="paint0_linear_4981_476" x1="1394" y1="117" x2="53" y2="117" gradientUnits="userSpaceOnUse">
<stop stop-color="#E3F7FF" stop-opacity="0"/>
<stop offset="0.494792" stop-color="white"/>
<stop offset="1" stop-color="#E3F7FF" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>

)