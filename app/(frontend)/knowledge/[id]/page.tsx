"use client";

import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { ContainerPage } from "@/components/shared/ContainerPage";
import Button from "@/components/ui/Button";
import { ChevronLeft } from "lucide-react";

export default function ShelfDetailPage() {
  const DETAIL = {
    title: "The Knowledge vol.36",
    subTitle: "OKMD Shelf",
    date: "22 มิถุนายน 2568 | เวลา: 16.00 - 19.00 น.",
    img: "/kn-1.png",
    pdf: "#",
    fileSize: "54265.14 KB",
    bullets: [
      "5 กลุ่มผู้เข้าร่วมโครงการที่มีองค์ความรู้อันมีคุณค่าแก่การเรียนรู้",
      "AI AND DISABILITIES พลิก AI เปลี่ยนข้อจำกัดเป็นข้อได้เปรียบ",
      "สำรวจเรื่องราวใหม่ของ AI และผู้คน",
      "A-Z เปิดโลก AI แห่งอนาคตในคู่มือฉบับพิเศษ",
      "AI เทคโนโลยีแห่งอนาคต ลดความเหลื่อมล้ำให้กับผู้พิการ",
      "ถอดรหัสแนวคิดของผู้นำองค์กร ก้าวสู่โลกแห่งโอกาสด้านเทคโนโลยี AI",
      "ดีลของ AI ในอุตสาหกรรม",
      "AI กับการปรับธุรกิจเชิงกลยุทธ์ของผู้บริหาร",
      "มโนทัศน์ผู้ดูแลผู้พิการกับ AI ในระดับนานาชาติ",
      "โอกาสใหม่ในยุคดิจิทัล AI กับการพัฒนาทักษะอาชีพของผู้พิการ",
      "และการพัฒนาระบบธรรมาภิบาลทรัพยากรบุคคล",
      "เมื่อ AI ช่วยให้ผู้บริหารทำงานอย่างทัดเทียม",
      "AI กับการสร้างความเท่าเทียมให้ผู้บริหาร",
      "บทความเพื่อชีวิต เทคโนโลยีช่วยเหลือกับพลังของ AI",
    ],
  };

  const RELATED = [
    { id: 1, title: "The Knowledge vol.34", img: "/kn-6.png" },
    { id: 2, title: "The Knowledge vol.33", img: "/kn-3.png" },
    { id: 3, title: "The Knowledge vol.37", img: "/kn-3.png" },
    { id: 4, title: "The Knowledge vol.36", img: "/kn-4.png" },
  ];

  return (
    <ContainerPage>
      <div className="w-full space-y-8">
        {/* Header Block with Title */}
        <div className="w-full h-[250px] md:h-[300px] rounded-3xl overflow-hidden relative shadow-sm">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/bannerabout.png')" }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-2">
              ตู้ควาามรู้{" "}
              <span className="text-[#74CEE2]">Knowledge Shelf</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              คลังความรู้ดิจิทัลสำหรับทุกคน
            </p>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 px-2 gap-2">
          <Link href="/" className="hover:text-[#16A7CB] transition-colors">
            หน้าหลัก
          </Link>
          <span>›</span>
          <Link
            href="/knowledge"
            className="hover:text-[#16A7CB] transition-colors"
          >
            ตู้ความรู้
          </Link>
          <span>›</span>
          <span className="text-[#16A7CB] font-medium truncate max-w-[200px] md:max-w-xs">
            {DETAIL.title}
          </span>
        </div>

        {/* MAIN CONTENT BLOCK */}
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
            {/* LEFT: IMAGE */}
            <div className="md:col-span-5 flex justify-center md:justify-start">
              <div
                className="
                        relative rounded-2xl overflow-hidden
                        w-[260px] sm:w-[320px] md:w-full max-w-[400px]
                        aspect-[3/4.5]
                        shadow-[0px_6px_20px_rgba(0,0,0,0.12)]
                        transition-all duration-500
                        hover:scale-[1.02] hover:shadow-xl
                        "
              >
                <Image
                  src={DETAIL.img}
                  alt={DETAIL.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* RIGHT: CONTENT */}
            <div className="md:col-span-7 space-y-6 md:space-y-8">
              <header className="space-y-4">
                <span className="text-sm md:text-base text-gray-400 font-bold uppercase tracking-wider block">
                  {DETAIL.subTitle}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B1D20] leading-tight">
                  {DETAIL.title}
                </h1>
                <p className="text-gray-500 font-medium">{DETAIL.date}</p>
              </header>

              <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                <ul className="text-gray-700 leading-relaxed md:leading-loose space-y-2 md:space-y-3">
                  {DETAIL.bullets.map((item, i) => (
                    <li
                      key={i}
                      className="relative pl-5 md:pl-6 text-sm md:text-base"
                    >
                      <span className="absolute left-0 top-[10px] w-2 h-2 bg-okmd-cyan rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <a
                  href={DETAIL.pdf}
                  className="
                                inline-flex items-center justify-center px-8 py-3.5 rounded-xl
                                bg-[#74CEE2] text-white font-semibold text-base
                                hover:bg-[#5FC4D8] transition-all duration-300
                                shadow-lg shadow-[#74CEE2]/30 hover:shadow-xl hover:-translate-y-0.5
                                active:scale-95 w-full md:w-auto
                            "
                >
                  ดาวน์โหลดเอกสาร PDF ({DETAIL.fileSize})
                </a>
              </div>
            </div>
          </div>

          {/* RELATED SECTION */}
          <div className="mt-16 pt-10 border-t border-gray-100">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1B1D20]">
                หนังสือที่เกี่ยวข้อง
              </h3>
              <Link
                href="/knowledge"
                className="text-[#16A7CB] font-bold hover:underline"
              >
                ดูทั้งหมด
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {RELATED.map((item) => (
                <Link
                  key={item.id}
                  href={`/knowledge/${item.id}`}
                  className="group flex flex-col items-center gap-4 cursor-pointer"
                >
                  <div
                    className="
                               relative rounded-xl overflow-hidden
                               w-full aspect-[3/4.5] max-w-[200px]
                               shadow-md
                               transition-all duration-300
                               group-hover:scale-105 group-hover:shadow-xl
                               border border-gray-100
                                "
                  >
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="text-center space-y-2 w-full">
                    <h4 className="text-base md:text-lg font-bold text-[#1B1D20] group-hover:text-[#16A7CB] transition-colors leading-tight line-clamp-2">
                      {item.title}
                    </h4>
                    <span className="text-[#16A7CB] text-xs md:text-sm font-semibold inline-block border border-[#16A7CB] px-2 py-0.5 rounded-md hover:bg-[#16A7CB] hover:text-white transition-all">
                      ดาวน์โหลด PDF
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <Link href="/knowledge">
              <Button
                variant="outline"
                className="rounded-xl flex items-center gap-2"
              >
                <ChevronLeft size={18} /> ย้อนกลับ
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </ContainerPage>
  );
}
