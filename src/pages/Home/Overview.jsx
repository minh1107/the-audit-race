"use client";
import Image from "next/image";
import ellipse from "@/assets/images/svg/Ellipse.png";
import TimeDown from "./TimeDown";
import Line2 from "@/components/common/Line2";
import React, { useState } from 'react'
import { overview } from '@/utils/resources'
import racingBoyImg from '@/assets/images/svg/logo.png'
import tradingImg from '@/assets/images/trading.png'
import backgroundOverView from '@/assets/images/backgroundOverview.png'
import run1 from '@/assets/images/run.png'
import overviewTitle from '@/assets/images/svg/overviewTitle.png'
import flash from '@/assets/images/svg/flashShort.png'
import ButtonCustom from '@/components/tags/ButtonCustom'
import Line from '@/components/common/Line'
import Link from 'next/link'
import FormSubmit from './FormSubmit'

const Overview = () => {
  const [status, setStatus] = useState(false)

  const handleScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });

  };
  return (
    <div className="relative bg-[#01026D] overflow-hidden" id="gioithieu">
            <div className='relative' id='gioithieu'>
        <Image  src={backgroundOverView} alt='background' className='absolute top-0 left-0 h-full -z-10 max-md:h-[186vw]'/>
        <div className='pt-[5.84vw]'>
          <Image data-aos="fade-up" src={overviewTitle} alt='title' className='mx-auto z-100 max-md:w-[80.976vw] max-md:h-[8.3064vw]'/>
          <div className='mr-[11.69vw] max-2xl:mr-[5.69vw]  ml-[7.96vw] flex mt-[3.86vw] gap-[2.75vw] max-md:flex-col-reverse max-md:mt-[12.93vw]'>
            <div className='w-[45vw] max-md:w-full'>
              <Image src={tradingImg} alt='Racing boy' className='absolute top-[12.37vw] w-[45.56438vw] h-[23.52638vw] object-fill
               max-md:static max-md:w-[76.6616vw] max-md:z-[-100] max-md:h-[39.58vw]'/>
              <Image src={racingBoyImg} alt='Trading' className='absolute bottom-[-6vw] left-0 w-[60vw] h-[30vw] object-contain
               max-md:w-[86.6616vw] max-md:h-[49.58vw] max-md:bottom-[-6%] max-md:left-[8vw]'/>
            </div>
            <div className='w-[32.60094vw] max-2xl:w-[38.60094vw] max-md:w-full mb-[5vw] text-justify'>
              <h3 data-aos="fade-up" className='text-[1.75vw] font-exoFont mb-[0.75vw] font-bold leading-[2.25vw]
               space-[0.00438vw] text__color max-md:text-[3.73vw] max-md:leading-normal max-md:mb-[3.2vw]'>{overview?.titleTop}</h3> 
              <p data-aos="fade-up" className='text-[#E3F7FF] mb-[0.75vw] max-md:text-[2.4vw] max-md:mb-[3.2vw]'>{overview?.contentTop1}</p>
              <p data-aos="fade-up" className='text-[#E3F7FF] mb-[2.25vw] max-md:text-[2.4vw] max-md:mb-[3.2vw]'>{overview?.contentTop2}</p>
              {/* <h3 className='text-[1.75vw] font-exoFont mb-[0.75vw] font-bold 
              max-md:mb-[3.2vw] leading-[2.25vw] space-[0.00438vw] text__color max-md:text-[3.73vw] max-md:leading-normal'>{overview?.titleBottom}</h3>  */}
              {/* <p className='text-[#E3F7FF] mb-[3.12vw] max-md:text-[2.4vw] max-md:mb-[3.2vw]'>{overview?.contentBottom}</p> */}
            <Link href={'#register'} onClick={handleScroll}> 
              <ButtonCustom onclick={() => setStatus(true)} text={'ĐĂNG KÝ tham gia'} 
              className='hidden max-md:block absolute bottom-[10vw] mt-[6vw] -z-10 right-[31.69vw] max-md:static'/>
            </Link>

            </div>
          </div>
          <div className='absolute bottom-[34%] translate-y-[20%]  -z-10'>
          <Line2 />
          </div>
          {/* <Image src={run1} alt='' className='absolute bottom-[43%] opacity-50 -z-10 -left-[1%] w-[29.52119vw] h-[6.462vw] 
          max-md:left-[-2%] max-md:bottom-[14%] max-md:w-[49.66vw] max-md:h-[10.87vw]'/> */}
          {/* <Image src={flash} alt='' className='absolute bottom-[39%] opacity-70 -z-10 left-[4%] w-[29.52119vw] h-[6.462vw] max-md:bottom-[20%]
          max-md:w-[49.66vw] max-md:h-[10.87vw] max-md:left-[-10%]'/> */}
          <Image src={ellipse} alt='' className='absolute bottom-[33.3%] max-md:hidden opacity-70 -z-10 right-[7.6vw] h-[2vw] w-[29.52119vw] max-md:bottom-[20%]
          max-md:w-[49.66vw] max-md:h-[10.87vw]'/>
            <Link href={'#register'} onClick={handleScroll}> 
              <ButtonCustom onclick={() => setStatus(true)} text={'ĐĂNG KÝ tham gia'} 
              className='absolute bottom-[-2.7vw] -z-10 right-[31.69vw] max-md:static max-md:hidden'/>
            </Link>
          <div className='max-md:block hidden absolute max-md:w-[100vw] bottom-[14%] left-[-50%] -z-10'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1000px" height="10" viewBox="0 0 375 10" fill="none">
            <g filter="url(#filter0_d_4676_8707)">
              <path d="M-1.01562 5.12793H631.89" stroke="url(#paint0_linear_4676_8707)" stroke-width="1.183"/>
            </g>
            <defs>
              <filter id="filter0_d_4676_8707" x="-4.95896" y="0.593042" width="640.792" height="9.06978" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="1.97167"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.980246 0 0 0 0 0.457958 0 0 0 0 0.963398 0 0 0 1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4676_8707"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4676_8707" result="shape"/>
              </filter>
              <linearGradient id="paint0_linear_4676_8707" x1="315.437" y1="5.12793" x2="315.437" y2="6.12793" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFC6FD"/>
                <stop offset="0.489583" stop-color="#FF9EFC"/>
                <stop offset="1" stop-color="#FFC6FD"/>
              </linearGradient>
            </defs>
          </svg>
          </div>
          <div className='max-md:block hidden absolute max-md:w-[100vw] bottom-[-13%] left-[-50%] -z-10'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1000px" height="10" viewBox="0 0 375 10" fill="none">
            <g filter="url(#filter0_d_4676_8707)">
              <path d="M-1.01562 5.12793H631.89" stroke="url(#paint0_linear_4676_8707)" stroke-width="1.183"/>
            </g>
            <defs>
              <filter id="filter0_d_4676_8707" x="-4.95896" y="0.593042" width="640.792" height="9.06978" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="1.97167"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.980246 0 0 0 0 0.457958 0 0 0 0 0.963398 0 0 0 1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4676_8707"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4676_8707" result="shape"/>
              </filter>
              <linearGradient id="paint0_linear_4676_8707" x1="315.437" y1="5.12793" x2="315.437" y2="6.12793" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFC6FD"/>
                <stop offset="0.489583" stop-color="#FF9EFC"/>
                <stop offset="1" stop-color="#FFC6FD"/>
              </linearGradient>
            </defs>
          </svg>
          </div>
        </div>
        {/* <FormSubmit setStatus={setStatus} status={status}/> */}
    </div>
      {/* <div
        style={{ filter: "drop-shadow(0px 0px 10px #FA75F6)" }}
        className="absolute top-[2.25rem] left-0 w-full border-t border-solid border-[#FFC6FD] opacity-75"
      ></div> */}
      <div className="pt-[1vw] relative z-10 h-[27.4vw] max-md:h-[46.4vw]">
        <Image
          className="object-fill w-full h-full max-lg:hidden"
          src={"/bg-timedown.jpg"}
          alt="background time down"
          fill
          sizes="100vw"
        />
        <Image
          className="object-contain w-full h-full lg:hidden"
          src={"/bg-timedown-mb.png"}
          alt="background time down"
          fill
          sizes="100vw"
        />
        {/* <div className="absolute top-0 translate-y-[20%] ">
          <Line2 />
        </div>

        <Image
          src={ellipse}
          alt=""
          className="absolute top-0 max-md:hidden opacity-70 right-[7.6vw] h-[2vw] w-[29.52119vw] max-md:bottom-[20%]
          max-md:w-[49.66vw] max-md:h-[10.87vw]"
        /> */}

        {/* <div className="max-md:block hidden absolute max-md:w-[100vw] bottom-[14%] left-[-50%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1000px"
            height="10"
            viewBox="0 0 375 10"
            fill="none"
          >
            <g filter="url(#filter0_d_4676_8707)">
              <path
                d="M-1.01562 5.12793H631.89"
                stroke="url(#paint0_linear_4676_8707)"
                strokeWidth="1.183"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_4676_8707"
                x="-4.95896"
                y="0.593042"
                width="640.792"
                height="9.06978"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="1.97167" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.980246 0 0 0 0 0.457958 0 0 0 0 0.963398 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_4676_8707"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_4676_8707"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_4676_8707"
                x1="315.437"
                y1="5.12793"
                x2="315.437"
                y2="6.12793"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FFC6FD" />
                <stop offset="0.489583" stop-color="#FF9EFC" />
                <stop offset="1" stop-color="#FFC6FD" />
              </linearGradient>
            </defs>
          </svg>
        </div> */}
        <TimeDown />
        {/* <div className="max-md:block hidden absolute max-md:w-[100vw] bottom-[-13%] left-[-50%] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1000px"
            height="10"
            viewBox="0 0 375 10"
            fill="none"
          >
            <g filter="url(#filter0_d_4676_8707)">
              <path
                d="M-1.01562 5.12793H631.89"
                stroke="url(#paint0_linear_4676_8707)"
                strokeWidth="1.183"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_4676_8707"
                x="-4.95896"
                y="0.593042"
                width="640.792"
                height="9.06978"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="1.97167" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.980246 0 0 0 0 0.457958 0 0 0 0 0.963398 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_4676_8707"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_4676_8707"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_4676_8707"
                x1="315.437"
                y1="5.12793"
                x2="315.437"
                y2="6.12793"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FFC6FD" />
                <stop offset="0.489583" stop-color="#FF9EFC" />
                <stop offset="1" stop-color="#FFC6FD" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <Line2 /> */}
      </div>
      {/* <FormSubmit setStatus={setStatus} status={status}/> */}

    </div>
  );
};

export default Overview;
