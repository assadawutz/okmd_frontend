"use client";

import Link from "next/link";
import SubHeroBanner from "@/components/ui/SubHeroBanner";
import Button from "@/components/ui/Button";
import { FaFileDownload, FaArrowLeft } from "react-icons/fa";

export default function ContractDetail() {
  return (
    <div className="w-full min-h-screen bg-white pb-20 md:pb-32">
      {/* Hero - Reused from Listing */}
      <SubHeroBanner image="/contract-hero.jpg" height="h-[300px]">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            สัญญา <span className="text-[#74CEE2]">และข้อตกลง</span>
          </h1>
          <p className="text-lg md:text-xl mt-4 text-white/90">
            รายละเอียดสัญญาจัดซื้อจัดจ้าง
          </p>
        </div>
      </SubHeroBanner>

      {/* Breadcrumb */}
      <div className="border-b border-zinc-200 bg-white">
        <div className="container mx-auto px-4 h-16 md:h-20 flex items-center text-sm md:text-base text-gray-600">
          <Link
            href="/"
            className="hover:text-[#74CEE2] cursor-pointer transition"
          >
            หน้าหลัก
          </Link>
          <span className="mx-2">›</span>
          <Link
            href="/contract"
            className="hover:text-[#74CEE2] cursor-pointer transition"
          >
            สัญญาและข้อตกลง
          </Link>
          <span className="mx-2">›</span>
          <span className="text-[#74CEE2] truncate max-w-[200px] md:max-w-md">
            สัญญาจ้างพัฒนาระบบสารสนเทศ...
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-lg text-sm font-semibold">
                กำลังดำเนินการ (Active)
              </span>
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-sm font-semibold">
                ปี 2568
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 leading-relaxed">
              สัญญาจ้างพัฒนาระบบสารสนเทศ และบำรุงรักษาเว็บไซต์ OKMD
              ประจำปีงบประมาณ 2568
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 bg-[#F8FAFC] p-6 rounded-xl border border-gray-100">
              <div>
                <p className="text-gray-500 text-sm mb-1">เลขที่สัญญา</p>
                <p className="text-lg font-semibold text-gray-800">
                  OKMD-2024-001
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-1">วันที่ลงนาม</p>
                <p className="text-lg font-semibold text-gray-800">
                  15 มกราคม 2568
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-1">
                  คู่สัญญา (ผู้รับจ้าง)
                </p>
                <p className="text-lg font-semibold text-gray-800">
                  บริษัท เทคโนโลยี จำกัด
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-1">วงเงินสัญญา</p>
                <p className="text-xl font-bold text-[#16A7CB]">
                  2,500,000 บาท
                </p>
              </div>
            </div>

            <div className="prose prose-lg text-gray-600 max-w-none mb-10">
              <h3 className="text-gray-800">สาระสำคัญของสัญญา</h3>
              <p>
                จ้างเหมาระบบสารสนเทศเพื่อรองรับการทำงานแบบ Digital Workplace
                รวมถึงการปรับปรุงโครงสร้างความปลอดภัย (Security)
                และการสำรองข้อมูล (Backup) ให้มีประสิทธิภาพตามมาตรฐาน ISO 27001
              </p>
              <p>ระยะเวลาดำเนินการ: 365 วัน (15 ม.ค. 68 - 14 ม.ค. 69)</p>
            </div>

            <div className="border-t border-gray-100 pt-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                เอกสารแนบ
              </h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-[#16A7CB] hover:bg-[#E8F6FB] transition-all group cursor-pointer active:scale-98">
                  <div className="flex items-center gap-4">
                    <div className="bg-red-100 text-red-500 p-3 rounded-lg">
                      <FaFileDownload size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700 group-hover:text-[#16A7CB]">
                        ร่างสัญญาฉบับสมบูรณ์.pdf
                      </p>
                      <p className="text-xs text-gray-500">ขนาดไฟล์: 1.2 MB</p>
                    </div>
                  </div>
                  <span className="text-[#16A7CB] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    ดาวน์โหลด
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-[#16A7CB] hover:bg-[#E8F6FB] transition-all group cursor-pointer active:scale-98">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 text-blue-500 p-3 rounded-lg">
                      <FaFileDownload size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700 group-hover:text-[#16A7CB]">
                        เอกสารขอบเขตงาน (TOR).pdf
                      </p>
                      <p className="text-xs text-gray-500">ขนาดไฟล์: 850 KB</p>
                    </div>
                  </div>
                  <span className="text-[#16A7CB] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    ดาวน์โหลด
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 border-t border-gray-100 flex justify-between items-center">
            <Link href="/contract">
              <Button variant="outline" className="flex items-center gap-2">
                <FaArrowLeft /> ย้อนกลับ
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
