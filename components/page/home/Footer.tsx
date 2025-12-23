"use client";

import Image from "next/image";
import Link from "next/link";

const ABOUT = [
  "รู้จัก OKMD",
  "ข่าวองค์กร",
  "รายงานผลการดำเนินการรายสัปดาห์",
  "ศูนย์ข้อมูลข่าวสารอิเล็กทรอมิกส์ของ สนธ.",
  "ประกาศจัดซื้อจัดจ้าง",
  "สมัครงาน",
  "นโยบายคุ้มครองข้อมูลส่วนบุคคล",
];

const SHELF = [
  "OKMD Knowledge Festival",
  "OKMD Forum",
  "Brain-Based Learning",
  "Modern Thai Silk",
  "ศูนย์ความรู้กินได้",
  "ส่อง.โอกาส.สร้าง.อาชีพ",
  "นิตยสาร OKMD กระตุกต่อมคิด",
];

const OTHERS = [
  "Infographic",
  "OKMD TV",
  "OKMD แนะนำหนังสือดี",
  "ศูนย์ช่วยเหลือ",
  "ศูนย์ดาวน์โหลด",
  "เรื่องร้องเรียน",
  "ติดต่อเรา",
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
          className="object-cover opacity-70 pointer-events-none"
          priority
        />
      </div>

      {/* GLOBAL CONTAINER */}
      <div className="relative z-10 w-full flex justify-center">
        <div className="w-full container mx-auto px-6 lg:px-10 pt-16 pb-14">

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
                  width={200}
                  height={120}
                  className="
                    object-contain mb-6 
                    transition-all duration-300 
                    hover:scale-[1.04] 
                    hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]
                  "
                  priority
                />
              </a>

              <h2 className="font-bold text-[34px] sm:text-[44px] md:text-[56px] leading-[1.1] mb-6 whitespace-pre-line">
                Office of Knowledge{"\n"}
                Management and{"\n"}
                Development
              </h2>

              <address className="not-italic text-[17px] leading-relaxed">
                โทรศัพท์ : 0 2105 6500
                <br />
                อีเมล : <a href="mailto:saraban@okmd.or.th" className="underline">saraban@okmd.or.th</a>
              </address>
            </div>

            {/* RIGHT BLOCK */}
            <div className="flex flex-col flex-1 max-w-[420px]">

              <h3 className="font-bold text-[20px] mb-4">ช่องทางติดตาม</h3>

              {/* SOCIAL ICONS */}
              <ul className="flex gap-6 mb-8 items-center list-none m-0 p-0">
                {[1,2,3,4,5,6].map((i) => (
                  <li key={i}>
                    <button
                      type="button"
                      aria-label={`social icon ${i}`}
                      className="transition-all duration-300 hover:scale-125"
                    >
                      <Image
                        src={`/ic-${i}.png`}
                        alt=""
                        width={28}
                        height={28}
                        className="w-7 h-7"
                      />
                    </button>
                  </li>
                ))}
              </ul>

              <Link href="/complaint" >
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
              gap-12 
              border-t border-white/40 
              pt-12 pb-10
            "
          >

            {/* Column 1 */}
            <nav aria-label="เกี่ยวกับ OKMD">
              <h3 className="font-bold mb-3 text-[20px]">เกี่ยวกับ OKMD</h3>
              <ul className="space-y-2 text-[16px] leading-[1.65]">
                {ABOUT.map((i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="
                        transition-all duration-300
                        hover:translate-x-1
                        hover:text-white
                        hover:underline underline-offset-4
                        cursor-pointer
                      "
                    >
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Column 2 */}
            <nav aria-label="OKMD Shelf">
              <h3 className="font-bold mb-3 text-[20px]">OKMD Shelf</h3>
              <ul className="space-y-2 text-[16px] leading-[1.65]">
                {SHELF.map((i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="
                        transition-all duration-300
                        hover:translate-x-1
                        hover:text-white
                        hover:underline underline-offset-4
                      "
                    >
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Column 3 */}
            <nav aria-label="อื่นๆ">
              <h3 className="font-bold mb-3 text-[20px]">อื่นๆ</h3>
              <ul className="space-y-2 text-[16px] leading-[1.65]">
                {OTHERS.map((i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="
                        transition-all duration-300
                        hover:translate-x-1
                        hover:text-white
                        hover:underline underline-offset-4
                      "
                    >
                      {i}
                    </a>
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
              gap-4 
              border-t border-white/40 
              pt-6 
              text-[15px]
            "
          >
            <p className="text-center md:text-left leading-relaxed">
              ลิขสิทธิ์ © 2547 - 2568 OKMD สำนักงานบริหารและพัฒนาองค์ความรู้ (องค์การมหาชน) สงวนสิทธิ์
            </p>

            <div className="flex flex-wrap gap-4 text-white/95">
              {[
                "จัดซื้อจัดจ้าง",
                "สำนักนายกรัฐมนตรี",
                "แผนผังเว็บ",
                "นโยบายการใช้คุกกี้"
              ].map((i) => (
                <a
                  key={i}
                  href="#"
                  className="
                    underline underline-offset-4
                    hover:text-white
                    hover:opacity-100
                    opacity-90
                    transition-all duration-300
                  "
                >
                  {i}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
