"use client";

import { use } from "react";
import Link from "next/link";
import SubHeroBanner from "@/components/ui/SubHeroBanner";
import Button from "@/components/ui/Button";

export default function CareerDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  // Mock data
  const job = {
    id: id,
    title: "นักพัฒนาระบบสารสนเทศ",
    department: "สำนักงานบริหารและพัฒนาองค์ความรู้",
    location: "กรุงเทพมหานคร",
    type: "งานประจำ",
    postedDate: "15 มกราคม 2568",
    closingDate: "15 กุมภาพันธ์ 2568",
    salary: "ตามวุฒิการศึกษาและประสบการณ์",
    description: `
      <h3 class="text-xl font-bold mb-4">รายละเอียดงาน</h3>
      <ul class="list-disc list-inside space-y-2 mb-6">
        <li>รับผิดชอบในการพัฒนาและดูแลระบบสารสนเทศขององค์กร</li>
        <li>ออกแบบและพัฒนาระบบใหม่ตามความต้องการ</li>
        <li>ดูแลและบำรุงรักษาระบบที่มีอยู่</li>
        <li>ประสานงานกับหน่วยงานต่างๆ ภายในองค์กร</li>
      </ul>

      <h3 class="text-xl font-bold mb-4">คุณสมบัติผู้สมัคร</h3>
      <ul class="list-disc list-inside space-y-2 mb-6">
        <li>วุฒิการศึกษาปริญญาตรี สาขาวิทยาการคอมพิวเตอร์ หรือสาขาที่เกี่ยวข้อง</li>
        <li>มีประสบการณ์ในการพัฒนาระบบอย่างน้อย 2 ปี</li>
        <li>มีความรู้ในภาษาโปรแกรมมิ่ง เช่น JavaScript, Python, Java</li>
        <li>มีความรู้ในฐานข้อมูลและระบบเครือข่าย</li>
        <li>สามารถทำงานเป็นทีมและสื่อสารได้ดี</li>
      </ul>

      <h3 class="text-xl font-bold mb-4">สิทธิประโยชน์</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>เงินเดือนตามวุฒิการศึกษาและประสบการณ์</li>
        <li>ประกันสังคม</li>
        <li>วันหยุดตามกฎหมาย</li>
        <li>โอกาสในการพัฒนาตนเองและเรียนรู้สิ่งใหม่ๆ</li>
      </ul>
    `,
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Banner */}
      <SubHeroBanner
        image="/career-hero.jpg"
        height="h-[300px]"
      >
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            {job.title}
          </h1>
        </div>
      </SubHeroBanner>

      {/* Breadcrumb */}
      <div className="container mx-auto px-6 md:px-12 pt-8 mb-8">
        <div className="text-lg text-gray-500 font-medium">
          <Link href="/" className="hover:underline">
            หน้าหลัก
          </Link>
          {" > "}
          <Link href="/career" className="hover:underline">
            อาชีพและโอกาส
          </Link>
          {" > "}
          <span className="text-[#74CEE2]">{job.title}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 pb-16">
        <div className="grid grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="col-span-12 lg:col-span-8">
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{job.title}</h2>
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="px-4 py-2 bg-[#E8F6FB] text-[#16A7CB] rounded-lg text-sm font-semibold">
                    {job.department}
                  </span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold">
                    {job.location}
                  </span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold">
                    {job.type}
                  </span>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p>ประกาศเมื่อ: {job.postedDate}</p>
                  <p>ปิดรับสมัคร: {job.closingDate}</p>
                  <p>เงินเดือน: {job.salary}</p>
                </div>
              </div>

              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: job.description }}
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-span-12 lg:col-span-4">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">สมัครงาน</h3>
              <p className="text-gray-600 mb-6">
                ส่งใบสมัครของคุณมาที่เราวันนี้
              </p>
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

