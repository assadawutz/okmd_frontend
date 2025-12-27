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
      <div className="container mx-auto py-8 md:py-12">
        <div className="grid grid-cols-12 gap-6 lg:gap-10">

          <aside className="col-span-12 md:col-span-3">
            <Sidebar />  
          </aside>

          <main className="col-span-12 md:col-span-9">
            {children}
          </main>

        </div>
      </div>

    </section>
  );
}
