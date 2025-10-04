import { Metadata } from "next";
import Banner from "../ui/Banner";
import { mulish } from "../ui/fonts";
import { Services } from "../lib/data";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faDownload, faFilePdf } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Roofers specialise in services of design, supply, installation, and supervision of timber and Steel and clay roofing products with accessories. We also provide complete structural and finishing solutions for commercial, industrial, and high-end residential projects.",
  keywords: [
    "Services",
    "Mezzanine floors",
    "Fencing",
    "Marine Plywood",
    "Timber",
    "Steel",
    "Clay Roofing",
    "Accessories",
    "Kick plates",
    "trench covers",
    "Plant erection",
    "Gates and grills",
    "Thatch",
    "Terracotta Products",
    "Residential",
    "Cotto Blocks",
    "canopies",
    "pergolas",
  ],
  alternates: {
    canonical: "/services",
  },
};

export default function Page() {
  return (
    <main>
      <Banner />

      <section className="relative py-8 max-w-7xl mx-auto px-4">
        <h2 className="my-8 text-center text-3xl sm:text-5xl font-bold">
          Our Services
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Services.map((service) => (
            // <div
            //   key={service.title}
            //   className="group relative hover:bg-tall-poppy-700  shadow-sm overflow-hidden bg-white hover:shadow-lg transition ease-in duration-300"
            // >
            //   <Image
            //     width={300}
            //     height={256}
            //     src={service.imgURL}
            //     alt={service.title}
            //     className="h-64 w-full object-cover"
            //   />
            //   <div className="p-5">
            //     <h3 className="font-semibold text-lg group-hover:text-white transition ease-in duration-300">
            //       {service.title}
            //     </h3>
            //   </div>
            // </div>
            <div
              key={service.title}
              className="relative group overflow-hidden rounded-2xl shadow-lg bg-slate-100 hover:shadow-xl transition"
            >
              {/* Service Image */}
              <Image
                width={300}
                height={256}
                src={service.imgURL}
                alt={service.title}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 group-active:scale-105"
              />

              {/* Inverted Corner Label */}
              <div
                className={`${mulish.className} absolute bottom-0 right-0 bg-white group-hover:bg-tall-poppy-600 group-active:bg-tall-poppy-600  text-black group-hover:text-white group-active:text-white transition duration-500 ease-in-out text-base font-semibold px-4 py-2 rounded-tl-[2rem]`}
              >
                {service.title}
              </div>

            </div>
          ))}
        </div>
      </section>

      <section id="products" className="padding">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
          Products
        </h2>
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
      </section>
    </main>
  );
}
