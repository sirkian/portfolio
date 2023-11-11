import Image from "next/image";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "@/components/ui/button";
import { ProjectType } from "@/utils/projects";

type PortfolioItemProps = {
  project: ProjectType;
};

const PortfolioItem: React.FC<PortfolioItemProps> = ({ project }) => {
  const {
    id,
    title,
    featureDescription,
    imageUrls,
    githubUrl,
    publishedUrl,
    tags,
  } = project;

  return (
    <div className="relative group flex justify-center items-center bg-muted dark:bg-background-200 text-primary-foreground h-60 w-[90vw] rounded-lg md:h-80 md:w-[30rem] xl:w-[32rem]">
      <Image
        src={imageUrls[0]}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="rounded-md transition-transform transform group-hover:scale-50"
      />

      <div className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-lg dark:group-hover:border-2 border-slate-700">
        <div className="p-1 md:p-4 transition-transform transform translate-y-[-100px] group-hover:translate-y-0 dark:text-primary">
          <h3 className="text-2xl text-center font-extrabold">{title}</h3>
          <div className="flex gap-3 text-sm justify-center">
            {tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="bg-accent rounded-md min-h-min py-1 md:py-3 px-3 md:px-5 transition-transform translate-y-[160px] transform md:translate-y-[140px] group-hover:translate-y-0">
          <p className="text-sm md:text-md md:mb-4 text-center">
            {featureDescription}
            <Link
              className={buttonVariants({ variant: "link" })}
              href={`/projects/${id}`}>
              See more..
            </Link>
          </p>
          <div className="flex justify-between">
            <Link
              className={buttonVariants({ variant: "secondary" })}
              href={githubUrl}>
              GitHub
            </Link>
            {publishedUrl && (
              <Link
                className={buttonVariants({ variant: "secondary" })}
                href={publishedUrl}>
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
