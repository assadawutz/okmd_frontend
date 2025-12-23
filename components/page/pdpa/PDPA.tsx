"use client";

import Link from "next/link";
import SubHeroBanner from "@/components/ui/SubHeroBanner";
import Button from "@/components/ui/Button";

export default function PDPA() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Banner */}
      <SubHeroBanner image="/pdpa-hero.jpg" height="h-[300px]">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            นโยบาย <span className="text-[#74CEE2]">ความเป็นส่วนตัว</span>
          </h1>
          <p className="text-xl mt-4 text-white/90">
            ข้อมูลเกี่ยวกับการคุ้มครองข้อมูลส่วนบุคคลตามกฎหมาย PDPA
          </p>
        </div>
      </SubHeroBanner>

      {/* Breadcrumb */}
      <div className="container mx-auto pt-4 sm:pt-6 md:pt-8 mb-4 sm:mb-6 md:mb-8">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="text-sm sm:text-base md:text-lg text-gray-500 font-medium">
              <Link href="/" className="hover:underline">
                หน้าหลัก
              </Link>
              {" > "}
              <span className="text-[#74CEE2]">นโยบายความเป็นส่วนตัว</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto pb-8 sm:pb-12 md:pb-16">
        <div className="grid grid-cols-12 gap-4 sm:gap-6 md:gap-8">
          {/* Main Content */}
          <div className="col-span-12 lg:col-span-8">
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-5 md:space-y-6">
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                  นโยบายความเป็นส่วนตัว
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  สำนักงานบริหารและพัฒนาองค์ความรู้ (องค์การมหาชน) หรือ OKMD
                  ให้ความสำคัญกับการคุ้มครองข้อมูลส่วนบุคคลของท่าน
                  นโยบายนี้อธิบายถึงวิธีการที่เรารวบรวม ใช้
                  และปกป้องข้อมูลส่วนบุคคลของท่าน
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  1. ข้อมูลที่เรารวบรวม
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>ข้อมูลส่วนบุคคล เช่น ชื่อ นามสกุล อีเมล เบอร์โทรศัพท์</li>
                  <li>ข้อมูลการใช้งานเว็บไซต์</li>
                  <li>ข้อมูลการติดต่อและคำขอ</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  2. วัตถุประสงค์ในการใช้ข้อมูล
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>เพื่อให้บริการและตอบสนองต่อคำขอของท่าน</li>
                  <li>เพื่อปรับปรุงบริการและประสบการณ์การใช้งาน</li>
                  <li>เพื่อส่งข้อมูลข่าวสารและอัปเดตที่เกี่ยวข้อง</li>
                  <li>เพื่อปฏิบัติตามกฎหมายและข้อบังคับ</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  3. การเปิดเผยข้อมูล
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  เราจะไม่เปิดเผยข้อมูลส่วนบุคคลของท่านให้กับบุคคลที่สาม
                  เว้นแต่ได้รับความยินยอมจากท่าน
                  หรือตามที่กฎหมายกำหนด
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  4. สิทธิของท่าน
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  ตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล ท่านมีสิทธิ:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>ขอเข้าถึงข้อมูลส่วนบุคคลของท่าน</li>
                  <li>ขอแก้ไขข้อมูลส่วนบุคคล</li>
                  <li>ขอลบข้อมูลส่วนบุคคล</li>
                  <li>ขอระงับการประมวลผลข้อมูล</li>
                  <li>คัดค้านการประมวลผลข้อมูล</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  5. การติดต่อ
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  หากท่านมีคำถามหรือต้องการใช้สิทธิตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล
                  กรุณาติดต่อ:
                </p>
                <div className="bg-gray-50 rounded-lg p-4 mt-4">
                  <p className="text-gray-700">
                    <strong>สำนักงานบริหารและพัฒนาองค์ความรู้ (องค์การมหาชน)</strong>
                    <br />
                    ที่อยู่: 69/18–19 อาคารวิทยบริการวิทยาลัยกรุงเทพ ชั้น 18
                    <br />
                    ถนนวิภาวดีรังสิต แขวงลาดยาว เขตจตุจักร กรุงเทพมหานคร 10900
                    <br />
                    โทร: 02-105-6552
                    <br />
                    อีเมล: privacy@okmd.or.th
                  </p>
                </div>
              </section>

              <section>
                <p className="text-gray-600 text-sm">
                  อัปเดตล่าสุด: 15 มกราคม 2568
                </p>
              </section>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-span-12 lg:col-span-4">
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-5 md:p-6 sticky top-4 sm:top-6 md:top-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                เอกสารที่เกี่ยวข้อง
              </h3>
              <div className="space-y-3">
                <Link
                  href="#"
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <p className="font-semibold text-gray-800">
                    นโยบายความเป็นส่วนตัว (PDF)
                  </p>
                  <p className="text-sm text-gray-600 mt-1">ดาวน์โหลด</p>
                </Link>
                <Link
                  href="#"
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <p className="font-semibold text-gray-800">
                    คู่มือการใช้งานสิทธิ (PDF)
                  </p>
                  <p className="text-sm text-gray-600 mt-1">ดาวน์โหลด</p>
                </Link>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-2">
                  ติดต่อสอบถาม
                </h4>
                <p className="text-gray-600 text-sm">
                  privacy@okmd.or.th
                  <br />
                  02-105-6552
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

