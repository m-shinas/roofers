"use client";

import { useState } from "react";
import Hero from "./ui/Hero";
import Background from "./ui/Background";

export default function Home() {
  const [heroCount, setHeroCount] = useState(0);

  return (
    <>
      <Hero />
      {/* <Background heroCount={heroCount}/> */}
      <h1 className="h-[60vh] text-center ">Home</h1>
    </>
  );
}
