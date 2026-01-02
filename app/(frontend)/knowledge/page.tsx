"use client";

import { useState, useMemo, useEffect } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import LeftMenu from "@/components/LeftMenu";
import MagazineCard from "@/components/MagazineCard";
import Pagination from "@/components/Pagination";

// --- Data ---
type MenuItem = {
  label: string;
  value: string;
};

// MagazineCard expects { title, img, fileSize }
type MagazineData = {
  title: string;
  img: string;
  fileSize: string;
};

export default function KnowledgePage() {
  const MENU: MenuItem[] = [
    { label: "OKMD หนังสือนิตยสาร", value: "magazine" },
    { label: "OKMD แนะนำหนังสือดี", value: "recommend" },
    { label: "OKMD Infographic", value: "infographic" },
    { label: "OKMD บทความวิจัย", value: "research" },
    { label: "OKMD Recommended", value: "recommended" },
  ];

  const [selectedMenu, setSelectedMenu] = useState("magazine");
  const [currentPage, setCurrentPage] = useState(1);

  // DATA_SOURCE matches the 6 magazines shown in the image 
  const DATA_SOURCE: Record<string, MagazineData[]> = {
    magazine: [
      { title: "The Knowledge vol.39 (AI DEEPFAKE)", img: "/kn-1.png", fileSize: "54 MB" },
      { title: "The Knowledge vol.38 (INFORMATION OVERLOAD)", img: "/kn-2.png", fileSize: "54 MB" },
      { title: "The Knowledge vol.37 (GLOBAL BOILING)", img: "/kn-3.png", fileSize: "54 MB" },
      { title: "The Knowledge vol.36 (AI)", img: "/kn-4.png", fileSize: "54 MB" },
      { title: "The Knowledge vol.35 (FUTURE VEHICLES)", img: "/kn-5.png", fileSize: "54 MB" },
      { title: "The Knowledge vol.34 (COST OF READING)", img: "/kn-6.png", fileSize: "54 MB" },
      { title: "The Knowledge vol.33", img: "/kn-1.png", fileSize: "54 MB" },
      { title: "The Knowledge vol.32", img: "/kn-2.png", fileSize: "54 MB" },
      { title: "The Knowledge vol.31", img: "/kn-3.png", fileSize: "54 MB" },
      { title: "The Knowledge vol.30", img: "/kn-4.png", fileSize: "54 MB" },
      { title: "The Knowledge vol.29", img: "/kn-5.png", fileSize: "54 MB" },
      { title: "The Knowledge vol.28", img: "/kn-6.png", fileSize: "54 MB" },
    ],
    recommend: [
      { title: "แนะนำหนังสือดี 1", img: "/kn-1.png", fileSize: "1,024 KB" },
      { title: "แนะนำหนังสือดี 2", img: "/kn-2.png", fileSize: "1,024 KB" },
    ],
    infographic: [
      { title: "Infographic 1", img: "/kn-3.png", fileSize: "500 KB" },
      { title: "Infographic 2", img: "/kn-4.png", fileSize: "500 KB" },
    ],
    research: [
      { title: "บทความวิจัย 1", img: "/kn-5.png", fileSize: "2 MB" },
      { title: "บทความวิจัย 2", img: "/kn-6.png", fileSize: "2 MB" },
    ],
    recommended: [
      { title: "Recommended Item 1", img: "/kn-1.png", fileSize: "700 KB" },
      { title: "Recommended Item 2", img: "/kn-2.png", fileSize: "700 KB" },
    ],
  };

  const PAGE_TITLE = useMemo(() => {
    return MENU.find((m) => m.value === selectedMenu)?.label || "";
  }, [selectedMenu]);

  const DATA = DATA_SOURCE[selectedMenu] || [];
  const itemsPerPage = 6;
  const totalItems = DATA.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return DATA.slice(start, end);
  }, [DATA, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedMenu]);

  return (
    <main className="w-full bg-white pb-20 md:pb-32">
      {/* BREADCRUMB BAR */}
      <div className="w-full bg-white border-b border-zinc-200">
        <div className="container mx-auto px-4 h-16 md:h-20 flex items-center">
          <Breadcrumb
            items={[
              { label: "หน้าหลัก", href: "/" },
              { label: "ตู้ความรู้" },
            ]}
          />
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* TITLE */}
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-8 md:mb-12">
          ตู้ <span className="text-[#74CEE2]">ความรู้</span>
        </h1>

        {/* DESKTOP LAYOUT */}
        <div className="hidden md:grid md:grid-cols-12 gap-8 lg:gap-12">
          {/* LEFT SIDEBAR */}
          <aside className="md:col-span-3">
            <LeftMenu
              items={MENU}
              active={selectedMenu}
              onSelect={(value) => setSelectedMenu(value)}
            />
          </aside>

          {/* RIGHT CONTENT */}
          <section className="md:col-span-9 space-y-8">
            <h2 className="text-3xl font-bold leading-snug text-gray-800">
              {PAGE_TITLE}
            </h2>

            {/* CARD GRID */}
            <div className="grid grid-cols-12 gap-6 lg:gap-8">
              {paginatedData.map((item, index) => (
                <div key={index} className="col-span-6 lg:col-span-4 h-full">
                  <MagazineCard title={item.title} img={item.img} fileSize={item.fileSize} />
                </div>
              ))}
            </div>

            {/* PAGINATION */}
            <div className="flex justify-end pt-8">
              <Pagination total={totalPages} current={currentPage} onChange={setCurrentPage} />
            </div>
          </section>
        </div>

        {/* MOBILE LAYOUT */}
        <div className="md:hidden">
          {/* Mobile Category Selector */}
          <div className="mb-8">
            <select
              value={selectedMenu}
              onChange={(e) => setSelectedMenu(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base font-semibold bg-white focus:outline-none focus:ring-2 focus:ring-[#74CEE2]"
            >
              {MENU.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          <h2 className="text-2xl font-bold leading-snug text-gray-800 mb-6">
            {PAGE_TITLE}
          </h2>

          <div className="flex flex-col gap-6">
            {paginatedData.map((item, index) => (
              <MagazineCard key={index} title={item.title} img={item.img} fileSize={item.fileSize} />
            ))}
          </div>

          <div className="flex justify-center pt-8">
            <Pagination total={totalPages} current={currentPage} onChange={setCurrentPage} />
          </div>
        </div>
      </div>
    </main>
  );
}
