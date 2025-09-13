import { Metadata } from "next";
import Banner from "../ui/Banner";

export const metadata: Metadata = {
  title: "Services",
  description: "Roofers specialise in services of design, supply, installation, and supervision of timber and Steel and clay roofing products with accessories. Wealso provide complete structural and finishing solutions for commercial, industrial, and high-end residential projects.",
  keywords: ["Services", "Mezzanine floors", "Fencing", "Marine Plywood", "Timber", "Steel", "Clay Roofing", "Accessories", "Kick plates", "trench covers", "Plant erection", "Gates and grills", "Thatch", "Terracotta Products", "Residential", "Cotto Blocks", "canopies", "pergolas"],
  alternates: {
    canonical: "/services",
  }
};

export default function Page() {
  return (
    <main>
      <Banner />
      <h1 className="h-[60vh] text-center ">Services</h1>
    </main>
  );
}
