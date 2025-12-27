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
    // Applied  prefix
    <main className="w-full bg-white pb-32">
      {/* BREADCRUMB */}
      {/* Applied  prefix */}
      <div className="border-b border-zinc-200">
        <div className="container mx-auto px-6 h-20 flex items-center text-base md:text-sm text-[#6A6A6A]">
          {/* Added hover:text-sky-500 and cursor-pointer */}
          <Link href="/" className="hover:text-sky-500 cursor-pointer">
            หน้าหลัก
          </Link>
          <span className="mx-2">›</span>
          {/* Applied  prefix */}
          <span className="text-sky-600">ข่าวสาร</span>
        </div>
      </div>

      {/* MAIN */}
      {/* Adjusted padding and gap for mobile */}
      <div className="container mx-auto px-6 pt-8 md:pt-12 grid grid-cols-12 gap-8 md:gap-16">

        {/* LEFT MENU */}
        {/* Adjusted column span and added mb-8 for mobile spacing */}
        <aside className="col-span-12 md:col-span-3 mb-8 md:mb-0">
          {/* Applied  prefix and adjusted margin for mobile */}
          <h1 className="text-4xl font-bold mb-6 md:mb-10 text-[#1B1D20]">News</h1>

          {/* Applied  prefix */}
          <div className="flex flex-col gap-1">
            {CATE.map((c) => {
              const isActive = active === c.value;
              return (
                <button
                  key={c.value}
                  onClick={() => setActive(c.value)}
                  // Applied  prefix and added cursor-pointer
                  className={`
                    text-left px-4 py-3 rounded-lg text-[18px] font-semibold cursor-pointer
                    ${isActive
                      ? "bg-[#E8F6FB] text-[#16A7CB]"
                      : "text-[#6A6A6A] hover:text-[#16A7CB]"
                    }
                  `}
                // Removed inline style to allow full width via Tailwind utilities
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </aside>

        {/* RIGHT CONTENT */}
        {/* Adjusted column span */}
        <section className="col-span-12 md:col-span-9 lg:col-span-8">
          {/* Applied  prefix */}
          <h2 className="text-3xl font-bold text-[#1B1D20] mb-8 md:mb-10">{titleText}</h2>

          {/* GRID items Responsive Adjustment */}
          <div className="
            grid grid-cols-1 
            sm:grid-cols-2 md:grid-cols-2 
            gap-x-8 gap-y-10 
            place-items-center sm:place-items-start
          ">
            {filtered.map((n) => (
              <Link
                key={n.id}
                href={`/news/detail/${n.id}`}
                // Applied  prefix, w-full added for responsiveness, cursor-pointer added
                className="
                  w-full
                  bg-white 
                  rounded-2xl 
                  border border-[#E5E5E5]
                  shadow-[0_4px_12px_rgba(0,0,0,0.06)]
                  hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)]
                  transition-all 
                  overflow-hidden
                  cursor-pointer
                "
              // REMOVED: style={{ width: 364 }}
              >
                {/* IMAGE */}
                {/* Applied  prefix, object-cover added to ensure image fills area */}
                <div className="w-full h-[200px] sm:h-[220px] overflow-hidden">
                  <img
                    src={n.img}
                    alt={n.title}
                    className="
                      w-full h-full object-cover 
                      transition-all duration-300 
                      hover:scale-[1.03]
                    "
                  />
                </div>

                {/* CONTENT */}
                <div className="px-6 py-5">
                  {/* Applied  prefix */}
                  <p className="text-[13px] text-zinc-500 mb-1">
                    {n.date}
                  </p>

                  {/* Applied  prefix */}
                  <h3 className="
                    text-[18px] font-semibold text-[#1B1D20] 
                    leading-snug line-clamp-2 mb-2
                  ">
                    {n.title}
                  </h3>

                  {/* Applied  prefix */}
                  <p className="text-[14px] text-zinc-600 leading-6 line-clamp-3">
                    {n.desc}
                  </p>

                  {/* Applied  prefix */}
                  <span className="inline-flex items-center gap-1 pt-3 text-[15px] text-[#16A7CB] font-semibold">
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
    </main>
  );
}