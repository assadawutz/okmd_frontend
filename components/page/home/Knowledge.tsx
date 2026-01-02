"use client";

import { useState, useMemo } from "react";
import React from "react";

// --- Subcomponents ---

type MenuItem = {
  label: string;
  value: string;
};

// Horizontal Tab Menu
type TabMenuProps = {
  items: MenuItem[];
  active: string;
  onSelect: (value: string) => void;
};
function TabMenu({ items, active, onSelect }: TabMenuProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar items-center">
      {items.map((item) => (
        <button
          key={item.value}
          onClick={() => onSelect(item.value)}
          className={`
            whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer border
            ${
              active === item.value
                ? "bg-[#16A7CB] text-white border-[#16A7CB] shadow-md"
                : "bg-white text-gray-600 border-gray-200 hover:border-[#16A7CB] hover:text-[#16A7CB]"
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
      className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col h-full"
      onClick={() => {}}
    >
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4 flex flex-col justify-between flex-grow">
        <h3 className="text-base font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-[#16A7CB] transition-colors">
          {title}
        </h3>
        <div className="mt-auto pt-3 border-t border-gray-50 flex justify-between items-center text-xs text-gray-500">
          <span className="truncate max-w-[70%]">{fileSize}</span>
          <span className="text-[#16A7CB] font-semibold">อ่านต่อ ↗</span>
        </div>
      </div>
    </div>
  );
}

type PaginationProps = {
  total: number;
  current: number;
  onChange: (next: number) => void;
};
function Pagination({ total, current, onChange }: PaginationProps) {
  if (total <= 1) return null;
  const pages = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <div className="flex justify-center gap-2 mt-8">
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={`
            w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all
            ${
              p === current
                ? "bg-[#16A7CB] text-white"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }
          `}
        >
          {p}
        </button>
      ))}
    </div>
  );
}

// --- Main Component ---

export default function KnowledgeShelfSection() {
  const MENU: MenuItem[] = [
    { label: "หนังสือนิตยสาร", value: "magazine" },
    { label: "หนังสือแนะนำ", value: "recommend" },
    { label: "Infographic", value: "infographic" },
    { label: "บทความวิจัย", value: "research" },
    { label: "Recommended", value: "recommended" },
  ];
  const [selectedMenu, setSelectedMenu] = useState("magazine");
  const [currentPage, setCurrentPage] = useState(1);

  const DATA_SOURCE: Record<string, MagazineCardProps[]> = {
    magazine: [
      {
        title: "The Knowledge vol.39 (AI DEEPFAKE)",
        img: "/kn-1.png",
        fileSize: "54 MB",
      },
      {
        title: "The Knowledge vol.38 (INFO OVERLOAD)",
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
        title: "The Knowledge vol.35 (FUTURE)",
        img: "/kn-5.png",
        fileSize: "54 MB",
      },
      {
        title: "The Knowledge vol.34 (READING)",
        img: "/kn-6.png",
        fileSize: "54 MB",
      },
    ],
    recommend: [
      { title: "แนะนำหนังสือดี 1", img: "/kn-1.png", fileSize: "1 MB" },
      { title: "แนะนำหนังสือดี 2", img: "/kn-2.png", fileSize: "1 MB" },
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
      { title: "Item 1", img: "/kn-1.png", fileSize: "700 KB" },
      { title: "Item 2", img: "/kn-2.png", fileSize: "700 KB" },
    ],
  };

  const DATA = DATA_SOURCE[selectedMenu] || [];
  const itemsPerPage = 4;
  const totalPages = Math.ceil(DATA.length / itemsPerPage);
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return DATA.slice(start, start + itemsPerPage);
  }, [DATA, currentPage]);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedMenu]);

  return (
    <div className="w-full bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100 space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#1B1D20]">
          ตู้ <span className="text-[#74CEE2]">ความรู้</span>
        </h2>
        <p className="text-gray-500 mt-2">
          คลังความรู้ดิจิทัลที่คัดสรรมาเพื่อคุณ
        </p>
      </div>

      <TabMenu
        items={MENU}
        active={selectedMenu}
        onSelect={(value) => setSelectedMenu(value)}
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {paginatedData.map((item, i) => (
          <MagazineCard
            key={i}
            title={item.title}
            img={item.img}
            fileSize={item.fileSize}
          />
        ))}
      </div>

      <Pagination
        total={totalPages}
        current={currentPage}
        onChange={setCurrentPage}
      />
    </div>
  );
}
