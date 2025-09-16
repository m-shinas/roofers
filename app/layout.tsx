import type { Metadata } from "next";
import { montserrat } from "./ui/fonts";
import "./globals.css";
import Nav from "./ui/Navbar";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Footer from "./ui/Footer";
import ScrollToTop from "./ui/scrollToTop";

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
  description: "We are Roofers.",
  keywords: [],
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
        <Nav />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
