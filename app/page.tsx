"use client";

import { useEffect, useState } from "react";
import Hero from "./ui/Hero";
// import Background from "./ui/Background";
import Image from "next/image";
import { mulish } from "./ui/fonts";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import CountUp from "react-countup";
import TestimonyCard from "./ui/TestimonyCard";
import { testimonials } from "./lib/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faDownload, faFilePdf } from "@fortawesome/free-solid-svg-icons";

const settings = {
  dots: false,
  infinite: true,
  speed: 5000,
  autoplay: true,
  autoplaySpeed: 1500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function Home() {
  // const [heroCount, setHeroCount] = useState(0);
  const [counterOn, setCounterOn] = useState(false);
  const scrollPosition = () => {
    if (window.scrollY >= 780) {
      setCounterOn(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollPosition);
    return () => {
      window.removeEventListener("scroll", scrollPosition);
      setCounterOn(false);
    };
  }, []);

  return (
    <>
      <Hero />
      <section className="relative overflow-hidden bg-slate-800 text-white py-4">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>

        <div
          className="flex text-nowrap "
          onTouchStart={(e) => e.currentTarget.classList.toggle("paused")}
        >
          {Array.from({ length: 1 }).map((_, round) => (
            <ul key={round} className={`${mulish.className} font-semibold flex gap-20 px-8 animate-slide`}>
              <li className="">
                <p>We offer Roofing | Aluminium | Steel Solutions</p>
              </li>
              <li className=" italic text-tall-poppy-700">
                <p>“Celebrating 25 years of excellence”</p>
              </li>
              <li className="">
                <p>Providing Industrial | Commercial | Residential Services</p>
              </li>
            </ul>
          ))}
        </div>
      </section>
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
              className={`text-tall-poppy-700 text-3xl md:text-5xl capitalize lg:max-w-lg font-bold`}
            >
              Building Strength. Shaping Skylines.
            </h2>
            <p
              className={`${mulish.className} mt-4 lg:max-w-lg text-lg leading-7`}
            >
              Roof tiles, high‑quality steel, aluminium & stainless‑steel
              fabrication, erection and civil contracting for commercial,
              industrial and high‑end residential projects.
            </p>
            <p
              className={`${mulish.className} mt-4 lg:max-w-lg text-lg leading-7`}
            >
              From iconic clay roofing to advanced steel and aluminium
              structures — delivering excellence, durability and design
              innovation for over 25 years.
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

        <div className="flex flex-wrap justify-around gap-5 items-center w-full px-6 py-8 md:py-16 mt-10 text-center bg-regent-gray-300 border-regent-gray-400 rounded-2xl shadow-md">
          <div className="flex max-md:flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="32"
              fill="none"
            >
              <path
                fill="#b32024"
                d="M3.486 0H17.23c.476 0 .862.408.862.912v4.875L30.7 2.551c.552-.196 1.135.238 1.135.864v23.798h1.762c.476 0 .862.408.862.911v2.964c0 .503-.386.912-.862.912H.862C.386 32 0 31.591 0 31.088v-2.964c0-.503.386-.911.862-.911h1.762V.912c0-.504.386-.912.862-.912zM7.21 3.29h6.299c.475 0 .861.409.861.912v2.869c0 .503-.386.911-.861.911h-6.3c-.475 0-.861-.408-.861-.911V4.202c0-.503.386-.912.862-.912zm5.437 1.824H8.07v1.045h4.575V5.114zM7.209 8.52h6.299c.475 0 .861.408.861.912V12.3c0 .504-.386.912-.861.912h-6.3c-.475 0-.861-.408-.861-.912V9.433c0-.504.386-.912.862-.912zm5.437 1.823H8.07v1.045h4.575v-1.044zm9.144 2.785c-1.134 0-1.134-1.824 0-1.824h4.624c1.134 0 1.134 1.824 0 1.824H21.79zm0 2.953c-1.134 0-1.134-1.824 0-1.824h4.624c1.134 0 1.134 1.824 0 1.824H21.79zm0 2.953c-1.134 0-1.134-1.824 0-1.824h4.624c1.134 0 1.134 1.824 0 1.824H21.79zm0-8.859c-1.134 0-1.134-1.823 0-1.823h4.624c1.134 0 1.134 1.823 0 1.823H21.79zM1.724 29.036v1.14h31.012v-1.14H1.724zm19.798-1.823v-4.384c0-.503.386-.912.862-.912h2.988c.475 0 .861.409.861.912v4.384h3.879V4.573l-12.02 3.084v19.556h3.43zm2.988 0V23.74h-1.264v3.472h1.264zm-14.943 0h1.582V20.13H9.567v7.081zm-1.724 0v-7.994c0-.503.386-.912.862-.912h3.306c.476 0 .862.409.862.913v7.993h3.495V1.823H4.348v25.39h3.495z"
              />
            </svg>
            <div className="md:pl-4 pt-4 md:ml-4 mt-4 max-md:border-t-1 md:border-l-1 ">
              <h1 className="text-6xl text-tall-poppy-700">
                {counterOn && (
                  <CountUp
                    end={174}
                    duration={3}
                    separator=","
                    start={0}
                    delay={0}
                  />
                )}
              </h1>
              <h3 className={`${mulish.className} text-slate-600`}>
                Completed Projects
              </h3>
            </div>
          </div>
          <div className="flex max-md:flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="35"
              fill="none"
            >
              <path
                stroke="#b32024"
                strokeWidth="2"
                d="M17.705 3.697 15.649 2l-2.424 1.82-9.099 7.188v16.636h23.047V11.886l-9.468-8.19z"
              />
              <path
                stroke="#b32024"
                strokeWidth="2"
                d="M18.952 20.771h4.18v4.18h-4.18v-4.18zm-10.56 0h4.18v4.18h-4.18v-4.18zm10.581-8.04h4.18v4.181h-4.18v-4.18zm-10.581 0h4.18v4.181h-4.18v-4.18z"
                clipRule="evenodd"
              />
              <path
                stroke="#b32024"
                strokeWidth="2"
                d="M1 13.005 15.65 2l13.803 11.4m-1.151 8.19a3.865 3.865 0 0 1 .53-4.186 3.831 3.831 0 0 1 3.382-1.322c.118.016.172.156.091.241l-1.825 2.013a.206.206 0 0 0-.035.234c.012.025.03.047.051.066l2.628 2.392a.23.23 0 0 0 .327-.016l1.825-2.007c.075-.086.214-.043.235.064a3.857 3.857 0 0 1-.91 3.42 3.854 3.854 0 0 1-4.158 1.028l-7.815 9.672a2.184 2.184 0 1 1-3.222-2.938l8.896-8.661z"
              />
            </svg>
            <div className="md:pl-4 pt-4 md:ml-4 mt-4 max-md:border-t-1 md:border-l-1 ">
              <h1 className="text-6xl text-tall-poppy-700">
                {counterOn && (
                  <CountUp
                    end={8}
                    duration={5}
                    separator=","
                    start={0}
                    delay={0}
                  />
                )}
              </h1>
              <h3 className={`${mulish.className} text-slate-600`}>
                Current Engagements
              </h3>
            </div>
          </div>
          <div className="flex max-md:flex-col items-center justify-center">
            <FontAwesomeIcon
              icon={faClock}
              className="text-tall-poppy-700"
              size="2xl"
            />
            <div className="md:pl-4 pt-4 md:ml-3 mt-3 max-md:border-t-1 md:border-l-1 ">
              <h1 className="text-6xl text-tall-poppy-700">
                {counterOn && (
                  <CountUp
                    end={1900000}
                    duration={5}
                    separator=","
                    start={0}
                    delay={0}
                  />
                )}
              </h1>
              <h3 className={`${mulish.className} text-slate-600`}>
                Total Workforce Hours
              </h3>
            </div>
          </div>
          <div className="flex max-md:flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="34"
              fill="none"
            >
              <path
                fill="#b32024"
                stroke="#b32024"
                strokeWidth=".5"
                d="M16.448 24.819H4.218a1.931 1.931 0 0 1-1.93-1.931v-.644c0-.244.205-1.287 1.93-1.287 1.725 0 1.931 1.107 1.931 1.332a.644.644 0 0 0 1.288-.045V4.865h23.815a1.93 1.93 0 0 1 1.931 1.931v1.931h1.288v-1.93a3.218 3.218 0 0 0-3.219-3.22H7.372A3.218 3.218 0 0 0 1 4.223v18.666a3.219 3.219 0 0 0 3.218 3.218h12.23V24.82zM2.288 4.222a1.931 1.931 0 1 1 3.861 0V20.14a3.714 3.714 0 0 0-1.93-.47 3.714 3.714 0 0 0-1.932.47V4.222zm15.447 7.724V8.084a.644.644 0 0 0-.643-.644H9.368a.644.644 0 0 0-.644.644v3.862a.644.644 0 0 0 .644.643h7.724a.644.644 0 0 0 .643-.643zm-1.287-.644h-6.437V8.727h6.437v2.575zm-1.287 4.506H8.724V14.52h6.437v1.288zm0 3.218H8.724v-1.287h6.437v1.287zm-6.437 1.931h6.437v1.287H8.724v-1.287zm21.885-4.59.933.644.708-1.068-7.724-5.15a.644.644 0 0 0-.708 0l-7.724 5.15.708 1.068.933-.643V26.75a1.93 1.93 0 0 0 1.931 1.931h9.012a1.931 1.931 0 0 0 1.93-1.931V16.368zm-7.724 11.027v-3.862h2.574v3.862h-2.574zm5.793 0h-1.931v-4.506a.644.644 0 0 0-.644-.644h-3.862a.644.644 0 0 0-.644.644v4.506h-1.93a.644.644 0 0 1-.644-.644V15.511l5.15-3.437 5.148 3.438V26.75a.644.644 0 0 1-.643.644zm5.98-14.991-.83-.837-.831.837-.914-.914L33.37 10.2a.64.64 0 0 1 .705-.14.64.64 0 0 1 .21.14l1.286 1.288-.914.914zm0 14.534.913.914-1.287 1.287a.644.644 0 0 1-.914 0l-1.287-1.287.914-.914.83.836.83-.836zm-1.475-13.704h1.288v12.873h-1.288V13.233zm-14.16 17.379H29.32v1.287H19.023v-1.287zm-.83-.187-.837.83.836.831-.914.914-1.287-1.287a.646.646 0 0 1 0-.914l1.287-1.288.914.914zm14.16.374a.644.644 0 0 1 0 .914L31.066 33l-.914-.914.836-.83-.836-.83.914-.915 1.287 1.288z"
              />
            </svg>
            <div className="md:pl-4 pt-4 md:ml-4 mt-4 max-md:border-t-1 md:border-l-1 ">
              <h1 className="text-6xl text-tall-poppy-700">
                {counterOn && (
                  <CountUp
                    end={500000}
                    duration={5}
                    separator=","
                    start={0}
                    delay={0}
                  />
                )}
              </h1>
              <h3 className={`${mulish.className} text-slate-600`}>
                Area Constructed (Sqm²)
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="padding bg-slate-100 ">
        <div className="text-left">
          <h2 className="text-3xl md:text-5xl font-bold">
            See What Our
            <span className="text-tall-poppy-700"> Clients </span>
            Say
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl ">
            Hear from consultants, contractors, and developers who trust Roofers
            Group for quality, reliability, and on-time delivery.
          </p>
        </div>
        <div>
          <div className="mt-12">
            <Slider {...settings}>
              {testimonials.map((testimony) => (
                <TestimonyCard key={testimony.name} {...testimony} />
              ))}
            </Slider>
          </div>
        </div>
      </section>
      <section className="padding">
        <div className="flex max-sm:flex-wrap justify-between items-start">
          <div className="flex flex-col items-center justify-center max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold">
              Explore Our
              <span className="text-tall-poppy-700"> Roofing </span>
              Products
            </h2>
            <p className="mt-3 text-slate-600">
              We manufacture and supply premium-quality products from our
              partner factories in Italy, Spain, China, Brazil, and the USA. We
              operate on a direct selling model, enabling cost-effective
              procurement without compromising on quality.
            </p>
          </div>
          <div className="max-sm:my-6 flex justify-center items-center flex-wrap gap-6">
            <div className="flex flex-col justify-between group rounded-xl p-4 hover:bg-regent-gray-400 transition duration-500 ease-in-out border border-regent-gray-400">
              <div>
                <Image
                  src="/LaEscandella-2025.png"
                  alt="La Escandella"
                  width={200}
                  height={216}
                  className="mb-2 max-w-[200px] max-h-[216px] object-cover rounded-xl"
                />
                <code
                  className={`text-xs mr-2 bg-slate-100 group-hover:bg-white  border border-regent-gray-400 rounded-full p-1`}
                >
                  Roof tile
                </code>
                <code
                  className={`text-xs bg-slate-100 group-hover:bg-white  border border-regent-gray-400 rounded-full p-1`}
                >
                  Made in Spain
                </code>
              </div>

              <div className="mt-4 flex gap-2 justify-end">
                <Link
                  href="https://drive.google.com/file/d/1qzQkCSztrk-2xv-aB2cvys14L32b7vZq/view"
                  target="_blank"
                  className={`${mulish.className} border p-2 border-regent-gray-950 rounded-lg group-hover:bg-white`}
                >
                  View{" "}
                  <span>
                    <FontAwesomeIcon icon={faFilePdf} />
                  </span>
                </Link>
                <Link
                  href="https://drive.usercontent.google.com/u/0/uc?id=1qzQkCSztrk-2xv-aB2cvys14L32b7vZq&export=download"
                  target="_blank"
                  className={`${mulish.className} border p-2 border-regent-gray-950 rounded-lg group-hover:bg-white`}
                >
                  <span>
                    <FontAwesomeIcon icon={faDownload} />
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-between group rounded-xl p-4 hover:bg-regent-gray-400 transition duration-500 ease-in-out border border-regent-gray-400">
              <div>
                <Image
                  src="/ICP_Cat_tile.png"
                  alt="ICP Cat Tile"
                  width={200}
                  height={216}
                  className="mb-2 max-w-[200px] max-h-[180px] object-cover rounded-xl"
                />
                <code
                  className={`text-xs mr-2 bg-slate-100 group-hover:bg-white border border-regent-gray-400 rounded-full p-1`}
                >
                  Roof tile
                </code>
                <code
                  className={`text-xs bg-slate-100 group-hover:bg-white border border-regent-gray-400 rounded-full p-1`}
                >
                  Made in Italy
                </code>
              </div>

              <div className="mt-4 flex gap-2 justify-end">
                <Link
                  href="https://drive.google.com/file/d/1Z3ob5bKjZLY-U6pr9zJUKpIh3Xhdfsdt/view"
                  target="_blank"
                  className={`${mulish.className} border p-2 border-regent-gray-950 rounded-lg group-hover:bg-white`}
                >
                  View{" "}
                  <span>
                    <FontAwesomeIcon icon={faFilePdf} />
                  </span>
                </Link>
                <Link
                  href="https://drive.usercontent.google.com/u/0/uc?id=1Z3ob5bKjZLY-U6pr9zJUKpIh3Xhdfsdt&export=download"
                  target="_blank"
                  className={`${mulish.className} border p-2 border-regent-gray-950 rounded-lg group-hover:bg-white`}
                >
                  <span>
                    <FontAwesomeIcon icon={faDownload} />
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-between group rounded-xl p-4 hover:bg-regent-gray-400 transition duration-500 ease-in-out border border-regent-gray-400">
              <div>
                <Image
                  src="/Thatch_Roof.png"
                  alt="Thatch Roofing"
                  width={200}
                  height={216}
                  className="mb-2 max-w-[200px] max-h-[180px] object-fill rounded-xl"
                />
                <code
                  className={`text-xs mr-2 bg-slate-100 group-hover:bg-white border border-regent-gray-400 rounded-full p-1`}
                >
                  Thatch
                </code>
              </div>

              <div className="mt-4 flex gap-2 justify-end">
                <Link
                  href=""
                  target="_blank"
                  className={`${mulish.className} border p-2 border-regent-gray-950 rounded-lg group-hover:bg-white`}
                >
                  View{" "}
                  <span>
                    <FontAwesomeIcon icon={faFilePdf} />
                  </span>
                </Link>
                <Link
                  href=""
                  target="_blank"
                  className={`${mulish.className} border p-2 border-regent-gray-950 rounded-lg group-hover:bg-white`}
                >
                  <span>
                    <FontAwesomeIcon icon={faDownload} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
