"use client";

// import { useState } from "react";
import Hero from "./ui/Hero";
// import Background from "./ui/Background";
import Image from "next/image";
import { mulish } from "./ui/fonts";
import Link from "next/link";

export default function Home() {
  // const [heroCount, setHeroCount] = useState(0);

  return (
    <>
      <Hero />
      {/* <Background heroCount={heroCount}/> */}
      <section className="padding">
        <div className="flex justify-between items-center max-xl:flex-col-reverse gap-10">
          <div className=" max-w-[700px] max-h-[600px]">
            <Image
              src="/hero_sec.jpg"
              alt="Roof work"
              width={773}
              height={687}
              className="object-contain w-full rounded-2xl"
            />
          </div>
          <div className="flex flex-col">
            <h2
              className={`text-tall-poppy-700 text-4xl capitalize lg:max-w-lg font-bold`}
            >
              Building Strength. Shaping Skylines.
            </h2>
            <p className={`${mulish.className} mt-4 lg:max-w-lg `}>
              Roof tiles, high‑quality steel, aluminium & stainless‑steel
              fabrication, erection and civil contracting for commercial,
              industrial and high‑end residential projects.
            </p>
            <p className={`${mulish.className} mt-4 lg:max-w-lg `}>
              From iconic clay roofing to advanced steel and aluminium structures — delivering excellence, durability and design innovation for over 25 years.
            </p>
            <div className="mt-11 text-right">
              <Link
                className="text-white py-3.5 px-6 bg-gradient-to-r from-tall-poppy-600 to-tall-poppy-700 rounded-4xl hover:rounded-lg transition-[border-radius] duration-400 ease shadow-lg cursor-pointer"
                href="/about-us"
              >
                Read About Us 
              </Link>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}
