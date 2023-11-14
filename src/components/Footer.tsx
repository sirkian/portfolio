import React from "react";
import { GitHubLogoIcon, VercelLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-background text-xs md:text-sm border-t-[1px] h-28 min-h-fit flex justify-center">
      <div className="flex items-center justify-center flex-col gap-1">
        <div>© 2023 Anssi Sirkiä</div>
        <div>Made with TypeScript, Next.js, TailwindCSS & ☕</div>
        <div>
          <Link
            href="https://github.com/sirkian/portfolio"
            className="flex items-center gap-2 text-accent hover:text-secondary-foreground">
            <GitHubLogoIcon /> Source
          </Link>
        </div>
        <div className="flex items-center gap-1 hover:text-accent">
          <Link href="https://vercel.com/">Powered by Vercel</Link>{" "}
          <VercelLogoIcon />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
