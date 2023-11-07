"use client";
import { useEffect } from "react";
import Slide from "./Slide";
import Overview from "./Overview";
import FinalRules from "./FinalRules";
import Reward from "./Reward";
import Partners from "./Partners";
import "@/scss/page/home.css";
import FormRegister from "../Register/FormRegister";
import Top6 from "./Top6";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      once: true, // Whether to run animations only once
      disable: "mobile",
    });
  }, []);
  return (
    <div className="overflow-hidden">
      <Slide />
      <Overview />
      <Top6 />
      <Reward />
      <FormRegister />
      <FinalRules />
      
      <Partners />
    </div>
  );
};

export default Home;
