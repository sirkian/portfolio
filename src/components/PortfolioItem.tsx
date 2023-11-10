import Image from "next/image";
import Link from "next/link";
import React from "react";

const PortfolioItem = () => {
  return (
    <div className="relative group flex justify-center items-center bg-muted text-primary-foreground h-64 w-80 rounded-lg md:h-80 md:w-[30rem]">
      <Image
        src="/images/faux1.png"
        alt=""
        fill
        objectFit="cover"
        className="rounded-md transition-transform transform group-hover:scale-50"
      />

      <div className="absolute group inset-0 flex flex-col justify-between ">
        <div className="p-2 md:p-4 hidden group-hover:block">
          <h3 className="text-2xl text-center font-extrabold">Project Title</h3>
          <div className="flex gap-3 text-sm justify-center">
            <span>HTML</span>
            <span>CSS</span>
          </div>
        </div>
        <div className="bg-accent hidden group-hover:block rounded-md min-h-min py-4 px-5 lg:py-5">
          <p className="text-sm md:text-md mb-4 text-center">
            Title desc, maybe a few lines worth of explanation. Maybe like this?{" "}
            <span className="font-semibold border-b-2 border-b-secondary">
              <Link href="/project/1">See more..</Link>
            </span>
          </p>
          <div className="flex justify-between">
            <span className="bg-background text-sm text-secondary-foreground px-3 py-1.5 rounded-sm">
              <Link href="">GitHub</Link>
            </span>
            <span className="bg-background text-sm text-secondary-foreground px-3 py-1.5 rounded-sm">
              <Link href="">Live Project</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
