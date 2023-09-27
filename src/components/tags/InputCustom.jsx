import { ErrorMessage, Field } from 'formik'
import React from 'react'
import '@/scss/page/form.css'

const InputCustom = ({number, text, required, name, placeholder}) => {
  return (
    <div className='max-md:flex max-md:flex-col'>   
        <label className='font-exoFont text-[1.5vw] font-bold leading-[2.25vw] text-[#E3F7FF] mr-[1.12vw]
        max-md:text-[4.26vw] max-md:mb-[4.3vw]' htmlFor={name}>{number}. {text}{required ? '*' : ''}:</label>
        <Field className="input-custom w-[39.625vw] border-[0.0625vw] outline-none bg-transparent 
        text-[#8C77B9] border-x-0 border-t-0 border-b-[#493BA1] text-[1vw] leading-[1.5vw] font-normal
         max-md:mt-[5.46vw] max-md:w-full max-md:pb-[1vw]
        " placeholder={placeholder} type="text" name={name} />
        <ErrorMessage  name={name} component="div" className="error text-red-300" />
    </div>
  )
}

export default InputCustom