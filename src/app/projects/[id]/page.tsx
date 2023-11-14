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
    <main className="min-h-screen flex flex-col items-center">
      <div className="bg-background-200 w-full xl:w-[90%] 2xl:w-[70%] min-h-[calc(100vh-5rem)] md:mt-[5rem] flex flex-col items-center">
        <div className="mt-12 p-4">
          <h1 className="mb-4 font-bold text-2xl lg:text-4xl text-center text-accent">
            {project.title}
          </h1>
          <ProjectSlider images={project.images} />
        </div>
        <div className="flex flex-col md:flex-row w-full xl:w-[90%] 2xl:w-[60%] text-center gap-3 md:py-3">
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
              <div>
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
                {" "}
                {paragraph}{" "}
              </p>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleProjectPage;
