"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import { Button } from "./ui/button";

type ImageUrlProps = {
  images: { filename: string; caption: string }[];
};

const ProjectSlider: React.FC<ImageUrlProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 10000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="w-[90vw] xl:w-[70rem] relative">
      <AspectRatio ratio={16 / 8}>
        <Image
          src={`/images/${images[currentSlide].filename}`}
          alt=""
          fill
          className="object-contain"
        />
      </AspectRatio>

      <div className="absolute inset-0 flex items-center justify-between">
        <Button
          variant="outline"
          onClick={handlePrevSlide}
          className="text-xs py-1 px-2">
          {"<"}
        </Button>
        <div className="flex flex-col h-full justify-between items-center w-full">
          <div className="text-white bg-black bg-opacity-50  w-full text-center p-1 rounded-md">
            {currentSlide + 1} / {images.length}
          </div>
        </div>
        <Button
          variant="outline"
          onClick={handleNextSlide}
          className="text-xs py-1 px-2">
          {">"}
        </Button>
      </div>
      <div className="w-full text-center p-1 text-xs md:text-sm text-muted">
        {images[currentSlide].caption}
      </div>
    </div>
  );
};

export default ProjectSlider;
