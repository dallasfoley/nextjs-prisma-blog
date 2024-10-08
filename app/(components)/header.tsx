"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/posts",
    label: "Posts",
  },
  {
    href: "/create-post",
    label: "Create-Post",
  },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center py-4 px-7 border-b">
      <Image
        src="https://bytegrad.com/course-assets/youtube/example-logo.png"
        alt="Logo"
        width={50}
        height={50}
      />
      <nav>
        <ul className="flex items-center gap-x-5 text-[14px]">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <li
                className={`${pathname === link.href && "font-bold text-xl"}`}
              >
                {link.label}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
