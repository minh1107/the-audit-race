import React from 'react'
import toRight from '@/assets/images/svg/toRIght.svg' 
import mail from '@/assets/images/svg/mail.svg' 
import phone from '@/assets/images/svg/phone.svg' 
import local from '@/assets/images/svg/local.svg' 
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='flex flex-col '>
        <div className='flex bg-[#000018] text-white'>
            <div className='flex ml-[28.62vw]'>
                <h2>VỀ CHÚNG TÔI</h2>
                <h2>CLB KIỂM TOÁN VIÊN TƯƠNG LAI t.FAC - NEU</h2>
                <p>Hoạt động dưới sự bảo trợ của Viện Kế toán - Kiểm toán trường Đại học Kinh tế Quốc dân (SAA) và Hiệp Hội Kế toán Công chứng Anh Quốc (ACCA), CLB Kiểm toán viên tương lai t.FAC đã trải qua 18 năm hình thành và phát triển, tiếp tục thực hiện sứ mệnh đồng hành cùng các bạn sinh viên Kế - Kiểm trên con đường chinh phục tương lai của mình.</p>
            </div>
            <div className='flex'>
                <h2>LIÊN HỆ</h2>
                <p>FANPAGE CUỘC THI <Image src={toRight} alt='img'/></p>
                <p>FANPAGE CLB t.FAC <Image src={toRight} alt='img'/></p>
                <div>
                    <Image src={phone} alt='img'/>
                    0908 051 103 (Ms. Hoàng Ngân)
                </div>
                <div>
                    <Image src={mail} alt='img'/>
                    thefutureauditorsclub@gmail.com
                </div>
                <div>
                    <Image src={local} alt='img'/>
                    Trường Đại học Kinh tế Quốc dân, 207 Giải Phóng, Hai Bà Trưng, Hà Nội.
                </div>
            </div>
        </div>
        <div>
        </div>
    </div>
  )
}

export default Footer