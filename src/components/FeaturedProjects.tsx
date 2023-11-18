"use client";

import React from "react";
import PortfolioItem from "./PortfolioItem";
import Link from "next/link";
import { projects } from "@/utils/projects";
import { motion } from "framer-motion";

const FeaturedProjects = () => {
  const featuredProjects = projects.filter((project) => project.featured);

  const variants = {
    initial: {
      opacity: 0,
      y: 200,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "linear",
        duration: 1,
        staggerChildren: 0.1,
        type: "spring",
        damping: 10,
        stiffness: 100,
        restDelta: 1,
      },
    },
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="text-center mt-10 font-semibold pb-1 border-b-2 border-b-accent text-3xl md:text-4xl">
        Featured Projects
      </h1>
      <motion.div
        variants={variants}
        initial="initial"
        whileInView="animate"
        className="grid grid-cols-1 gap-4 py-6 md:gap-6 lg:grid-cols-2 md:px-8 md:py-14">
        {featuredProjects.map((project) => (
          <PortfolioItem key={project.id} project={project} />
        ))}
      </motion.div>
      <h3 className="pb-1 mb-10 text-accent border-b-2 border-b-accent hover:text-primary hover:border-b-primary">
        <Link href="/projects">See all projects &#11157;</Link>
      </h3>
    </div>
  );
};

export default FeaturedProjects;
