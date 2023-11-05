import { ErrorMessage, Field } from 'formik'
import React from 'react'

const RadioCustom = ({number, text, required, data}) => {
  return (
    <div data-aos="fade-up" className='relative'>
    <label className='font-exoFont text-[1.25vw] font-bold  text-[#E3F7FF] mr-[1.12vw] max-md:text-[4.26vw]'>{number}. {text}{required ? '*' : ''}</label>
    <div className='flex flex-col justify-center gap-[0.88vw] mt-[1.62vw] max-md:gap-[1.4vw] max-md:mt-[2.818vw] max-md:mb-[10vw]'>
      {
        data?.map(item => (
            <label key={item?.value} className='radio__text flex gap-[0.5vw] items-center max-md:gap-[3.7vw]'>
                <Field type="radio" name={item?.name} value={item?.value} id="checkbox" className="radio__img cursor-pointer"/>
                <span className='radio__text'>{item?.nameValue}</span>
            </label>
        ))
      }
    </div>
    <ErrorMessage name={data[0].name} component="div" className="error mt-[0.5vw] max-md:bottom-[-8vw] text-red-300 mb-[-1vw] text-[1vw] max-md:text-[4.26vw] absolute" />
  </div>
  )
}

export default RadioCustom