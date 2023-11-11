"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { links } from "@/utils/links";
import Image from "next/image";
import { ModeToggle } from "./ModeToggle";

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
          <Image
            src="/menu.svg"
            alt="Open menu"
            width={36}
            height={36}
            onClick={() => setOpen(true)}
            className="dark:invert z-50 animate-in"
          />
        ) : (
          <Image
            src="/close.svg"
            alt="Close menu"
            width={36}
            height={36}
            onClick={() => setOpen(false)}
            className="dark:invert z-50"
          />
        )}
      </div>
      {open && (
        <div className="text-text backdrop-blur-xl bg-[rgba(219,219,219,0.5)] dark:bg-[rgba(15,15,15,0.5)] absolute inset-0 w-full h-screen flex flex-col gap-8 items-center justify-around text-2xl font-semibold ">
          <div className="flex justify-center flex-col items-center p-5 rounded-md gap-7 mt-10">
            <Link href="/" onClick={() => setOpen(false)}>
              Homepage
            </Link>
            {links.map((link) => (
              <Link
                href={link.url}
                key={link.id}
                onClick={() => setOpen(false)}>
                {link.iconUrl ? (
                  <Image
                    src={link.iconUrl}
                    alt={link.title}
                    width={32}
                    height={32}
                    className="dark:invert"
                  />
                ) : (
                  link.title
                )}
              </Link>
            ))}
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
