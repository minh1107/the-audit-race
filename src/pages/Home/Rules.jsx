import React from 'react'
import Image from 'next/image'
import titleImg from '@/assets/images/svg/ruletitle.svg'
import barImg from '@/assets/images/svg/thanhngang.svg'
import lineListImg from '@/assets/images/svg/lineList.svg'
import timelineImg from '@/assets/images/timeline.png'
import doubleArrowImg from '@/assets/images/svg/doubleArrow.svg'
import rulesLogo from '@/assets/images/svg/rulesLogo.svg'
import lineListMb from '@/assets/images/svg/lineListMb.svg'


const data = [
  {timeline: 'first launch',date: '28/09 - 15/10', title: 'Mở đơn', detail: [{subtitle: 'Thí sinh điền đơn đăng ký thông qua Website của cuộc thi. ', description:''}] , goal:'Thông qua đơn đăng ký, BTC sẽ lựa chọn Top 200 thí sinh phù hợp để bước vào Vòng 2.'},
  {timeline: 'ENTER THE FAST LANE',date: '21/10 - 22/10', title: 'Test offline', detail: [{subtitle: 'Thí sinh thực hiện bài kiểm tra cá nhân bao gồm 40 câu hỏi trong vòng 60 phút. Nội dung bài kiểm tra gồm các kiến thức: ', description:'<ul style="display:flex; flex-direction: column; gap: 0.5vw"><li style="border-bottom: 1px solid #0058A9;">KẾ TOÁN (KẾ TOÁN TÀI CHÍNH, KẾ TOÁN QUẢN TRỊ)</li><li style="border-bottom: 1px solid #0058A9">KIỂM TOÁN</li><li style="border-bottom: 1px solid #0058A9">THUẾ</li><li style="border-bottom: 1px solid #0058A9">IQ (HÌNH HỌC, SỐ HỌC, TƯ DUY NGÔN NGỮ,...)</li><li style="border-bottom: 1px solid #0058A9">KIẾN THỨC KINH TẾ XÃ HỘI</li></ul><p style="margin-top: 0.5vw">*Bài kiểm tra hoàn toàn bằng tiếng Anh.</p>'}] , goal:'30 thí sinh xuất sắc nhất sẽ tiếp tục đồng hành cùng cuộc thi.'},
  {timeline: 'ACCELERATION',date: '28/10 - 05/11', title: 'Thử thách case study', detail: 
  [{subtitle: 'Training & Networking (29/10)', 
  description:'<p>Top 30 thí sinh xuất sắc nhất sẽ được tham gia buổi Training & Networking để được bồi dưỡng các kiến thức chuyên môn giúp ích cho việc giải case study Vòng 3 và gặp gỡ, làm quen các đồng đội và Mentor.</p>'}, 
  {subtitle: 'Giải Case Study', description: '<p style="margin-top: 1vw">30 thí sinh sẽ được chia thành 6 đội, mỗi đội sẽ có 05 thành viên và thực hiện giải một case study về Kiểm toán trong vòng 3 ngày dưới sự tư vấn của các Mentor - các Senior trong các Công ty Kiểm toán lớn.</p>'},
  {subtitle: 'Pitching & Debate (05/11)', description:'TOP 6 thí sinh được chia thành 2 đội và giải một Case Studye cho trước. Tại đêm Chung kết, các đội sẽ thuyết trình, phản biện với nhau và trả lời câu hỏi của Ban Giám khảo.'}] , goal:'Kết thúc vòng 3, 06 thí sinh xuất sắc nhất sẽ bước vào Vòng 4 - Đêm Chung kết.'},

]
const Rules = () => {
  return (
    <div className='rules relative w-full pt-[5.625vw] pb-[17.625vw] mt-[-0.1vw] max-md:pt-[14.6vw]' id='thele'>
        <Image fill src={timelineImg} alt='timelineBg' className='absolute !top-0 !left-0 object-cover z-[-1]'></Image>
        <div className='flex justify-between px-[6.25vw]'>
            <Image src={titleImg} alt='rules__title' width={359} height={143} className='w-[22.4375vw] max-md:hidden'></Image>
            <svg className='hidden max-md:block' xmlns="http://www.w3.org/2000/svg" width="93" height="32" viewBox="0 0 93 32" fill="none">
            <path d="M0.358272 12.9707C0.358272 13.117 0.476816 13.2355 0.623047 13.2355H6.13865V25.3197C6.13865 25.466 6.25719 25.5845 6.40342 25.5845H10.1425C10.2887 25.5845 10.4073 25.466 10.4073 25.3197V13.2355H16.0037C16.1204 13.2355 16.2233 13.1592 16.2571 13.0475L17.2677 9.7127C17.292 9.63248 17.2768 9.54548 17.2269 9.47816C17.177 9.41083 17.0981 9.37114 17.0143 9.37114H0.623047C0.476816 9.37114 0.358272 9.48968 0.358272 9.63591V12.9707ZM18.3596 9.98664C18.2442 10.0179 18.1639 10.1226 18.1639 10.2422V25.3197C18.1639 25.466 18.2825 25.5845 18.4287 25.5845H22.1678C22.314 25.5845 22.4325 25.466 22.4325 25.3197V19.8243H30.1087V25.3197C30.1087 25.466 30.2272 25.5845 30.3735 25.5845H34.1125C34.2588 25.5845 34.3773 25.466 34.3773 25.3197V9.63591C34.3773 9.48968 34.2588 9.37114 34.1125 9.37114H30.3735C30.2272 9.37114 30.1087 9.48968 30.1087 9.63591V15.96H22.4325V9.23169C22.4325 9.14927 22.3942 9.07156 22.3287 9.02146C22.2633 8.97135 22.1782 8.95458 22.0987 8.97609L18.3596 9.98664ZM52.0151 21.7201H40.8404V19.4201H50.2972C50.4434 19.4201 50.562 19.3016 50.562 19.1553V15.8205C50.562 15.6743 50.4434 15.5557 50.2972 15.5557H40.8404V13.2355H51.0046C51.1212 13.2355 51.2242 13.1592 51.258 13.0475L52.2685 9.7127C52.2929 9.63248 52.2777 9.54548 52.2278 9.47816C52.1778 9.41083 52.099 9.37114 52.0151 9.37114H36.8366C36.6904 9.37114 36.5718 9.48968 36.5718 9.63591V25.3197C36.5718 25.466 36.6904 25.5845 36.8366 25.5845H51.0046C51.1212 25.5845 51.2242 25.5082 51.258 25.3965L52.2685 22.0617C52.2929 21.9815 52.2777 21.8945 52.2278 21.8271C52.1778 21.7598 52.099 21.7201 52.0151 21.7201ZM60.4481 9.37114C60.3018 9.37114 60.1833 9.48968 60.1833 9.63591V25.3197C60.1833 25.466 60.3018 25.5845 60.4481 25.5845H74.2118C74.3285 25.5845 74.4314 25.5082 74.4652 25.3965L75.4758 22.0617C75.5001 21.9815 75.485 21.8945 75.435 21.8271C75.3851 21.7598 75.3062 21.7201 75.2224 21.7201H64.4519V9.63591C64.4519 9.48968 64.3334 9.37114 64.1871 9.37114H60.4481ZM91.7055 21.7201H80.5308V19.4201H89.9875C90.1338 19.4201 90.2523 19.3016 90.2523 19.1553V15.8205C90.2523 15.6743 90.1338 15.5557 89.9875 15.5557H80.5308V13.2355H90.6949C90.8116 13.2355 90.9145 13.1592 90.9483 13.0475L91.9589 9.7127C91.9832 9.63248 91.9681 9.54548 91.9181 9.47816C91.8682 9.41083 91.7893 9.37114 91.7055 9.37114H76.527C76.3807 9.37114 76.2622 9.48968 76.2622 9.63591V25.3197C76.2622 25.466 76.3807 25.5845 76.527 25.5845H90.6949C90.8116 25.5845 90.9145 25.5082 90.9483 25.3965L91.9589 22.0617C91.9832 21.9815 91.9681 21.8945 91.9181 21.8271C91.8682 21.7598 91.7893 21.7201 91.7055 21.7201Z" stroke="#FF70FF" stroke-width="0.52955" stroke-linejoin="round"/>
            <path d="M54.2722 7.14624C54.4185 7.14624 54.537 7.0277 54.537 6.88147C54.537 6.70438 54.7242 6.36838 55.3958 6.36838H56.0224C57.0895 6.36838 57.9092 6.03336 58.4642 5.50543C59.0177 4.97894 59.2906 4.27637 59.2906 3.57554C59.2906 2.86264 59.0087 2.15496 58.4519 1.62653C57.8935 1.09671 57.0742 0.761104 56.0224 0.761104H52.0684C51.9845 0.761104 51.9057 0.800799 51.8557 0.868122C51.8058 0.935445 51.7907 1.02244 51.815 1.10267L52.3551 2.88527C52.389 2.99691 52.4919 3.07326 52.6085 3.07326H56.0008C56.2512 3.07326 56.4124 3.1511 56.5089 3.24248C56.6071 3.33551 56.6544 3.45707 56.6544 3.57554C56.6544 3.69743 56.606 3.81488 56.5084 3.90392C56.4112 3.99261 56.2489 4.06703 56.0008 4.06703H55.3742C54.4018 4.06703 53.6398 4.40743 53.1211 4.93973C52.6052 5.46916 52.3437 6.17432 52.3437 6.88147C52.3437 7.0277 52.4622 7.14624 52.6085 7.14624H54.2722Z" stroke="#FF70FF" stroke-width="0.52955" stroke-linejoin="round"/>
            <path d="M86.1562 27.6873C86.1562 27.541 86.0376 27.4225 85.8914 27.4225H82.1523C82.0061 27.4225 81.8876 27.541 81.8876 27.6873V31.0423C81.8876 31.1885 82.0061 31.3071 82.1523 31.3071H85.8914C86.0376 31.3071 86.1562 31.1885 86.1562 31.0423V27.6873Z" stroke="#FF70FF" stroke-width="0.52955" stroke-linejoin="round"/>
            <path d="M38.2714 6.69664C38.1971 6.77286 38.1756 6.88623 38.2169 6.98437C38.2583 7.08251 38.3544 7.14632 38.4609 7.14632H41.5937C41.6587 7.14632 41.7215 7.12237 41.77 7.07903L44.3847 4.74397L47.0583 7.0809C47.1066 7.12308 47.1685 7.14632 47.2326 7.14632H50.5068C50.6101 7.14632 50.7041 7.08614 50.7473 6.99221C50.7905 6.89828 50.7751 6.78779 50.7078 6.70927L46.0795 1.30746C46.01 1.22641 45.8987 1.19498 45.7971 1.22775L42.6644 2.2383C42.6234 2.25153 42.5863 2.27455 42.5562 2.30538L38.2714 6.69664Z" stroke="#FF70FF" stroke-width="0.52955" stroke-linejoin="round"/>
            <path d="M77.8105 6.69664C77.7361 6.77286 77.7146 6.88623 77.756 6.98437C77.7974 7.08251 77.8935 7.14632 78 7.14632H81.1327C81.1978 7.14632 81.2606 7.12237 81.3091 7.07903L83.9237 4.74397L86.5974 7.0809C86.6456 7.12308 86.7075 7.14632 86.7716 7.14632H90.0458C90.1492 7.14632 90.2431 7.08614 90.2864 6.99221C90.3296 6.89828 90.3142 6.78779 90.2469 6.70927L85.6185 1.30746C85.5491 1.22641 85.4378 1.19498 85.3362 1.22775L82.2035 2.2383C82.1625 2.25153 82.1253 2.27455 82.0952 2.30538L77.8105 6.69664Z" stroke="#FF70FF" stroke-width="0.52955" stroke-linejoin="round"/>
            </svg>
            <Image src={barImg} alt='bar' width={328.9} height={65.55} className='w-[20.55625vw] max-md:hidden'></Image>
        </div>
        <div className='py-[13.9375vw] relative max-md:py-[10.4vw] max-md:pb-[38.4vw]'>
            <div className='flex flex-col gap-[11.25vw]'>
            {data.map((item, index) => (   
              <div className='flex gap-[2.1875vw] max-md:gap-0' key={index}>                 
                <div className='uppercase text-[3vw] font-bold leading-[1.5] text__stroke text-right w-[28.875vw] h-[14.5vw] flex justify-end items-end font-exoFont flex-grow max-md:w-[11.2vw]'>
                   <h3 className={index===0 ? 'w-[13.375vw] max-md:hidden' : 'w-[21.875vw] max-md:hidden'}>
                    {item.timeline}
                    </h3>
                </div>
                <div className='pl-[12.6875vw] pr-[29.375vw] relative w-[69.9375vw] max-md:pr-[12.4vw] max-md:w-[88.8vw] max-md:pl-[15.4vw]'>
                  <div className='flex flex-col'>
                    <span className='text-[1.25vw] text__gradient2 leading-[1.5] tracking-[0.03px] font-bold max-md:text-[3.2vw]'>{item.date}</span>
                    <h4 className='text__gradient2 text-[2.25vw] font-bold leading-[1.5] uppercase font-exoFont max-md:text-[5.2vw] max-md:whitespace-nowrap'>{item.title}</h4>
                  </div>
                  <div>
                  <div className="mt-[5.875vw] max-md:mt-[6.4vw] flex flex-col gap-[2vw]">
                  {item.detail.map((itm, indx) => 
                  <div key={indx} className="">
                    <h5 className='text-[#E3F7FF] max-md:text-[3.2vw]'>{itm.subtitle}</h5>
                    <div dangerouslySetInnerHTML={{__html: itm.description}} 
                    className='text-[#A4DEFF] text-[1vw] leading-[1.5] tracking-[-0.08px] mt-[1.5vw] max-md:text-[2.6vw] max-md:mt-[3.7vw]'></div>
                  </div>
                  )}
                  </div>
                  </div>
                  <div className='flex gap-[0.75vw] mt-[2vw] max-md:gap-[1.5vw] max-md:mt-[4.8vw]'>
                    <Image src={doubleArrowImg} alt='double__arrow' width={35.92} height={18.27} className='w-[2.245vw] max-md:w-[5vw]'></Image>
                    <span className='text-[#E3F7FF] text-[1.25vw] leading-[1.5] tracking-[0.03px] font-bold max-md:text-[3.2vw] max-md:font-medium justify-evenly'> {item.goal} </span>
                  </div>
                  <Image width={404.79} height={186.5} src={lineListImg} alt='line__list' className='absolute top-[1.5vw] left-0 w-[25.25vw] max-md:hidden'></Image>
                  <Image width={404.79} height={186.5} src={lineListMb} alt='line__list' className='hidden absolute w-[27.7vw] top-[8.5vw] left-0 w-[25.25vw] max-md:block'></Image>
                </div>
              </div>
            ))}
            </div>
            <div className='absolute top-0 left-[30.4vw] w-[0.0625vw] h-full max-md:w-[0.26vw] max-md:left-[12.5vw] z-[-1]' style={{background: 'linear-gradient(92deg, #F07DED 0.27%, #EC4AE7 51.91%, #F281EF 99.31%)'}}></div>
            <div className='absolute top-[2.1vw] left-[22.775vw] w-[19.3125vw] h-[15.25vw] rotate-90 max-md:left-[6.5vw]' style={{background: 'linear-gradient(90deg, #01026D 0%, rgba(1, 2, 109, 0.00) 104.94%)'}}></div>
            <Image width={404.79} height={186.5} src={lineListMb} alt='line__list' className='hidden absolute w-[27.7vw] bottom-[0] left-[11.2vw] w-[25.25vw] max-md:block'></Image>
        </div>
        <div className='flex items-center gap-[3.6875vw] pl-[21.375vw] pr-[20.3vw] mt-[-1.2vw] max-md:mt-[-23vw] max-md:pl-[26.6vw] max-md:pr-[12.4vw]'>
            <Image width={301.75} height={301.75} src={rulesLogo} alt='rules__logo' className='w-[18.85vw] max-md:hidden'></Image>
            <div className='flex flex-col'>
              <div className='flex gap-[1.5625vw] items-center'>
                <h3 className='text__gradient2 font-exoFont font-bold leading-[1.5] text-[3vw] uppercase max-md:text-[6.4vw]' style={{textShadow: '0px 0px 0.5625vw #EC4AE7, 0px 0px 0.1875vw #FA75F6'}}> Chung kết </h3>
                <span className='text-white text-[2.25vw] leading-[1.5] font-bold font-exoFont max-md:text-[6.4vw]'> 17/11 </span>
                <Image width={152.71} height={30.43} src={barImg} alt='bar' className='w-[9.54vw] max-md:hidden'></Image>
              </div>
              <div className='text__stroke py-[1.1875vw] border-t border-b border-solid border-[#C4C4C4] mt-[1.375vw] text-[3.5625vw] font-bold font-exoFont max-md:hidden' style={{textShadow: '0px 0px 0.5625vw #EC4AE7, 0px 0px 0.1875vw #FA75F6, 0.125vw 0.25vw 0.25vw rgba(0, 0, 0, 0.40)'}}>
                VELOCITY UNLEASH
              </div>
              <span className='text-[#E3F7FF] text-[1.25vw] leading-[1.5] tracking-[0.03px] mt-[1.375vw] max-md:text-[3.2vw] max-md:mt-[5.3vw]'> Top 06 thí sinh được chia làm 2 đội, mỗi đội 03 thí sinh. Mỗi đội thi sẽ có 2 ngày để giải Case Study đã cho trước </span>
            </div>
        </div>
    </div>
  )
}

export default Rules