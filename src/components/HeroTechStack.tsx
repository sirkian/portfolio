"use client";

import { TechType, skills } from "@/utils/skills";
import Image from "next/image";
import React, { useState } from "react";

const HeroTechStack = () => {
  const featuredTechnologies = skills.filter((tech) => tech.featured);
  const [hoveredTech, setHoveredTech] = useState<TechType | null>(null);

  const handleMouseEnter = (tech: TechType) => {
    setHoveredTech(tech);
  };

  const handleMouseLeave = () => {
    setHoveredTech(null);
  };

  return (
    <div className="mb-4 border-t-2 pt-3">
      <ul className="flex gap-5">
        {featuredTechnologies.map((tech) => (
          <li
            key={tech.id}
            className="relative w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem]"
            onMouseEnter={() => handleMouseEnter(tech)}
            onMouseLeave={handleMouseLeave}>
            <Image src={tech.iconUrl} alt={tech.title} fill />
            {hoveredTech === tech && (
              <div className="absolute bg-background-800 text-text-50 rounded-md text-xs md:text-sm p-1 md:p-2 top-9 md:top-14 left-5 transform -translate-x-1/2 opacity-90">
                {tech.title}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeroTechStack;
