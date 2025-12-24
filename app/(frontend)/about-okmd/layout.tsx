import Sidebar from "@/components/layout/SideBar";
import AboutBanner from "@/components/page/aboutokmd/AboutBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "เกี่ยวกับ OKMD",
  description: "ข้อมูลเกี่ยวกับสำนักงานบริหารและพัฒนาองค์ความรู้ (OKMD)",
};

export default function AboutOkmdLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full bg-white min-h-screen">

      {/* ===== Header Section ===== */}
      <AboutBanner />

      {/* ===== Content Area (Sidebar + Page Content) ===== */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12">

        <aside className="md:col-span-3 mt-5 mb-5">
          <Sidebar />  
        </aside>

        <main className="container md:col-span-9 mb-5">
          {children}
        </main>

      </div>

    </section>
  );
}
