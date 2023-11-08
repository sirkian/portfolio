/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import IntroText from "./IntroText";
import HeroTechStack from "./HeroTechStack";

const Hero = () => {
  return (
    <div className=" bg-gradient-black h-full text-text grid grid-cols-1 md:grid-rows-7 md:grid-cols-2 gap-4 md:px-20 2xl:px-80">
      <div className=" md:col-span-1 md:row-span-3 h-full w-full flex flex-col items-center justify-center gap-10 md:gap-20">
        <h1 className="gradient-text text-center font-extrabold text-2xl md:text-4xl lg:text-6xl">
          Hello, I'm Anssi
        </h1>
        <IntroText />
        <div className="flex flex-col items-center text-sm lg:text-lg xl:text-xl gap-2 md:gap-5 xl:gap-8 md:flex-row md:mt-10">
          <a className="hover:bg-background-800 p-2 rounded-md" href="#contact">
            Contact Me
          </a>
          <a
            href="/CV_Anssi_Sirkia_en.pdf"
            download="CV_Sirkia.pdf"
            className="text-secondary bg-gradient-brown hover:bg-primary hover:text-text-50 p-2 rounded-md">
            Download CV
          </a>
        </div>
      </div>

      <div className="md:col-span-1 md:row-span-3 flex justify-center items-center w-full md:h-full">
        <div className="relative w-[80%] h-[80%] xl:w-[60%] xl:h-[60%]">
          <Image src="/pfp.jpg" alt="" fill className="object-contain" />
        </div>
      </div>
      <div className="md:col-span-2 md:row-span-1 flex justify-center items-center mb-5 md:mb-0">
        <HeroTechStack />
      </div>
    </div>
  );
};

export default Hero;
