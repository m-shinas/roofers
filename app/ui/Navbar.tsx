"use client";

import Image from "next/image";
import Link from "next/link";
import { mulish } from "./fonts";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const pathname = usePathname();
  
  let scrollYvalue = pathname === "/"  ? 650 : 360;
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
  }, []);

  return (
    <header className="w-full fixed z-50">
      <div className={`w-[95%] flex items-center justify-between px-12 py-6 my-0 mx-auto bg-white rounded-b-2xl shadow-lg transition duration-500 ease-in-out ${ navbar && "bg-gradient-to-r from-gray-700 to-gray-900 text-white"}`}>
        <Link href="/" className="">
          <Image src="/Roofers_Logo.PNG" alt="logo" width={150} height={150} />
        </Link>
        <nav className={`${mulish.className}`}>
          <ul className="flex gap-8 m-0 p-0 list-none ">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
