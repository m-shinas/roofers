"use client";

import Link from "next/link";
import React from "react";
import { mulish } from "./fonts";
import { usePathname } from "next/navigation";

const Banner = () => {
  const pathname = usePathname();
  const pages = {
  "/projects": "Projects",
  "/products": "Products",
  "/services": "Services",
  "/about-us": "About Us",
  "/contact": "Contact Us",
};

const page = pages[pathname as keyof typeof pages] || "";

  return (
    <section className="h-[60vh] w-full bg-[url('/banner-pic.jpg')] bg-no-repeat bg-cover bg-top flex flex-col justify-center items-center text-center text-white">
      <h1 className="text-6xl  py-2 tracking-[2px] mb-4">{page}</h1>
      <div className={`${mulish.className} text-sm`}>
        <Link href="/" className="hover:text-regent-gray-950">
          Home
        </Link>
        <span className="mx-2">{"/"}</span>
        <span>{page}</span>
      </div>
    </section>
  );
};

export default Banner;
