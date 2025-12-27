"use client";

import { use } from "react";
import Link from "next/link";
import SubHeroBanner from "@/components/ui/SubHeroBanner";
import Button from "@/components/ui/Button";

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
    <div className="w-full min-h-screen bg-white">
      {/* Hero Banner */}
      <SubHeroBanner image="/job-announcement-hero.jpg" height="h-[300px]">
        <div className="container px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold">{announcement.title}</h1>
        </div>
      </SubHeroBanner>

      {/* Breadcrumb */}
      <div className="container px-6 md:px-12 pt-8 mb-8">
        <div className="text-lg text-gray-500 font-medium">
          <Link href="/" className="hover:underline">
            หน้าหลัก
          </Link>
          {" > "}
          <Link href="/job-announcement" className="hover:underline">
            ประกาศรับสมัครงาน
          </Link>
          {" > "}
          <span className="text-[#74CEE2]">รายละเอียด</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container px-6 md:px-12 pb-16">
        <div className="grid grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="col-span-12 lg:col-span-8">
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="mb-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">{announcement.title}</h2>
                  <span
                    className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                      announcement.status === "open"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {announcement.status === "open" ? "เปิดรับสมัคร" : "ปิดรับสมัคร"}
                  </span>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p>หน่วยงาน: {announcement.department}</p>
                  <p>ประกาศเมื่อ: {announcement.announcementDate}</p>
                  <p>ปิดรับสมัคร: {announcement.closingDate}</p>
                </div>
              </div>

              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: announcement.content }}
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-span-12 lg:col-span-4">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">สมัครงาน</h3>
              <p className="text-gray-600 mb-6">ส่งใบสมัครของคุณมาที่เราวันนี้</p>
              <Button className="w-full mb-4">สมัครงานออนไลน์</Button>
              <Button variant="outline" className="w-full">
                ดาวน์โหลดใบสมัคร
              </Button>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-2">ติดต่อสอบถาม</h4>
                <p className="text-gray-600 text-sm">
                  สำนักงานบริหารและพัฒนาองค์ความรู้<br />
                  โทร: 02-105-6552<br />
                  อีเมล: hr@okmd.or.th
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

