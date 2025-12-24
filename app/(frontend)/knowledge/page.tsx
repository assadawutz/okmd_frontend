// app/KnowledgePage.tsx
"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import React from "react";

// --- 1. Component Definitions (Added '' prefix and kept taller image height) ---

type BreadcrumbItem = {
  label: string;
  href?: string;
};
type BreadcrumbProps = {
  items: BreadcrumbItem[];
};
function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="flex items-center text-sm sm:text-base text-gray-500 font-medium">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {item.href ? (
            <Link href={item.href} className="hover:text-gray-700 transition cursor-pointer">
              {item.label}
            </Link>
          ) : (
            <span className="text-[#74CEE2]">{item.label}</span>
          )}
          {index < items.length - 1 && <span className="mx-2">›</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

type MenuItem = {
  label: string;
  value: string;
};
type LeftMenuProps = {
  items: MenuItem[];
  active: string;
  onSelect: (value: string) => void;
};
function LeftMenu({ items, active, onSelect }: LeftMenuProps) {
  return (
    <div className="flex flex-col space-y-2">
      {items.map((item) => (
        <button
          key={item.value}
          onClick={() => onSelect(item.value)}
          className={`
            text-left px-4 sm:px-5 py-3 sm:py-4 rounded-xl text-sm sm:text-base md:text-lg font-semibold transition w-full cursor-pointer
            ${active === item.value
              ? "bg-[#E8F6FB] text-[#16A7CB] hover:bg-[#dcf4fa]"
              : "text-gray-700 hover:bg-gray-50"
            }
          `}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

type MagazineCardProps = {
  title: string;
  img: string;
  fileSize: string;
};
function MagazineCard({ title, img, fileSize }: MagazineCardProps) {
  return (
    <div
      className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-300 hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)] h-full cursor-pointer flex flex-col"
      onClick={() => alert(`Mock Click: ${title}`)}
    >
      {/* Retained Taller Height: h-[350px] sm:h-[380px] md:h-[400px] */}
      <div className="w-full h-[350px] sm:h-[380px] md:h-[400px] overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.05]"
        />
      </div>
      <div className="p-6 flex flex-col justify-between flex-grow">
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
          {title}
        </h3>
        <div className="flex justify-between items-center mt-4 pt-2 border-t border-gray-100">
          <span className="text-sm text-gray-500 line-clamp-1">{fileSize}</span>
          <span className="text-sm text-[#16A7CB] font-semibold hover:underline whitespace-nowrap">
            อ่านเพิ่มเติม ↗
          </span>
        </div>
      </div>
    </div>
  );
}

type PaginationProps = {
  total: number;
  current: number;
};
function Pagination({ total, current }: PaginationProps) {
  const pageRange = 3;
  const pages = useMemo(() => {
    const p: (number | string)[] = [];
    const start = Math.max(1, current - pageRange);
    const end = Math.min(total, current + pageRange);
    if (start > 1) p.push(1, '...');
    for (let i = start; i <= end; i++) p.push(i);
    if (end < total) p.push('...', total);
    return p;
  }, [total, current]);
  const buttonClass = "w-10 h-10 flex items-center justify-center rounded-lg text-lg font-semibold transition cursor-pointer";
  const activeClass = "bg-[#74CEE2] text-white shadow-md";
  const normalClass = "bg-gray-100 text-gray-700 hover:bg-gray-200";
  const disabledClass = "bg-gray-50 text-gray-400 cursor-not-allowed";
  return (
    <div className="flex space-x-2 items-center">
      <button
        disabled={current === 1}
        className={`${buttonClass} ${current === 1 ? disabledClass : normalClass}`}
        onClick={() => alert("Mock: Go to previous page")}
      >
        {"<"}
      </button>
      {pages.map((p, index) => (
        <React.Fragment key={index}>
          {p === '...' ? (
            <span className="w-10 h-10 flex items-center justify-center text-gray-500">...</span>
          ) : (
            <button
              className={`${buttonClass} ${p === current ? activeClass : normalClass}`}
              onClick={() => alert(`Mock: Go to page ${p}`)}
            >
              {p}
            </button>
          )}
        </React.Fragment>
      ))}
      <button
        disabled={current === total}
        className={`${buttonClass} ${current === total ? disabledClass : normalClass}`}
        onClick={() => alert("Mock: Go to next page")}
      >
        {">"}
      </button>
    </div>
  );
}

// --- 2. Main Component ---

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
  const DATA_SOURCE: Record<string, MagazineCardProps[]> = {
    magazine: [
      { title: "The Knowledge vol.39 (AI DEEPFAKE)", img: "/kn-1.png", fileSize: "ดาวน์โหลดเอกสาร pdf ขนาด 54265.14 KB" },
      { title: "The Knowledge vol.38 (INFORMATION OVERLOAD)", img: "/kn-2.png", fileSize: "ดาวน์โหลดเอกสาร pdf ขนาด 54265.14 KB" },
      { title: "The Knowledge vol.37 (GLOBAL BOILING)", img: "/kn-3.png", fileSize: "ดาวน์โหลดเอกสาร pdf ขนาด 54265.14 KB" },
      { title: "The Knowledge vol.36 (AI)", img: "/kn-4.png", fileSize: "ดาวน์โหลดเอกสาร pdf ขนาด 54265.14 KB" },
      { title: "The Knowledge vol.35 (FUTURE VEHICLES)", img: "/kn-5.png", fileSize: "ดาวน์โหลดเอกสาร pdf ขนาด 54265.14 KB" },
      { title: "The Knowledge vol.34 (COST OF READING)", img: "/kn-6.png", fileSize: "ดาวน์โหลดเอกสาร pdf ขนาด 54265.14 KB" },
      // Added more mock data for pagination simulation
      { title: "The Knowledge vol.33", img: "/kn-1.png", fileSize: "ดาวน์โหลดเอกสาร pdf ขนาด 54265.14 KB" },
      { title: "The Knowledge vol.32", img: "/kn-2.png", fileSize: "ดาวน์โหลดเอกสาร pdf ขนาด 54265.14 KB" },
      { title: "The Knowledge vol.31", img: "/kn-3.png", fileSize: "ดาวน์โหลดเอกสาร pdf ขนาด 54265.14 KB" },
      { title: "The Knowledge vol.30", img: "/kn-4.png", fileSize: "ดาวน์โหลดเอกสาร pdf ขนาด 54265.14 KB" },
      { title: "The Knowledge vol.29", img: "/kn-5.png", fileSize: "ดาวน์โหลดเอกสาร pdf ขนาด 54265.14 KB" },
      { title: "The Knowledge vol.28", img: "/kn-6.png", fileSize: "ดาวน์โหลดเอกสาร pdf ขนาด 54265.14 KB" },
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

  React.useEffect(() => {
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

                {/* CARD GRID: Set to 3 columns on large screens */}
                <div className="grid grid-cols-12 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                  {paginatedData.map((item) => (
                    <div key={item.title} className="col-span-12 sm:col-span-6 lg:col-span-4 h-full">
                      <MagazineCard title={item.title} img={item.img} fileSize={item.fileSize} />
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