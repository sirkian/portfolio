"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import { Button } from "./ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

type ImageUrlProps = {
  images: { filename: string; caption: string }[];
};

const ProjectSlider: React.FC<ImageUrlProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain"
        />
      </AspectRatio>

      <div className="absolute inset-0 flex items-center justify-between">
        <Button
          onClick={handlePrevSlide}
          className="absolute left-1.5 xl:left-[-3rem] p-1 xl:bg-transparent xl:text-primary">
          <ChevronLeftIcon width={24} height={24} />
        </Button>
        <Button
          onClick={handleNextSlide}
          className="absolute right-1.5 xl:right-[-3rem] p-1 xl:bg-transparent xl:text-primary">
          <ChevronRightIcon width={24} height={24} />
        </Button>
      </div>
      <div className="w-full text-center p-1 text-xs md:text-sm text-muted">
        {images[currentSlide].caption} ({currentSlide + 1} / {images.length})
      </div>
    </div>
  );
};

export default ProjectSlider;
