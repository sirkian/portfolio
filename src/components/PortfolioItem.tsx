import Image from "next/image";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "@/components/ui/button";

const PortfolioItem = () => {
  const liveProject = true;

  return (
    <div className="relative group flex justify-center items-center bg-muted dark:bg-background-200 text-primary-foreground h-64 w-96 rounded-lg md:h-80 md:w-[30rem] xl:w-[32rem]">
      <Image
        src="/images/faux1.png"
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="rounded-md transition-transform transform group-hover:scale-50"
      />

      <div className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-lg dark:group-hover:border-2 border-slate-700">
        <div className="p-2 md:p-4 transition-transform transform translate-y-[-100px] group-hover:translate-y-0 dark:text-primary">
          <h3 className="text-2xl text-center font-extrabold">Project Title</h3>
          <div className="flex gap-3 text-sm justify-center">
            <span>HTML</span>
            <span>CSS</span>
          </div>
        </div>
        <div className="bg-accent rounded-md min-h-min py-3 px-5 transition-transform transform translate-y-[140px] group-hover:translate-y-0">
          <p className="text-sm md:text-md mb-4 text-center">
            Title desc, maybe a few lines worth of explanation. Maybe like this?
            <Link
              className={buttonVariants({ variant: "link" })}
              href="/project/1">
              See more..
            </Link>
          </p>
          <div className="flex justify-between">
            <Link className={buttonVariants({ variant: "secondary" })} href="">
              GitHub
            </Link>
            {liveProject && (
              <Link
                className={buttonVariants({ variant: "secondary" })}
                href="">
                Live Project
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
