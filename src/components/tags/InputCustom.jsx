import { ErrorMessage, Field } from 'formik'
import React from 'react'
import '@/scss/page/form.css'

const InputCustom = ({number, text, required, name, placeholder, classText}) => {
  return (
    <div className='max-md:flex max-md:flex-col max-md:!w-[80vw] flex relative'>   
        <label className={`font-exoFont ${classText} text-[1.25vw] font-bold leading-normal text-[#E3F7FF] mr-[1.12vw]
        max-md:text-[4.26vw] max-md:mb-[2.3vw]`} htmlFor={name}>{number}. {text}{required ? '*' : ''}:</label>
        <Field className="input-custom border-[0.0625vw] outline-none bg-transparent 
        text-[#8C77B9] border-x-0 border-t-0 border-b-[#493BA1] py-[0.25vw] text-[1vw] font-normal flex-1
         max-md:mb-[2.46vw]  max-md:pb-[1vw] 
        " placeholder={placeholder} type="text" name={name} />
        <ErrorMessage  name={name} component="div" className="error text-red-300 text-[1vw] max-md:text-[4.26vw] max-md:-bottom-[5vw] absolute -bottom-[1.75vw]" />
    </div>
  )
}

export default InputCustom