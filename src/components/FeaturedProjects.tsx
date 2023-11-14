import React from "react";
import PortfolioItem from "./PortfolioItem";
import Link from "next/link";
import { projects } from "@/utils/projects";

const FeaturedProjects = () => {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="text-center mt-10 font-semibold pb-1 border-b-2 border-b-accent text-2xl md:text-3xl">
        Featured Projects
      </h1>
      <div className="grid grid-cols-1 gap-4 py-6 md:gap-6 lg:grid-cols-2 md:px-8 md:py-14">
        {featuredProjects.map((project) => (
          <PortfolioItem key={project.id} project={project} />
        ))}
      </div>
      <h3 className="pb-1 mb-10 text-accent border-b-2 border-b-accent hover:text-primary hover:border-b-primary">
        <Link href="/projects">See more &#11157;</Link>
      </h3>
    </div>
  );
};

export default FeaturedProjects;
