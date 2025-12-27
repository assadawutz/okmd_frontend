"use client";

import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";

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
    { title: "The Knowledge vol.34", img: "/kn-6.png" },
    { title: "The Knowledge vol.33", img: "/kn-3.png" },
    { title: "The Knowledge vol.37", img: "/kn-3.png" },
    { title: "The Knowledge vol.36", img: "/kn-4.png" },
  ];

  return (
    <main className="w-full bg-white pb-24">

      {/* Breadcrumb */}
      <div className="w-full bg-white ">
        <div className="container px-4 sm:px-6 h-14 sm:h-20 flex items-center">
          <Breadcrumb
            items={[
              { label: "หน้าหลัก", href: "/" },
              { label: "ตู้ความรู้", href: "/knowledge" },
              { label: DETAIL.title, href: "#" },
            ]}
          />
        </div>
      </div>

      {/* MAIN */}
      <div className="container px-4 sm:px-6 pt-10 sm:pt-16 grid grid-cols-12 gap-10 sm:gap-16 lg:gap-20">

        {/* ============ MOBILE FIRST → IMAGE AT TOP ============ */}
        <div className="col-span-12 md:col-span-5 flex justify-center md:justify-start">
          <Image
            src={DETAIL.img}
            alt="cover"
            width={460}
            height={650}
            className="
              rounded-xl object-cover
              w-[260px] sm:w-[320px] md:w-[380px] lg:w-[460px]
              h-[420px] sm:h-[520px] md:h-[600px] lg:h-[650px]
              shadow-[0px_6px_20px_rgba(0,0,0,0.12)]
              transition-all duration-300
              hover:scale-[1.02] hover:shadow-[0px_18px_40px_rgba(0,0,0,0.15)]
            "
          />
        </div>

        {/* ============ CONTENT RIGHT (STACKS UNDER IMAGE ON MOBILE) ============ */}
        <div className="col-span-12 md:col-span-7 space-y-6 sm:space-y-8">

          <div className="text-sm sm:text-lg text-[#1B1D20] font-semibold tracking-tight">
            {DETAIL.subTitle}
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#1B1D20] leading-snug sm:leading-tight">
            {DETAIL.title}
          </h1>

          <p className="text-zinc-500 text-sm sm:text-base md:text-lg">
            {DETAIL.date}
          </p>

          {/* bullets */}
          <ul className="text-zinc-700 leading-relaxed sm:leading-7 space-y-2 sm:space-y-3 max-w-[620px] mt-2 sm:mt-4">
            {DETAIL.bullets.map((item, i) => (
              <li
                key={i}
                className="relative pl-4 text-[14px] sm:text-[15px] md:text-[16px]"
              >
                <span className="absolute left-0 top-[7px] w-[6px] h-[6px] bg-okmd-cyan rounded-full" />
                {item}
              </li>
            ))}
          </ul>

          {/* download button */}
          <a
            href={DETAIL.pdf}
            className="
              inline-block mt-4 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full
              bg-[#74CEE2] text-white font-semibold text-sm sm:text-base
              hover:bg-[#62bdd3] transition-all duration-300
              shadow-sm hover:shadow-md
            "
          >
            ดาวน์โหลดเอกสาร PDF ขนาด {DETAIL.fileSize}
          </a>

        </div>
      </div>

      {/* ============ RELATED SECTION ============ */}
      <div className="container px-4 sm:px-6 mt-20 sm:mt-24 mb-16">
        <hr className="mb-8 sm:mb-12 border-t border-[#E5E5E5]" />

        <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">Related</h3>

        <div className="grid grid-cols-12 gap-8 sm:gap-10 place-items-center">

          {RELATED.map((item, i) => (
            <div
              key={i}
              className="col-span-6 sm:col-span-6 lg:col-span-3 flex justify-center"
            >
              <div
                className="
                  flex flex-col items-center gap-3 sm:gap-4 cursor-pointer
                  transition-all duration-300
                  hover:scale-[1.04] hover:-translate-y-1
                "
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={200}
                  height={300}
                  className="
                    rounded-xl object-cover
                    w-[140px] sm:w-[180px] lg:w-[200px]
                    h-[210px] sm:h-[260px] lg:h-[300px]
                    shadow-[0px_6px_20px_rgba(0,0,0,0.12)]
                    hover:shadow-[0px_16px_40px_rgba(0,0,0,0.16)]
                    transition-all
                  "
                />

                <div className="text-sm sm:text-base lg:text-lg font-bold text-[#1B1D20] text-center">
                  {item.title}
                </div>

                <div className="text-okmd-cyan text-xs sm:text-sm text-center">
                  ดาวน์โหลดเอกสาร PDF ขนาด {DETAIL.fileSize}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

    </main>
  );
}
