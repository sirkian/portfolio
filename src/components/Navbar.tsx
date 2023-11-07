import Menu from "./Menu";
import Link from "next/link";
import { links } from "@/utils/links";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-white h-20 p-4 w-full flex items-center justify-center">
      <div className="flex-1">
        <Link href="/">Homepage</Link>
      </div>
      <div className="hidden md:flex gap-4 flex-2">
        {links.map((link) => (
          <Link href={link.url} key={link.id}>
            {link.iconUrl ? (
              <Image
                src={link.iconUrl}
                alt={link.title}
                width={24}
                height={24}
              />
            ) : (
              link.title
            )}
          </Link>
        ))}
      </div>
      <div className="md:hidden right-0">
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;
