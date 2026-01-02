"use client";

import Link from "next/link";
import SubHeroBanner from "@/components/ui/SubHeroBanner";

export default function About() {
  const menuItems = [
    { label: "ความเป็นมา", active: true },
    { label: "วิสัยทัศน์ / พันธกิจ", active: false },
    { label: "โครงสร้างองค์กร", active: false },
    { label: "คณะกรรมการ", active: false },
    { label: "ผู้บริหาร", active: false },
    { label: "รายงานประจำปี", active: false },
  ];

  return (
    <div className="w-full min-h-screen bg-white pb-20 md:pb-32">
      <SubHeroBanner image="/about-hero.jpg" height="h-[300px]">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            เกี่ยวกับ <span className="text-[#74CEE2]">OKMD</span>
          </h1>
          <p className="text-lg md:text-xl mt-4 text-white/90">
            สำนักงานบริหารและพัฒนาองค์ความรู้ (องค์การมหาชน)
          </p>
        </div>
      </SubHeroBanner>

      <div className="border-b border-zinc-200 bg-white">
        <div className="container mx-auto px-4 h-16 md:h-20 flex items-center text-sm md:text-base text-gray-600">
          <Link
            href="/"
            className="hover:text-[#74CEE2] cursor-pointer transition"
          >
            หน้าหลัก
          </Link>
          <span className="mx-2">›</span>
          <span className="text-[#74CEE2]">เกี่ยวกับเรา</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Sidebar Menu */}
          <div className="col-span-1 md:col-span-12 lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">
              <div className="bg-[#16A7CB] px-6 py-4">
                <h3 className="text-white font-bold text-lg">เกี่ยวกับ OKMD</h3>
              </div>
              <ul className="divide-y divide-gray-100">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className={`block px-6 py-4 transition-all hover:bg-gray-50 active:scale-[0.98] flex justify-between items-center ${
                        item.active
                          ? "text-[#16A7CB] font-bold bg-[#E8F6FB] border-l-4 border-[#16A7CB]"
                          : "text-gray-600 border-l-4 border-transparent"
                      }`}
                    >
                      {item.label}
                      {item.active && <span>›</span>}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-1 md:col-span-12 lg:col-span-9">
            <div className="prose prose-lg max-w-none text-gray-600">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-[#16A7CB] pl-4">
                ความเป็นมา
              </h2>
              <p className="mb-6 leading-relaxed">
                รัฐบาลได้จัดตั้ง{" "}
                <strong>
                  สำนักงานบริหารและพัฒนาองค์ความรู้ (องค์การมหาชน)
                </strong>{" "}
                หรือ <strong>สบร. (OKMD)</strong> ขึ้น
                ตามพระราชกฤษฎีกาจัดตั้งสำนักงานบริหารและพัฒนาองค์ความรู้
                (องค์การมหาชน) พ.ศ. 2547
                เพื่อทำหน้าที่ขับเคลื่อนภารกิจในการพัฒนาความคิดสร้างสรรค์
                และกระตุกต่อมความรู้คนไทย
              </p>

              <div className="my-8">
                <div className="w-full h-[400px] bg-gray-200 rounded-2xl overflow-hidden relative">
                  {/* Placeholder for Video/Image */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <span className="text-lg font-semibold">
                      ภาพบรรยากาศองค์กร / VDO แนะนำ
                    </span>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-500 mt-2">
                  บรรยากาศสำนักงาน OKMD
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
                วัตถุประสงค์
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  เพื่อส่งเสริมให้ประชาชนมีโอกาสแสวงหาความรู้
                  พัฒนาความคิดสร้างสรรค์ และเรียนรู้ตลอดชีวิต
                </li>
                <li>
                  เพื่อส่งเสริมและสนับสนุนการพัฒนาแหล่งเรียนรู้ในรูปแบบต่างๆ
                </li>
                <li>เพื่อเป็นศูนย์กลางในการรวบรวมและพัฒนาองค์ความรู้</li>
              </ul>

              <div className="mt-12 bg-[#F8FAFC] p-8 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold text-[#16A7CB] mb-4">
                  หน่วยงานภายใน
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex-shrink-0"></div>
                    <span className="font-bold text-gray-700">TK Park</span>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex-shrink-0"></div>
                    <span className="font-bold text-gray-700">Museum Siam</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
