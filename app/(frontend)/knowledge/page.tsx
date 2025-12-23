"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
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
    <main className="w-full bg-white pb-8 sm:pb-12 md:pb-16">
      {/* BREADCRUMB BAR */}
      <div className="w-full bg-white">
        <div className="container mx-auto h-16 sm:h-20 md:h-[84px] flex items-center">
          <div className="grid grid-cols-12 w-full">
            <div className="col-span-12">
              <Breadcrumb
                items={[
                  { label: "หน้าหลัก", href: "/" },
                  { label: "ตู้ความรู้" },
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      {/* MAIN PAGE CONTAINER */}
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-4 sm:gap-6">
          <div className="col-span-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4 sm:mb-5 md:mb-6">
              ตู้ <span className="text-[#74CEE2]">ความรู้</span>
            </h1>
          </div>

          {/* FLEX GRID LAYOUT */}
          <div className="col-span-12">
            <div className="grid grid-cols-12 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
              {/* LEFT SIDEBAR */}
              <aside className="col-span-12 md:col-span-3 pb-4 md:pb-0">
                <LeftMenu
                  items={MENU}
                  active={selectedMenu}
                  onSelect={(value) => setSelectedMenu(value)}
                />
              </aside>

              {/* RIGHT CONTENT */}
              <section className="col-span-12 md:col-span-9 space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug text-gray-800">
                  {PAGE_TITLE}
                </h2>

                {/* CARD GRID */}
                <div className="grid grid-cols-12 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                  {paginatedData.map((item, index) => (
                    <div key={index} className="col-span-12 sm:col-span-6 lg:col-span-4 h-full">
                      <MagazineCard 
                        title={item.title} 
                        img={item.img} 
                        fileSize={item.fileSize} 
                      />
                    </div>
                  ))}
                </div>

                {/* DIVIDER */}
                <div className="w-full border-t border-black/10 mt-6 sm:mt-8 md:mt-10"></div>

                {/* PAGINATION */}
                <div className="flex justify-center md:justify-end pt-4 sm:pt-5 md:pt-6 pb-4 sm:pb-6 md:pb-8">
                  <Pagination total={totalPages} current={currentPage} />
                </div>

              </section>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
