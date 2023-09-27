import Image from 'next/image'
import React from 'react'
import bgImg from '@/assets/images/bg2.png'
import comment from '@/assets/images/svg/comment.svg'
import buttonLeft from  '@/assets/images/svg/buttonLeft.svg'
import buttonRight from  '@/assets/images/svg/buttonRight.svg'
import avatar from  '@/assets/images/avatar.jpeg' 

const TarSharing = () => {
  return (
    <div className='relative tar-sharing h-[38.25vw]'>
        <Image src={bgImg} className='-z-50 absolute h-[40vw] top-0 left-0 w-screen' alt='background' />
        <div className='z-10 flex'>
            <div className='mr-[2.41vw]'>
                <div className='ml-[6.28vw] mt-[11.79vw] flex gap-[1.82vw] '> 
                    <Image src={comment} className='w-[6.07775vw] h-[7.90113vw] object-contain' alt='background' />
                    <Image src={comment} className='w-[6.07775vw] h-[7.90113vw] object-contain' alt='background' />
                </div>
                <h2 className='text-[3.24919vw] title2__color ml-[11.78vw]'>TAR Sharing</h2>
            </div>
            <div className='mt-[11.07vw] flex'>
                <button>    
                    <Image src={buttonLeft} className='w-[2.5vw] h-[2.5vw]' alt='background' />
                </button>
                <div className='w-[44.8125vw] h-[20.125vw] info'>
                    <div className='ml-[3.38vw] mt-[2.5vw] flex '>
                        <Image src={avatar} alt='' className='w-[5.5625vw] rounded-full h-[5.5625vw]'/>
                        <div className='ml-[1.5vw] '>
                            <h2 className='text-[1.25vw] text-[#EC4AE7]  font-bold'>Chị ĐINH THU HOÀI</h2>
                            <p>Chuyên viên tuyển dụng </p>
                            <p>& Quản lý Nguồn nhân lực, PwC Việt Nam</p>
                        </div>
                    </div>
                    <p className='ml-[3.38vw]'>The Audit Race là một sân chơi học thuật được đánh giá cao bởi luôn giữ vững được tính chuyên môn cũng như chất lượng thí sinh tham gia thông qua sự giám sát và hỗ trợ từ phía các thầy cô, chuyên gia trong lĩnh vực.</p>
                </div>
                <button>    
                    <Image src={buttonRight} className='w-[2.5vw] h-[2.5vw]' alt='background' />
                </button>
            </div>
        </div>
    </div>
  )
}

export default TarSharing