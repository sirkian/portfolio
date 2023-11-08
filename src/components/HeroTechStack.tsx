"use client";

import { TechType, technologies } from "@/utils/technologies";
import Image from "next/image";
import React, { useState } from "react";

const HeroTechStack = () => {
  const featuredTechnologies = technologies.filter((tech) => tech.featured);
  const [hoveredTech, setHoveredTech] = useState<TechType | null>(null);

  const handleMouseEnter = (tech: TechType) => {
    setHoveredTech(tech);
  };

  const handleMouseLeave = () => {
    setHoveredTech(null);
  };

  return (
    <div className="mb-4">
      <ul className="flex gap-5">
        {featuredTechnologies.map((tech) => (
          <li
            key={tech.id}
            className="relative w-[3rem] h-[3rem]"
            onMouseEnter={() => handleMouseEnter(tech)}
            onMouseLeave={handleMouseLeave}>
            <Image src={tech.iconUrl} alt={tech.title} fill />
            {hoveredTech === tech && (
              <div className="absolute bg-background-800 text-text-50 p-2 rounded-sm text-xs top-14 left-5 transform -translate-x-1/2 opacity-90">
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
