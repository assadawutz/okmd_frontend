"use client";

import Link from "next/link";
import SubHeroBanner from "@/components/ui/SubHeroBanner";
import Button from "@/components/ui/Button";

export default function Donation() {
  return (
    <div className="w-full min-h-screen bg-white pb-20 md:pb-32">
      <SubHeroBanner image="/donation-hero.jpg" height="h-[300px]">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            ร่วม <span className="text-[#74CEE2]">บริจาค</span>
          </h1>
          <p className="text-lg md:text-xl mt-4 text-white/90">
            สนับสนุนการเรียนรู้ เพื่ออนาคตที่ดีกว่า
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
          <span className="text-[#74CEE2]">ร่วมบริจาค</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left Content */}
          <div className="col-span-1 md:col-span-12 lg:col-span-7">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
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
              <ul>
                <li>
                  สนับสนุนสื่อการเรียนรู้สำหรับเด็กและเยาวชนในพื้นที่ห่างไกล
                </li>
                <li>จัดกิจกรรมส่งเสริมทักษะแห่งอนาคต</li>
                <li>พัฒนาแหล่งเรียนรู้ชุมชนให้ได้มาตรฐาน</li>
              </ul>
            </div>

            <div className="bg-[#E8F6FB] rounded-xl p-6 border border-[#16A7CB]/20">
              <h3 className="text-xl font-bold text-[#16A7CB] mb-4">
                สิทธิประโยชน์ทางภาษี
              </h3>
              <p className="text-gray-700">
                การบริจาคให้แก่ OKMD สามารถนำใบเสร็จรับเงินไปลดหย่อนภาษีได้ 2
                เท่า ของยอดบริจาคจริง (ตามประกาศกรมสรรพากร)
              </p>
            </div>
          </div>

          {/* Right Card */}
          <div className="col-span-1 md:col-span-12 lg:col-span-5">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
              <div className="bg-[#16A7CB] p-6 text-white text-center">
                <h3 className="text-2xl font-bold">ช่องทางการบริจาค</h3>
                <p className="opacity-90 mt-2">สะดวกรวดเร็ว ผ่าน QR Code</p>
              </div>

              <div className="p-8 text-center space-y-6">
                <div className="w-48 h-48 bg-gray-200 mx-auto rounded-lg flex items-center justify-center">
                  {/* QR Placeholder */}
                  <span className="text-gray-400 font-bold">E-Donation QR</span>
                </div>

                <div>
                  <p className="text-gray-500 text-sm mb-1">ชื่อบัญชี</p>
                  <p className="text-lg font-bold text-gray-800">
                    สำนักงานบริหารและพัฒนาองค์ความรู้
                  </p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm mb-1">
                    ธนาคาร / เลขที่บัญชี
                  </p>
                  <p className="text-lg font-bold text-gray-800">
                    กรุงไทย / 123-4-56789-0
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <Button className="w-full text-lg py-3 active:scale-95 shadow-md">
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
