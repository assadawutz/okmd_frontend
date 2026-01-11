"use client";

import { use } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { ChevronLeft, Share2, Calendar, FileText } from "lucide-react";
import { ContainerPage } from "@/components/shared/ContainerPage";
import ShareButtons from "@/components/ShareButtons";

export default function JobAnnouncementDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  // Mock data
  const announcement = {
    id: id,
    title: "ประกาศรับสมัครงานตำแหน่งนักพัฒนาระบบสารสนเทศ",
    department: "สำนักงานบริหารและพัฒนาองค์ความรู้",
    announcementDate: "15 มกราคม 2568",
    closingDate: "15 กุมภาพันธ์ 2568",
    status: "open" as const,
    content: `
      <h3 class="text-xl font-bold mb-4">รายละเอียดการประกาศ</h3>
      <p class="mb-4">สำนักงานบริหารและพัฒนาองค์ความรู้ (องค์การมหาชน) เปิดรับสมัครงานตำแหน่งนักพัฒนาระบบสารสนเทศ</p>

      <h3 class="text-xl font-bold mb-4">คุณสมบัติผู้สมัคร</h3>
      <ul class="list-disc list-inside space-y-2 mb-6">
        <li>วุฒิการศึกษาปริญญาตรี สาขาวิทยาการคอมพิวเตอร์ หรือสาขาที่เกี่ยวข้อง</li>
        <li>มีประสบการณ์ในการพัฒนาระบบอย่างน้อย 2 ปี</li>
        <li>มีความรู้ในภาษาโปรแกรมมิ่ง เช่น JavaScript, Python, Java</li>
        <li>มีความรู้ในฐานข้อมูลและระบบเครือข่าย</li>
      </ul>

      <h3 class="text-xl font-bold mb-4">เอกสารที่ต้องส่ง</h3>
      <ul class="list-disc list-inside space-y-2 mb-6">
        <li>ใบสมัครงาน</li>
        <li>สำเนาบัตรประชาชน</li>
        <li>สำเนาใบรับรองวุฒิการศึกษา</li>
        <li>สำเนาใบรับรองประสบการณ์การทำงาน (ถ้ามี)</li>
      </ul>

      <h3 class="text-xl font-bold mb-4">วิธีการสมัคร</h3>
      <p class="mb-4">ส่งเอกสารมาที่ hr@okmd.or.th หรือส่งมาที่สำนักงานบริหารและพัฒนาองค์ความรู้</p>
    `,
  };

  return (
    <ContainerPage>
      <div className="w-full space-y-8">
        {/* HEADER BLOCK */}
        <div className="w-full h-[250px] md:h-[300px] rounded-3xl overflow-hidden relative shadow-sm">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/job-announcement-hero.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-2">
              ประกาศ <span className="text-[#74CEE2]">รับสมัครงาน</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              ข่าวสารการรับสมัครงานจาก OKMD
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
            href="/job-announcement"
            className="hover:text-[#16A7CB] transition-colors"
          >
            ประกาศรับสมัครงาน
          </Link>
          <span>›</span>
          <span className="text-[#16A7CB] font-medium truncate max-w-[200px] md:max-w-xs ">
            {announcement.title}
          </span>
        </div>

        {/* MAIN CARD */}
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
          <header className="mb-10 border-b border-gray-100 pb-8">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <div className="inline-block px-3 py-1 bg-[#E8F6FB] text-[#16A7CB] rounded-full text-xs font-bold">
                  {announcement.department}
                </div>
                <span
                  className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                    announcement.status === "open"
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {announcement.status === "open"
                    ? "เปิดรับสมัคร"
                    : "ปิดรับสมัคร"}
                </span>
              </div>

              <h1 className="text-2xl md:text-3xl font-bold leading-tight text-[#1B1D20]">
                {announcement.title}
              </h1>

              <div className="flex flex-wrap gap-6 text-sm text-gray-600 mt-2">
                <div className="flex items-center gap-2">
                  <FileText size={18} className="text-[#16A7CB]" />
                  <span>ประกาศ: {announcement.announcementDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-[#16A7CB]" />
                  <span>ปิดรับ: {announcement.closingDate}</span>
                </div>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Content */}
            <div className="lg:col-span-8 space-y-8">
              <div
                className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: announcement.content }}
              />
            </div>

            {/* Sidebar */}
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
            <Link href="/job-announcement">
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
