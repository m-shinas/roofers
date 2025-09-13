import { Metadata } from "next";
import Banner from "../ui/Banner";

export const metadata: Metadata = {
  title: "Projects",
  description: "Roofers has successfully completed projects for notable clients and authorities including Dubai & Abu Dhabi Municipalities, DEWA, ADM, and Trakhees, earning the trust of renowned consultants, architects, and developers for our workmanship, material quality, cost control, and timely delivery.",
  keywords: ["Projects", "Dubai", "Abu Dhabi", "Municipalities", "DEWA", "ADM", "Trakhees", "Consultants", "Architects", "Developers", "Workmanship", "Material Quality", "Cost Control", "Timely Delivery"],
  alternates: {
    canonical: "/projects",
  }
};

export default function page() {
  return (
    <main>
      <Banner />
      <h1 className="h-[60vh] text-center ">Projects</h1>
    </main>
  );
}
