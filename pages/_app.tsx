import type { AppProps } from "next/app";
import Head from "next/head";

import "@/styles/globals.css";
import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";
import RelatedLinks from "@/components/layout/RelatedLinks";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>OKMD Portal | Knowledge for All</title>
        <meta
          name="description"
          content="สำนักงานบริหารและพัฒนาองค์ความรู้ (OKMD) ร่วมสร้างสังคมแห่งการเรียนรู้สำหรับทุกคน"
        />
      </Head>
      <div className="flex min-h-screen flex-col">
        <NavBar />
        <main className="flex-1">
          <Component {...pageProps} />
        </main>
        <RelatedLinks />
        <Footer />
      </div>
    </>
  );
}
