/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import IntroText from "./IntroText";
import HeroTechStack from "./HeroTechStack";

const Hero = () => {
  return (
    <div className="h-full text-text flex items-center justify-between flex-col md:flex-row md:px-20">
      <div className="h-full w-full flex-1 flex flex-col items-center justify-center gap-10 mt-10 md:mt-0">
        <h1 className="text-accent text-center font-extrabold text-2xl md:text-4xl ">
          Hello, I'm Anssi
        </h1>
        <IntroText />
        <div className="flex flex-col items-center gap-2 md:gap-5 md:flex-row ">
          <a className="bg-background-800 p-2 rounded-md" href="#contact">
            Contact Me
          </a>
          <a
            href="/CV_Anssi_Sirkia_en.pdf"
            download="CV_Sirkia.pdf"
            className="text-secondary bg-accent p-2 rounded-md">
            Download CV
          </a>
        </div>
        <HeroTechStack />
      </div>

      <div className="flex-1 flex justify-center items-center w-full mb-8 md:h-full md:mb-0">
        <div className="relative w-[80%] h-[80%] xl:w-[60%] xl:h-[60%]">
          <Image src="/pfp.jpg" alt="" fill className="object-contain" />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
