import React from 'react'
import Image from 'next/image'
import titleImg from '@/assets/images/svg/theletitle.svg'
import barImg from '@/assets/images/svg/thanhngang.svg'
import lineListImg from '@/assets/images/svg/lineList.svg'
import timelineImg from '@/assets/images/timeline.png'
import doubleArrowImg from '@/assets/images/svg/doubleArrow.svg'
import rulesLogo from '@/assets/images/svg/rulesLogo.svg'

const data = [
  {timeline: 'first launch',date: '27/09 - 13/10', title: 'Mở đơn', subtitle: 'Thí sinh điền đơn đăng ký thông qua Website của cuộc thi. ', description:'' , goal:'Thông qua đơn đăng ký, BTC sẽ lựa chọn Top 200 thí sinh phù hợp để bước vào Vòng 2.'},
  {timeline: 'ENTER THE FAST LANE',date: '21/10 - 22/10', title: 'Test offline', subtitle: 'Thí sinh thực hiện bài kiểm tra cá nhân bao gồm 40 câu hỏi trong vòng 60 phút. Nội dung bài kiểm tra gồm các kiến thức: ', description:'<ul><li>KẾ TOÁN ( KẾ TOÁN TÀI CHÍNH, KẾ TOÁN QUẢN TRỊ)</li><li>Kiểm toán</li></ul>' , goal:'Thông qua đơn đăng ký, BTC sẽ lựa chọn Top 200 thí sinh phù hợp để bước vào Vòng 2.'},
  {timeline: 'ACCELERATION',date: '28/10 - 05/11', title: 'Thử thách casestudy', subtitle: 'Training & Networking (29/10)', description:'<p>Top 30 thí sinh xuất sắc nhất sẽ được tham gia buổi Training & Networking để được bồi dưỡng các kiến thức chuyên môn giúp ích cho việc giải case study Vòng 3 và gặp gỡ, làm quen các đồng đội và Mentor.</p><p>30 thí sinh sẽ được chia thành 6 đội, mỗi đội sẽ có 05 thành viên và thực hiện giải một case study về Kiểm toán trong vòng 3 ngày dưới sự tư vấn của các Mentor - các Senior trong các Công ty Kiểm toán lớn.</p>' , goal:'Kết thúc vòng 3, 06 thí sinh xuất sắc nhất sẽ bước vào Vòng 4 - Đêm Chung kết.'},

]
const Rules = () => {
  return (
    <div className='rules relative w-full pt-[5.625vw] pb-[17.625vw] mt-[-0.1vw]'>
        <Image fill src={timelineImg} alt='timelineBg' className='absolute !top-0 !left-0 object-cover z-[-1]'></Image>
        <div className='flex justify-between px-[6.25vw]'>
            <Image src={titleImg} alt='rules__title' width={359} height={143} className='w-[22.4375vw]'></Image>
            <Image src={barImg} alt='bar' width={328.9} height={65.55} className='w-[20.55625vw]'></Image>
        </div>
        <div className='py-[13.9375vw] relative'>
            <div className='flex flex-col gap-[11.25vw]'>
            {data.map((item, index) => (   
              <div className='flex gap-[2.1875vw]' key={index}>                 
                <div className='uppercase text-[3vw] font-bold leading-[1.5] text__stroke text-right w-[28.875vw] h-[14.5vw] flex justify-end items-end font-exoFont flex-grow'>
                   <h3 className={index===0 ? 'w-[13.375vw]' : 'w-[21.875vw]'}>
                    {item.timeline}
                    </h3>
                </div>
                <div className='pl-[12.6875vw] pr-[30.375vw] relative w-[69.9375vw]'>
                  <div className='flex flex-col'>
                    <span className='text-[1.25vw] text__gradient2 leading-[1.5] tracking-[0.03px] font-bold'>{item.date}</span>
                    <h4 className='text__gradient2 text-[2.25vw] font-bold leading-[1.5] uppercase font-exoFont'>{item.title}</h4>
                  </div>
                  <div className="mt-[6.875vw]">
                    <h5 className='text-[#E3F7FF]'>{item.subtitle}</h5>
                    <div dangerouslySetInnerHTML={{__html: item.description}} className='text-[#A4DEFF] text-[1vw] leading-[1.5] tracking-[-0.08px] mt-[1.5vw]'></div>
                  </div>
                  <div className='flex gap-[0.75vw] mt-[2vw]'>
                    <Image src={doubleArrowImg} alt='double__arrow' width={35.92} height={18.27} className='w-[2.245vw]'></Image>
                    <span className='text-[#E3F7FF] text-[1.25vw] leading-[1.5] tracking-[0.03px] font-bold'> {item.goal} </span>
                  </div>
                  <Image width={404.79} height={186.5} src={lineListImg} alt='line__list' className='absolute top-[1.5vw] left-0 w-[25.25vw]'></Image>
                </div>
              </div>
            ))}
            </div>
            <div className='absolute top-0 left-[30.4vw] w-[0.0625vw] h-full' style={{background: 'linear-gradient(92deg, #F07DED 0.27%, #EC4AE7 51.91%, #F281EF 99.31%)'}}></div>
            <div className='absolute top-[2.1vw] left-[22.775vw] w-[19.3125vw] h-[15.25vw] rotate-90' style={{background: 'linear-gradient(90deg, #01026D 0%, rgba(1, 2, 109, 0.00) 104.94%)'}}></div>
        </div>
        <div className='flex items-center gap-[3.6875vw] pl-[21.375vw] pr-[20.3vw] mt-[-1.2vw]'>
            <Image width={301.75} height={301.75} src={rulesLogo} alt='rules__logo' className='w-[18.85vw]'></Image>
            <div className='flex flex-col'>
              <div className='flex gap-[1.5625vw] items-center'>
                <h3 className='text__gradient2 font-exoFont font-bold leading-[1.5] text-[3vw] uppercase' style={{textShadow: '0px 0px 0.5625vw #EC4AE7, 0px 0px 0.1875vw #FA75F6'}}> Chung kết </h3>
                <span className='text-white text-[2.25vw] leading-[1.5] font-bold font-exoFont'> 17/11 </span>
                <Image width={152.71} height={30.43} src={barImg} alt='bar' className='w-[9.54vw]'></Image>
              </div>
              <div className='text__stroke py-[1.1875vw] border-t border-b border-solid border-[#C4C4C4] mt-[1.375vw] text-[3.5625vw] font-bold font-exoFont' style={{textShadow: '0px 0px 0.5625vw #EC4AE7, 0px 0px 0.1875vw #FA75F6, 0.125vw 0.25vw 0.25vw rgba(0, 0, 0, 0.40)'}}>
                VELOCITY UNLEASH
              </div>
              <span className='text-[#E3F7FF] text-[1.25vw] leading-[1.5] tracking-[0.03px] mt-[1.375vw]'> Top 06 thí sinh được chia làm 2 đội, mỗi đội 03 thí sinh. Mỗi đội thi sẽ có 2 ngày để giải Case Study đã cho trước </span>
            </div>
        </div>
    </div>
  )
}

export default Rules