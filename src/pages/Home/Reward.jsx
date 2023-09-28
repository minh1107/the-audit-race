'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import rewardBg from '@/assets/images/rewardBg.png'
import rewardTitle from '@/assets/images/svg/rewardTitle.svg'
import reward4 from '@/assets/images/reward4.png'
import reward5 from '@/assets/images/reward5.png'
import reward6 from '@/assets/images/reward6.png'
import arrow from '@/assets/images/svg/doubleArrow2.svg'
import arrow4 from '@/assets/images/svg/4arrows.svg'

const data = [
  {timeline: 'first launch',date: '27/09 - 13/10', title: 'Mở đơn', subtitle: 'Thí sinh điền đơn đăng ký thông qua Website của cuộc thi. ', description:'' , goal:'Thông qua đơn đăng ký, BTC sẽ lựa chọn Top 200 thí sinh phù hợp để bước vào Vòng 2.'},
  {timeline: 'ENTER THE FAST LANE',date: '21/10 - 22/10', title: 'Test offline', subtitle: 'Thí sinh thực hiện bài kiểm tra cá nhân bao gồm 40 câu hỏi trong vòng 60 phút. Nội dung bài kiểm tra gồm các kiến thức: ', description:'<ul><li>KẾ TOÁN ( KẾ TOÁN TÀI CHÍNH, KẾ TOÁN QUẢN TRỊ)</li><li>Kiểm toán</li></ul>' , goal:'Thông qua đơn đăng ký, BTC sẽ lựa chọn Top 200 thí sinh phù hợp để bước vào Vòng 2.'},
  {timeline: 'ACCELERATION',date: '28/10 - 05/11', title: 'Thử thách casestudy', subtitle: 'Training & Networking (29/10)', description:'<p>Top 30 thí sinh xuất sắc nhất sẽ được tham gia buổi Training & Networking để được bồi dưỡng các kiến thức chuyên môn giúp ích cho việc giải case study Vòng 3 và gặp gỡ, làm quen các đồng đội và Mentor.</p><p>30 thí sinh sẽ được chia thành 6 đội, mỗi đội sẽ có 05 thành viên và thực hiện giải một case study về Kiểm toán trong vòng 3 ngày dưới sự tư vấn của các Mentor - các Senior trong các Công ty Kiểm toán lớn.</p>' , goal:'Kết thúc vòng 3, 06 thí sinh xuất sắc nhất sẽ bước vào Vòng 4 - Đêm Chung kết.'},

]
const Reward = () => {
    const ref1= useRef()
    const ref2= useRef()
    const ref3= useRef()
    const ref4= useRef()
    const ref5= useRef()
    const ref6= useRef()
    const ref7= useRef()
    const ref8= useRef()
    const ref9= useRef()
    const button1Handler = () => {
        ref1.current.style.height = 'fit-content'
        ref4.current.style.display='none'
        ref7.current.style.display='none'
    }
    const button2Handler = () => {
        ref2.current.style.height = 'fit-content'
        ref5.current.style.display='none'
        ref8.current.style.display='none'
    }
    const button3Handler = () => {
        ref3.current.style.height = 'fit-content'
        ref6.current.style.display='none'
        ref9.current.style.display='none'
    }
  return (
    <div className='relative z-[2] px-[6.25vw] pt-[7.8125vw] pb-[8.875vw] mt-[-0.1vw]'>
        <Image fill src={rewardBg} alt='reward__bg' className='absolute top-0 left-0 object-cover z-[-1]'></Image>
        <div className='flex flex-col items-center'>
            <Image width={540.74} height={143.65} src={rewardTitle} alt='reward__title' className='w-33.75vw'></Image>
            <div className='flex mt-[13.3125vw] gap-[1.875vw] relative'>
                <Image src={arrow4} width={63} height={33} className='absolute w-[3.9375vw] left-0 top-0'></Image>
                <Image src={arrow4} width={63} height={33} className='absolute w-[3.9375vw] right-0 top-[4.5vw]'></Image>
            <div className='rounded-[0.5vw] relative border w-[27.9vw] pt-[8.4375vw] mt-[3vw] flex flex-col items-center' style={{background: 'linear-gradient(180deg, rgba(255, 158, 252, 0.30) 0%, rgba(255, 158, 252, 0.00) 100%)'}}>
                <Image src={reward4} alt='reward4' width={500} height={500} className='absolute w-[13.25vw] top-0 left-[50%] translate-x-[-50%] translate-y-[-70%]'></Image>
                <div className='flex gap-[0.5vw] items-end'> 
                    <svg className='w-[4.1875vw]' xmlns="http://www.w3.org/2000/svg" width="69" height="18" viewBox="0 0 69 18" fill="none">
                        <path d="M38.4621 0.879395L68.1743 0.880327L60.7308 2.90775H38.4621L6.20362 17.3825H0.672112L38.4621 0.879395Z" fill="#FFC6FD"/>
                    </svg>
                    <h2 className='font-exoFont text-[2.25vw] text__gradient2 font-bold leading-[1.5] uppercase' style={{textShadow: '0px 0px 0.5625vw #EC4AE7, 0px 0px 0.1875vw #FA75F6'}}> Á quân 1 </h2>
                    <svg className='w-[4.1875vw]' xmlns="http://www.w3.org/2000/svg" width="68" height="18" viewBox="0 0 68 18" fill="none">
                        <path d="M29.8865 0.879395L0.174309 0.880327L7.61779 2.90775H29.8865L62.145 17.3825H67.6765L29.8865 0.879395Z" fill="#FFC6FD"/>
                    </svg>
                </div>
                <ul className='text-[#A4DEFF] px-[2.3125vw] list-disc mt-[1.8125vw] text-[0.875vw] h-[20vw] overflow-hidden flex flex-col gap-[0.5vw]' ref={ref1}>
                    <li>
                        <b className='font-bold'>Hiện Kim:</b> 5.000.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>Cơ hội trở thành thực tập sinh chính thức tại Grant Thornton Vietnam</b>
                    </li>
                    <li>
                        <b className='font-bold'>Sapp:</b> Gói học bổng trị giá 18 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                    <li>
                        <b className='font-bold'>Sapp:</b> Gói học bổng trị giá 18 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                    <li>
                        <b className='font-bold'>Sapp:</b> Gói học bổng trị giá 18 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                    <li>
                        <b className='font-bold'>Sapp:</b> Gói học bổng trị giá 18 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                    <li>
                        <b className='font-bold'>Sapp:</b> Gói học bổng trị giá 18 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                    <li>
                        <b className='font-bold'>Sapp:</b> Gói học bổng trị giá 18 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                    <li>
                        <b className='font-bold'>Sapp:</b> Gói học bổng trị giá 18 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                    <li>
                        <b className='font-bold'>Sapp:</b> Gói học bổng trị giá 18 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                </ul>
                <div ref={ref4} className='absolute w-full h-[14.4375vw] bottom-[-0.2vw] left-0' style={{background: 'linear-gradient(0deg, #01026D 0%, rgba(1, 2, 109, 0.00) 100%)'}}></div>
                <button ref={ref7} onClick={button1Handler} className='absolute bottom-[1vw] left-[50%] translate-x-[-50%] px-[1.5vw] py-[0.8vw] text-white font-exoFont font-bold uppercase text-[1vw] border rounded-[1.05vw]'> Xem chi tiết</button>
            </div>
            <div className='rounded-[0.5vw] relative border w-[27.9vw] pt-[8.4375vw] flex flex-col items-center' style={{background: 'linear-gradient(180deg, rgba(255, 158, 252, 0.30) 0%, rgba(255, 158, 252, 0.00) 100%)'}}>
                <Image src={reward5} alt='reward5' width={500} height={500} className='absolute w-[15.25vw] top-0 left-[50%] translate-x-[-50%] translate-y-[-75%]'></Image>
                <div className='flex gap-[0.5vw] items-end'> 
                    <svg className='w-[4.1875vw]' xmlns="http://www.w3.org/2000/svg" width="69" height="18" viewBox="0 0 69 18" fill="none">
                        <path d="M38.4621 0.879395L68.1743 0.880327L60.7308 2.90775H38.4621L6.20362 17.3825H0.672112L38.4621 0.879395Z" fill="#FFC6FD"/>
                    </svg>
                    <h2 className='font-exoFont text-[2.25vw] text__gradient2 font-bold leading-[1.5] uppercase' style={{textShadow: '0px 0px 0.5625vw #EC4AE7, 0px 0px 0.1875vw #FA75F6'}}> Quán quân </h2>
                    <svg className='w-[4.1875vw]' xmlns="http://www.w3.org/2000/svg" width="68" height="18" viewBox="0 0 68 18" fill="none">
                        <path d="M29.8865 0.879395L0.174309 0.880327L7.61779 2.90775H29.8865L62.145 17.3825H67.6765L29.8865 0.879395Z" fill="#FFC6FD"/>
                    </svg>
                </div>
                <ul className='text-[#A4DEFF] px-[2.3125vw] list-disc mt-[1.8125vw] text-[0.875vw] h-[20vw] overflow-hidden flex flex-col gap-[0.5vw]' ref={ref2}>
                    <li>
                        Hiện Kim: 5.000.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>Cơ hội trở thành thực tập sinh chính thức tại Grant Thornton Vietnam</b>
                    </li>
                    <li>
                        <b className='font-bold'>Sapp:</b> Gói học bổng trị giá 18 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                    <li>
                        <b className='font-bold'>Sapp:</b> Gói học bổng trị giá 18 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                    <li>
                        <b className='font-bold'>Sapp:</b> Gói học bổng trị giá 18 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                    <li>
                        <b className='font-bold'>Sapp:</b> Gói học bổng trị giá 18 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                    <li>
                        <b className='font-bold'>Sapp:</b> Gói học bổng trị giá 18 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                    <li>
                        <b className='font-bold'>Sapp:</b> Gói học bổng trị giá 18 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                    <li>
                        <b className='font-bold'>Sapp:</b> Gói học bổng trị giá 18 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                    <li>
                        <b className='font-bold'>Sapp:</b> Gói học bổng trị giá 18 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                </ul>
                <div ref={ref5} className='absolute w-full h-[14.4375vw] bottom-[-0.2vw] left-0' style={{background: 'linear-gradient(0deg, #01026D 0%, rgba(1, 2, 109, 0.00) 100%)'}}></div>
                <button ref={ref8} onClick={button2Handler} className='absolute bottom-[1vw] left-[50%] translate-x-[-50%] px-[1.5vw] py-[0.8vw] text-white font-exoFont font-bold uppercase text-[1vw] border rounded-[1.05vw]'> Xem chi tiết</button>
            </div>
            <div className='rounded-[0.5vw] relative border w-[27.9vw] pt-[8.4375vw] mt-[6vw] flex flex-col items-center' style={{background: 'linear-gradient(180deg, rgba(255, 158, 252, 0.30) 0%, rgba(255, 158, 252, 0.00) 100%)'}}>
                <Image src={reward6} alt='reward6' width={500} height={500} className='absolute w-[10.25vw] top-0 left-[50%] translate-x-[-50%] translate-y-[-70%]'></Image>
                <div className='flex gap-[0.5vw] items-end'> 
                    <svg className='w-[4.1875vw]' xmlns="http://www.w3.org/2000/svg" width="69" height="18" viewBox="0 0 69 18" fill="none">
                        <path d="M38.4621 0.879395L68.1743 0.880327L60.7308 2.90775H38.4621L6.20362 17.3825H0.672112L38.4621 0.879395Z" fill="#FFC6FD"/>
                    </svg>
                    <h2 className='font-exoFont text-[2.25vw] text__gradient2 font-bold leading-[1.5] uppercase' style={{textShadow: '0px 0px 0.5625vw #EC4AE7, 0px 0px 0.1875vw #FA75F6'}}> Á quân 2 </h2>
                    <svg className='w-[4.1875vw]' xmlns="http://www.w3.org/2000/svg" width="68" height="18" viewBox="0 0 68 18" fill="none">
                        <path d="M29.8865 0.879395L0.174309 0.880327L7.61779 2.90775H29.8865L62.145 17.3825H67.6765L29.8865 0.879395Z" fill="#FFC6FD"/>
                    </svg>
                </div>
                <ul className='text-[#A4DEFF] px-[2.3125vw] list-disc mt-[1.8125vw] text-[0.875vw] h-[20vw] overflow-hidden flex flex-col gap-[0.5vw]' ref={ref3}>
                    <li>
                        Hiện kim: 5.000.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>Cơ hội trở thành thực tập sinh chính thức tại Grant Thornton Vietnam</b>
                    </li>
                    <li>
                        <b className='font-bold'>Sapp:</b> Gói học bổng trị giá 18 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                    <li>
                        <b className='font-bold'>Sapp:</b> Gói học bổng trị giá 18 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                    <li>
                        <b className='font-bold'>Sapp:</b> Gói học bổng trị giá 18 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                    <li>
                        <b className='font-bold'>Sapp:</b> Gói học bổng trị giá 18 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                    <li>
                        <b className='font-bold'>Sapp:</b> Gói học bổng trị giá 18 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                    <li>
                        <b className='font-bold'>Sapp:</b> Gói học bổng trị giá 18 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                    <li>
                        <b className='font-bold'>Sapp:</b> Gói học bổng trị giá 18 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                    <li>
                        <b className='font-bold'>Sapp:</b> Gói học bổng trị giá 18 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                </ul>
                <div ref={ref6} className='absolute w-full h-[14.4375vw] bottom-[-0.2vw] left-0' style={{background: 'linear-gradient(0deg, #01026D 0%, rgba(1, 2, 109, 0.00) 100%)'}}></div>
                <button ref={ref9} onClick={button3Handler} className='absolute bottom-[1vw] left-[50%] translate-x-[-50%] px-[1.5vw] py-[0.8vw] text-white font-exoFont font-bold uppercase text-[1vw] border rounded-[1.05vw]'> Xem chi tiết</button>
            </div>
            </div>
        </div>
        <div className='mt-[7vw] flex gap-[7.4375vw] justify-center'>
            <div className='w-[29.375vw]'>
                <div className='flex items-center gap-[0.5vw]'>
                    <Image src={arrow} width={35.92} height={18.27} alt='arrow' className='w-[2.1875vw]'></Image>
                    <h3 className='font-exoFont text-[2.25vw] text-[#FF9EFC] font-bold leading-[1.5] uppercase'>Top 6</h3>
                </div>
                <ul className='text-[#A4DEFF] list-disc mt-[0.75vw] text-[0.875vw] flex flex-col gap-[0.5vw]'>
                    <li>
                        Hiện Kim: 5.000.000VNĐ
                    </li>
                    <li>
                        SAPP: Gói học bổng trị giá 18 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                    <li>
                        SAPP: Gói học bổng trị giá 18 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                    <li>
                        SAPP: Gói học bổng trị giá 18 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                    <li>
                        SAPP: Gói học bổng trị giá 18 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                    <li>
                        SAPP: Gói học bổng trị giá 18 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                    <li>
                        SAPP: Gói học bổng trị giá 18 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                </ul>
            </div>
            <div className='flex flex-col gap-[2.3125vw]'>
            <div className='w-[29.375vw]'>
                <div className='flex items-center gap-[0.5vw]'>
                    <Image src={arrow} width={35.92} height={18.27} alt='arrow' className='w-[2.1875vw]'></Image>
                    <h3 className='font-exoFont text-[2.25vw] text-[#FF9EFC] font-bold leading-[1.5] uppercase'>Top 30</h3>
                </div>
                <ul className='text-[#A4DEFF] list-disc mt-[0.75vw] text-[0.875vw] flex flex-col gap-[0.5vw]'>
                    <li>
                        Hiện Kim: 5.000.000VNĐ
                    </li>
                    <li>
                        SAPP: Gói học bổng trị giá 18 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                    <li>
                        SAPP: Gói học bổng trị giá 18 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                    <li>
                        SAPP: Gói học bổng trị giá 18 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                    <li>
                        SAPP: Gói học bổng trị giá 18 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                    <li>
                        SAPP: Gói học bổng trị giá 18 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                    <li>
                        SAPP: Gói học bổng trị giá 18 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                </ul>
            </div>
            <div className='w-[29.375vw]'>
                <div className='flex items-center gap-[0.5vw]'>
                    <Image src={arrow} width={35.92} height={18.27} alt='arrow' className='w-[2.1875vw]'></Image>
                    <h3 className='font-exoFont text-[2.25vw] text-[#FF9EFC] font-bold leading-[1.5] uppercase'>Top 200</h3>
                </div>
                <ul className='text-[#A4DEFF] list-disc mt-[0.75vw] text-[0.875vw] flex flex-col gap-[0.5vw]'>
                    <li>
                        Hiện Kim: 5.000.000VNĐ
                    </li>
                    <li>
                        SAPP: Gói học bổng trị giá 18 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                    <li>
                        SAPP: Gói học bổng trị giá 18 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                    <li>
                        SAPP: Gói học bổng trị giá 18 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                    <li>
                        SAPP: Gói học bổng trị giá 18 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                    <li>
                        SAPP: Gói học bổng trị giá 18 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                    <li>
                        SAPP: Gói học bổng trị giá 18 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                </ul>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Reward