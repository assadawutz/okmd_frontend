"use client";

import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

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
    <main className="w-full bg-white pb-20 md:pb-32">
      {/* Breadcrumb */}
      <div className="w-full bg-white border-b border-zinc-200">
        <div className="container mx-auto px-4 h-16 md:h-20 flex items-center">
          <Breadcrumb
            items={[
              { label: "หน้าหลัก", href: "/" },
              { label: "ตู้ความรู้", href: "/knowledge" },
              { label: DETAIL.title, href: "#" },
            ]}
          />
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="container mx-auto px-4 py-12 md:py-16 grid grid-cols-12 gap-8 md:gap-12 lg:gap-16">
        {/* ============ IMAGE (LEFT ON DESKTOP) ============ */}
        <div className="col-span-12 md:col-span-5 flex justify-center md:justify-start">
          <div
            className="
            relative rounded-xl overflow-hidden
            w-[260px] sm:w-[320px] md:w-full max-w-[460px]
            aspect-[3/4.5]
            shadow-[0px_6px_20px_rgba(0,0,0,0.12)]
            transition-all duration-500
            hover:scale-[1.02] hover:shadow-[0px_18px_40px_rgba(0,0,0,0.15)]
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

        {/* ============ CONTENT (RIGHT ON DESKTOP) ============ */}
        <div className="col-span-12 md:col-span-7 space-y-6 md:space-y-8">
          <div className="space-y-2 md:space-y-4">
            <div className="text-sm md:text-lg text-[#1B1D20] font-semibold tracking-tight uppercase text-gray-500">
              {DETAIL.subTitle}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B1D20] leading-tight">
              {DETAIL.title}
            </h1>

            <p className="text-zinc-500 text-sm md:text-base">{DETAIL.date}</p>
          </div>

          {/* Bullets */}
          <ul className="text-zinc-700 leading-relaxed md:leading-loose space-y-2 md:space-y-3">
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

          {/* Download Button */}
          <div className="pt-4">
            <a
              href={DETAIL.pdf}
              className="
                inline-flex items-center justify-center px-8 py-3.5 rounded-full
                bg-[#74CEE2] text-white font-semibold text-base
                hover:bg-[#5FC4D8] transition-all duration-300
                shadow-md hover:shadow-lg hover:-translate-y-0.5
              "
            >
              ดาวน์โหลดเอกสาร PDF ({DETAIL.fileSize})
            </a>
          </div>
        </div>
      </div>

      {/* ============ RELATED SECTION ============ */}
      <div className="container mx-auto px-4 mt-12 md:mt-20">
        <hr className="mb-10 md:mb-16 border-t border-[#E5E5E5]" />

        <div className="flex items-center justify-between mb-8 md:mb-12">
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {RELATED.map((item) => (
            <Link
              key={item.id}
              href={`/knowledge/${item.id}`}
              className="group flex flex-col items-center gap-4 cursor-pointer"
            >
              <div
                className="
                  relative rounded-xl overflow-hidden
                  w-full aspect-[3/4.5] max-w-[220px]
                  shadow-[0px_6px_20px_rgba(0,0,0,0.12)]
                  transition-all duration-500
                  group-hover:scale-[1.04] group-hover:-translate-y-2
                  group-hover:shadow-[0px_16px_40px_rgba(0,0,0,0.16)]
                "
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-center space-y-1">
                <div className="text-base md:text-lg font-bold text-[#1B1D20] group-hover:text-[#16A7CB] transition-colors leading-tight">
                  {item.title}
                </div>
                <div className="text-[#16A7CB] text-xs md:text-sm font-medium">
                  ดาวน์โหลด PDF
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
