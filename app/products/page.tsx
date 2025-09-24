import Link from "next/link";
import Banner from "../ui/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { mulish } from "../ui/fonts";
import Image from "next/image";

export default function page() {
  return (
    <>
      <Banner />
      <section className="padding">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">Roofing Products</h2>
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
    </>
  );
}
