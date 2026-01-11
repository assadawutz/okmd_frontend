"use client";

import Image from "next/image";
import Link from "next/link";

const ABOUT = [
  "ค้นรับองการปฏิบัติงาน",
  "การกำกับดูแลกิจการ",
  "แผนการดำเนินงาน",
  "เอกสารและระงาน",
  "ศูนย์ข้อมูลข่าวสารอิเล็กทรอนิกส์ของ สบธ.",
  "คู่มือ / แนวทางการปฏิบัติงาน",
  "ข้อมูลสาธารณะเพื่อยอยจองกิจการ",
];

const SHELF = ["OKMD AI", "OKMD Knowledge Portal", "OKMD Magazine"];

const OTHERS = ["จัดซื้อจัดจ้าง", "สมัครงาน", "ฝึกงาน"];

export default function Footer() {
  return (
    <footer
      aria-label="OKMD Footer"
      className="relative w-full bg-[#16A7CB] text-white overflow-hidden"
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/bg_footer.png"
          alt=""
          fill
          role="presentation"
          className="object-cover opacity-60 pointer-events-none"
          priority
        />
      </div>

      {/* GLOBAL CONTAINER */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 pt-16 pb-14">
          {/* ===================================================== */}
          {/* TOP BLOCK */}
          {/* ===================================================== */}
          <div className="flex flex-col md:flex-row justify-between gap-16 mb-16">
            {/* LEFT BLOCK */}
            <div className="flex flex-col md:max-w-[480px] flex-1">
              <a href="/" aria-label="OKMD Home">
                <Image
                  src="/okmd_white.png"
                  alt="OKMD Logo"
                  width={160}
                  height={80}
                  className="object-contain mb-5 transition-all duration-300 hover:scale-[1.02]"
                  priority
                />
              </a>

              <h2 className="font-bold text-[28px] sm:text-[36px] md:text-[44px] leading-[1.15] mb-5">
                Office of Knowledge<br />
                Management and<br />
                Development
              </h2>

              <address className="not-italic text-[17px] leading-relaxed">
                โทรศัพท์ : 0 2105 6500
                <br />
                อีเมล :{" "}
                <a href="mailto:saraban@okmd.or.th" className="underline">
                  saraban@okmd.or.th
                </a>
              </address>
            </div>

            {/* RIGHT BLOCK */}
            <div className="flex flex-col flex-1 max-w-[420px]">
              <h3 className="font-bold text-[20px] mb-4">ช่องทางติดตาม</h3>

              {/* SOCIAL ICONS */}
              <ul className="flex gap-6 mb-8 items-center list-none m-0 p-0">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <li key={i}>
                    <button
                      type="button"
                      aria-label={`social icon ${i}`}
                      className="transition-all duration-300 hover:scale-125"
                    >
                      <Image
                        src={icon.src}
                        alt={icon.alt}
                        width={28}
                        height={28}
                        className="w-7 h-7"
                      />
                    </a>
                  </li>
                ))}
              </ul>

              <Link href="/complaint">
                <button
                  type="button"
                  className="
                  px-6 py-3 bg-white/20 hover:bg-white/30
                  rounded-[12px] border border-white
                  text-white text-[16px] w-fit
                  transition-all duration-300
                  hover:scale-[1.03]
                "
                >
                  รับเรื่องร้องเรียน
                </button>
              </Link>
            </div>
          </div>

          {/* ===================================================== */}
          {/* MID COLUMNS */}
          {/* ===================================================== */}
          <div
            className="
              grid 
              grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
              gap-8 md:gap-10 
              border-t border-white/30 
              pt-10 pb-8
            "
          >
            {/* Column 1 */}
            <nav aria-label="การรองการปฏิบัติงาน">
              <h3 className="font-bold mb-3 text-[20px]">
                ค้นรับองการปฏิบัติงาน
              </h3>
              <ul className="space-y-2 text-[16px] leading-[1.65]">
                {ABOUT.map((i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="
                        transition-all duration-200
                        hover:translate-x-1
                        hover:text-white
                        text-white/90
                        hover:underline underline-offset-4
                        inline-block
                      "
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Column 2 */}
            <nav aria-label="OKMD">
              <ul className="space-y-2 text-[16px] leading-[1.65]">
                {SHELF.map((i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="
                        transition-all duration-200
                        hover:translate-x-1
                        hover:text-white
                        text-white/90
                        hover:underline underline-offset-4
                        inline-block
                      "
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Column 3 */}
            <nav aria-label="บริการ">
              <ul className="space-y-2 text-[16px] leading-[1.65]">
                {OTHERS.map((i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="
                        transition-all duration-200
                        hover:translate-x-1
                        hover:text-white
                        text-white/90
                        hover:underline underline-offset-4
                        inline-block
                      "
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* ===================================================== */}
          {/* BOTTOM */}
          {/* ===================================================== */}
          <div
            className="
              flex flex-col md:flex-row 
              justify-between items-center 
              gap-3 
              border-t border-white/30 
              pt-5 
              text-[13px]
            "
          >
            <p className="text-center md:text-left leading-relaxed">
              ลิขสิทธิ์ © 2547 - 2568 OKMD สำนักงานบริหารและพัฒนาองค์ความรู้
              (องค์การมหาชน) สงวนสิทธิ์
            </p>

            <div className="flex flex-wrap gap-4 text-white/80">
              {[
                "นโยบายการใช้คุกกี้",
                "แผนผังเว็บ",
                "นโยบายคมบรม้งสอคานิส่วนกตัม",
              ].map((i) => (
                <a
                  key={i}
                  href="#"
                  className="
                    hover:text-white
                    hover:underline underline-offset-4
                    transition-all duration-200
                  "
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
