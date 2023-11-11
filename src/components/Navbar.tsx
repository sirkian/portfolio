import Menu from "./Menu";
import Link from "next/link";
import { links } from "@/utils/links";
import Image from "next/image";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <nav>
      <div className="hidden fixed md:flex items-center justify-around z-50 backdrop-blur-3xl text-text border-b-2 border-text-200 h-20 p-4 w-full">
        <div className="font-bold">
          <Link href="/">Homepage</Link>
        </div>
        <div className="hidden md:flex gap-4 items-center">
          {links.map((link) => (
            <Link href={link.url} key={link.id}>
              {link.iconUrl ? (
                <Image
                  src={link.iconUrl}
                  alt={link.title}
                  width={24}
                  height={24}
                  className="dark:invert"
                />
              ) : (
                link.title
              )}
            </Link>
          ))}
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
