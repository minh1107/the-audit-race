import React from 'react'
import Image from 'next/image'
import background from '@/assets/images/finalBg.png'
import arrow from '@/assets/images/svg/doubleArrow2.svg'
import bgItem from '@/assets/images/svg/bgItem.svg'
import bgItem3 from '@/assets/images/svg/bgItem3.svg'
import frame256 from '@/assets/images/Frame265.png'
import subtract from '@/assets/images/Subtract.png'
import subtract2 from '@/assets/images/subtract2.png'

const data = [
  {title: 'Case study', subtitle: 'Chặng 4.1', description:'<p>Các đội sẽ thuyết trình, phản biện với nhau và trả lời câu hỏi của Ban Giám khảo.</p>', goal:'<p>04 thí sinh có số điểm cao nhất sau Chặng 4.1 sẽ được đi tiếp vào Chặng 4.2</p>'},
  {title: 'TRẢ LỜI CÂU HỎI', subtitle: 'Chặng 4.2', description:'<p>04 thí sinh trả lời các câu hỏi trắc nghiệm và tự luận ngắn trong lĩnh vực: Kế toán - Kiểm toán.</p>' , goal:'<p>03 thí sinh có tổng số điểm Chặng 4.1 và 4.2 cao nhất sẽ bước tiếp vào Chặng 4.3</p>'},
  {title: 'HÙNG BIỆN', subtitle: 'Chặng 4.3', description:'<p>03 thí sinh hùng biện và trả lời các câu hỏi của Ban Giám khảo về một chủ đề mà BTC cung cấp trong đêm Chung kết.</p><p style="margin-top: 0.5vw">Thứ tự hùng biện được các thí sinh bốc thăm ngay trên sân khấu.</p>' , goal:'<p>Thí sinh có tổng điểm cao nhất sau 3 chặng sẽ trở thành Quán quân của cuộc thi.</p> <p>Các thí sinh có số điểm cao tiếp theo sẽ lần lượt trở thành Á quân 1 và Á quân 2</p>'}

]
const FinalRules = () => {
  return (
    <div className='relative w-full pt-[4.1875vw] px-[5.9375vw] pb-[19.4375vw] mt-[-0.2vw] max-md:px-[2.6vw] max-md:pb-[26.6vw] max-md:mt-[-1vw]'>
        <Image src={background} fill alt='final__background' className='top-0 left-0 z-[-3]'></Image>
        <div className='flex gap-[0.5vw] items-center max-md:justify-center'>
            <Image src={arrow} alt='arrow' width={54.48} height={27.71} className='w-[3.405vw] max-md:hidden'></Image>
            <h2 className='font-exoFont text-[3vw] font-bold text-[#A4DEFF] leading-[1.5] uppercase max-md:text-[8.8vw]'> Thể lệ chung kết </h2>
        </div>
        <div className='flex max-md:flex-col'>
            {data.map((item, index) => (
                <div className={`py-[5.25vw] px-[4.3125vw] relative w-[29.75vw] ${index!==0 ? 'ml-[-1vw] max-md:ml-0 max-md:mt-[-5vw]' : 'ml-0'} ${index===0 && 'mt-[12vw]'} ${index===1 && 'mt-[6vw]'} max-md:w-full max-md:py-[16.8vw] max-md:px-[13.8vw]`} key={index}>
                    <h4 className='text__gradient2 text-[1.25vw] leading-[1.5] tracking-[0.03px] max-md:text-[4vw]'> {item.subtitle} </h4>
                    <h3 className='text__gradient2 text-[1.75vw] leading-[1.28] tracking-[0.07px] font-bold uppercase max-md:text-[5.3vw]'>{item.title}</h3>
                    <div dangerouslySetInnerHTML={{__html: item.description}} className='mt-[1vw] text-[#A4DEFF] text-[1vw] leading-[1.5] tracking-[-0.08px] max-md:text-[3.2vw] max-md:mt-[3.2vw]'></div>
                    <div className='flex gap-[0.75vw] mt-[1.9375vw] max-md:gap-[2.1vw] max-md:mt-[5.6vw]'>
                        <svg className='w-[1.125vw] max-md:w-[3.46vw]' xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                            <path opacity="0.8" d="M9.19852 0H0.773926L10.3103 9.13346L0.773926 18.2664H9.19852L18.7349 9.13346L9.19852 0Z" fill="#FA75F6"/>
                        </svg>
                        <div dangerouslySetInnerHTML={{__html: item.goal}} className='flex flex-col gap-[1vw] text-[#FFF8FF] text-[1vw] w-[27.875vw] max-md:text-[3.2vw] max-md:w-[94.44vw]'>
                        {/* {item.goal.split('.').map((itm, indx) => (
                            <p className='text-[#FFF8FF] font-bold text-[1vw]' key={indx}>{itm}</p>
                        ))} */}
                        </div>
                    </div>
                    <Image src={index!==2 ? bgItem : bgItem3} width={477} height={378.919} alt='bg-item' className='absolute top-0 left-0 w-full z-[-1]' style={{backdropFilter: 'blur(4px)'}}></Image>
                </div>
            ))}
        </div>
        <Image src={frame256} alt='frame256' width={639.68} height={660.08} className='w-[39.9375vw] absolute bottom-0 max-md:hidden left-[50%] translate-x-[-50%] z-[-2] max-md:w-[82.2vw]'></Image>
        <Image src={subtract} alt='subtract' width={1600} height={436.54} className='w-full absolute bottom-[-14vw] left-0 max-md:hidden'></Image>
        <Image src={subtract2} alt='subtract2' width={375} height={305} className='hidden max-w-[120%] w-[120%] w-120% absolute bottom-[-65vw] left-[50%] max-md:block translate-x-[-50%]'></Image>
    </div>
  )
}

export default FinalRules