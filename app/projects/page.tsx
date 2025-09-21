import { Metadata } from "next";
import Banner from "../ui/Banner";
import ClientLogoScroll from "../ui/ClientLogoScroll";
import SupplierLogoScroll from "../ui/SupplierLogoScroll";
import ImageGallery from "../ui/ImageGallery";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Roofers has successfully completed projects for notable clients and authorities including Dubai & Abu Dhabi Municipalities, DEWA, ADM, and Trakhees, earning the trust of renowned consultants, architects, and developers for our workmanship, material quality, cost control, and timely delivery.",
  keywords: [
    "Projects",
    "Dubai",
    "Abu Dhabi",
    "Municipalities",
    "DEWA",
    "ADM",
    "Trakhees",
    "Consultants",
    "Architects",
    "Developers",
    "Workmanship",
    "Material Quality",
    "Cost Control",
    "Timely Delivery",
  ],
  alternates: {
    canonical: "/projects",
  },
};

export default function page() {
  return (
    <main>
      <Banner />
      {/* Our Clients — Infinite Scroll */}
      <section className="padding bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">Our Clients</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Trusted by leading authorities, consultants and developers across
            the UAE & Europe.
          </p>
        </div>

        <ClientLogoScroll />
      </section>

      {/* Project Gallery */}
      <section>
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_2px,transparent_2px)] bg-[size:24px_34px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-tall-poppy-700 opacity-50 blur-[100px]"></div>
        </div>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-3">
            Recent Projects
          </h2>
          <ImageGallery />
        </div>
      </section>

      <section className="padding bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold ">Our Suppliers</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            We proudly partner with world-class manufacturers and suppliers to
            deliver the highest quality materials.
          </p>
        </div>

        <SupplierLogoScroll />
      </section>
    </main>
  );
}
