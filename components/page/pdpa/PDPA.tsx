"use client";

import Link from "next/link";

export default function PDPA() {
  return (
    <div className="w-full space-y-8">
      {/* HEADER BLOCK */}
      <div className="w-full h-[250px] md:h-[300px] rounded-3xl overflow-hidden relative shadow-sm">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/pdpa-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            นโยบาย <span className="text-[#74CEE2]">ความเป็นส่วนตัว</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            ข้อมูลเกี่ยวกับการคุ้มครองข้อมูลส่วนบุคคลตามกฎหมาย PDPA
          </p>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div className="flex items-center text-sm text-gray-500 px-2">
        <Link href="/" className="hover:text-[#16A7CB] transition-colors">
          หน้าหลัก
        </Link>
        <span className="mx-2">›</span>
        <span className="text-[#16A7CB] font-medium">
          นโยบายความเป็นส่วนตัว
        </span>
      </div>

      {/* CONTENT & SIDEBAR */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content (Left, larger) */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-[#1B1D20] mb-4 border-l-4 border-[#16A7CB] pl-4">
                นโยบายความเป็นส่วนตัว
              </h2>
              <p className="text-gray-600 leading-relaxed">
                สำนักงานบริหารและพัฒนาองค์ความรู้ (องค์การมหาชน) หรือ OKMD
                ให้ความสำคัญกับการคุ้มครองข้อมูลส่วนบุคคลของท่าน
                นโยบายนี้อธิบายถึงวิธีการที่เรารวบรวม ใช้
                และปกป้องข้อมูลส่วนบุคคลของท่าน
              </p>
            </section>

            <div className="h-px bg-gray-100 w-full" />

            <section className="space-y-4">
              <h3 className="text-xl font-bold text-[#1B1D20]">
                1. ข้อมูลที่เรารวบรวม
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>ข้อมูลส่วนบุคคล เช่น ชื่อ นามสกุล อีเมล เบอร์โทรศัพท์</li>
                <li>ข้อมูลการใช้งานเว็บไซต์</li>
                <li>ข้อมูลการติดต่อและคำขอ</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold text-[#1B1D20]">
                2. วัตถุประสงค์ในการใช้ข้อมูล
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>เพื่อให้บริการและตอบสนองต่อคำขอของท่าน</li>
                <li>เพื่อปรับปรุงบริการและประสบการณ์การใช้งาน</li>
                <li>เพื่อส่งข้อมูลข่าวสารและอัปเดตที่เกี่ยวข้อง</li>
                <li>เพื่อปฏิบัติตามกฎหมายและข้อบังคับ</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold text-[#1B1D20]">
                3. การเปิดเผยข้อมูล
              </h3>
              <p className="text-gray-600 leading-relaxed">
                เราจะไม่เปิดเผยข้อมูลส่วนบุคคลของท่านให้กับบุคคลที่สาม
                เว้นแต่ได้รับความยินยอมจากท่าน หรือตามที่กฎหมายกำหนด
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold text-[#1B1D20]">
                4. สิทธิของท่าน
              </h3>
              <p className="text-gray-600 leading-relaxed">
                ตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล ท่านมีสิทธิ:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>ขอเข้าถึงข้อมูลส่วนบุคคลของท่าน</li>
                <li>ขอแก้ไขข้อมูลส่วนบุคคล</li>
                <li>ขอลบข้อมูลส่วนบุคคล</li>
                <li>ขอระงับการประมวลผลข้อมูล</li>
                <li>คัดค้านการประมวลผลข้อมูล</li>
              </ul>
            </section>

            <div className="bg-[#E8F6FB] rounded-2xl p-6 border border-[#16A7CB]/20">
              <h3 className="text-xl font-bold text-[#16A7CB] mb-4">
                5. การติดต่อ
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                หากท่านมีคำถามหรือต้องการใช้สิทธิตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล
                กรุณาติดต่อ:
              </p>
              <div className="bg-white/80 rounded-xl p-4">
                <p className="text-gray-700 font-medium">
                  สำนักงานบริหารและพัฒนาองค์ความรู้ (องค์การมหาชน)
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  69/18–19 อาคารวิทยบริการวิทยาลัยกรุงเทพ ชั้น 18
                  <br />
                  ถนนวิภาวดีรังสิต แขวงลาดยาว เขตจตุจักร กรุงเทพมหานคร 10900
                </p>
                <div className="mt-4 flex flex-col sm:flex-row gap-4">
                  <span className="text-[#16A7CB] font-medium">
                    โทร: 02-105-6552
                  </span>
                  <span className="text-[#16A7CB] font-medium">
                    อีเมล: privacy@okmd.or.th
                  </span>
                </div>
              </div>
            </div>

            <p className="text-gray-400 text-sm text-right">
              อัปเดตล่าสุด: 15 มกราคม 2568
            </p>
          </div>
        </div>

        {/* Sidebar (Right, sticky) */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 sticky top-24 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#1B1D20] mb-4">
                เอกสารที่เกี่ยวข้อง
              </h3>
              <div className="space-y-3">
                <Link
                  href="#"
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-[#E8F6FB] hover:text-[#16A7CB] transition-all group border border-gray-100 hover:border-[#16A7CB]/30"
                >
                  <div className="text-2xl">📄</div>
                  <div>
                    <p className="font-semibold text-gray-800 group-hover:text-[#16A7CB] transaction-colors text-sm">
                      นโยบายความเป็นส่วนตัว (PDF)
                    </p>
                    <p className="text-xs text-gray-400 mt-1">ดาวน์โหลด</p>
                  </div>
                </Link>

                <Link
                  href="#"
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-[#E8F6FB] hover:text-[#16A7CB] transition-all group border border-gray-100 hover:border-[#16A7CB]/30"
                >
                  <div className="text-2xl">📘</div>
                  <div>
                    <p className="font-semibold text-gray-800 group-hover:text-[#16A7CB] transaction-colors text-sm">
                      คู่มือการใช้งานสิทธิ (PDF)
                    </p>
                    <p className="text-xs text-gray-400 mt-1">ดาวน์โหลด</p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <h4 className="font-semibold text-gray-800 mb-2">
                สอบถามข้อมูลเพิ่มเติม
              </h4>
              <p className="text-gray-500 text-sm">
                หากมีข้อสงสัยเกี่ยวกับนโยบายความเป็นส่วนตัว
                สามารถติดต่อเราได้ทันที
              </p>
              <Link
                href="/contact"
                className="mt-4 block w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 text-center rounded-lg text-sm transition-colors"
              >
                ติดต่อเรา
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
