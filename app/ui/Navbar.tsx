"use client";

import Image from "next/image";
import Link from "next/link";
import { mulish } from "./fonts";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const scrollYvalue = pathname === "/" ? 650 : 360;

  const changeBackground = () => {
    if (window.scrollY >= scrollYvalue) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="w-full fixed top-0 z-50">
      <div
        className={`w-[95%] flex items-center justify-between px-6 md:px-12 py-4 md:py-6 mx-auto rounded-b-2xl shadow-lg transition duration-500 ease-in-out 
          ${navbar ? "bg-gradient-to-r from-gray-700 to-gray-900 text-white" : "bg-white"}`}
      >
        <Link href="/" className="flex items-center">
          <Image
            src="/Roofers_Logo.PNG"
            alt="logo"
            width={150}
            height={150}
            priority
          />
        </Link>

        <nav className={`${mulish.className} hidden md:block`}>
          <ul className="flex gap-8 m-0 p-0 list-none">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-gray-400 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} color={navbar ? "white" : "black"} />}
        </button>
      </div>

      <div
        className={`md:hidden fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out 
          ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <Image src="/Roofers_Logo.PNG" alt="logo" width={120} height={120} />
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="text-gray-800"
          >
            <X size={28} />
          </button>
        </div>
        <nav className={`${mulish.className}`}>
          <ul className="flex flex-col gap-6 p-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block text-lg hover:text-gray-600 transition-colors"
                  onClick={() => setMenuOpen(false)} // close on click
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}

export default Navbar;
