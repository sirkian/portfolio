"use client";

import ProjectSlider from "@/components/ProjectSlider";
import { projects } from "@/utils/projects";
import { usePathname } from "next/navigation";
import React from "react";

const SingleProjectPage = () => {
  const pathname = usePathname().split("/");
  const id = parseInt(pathname[pathname.length - 1]);

  const project = projects.filter((p) => p.id === id)[0];

  return (
    <main className="min-h-[calc(100vh-7rem)] flex justify-center items-center">
      <div>{project.title}</div>
      <ProjectSlider images={project.images} />
    </main>
  );
};

export default SingleProjectPage;
