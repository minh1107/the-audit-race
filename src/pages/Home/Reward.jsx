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
import popupBg from '@/assets/images/awardpopup.png'
import closeBtn from '@/assets/images/svg/close-no-circle.svg'
import classes from './RewardStyle.module.css'

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
    const ref10= useRef()
    const ref11= useRef()
    const ref12= useRef()
    const ref13= useRef()
    const ref14= useRef()
    const ref15= useRef()

    const button1Handler = () => {
        ref1.current.style.display = 'block'
        // ref4.current.style.display='none'
        // ref7.current.style.display='none'
    }
    const button2Handler = () => {
        ref2.current.style.display = 'block'
        // ref5.current.style.display='none'
        // ref8.current.style.display='none'
    }
    const button3Handler = () => {
        ref3.current.style.display = 'block'
        // ref6.current.style.display='none'
        // ref9.current.style.display='none'
    }
    const closebutton1Handler = () => {
        ref1.current.style.display = 'none'
        // ref4.current.style.display='none'
        // ref7.current.style.display='none'
    }
    const closebutton2Handler = () => {
        ref2.current.style.display = 'none'
        // ref5.current.style.display='none'
        // ref8.current.style.display='none'
    }
    const closebutton3Handler = () => {
        ref3.current.style.display = 'none'
        // ref6.current.style.display='none'
        // ref9.current.style.display='none'
    }
    const button4Handler = () => {
        ref4.current.style.display = 'block'
        // ref4.current.style.display='none'
        // ref7.current.style.display='none'
    }
    const button5Handler = () => {
        ref5.current.style.display = 'block'
        // ref5.current.style.display='none'
        // ref8.current.style.display='none'
    }
    const button6Handler = () => {
        ref6.current.style.display = 'block'
        // ref6.current.style.display='none'
        // ref9.current.style.display='none'
    }
    const closebutton4Handler = () => {
        ref4.current.style.display = 'none'
        // ref4.current.style.display='none'
        // ref7.current.style.display='none'
    }
    const closebutton5Handler = () => {
        ref5.current.style.display = 'none'
        // ref5.current.style.display='none'
        // ref8.current.style.display='none'
    }
    const closebutton6Handler = () => {
        ref6.current.style.display = 'none'
        // ref6.current.style.display='none'
        // ref9.current.style.display='none'
    }
  return (
    <div className='relative z-[2] px-[6.25vw] pt-[7.8125vw] pb-[8.875vw] mt-[-0.1vw] max-md:mt-[-0.7vw]'>
        <Image fill src={rewardBg} alt='reward__bg' className='absolute top-0 left-0 object-cover z-[-1]'></Image>
        <div className='flex flex-col items-center'>
            <Image width={540.74} height={143.65} src={rewardTitle} alt='reward__title' className='w-[33.75vw] max-md:w-[53vw]'></Image>
            <div className='flex mt-[13.3125vw] gap-[1.875vw] relative max-md:flex-col max-md:mt-[44.8vw] max-md:gap-[40vw]'>
                <Image src={arrow4} width={63} height={33} className='absolute w-[3.9375vw] left-0 top-0 max-md:hidden'></Image>
                <Image src={arrow4} width={63} height={33} className='absolute w-[3.9375vw] right-0 top-[4.5vw] max-md:hidden'></Image>
            <div className='rounded-[0.5vw] relative border w-[27.9vw] pt-[8.4375vw] mt-[3vw] flex flex-col items-center max-md:w-full max-md:pt-[26.1vw] max-md:rounded-[1.5vw] max-md:order-3 max-md:z-[3]' style={{background: 'linear-gradient(180deg, rgba(255, 158, 252, 0.30) 0%, rgba(255, 158, 252, 0.00) 100%)'}}>
                <Image src={reward4} alt='reward4' width={500} height={500} className='absolute w-[13.25vw] top-0 left-[50%] translate-x-[-50%] translate-y-[-70%] max-md:w-[40vw]'></Image>
                <div className='flex gap-[0.5vw] items-end'> 
                    <svg className='w-[4.1875vw] max-md:w-[12.5vw]' xmlns="http://www.w3.org/2000/svg" width="69" height="18" viewBox="0 0 69 18" fill="none">
                        <path d="M38.4621 0.879395L68.1743 0.880327L60.7308 2.90775H38.4621L6.20362 17.3825H0.672112L38.4621 0.879395Z" fill="#FFC6FD"/>
                    </svg>
                    <h2 className='font-exoFont text-[2.25vw] text__gradient2 font-bold leading-[1.5] uppercase max-md:text-[6.6vw]' style={{textShadow: '0px 0px 0.5625vw #EC4AE7, 0px 0px 0.1875vw #FA75F6'}}> Á quân 1 </h2>
                    <svg className='w-[4.1875vw] max-md:w-[12.5vw]' xmlns="http://www.w3.org/2000/svg" width="68" height="18" viewBox="0 0 68 18" fill="none">
                        <path d="M29.8865 0.879395L0.174309 0.880327L7.61779 2.90775H29.8865L62.145 17.3825H67.6765L29.8865 0.879395Z" fill="#FFC6FD"/>
                    </svg>
                </div>
                <ul className='text-[#A4DEFF] px-[2.3125vw] list-disc mt-[1.8125vw] text-[0.875vw] h-[20vw] overflow-hidden flex flex-col gap-[0.5vw] max-md:text-[2.6vw] max-md:gap-[1.6vw] max-md:h-[30vw] max-md:mt-[5.8vw] max-md:px-[6.9vw]'>
                    <li>
                        <b className='font-bold'>Hiện Kim:</b> 5.000.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>SAPP:</b> Gói học bổng trị giá 18 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                    <li>
                        <b className='font-bold'>Smart Train:</b> Học bổng 45% học phí các môn ACCA (từ MA đến APM), trị giá 50.715.000 VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>BISC:</b> Gói học bổng trị giá 18 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                    <li>
                        <b className='font-bold'>ST Lighthouse:</b> Học bổng 75% cho 1 trong 3 khóa học: Luyện giọng, MC cơ bản, MC chuyên nghiệp.
                    </li>
                    <li>
                        <b className='font-bold'>StudyNowOntario:</b> Học bổng 100% cho khoá học online: Phát Âm Tiếng Anh với giáo viên bản xứ đến từ StudyNow Ontario, trị giá 1.000.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>IZONE</b> Học bổng 60% khóa học IELTS tại IZONE, trị giá 4.400.000 VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>SparkPrep</b> Voucher sử dụng dịch vụ hỗ trợ hồ sơ du học & luyện thi chuẩn hóa 1-1 tại SparkPrep, trị giá 10.000.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>Color Me:</b> Học bổng 100%, trị giá 1.500.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>DOL English:</b> 1 tài khoản độc quyền 6 tháng, trị giá 1.490.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>VOCO Centre:</b> Voucher discount 50% cho khoá học viết MT. Voucher discount 50% cho khoá học viết CV. Thẻ Membership 3 tháng tại VOCO Centre.
                    </li>
                    <li>
                        <b className='font-bold'>ACE The Future:</b> Voucher 800.000 VNĐ học TOEIC (nghe đọc hoặc nói viết) hoặc Let's ACE-Giao tiếp, Thuyết trình, Phỏng vấn Big4.
                    </li>
                </ul>
                <div className='absolute max-w-[120%] w-[120%] h-[14.4375vw] bottom-[-0.2vw] left-[50%] translate-x-[-50%] max-md:h-[22vw] max-md:bottom-[-2vw]' style={{background: 'linear-gradient(0deg, #01026D 0%, rgba(1, 2, 109, 0.00) 100%)'}}></div>
                <button onClick={button1Handler} className='absolute bottom-[1vw] left-[50%] translate-x-[-50%] px-[1.5vw] py-[0.8vw] text-white font-exoFont font-bold uppercase text-[1vw] border rounded-[1.05vw] max-md:text-[4.2vw] max-md:py-[0.9vw] max-md:px-[6.4vw] max-md:rounded-[4vw]'> Xem chi tiết</button>
            </div>
            <div className='rounded-[0.5vw] relative border w-[27.9vw] pt-[8.4375vw] flex flex-col items-center max-md:order-2 max-md:w-full max-md:pt-[26.1vw] max-md:rounded-[1.5vw] max-md:z-[4]' style={{background: 'linear-gradient(180deg, rgba(255, 158, 252, 0.30) 0%, rgba(255, 158, 252, 0.00) 100%)'}}>
                <Image src={reward5} alt='reward5' width={500} height={500} className='absolute w-[15.25vw] top-0 left-[50%] translate-x-[-50%] translate-y-[-75%] max-md:w-[50vw]'></Image>
                <div className='flex gap-[0.5vw] items-end'> 
                    <svg className='w-[4.1875vw] max-md:w-[12.5vw]' xmlns="http://www.w3.org/2000/svg" width="69" height="18" viewBox="0 0 69 18" fill="none">
                        <path d="M38.4621 0.879395L68.1743 0.880327L60.7308 2.90775H38.4621L6.20362 17.3825H0.672112L38.4621 0.879395Z" fill="#FFC6FD"/>
                    </svg>
                    <h2 className='font-exoFont text-[2.25vw] text__gradient2 font-bold leading-[1.5] uppercase max-md:text-[6.6vw]' style={{textShadow: '0px 0px 0.5625vw #EC4AE7, 0px 0px 0.1875vw #FA75F6'}}> Quán quân </h2>
                    <svg className='w-[4.1875vw] max-md:w-[12.5vw]' xmlns="http://www.w3.org/2000/svg" width="68" height="18" viewBox="0 0 68 18" fill="none">
                        <path d="M29.8865 0.879395L0.174309 0.880327L7.61779 2.90775H29.8865L62.145 17.3825H67.6765L29.8865 0.879395Z" fill="#FFC6FD"/>
                    </svg>
                </div>
                <ul className='text-[#A4DEFF] px-[2.3125vw] list-disc mt-[1.8125vw] text-[0.875vw] h-[20vw] overflow-hidden flex flex-col gap-[0.5vw] max-md:text-[2.6vw] max-md:gap-[1.6vw] max-md:h-[30vw] max-md:mt-[5.8vw] max-md:px-[6.9vw]'>
                    <li>
                        <b className='font-bold'>Hiện Kim:</b> 8.000.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>SAPP:</b> Gói học bổng trị giá 22 triệu học phí các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                    <li>
                        <b className='font-bold'>Smart Train:</b> Học bổng 55% học phí các môn ACCA (từ MA đến APM), trị giá 61.895.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>BISC:</b> Học bổng 100% học phí các môn ACCA (từ F1 đến F9) tại BISC, trị giá 48.320.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>ST Lighthouse:</b> Học bổng 100% 1 trong 3 khóa học: Luyện giọng, MC cơ bản, MC chuyên nghiệp.
                    </li>
                    <li>
                        <b className='font-bold'>StudyNowOntario:</b> Học bổng 100% khóa học IELTS tại IZONE, trị giá 8.800.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>IZONE</b> Học bổng 100% khóa học IELTS tại IZONE, trị giá 8.800.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>SparkPrep</b> Voucher sử dụng dịch vụ hỗ trợ hồ sơ du học & luyện thi chuẩn hóa 1-1 tại SparkPrep, trị giá 10.000.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>Color Me:</b> Học bổng 100%, trị giá 1.500.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>DOL English:</b> 1 tài khoản độc quyền 1 năm, trị giá 1.990.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>VOCO Centre:</b> Voucher discount 50% cho khoá học viết MT. Voucher discount 50% cho khoá học viết CV. Thẻ Membership 3 tháng tại VOCO Centre.
                    </li>
                    <li>
                        <b className='font-bold'>ACE The Future:</b> Học bổng đại sứ 100% khóa học Let's ACE-Giao tiếp, Thuyết trình,Phỏng vấn Big4 hoặc TOEIC bất kì tại ACE The Future.
                    </li>
                </ul>
                <div className='absolute w-full h-[14.4375vw] bottom-[-0.2vw] left-0 max-md:h-[22vw] max-md:bottom-[-2vw]' style={{background: 'linear-gradient(0deg, #01026D 0%, rgba(1, 2, 109, 0.00) 100%)'}}></div>
                <button onClick={button2Handler} className='absolute bottom-[1vw] left-[50%] translate-x-[-50%] px-[1.5vw] py-[0.8vw] text-white font-exoFont font-bold uppercase text-[1vw] border rounded-[1.05vw] max-md:text-[4.2vw] max-md:py-[0.9vw] max-md:px-[6.4vw] max-md:rounded-[4vw]'> Xem chi tiết</button>
            </div>
            <div className='rounded-[0.5vw] relative border w-[27.9vw] pt-[8.4375vw] mt-[6vw] flex flex-col items-center max-md:w-full max-md:pt-[26.1vw] max-md:rounded-[1.5vw] max-md:order-4 max-md:z-[2]' style={{background: 'linear-gradient(180deg, rgba(255, 158, 252, 0.30) 0%, rgba(255, 158, 252, 0.00) 100%)'}}>
                <Image src={reward6} alt='reward6' width={500} height={500} className='absolute w-[10.25vw] top-0 left-[50%] translate-x-[-50%] translate-y-[-70%] max-md:w-[40vw]'></Image>
                <div className='flex gap-[0.5vw] items-end'> 
                    <svg className='w-[4.1875vw] max-md:w-[12.5vw]' xmlns="http://www.w3.org/2000/svg" width="69" height="18" viewBox="0 0 69 18" fill="none">
                        <path d="M38.4621 0.879395L68.1743 0.880327L60.7308 2.90775H38.4621L6.20362 17.3825H0.672112L38.4621 0.879395Z" fill="#FFC6FD"/>
                    </svg>
                    <h2 className='font-exoFont text-[2.25vw] text__gradient2 font-bold leading-[1.5] uppercase max-md:text-[6.6vw]' style={{textShadow: '0px 0px 0.5625vw #EC4AE7, 0px 0px 0.1875vw #FA75F6'}}> Á quân 2 </h2>
                    <svg className='w-[4.1875vw] max-md:w-[12.5vw]' xmlns="http://www.w3.org/2000/svg" width="68" height="18" viewBox="0 0 68 18" fill="none">
                        <path d="M29.8865 0.879395L0.174309 0.880327L7.61779 2.90775H29.8865L62.145 17.3825H67.6765L29.8865 0.879395Z" fill="#FFC6FD"/>
                    </svg>
                </div>
                <ul className='text-[#A4DEFF] px-[2.3125vw] list-disc mt-[1.8125vw] text-[0.875vw] h-[20vw] overflow-hidden flex flex-col gap-[0.5vw] max-md:text-[2.6vw] max-md:gap-[1.6vw] max-md:h-[30vw] max-md:mt-[5.8vw] max-md:px-[6.9vw]'>
                    <li>
                        <b className='font-bold'>Hiện Kim:</b> 3.000.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>SAPP:</b> Gói học bổng trị giá 14 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                    <li>
                        <b className='font-bold'>Smart Train:</b> Học bổng 45% học phí các môn ACCA (từ MA đến APM), trị giá 50.715.000 VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>BISC:</b> Học bổng 75% trị giá 36.240.000VNĐ dành cho các môn ACCA (từ F1 đến F9) tại BISC.
                    </li>
                    <li>
                        <b className='font-bold'>ST Lighthouse:</b> Học bổng 50% cho 1 trong 3 khóa học: Luyện giọng, MC cơ bản, MC chuyên nghiệp.
                    </li>
                    <li>
                        <b className='font-bold'>StudyNowOntario:</b> Học bổng 100% cho khoá học online: Phát Âm Tiếng Anh với giáo viên bản xứ đến từ StudyNow Ontario, trị giá 1.000.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>IZONE</b> Học bổng 60% khóa học IELTS tại IZONE, trị giá 4.400.000 VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>SparkPrep</b> Voucher sử dụng dịch vụ hỗ trợ hồ sơ du học & luyện thi chuẩn hóa 1-1 tại SparkPrep, trị giá 10.000.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>Color Me:</b> Học bổng 100%, trị giá 1.500.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>DOL English:</b> 1 tài khoản độc quyền 6 tháng, trị giá 1.490.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>VOCO Centre:</b> Voucher discount 50% cho khoá học viết MT. Voucher discount 50% cho khoá học viết CV. Thẻ Membership 3 tháng tại VOCO Centre.
                    </li>
                    <li>
                        <b className='font-bold'>ACE The Future:</b> Voucher 800.000 VNĐ học TOEIC (nghe đọc hoặc nói viết) hoặc Let's ACE-Giao tiếp, Thuyết trình, Phỏng vấn Big4.
                    </li>
                </ul>
                <div className='absolute w-full h-[14.4375vw] bottom-[-0.2vw] left-0 max-md:h-[22vw] max-md:bottom-[-2vw]' style={{background: 'linear-gradient(0deg, #01026D 0%, rgba(1, 2, 109, 0.00) 100%)'}}></div>
                <button onClick={button3Handler} className='absolute bottom-[1vw] left-[50%] translate-x-[-50%] px-[1.5vw] py-[0.8vw] text-white font-exoFont font-bold uppercase text-[1vw] border rounded-[1.05vw] max-md:text-[4.2vw] max-md:py-[0.9vw] max-md:px-[6.4vw] max-md:rounded-[4vw]'> Xem chi tiết</button>
            </div>
            </div>
        </div>
        <div className='mt-[7vw] flex gap-[7.4375vw] justify-center max-md:flex-col max-md:mt-[14.4vw]'>
            <div className='w-[29.375vw] max-md:w-full max-md:flex max-md:flex-col max-md:items-center'>
                <div className='flex items-center gap-[0.5vw] max-md:gap-[2.1vw]'>
                    <Image src={arrow} width={35.92} height={18.27} alt='arrow' className='w-[2.1875vw] max-md:w-[9.6vw]'></Image>
                    <h3 className='font-exoFont text-[2.25vw] text-[#FF9EFC] font-bold leading-[1.5] uppercase max-md:text-[9.6vw]'>Top 6</h3>
                </div>
                <ul className='text-[#A4DEFF] list-disc mt-[0.75vw] text-[0.875vw] flex flex-col gap-[0.5vw] max-md:text-[3.2vw] max-md:h-0 max-md:overflow-hidden max-md:pl-[4vw]'>
                    <li>
                        <b className='font-bold'>Hiện Kim:</b> 1.000.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>SAPP:</b> Voucher giảm 1 triệu học phí các môn học ACCA tại SAPP.
                    </li>
                    <li>
                        <b className='font-bold'>Smart Train:</b> Học bổng 40% học phí các môn ACCA (từ MA đến APM) trị giá 45.080.000 VNĐ đến từ Smart Train
                    </li>
                    <li>
                        <b className='font-bold'>BISC:</b> Học bổng 60% học phí các môn ACCA (từ F1 đến F9), trị giá 28.992.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>ST Lighthouse:</b> Học bổng 30% 1 trong 3 khóa học: Luyện giọng, MC cơ bản, MC chuyên nghiệp đến từ ST Lighthouse
                    </li>
                    <li>
                        <b className='font-bold'>StudyNowOntario:</b> Học bổng 100% cho khoá học online: Phát Âm Tiếng Anh với giáo viên bản xứ đến từ StudyNow Ontario, trị giá 1.000.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>IZONE</b> Học bổng 60% khóa học IELTS, trị giá 4.400.000 VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>SparkPrep</b> Voucher sử dụng dịch vụ hỗ trợ hồ sơ du học & luyện thi chuẩn hóa. 1-1 tại SparkPrep, trị giá 10.000.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>Color Me:</b> Học bổng 50%, trị giá 750.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>DOL English:</b> 1 tài khoản độc quyền 6 tháng, trị giá 1.490.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>VOCO Centre:</b> Voucher discount 50% cho khoá học viết MT tại VOCO Centre. Voucher discount 50% cho khoá học viết CV. Thẻ Membership 3 tháng tại VOCO Centre.
                    </li>
                    <li>
                        <b className='font-bold'>ACE The Future:</b> Voucher 800.000 VNĐ học TOEIC (nghe đọc hoặc nói viết) hoặc Let's ACE-Giao tiếp, Thuyết trình, Phỏng vấn Big4.
                    </li>
                </ul>
                <div onClick={button4Handler} className='hidden underline text-[#A4DEFF] text-[3.2vw] max-md:block'>Chi tiết giải thưởng</div>
            </div>
            <div className='flex flex-col gap-[2.3125vw] max-md:items-center max-md:gap-[7.4375vw]'>
            <div className='w-[29.375vw] max-md:w-full max-md:flex max-md:flex-col max-md:items-center'>
                <div className='flex items-center gap-[0.5vw] max-md:gap-[2.1vw]'>
                    <Image src={arrow} width={35.92} height={18.27} alt='arrow' className='w-[2.1875vw] max-md:w-[9.6vw]'></Image>
                    <h3 className='font-exoFont text-[2.25vw] text-[#FF9EFC] font-bold leading-[1.5] uppercase max-md:text-[9.6vw]'>Top 30</h3>
                </div>
                <ul className='text-[#A4DEFF] list-disc mt-[0.75vw] text-[0.875vw] flex flex-col gap-[0.5vw] max-md:text-[3.2vw] max-md:h-0 max-md:overflow-hidden max-md:pl-[4vw]'>
                    <li>
                        <b className='font-bold'>Smart Train:</b> Học bổng 40% học phí các môn ACCA (từ MA đến APM) tại Smart Train, trị giá 45.080.000 VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>BISC:</b> Học bổng 45% học phí các môn ACCA (từ F1 đến F9) tại BISC, trị giá 21.744.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>ST Lighthouse:</b> Học bổng 30% 1 trong 3 khóa học: Luyện giọng, MC cơ bản, MC chuyên nghiệp tại ST Lighthouse.
                    </li>
                    <li>
                        <b className='font-bold'>StudyNowOntario:</b> Học bổng 25% cho khoá học online: Phát Âm Tiếng Anh với giáo viên bản xứ, trị giá 250.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>IZONE</b> Học bổng 40% khóa học IELTS, trị giá 2.200.000 VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>SparkPrep</b> Voucher sử dụng dịch vụ hỗ trợ hồ sơ du học & luyện thi chuẩn hóa 1-1 tại SparkPrep, trị giá 10.000.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>VOCO Centre:</b>  Voucher discount 50% cho khoá học viết MT. Voucher discount 50% cho khoá học viết CV. Thẻ Membership 1 tháng.
                    </li>
                    <li>
                        <b className='font-bold'>ACE The Future:</b> Vouchers 300.000 VNĐ học TOEIC (nghe đọc hoặc nói viết)hoặc Let's ACE-Giao tiếp, Thuyết trình, Phỏng vấn Big4.
                    </li>
                </ul>
                <div onClick={button5Handler} className='hidden underline text-[#A4DEFF] text-[3.2vw] max-md:block'>Chi tiết giải thưởng</div>
            </div>
            <div className='w-[29.375vw] max-md:w-full max-md:flex max-md:flex-col max-md:items-center'>
                <div className='flex items-center gap-[0.5vw] max-md:gap-[2.1vw]'>
                    <Image src={arrow} width={35.92} height={18.27} alt='arrow' className='w-[2.1875vw] max-md:w-[9.6vw]'></Image>
                    <h3 className='font-exoFont text-[2.25vw] text-[#FF9EFC] font-bold leading-[1.5] uppercase max-md:text-[9.6vw]'>Top 200</h3>
                </div>
                <ul className='text-[#A4DEFF] list-disc mt-[0.75vw] text-[0.875vw] flex flex-col gap-[0.5vw] max-md:text-[3.2vw] max-md:h-0 max-md:overflow-hidden max-md:pl-[4vw]'>
                    <li>
                        <b className='font-bold'>StudyNowOntario:</b> Học bổng 25% cho khoá học online: Phát Âm Tiếng Anh với giáo viên bản xứ, trị giá 250.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>VOCO Centre:</b> Voucher discount 50% cho khoá học viết MT. Voucher discount 50% cho khoá học viết CV.
                    </li>
                    <li>
                        <b className='font-bold'>ACE The Future:</b> Học bổng 100% khóa học NỀN TẢNG TIẾNG ANH TOÀN DIỆN tại ACE The Future, trị giá 800.000VNĐ
                    </li>
                </ul>
                <div onClick={button6Handler} className='hidden underline text-[#A4DEFF] text-[3.2vw] max-md:block'>Chi tiết giải thưởng</div>
            </div>
            </div>
        </div>
        <div ref={ref1} className={`${classes.bg} hidden z-[55] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] pt-[3.6975vw] pb-[7.1875vw] pl-[5.9375vw] pr-[27.4vw] max-md:w-full max-md:h-full max-md:px-[6.9vw] max-md:pt-[9.3vw]`}>
            <Image fill src={popupBg} className='top-0 left-0 max-md:hidden'></Image>
            <div className='flex flex-col gap-[2vw] items-center w-[55vw] relative max-md:w-full'>
            <div className='flex gap-[0.5vw] items-end'> 
                <svg className='w-[4.1875vw] max-md:w-[12.5vw]' xmlns="http://www.w3.org/2000/svg" width="69" height="18" viewBox="0 0 69 18" fill="none">
                    <path d="M38.4621 0.879395L68.1743 0.880327L60.7308 2.90775H38.4621L6.20362 17.3825H0.672112L38.4621 0.879395Z" fill="#FFC6FD"/>
                </svg>
                <h2 className='font-exoFont text-[2.25vw] text__gradient2 font-bold leading-[1.5] uppercase max-md:text-[6.6vw]' style={{textShadow: '0px 0px 0.5625vw #EC4AE7, 0px 0px 0.1875vw #FA75F6'}}> Á quân 1</h2>
                <svg className='w-[4.1875vw] max-md:w-[12.5vw]' xmlns="http://www.w3.org/2000/svg" width="68" height="18" viewBox="0 0 68 18" fill="none">
                    <path d="M29.8865 0.879395L0.174309 0.880327L7.61779 2.90775H29.8865L62.145 17.3825H67.6765L29.8865 0.879395Z" fill="#FFC6FD"/>
                </svg>
            </div>
            
            <ul className={`${classes.list} text-[#A4DEFF] flex-wrap gap-[1vw] px-[2.3125vw] list-disc mt-[1.8125vw] text-[0.875vw] overflow-hidden flex max-md:text-[2.6vw] max-md:gap-[1.6vw] max-md:mt-[5.8vw] max-md:px-[6.9vw] max-md:pl-[8vw]'`}>
                    <li>
                        <b className='font-bold'>Hiện Kim:</b> 5.000.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>SAPP:</b> Gói học bổng trị giá 18 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                    <li>
                        <b className='font-bold'>Smart Train:</b> Học bổng 45% học phí các môn ACCA (từ MA đến APM), trị giá 50.715.000 VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>BISC:</b> Gói học bổng trị giá 18 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                    <li>
                        <b className='font-bold'>ST Lighthouse:</b> Học bổng 75% cho 1 trong 3 khóa học: Luyện giọng, MC cơ bản, MC chuyên nghiệp.
                    </li>
                    <li>
                        <b className='font-bold'>StudyNowOntario:</b> Học bổng 100% cho khoá học online: Phát Âm Tiếng Anh với giáo viên bản xứ đến từ StudyNow Ontario, trị giá 1.000.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>IZONE</b> Học bổng 60% khóa học IELTS tại IZONE, trị giá 4.400.000 VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>SparkPrep</b> Voucher sử dụng dịch vụ hỗ trợ hồ sơ du học & luyện thi chuẩn hóa 1-1 tại SparkPrep, trị giá 10.000.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>Color Me:</b> Học bổng 100%, trị giá 1.500.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>DOL English:</b> 1 tài khoản độc quyền 6 tháng, trị giá 1.490.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>VOCO Centre:</b> Voucher discount 50% cho khoá học viết MT. Voucher discount 50% cho khoá học viết CV. Thẻ Membership 3 tháng tại VOCO Centre.
                    </li>
                    <li>
                        <b className='font-bold'>ACE The Future:</b> Voucher 800.000 VNĐ học TOEIC (nghe đọc hoặc nói viết) hoặc Let's ACE-Giao tiếp, Thuyết trình, Phỏng vấn Big4.
                    </li>
                </ul>
                <Image src={reward4} alt='reward4' width={500} height={500} className='absolute w-[18.25vw] top-0 right-[-13vw] max-md:hidden'></Image>
                <Image onClick={closebutton1Handler} src={closeBtn} alt='closebtn' width={30} height={30} className='absolute w-[1.875vw] right-[-15vw] max-md:right-0 max-md:w-[5vw] cursor-pointer'></Image>
                </div>
        </div>
        <div ref={ref2} className={`${classes.bg} z-[55] hidden fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] pt-[3.6975vw] pb-[7.1875vw] pl-[5.9375vw] pr-[27.4vw] max-md:w-full max-md:h-full max-md:px-[6.9vw] max-md:pt-[9.3vw]`}>
            <Image fill src={popupBg} className='top-0 left-0 max-md:hidden'></Image>
            <div className='flex flex-col gap-[2vw] items-center w-[55vw] relative max-md:w-full'>
            <div className='flex gap-[0.5vw] items-end'> 
                <svg className='w-[4.1875vw] max-md:w-[12.5vw]' xmlns="http://www.w3.org/2000/svg" width="69" height="18" viewBox="0 0 69 18" fill="none">
                    <path d="M38.4621 0.879395L68.1743 0.880327L60.7308 2.90775H38.4621L6.20362 17.3825H0.672112L38.4621 0.879395Z" fill="#FFC6FD"/>
                </svg>
                <h2 className='font-exoFont text-[2.25vw] text__gradient2 font-bold leading-[1.5] uppercase max-md:text-[6.6vw]' style={{textShadow: '0px 0px 0.5625vw #EC4AE7, 0px 0px 0.1875vw #FA75F6'}}> Quán quân </h2>
                <svg className='w-[4.1875vw] max-md:w-[12.5vw]' xmlns="http://www.w3.org/2000/svg" width="68" height="18" viewBox="0 0 68 18" fill="none">
                    <path d="M29.8865 0.879395L0.174309 0.880327L7.61779 2.90775H29.8865L62.145 17.3825H67.6765L29.8865 0.879395Z" fill="#FFC6FD"/>
                </svg>
            </div>
            
            <ul className={`${classes.list} text-[#A4DEFF] flex-wrap gap-[1vw] px-[2.3125vw] list-disc mt-[1.8125vw] text-[0.875vw] flex max-md:text-[2.6vw] max-md:gap-[1.6vw] max-md:mt-[5.8vw] max-md:px-[6.9vw] max-md:pl-[8vw]'`}>
                    <li>
                        <b className='font-bold'>Hiện Kim:</b> 8.000.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>SAPP:</b> Gói học bổng trị giá 22 triệu học phí các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                    <li>
                        <b className='font-bold'>Smart Train:</b> Học bổng 55% học phí các môn ACCA (từ MA đến APM), trị giá 61.895.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>BISC:</b> Học bổng 100% học phí các môn ACCA (từ F1 đến F9) tại BISC, trị giá 48.320.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>ST Lighthouse:</b> Học bổng 100% 1 trong 3 khóa học: Luyện giọng, MC cơ bản, MC chuyên nghiệp.
                    </li>
                    <li>
                        <b className='font-bold'>StudyNowOntario:</b> Học bổng 100% khóa học IELTS tại IZONE, trị giá 8.800.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>IZONE</b> Học bổng 100% khóa học IELTS tại IZONE, trị giá 8.800.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>SparkPrep</b> Voucher sử dụng dịch vụ hỗ trợ hồ sơ du học & luyện thi chuẩn hóa 1-1 tại SparkPrep, trị giá 10.000.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>Color Me:</b> Học bổng 100%, trị giá 1.500.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>DOL English:</b> 1 tài khoản độc quyền 1 năm, trị giá 1.990.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>VOCO Centre:</b> Voucher discount 50% cho khoá học viết MT. Voucher discount 50% cho khoá học viết CV. Thẻ Membership 3 tháng tại VOCO Centre.
                    </li>
                    <li>
                        <b className='font-bold'>ACE The Future:</b> Học bổng đại sứ 100% khóa học Let's ACE-Giao tiếp, Thuyết trình,Phỏng vấn Big4 hoặc TOEIC bất kì tại ACE The Future.
                    </li>
                </ul>
                <Image src={reward5} alt='reward5' width={500} height={500} className='absolute w-[18.25vw] top-0 right-[-13vw] max-md:hidden'></Image>
                <Image onClick={closebutton2Handler} src={closeBtn} alt='closebtn' width={30} height={30} className='absolute w-[1.875vw] right-[-15vw] max-md:right-0 max-md:w-[5vw] cursor-pointer'></Image>
                </div>
        </div>
        <div ref={ref3} className={`${classes.bg} z-[55] hidden fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] pt-[3.6975vw] pb-[7.1875vw] pl-[5.9375vw] pr-[27.4vw] max-md:w-full max-md:h-full max-md:px-[6.9vw] max-md:pt-[9.3vw]`}>
            <Image fill src={popupBg} className='top-0 left-0 max-md:hidden'></Image>
            <div className='flex flex-col gap-[2vw] items-center w-[55vw] relative max-md:w-full'>
            <div className='flex gap-[0.5vw] items-end'> 
                <svg className='w-[4.1875vw] max-md:w-[12.5vw]' xmlns="http://www.w3.org/2000/svg" width="69" height="18" viewBox="0 0 69 18" fill="none">
                    <path d="M38.4621 0.879395L68.1743 0.880327L60.7308 2.90775H38.4621L6.20362 17.3825H0.672112L38.4621 0.879395Z" fill="#FFC6FD"/>
                </svg>
                <h2 className='font-exoFont text-[2.25vw] text__gradient2 font-bold leading-[1.5] uppercase max-md:text-[6.6vw]' style={{textShadow: '0px 0px 0.5625vw #EC4AE7, 0px 0px 0.1875vw #FA75F6'}}> Á quân 2 </h2>
                <svg className='w-[4.1875vw] max-md:w-[12.5vw]' xmlns="http://www.w3.org/2000/svg" width="68" height="18" viewBox="0 0 68 18" fill="none">
                    <path d="M29.8865 0.879395L0.174309 0.880327L7.61779 2.90775H29.8865L62.145 17.3825H67.6765L29.8865 0.879395Z" fill="#FFC6FD"/>
                </svg>
            </div>
            
            <ul className={`${classes.list} text-[#A4DEFF] flex-wrap gap-[1vw] px-[2.3125vw] list-disc mt-[1.8125vw] text-[0.875vw] flex max-md:text-[2.6vw] max-md:gap-[1.6vw] max-md:mt-[5.8vw] max-md:px-[6.9vw] max-md:pl-[8vw]'`}>
                    <li>
                        <b className='font-bold'>Hiện Kim:</b> 3.000.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>SAPP:</b> Gói học bổng trị giá 14 triệu cho các môn học ACCA khi đăng ký theo 2 hình thức online & offline.
                    </li>
                    <li>
                        <b className='font-bold'>Smart Train:</b> Học bổng 45% học phí các môn ACCA (từ MA đến APM), trị giá 50.715.000 VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>BISC:</b> Học bổng 75% trị giá 36.240.000VNĐ dành cho các môn ACCA (từ F1 đến F9) tại BISC.
                    </li>
                    <li>
                        <b className='font-bold'>ST Lighthouse:</b> Học bổng 50% cho 1 trong 3 khóa học: Luyện giọng, MC cơ bản, MC chuyên nghiệp.
                    </li>
                    <li>
                        <b className='font-bold'>StudyNowOntario:</b> Học bổng 100% cho khoá học online: Phát Âm Tiếng Anh với giáo viên bản xứ đến từ StudyNow Ontario, trị giá 1.000.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>IZONE</b> Học bổng 60% khóa học IELTS tại IZONE, trị giá 4.400.000 VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>SparkPrep</b> Voucher sử dụng dịch vụ hỗ trợ hồ sơ du học & luyện thi chuẩn hóa 1-1 tại SparkPrep, trị giá 10.000.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>Color Me:</b> Học bổng 100%, trị giá 1.500.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>DOL English:</b> 1 tài khoản độc quyền 6 tháng, trị giá 1.490.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>VOCO Centre:</b> Voucher discount 50% cho khoá học viết MT. Voucher discount 50% cho khoá học viết CV. Thẻ Membership 3 tháng tại VOCO Centre.
                    </li>
                    <li>
                        <b className='font-bold'>ACE The Future:</b> Voucher 800.000 VNĐ học TOEIC (nghe đọc hoặc nói viết) hoặc Let's ACE-Giao tiếp, Thuyết trình, Phỏng vấn Big4.
                    </li>
                </ul>
                <Image src={reward6} alt='reward6' width={500} height={500} className='absolute w-[13.25vw] top-0 right-[-13vw] max-md:hidden'></Image>
                <Image onClick={closebutton3Handler} src={closeBtn} alt='closebtn' width={30} height={30} className='absolute w-[1.875vw] right-[-15vw] max-md:right-0 max-md:w-[5vw] cursor-pointer'></Image>
                </div>
        </div>
        <div ref={ref4} className={`${classes.bg} z-[55] hidden fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] pt-[3.6975vw] pb-[7.1875vw] pl-[5.9375vw] pr-[27.4vw] max-md:w-full max-md:h-full max-md:px-[6.9vw] max-md:pt-[9.3vw]`}>
            <Image fill src={popupBg} className='top-0 left-0 max-md:hidden'></Image>
            <div className='flex flex-col gap-[2vw] items-center w-[55vw] relative max-md:w-full'>
            <div className='flex gap-[0.5vw] items-end'> 
                <svg className='w-[4.1875vw] max-md:w-[12.5vw]' xmlns="http://www.w3.org/2000/svg" width="69" height="18" viewBox="0 0 69 18" fill="none">
                    <path d="M38.4621 0.879395L68.1743 0.880327L60.7308 2.90775H38.4621L6.20362 17.3825H0.672112L38.4621 0.879395Z" fill="#FFC6FD"/>
                </svg>
                <h2 className='font-exoFont text-[2.25vw] text__gradient2 font-bold leading-[1.5] uppercase max-md:text-[6.6vw]' style={{textShadow: '0px 0px 0.5625vw #EC4AE7, 0px 0px 0.1875vw #FA75F6'}}> Top 6 </h2>
                <svg className='w-[4.1875vw] max-md:w-[12.5vw]' xmlns="http://www.w3.org/2000/svg" width="68" height="18" viewBox="0 0 68 18" fill="none">
                    <path d="M29.8865 0.879395L0.174309 0.880327L7.61779 2.90775H29.8865L62.145 17.3825H67.6765L29.8865 0.879395Z" fill="#FFC6FD"/>
                </svg>
            </div>
            
            <ul className={`${classes.list} text-[#A4DEFF] flex-wrap gap-[1vw] px-[2.3125vw] list-disc mt-[1.8125vw] text-[0.875vw] flex max-md:text-[2.6vw] max-md:gap-[1.6vw] max-md:mt-[5.8vw] max-md:px-[6.9vw] max-md:pl-[8vw]'`}>
            <li>
                        <b className='font-bold'>Hiện Kim:</b> 1.000.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>SAPP:</b> Voucher giảm 1 triệu học phí các môn học ACCA tại SAPP.
                    </li>
                    <li>
                        <b className='font-bold'>Smart Train:</b> Học bổng 40% học phí các môn ACCA (từ MA đến APM) trị giá 45.080.000 VNĐ đến từ Smart Train
                    </li>
                    <li>
                        <b className='font-bold'>BISC:</b> Học bổng 60% học phí các môn ACCA (từ F1 đến F9), trị giá 28.992.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>ST Lighthouse:</b> Học bổng 30% 1 trong 3 khóa học: Luyện giọng, MC cơ bản, MC chuyên nghiệp đến từ ST Lighthouse
                    </li>
                    <li>
                        <b className='font-bold'>StudyNowOntario:</b> Học bổng 100% cho khoá học online: Phát Âm Tiếng Anh với giáo viên bản xứ đến từ StudyNow Ontario, trị giá 1.000.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>IZONE</b> Học bổng 60% khóa học IELTS, trị giá 4.400.000 VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>SparkPrep</b> Voucher sử dụng dịch vụ hỗ trợ hồ sơ du học & luyện thi chuẩn hóa. 1-1 tại SparkPrep, trị giá 10.000.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>Color Me:</b> Học bổng 50%, trị giá 750.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>DOL English:</b> 1 tài khoản độc quyền 6 tháng, trị giá 1.490.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>VOCO Centre:</b> Voucher discount 50% cho khoá học viết MT tại VOCO Centre. Voucher discount 50% cho khoá học viết CV. Thẻ Membership 3 tháng tại VOCO Centre.
                    </li>
                    <li>
                        <b className='font-bold'>ACE The Future:</b> Voucher 800.000 VNĐ học TOEIC (nghe đọc hoặc nói viết) hoặc Let's ACE-Giao tiếp, Thuyết trình, Phỏng vấn Big4.
                    </li>
                </ul>
                <Image onClick={closebutton4Handler} src={closeBtn} alt='closebtn' width={30} height={30} className='absolute w-[1.875vw] right-[-15vw] max-md:right-0 max-md:w-[5vw] cursor-pointer'></Image>
                </div>
        </div>
        <div ref={ref5} className={`${classes.bg} z-[55] hidden fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] pt-[3.6975vw] pb-[7.1875vw] pl-[5.9375vw] pr-[27.4vw] max-md:w-full max-md:h-full max-md:px-[6.9vw] max-md:pt-[9.3vw]`}>
            <div className='flex flex-col gap-[2vw] items-center w-[55vw] relative max-md:w-full'>
            <div className='flex gap-[0.5vw] items-end'> 
                <svg className='w-[4.1875vw] max-md:w-[12.5vw]' xmlns="http://www.w3.org/2000/svg" width="69" height="18" viewBox="0 0 69 18" fill="none">
                    <path d="M38.4621 0.879395L68.1743 0.880327L60.7308 2.90775H38.4621L6.20362 17.3825H0.672112L38.4621 0.879395Z" fill="#FFC6FD"/>
                </svg>
                <h2 className='font-exoFont text-[2.25vw] text__gradient2 font-bold leading-[1.5] uppercase max-md:text-[6.6vw]' style={{textShadow: '0px 0px 0.5625vw #EC4AE7, 0px 0px 0.1875vw #FA75F6'}}> Top 30 </h2>
                <svg className='w-[4.1875vw] max-md:w-[12.5vw]' xmlns="http://www.w3.org/2000/svg" width="68" height="18" viewBox="0 0 68 18" fill="none">
                    <path d="M29.8865 0.879395L0.174309 0.880327L7.61779 2.90775H29.8865L62.145 17.3825H67.6765L29.8865 0.879395Z" fill="#FFC6FD"/>
                </svg>
            </div>
            
            <ul className={`${classes.list} text-[#A4DEFF] flex-wrap gap-[1vw] px-[2.3125vw] list-disc mt-[1.8125vw] text-[0.875vw] flex max-md:text-[2.6vw] max-md:gap-[1.6vw] max-md:mt-[5.8vw] max-md:px-[6.9vw] max-md:pl-[8vw]'`}>
                    <li>
                        <b className='font-bold'>Smart Train:</b> Học bổng 40% học phí các môn ACCA (từ MA đến APM) tại Smart Train, trị giá 45.080.000 VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>BISC:</b> Học bổng 45% học phí các môn ACCA (từ F1 đến F9) tại BISC, trị giá 21.744.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>ST Lighthouse:</b> Học bổng 30% 1 trong 3 khóa học: Luyện giọng, MC cơ bản, MC chuyên nghiệp tại ST Lighthouse.
                    </li>
                    <li>
                        <b className='font-bold'>StudyNowOntario:</b> Học bổng 25% cho khoá học online: Phát Âm Tiếng Anh với giáo viên bản xứ, trị giá 250.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>IZONE</b> Học bổng 40% khóa học IELTS, trị giá 2.200.000 VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>SparkPrep</b> Voucher sử dụng dịch vụ hỗ trợ hồ sơ du học & luyện thi chuẩn hóa 1-1 tại SparkPrep, trị giá 10.000.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>VOCO Centre:</b>  Voucher discount 50% cho khoá học viết MT. Voucher discount 50% cho khoá học viết CV. Thẻ Membership 1 tháng.
                    </li>
                    <li>
                        <b className='font-bold'>ACE The Future:</b> Vouchers 300.000 VNĐ học TOEIC (nghe đọc hoặc nói viết)hoặc Let's ACE-Giao tiếp, Thuyết trình, Phỏng vấn Big4.
                    </li>
                </ul>
                <Image onClick={closebutton5Handler} src={closeBtn} alt='closebtn' width={30} height={30} className='absolute w-[1.875vw] right-[-15vw] max-md:right-0 max-md:w-[5vw] cursor-pointer'></Image>
                </div>
        </div>
        <div ref={ref6} className={`${classes.bg} z-[55] hidden fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] pt-[3.6975vw] pb-[7.1875vw] pl-[5.9375vw] pr-[27.4vw] max-md:w-full max-md:h-full max-md:px-[6.9vw] max-md:pt-[9.3vw]`}>
            <Image fill src={popupBg} className='top-0 left-0 max-md:hidden'></Image>
            <div className='flex flex-col gap-[2vw] items-center w-[55vw] relative max-md:w-full'>
            <div className='flex gap-[0.5vw] items-end'> 
                <svg className='w-[4.1875vw] max-md:w-[12.5vw]' xmlns="http://www.w3.org/2000/svg" width="69" height="18" viewBox="0 0 69 18" fill="none">
                    <path d="M38.4621 0.879395L68.1743 0.880327L60.7308 2.90775H38.4621L6.20362 17.3825H0.672112L38.4621 0.879395Z" fill="#FFC6FD"/>
                </svg>
                <h2 className='font-exoFont text-[2.25vw] text__gradient2 font-bold leading-[1.5] uppercase max-md:text-[6.6vw]' style={{textShadow: '0px 0px 0.5625vw #EC4AE7, 0px 0px 0.1875vw #FA75F6'}}> Top 200 </h2>
                <svg className='w-[4.1875vw] max-md:w-[12.5vw]' xmlns="http://www.w3.org/2000/svg" width="68" height="18" viewBox="0 0 68 18" fill="none">
                    <path d="M29.8865 0.879395L0.174309 0.880327L7.61779 2.90775H29.8865L62.145 17.3825H67.6765L29.8865 0.879395Z" fill="#FFC6FD"/>
                </svg>
            </div>
            
            <ul className={`${classes.list} text-[#A4DEFF] flex-wrap gap-[1vw] px-[2.3125vw] list-disc mt-[1.8125vw] text-[0.875vw] flex max-md:text-[2.6vw] max-md:gap-[1.6vw] max-md:mt-[5.8vw] max-md:px-[6.9vw] max-md:pl-[8vw]'`}>
                    <li>
                        <b className='font-bold'>StudyNowOntario:</b> Học bổng 25% cho khoá học online: Phát Âm Tiếng Anh với giáo viên bản xứ, trị giá 250.000VNĐ
                    </li>
                    <li>
                        <b className='font-bold'>VOCO Centre:</b> Voucher discount 50% cho khoá học viết MT. Voucher discount 50% cho khoá học viết CV.
                    </li>
                    <li>
                        <b className='font-bold'>ACE The Future:</b> Học bổng 100% khóa học NỀN TẢNG TIẾNG ANH TOÀN DIỆN tại ACE The Future, trị giá 800.000VNĐ
                    </li>
                </ul>
                <Image onClick={closebutton6Handler} src={closeBtn} alt='closebtn' width={30} height={30} className='absolute w-[1.875vw] right-[-15vw] max-md:right-0 max-md:w-[5vw] cursor-pointer'></Image>
                </div>
        </div>
    </div>
  )
}

export default Reward