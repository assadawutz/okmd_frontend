"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ContainerPage } from "@/components/shared/ContainerPage";

const CATE = [
  { label: "ข่าวประชาสัมพันธ์", value: "announce" },
  { label: "ข่าว สบร.", value: "org" },
];

const NEWS = [
  {
    id: "1",
    img: "/news1.png",
    title: "ประกาศรายชื่อผู้โชคดี โครงการสร้างคนแบบฉบับ OKMD Knowledge Portal",
    date: "30 กันยายน 2568",
    desc: "ระบบแจ้งรับรางวัลออนไลน์สะดวกและปลอดภัยอย่างยิ่ง...",
    category: "announce",
  },
  {
    id: "2",
    img: "/news2.png",
    title: "OKMD CREATOR Knowledge Sharing ครั้งที่ 8",
    date: "12 กันยายน 2568",
    desc: "กิจกรรมเสริมทักษะคอนเทนต์ครีเอเตอร์รุ่นใหม่...",
    category: "announce",
  },
  {
    id: "3",
    img: "/news3.png",
    title: "Thailand Learning City Award 2024",
    date: "11 กันยายน 2568",
    desc: "ผลักดันเมืองแห่งการเรียนรู้สู่มาตรฐานสากล...",
    category: "announce",
  },
  {
    id: "4",
    img: "/news4.png",
    title: "Talent Everywhere Season 2 เปิดรับสมัคร",
    date: "5 กันยายน 2568",
    desc: "ร่วมเฟ้นหาไอเดียใหม่จากผู้มีความสามารถทั่วประเทศ...",
    category: "announce",
  },
  {
    id: "5",
    img: "/news5.png",
    title: "เสวนาพิเศษ สร้างสรรค์คนไทย",
    date: "1 กันยายน 2568",
    desc: "วงเสวนาจากผู้นำระดับประเทศด้านการศึกษา...",
    category: "org",
  },
  {
    id: "6",
    img: "/news6.png",
    title: "OKMD E-Service ปรับระบบใหม่",
    date: "28 สิงหาคม 2568",
    desc: "เพิ่มความเร็วการเข้าถึงระบบบริการออนไลน์...",
    category: "org",
  },
];

export default function NewsPage() {
  const [active, setActive] = useState("announce");

  const filtered = useMemo(
    () => NEWS.filter((n) => n.category === active),
    [active]
  );

  return (
    <ContainerPage>
      <div className="w-full space-y-8">
        {/* HEADER */}
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#1B1D20]">
            News & <span className="text-[#16A7CB]">Update</span>
          </h1>
          <p className="text-gray-500">
            ติดตามข่าวสารและการจ้างงานล่าสุดจาก OKMD
          </p>
        </div>

        {/* BREADCRUMB */}
        <div className="flex items-center justify-center text-sm text-gray-500">
          <Link href="/" className="hover:text-[#16A7CB] transition-colors">
            หน้าหลัก
          </Link>
          <span className="mx-2">›</span>
          <span className="text-[#16A7CB] font-medium">ข่าวสาร</span>
        </div>

        {/* CATEGORY TABS */}
        <div className="flex justify-center gap-3 flex-wrap">
          {CATE.map((c) => (
            <button
              key={c.value}
              onClick={() => setActive(c.value)}
              className={`
                            px-6 py-2.5 rounded-full text-sm font-bold transition-all
                            ${
                              active === c.value
                                ? "bg-[#16A7CB] text-white shadow-md"
                                : "bg-white text-gray-600 border border-gray-200 hover:border-[#16A7CB] hover:text-[#16A7CB]"
                            }
                        `}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* NEWS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((n) => (
            <Link
              key={n.id}
              href={`/news/${n.id}`}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer flex flex-col md:flex-row h-full md:h-[200px]"
            >
              <div className="w-full md:w-[200px] h-[200px] md:h-full relative flex-shrink-0">
                <Image
                  src={n.img}
                  alt={n.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col justify-center flex-1">
                <span className="text-xs text-[#16A7CB] font-bold mb-2 uppercase">
                  {n.category}
                </span>
                <h3 className="text-lg font-bold text-[#1B1D20] leading-snug line-clamp-2 mb-2 group-hover:text-[#16A7CB] transition-colors">
                  {n.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2 mb-3">
                  {n.desc}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-xs text-gray-400">{n.date}</span>
                  <span className="text-xs font-bold text-[#16A7CB] group-hover:underline">
                    อ่านต่อ ↗
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center gap-2 mt-8">
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:border-[#16A7CB] hover:text-[#16A7CB] text-gray-500 transition-all font-bold text-sm"
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </ContainerPage>
  );
}
