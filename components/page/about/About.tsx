"use client";

import { useState } from "react";
import Link from "next/link";

export default function About() {
  const menuItems = [
    { label: "ความเป็นมา", value: "history" },
    { label: "วิสัยทัศน์ / พันธกิจ", value: "vision" },
    { label: "โครงสร้างองค์กร", value: "structure" },
    { label: "คณะกรรมการ", value: "board" },
    { label: "ผู้บริหาร", value: "executives" },
    { label: "รายงานประจำปี", value: "report" },
  ];
  const [activeTab, setActiveTab] = useState("history");

  return (
    <div className="w-full space-y-8">
      {/* HEADER BLOCK */}
      <div className="w-full h-[250px] md:h-[300px] rounded-3xl overflow-hidden relative shadow-sm">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/about-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            เกี่ยวกับ <span className="text-[#74CEE2]">OKMD</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            สำนักงานบริหารและพัฒนาองค์ความรู้ (องค์การมหาชน)
          </p>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div className="flex items-center text-sm text-gray-500 px-2">
        <Link href="/" className="hover:text-[#16A7CB] transition-colors">
          หน้าหลัก
        </Link>
        <span className="mx-2">›</span>
        <span className="text-[#16A7CB] font-medium">เกี่ยวกับเรา</span>
      </div>

      {/* TABS MENU */}
      <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
        {menuItems.map((item) => (
          <button
            key={item.value}
            onClick={() => setActiveTab(item.value)}
            className={`
                 whitespace-nowrap px-6 py-3 rounded-full font-bold transition-all
                 ${
                   activeTab === item.value
                     ? "bg-[#16A7CB] text-white shadow-md"
                     : "bg-white text-gray-600 border border-gray-100 hover:bg-gray-50"
                 }
               `}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* CONTENT BLOCK */}
      <div className="bg-white rounded-3xl p-6 md:p-10 border border-gray-100 shadow-sm">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D20] mb-6 border-l-4 border-[#16A7CB] pl-4">
          ความเป็นมา
        </h2>

        <div className="prose prose-lg max-w-none text-gray-600">
          <p className="mb-6 leading-relaxed">
            รัฐบาลได้จัดตั้ง{" "}
            <strong className="text-[#1B1D20]">
              สำนักงานบริหารและพัฒนาองค์ความรู้ (องค์การมหาชน)
            </strong>{" "}
            หรือ <strong className="text-[#1B1D20]">สบร. (OKMD)</strong> ขึ้น
            ตามพระราชกฤษฎีกาจัดตั้งสำนักงานบริหารและพัฒนาองค์ความรู้
            (องค์การมหาชน) พ.ศ. 2547
            เพื่อทำหน้าที่ขับเคลื่อนภารกิจในการพัฒนาความคิดสร้างสรรค์
            และกระตุกต่อมความรู้คนไทย
          </p>

          <div className="my-8">
            <div className="w-full aspect-video bg-gray-100 rounded-2xl overflow-hidden relative flex items-center justify-center border border-gray-200">
              <span className="text-gray-400 font-medium">
                Video / Image Placeholder
              </span>
            </div>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-[#1B1D20] mt-10 mb-4">
            วัตถุประสงค์
          </h3>
          <ul className="space-y-3 list-none pl-0">
            {[
              "เพื่อส่งเสริมให้ประชาชนมีโอกาสแสวงหาความรู้ พัฒนาความคิดสร้างสรรค์ และเรียนรู้ตลอดชีวิต",
              "เพื่อส่งเสริมและสนับสนุนการพัฒนาแหล่งเรียนรู้ในรูปแบบต่างๆ",
              "เพื่อเป็นศูนย์กลางในการรวบรวมและพัฒนาองค์ความรู้",
            ].map((text, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#16A7CB] mt-2.5" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* OKMD FAMILY */}
      <div className="bg-[#F8FBFD] rounded-3xl p-6 md:p-10 border border-transparent">
        <h3 className="text-xl font-bold text-[#16A7CB] mb-6 text-center">
          หน่วยงานภายใน OKMD FAMILY
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow cursor-default">
            <div className="w-12 h-12 bg-[#FF4B4B] rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-xs">
              TK
            </div>
            <span className="font-bold text-gray-700">TK Park</span>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow cursor-default">
            <div className="w-12 h-12 bg-[#FFD700] rounded-full flex-shrink-0 flex items-center justify-center text-black font-bold text-xs">
              MS
            </div>
            <span className="font-bold text-gray-700">Museum Siam</span>
          </div>
        </div>
      </div>
    </div>
  );
}
