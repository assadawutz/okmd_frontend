import Sidebar from "@/components/layout/SideBarNews";
import NewsCorporatePage from "@/components/page/NewsCorporate/NewsCorporate";
import { Suspense } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "เกี่ยวกับ OKMD",
  description: "ข้อมูลเกี่ยวกับสำนักงานบริหารและพัฒนาองค์ความรู้ (OKMD)",
};

export default function NewsCorporate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full bg-white min-h-screen">
      {/* ===== Header Section ===== */}
      {/* <div className="w-full bg-[#F5FAFB] py-12 border-b">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-[#1B1D20]">เกี่ยวกับ OKMD</h1>
        </div>
      </div> */}

      {/* ===== Content Area (Sidebar + Page Content) ===== */}
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* LEFT : Sidebar */}
        <aside className="md:col-span-3 mt-30">
          <Suspense fallback={<div>Loading...</div>}>
            <Sidebar />
          </Suspense>
        </aside>

        {/* RIGHT : Content */}
        <main className="md:col-span-9 mt-30">
          <Suspense fallback={<div>Loading...</div>}>
            <NewsCorporatePage />
            {children}
          </Suspense>
        </main>
      </div>
    </section>
  );
}
