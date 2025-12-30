// app/NewsPage.tsx
"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

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

  const titleText = active === "announce" ? "ข่าวประชาสัมพันธ์" : "ข่าวองค์กร";

  return (
    <main className="w-full bg-white pb-32">
      {/* BREADCRUMB - AI-LOCK COMPLIANT */}
      <div className="border-b border-zinc-200">
        <div className="container mx-auto px-4 md:px-8 h-20 flex items-center text-base text-gray-600">
          <Link href="/" className="hover:text-[#74CEE2] cursor-pointer transition">
            หน้าหลัก
          </Link>
          <span className="mx-2">›</span>
          <span className="text-[#74CEE2]">ข่าวสาร</span>
        </div>
      </div>

      {/* DESKTOP LAYOUT - grid-cols-12 */}
      <div className="hidden md:block">
        <div className="container mx-auto px-4 md:px-8 pt-12">
          <div className="grid grid-cols-12 gap-16">
            {/* LEFT MENU - 3 cols */}
            <aside className="col-span-3">
              <h1 className="text-4xl font-bold mb-10 text-[#1B1D20]">News</h1>
              
              <div className="flex flex-col gap-1">
                {CATE.map((c) => {
                  const isActive = active === c.value;
                  return (
                    <button
                      key={c.value}
                      onClick={() => setActive(c.value)}
                      className={`
                        text-left px-4 py-3 rounded-lg text-lg font-semibold cursor-pointer transition
                        ${isActive
                          ? "bg-[#E8F6FB] text-[#16A7CB]"
                          : "text-gray-700 hover:text-[#16A7CB]"
                        }
                      `}
                    >
                      {c.label}
                    </button>
                  );
                })}
              </div>
            </aside>

            {/* RIGHT CONTENT - 9 cols */}
            <section className="col-span-9">
              <h2 className="text-3xl font-bold text-[#1B1D20] mb-10">{titleText}</h2>

              {/* NEWS GRID - 2 columns (6+6) */}
              <div className="grid grid-cols-12 gap-x-8 gap-y-10">
                {filtered.map((n) => (
                  <Link
                    key={n.id}
                    href={`/news/${n.id}`}
                    className="col-span-6 bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all overflow-hidden cursor-pointer"
                  >
                    <div className="w-full h-[220px] overflow-hidden">
                      <img
                        src={n.img}
                        alt={n.title}
                        className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
                      />
                    </div>

                    <div className="px-6 py-5">
                      <p className="text-sm text-gray-500 mb-1">{n.date}</p>
                      <h3 className="text-lg font-semibold text-[#1B1D20] leading-snug line-clamp-2 mb-2">
                        {n.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-6 line-clamp-3">
                        {n.desc}
                      </p>
                      <span className="inline-flex items-center gap-1 pt-3 text-sm text-[#16A7CB] font-semibold">
                        อ่านเพิ่มเติม ↗
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* PAGINATION */}
              <div className="mt-12 flex justify-center">
                <div className="flex items-center gap-2">
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#74CEE2] text-white font-semibold hover:bg-[#5FC4D8] transition">
                    1
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition">
                    2
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition">
                    3
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition">
                    4
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition">
                    5
                  </button>
                  <span className="px-2 text-gray-500">...</span>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition">
                    20
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition">
                    &gt;
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* MOBILE LAYOUT - NO SIDEBAR, NO grid-cols-12 */}
      <div className="md:hidden">
        <div className="container mx-auto px-4 pt-8">
          <h1 className="text-3xl font-bold mb-6 text-[#1B1D20]">News</h1>

          {/* Mobile Category Selector */}
          <div className="mb-6">
            <select
              value={active}
              onChange={(e) => setActive(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base font-semibold bg-white"
            >
              {CATE.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>

          <h2 className="text-2xl font-bold text-[#1B1D20] mb-6">{titleText}</h2>

          {/* Mobile News Cards - Stacked */}
          <div className="flex flex-col gap-6">
            {filtered.map((n) => (
              <Link
                key={n.id}
                href={`/news/${n.id}`}
                className="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden"
              >
                <div className="w-full h-[200px] overflow-hidden">
                  <img
                    src={n.img}
                    alt={n.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="px-5 py-4">
                  <p className="text-sm text-gray-500 mb-1">{n.date}</p>
                  <h3 className="text-base font-semibold text-[#1B1D20] leading-snug line-clamp-2 mb-2">
                    {n.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-6 line-clamp-2">
                    {n.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 pt-2 text-sm text-[#16A7CB] font-semibold">
                    อ่านเพิ่มเติม ↗
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile Pagination */}
          <div className="mt-8 flex justify-center pb-8">
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#74CEE2] text-white font-semibold">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 text-gray-700 font-semibold">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 text-gray-700 font-semibold">
                3
              </button>
              <span className="px-2 text-gray-500">...</span>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 text-gray-700 font-semibold">
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}