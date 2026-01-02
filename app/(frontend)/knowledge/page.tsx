"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { ContainerPage } from "@/components/shared/ContainerPage";
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
      {
        title: "The Knowledge vol.39 (AI DEEPFAKE)",
        img: "/kn-1.png",
        fileSize: "54 MB",
      },
      {
        title: "The Knowledge vol.38 (INFORMATION OVERLOAD)",
        img: "/kn-2.png",
        fileSize: "54 MB",
      },
      {
        title: "The Knowledge vol.37 (GLOBAL BOILING)",
        img: "/kn-3.png",
        fileSize: "54 MB",
      },
      {
        title: "The Knowledge vol.36 (AI)",
        img: "/kn-4.png",
        fileSize: "54 MB",
      },
      {
        title: "The Knowledge vol.35 (FUTURE VEHICLES)",
        img: "/kn-5.png",
        fileSize: "54 MB",
      },
      {
        title: "The Knowledge vol.34 (COST OF READING)",
        img: "/kn-6.png",
        fileSize: "54 MB",
      },
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
    <ContainerPage>
      <div className="w-full space-y-8">
        {/* HEADER */}
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#1B1D20]">
            ตู้ <span className="text-[#16A7CB]">ความรู้</span>
          </h1>
          <p className="text-gray-500">
            คลังความรู้ดิจิทัล สื่อสิ่งพิมพ์ และงานวิจัยจาก OKMD
          </p>
        </div>

        {/* BREADCRUMB */}
        <div className="flex items-center justify-center text-sm text-gray-500">
          <Link href="/" className="hover:text-[#16A7CB] transition-colors">
            หน้าหลัก
          </Link>
          <span className="mx-2">›</span>
          <span className="text-[#16A7CB] font-medium">ตู้ความรู้</span>
        </div>

        {/* HORIZONTAL MENU */}
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar justify-start md:justify-center">
          {MENU.map((item) => (
            <button
              key={item.value}
              onClick={() => setSelectedMenu(item.value)}
              className={`
                            whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold transition-all
                            ${
                              selectedMenu === item.value
                                ? "bg-[#16A7CB] text-white shadow-md relative z-10"
                                : "bg-white text-gray-600 border border-gray-200 hover:border-[#16A7CB] hover:text-[#16A7CB]"
                            }
                        `}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CONTENT AREA */}
        <div className="w-full">
          <h2 className="text-2xl font-bold text-[#1B1D20] mb-6 flex items-center gap-3">
            <span className="w-1.5 h-8 bg-[#16A7CB] rounded-full"></span>
            {PAGE_TITLE}
          </h2>

          {/* CARD GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {paginatedData.map((item, index) => (
              <div key={index} className="h-full">
                <MagazineCard
                  title={item.title}
                  img={item.img}
                  fileSize={item.fileSize}
                />
              </div>
            ))}
          </div>

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="flex justify-center pt-8">
              <Pagination
                total={totalPages}
                current={currentPage}
                onChange={setCurrentPage}
              />
            </div>
          )}
        </div>
      </div>
    </ContainerPage>
  );
}
