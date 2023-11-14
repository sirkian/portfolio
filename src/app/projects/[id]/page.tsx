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
        <div className="flex flex-col md:flex-row w-full xl:w-[90%] 2xl:w-[70%] text-center gap-3 md:py-3">
          <div className="md:w-1/3 p-5 md:order-first">
            <ul className="my-1">
              <li>Java</li>
              <li>JavaScript</li>
              <li>REST</li>
              <li>MySQL</li>
              <li>React.js</li>
              <li>Deployed on Azure</li>
            </ul>
          </div>
          <div className="md:w-2/3 p-5 md:pr-8 2xl:pr-2 order-first text-justify">
            <p className="my-1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic quod
              accusamus nobis tempore debitis aperiam. Laudantium velit
              consectetur ab ratione odit quae asperiores explicabo expedita
              tempora blanditiis, voluptatum officia fugiat!
            </p>
            <p className="my-1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic quod
              accusamus nobis tempore debitis aperiam. Laudantium velit
              consectetur ab ratione odit quae asperiores explicabo expedita
              tempora blanditiis, voluptatum officia fugiat!
            </p>
            <p className="my-1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic quod
              accusamus nobis tempore debitis aperiam. Laudantium velit
              consectetur ab ratione odit quae asperiores explicabo expedita
              tempora blanditiis, voluptatum officia fugiat!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleProjectPage;
