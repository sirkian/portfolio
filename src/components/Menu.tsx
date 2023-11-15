"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ModeToggle } from "./ModeToggle";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  HamburgerMenuIcon,
  Cross1Icon,
} from "@radix-ui/react-icons";

const Menu = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  return (
    <div className="md:hidden relative flex justify-end p-5">
      <div className="z-50">
        {!open ? (
          <HamburgerMenuIcon
            width={28}
            height={28}
            onClick={() => setOpen(true)}
          />
        ) : (
          <Cross1Icon width={28} height={28} onClick={() => setOpen(false)} />
        )}
      </div>
      {open && (
        <div className="text-text backdrop-blur-xl bg-[rgba(219,219,219,0.5)] dark:bg-[rgba(15,15,15,0.5)] absolute inset-0 w-full h-screen flex flex-col gap-8 items-center justify-around text-2xl font-semibold ">
          <div className="flex justify-center flex-col items-center p-5 rounded-md gap-10 mt-10">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="/projects" onClick={() => setOpen(false)}>
              Projects
            </Link>
            <a
              href="/CV_Anssi_Sirkia_en.pdf"
              download="CV_Sirkia.pdf"
              onClick={() => setOpen(false)}>
              Resume (PDF)
            </a>
            <div className="flex gap-5">
              <Link href="https://github.com/sirkian">
                <GitHubLogoIcon height={28} width={28} />
              </Link>
              <Link href="https://www.linkedin.com/in/anssisirkia/">
                <LinkedInLogoIcon height={28} width={28} />
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <span className="text-sm">Toggle theme</span>
            <ModeToggle />
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
