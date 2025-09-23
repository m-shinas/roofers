import { Metadata } from "next";
import Banner from "../ui/Banner";
import { mulish } from "../ui/fonts";
import { services } from "../lib/data";
import Image from "next/image";

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

      <section className="padding text-center">
        <span className="text-3xl sm:text-5xl font-medium">Our Works</span>
        <div
          className={`my-5 text-left flex flex-wrap justify-around gap-5 mx-0 py-4 px-4 max-md:px-4 border border-regent-gray-400`}
        >
          <div className="flex items-center justify-center gap-2">
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
            <h2 className={`${mulish.className} mt-3 text-xl leading-normal`}>
              Commercial
            </h2>
          </div>
          <div className="flex items-center justify-center gap-2">
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
            <h2 className={`${mulish.className} mt-3 text-xl leading-normal`}>
              Residential
            </h2>
          </div>
          <div className="flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="none"
            >
              <path
                fill="#b32024"
                d="M29.44 8.32H.64A.64.64 0 0 1 0 7.68V6.4a.64.64 0 0 1 .18-.448l1.868-1.92a.64.64 0 0 1 .46-.192h23.2a.64.64 0 0 1 .295.07l3.731 1.92a.64.64 0 0 1 .346.57v1.28a.64.64 0 0 1-.64.64zM1.28 7.04H28.8v-.25l-3.245-1.67H2.778L1.28 6.662v.378z"
              />
              <path
                fill="#b32024"
                d="M8.91 5.12H5.12a.64.64 0 0 1-.64-.64V.64A.64.64 0 0 1 5.12 0H6.4a.64.64 0 0 1 .538.288l2.509 3.84a.64.64 0 0 1 0 .64.64.64 0 0 1-.538.352zM5.76 3.84h1.965l-1.67-2.56H5.76v2.56zm3.2 24.96H5.12a.64.64 0 0 1-.64-.64V7.68a.64.64 0 0 1 .64-.64h3.84a.64.64 0 0 1 .64.64v20.48a.64.64 0 0 1-.64.64zm-3.2-1.28h2.56V8.32H5.76v19.2zM31.36 32H16a.64.64 0 0 1-.64-.64v-8.32a.64.64 0 0 1 .64-.64h7.04v-3.2a.64.64 0 0 1 .64-.64h7.68a.64.64 0 0 1 .64.64v12.16a.64.64 0 0 1-.64.64zm-14.72-1.28h14.08V19.84h-6.4v3.2a.64.64 0 0 1-.64.64h-7.04v7.04z"
              />
              <path
                fill="#b32024"
                d="M17.28 23.68a.64.64 0 0 1-.64-.64v-5.76a.64.64 0 0 1 1.28 0v5.76a.64.64 0 0 1-.64.64zm6.4 0a.64.64 0 0 1-.64-.64v-8.96a.64.64 0 0 1 1.28 0v8.96a.64.64 0 0 1-.64.64zm6.4-3.84a.64.64 0 0 1-.64-.64v-6.4a.64.64 0 0 1 1.28 0v6.4a.64.64 0 0 1-.64.64z"
              />
              <path
                fill="#b32024"
                d="M23.68 21.12h-6.4a.64.64 0 1 1 0-1.28h6.4a.64.64 0 1 1 0 1.28zm6.4-3.84h-6.4a.64.64 0 1 1 0-1.28h6.4a.64.64 0 1 1 0 1.28z"
              />
              <path
                fill="#b32024"
                d="M20.48 23.68a.64.64 0 0 1-.64-.64v-4.48a.64.64 0 0 1 1.28 0v4.48a.64.64 0 0 1-.64.64zm6.4-3.84a.64.64 0 0 1-.64-.64v-4.48a.64.64 0 0 1 1.28 0v4.48a.64.64 0 0 1-.64.64zM21.12 16h-8.96a.64.64 0 0 1-.64-.64V12.8a.64.64 0 0 1 .64-.64h8.96a.64.64 0 0 1 .64.64v2.56a.64.64 0 0 1-.64.64zm-8.32-1.28h7.68v-1.28H12.8v1.28z"
              />
              <path
                fill="#b32024"
                d="M16.64 13.44a.64.64 0 0 1-.64-.64V7.68a.64.64 0 1 1 1.28 0v5.12a.64.64 0 0 1-.64.64zM10.88 32H3.2a.64.64 0 0 1-.64-.64v-3.2a.64.64 0 0 1 .64-.64h7.68a.64.64 0 0 1 .64.64v3.2a.64.64 0 0 1-.64.64zm-7.04-1.28h6.4V28.8h-6.4v1.92z"
              />
              <path
                fill="#b32024"
                d="M5.12 28.16a.64.64 0 0 1-.454-1.094l3.84-3.84a.643.643 0 0 1 .909.908l-3.84 3.84a.641.641 0 0 1-.455.186z"
              />
              <path
                fill="#b32024"
                d="M8.96 24.32a.64.64 0 0 1-.454-.186l-3.84-3.84a.643.643 0 0 1 .909-.908l3.84 3.84a.64.64 0 0 1-.455 1.094z"
              />
              <path
                fill="#b32024"
                d="M5.12 20.48a.64.64 0 0 1-.454-1.094l3.84-3.84a.643.643 0 0 1 .909.908l-3.84 3.84a.641.641 0 0 1-.455.186zm0-7.68a.64.64 0 0 1-.454-1.094l3.84-3.84a.643.643 0 1 1 .909.908l-3.84 3.84a.641.641 0 0 1-.455.186z"
              />
            </svg>
            <h2 className={`${mulish.className} mt-3 text-xl leading-normal`}>
              Industrial
            </h2>
          </div>
        </div>
        <p className="my-4 text-lg text-center">
          Explore our completed works across roofing, steel and aluminium
          fabrication.
        </p>
      </section>

      <section className="relative py-8 max-w-7xl mx-auto px-4">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_2px,transparent_2px)] bg-[size:24px_34px]"></div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group hover:bg-tall-poppy-700 border shadow-sm overflow-hidden bg-white hover:shadow-lg transition ease-in duration-300"
            >
              <Image
                width={300}
                height={256}
                src={service.imgURL}
                alt={service.title}
                className="h-64 w-full object-fill"
              />
              <div className="p-5">
                <h3 className="font-semibold text-lg group-hover:text-white transition ease-in duration-300">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
