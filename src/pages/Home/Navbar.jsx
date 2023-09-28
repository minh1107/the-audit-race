import Image from "next/image";
import React from "react";
import navbarImg from "@/assets/images/navbarMobileBg.png";
import { headerPaths } from "@/utils/paths";
import Link from "next/link";
import logoFooterImg from "@/assets/images/svg/logoFooter.svg";

const Navbar = ({setShow}) => {

  return (
    <div className="w-full h-[100vh] bg-inherit fixed z-50 hidden max-md:block bg-[#01026D]">
      <Image
        src={navbarImg}
        alt="navbar"
        className="w-full h-[100vh] absolute top-0 opacity-20"
      />
      <div className="flex flex-col gap-[3.73vw] ml-[11.2vw] mt-[10.42vw]">
        {headerPaths.map((item) => (
          <Link onClick={() => setShow(false)}
            href={item.link}
            className="z-50 text-[4.266vw] font-bold text-white uppercase"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="absolute bottom-0 -translate-y-[50%] w-full">
        <div className="max-md:mb-0 w-[20vw] ml-auto mr-[4.54vw]">
          <Image
            src={logoFooterImg}
            alt=""
            className="w-[9.62531vw] h-[3.93775vw] max-md:h-[7.97vw] max-md:w-[19.46vw]"
          />
          <p className="bg-white text-black text-[0.77788vw] font-arial mt-[0.18vw] px-[0.54vw] max-md:text-[1.6vw]">
            The Future Auditors Club
          </p>
        </div>
        <div className="w-[94.13vw] mx-auto h-[1px] mt-[7.616vw] bg-[#FF9EFC]"></div>
        <div className="absolute top-[49%] right-[10%]">
        <svg xmlns="http://www.w3.org/2000/svg" width="163" height="16" viewBox="0 0 163 16" fill="none">
        <ellipse cx="81.1357" cy="7.56995" rx="81.0566" ry="7.56214" fill="url(#paint0_radial_4780_11471)"/>
        <defs>
            <radialGradient id="paint0_radial_4780_11471" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(81.1357 7.56995) rotate(90) scale(7.56214 81.0566)">
            <stop stop-color="#FFFEFF"/>
            <stop offset="0.645833" stop-color="#FFB4FC" stop-opacity="0.1"/>
            <stop offset="1" stop-color="#583EA3" stop-opacity="0"/>
            </radialGradient>
        </defs>
        </svg>
        </div>
        <p
          className="text-[#A4DEFF] text-[0.75vw] font-normal leading-[1vw] w-full text-right pr-[6.25vw] pb-[1.7vw] mt-[0.85vw]
            max-md:text-[3.2vw] max-md:leading-[133.333%] max-md:mt-[2.944vw] max-md:pb-[7.912vw]"
        >
          © 2023 The Audit Race 2023
        </p>
      </div>
    </div>
  );
};

export default Navbar;
