"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

type ImageUrlProps = {
  images: { filename: string; caption: string }[];
};

const ProjectSlider: React.FC<ImageUrlProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[50rem] h-[50rem] relative">
      <Image
        src={`/images/${images[currentSlide].filename}`}
        alt=""
        fill
        className="object-cover"
      />
    </div>
  );
};

export default ProjectSlider;
