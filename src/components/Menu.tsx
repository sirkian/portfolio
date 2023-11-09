"use client";

import Link from "next/link";
import React, { useState } from "react";
import { links } from "@/utils/links";
import Image from "next/image";
import { ModeToggle } from "./ModeToggle";

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {!open ? (
        <Image
          src="/menu.svg"
          alt="Open menu"
          width={24}
          height={24}
          onClick={() => setOpen(true)}
          className="dark:invert"
        />
      ) : (
        <Image
          src="/close.svg"
          alt="Close menu"
          width={24}
          height={24}
          onClick={() => setOpen(false)}
          className="dark:invert"
        />
      )}
      {open && (
        <div className="bg-background text-text absolute left-0 top-20 w-full h-[calc(100vh-5rem)] flex flex-col gap-8 items-center justify-center text-2xl z-10">
          <Link href="/" onClick={() => setOpen(false)}>
            Homepage
          </Link>
          {links.map((link) => (
            <Link href={link.url} key={link.id} onClick={() => setOpen(false)}>
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
          <ModeToggle />
        </div>
      )}
    </div>
  );
};

export default Menu;
