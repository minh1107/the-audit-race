import { ErrorMessage, Field } from 'formik'
import React from 'react'

const RadioCustom = ({number, text, required, data}) => {
  return (
    <div>
    <label className='font-exoFont text-[1.5vw] font-bold leading-[2.25vw] text-[#E3F7FF] mr-[1.12vw] max-md:text-[4.26vw]'>{number}. {text}{required ? '*' : ''}:</label>
    <div className='flex flex-col justify-center gap-[0.88vw] mt-[1.62vw] max-md:gap-[1.4vw] max-md:mt-[2.818vw]'>
      {
        data?.map(item => (
            <label key={item?.value} className='radio__text flex gap-[0.5vw] items-center max-md:gap-[3.7vw]'>
                <Field type="radio" name={item?.name} value={item?.value} className="radio__img cursor-pointer"/>
                <span className='radio__text'>{item?.nameValue}</span>
            </label>
        ))
      }
    </div>
    <ErrorMessage name={data[0].name} component="div" className="error text-red-300 mt-[1vw]" />
  </div>
  )
}

export default RadioCustom