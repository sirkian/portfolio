import Menu from "./Menu";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

const Navbar = () => {
  return (
    <nav>
      <div className="hidden fixed md:flex items-center justify-around z-50 backdrop-blur-3xl text-text border-b-2 border-text-200 h-20 p-4 w-full">
        <div className="font-bold">
          <Link href="/">Homepage</Link>
        </div>
        <div className="hidden md:flex gap-4 items-center">
          <Link href="/projects" className="hover:text-accent">
            Projects
          </Link>
          <Link href="https://github.com/sirkian" className="hover:text-accent">
            <GitHubLogoIcon height={24} width={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/anssisirkia/"
            className="hover:text-accent">
            <LinkedInLogoIcon height={24} width={24} />
          </Link>
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
