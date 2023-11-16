import React from "react";
import { GitHubLogoIcon, VercelLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-background text-xs md:text-sm h-28 min-h-fit flex justify-center">
      <div className="flex items-center justify-center flex-col gap-1">
        <div>© 2023 Anssi Sirkiä</div>
        <div>Made with TypeScript, NEXT.js, TailwindCSS & ☕</div>
        <div className="flex text-accent gap-5">
          <Link
            href="https://github.com/sirkian/portfolio"
            className="flex items-center gap-2 hover:text-secondary-foreground">
            <GitHubLogoIcon /> Source
          </Link>
          <Link href="/about" className="hover:text-secondary-foreground">
            About this page
          </Link>
        </div>
        <div className="flex items-center gap-1 hover:text-accent">
          <Link href="https://vercel.com/">Hosted on Vercel</Link>{" "}
          <VercelLogoIcon />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
