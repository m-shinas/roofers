"use client";

import {
  faChevronLeft,
  faChevronRight,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import { MajorProjects } from "../lib/data";

const ImageGallery = () => {
  const [selectedImg, setSelectedImg] = useState<number>(0);
  const [imgPop, setImgPop] = useState(false);

  const swipeImg = (moveTyp: string) => {
    if (moveTyp === "prv") {
      setSelectedImg((prev) => (prev === 0 ? 13 : prev - 1));
    } else if (moveTyp === "nxt") {
      setSelectedImg((prev) => (prev === 13 ? 0 : prev + 1));
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-10">
        {MajorProjects.map((project, index) => (
          <div
            onClick={() => {
              setSelectedImg(index);
              setImgPop(true);
            }}
            key={index}
            className="cursor-pointer hover:scale-105 transition-all ease-linear"
          >
            <Image
              className="w-full h-65 object-cover rounded-xl"
              width={270}
              height={260}
              src={project.imgURL}
              alt={`Project ${index}`}
            />
          </div>
        ))}
      </div>

      {imgPop && (
        <div onKeyDown={(event) => { if (event.key === "Escape"){setImgPop(false)} }} className="fixed top-0 left-0 bottom-0 right-0 bg-black/75 flex items-center justify-center gap-8 z-50">
          <div  onClick={() => setImgPop(false)}>
            <FontAwesomeIcon
              icon={faClose}
              className="text-white absolute top-10 right-10 cursor-pointer"
              size="xl"
            />{" "}
          </div>
          <div onClick={ () => swipeImg("prv")}>
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="text-white cursor-pointer ml-2 hover:translate-x-2 transition-all ease-linear"
              size="3x"
            />{" "}
          </div>
          <div>
            <Image
              className="w-full max-w-[650px] h-64 "
              width={300}
              height={260}
              src={MajorProjects[selectedImg].imgURL}
              alt={MajorProjects[selectedImg].title}
            />
          </div>
          <div onClick={ () => swipeImg("nxt")}>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-white cursor-pointer mr-2 hover:-translate-x-2 transition-all ease-linear"
              size="3x"
            />{" "}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
