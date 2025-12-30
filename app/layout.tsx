import type { Metadata, Viewport } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";
import LogoBar from "@/components/Bar";
import Breadcrumb from "@/components/Breadcrumb";

const kanit = Kanit({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-kanit",
  display: "swap",
});

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
    <html lang="th" className={kanit.variable}>
      <body className={`bg-white text-[#1B1D20] antialiased ${kanit.className}`}>
        <NavBar />
        {/* <div className="container mx-auto "><Breadcrumb/></div> */}
        {/* MAIN LANDMARK — WCAG 2.1 Compliant */}
<<<<<<< HEAD
        <main id="main-content" role="main" tabIndex={-1} className="container mx-auto grid px-4 grid-cols-12">
=======
        <main id="main-content" role="main" tabIndex={-1} className="w-full pt-0">
>>>>>>> ee32eab149ccab6503beca1a3e6544424290e66f
          {children}
        </main>

        <LogoBar />

        <Footer />
      </body>
    </html>
  );
}
