import Menu from "./Menu";
import Link from "next/link";
import { links } from "@/utils/links";
import Image from "next/image";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <nav className="bg-background-950 text-text  border-b-2 border-text-200 h-20 p-4 w-full flex items-center justify-around">
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
                className="invert"
              />
            ) : (
              link.title
            )}
          </Link>
        ))}
        <ModeToggle />
      </div>
      <div className="md:hidden right-0">
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;
