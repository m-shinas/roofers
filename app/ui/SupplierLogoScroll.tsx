"use client";
import Image from "next/image";
import { useRef, useState } from "react";

const SupplierLogoScroll = () => {
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  const [topPaused, setTopPaused] = useState(false);
  const [bottomPaused, setBottomPaused] = useState(false);

  // Build 20 logo paths: /logos/logo1.png ... /logos/logo20.png
  const logos = Array.from(
    { length: 20 },
    (_, i) => `/Suppliers/supplier-${i + 1}.png`
  );
  const top = logos.slice(0, 9); // first 10 logos
  const bottom = logos.slice(10); // remaining 10 logos

  const pause = (ref: React.RefObject<HTMLDivElement | null>) =>
    ref.current && (ref.current.style.animationPlayState = "paused");
  const play = (ref: React.RefObject<HTMLDivElement | null>) =>
    ref.current && (ref.current.style.animationPlayState = "running");

  const togglePause = (
    ref: React.RefObject<HTMLDivElement | null>,
    paused: boolean,
    setPaused: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (paused) {
      play(ref);
      setPaused(false);
    } else {
      pause(ref);
      setPaused(true);
    }
  };
  return (
    <div className="relative mt-12 space-y-8">
      {/* Row 1 */}
      <div className="overflow-hidden relative">
        {/* gradient fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <div
          ref={topRef}
          onMouseEnter={() => pause(topRef)}
          onMouseLeave={() => !topPaused && play(topRef)}
          onClick={() => togglePause(topRef, topPaused, setTopPaused)}
          className="flex gap-12 animate-scroll-left select-none touch-manipulation"
        >
          {[...top, ...top].map((src, i) => (
            <div
              key={`top-${i}`}
              className="h-22 w-44 flex items-center justify-center shrink-0"
            >
              <Image
                width={176}
                height={88}
                src={src}
                alt={`Supplier ${i + 1}`}
                className="max-h-22 object-contain grayscale hover:grayscale-0 transition client-logo"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div className="overflow-hidden relative">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div
          ref={bottomRef}
          onMouseEnter={() => pause(bottomRef)}
          onMouseLeave={() => !bottomPaused && play(bottomRef)}
          onClick={() => togglePause(bottomRef, bottomPaused, setBottomPaused)}
          className="flex gap-12 animate-scroll-right select-none touch-manipulation"
        >
          {[...bottom, ...bottom].map((src, i) => (
            <div
              key={`bottom-${i}`}
              className="h-22 w-44 flex items-center justify-center shrink-0"
            >
              <Image
                width={176}
                height={88}
                src={src}
                alt={`Supplier ${9 + (i % bottom.length) + 1}`}
                className="max-h-22 object-contain grayscale hover:grayscale-0 transition client-logo"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupplierLogoScroll;
