import { skills } from "@/utils/skills";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LinkedInLogoIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-evenly gap-20 md:gap-10 w-[80%] 2xl:w-[60vw]">
      <div className=" flex flex-col items-center lg:w-1/2">
        <h1 className="text-center my-10 font-semibold pb-1 border-b-2 border-b-accent text-2xl md:text-3xl">
          About me
        </h1>
        <p className="text-center md:text-justify text-sm md:text-base mb-2">
          Hello! 👋 I&apos;m Anssi, a 29-year-old software development student
          blending a passion for coding with a rich background in culinary arts.
          With a decade of experience as a cook in high-pressure restaurant
          kitchens, I&apos;ve honed not only my culinary skills but also my
          ability to thrive in fast-paced environments. Currently pursuing a
          degree in software development, I bring a unique perspective to
          problem-solving and a relentless commitment to excellence. My journey
          from the kitchen to coding reflects my adaptability and determination
          to embrace new challenges.
        </p>
        <p className="text-center md:text-justify text-sm md:text-base">
          If you got this far, then kudos to you! 🤙 Don&apos;t hesitate to
          connect via LinkedIn or drop an email if you have questions, want to
          collaborate or anything!
        </p>
        <div className="flex mt-5 gap-10">
          <Link href="https://www.linkedin.com/in/anssisirkia/">
            <LinkedInLogoIcon
              width={28}
              height={28}
              className="hover:text-accent"
            />
          </Link>
          <Link href="#contact">
            <EnvelopeClosedIcon
              width={28}
              height={28}
              className=" hover:text-accent"
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row md:gap-20">
        <div className="flex-1 p-5 flex flex-col items-center">
          <h2 className="text-center mb-3 text-xl md:text-2xl font-semibold border-b-2 border-b-accent">
            Education
          </h2>
          <h3 className="text-center pt-5 text-xl md:text-2xl font-semibold">
            Haaga-Helia University of Applied Sciences
          </h3>
          <h4 className="text-base md:text-lg text-center py-2">
            {"Bachelor's"} Degree, Business Information Technology
          </h4>
          <span className="text-sm md:text-base text-accent">
            (Software Development)
          </span>
          <span className="py-5 md:text-lg">2021 - current</span>
          <p className="text-center md:text-justify py-5"></p>
        </div>
        <div className="flex-1 flex flex-col items-center p-5 xl:order-first">
          <h2 className="text-center mb-3 text-xl md:text-2xl font-semibold border-b-2 border-b-accent">
            Skills
          </h2>
          <p className="text-center md:text-justify py-5 text-sm md:text-base">
            Some of the programming languages, frameworks, libraries and other
            technologies I have worked with. Feel free to{" "}
            <Link className="text-accent hover:text-primary" href="#contact">
              contact me
            </Link>{" "}
            if you would like to know more about my proficiency with a
            particular skill.
          </p>
          <ul className="flex flex-wrap justify-center gap-2 md:gap-3 py-5">
            {skills.map((skill) => (
              <li
                className="flex text-xs md:text-base p-2 min-w-fit rounded-md gap-2 border-[1px] border-accent"
                key={skill.id}>
                <Image
                  src={skill.iconUrl}
                  alt={skill.title}
                  width={16}
                  height={16}></Image>
                {skill.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
