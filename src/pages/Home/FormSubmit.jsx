'use client'
import Modal from '@mui/material/Modal';
import React from 'react'
import '@/scss/page/form.css'
import * as Yup from "yup";
import { Formik, Form } from "formik";
import InputCustom from '@/components/tags/InputCustom'
import RadioCustom from '@/components/tags/RadioCustom'
import TextAreaCustom from '@/components/tags/TextAreaCustom'
import TextForm from '@/components/Form/TextForm'
import ButtonCustom from '@/components/tags/ButtonCustom'
import Swal from 'sweetalert2'
import { Box, Button, TextField } from '@mui/material';
import CheckBoxCustom from '@/components/tags/CheckBoxCustom';
import Image from 'next/image';
import bgBlur from '@/assets/images/svg/bgBlur.svg'
import closeBtn from '@/assets/images/svg/close-no-circle.svg'

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
  
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Trường này là bắt buộc"),
    birth: Yup.string().required("Trường này là bắt buộc"),
    student: Yup.string().required("Trường này là bắt buộc"),
    school: Yup.string().required("Trường này là bắt buộc"),
    specialized: Yup.string().required("Trường này là bắt buộc"),
    email: Yup.string().email("Email không hợp lệ").required("Email là bắt buộc"),
    phone: Yup.string().required("Trường này là bắt buộc"),
    facebook: Yup.string().required("Trường này là bắt buộc"),
    GPA: Yup.string().required("Trường này là bắt buộc"),
    linkDrive: Yup.string().required("Trường này là bắt buộc"),
    ACCA: Yup.string().required("Trường này là bắt buộc"),
    ACCATime: Yup.string().required("Trường này là bắt buộc"),
    englishSkill: Yup.string().required("Trường này là bắt buộc"),
  });
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  boxShadow: 24,
  p: 4,
};

export default function FormSubmit({status, setStatus}) {
  const handleClose = () => setStatus(false);
  const closebutton1Handler =() => setStatus(false)
  const initialValues = {
    name: '',
    birth: '',
    student: '',
    school: '',
    specialized: '',
    email: '',
    phone: '',
    facebook: '',
    facebookOther: '',
    GPA: '',
    englishSkill: '',
    achievements: '',
    certificate: '',
    certificateOther: '',
    activity: '',
    expWork: '',
    linkDrive: '',
    want: '',
    ACCA: '',
    ACCATime: '',
  };

  function getCurrentDateTime() {
    const currentDate = new Date();
  
    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const year = currentDate.getFullYear().toString().slice(-2); s
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');
  
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }

  const handleSubmit = (values, { isSubmitting, resetForm  }) => {
    let {name , ...res} = values
    const currentTime = getCurrentDateTime()
    name =  name + " (" + currentTime + ")"
    if (!isSubmitting) {
      const res = fetch('https://sheetdb.io/api/v1/4yqzxxzpugq4j', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: [{name: name, ...res}]
        })
      })

      console.log(res)
    } else {
    }
  };
  
  return (
    <div>
      <Modal
        open={status}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} id='style-16' className='!w-[92vw] rounded-2xl overflow-y-scroll overflow-x-hidden !h-[90vh] min-[1800px]:!h-[40vw] bg-[#000155]'>
        <Image src={bgBlur} className='absolute top-0 right-[-30%] bg__blur' alt='background blur'/>
        <Image src={bgBlur} className='absolute top-[0%] left-[-30%] bg__blur ' alt='background blur'/>
        <Image src={bgBlur} className='absolute top-[0%] right-[-30%] bg__blur ' alt='background blur'/>
        <Image src={bgBlur} className='absolute top-[0%] left-[-30%] bg__blur ' alt='background blur'/>
        <Image onClick={closebutton1Handler} src={closeBtn} alt='closebtn' width={40} height={40} 
        className='fixed w-[1.875vw] right-[3vw] max-md:top-[4%] max-md:right-[3vw] max-md:w-[6vw] cursor-pointer'></Image>
        <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isValid, isSubmitting }) => (
                  <Form className=''>
                    <TextForm text={'NHẬP THÔNG TIN CỦA BẠN'}/>
                    <div className='max-md:mb-[6.4vw]'></div>
                    <div className='flex max-md:flex-col'>
                    <div className='flex-1'>
                      <InputCustom number={1} text={'Họ và Tên'} placeholder={'Tên của bạn'} required={true} name={'name'}/>
                      <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div>

                      <InputCustom number={2} text={'Email'} placeholder={'Điền Email của bạn'} required={true} name={'email'}/>
                      <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div>

                      <InputCustom number={3} text={'Số  điện thoại'} placeholder={'Điền Số điện thoại của bạn'} required={true} name={'phone'}/>
                      <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div>
                      
                      <InputCustom number={4} text={'Bạn là sinh viên trường:'} placeholder={'Điền trường của bạn'} required={true} name={'school'}/>
                      <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div>
                      
                      <InputCustom classText={'w-[35vw] max-md:w-[75vw]'} number={5} text={'Mã sinh viên (Điền đầy đủ Mã sinh viên nếu bạn là sinh viên trường Đại học Kinh tế Quốc dân):'} placeholder={'Điền mã sinh viên của bạn'} required={true} name={'school'}/>
                      <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div>

                      <RadioCustom number={7} text={'Bạn tham gia với tư cách:'} required={true}  data={attendWith}/>
                      <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div>

                      <p className='check max-md:hidden'>HÃY KIỂM TRA LẠI CÁC CÂU TRẢ LỜI TRƯỚC KHI GỬI ĐƠN THAM GIA VÀ LUÔN SẴN SÀNG CHO HÀNH TRÌNH ĐÁNG NHỚ SẮP TỚI!</p>
                      <ButtonCustom className={'max-md:hidden'} text={"Gửi đơn đăng ký"}/>
                    </div>

                    <div className='flex-1'>
                      <CheckBoxCustom number={6} text={'Bạn là cổ động viên của thí sinh nào? (Đối vởi đội cổ vũ):'} required={true}  data={cheer}/>
                      <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div>

                      <RadioCustom number={8} text={'Bạn có dự định học ACCA không?'} required={true}  data={learnACCA}/>
                      <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div>

                      <RadioCustom number={9} text={'Bạn dự định học ACCA trong khoảng thời gian nào?'} required={true}  data={learnACCATime}/>
                      <div className='mb-[4vw]'></div>

                      <InputCustom number={10} text={'Bạn có câu hỏi gì dành cho BTC không?'} placeholder={'Tên của bạn'} name={'name'}/>
                      <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div>
                      <p className='hidden check max-md:block'>HÃY KIỂM TRA LẠI CÁC CÂU TRẢ LỜI TRƯỚC KHI GỬI ĐƠN THAM GIA VÀ LUÔN SẴN SÀNG CHO HÀNH TRÌNH ĐÁNG NHỚ SẮP TỚI!</p>
                      <Button onClick={onclick} type="submit" className={`font-bold leading-[1.5vw] text-[1vw] uppercase 
                      text-[#FFF8FF] h-[3.375vw] w-[14.9375vw] px-[1.5vw] shadow-button bg-button
                      rounded-full border-[0.09375vw] max-md:block hidden border-[#FFDBC7] max-md:w-[50.4vw] 
                       max-md:h-[12vw] cursor-pointer z-50 max-md:text-[3.2vw]
                      `}>{'Gửi đơn đăng ký'}</Button>
                    </div>
                    </div>
                  </Form>
                )}
              </Formik>
        </Box>
      </Modal>
    </div>
  );
}
