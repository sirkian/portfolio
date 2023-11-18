import { Link2Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="min-h-[calc(100vh-7rem)] bg-background-200 flex flex-col justify-center items-center py-16 md:py-0 gap-10 md:gap-32">
      <section className="flex items-center flex-col gap-10 px-6 max-w-[45rem]">
        <h1 className="text-center font-semibold pb-1 border-b-2 border-b-accent text-3xl md:text-4xl">
          this.portfolio
        </h1>
        <p className="text-center md:text-justify text-sm md:text-base mb-2">
          This website was designed and coded by
          <Link
            href="https://www.linkedin.com/in/anssisirkia/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent">
            &nbsp;yours truly&nbsp;
          </Link>
          to serve as my personal portfolio. I&apos;ll keep adding more projects
          as I have them documented and this site will also be getting updates
          after the deployment.
          <Link
            href="https://github.com/sirkian/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent">
            &nbsp;Here&apos;s the Github repository for this site.
          </Link>
        </p>
        <h2 className="text-center font-semibold pb-1 text-2xl md:text-3xl">
          Made with:
        </h2>
        <ul>
          <li className="flex items-center gap-2 mb-1 hover:text-accent">
            <Link2Icon />
            <Link
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer">
              TypeScript
            </Link>
          </li>
          <li className="flex items-center gap-2 mb-1 hover:text-accent">
            <Link2Icon />
            <Link
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer">
              NEXT.js
            </Link>
          </li>
          <li className="flex items-center gap-2 mb-1 hover:text-accent">
            <Link2Icon />
            <Link
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer">
              TailwindCSS
            </Link>
          </li>
          <li className="flex items-center gap-2 mb-1 hover:text-accent">
            <Link2Icon />
            <Link
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer">
              shadcn
            </Link>
          </li>
          <li className="flex items-center gap-2 mb-1 hover:text-accent">
            <Link2Icon />
            <Link
              href="https://www.radix-ui.com/icons"
              target="_blank"
              rel="noopener noreferrer">
              Radix Icons
            </Link>
          </li>
          <li className="flex items-center gap-2 mb-1 hover:text-accent">
            <Link2Icon />
            <Link
              href="https://devicon.dev/"
              target="_blank"
              rel="noopener noreferrer">
              DEVICON
            </Link>
          </li>
        </ul>
      </section>
      <section className="flex flex-col items-center gap-5">
        <h3 className="pb-1 border-b-2 border-b-accent">Privacy</h3>
        <p className="text-center md:text-justify text-sm md:text-base mb-2">
          No ads, cookies or trackers, good vibes only.
        </p>
      </section>
    </main>
  );
};

export default page;
