import { mulish } from "@/app/ui/fonts";
import Link from "next/link";
import Banner from "../ui/Banner";

export default function page() {
  return (
    <main>
      <Banner />
      <h1 className="h-[60vh] text-center ">Products</h1>
    </main>
  );
}
