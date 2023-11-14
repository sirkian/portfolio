"use client";

import ProjectSlider from "@/components/ProjectSlider";
import { projects } from "@/utils/projects";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const SingleProjectPage = () => {
  const pathname = usePathname().split("/");
  const router = useRouter();
  const id = parseInt(pathname[pathname.length - 1]);
  const firstProject: boolean = id === 1;
  const lastProject: boolean = id === projects.length;

  const project = projects.filter((p) => p.id === id)[0];

  const handlePrevProject = (id: number): void => {
    if (!firstProject) {
      router.push(`/projects/${id - 1}`);
    }
  };

  const handleNextProject = (id: number): void => {
    if (!lastProject) {
      router.push(`/projects/${id + 1}`);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="relative bg-background-200 w-full xl:w-[90%] 2xl:w-[70%] min-h-screen md:min-h-[calc(100vh-5rem)] md:mt-[5rem] flex flex-col items-center ">
        <div className="mt-12 p-4">
          <h1 className="mb-4 font-bold text-2xl lg:text-4xl text-center text-accent">
            {project.title}
          </h1>
          <ProjectSlider images={project.images} />
        </div>
        <div className="flex flex-col md:flex-row w-full xl:w-[90%] 2xl:w-[60%]  text-center gap-3 md:py-3">
          <div className="md:w-1/3 p-5 md:order-first md:border-r-2">
            {project.frontend && (
              <div className="mb-5">
                <h2 className="font-bold mb-3 text-accent">Front-End</h2>
                <ul>
                  {project.frontend.map((fe, index) => (
                    <li key={index}> {fe} </li>
                  ))}
                </ul>
              </div>
            )}
            {project.backend && (
              <div className="mb-10 md:mb-0">
                <h2 className="font-bold mb-3 text-accent">Backend</h2>
                <ul>
                  {project.backend.map((be, index) => (
                    <li key={index}> {be} </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="md:w-2/3 p-5 md:pr-8 2xl:pr-2 order-first text-justify">
            {project.description.map((paragraph, index) => (
              <p key={index} className="mb-2">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="absolute bottom-5 flex gap-5 text-sm">
          <span
            className={`${
              firstProject
                ? "text-muted"
                : "text-text cursor-pointer hover:text-accent"
            }`}
            onClick={() => handlePrevProject(id)}>
            Previous project
          </span>
          <span className="text-accent">
            {id} / {projects.length}
          </span>
          <span
            className={`${
              lastProject
                ? "text-muted"
                : "text-text cursor-pointer hover:text-accent"
            }`}
            onClick={() => handleNextProject(id)}>
            Next project
          </span>
        </div>
      </div>
    </main>
  );
};

export default SingleProjectPage;
