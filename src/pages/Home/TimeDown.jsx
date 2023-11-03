'use client'
import React, { useEffect, useState } from 'react'
import rowImg from '@/assets/images/svg/row.svg'
import Image from 'next/image'
import CountDown from '@/components/Home/CountDown'
import Line2 from '@/components/common/Line2'
import moment from 'moment/moment'

let idInterval
const arr = Array.from(Array(10).keys())
const TimeDown = () => {
  const [day, setDay] = useState(0)
  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)
  const [exprire, setExprire] = useState(false)

  useEffect(() => {
    let currentTime = moment(new Date())
    const currentTimeAfterFormat = currentTime.format('YYYY-MM-DD HH:mm:ss')
    const duration = moment.duration(moment('2023-11-16 23:59:59', 'YYYY-MM-DD HH:mm:ss').diff(currentTimeAfterFormat))
    const h = duration.hours() 
    const m = duration.minutes()
    const s = duration.seconds()
    let d = duration.days()
    setHour(h)
    setMinute(m)
    setSecond(s)
    setDay(d)
  }, [])

  useEffect(() => {
    idInterval = setInterval(() => {
      if (second > 0) {
        setSecond((pre) => pre - 1)
      } else {
        setSecond(59)
        if (minute > 0) {
          setMinute((pre) => pre - 1)
        } else {
          setMinute(59)
          if (hour > 0) {
            setHour((pre) => pre - 1)
          } else {
            setHour(24)
            if(day > 0) {
              setDay(pre => pre - 1)
            } else {
              setExprire(true)
            }
          }
        }
      }
    }, [1000])

    return () => {
      clearInterval(idInterval)
    }
  }, [second, minute, hour])
  
  useEffect(() => {
    if (exprire === true) {
      clearInterval(idInterval);
    }
  }, [exprire]);
  return (
    <div className='w-full h-[18.6875vw] mb-[3.13vw]'>
        <div className='flex overflow-hidden absolute -z-10 right-0 left-0 h-[18.6875vw] max-md:h-[30.164vw]'>{arr?.map(item => 
        <Image className='max-md:w-[30.164vw] max-md:h-[30.164vw]' key={item} src={rowImg} alt='img'/>)}</div>
        <div className='ml-[7.96vw] mt-[4.31vw] mb-[3.12vw] font-exoFont'>
            <h2 className='text-[2.25vw] pt-[2.8vw] font-bold leading-[3.375vw]  title__color max-md:text-[4.26vw] max-md:leading-normal'>ĐẾM NGƯỢC THỜI GIAN</h2>
            <h2 className='text-[2.25vw] font-bold leading-[3.375vw]  title__color max-md:text-[4.26vw] max-md:leading-normal max-md:mb-[4.08vw]'>ĐÓNG CỔNG ĐĂNG KÝ</h2>
            <div className='flex text-[#fff] text-[3.75vw] font-atmospheric leading-[5vw] mt-[1.87vw] max-md:text-[6.4vw] gap-[1.5vw]'>
                <CountDown time={day} exprire={exprire}/> <span className='text-[1.5vw] max-md:text-[3.5vw] font-exoFont'>Ngày</span>
                <span>:</span>
                <CountDown time={hour} exprire={exprire}/> <span className='text-[1.5vw] max-md:text-[3.5vw] font-exoFont'>Giờ</span>
                <span>:</span>
                <CountDown time={minute} exprire={exprire}/> <span className='text-[1.5vw] max-md:text-[3.5vw] font-exoFont'>Phút</span>
                <span>:</span>
                <CountDown time={second} exprire={exprire}/> <span className='text-[1.5vw] max-md:text-[3.5vw] font-exoFont'>Giây</span>
            </div>
        </div>
    </div>
  )
}

export default TimeDown