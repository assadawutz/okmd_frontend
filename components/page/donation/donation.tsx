"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Donation() {
  return (
    <div className="w-full space-y-8">
      {/* HEADER BLOCK */}
      <div className="w-full h-[250px] md:h-[300px] rounded-3xl overflow-hidden relative shadow-sm">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/donation-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            ร่วม <span className="text-[#74CEE2]">บริจาค</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            สนับสนุนการเรียนรู้ เพื่ออนาคตที่ดีกว่า
          </p>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div className="flex items-center text-sm text-gray-500 px-2">
        <Link href="/" className="hover:text-[#16A7CB] transition-colors">
          หน้าหลัก
        </Link>
        <span className="mx-2">›</span>
        <span className="text-[#16A7CB] font-medium">ร่วมบริจาค</span>
      </div>

      {/* CONTENT GRID */}
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1B1D20] mb-6">
                ทำไมต้องบริจาคให้ OKMD?
              </h2>
              <div className="prose prose-lg text-gray-600 mb-8">
                <p>
                  OKMD หรือ สำนักงานบริหารและพัฒนาองค์ความรู้ (องค์การมหาชน)
                  มุ่งมั่นที่จะสร้างสรรค์สังคมแห่งการเรียนรู้ ผ่านโครงการต่างๆ
                  อาทิ ห้องสมุดมีชีวิต (TK Park), พิพิธภัณฑ์มิวเซียมสยาม
                  และศูนย์สร้างสรรค์งานออกแบบ (TCDC)
                </p>
                <p>เงินบริจาคของท่าน จะถูกนำไปใช้เพื่อ:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    สนับสนุนสื่อการเรียนรู้สำหรับเด็กและเยาวชนในพื้นที่ห่างไกล
                  </li>
                  <li>จัดกิจกรรมส่งเสริมทักษะแห่งอนาคต</li>
                  <li>พัฒนาแหล่งเรียนรู้ชุมชนให้ได้มาตรฐาน</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#E8F6FB] rounded-3xl p-8 border border-[#16A7CB]/20">
              <h3 className="text-xl font-bold text-[#16A7CB] mb-4 flex items-center gap-2">
                <span className="text-2xl">✨</span> สิทธิประโยชน์ทางภาษี
              </h3>
              <p className="text-gray-700">
                การบริจาคให้แก่ OKMD สามารถนำใบเสร็จรับเงินไปลดหย่อนภาษีได้ 2
                เท่า ของยอดบริจาคจริง (ตามประกาศกรมสรรพากร)
              </p>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 sticky top-24">
              <div className="bg-[#16A7CB] p-8 text-white text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                <h3 className="text-2xl font-bold relative z-10">
                  ช่องทางการบริจาค
                </h3>
                <p className="opacity-90 mt-2 relative z-10">
                  สะดวกรวดเร็ว ผ่าน QR Code
                </p>
              </div>

              <div className="p-8 text-center space-y-8">
                <div className="w-56 h-56 bg-white mx-auto rounded-xl flex items-center justify-center shadow-inner border border-gray-200">
                  {/* QR Placeholder */}
                  <div className="text-center">
                    <div className="text-4xl mb-2">📱</div>
                    <span className="text-gray-400 font-bold block">
                      E-Donation QR
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400 text-sm mb-1 uppercase tracking-wider">
                      ชื่อบัญชี
                    </p>
                    <p className="text-lg font-bold text-[#1B1D20]">
                      สำนักงานบริหารและพัฒนาองค์ความรู้
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1 uppercase tracking-wider">
                      ธนาคาร / เลขที่บัญชี
                    </p>
                    <p className="text-lg font-bold text-[#1B1D20]">
                      กรุงไทย <span className="mx-2 text-gray-300">|</span>{" "}
                      123-4-56789-0
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <Button className="w-full text-lg py-4 rounded-xl shadow-lg shadow-[#16A7CB]/20">
                    แจ้งหลักฐานการโอนเงิน
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
