'use client'
import React from 'react'
import bgImg from '@/assets/images/slide.png'
import Image from 'next/image'
import '@/scss/page/form.css'
import Line from '@/components/common/Line'
import toRight from '@/assets/images/svg/toRIght.svg' 
import mail from '@/assets/images/svg/mail.svg' 
import phone from '@/assets/images/svg/phone.svg' 
import local from '@/assets/images/svg/local.svg' 
import * as Yup from "yup";
import { Formik, Form } from "formik";
import InputCustom from '@/components/tags/InputCustom'
import RadioCustom from '@/components/tags/RadioCustom'
import TextAreaCustom from '@/components/tags/TextAreaCustom'
import TextForm from '@/components/Form/TextForm'
import ButtonCustom from '@/components/tags/ButtonCustom'
import bgBlur from '@/assets/images/svg/bgBlur.svg'
import Link from 'next/link'
import Swal from 'sweetalert2'
import CheckBoxCustom from '@/components/tags/CheckBoxCustom'
import Line2 from '@/components/common/Line2'

const learnACCA = [
  {
    name: 'ACCA',
    value: 'Có',
    nameValue: 'Có'
  },
  {
    name: 'ACCA',
    value: 'Không',
    nameValue: 'Không'
  },
]

const learnACCATime = [
  {
    name: 'ACCATime',
    value: 'Trong vòng 3 tháng tới đây',
    nameValue: 'Trong vòng 3 tháng tới đây'
  },
  {
    name: 'ACCATime',
    value: 'Trong vòng 3 đến 6 tháng tới đây',
    nameValue: 'Trong vòng 3 đến 6 tháng tới đây'
  },
  {
    name: 'ACCATime',
    value: 'Sẽ suy nghĩ lại sau 6 tháng',
    nameValue: 'Sẽ suy nghĩ lại sau 6 tháng'
  },
]

const cheer = [
  {
    name: 'cheer',
    value: 'examiner',
    nameValue: 'Khám giả'
  },
  {
    name: 'cheer',
    value: 'cheerleading',
    nameValue: 'Đội cổ vũ'
  },
  {
    name: 'cheer',
    value: 'cheerleading',
    nameValue: 'Đội cổ vũ'
  },
  {
    name: 'cheer',
    value: 'cheerleading',
    nameValue: 'Đội cổ vũ'
  },
  {
    name: 'cheer',
    value: 'cheerleading',
    nameValue: 'Đội cổ vũ'
  },
  {
    name: 'cheer',
    value: 'cheerleading',
    nameValue: 'Đội cổ vũ'
  },
]

