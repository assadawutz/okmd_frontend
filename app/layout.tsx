import type { Metadata, Viewport } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import LogoBar from "@/components/Bar";

const kanit = Kanit({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-kanit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OKMD Portal",
  description: "Knowledge Portal by obad",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={kanit.variable} style={{ scrollPaddingTop: "var(--header-h)" }}>
      <body
        className={`min-h-dvh flex flex-col overflow-x-hidden bg-white text-[#1B1D20] antialiased ${kanit.className}`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-[#1B1D20] focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#74CEE2]"
        >
          Skip to content
        </a>
        <Header />
        {/* MAIN LANDMARK — WCAG 2.1 Compliant */}
        <main
          id="main-content"
          role="main"
          tabIndex={-1}
          className="w-full min-w-0 flex-1 pb-12 md:pb-16"
        >
          {children}
        </main>

        <LogoBar />

        <Footer />
      </body>
    </html>
  );
}
