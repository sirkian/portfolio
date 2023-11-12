"use client";

import PortfolioItem from "@/components/PortfolioItem";
import { Button } from "@/components/ui/button";
import { categoryList, projects } from "@/utils/projects";
import React, { useState } from "react";

const ProjectsPage = () => {
  const categories = categoryList;
  const [category, setCategory] = useState("" as (typeof categoryList)[number]);

  const projectList =
    category.length > 0
      ? projects.filter((project) => project.categories.includes(category))
      : projects;

  const handleCategory = (cat: (typeof categoryList)[number]) => {
    if (category === cat) {
      return setCategory("" as (typeof categoryList)[number]);
    }
    setCategory(cat);
  };

  return (
    <main className="min-h-[calc(100vh-7rem)]">
      <div className="flex flex-col items-center py-20 md:py-5">
        <section className="md:mt-[5rem] p-2 mb-5 md:p-5 flex gap-1 md:gap-5">
          {categories.map((cat, i) => (
            <Button
              key={i}
              onClick={() => handleCategory(cat)}
              variant="link"
              className={`cursor-pointer bg-primary text-secondary text-xs md:text-sm py-1 px-2 rounded-md capitalize ${
                category === cat && "bg-slate-500"
              }`}>
              {cat}
            </Button>
          ))}
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-3 mb-5">
          {projectList.map((project) => (
            <div key={project.id} className="animate-in">
              <PortfolioItem project={project} />
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default ProjectsPage;
