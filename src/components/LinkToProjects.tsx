"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const LinkToProjects = () => {
  const pathname = usePathname();

  return (
    <div
      className={`font-semibold hover:text-accent ${
        pathname === "/projects" && "text-accent"
      }`}>
      <Link href="/projects">Projects</Link>
    </div>
  );
};

export default LinkToProjects;
