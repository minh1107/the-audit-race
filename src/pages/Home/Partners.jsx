import React from 'react'
import Image from 'next/image'
import barImg from '@/assets/images/svg/thanhngang.svg'
import partnerBg from '@/assets/images/partnerBg.png'
import partnerTitle from '@/assets/images/svg/partner.svg'

const data=[{title: 'Nhà tài trợ bạch kim', partner: [{title:'SAPP',src:'/sapp.png'}]},
{title: 'Nhà tài trợ vàng', partner: [{title:'BISC', src:'/bisc.png'}, {title: 'Smart Train',src:'/smartrain.png'}, {title:'Okhub',src:'/okhub.png'}]},
{title: 'Nhà tài trợ đồng', partner: [{title:'Izone', src:'/izone.png'}, {title:'Ace the Future',src:'/ace.png'}]},
{title: 'Bảo trợ chuyên môn', partner: [{title:'Grant thorton', src:'/grantthornton.png'}, {title:'Pwc',src:'/pwc.png'}]},
{title: 'Nhà tài trợ hiện vật', partner: [{title:'St lighthouse',src:'/stlighthouse.png'}, {title:'Binh An House',src:'/binhanhouse.png'}, {title: 'Color me',src:'/colorme.png'}, {title:'Spark Prep',src:'/sparkprep.png'}, {title: 'Vocco Centre',src:'/vococentre.png'}, {title:'Dol English',src:'/dolenglish.png'}, {title: 'Studynow Ontario',src:'/studynowontario.png'}]},
{title: 'Bảo trợ truyền thông', partner: [{title:'AdSangTao',src:'/adsangtao.png'}, {title: 'Esight',src:'/esight.png'}, {title:'Ybox',src:'/ybox.png'}, {title:'Edu2Review',src:'/edu2review.png'}]},
]
const Partners = () => {
  return (
    <div className='relative w-full pt-[5.625vw] pb-[17.625vw] px-[6.25vw] mt-[-0.1vw]'>
        <Image fill src={partnerBg} alt='partner__bg' className='absolute top-0 left-0 object-cover z-[-1]'></Image>
        <div className='flex justify-between'>
            {/* <h2>Thể lệ</h2>
            <div>Icon</div> */}
            <Image src={partnerTitle} alt='partners__title' width={359} height={143} className='w-[22.4375vw]'></Image>
            <Image src={barImg} alt='bar' width={328.9} height={65.55} className='w-[20.55625vw]'></Image>
        </div>
        <div className='mt-[9.3125vw] flex flex-col gap-[4.5vw]'>
            {data.map((item, index) => (
                <div key={index} className='pb-[0.5vw] border-b border-solid border-[#493BA1]'>
                    <h2 className='font-exoFont text-[1.5vw] font-bold leading-[2.25] text-[#FFC6FD] uppercase'>{item.title}</h2>
                    <div className='flex gap-[2vw] mt-[1.5vw]'>
                    {item.partner.map((itm, indx) => (
                        <div key={indx}> 
                            <h3 className='text-[#A824A4] text-[1vw] leading-[2.14] uppercase'>{itm.title}</h3>
                            <Image src={itm.src} alt="partner__picture" width={208} height={83} className='w-auto h-[5.1875vw] object-contain'></Image>
                        </div>
                    ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Partners