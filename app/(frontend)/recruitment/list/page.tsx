"use client";

import Link from "next/link";
import { ChevronRight, Search, MapPin, Briefcase } from "lucide-react";
import { ContainerPage } from "@/components/shared/ContainerPage";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

// Mock Data
const jobs = [
  {
    id: 1,
    title: "เจ้าหน้าที่ช่วยปฏิบัติงานบริหารทรัพยากรกายภาพ ด้าน IT",
    dept: "สำนักบริหาร",
    loc: "สงขลา (TK Park)",
    type: "เจ้าหน้าที่สัญญาจ้าง",
    quota: "1",
  },
  {
    id: 2,
    title: "นักจัดการความรู้ (อาวุโส)",
    dept: "สำนักพัฒนาองค์ความรู้",
    loc: "กรุงเทพฯ",
    type: "เจ้าหน้าที่ประจำ",
    quota: "2",
  },
  {
    id: 3,
    title: "เจ้าหน้าที่บัญชีและการเงิน",
    dept: "สำนักอำนวยการ",
    loc: "กรุงเทพฯ",
    type: "เจ้าหน้าที่ประจำ",
    quota: "1",
  },
];

export default function RecruitmentPage() {
  return (
    <ContainerPage>
      <div className="w-full space-y-8">
        {/* HEADER BLOCK */}
        <div className="w-full h-[250px] md:h-[300px] rounded-3xl overflow-hidden relative shadow-sm">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/bannerabout.png')" }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-2">
              ร่วมงาน <span className="text-[#74CEE2]">กับเรา</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              ร่วมเป็นส่วนหนึ่งในการสร้างสังคมแห่งการเรียนรู้
            </p>
          </div>
        </div>

        {/* BREADCRUMB */}
        <div className="flex items-center text-sm text-gray-500 px-2">
          <Link href="/" className="hover:text-[#16A7CB] transition-colors">
            หน้าหลัก
          </Link>
          <span className="mx-2">›</span>
          <span className="text-[#16A7CB] font-medium">สมัครงาน</span>
        </div>

        {/* SEARCH BLOCK */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <Input
                placeholder="ค้นหาตำแหน่งงาน..."
                icon={<Search className="text-gray-400" size={20} />}
              />
            </div>
            <Button className="md:w-32 rounded-xl shadow-lg shadow-[#16A7CB]/20">
              ค้นหา
            </Button>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#1B1D20] mb-6 flex items-center gap-2">
              <Briefcase className="text-[#16A7CB]" size={24} />
              ตำแหน่งที่เปิดรับสมัคร
            </h2>

            <div className="grid gap-4">
              {jobs.map((j) => (
                <div
                  key={j.id}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#16A7CB] transition-all group relative overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative z-10">
                    <div className="space-y-2">
                      <Link
                        href="/recruitment/detail"
                        className="text-lg md:text-xl font-bold text-[#1B1D20] group-hover:text-[#16A7CB] transition-colors block"
                      >
                        {j.title}
                      </Link>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1 bg-white px-3 py-1 rounded-full border border-gray-200">
                          <Briefcase size={14} className="text-[#16A7CB]" />
                          {j.dept}
                        </span>
                        <span className="flex items-center gap-1 bg-white px-3 py-1 rounded-full border border-gray-200">
                          <MapPin size={14} className="text-[#16A7CB]" />
                          {j.loc}
                        </span>
                        <span className="flex items-center gap-1 bg-white px-3 py-1 rounded-full border border-gray-200">
                          <span className="w-2 h-2 rounded-full bg-green-500"></span>
                          {j.type}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 w-full md:w-auto mt-2 md:mt-0">
                      <div className="hidden md:flex flex-col items-center px-4 border-l border-gray-200">
                        <span className="text-xs text-gray-400">อัตรา</span>
                        <span className="text-lg font-bold text-[#16A7CB]">
                          {j.quota}
                        </span>
                      </div>
                      <Link
                        href="/recruitment/detail"
                        className="w-full md:w-auto text-center px-6 py-2 bg-white border border-gray-200 rounded-xl text-gray-600 font-medium group-hover:bg-[#16A7CB] group-hover:text-white group-hover:border-[#16A7CB] transition-all shadow-sm"
                      >
                        รายละเอียด
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ContainerPage>
  );
}
