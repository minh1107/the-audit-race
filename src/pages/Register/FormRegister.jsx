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

const currentJob = [
  {
    name: 'student',
    value: '2',
    nameValue: 'Sinh viên năm 2'
  },
  {
    name: 'student',
    value: '3',
    nameValue: 'Sinh viên năm 3'
  },
]

const englishLevel = [
  {
    name: 'english',
    value: 'fluent',
    nameValue: 'Thành thạo'
  },
  {
    name: 'english',
    value: 'advanced',
    nameValue: 'Khá'
  },
  {
    name: 'english',
    value: 'intermediate',
    nameValue: 'Trung bình'
  },
  {
    name: 'english',
    value: 'Basic',
    nameValue: 'Cơ bản'
  },
]

const learnACCA = [
  {
    name: 'ACCA',
    value: 'true',
    nameValue: 'Có'
  },
  {
    name: 'ACCA',
    value: 'false',
    nameValue: 'Không'
  },
]

const learnACCATime = [
  {
    name: 'ACCATime',
    value: '3',
    nameValue: 'Trong vòng 3 tháng tới đây'
  },
  {
    name: 'ACCATime',
    value: '6',
    nameValue: 'Trong vòng 3 đến 6 tháng tới đây'
  },
  {
    name: 'ACCATime',
    value: '9',
    nameValue: 'Sẽ suy nghĩ lại sau 6 tháng'
  },
]

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Trường này là bắt buộc"),
  birth: Yup.string().required("Trường này là bắt buộc"),
  student: Yup.string().required("Trường này là bắt buộc"),
  school: Yup.string().required("Trường này là bắt buộc"),
  specialized: Yup.string().required("Trường này là bắt buộc"),
  email: Yup.string().email("Email không hợp lệ").required("Email là bắt buộc"),
  phone: Yup.string().required("Trường này là bắt buộc"),
  face: Yup.string().required("Trường này là bắt buộc"),
  GPA: Yup.string().required("Trường này là bắt buộc"),
  drive: Yup.string().required("Trường này là bắt buộc"),
  ACCA: Yup.string().required("Trường này là bắt buộc"),
  ACCATime: Yup.string().required("Trường này là bắt buộc"),
  english: Yup.string().required("Trường này là bắt buộc"),
});
const FormRegister = () => {
  const initialValues = {
    name: '',
    birth: '',
    student: '',
    school: '',
    specialized: '',
    email: '',
    phone: '',
    face: '',
    faceOther: '',
    GPA: '',
    english: '',
    achievements: '',
    certificate: '',
    certificateOther: '',
    activity: '',
    expWork: '',
    drive: '',
    want: '',
    ACCA: '',
    ACCATime: '',
  };

  const handleSubmit = (values) => {
    console.log(values)
    alert('Gửi thành công')
    fetch('	https://sheetdb.io/api/v1/6k1myqitp7ybq', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          data: [
              values
          ]
      })
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
  
  }

  return (
    <div className='overflow-x-hidden'>
      <div className='relative z-40'>
        <Image src={bgImg} alt='' className='h-[38vw] w-screen z-40'/>
        <div className='coating h-[38vw] w-screen absolute top-0'></div>
        <div className='form__title z-50 absolute font-exoFont left-[6.44vw] bottom-[2.64vw] uppercase'>Đăng ký dự thi</div>
        <div className='blur__bottom z-20'></div>
      </div>
      <div className='bg-[#000155] relative'>
        <Image src={bgBlur} className='absolute top-0 right-[-30%] bg__blur' alt='background blur'/>
        <Image src={bgBlur} className='absolute top-[20%] left-[-30%] bg__blur ' alt='background blur'/>
        <Image src={bgBlur} className='absolute top-[40%] right-[-30%] bg__blur ' alt='background blur'/>
        <Image src={bgBlur} className='absolute top-[60%] left-[-30%] bg__blur ' alt='background blur'/>
        <Image src={bgBlur} className='absolute top-[78%] right-[-10%] bg__blur rotate__none' alt='background blur'/>
        <div className='translate-y-[-40%] z-50'><Line /></div>
        <div className='flex z-50'>
          <div className='max-md:hidden'>
            <div className='ml-[6.25vw] mt-[5.62vw] contract mr-[1.7vw]'>
              <h2 className='contract__title mb-[1.06vw]'>LIÊN HỆ</h2>
              <div className='flex flex-col gap-[0.5vw]'>
                <p className='w-fit cursor-pointer font-exoFont contract__button flex items-center mr-[0.5vw] px-[1.12vw] py-[0.38vw] border-[#8B8B8B] rounded-full border-[1px]'>FANPAGE CUỘC THI <Image src={toRight} alt='img'/></p>
                <p className='w-fit cursor-pointer font-exoFont contract__button flex items-center mr-[0.5vw] px-[1.12vw] py-[0.38vw] border-[#8B8B8B] rounded-full border-[1px]'>FANPAGE CLB t.FAC <Image src={toRight} alt='img'/></p>
              </div>
              <div className='mt-[5.88vw] flex flex-col gap-[0.62vw] w-[24.9568vw]'>
                <div className='flex gap-[0.94vw] contract__info items-start'>
                    <Image src={phone} alt='img'/>
                    <span>0908 051 103 (Ms. Hoàng Ngân)</span>
                </div>
                <div  className='flex gap-[0.94vw] contract__info items-start'>
                    <Image src={mail} alt='img'/>
                    <span>thefutureauditorsclub@gmail.com</span>
                </div>
                <div  className='flex gap-[0.94vw] contract__info items-start'>
                    <Image src={local} alt='img'/>
                    <span className='w-[19.00838vw]'>Trường Đại học Kinh tế Quốc dân, 207 Giải Phóng, Hai Bà Trưng, Hà Nội.</span>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[0.10019vw] h-auto  line__vertical max-md:hidden translate-y-[-1.5vw]'>""</div>
          <div className='ml-[5.16vw] form-register max-md:ml-0 max-md:pl-[3vw] max-md:mr-[3vw] max-md:overflow-x-hidden'>
              <h1 className='form-register__title text-[4.1875vw] mb-[8.12vw] mt-[3.97vw] font-exoFont uppercase max-md:text-[5.3vw] 
              max-md:mb-[6.4vw]'>
                  <span className='max-md:leading-[8vw]'>TIME TO AWAKE YOUR</span><p className='font-bold max-md:text-[6.4vw] leading-[9.6vw]'>EXTRAORDINARY POWER!
              </p></h1>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <TextForm text={'THÔNG TIN CÁ NHÂN'}/>
                    <div className='max-md:mb-[6.4vw]'></div>

                    <InputCustom number={1} text={'Họ và Tên'} placeholder={'Tên của bạn'} required={true} name={'name'}/>
                    <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div>
                    
                    <InputCustom number={2} text={'Ngày sinh'} placeholder={'DD/MM/YYYY'} required={true} name={'birth'}/>
                    <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div>
                    
                    <RadioCustom number={3} text={'Hiện tại đang là'} required={true} data={currentJob}/>
                    <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div>
                    
                    <InputCustom number={4} text={'Đang học tại'} placeholder={'Ghi đầy đủ tên trường (VD: Trường Đại học Kinh Tế Quốc Dân)'} required={true} name={'school'}/>
                    <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div>
                    
                    <InputCustom number={5} text={'Lớp chuyên ngành'} placeholder={'Ghi đầy đủ tên lớp (VD: Kiểm toán 63A)'} required={true} name={'specialized'}/>
                    <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div>
                    
                    <InputCustom number={6} text={'Email'} placeholder={'Điền Email của bạn'} required={true} name={'email'}/>
                    <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div>
                    
                    <InputCustom number={7} text={'Số  điện thoại'} placeholder={'Điền Số điện thoại của bạn'} required={true} name={'phone'}/>
                    <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div>

                    <InputCustom number={8} text={'Link Facebook'} placeholder={'Đường dẫn (link) tài khoản facebook của bạn'} required={true} name={'face'}/>
                    <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div>

                    <InputCustom number={9} text={'Tài khoản khác'} placeholder={'Đường dẫn (link) tài khoản LinkedIn, Instagram, Tiktok,... của bạn'} 
                    required={false} name={'faceOther'}/>
                    <div className='mb-[6.94vw]'></div>

                    <TextForm text={'HỌC VẤN'}/>
                    <div className='max-md:mb-[12.8vw]'></div>
                    
                    <InputCustom number={10} text={'GPA tích lũy'} placeholder={'Đến thời điểm hiện tại trên thang 4 (VD: 3.xx/4.00)'} required={true} name={'GPA'}/>
                    <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div>
      
                    <TextAreaCustom number={11} text={'Thành tích'} placeholder={'Các thành tích về học bổng, nghiên cứu khoa học,...  (VD: Học bổng KKHT 3 học kỳ, Top 30 cuộc thi The Audit Race 2022,...)'} 
                    required={false} name={'achievements'}/>
                    <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div>

                    <TextAreaCustom number={12} text={'Chứng chỉ chuyên môn'} placeholder={'Bạn có đang theo đuổi các chứng chỉ liên quan đến chuyên môn (VD: ACCA, CFAB, CFA, CMA,...) không? Nêu cụ thể những môn đã thi của chứng chỉ đó.'} 
                    required={false} name={'certificate'}/>
                    <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div>

                    <RadioCustom number={13} text={'Khả năng thông thạo tiếng Anh'} required={true} data={englishLevel}/>
                    <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div>
                                              
                    <TextAreaCustom number={14} text={'Chứng chỉ ngoại ngữ, tin học'} placeholder={'Mức điểm đạt được ở các chứng chỉ (VD: IELTS 7.0, MOS Excel 900,...)'} 
                    required={false} name={'certificateOther'}/>
                    <div className='mb-[6.94vw]'></div>
                    
                    <TextForm text={'HOẠT ĐỘNG NGOẠI KHÓA VÀ ĐÓNG GÓP XÃ HỘI'}/>
                    <div className='max-md:mb-[6.4vw]'></div>

                    <TextAreaCustom number={15} text={'Hoạt động ngoại khoá bạn đã từng tham gia'} placeholder={'“Thời gian _ Chi tiết công việc” của hoạt động bạn đã làm (VD: 2023 _ Trưởng BTC The Audit Race 2023)'} 
                    required={false} name={'activity'}/>
                    <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div>
                    
                    <TextAreaCustom number={16} text={'Kinh nghiệm làm việc'} placeholder={'Kinh nghiệm thực tập hoặc làm thêm ở vị trí liên quan đến lĩnh vực Kế toán - Kiểm toán - Tài chính bạn có.      '} 
                    required={false} name={'expWork'}/>
                    <div className='mb-[6.94vw]'></div>
                    
                    <TextForm text={'MINH CHỨNG*'} marginBottom={false}/>
                    <div className='max-md:mb-[4.3vw]'></div>
                    <div className='text-bonus mt-[0.5vw] mb-[3vw] w-[70vw]'>
                      <p className='mb-[2vw]'>Thí sinh nộp link Drive gồm minh chứng:</p>
                      <ul className='mb-[2vw] list-disc flex flex-col gap-[0.2vw]'>
                        <li className='ml-[1vw] max-md:ml-[4vw]'>GPA tích lũy.</li>
                        <li className='ml-[1vw] max-md:ml-[4vw]'>Chứng nhận thành tích.</li>
                        <li className='ml-[1vw] max-md:ml-[4vw]'>Chứng nhận chuyên môn, ngoại ngữ, tin học.</li>
                        <li className='ml-[1vw] max-md:ml-[4vw]'>Chứng nhận thực tập, ngoại khóa.</li>
                      </ul>
                      <p>Đặt quyền truy cập công khai và đặt tên theo cú pháp &apos;Họ Tên_Ngày Sinh&apos;</p>
                    </div>

                    <InputCustom number={17} text={'Link Drive'} placeholder={"Đặt quyền truy cập công khai và đặt tên theo cú pháp 'Họ Tên_Ngày Sinh'"} 
                    required={true} name={'drive'}/>
                    <div className='mb-[6.94vw]'></div>

                    <TextForm text={'CÂU HỎI VỀ CUỘC THI'}/>
                    <div className='max-md:mb-[6.4vw]'></div>

                    <TextAreaCustom number={18} text={'Bạn muốn nhận được gì khi tham gia The Audit Race 2023?'} 
                    placeholder={'Điều bạn mong muốn'} 
                    required={false} name={'want'}/>
                    <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div>

                    <RadioCustom number={19} text={'Bạn có dự định học ACCA không?'} required={true}  data={learnACCA}/>
                    <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div>

                    <RadioCustom number={20} text={'Bạn dự định học ACCA trong khoảng thời gian nào?'} required={true}  data={learnACCATime}/>
                    <div className='mb-[4vw]'></div>

                    <p className='check'>HÃY KIỂM TRA LẠI CÁC CÂU TRẢ LỜI TRƯỚC KHI GỬI ĐƠN ĐĂNG KÝ VÀ LUÔN SẴN SÀNG CHO HÀNH TRÌNH ĐÁNG NHỚ SẮP TỚI!</p>
                    <ButtonCustom text={"Gửi đơn đăng ký"}/>
                    <div className='mb-[12.18vw] max-md:mb-[18.6vw]'></div>
                  </Form>
                )}
              </Formik>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default FormRegister