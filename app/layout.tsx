import type { Metadata, Viewport } from "next";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import LogoBar from "@/components/Bar";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "OKMD Portal",
  description: "Knowledge Portal by OKMD",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body className="bg-white text-[#1B1D20] antialiased">
        <Header />
        {/* <div className="container mx-auto "><Breadcrumb/></div> */}
        {/* MAIN LANDMARK — WCAG 2.1 Compliant */}
        <main id="main-content" role="main" tabIndex={-1} className="container mx-auto grid px-4 grid-cols-12">
          {children}
        </main>

        <LogoBar />

        <Footer />
      </body>
    </html>
  );
}
