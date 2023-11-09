import Image from "next/image";
import Link from "next/link";
import React from "react";

const PortfolioItem = () => {
  return (
    <div className="relative flex justify-center items-center bg-secondary-foreground text-primary-foreground h-48 w-64 rounded-lg md:h-64 md:w-96">
      <Link href="/project/1">
        <Image
          src="/images/faux1.png"
          alt=""
          fill
          objectFit="cover"
          className="rounded-lg"
        />
      </Link>
    </div>
  );
};

export default PortfolioItem;
