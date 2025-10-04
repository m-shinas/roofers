"use client";

import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
    const [scrollToTopBtn, setScrollToTopBtn] = useState(false)
    const scrollPosition = () => {
        if (window.scrollY >= 250) {
          setScrollToTopBtn(true);
        } else {
          setScrollToTopBtn(false);
        }
      };

  useEffect(() => {
    window.addEventListener("scroll", scrollPosition);
    return () => {
      window.removeEventListener("scroll", scrollPosition);
    };
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`${
        scrollToTopBtn ? "visible opacity-100" : "invisible opacity-0"
      } fixed cursor-pointer bottom-2 right-2 md:bottom-6 md:right-5 z-20 w-7 h-7 md:w-12 md:h-12 rounded-sm md:rounded-lg md:shadow-md text-[#fff] bg-gradient-to-r from-tall-poppy-600 to-tall-poppy-700 transition duration-1000 ease-in `}
    >
      <FontAwesomeIcon icon={faChevronUp} className='md:text-2xl text-sm hover:-translate-y-1 active:translate-y-1 transition duration-200 ease-in-out' />
    </button>
  );
};

export default ScrollToTop;