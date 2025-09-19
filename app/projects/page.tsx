import { Metadata } from "next";
import Banner from "../ui/Banner";
import ClientLogoScroll from "../ui/ClientLogoScroll";
import SupplierLogoScroll from "../ui/SupplierLogoScroll";

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
          <h2 className="text-3xl md:text-5xl font-bold">Our Clients</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Trusted by leading authorities, consultants and developers across
            the UAE & Europe.
          </p>
        </div>

        <ClientLogoScroll />
      </section>

      

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold ">Our Suppliers</h2>
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
