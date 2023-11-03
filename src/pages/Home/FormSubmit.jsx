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
import { Box } from '@mui/material';


const currentJob = [
    {
      name: 'student',
      value: 'Sinh viên năm 2',
      nameValue: 'Sinh viên năm 2'
    },
    {
      name: 'student',
      value: 'Sinh viên năm 3',
      nameValue: 'Sinh viên năm 3'
    },
  ]
  
  const englishLevel = [
    {
      name: 'englishSkill',
      value: 'fluent(thành thạo)',
      nameValue: 'Thành thạo'
    },
    {
      name: 'englishSkill',
      value: 'advanced(Khá)',
      nameValue: 'Khá'
    },
    {
      name: 'englishSkill',
      value: 'intermediate(Trung bình)',
      nameValue: 'Trung bình'
    },
    {
      name: 'englishSkill',
      value: 'Basic (Cơ bản)',
      nameValue: 'Cơ bản'
    },
  ]
  
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
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function FormSubmit({status, setStatus}) {
  const handleClose = () => setStatus(false);
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
      fetch('https://sheetdb.io/api/v1/4yqzxxzpugq4j', {
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
    <div>
      <Modal
        open={status}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='!w-[50vw] !h-[90vh] overflow-y-scroll bg-[#000155]'>
        <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isValid, isSubmitting }) => (
                  <Form>
                    <TextForm text={'THÔNG TIN CÁ NHÂN'}/>
                    <div className='max-md:mb-[6.4vw]'></div>

                    <InputCustom number={1} text={'Họ và Tên'} placeholder={'Tên của bạn'} required={true} name={'name'}/>
                    <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div>
                    
                    <InputCustom number={2} text={'Email'} placeholder={'Điền Email của bạn'} required={true} name={'email'}/>
                    <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div>

                    <InputCustom number={3} text={'Số  điện thoại'} placeholder={'Điền Số điện thoại của bạn'} required={true} name={'phone'}/>
                    <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div>
                    
                    <InputCustom number={4} text={'Đang học tại'} placeholder={'Ghi đầy đủ tên trường (VD: Trường Đại học Kinh Tế Quốc Dân)'} required={true} name={'school'}/>
                    <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div>

                    {/* <InputCustom number={2} text={'Ngày sinh'} placeholder={'DD/MM/YYYY'} required={true} name={'birth'}/>
                    <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div> */}
                    
                    {/* <RadioCustom number={3} text={'Hiện tại đang là'} required={true} data={currentJob}/>
                    <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div> */}
                    
                    {/* <InputCustom number={4} text={'Đang học tại'} placeholder={'Ghi đầy đủ tên trường (VD: Trường Đại học Kinh Tế Quốc Dân)'} required={true} name={'school'}/>
                    <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div> */}
                    
                    {/* <InputCustom number={5} text={'Lớp chuyên ngành'} placeholder={'Ghi đầy đủ tên lớp (VD: Kiểm toán 63A)'} required={true} name={'specialized'}/>
                    <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div> */}

                    {/* <InputCustom number={8} text={'Link Facebook'} placeholder={'Đường dẫn (link) tài khoản facebook của bạn'} required={true} name={'facebook'}/>
                    <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div> */}

                    {/* <InputCustom number={9} text={'Tài khoản khác'} placeholder={'Đường dẫn (link) tài khoản LinkedIn, Instagram, Tiktok,... của bạn'} 
                    required={false} name={'facebookOther'}/>
                    <div className='mb-[6.94vw]'></div> */}

                    {/* <TextForm text={'HỌC VẤN'}/>
                    <div className='max-md:mb-[12.8vw]'></div> */}
                    
                    {/* <InputCustom number={10} text={'GPA tích lũy'} placeholder={'Đến thời điểm hiện tại trên thang 4 (VD: 3.xx/4.00)'} required={true} name={'GPA'}/>
                    <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div> */}
      
                    {/* <TextAreaCustom number={11} text={'Thành tích'} placeholder={'Các thành tích về học bổng, nghiên cứu khoa học,...  (VD: Học bổng KKHT 3 học kỳ, Top 30 cuộc thi The Audit Race 2022,...)'} 
                    required={false} name={'achievements'}/>
                    <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div> */}

                    {/* <TextAreaCustom number={12} text={'Chứng chỉ chuyên môn'} placeholder={'Bạn có đang theo đuổi các chứng chỉ liên quan đến chuyên môn (VD: ACCA, CFAB, CFA, CMA,...) không? Nêu cụ thể những môn đã thi của chứng chỉ đó.'} 
                    required={false} name={'certificate'}/>
                    <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div> */}

                    {/* <RadioCustom number={13} text={'Khả năng thông thạo tiếng Anh'} required={true} data={englishLevel}/>
                    <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div> */}
                                              
                    {/* <TextAreaCustom number={14} text={'Chứng chỉ ngoại ngữ, tin học'} placeholder={'Mức điểm đạt được ở các chứng chỉ (VD: IELTS 7.0, MOS Excel 900,...)'} 
                    required={false} name={'certificateOther'}/> */}
                    {/* <div className='mb-[6.94vw]'></div> */}
                    
                    {/* <TextForm text={'HOẠT ĐỘNG NGOẠI KHÓA VÀ ĐÓNG GÓP XÃ HỘI'}/>
                    <div className='max-md:mb-[6.4vw]'></div> */}

                    {/* <TextAreaCustom number={15} text={'Hoạt động ngoại khoá bạn đã từng tham gia'} placeholder={'“Thời gian _ Chi tiết công việc” của hoạt động bạn đã làm (VD: 2023 _ Trưởng BTC The Audit Race 2023)'} 
                    required={false} name={'activity'}/>
                    <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div> */}
                    
                    {/* <TextAreaCustom number={16} text={'Kinh nghiệm làm việc'} placeholder={'Kinh nghiệm thực tập hoặc làm thêm ở vị trí liên quan đến lĩnh vực Kế toán - Kiểm toán - Tài chính bạn có.      '} 
                    required={false} name={'expWork'}/>
                    <div className='mb-[6.94vw]'></div> */}
                    
                    {/* <TextForm text={'MINH CHỨNG*'} marginBottom={false}/>
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
                    </div> */}

                    {/* <InputCustom number={17} text={'Link Drive'} placeholder={"Đặt quyền truy cập công khai và đặt tên theo cú pháp 'Họ Tên_Ngày Sinh'"} 
                    required={true} name={'linkDrive'}/>
                    <div className='mb-[6.94vw]'></div> */}

                    {/* <TextForm text={'CÂU HỎI VỀ CUỘC THI'}/>
                    <div className='max-md:mb-[6.4vw]'></div> */}

                    {/* <TextAreaCustom number={18} text={'Bạn muốn nhận được gì khi tham gia The Audit Race 2023?'} 
                    placeholder={'Điều bạn mong muốn'} 
                    required={false} name={'want'}/>
                    <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div> */}

                    <RadioCustom number={5} text={'Bạn có dự định học ACCA không?'} required={true}  data={learnACCA}/>
                    <div className='mb-[2.5vw] max-md:mb-[6.4vw]'></div>

                    <RadioCustom number={6} text={'Bạn dự định học ACCA trong khoảng thời gian nào?'} required={true}  data={learnACCATime}/>
                    <div className='mb-[4vw]'></div>

                    <p className='check'>HÃY KIỂM TRA LẠI CÁC CÂU TRẢ LỜI TRƯỚC KHI GỬI ĐƠN ĐĂNG KÝ VÀ LUÔN SẴN SÀNG CHO HÀNH TRÌNH ĐÁNG NHỚ SẮP TỚI!</p>
                    <ButtonCustom text={"Gửi đơn đăng ký"}/>
                    <div className='mb-[12.18vw] max-md:mb-[18.6vw]'></div>
                  </Form>
                )}
              </Formik>
        </Box>
      </Modal>
    </div>
  );
}
