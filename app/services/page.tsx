import { Metadata } from "next";
import Banner from "../ui/Banner";

export const metadata: Metadata = {
  title: "Services",
  description: "Roofers specialise in services of design, supply, installation, and supervision of timber and Steel and clay roofing products with accessories. We also provide complete structural and finishing solutions for commercial, industrial, and high-end residential projects.",
  keywords: ["Services", "Mezzanine floors", "Fencing", "Marine Plywood", "Timber", "Steel", "Clay Roofing", "Accessories", "Kick plates", "trench covers", "Plant erection", "Gates and grills", "Thatch", "Terracotta Products", "Residential", "Cotto Blocks", "canopies", "pergolas"],
  alternates: {
    canonical: "/services",
  }
};

export default function Page() {
  return (
    <main>
      <Banner />
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 text-center">Recent Projects</h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: "https://images.unsplash.com/photo-1581094627258-38624804343f?q=80&w=1200&auto=format&fit=crop", name: "Steel Structure Frames" },
              { img: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1200&auto=format&fit=crop", name: "Pergola & Cladding" },
              { img: "https://images.unsplash.com/photo-1581093588401-73c91b0f5b0b?q=80&w=1200&auto=format&fit=crop", name: "Staircase & Platform" },
              { img: "https://images.unsplash.com/photo-1541976076758-347942db1970?q=80&w=1200&auto=format&fit=crop", name: "Substation Metal Works" },
              { img: "https://images.unsplash.com/photo-1496367518523-756fe43d88fc?q=80&w=1200&auto=format&fit=crop", name: "Steel Roof Decking" },
              { img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop", name: "Parking Shades" },
            ].map((p, i) => (
              <figure key={i} className="rounded-2xl overflow-hidden border bg-white shadow-sm hover:shadow-lg transition">
                <img src={p.img} className="h-56 w-full object-cover" alt={p.name}/>
                <figcaption className="p-4 text-sm font-medium">{p.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
