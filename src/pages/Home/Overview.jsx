"use client";
import Image from "next/image";
import ellipse from "@/assets/images/svg/Ellipse.png";
import TimeDown from "./TimeDown";
import Line2 from "@/components/common/Line2";

const Overview = () => {
  return (
    <div className="relative bg-[#01026D] overflow-hidden" id="gioithieu">
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
