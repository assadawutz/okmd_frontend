"use client";

import { use } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { ChevronLeft, Share2, MapPin, Briefcase } from "lucide-react";
import { ContainerPage } from "@/components/shared/ContainerPage";
import ShareButtons from "@/components/ShareButtons";

export default function CareerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  // Mock data
  const job = {
    id: id,
    title: "เจ้าหน้าที่ช่วยปฏิบัติงานบริหารทรัพยากรกายภาพ ด้าน IT (สำนักภาคใต้ จ.สงขลา)",
    department: "สำนักงานบริหารและพัฒนาองค์ความรู้",
  };

  return (
    <ContainerPage>
      <div className="w-full space-y-8">
        {/* HEADER BLOCK */}
        <div className="w-full h-[250px] md:h-[300px] rounded-3xl overflow-hidden relative shadow-sm">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/career-hero.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-2">
              ร่วมงาน <span className="text-[#74CEE2]">กับเรา</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              โอกาสเติบโตและพัฒนาศักยภาพไปพร้อมกับ OKMD
            </p>
          </div>
        </div>

        {/* BREADCRUMB */}
        <div className="flex items-center text-sm text-gray-500 px-2 gap-2">
          <Link href="/" className="hover:text-[#16A7CB] transition-colors">
            หน้าหลัก
          </Link>
          <span>›</span>
          <Link
            href="/career"
            className="hover:text-[#16A7CB] transition-colors"
          >
            ร่วมงานกับเรา
          </Link>
          <span>›</span>
          <span className="text-[#16A7CB] font-medium truncate max-w-[200px] md:max-w-xs">
            {job.title}
          </span>
        </div>

        {/* MAIN CARD */}
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
          <header className="mb-10 border-b border-gray-100 pb-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 bg-[#E8F6FB] text-[#16A7CB] rounded-full text-xs font-bold">
                  {job.department}
                </div>
                <h1 className="text-2xl md:text-3xl font-bold leading-tight text-[#1B1D20]">
                  {job.title}
                </h1>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <MapPin size={16} className="text-[#16A7CB]" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Briefcase size={16} className="text-[#16A7CB]" />
                    {job.type}
                  </div>
                </div>
              </div>
              <div className="w-full md:w-auto flex flex-col gap-3">
                <div className="text-right hidden md:block">
                  <p className="text-sm text-gray-500">ปิดรับสมัคร</p>
                  <p className="font-bold text-[#16A7CB]">{job.closingDate}</p>
                </div>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Content */}
            <div className="lg:col-span-8 space-y-8">
              <div
                className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: job.description }}
              />
            </div>

            {/* Sidebar Actions */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-gray-100 sticky top-4">
                <h3 className="font-bold text-lg mb-4 text-[#1B1D20]">
                  การสมัครงาน
                </h3>
                <div className="space-y-3">
                  <Button className="w-full rounded-xl">สมัครงานออนไลน์</Button>
                  <Button variant="outline" className="w-full rounded-xl">
                    ดาวน์โหลดใบสมัคร
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">
                    ติดต่อสอบถาม
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    สำนักงานบริหารและพัฒนาองค์ความรู้
                    <br />
                    โทร: 02-105-6552
                    <br />
                    อีเมล: hr@okmd.or.th
                  </p>
                </div>

                <div className="mt-6">
                  <span className="text-xs font-bold text-gray-400 block mb-2 uppercase tracking-wider">
                    Share
                  </span>
                  <ShareButtons />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-100">
            <Link href="/career">
              <Button
                variant="outline"
                className="rounded-xl flex items-center gap-2"
              >
                <ChevronLeft size={18} /> ย้อนกลับ
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </ContainerPage>
  );
}