const attendWith = [
  {
    name: 'attend',
    value: 'examiner',
    nameValue: 'Khám giả'
  },
  {
    name: 'attend',
    value: 'cheerleading',
    nameValue: 'Đội cổ vũ'
  },
]

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Trường này là bắt buộc"),
  email: Yup.string().email("Email không hợp lệ").required("Email là bắt buộc"),
  phone: Yup.string().required("Trường này là bắt buộc"),
  school: Yup.string().required("Trường này là bắt buộc"),
  attend: Yup.string().required("Trường này là bắt buộc"),
  ACCA: Yup.string().required("Trường này là bắt buộc"),
  ACCATime: Yup.string().required("Trường này là bắt buộc"),
});
const FormRegister = () => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    school: '',
    msv: '',
    attend: '',
    ACCA: '',
    ACCATime: '',
    cheer: '',
    question: '',
  };

  function getCurrentDateTime() {
    const currentDate = new Date();
  
    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const year = currentDate.getFullYear().toString().slice(-2); 
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');
  
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }

  const handleSubmit = (values, { isSubmitting, resetForm  }) => {
    let {name , ...res} = values
    const currentTime = getCurrentDateTime()
    name =  name + " (" + currentTime + ")"
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Gửi thành công thông tin!',
      showConfirmButton: false,
      timer: 1500
    })      
    if (!isSubmitting) {
      fetch('https://sheetdb.io/api/v1/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: [{name: name, ...res}]
        })
      })
      .then((response) => response.json())
      .then((data) => {
      resetForm()

      });
    } else {
    }
  };
  
  return (
    <div className='' id='register'>
      <div className='bg-[#01026D] relative'>
        <svg xmlns="http://www.w3.org/2000/svg" className='absolute rotate-45 bg__blur top-0 left-[0%] !w-[30vw] !h-[28vw]' width="709" height="859" viewBox="0 0 709 859" fill="none">
          <g opacity="0.45" filter="url(#filter0_f_4974_7331)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M223.663 163.279C295.435 159.123 359.549 202.022 411.197 252.052C463.851 303.056 508.425 366.349 508.993 439.669C509.565 513.433 473.042 585.861 414.127 630.216C360.965 670.24 290.105 657.97 223.663 654.483C162.467 651.271 102.908 645.627 52.1883 611.219C-12.2501 567.505 -94.0164 517.553 -92.9904 439.669C-91.9664 361.936 -1.9038 323.689 56.6493 272.582C108.761 227.096 154.622 167.276 223.663 163.279Z" fill="#FA75F6"/>
          </g>
          <defs>
            <filter id="filter0_f_4974_7331" x="-293" y="-37" width="1002" height="896" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_4974_7331"/>
            </filter>
          </defs>
        </svg>
        <Image src={bgBlur} className='absolute top-[20%] left-[10%] translate-x-[-50%] bg__blur ' alt='background blur'/>
        <Image src={bgBlur} className='absolute top-[40%] right-[-30%] bg__blur ' alt='background blur'/>
        {/* <div className='translate-y-[-40%] z-50'><Line /></div> */}
        <div className='flex z-50'>
          <div className='max-md:hidden'>
            <div className='ml-[6.25vw] mt-[5.62vw] w-[24.9568vw] contract mr-[1.7vw]'>
              <h2 className='contract__title mb-[1.06vw]'>THEO DÕI CUỘC THI</h2>
              <div className='flex flex-col gap-[0.5vw]'>
                <Link href={'https://www.facebook.com/theauditrace'} className='w-fit cursor-pointer font-exoFont contract__button flex mr-[0.5vw]
                px-[1.12vw] py-[0.38vw] border-[#8B8B8B] rounded-full border-[1px] items-center '>
                    <span className='max-md:text-[4.26vw] max-md:py-[1.6vw] max-md:px-[4.8vw] max-md:font-normal'>FANPAGE CUỘC THI</span> <Image src={toRight} className='ml-[0.5vw]' alt='img'/></Link>
                <Link href={'https://www.facebook.com/club.tFAC.neu'} className='w-fit cursor-pointer font-exoFont contract__button max-md:mt-[2vw]
                flex mr-[0.5vw] px-[1.12vw] py-[0.38vw] border-[#8B8B8B] rounded-full border-[1px] items-center'>
                    <span className='max-md:text-[4.26vw] max-md:py-[1.6vw] max-md:px-[4.8vw] max-md:font-normal'>FANPAGE CLB t.FAC</span> <Image src={toRight} className='ml-[0.5vw]' alt='img'/></Link>
              </div>
            </div>
          </div>
          <div className='w-[0.10019vw] h-auto  line__vertical max-md:hidden translate-y-[-0.75vw]'></div>
          <div className='ml-[5.16vw] w-[58.1875vw] form-register max-md:ml-0 max-md:pl-[3vw] max-md:mr-[3vw] max-md:overflow-x-hidden'>
              <h1 className='form-register__title text-[4.1875vw] mb-[3.12vw] mt-[3.97vw] font-exoFont uppercase max-md:text-[5.3vw] 
              max-md:mb-[6.4vw]'>
                  <span className='max-md:leading-normal'>Đăng ký tham gia</span><p className='font-bold max-md:text-[6.4vw] leading-normal'>Đêm chung kết
              </p></h1>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isValid, isSubmitting }) => (
                  <Form>
                    <TextForm text={'THÔNG TIN CÁ NHÂN'}/>
                    <div className='max-md:mb-[6.4vw] mb-[2vw]'></div>

                    <InputCustom number={1} text={'Họ và Tên'} placeholder={'Tên của bạn'} required={true} name={'name'}/>
                    <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div>
                    
                    <InputCustom number={2} text={'Email'} placeholder={'example@gmail.com'} required={true} name={'email'}/>
                    <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div>

                    <InputCustom number={3} text={'Số  điện thoại'} placeholder={'Điền Số điện thoại của bạn'} required={true} name={'phone'}/>
                    <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div>

                    <InputCustom number={4} text={'Bạn là sinh viên trường'} 
                    placeholder={'Ghi đầy đủ tên trường (VD: Trường Đại học Kinh Tế Quốc Dân)'} required={true} name={'school'}/>
                    <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div>

                    <InputCustom number={5} text={'Mã sinh viên'} placeholder={'Ghi đầy đủ mã sinh viên'} required={false} name={'msv'}/>
                    <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div>

                    <RadioCustom number={6} text={'Bạn tham gia với tư cách:'} required={true}  data={attendWith}/>
                    <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div>

                    <CheckBoxCustom number={7} text={'Bạn là cổ động viên của thí sinh nào? (Đối vởi đội cổ vũ)'} required={false}  data={cheer}/>
                    <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div>

                    <RadioCustom number={8} text={'Bạn có dự định học ACCA không?'} required={true}  data={learnACCA}/>
                    <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div>

                    <RadioCustom number={9} text={'Bạn dự định học ACCA trong khoảng thời gian nào?'} required={true}  data={learnACCATime}/>
                    <div className='mb-[4vw]'></div>

                    <TextAreaCustom number={10} text={'Bạn có câu hỏi gì dành cho BTC không?'} placeholder={'Điền câu hỏi của bạn'} 
                    required={false} name={'question'}/>
                    <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div>

                    <p className='check'>HÃY KIỂM TRA LẠI CÁC CÂU TRẢ LỜI TRƯỚC KHI GỬI ĐƠN ĐĂNG KÝ VÀ LUÔN SẴN SÀNG CHO HÀNH TRÌNH ĐÁNG NHỚ SẮP TỚI!</p>
                    <ButtonCustom text={"Gửi đơn đăng ký"}/>
                    <div className='mb-[12.18vw] max-md:mb-[18.6vw]'></div>
                  </Form>
                )}
              </Formik>
          </div>
        </div>
        <Line2 />
      </div>
      
    </div>
  )
}

export default FormRegister