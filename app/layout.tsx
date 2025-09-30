import type { Metadata } from "next";
import { montserrat } from "./ui/fonts";
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Footer from "./ui/Footer";
import ScrollToTop from "./ui/scrollToTop";
import Navbar from "./ui/Navbar";
import WhatsappBtn from "./ui/WhatsappBtn";

config.autoAddCss = false

export const metadata: Metadata = {
  title: {
    template: '%s - Roofers',
    default: 'Roofers - Roofing | Steel | Aluminium Solutions',
  },
  metadataBase: new URL('https://www.roofersfzc.com'),
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  description: "We are Roofers, a leading multi-disciplinary enterprise in the UAE construction market with over 24 years of proven excellence. We specialise in Roof Tiles and high-quality Steel, Aluminium, and Stainless-Steel Fabrication, Erection, and Civil Contracting.",
  keywords: ["Roofers", "construction", "roof tiles", "steel", "aluminium", "roofing", "stainless steel", "civil contracting", "erection"],
  alternates: {
    canonical: '/',
    languages: {
      'en': 'https://www.roofersfzc.com',
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased relative`}
      >
        <Navbar />
        {children}
        <WhatsappBtn />
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
