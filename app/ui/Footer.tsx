"use client";

import Image from "next/image";
import Link from "next/link";
import { mulish } from "./fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faSquareFacebook,
  faSquareLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const presentYear: number = new Date().getFullYear();
  return (
    <footer className="w-full bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-t-[60px] pt-[100px] pb-[30px]">
      <div className="w-[85%] m-auto flex flex-wrap items-start justify-between ">
        <div className="footer-col">
          <Link href="/">
            <Image
              src="/Roofers_Logo.png"
              width={120}
              height={100}
              alt="Logo"
            />
          </Link>
          <p className={`${mulish.className} text-base mt-4`}>
            Exotic Roofing Solution From Europe
          </p>
          <p className={`italic text-base text-tall-poppy-700`}>
            &quot; Celebrating 25 years of excellence &quot;
          </p>
        </div>
        <div className="footer-col">
          <h3 className="w-fit mb-8 relative text-2xl leading-normal font-medium ">
            Head Office
          </h3>
          <p className={`${mulish.className} text-regent-gray-600`}>
            P. O. Box: 89515
          </p>
          <p className={`${mulish.className} text-regent-gray-600`}>
            Dubai, United Arab Emirates
          </p>
          <p
            className={`${mulish.className} w-fit my-5 text-regent-gray-600 hover:text-tall-poppy-700`}
          >
            <Link href="mailto:info@roofersfzc.com">info@roofersfzc.com</Link>
          </p>
          <h4
            className={`${mulish.className} text-regent-gray-600 hover:text-tall-poppy-700`}
          >
            <Link href="tel:+97144580127">+971 4 458 0127</Link>
          </h4>
        </div>
        <div className="footer-col">
          <h3 className="text-2xl leading-normal font-medium mb-8">Links</h3>
          <ul>
            <li className="mb-3">
              <Link
                href="/"
                className={`${mulish.className}  text-regent-gray-600 hover:text-tall-poppy-700`}
              >
                Home
              </Link>
            </li>
            <li className="my-3">
              <Link
                href="/about-us"
                className={`${mulish.className} text-regent-gray-600 hover:text-tall-poppy-700`}
              >
                About Us
              </Link>
            </li>
            <li className="my-3">
              <Link
                href="/products"
                className={`${mulish.className} text-regent-gray-600 hover:text-tall-poppy-700`}
              >
                Products
              </Link>
            </li>
            <li className="my-3">
              <Link
                href="/services"
                className={`${mulish.className} text-regent-gray-600 hover:text-tall-poppy-700`}
              >
                Services
              </Link>
            </li>
            <li className="my-3">
              <Link
                href="/projects"
                className={`${mulish.className} text-regent-gray-600 hover:text-tall-poppy-700`}
              >
                Projects
              </Link>
            </li>
            <li className="my-3">
              <Link
                href="/contact"
                className={`${mulish.className} text-regent-gray-600 hover:text-tall-poppy-700`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[90%] mx-auto">
        <hr className=" text-tall-poppy-700 my-5" />
        <div className="sm:flex sm:flex-row items-center justify-between flex flex-col-reverse ">
          <p
            className={`${mulish.className} text-sm text-regent-gray-600 not-sm:text-center`}
          >
            ©{presentYear} Roofers. All Rights Reserved.{" "}
            <span className="sm:inline block">
              Designed by Nexaura Innovations
            </span>
          </p>
          <div className="flex gap-4 not-sm:mb-2">
            <a>
              <FontAwesomeIcon icon={faSquareFacebook} size="lg" />
            </a>
            <a>
              <FontAwesomeIcon icon={faSquareLinkedin} size="lg" />
            </a>
            <a>
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
