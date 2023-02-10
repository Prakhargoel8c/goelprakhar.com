import Image from "next/image";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="mx-16 flex h-14 justify-between gap-20 xl:mx-24">
      <Image src="/logo.svg" alt="logo" width={25} height={25} />
      <div className="flex items-center gap-24">
        <a href="#about" className="text-white">
          About
        </a>
        <a href="#projects" className="text-white">
          Projects
        </a>
        <a href="#contact" className="text-white">
          Contact
        </a>
      </div>
    </nav>
  );
};
