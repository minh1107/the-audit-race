import { ErrorMessage, Field } from 'formik'
import React from 'react'

const TextAreaCustom = ({number, text, required, name, placeholder}) => {
  return (
    <div className='flex max-md:flex-col gap-[1vw]'>   
        <label className='font-exoFont text-[1.5vw] font-bold leading-[2.25vw] text-[#E3F7FF] mr-[1.12vw] max-md:text-[4.26vw] 
        max-md:leading-[6.4vw] max-md:mb-[6.4vw]' htmlFor={name}>{number}. {text}{required ? '*' : ''}:</label>
        <Field className="input-custom flex-1 border-[0.0625vw] outline-none bg-transparent 
        text-[#8C77B9] border-x-0 border-t-0 border-b-[#493BA1] text-[1vw] font-normal mt-[0.5vw] mb-[1.19vw]
        max-md:h-[28vw]" as="textarea" placeholder={placeholder}  name={name} />
        <ErrorMessage  name={name} component="div" className="error text-red-300 mt-[1vw]" />
    </div>
  )
}

export default TextAreaCustom