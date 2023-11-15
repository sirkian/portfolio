"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const LinkToHome = () => {
  const pathname = usePathname();

  return (
    <div
      className={`font-bold text-lg hover:text-accent ${
        pathname === "/" && "text-accent"
      }`}>
      <Link href="/">{"{ anssisirkia.dev }"}</Link>
    </div>
  );
};

export default LinkToHome;
