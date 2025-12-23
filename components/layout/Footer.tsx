"use client";

import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="mt-20 bg-[#16A7CB] text-white py-16">
      <div className="container mx-auto px-6 lg:px-10 grid grid-cols-12 gap-10">

        {/* COL 1 */}
        <div className="col-span-12 md:col-span-4 space-y-4">
          <h3 className="text-xl font-bold">OKMD</h3>
          <p className="text-sm leading-6">
            สำนักงานบริหารและพัฒนาองค์ความรู้ (องค์การมหาชน)
            หน่วยงานส่งเสริมการเรียนรู้ตลอดชีวิต
          </p>
          <div className="text-sm">© OKMD 2025</div>
        </div>

        {/* COL 2 */}
        <div className="col-span-12 md:col-span-4 space-y-2">
          <h4 className="text-lg font-semibold mb-3">หมวดหมู่</h4>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:underline">รู้จัก OKMD</Link></li>
            <li><Link href="#" className="hover:underline">ตู้ความรู้</Link></li>
            <li><Link href="#" className="hover:underline">ข่าวและกิจกรรม</Link></li>
            <li><Link href="#" className="hover:underline">ปฏิทินกิจกรรม</Link></li>
          </ul>
        </div>

        {/* COL 3 */}
        <div className="col-span-12 md:col-span-4 space-y-2">
          <h4 className="text-lg font-semibold mb-3">อื่น ๆ</h4>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:underline">นโยบายความเป็นส่วนตัว</Link></li>
            <li><Link href="#" className="hover:underline">ติดต่อเรา</Link></li>
            <li><Link href="#" className="hover:underline">ดาวน์โหลดเอกสาร</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
