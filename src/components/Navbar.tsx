import Menu from "./Menu";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

import LinkToHome from "./LinkToHome";
import LinkToProjects from "./LinkToProjects";

const Navbar = () => {
  return (
    <nav>
      <div className="hidden fixed md:flex items-center justify-around z-50 backdrop-blur-3xl h-20 p-4 w-full">
        <LinkToHome />

        <div className="flex gap-4 items-center">
          <LinkToProjects />
          <a
            href="/resume-anssisirkia.pdf"
            download="CV_Sirkia.pdf"
            className="font-semibold hover:text-accent">
            Resume (PDF)
          </a>
          <Link href="https://github.com/sirkian" className="hover:text-accent">
            <GitHubLogoIcon height={24} width={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/anssisirkia/"
            className="hover:text-accent">
            <LinkedInLogoIcon height={24} width={24} />
          </Link>
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
      <div className="fixed w-full z-50">
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;
