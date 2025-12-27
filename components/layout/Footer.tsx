"use client";

import Image from "next/image";
import Link from "next/link";

const COLUMN_1 = [
  { label: "คำรับรองการปฏิบัติงาน", href: "/about-okmd/acceptance" },
  { label: "การกำกับดูแลกิจการ", href: "/about-okmd/governance" },
  { label: "รายงาน", href: "/about-okmd/reports" },
  { label: "ศูนย์ข้อมูลข่าวสารอิเล็กทรอนิกส์ของ สบร.", href: "/about-okmd/e-info-center" },
  { label: "คู่มือ / แนวทางการปฏิบัติงาน", href: "/about-okmd/manuals-guidelines" },
  { label: "การเปิดเผยข้อมูลสาธารณะ", href: "/about-okmd/public-disclosure" },
];

const COLUMN_2 = [
  { label: "ประกาศจัดซื้อจัดจ้าง", href: "/procurement" },
  { label: "สมัครงาน", href: "/career" },
  { label: "นโยบายคุ้มครองข้อมูลส่วนบุคคล", href: "/pdpa" },
  { label: "ประกาศจัดซื้อจัดจ้าง", href: "/contract" },
];

const COLUMN_3 = [
  { label: "จัดซื้อจัดจ้าง", href: "/procurement" },
  { label: "สมัครงาน", href: "/career" },
  { label: "ฝึกงาน", href: "/career" },
];

const SOCIAL_ICONS = [
  { id: 1, src: "/ic-1.png", alt: "Facebook", href: "#" },
  { id: 2, src: "/ic-2.png", alt: "Line", href: "#" },
  { id: 3, src: "/ic-3.png", alt: "YouTube", href: "#" },
  { id: 4, src: "/ic-4.png", alt: "TikTok", href: "#" },
  { id: 5, src: "/ic-5.png", alt: "Instagram", href: "#" },
  { id: 6, src: "/ic-6.png", alt: "Twitter/X", href: "#" },
];

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
      <div className="relative z-10 w-full flex justify-center">
        <div className="w-full container mx-auto px-6 lg:px-10 pt-14 pb-10">

          {/* ===================================================== */}
          {/* TOP BLOCK */}
          {/* ===================================================== */}
          <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16 mb-12">

            {/* LEFT BLOCK */}
            <div className="flex flex-col lg:max-w-[500px]">

              <Link href="/" aria-label="OKMD Home">
                <Image
                  src="/okmd_white.png"
                  alt="OKMD Logo"
                  width={160}
                  height={80}
                  className="object-contain mb-5 transition-all duration-300 hover:scale-[1.02]"
                  priority
                />
              </Link>

              <h2 className="font-bold text-[28px] sm:text-[36px] md:text-[44px] leading-[1.15] mb-5">
                Office of Knowledge<br />
                Management and<br />
                Development
              </h2>

              <address className="not-italic text-[15px] leading-relaxed text-white/90">
                โทรศัพท์ : 0 2105 6500<br />
                อีเมล : <a href="mailto:saraban@okmd.or.th" className="hover:underline">saraban@okmd.or.th</a>
              </address>
            </div>

            {/* RIGHT BLOCK */}
            <div className="flex flex-col">

              <h3 className="font-bold text-[18px] mb-4">ช่องทางติดตาม</h3>

              {/* SOCIAL ICONS */}
              <ul className="flex gap-4 mb-6 items-center list-none m-0 p-0">
                {SOCIAL_ICONS.map((icon) => (
                  <li key={icon.id}>
                    <a
                      href={icon.href}
                      aria-label={icon.alt}
                      className="block transition-all duration-300 hover:scale-110"
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
                    px-5 py-2.5 bg-white/20 hover:bg-white/30
                    rounded-lg border border-white
                    text-white text-[14px] font-medium w-fit
                    transition-all duration-300
                    hover:scale-[1.02]
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
            <nav aria-label="ลิงก์ด่วน 1">
              <ul className="space-y-2.5 text-[14px] leading-[1.7]">
                {COLUMN_1.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
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
            <nav aria-label="ลิงก์ด่วน 2">
              <ul className="space-y-2.5 text-[14px] leading-[1.7]">
                {COLUMN_2.map((item, idx) => (
                  <li key={`${item.label}-${idx}`}>
                    <Link
                      href={item.href}
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
            <nav aria-label="ลิงก์ด่วน 3">
              <ul className="space-y-2.5 text-[14px] leading-[1.7]">
                {COLUMN_3.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
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
            <p className="text-center md:text-left leading-relaxed text-white/80">
              ลิขสิทธิ์ © 2547 - 2568 OKMD สำนักงานบริหารและพัฒนาองค์ความรู้ (องค์การมหาชน) สงวนลิขสิทธิ์
            </p>

            <div className="flex flex-wrap gap-4 text-white/80">
              {[
                { label: "จัดซื้อจัดจ้าง", href: "/procurement" },
                { label: "แผนผังเว็บ", href: "#" },
                { label: "นโยบายการใช้คุกกี้", href: "/pdpa" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
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
