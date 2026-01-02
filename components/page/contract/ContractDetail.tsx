"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import { FaFileDownload, FaArrowLeft } from "react-icons/fa";
import { ChevronLeft } from "lucide-react";

export default function ContractDetail() {
  return (
    <div className="w-full space-y-8">
      {/* HEADER BLOCK */}
      <div className="w-full h-[250px] md:h-[300px] rounded-3xl overflow-hidden relative shadow-sm">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/contract-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 max-w-4xl">
            สัญญาจ้างพัฒนาระบบสารสนเทศ และบำรุงรักษาเว็บไซต์ OKMD
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            รายละเอียดสัญญาจัดซื้อจัดจ้าง
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-500 px-2 gap-2">
        <Link href="/" className="hover:text-[#16A7CB] transition-colors">
          หน้าหลัก
        </Link>
        <span>›</span>
        <Link
          href="/contract"
          className="hover:text-[#16A7CB] transition-colors"
        >
          สัญญาและข้อตกลง
        </Link>
        <span>›</span>
        <span className="text-[#16A7CB] font-medium truncate max-w-[150px] md:max-w-none">
          รายละเอียดสัญญา
        </span>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="col-span-1 md:col-span-12 lg:col-span-8 lg:col-start-3">
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
            <div className="p-8 md:p-10 space-y-8">
              {/* Status Badge & Meta */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-6">
                <span className="px-4 py-2 rounded-full bg-green-50 text-green-600 border border-green-100 text-sm font-bold">
                  ● กำลังดำเนินการ (Active)
                </span>
                <div className="text-gray-500 font-medium">
                  ประจำปีงบประมาณ{" "}
                  <span className="text-[#1B1D20] font-bold">2568</span>
                </div>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#F8FAFC] p-6 rounded-2xl border border-gray-100">
                <div className="space-y-1">
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
                    เลขที่สัญญา
                  </p>
                  <p className="text-lg font-bold text-[#1B1D20]">
                    OKMD-2024-001
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
                    วันที่ลงนาม
                  </p>
                  <p className="text-lg font-bold text-[#1B1D20]">
                    15 มกราคม 2568
                  </p>
                </div>
                <div className="space-y-1 md:col-span-2">
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
                    คู่สัญญา (ผู้รับจ้าง)
                  </p>
                  <p className="text-lg font-bold text-[#1B1D20]">
                    บริษัท เทคโนโลยี จำกัด
                  </p>
                </div>
                <div className="space-y-1 md:col-span-2">
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
                    วงเงินสัญญา
                  </p>
                  <p className="text-2xl font-bold text-[#16A7CB]">
                    2,500,000 บาท
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="prose prose-lg text-gray-600 max-w-none">
                <h3 className="text-[#1B1D20] font-bold text-xl mb-4">
                  สาระสำคัญของสัญญา
                </h3>
                <p className="leading-relaxed">
                  จ้างเหมาระบบสารสนเทศเพื่อรองรับการทำงานแบบ Digital Workplace
                  รวมถึงการปรับปรุงโครงสร้างความปลอดภัย (Security)
                  และการสำรองข้อมูล (Backup) ให้มีประสิทธิภาพตามมาตรฐาน ISO
                  27001
                </p>
                <p className="font-medium text-[#16A7CB]">
                  ระยะเวลาดำเนินการ: 365 วัน (15 ม.ค. 68 - 14 ม.ค. 69)
                </p>
              </div>

              {/* Downloads */}
              <div className="space-y-4 pt-6 border-t border-gray-100">
                <h3 className="text-[#1B1D20] font-bold text-lg mb-4">
                  เอกสารแนบ
                </h3>
                <div className="grid gap-3">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#16A7CB] hover:bg-[#E8F6FB]/30 transition-all group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="bg-red-50 text-red-500 p-3 rounded-xl group-hover:bg-red-100 transition-colors">
                        <FaFileDownload size={20} />
                      </div>
                      <div>
                        <p className="font-bold text-gray-700 group-hover:text-[#16A7CB] transition-colors">
                          ร่างสัญญาฉบับสมบูรณ์.pdf
                        </p>
                        <p className="text-xs text-gray-400">1.2 MB</p>
                      </div>
                    </div>
                    <span className="text-[#16A7CB] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                      ดาวน์โหลด
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#16A7CB] hover:bg-[#E8F6FB]/30 transition-all group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-50 text-blue-500 p-3 rounded-xl group-hover:bg-blue-100 transition-colors">
                        <FaFileDownload size={20} />
                      </div>
                      <div>
                        <p className="font-bold text-gray-700 group-hover:text-[#16A7CB] transition-colors">
                          เอกสารขอบเขตงาน (TOR).pdf
                        </p>
                        <p className="text-xs text-gray-400">850 KB</p>
                      </div>
                    </div>
                    <span className="text-[#16A7CB] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                      ดาวน์โหลด
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 md:p-8 border-t border-gray-100">
              <Link href="/contract">
                <Button
                  variant="outline"
                  className="rounded-xl flex items-center gap-2 hover:bg-white"
                >
                  <ChevronLeft size={18} /> ย้อนกลับ
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
