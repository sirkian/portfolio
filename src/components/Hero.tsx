import Image from "next/image";
import React from "react";
import IntroText from "./IntroText";
import HeroTechStack from "./HeroTechStack";
import { Shadows_Into_Light_Two } from "next/font/google";
import Link from "next/link";

const shadows = Shadows_Into_Light_Two({
  weight: "400",
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const Hero = () => {
  return (
    <div className="h-[calc(100vh-3rem)] lg:w-[90vw] 2xl:w-[70vw] flex flex-col mx-auto">
      <div className="h-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
        <div className="flex md:flex-1 flex-col items-center gap-10">
          <h1
            className={`${shadows.className} gradient-text text-5xl md:text-6xl lg:text-7xl xl:text-8xl py-2 md:py-5 `}>
            Hello, I&apos;m Anssi
          </h1>
          <div className="">
            <IntroText />
          </div>

          <div className="flex flex-col items-center gap-10">
            <div className="flex flex-col gap-2 items-center">
              <span className="text-sm md:text-base"> 📍 Uusimaa, Finland</span>
              <span className="text-sm md:text-base">
                ✅ Open for work / collaboration
              </span>
            </div>

            <Link
              className="p-2 text-primary-foreground font-semibold md:p-3 bg-primary rounded-md hover:bg-accent"
              href="#contact">
              Contact Me
            </Link>
          </div>
        </div>

        <div className="flex md:flex-1 justify-center items-center w-1/2 md:h-full order-first md:order-last">
          <div className="relative w-[10rem] h-[10rem] md:w-[20rem] md:h-[20rem] lg:w-[25rem] lg:h-[25rem]">
            <Image
              src="/images/pfp.jpg"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain rounded-full grayscale"
              priority
            />
          </div>
        </div>
      </div>
      <div className="md:col-span-2 md:row-span-1 flex justify-center items-center mb-5 md:mb-0">
        <HeroTechStack />
      </div>
    </div>
  );
};

export default Hero;
