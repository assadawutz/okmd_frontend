"use client";

import { useState } from "react";
import Link from "next/link";
import SubHeroBanner from "@/components/ui/SubHeroBanner";
import Button from "@/components/ui/Button";

export default function WorkingDetailPage({ params }: { params: { id: string } }) {
  // Mock data - in real app, fetch based on params.id
  const workingDetail = {
    id: params.id,
    title: "ตำแหน่งนักพัฒนาระบบสารสนเทศ",
    department: "สำนักงานบริหารและพัฒนาองค์ความรู้",
    position: "นักพัฒนาระบบ",
    location: "กรุงเทพมหานคร",
    publishDate: "15 มกราคม 2568",
    closingDate: "15 กุมภาพันธ์ 2568",
    status: "open" as const,
    description: `
      <h3>คุณสมบัติผู้สมัคร</h3>
      <ul>
        <li>วุฒิการศึกษาระดับปริญญาตรีขึ้นไป สาขาวิทยาการคอมพิวเตอร์ วิศวกรรมคอมพิวเตอร์ หรือสาขาที่เกี่ยวข้อง</li>
        <li>มีประสบการณ์ในการพัฒนาระบบอย่างน้อย 2 ปี</li>
        <li>มีความรู้ในการใช้ภาษาโปรแกรมมิ่ง เช่น JavaScript, TypeScript, Python</li>
        <li>มีความรู้ในการใช้ Framework เช่น React, Next.js, Node.js</li>
        <li>มีความรู้ในการใช้ Database เช่น MySQL, PostgreSQL, MongoDB</li>
      </ul>
      
      <h3>หน้าที่ความรับผิดชอบ</h3>
      <ul>
        <li>พัฒนาและดูแลระบบสารสนเทศขององค์กร</li>
        <li>ออกแบบและพัฒนาระบบฐานข้อมูล</li>
        <li>ทดสอบและแก้ไขข้อผิดพลาดของระบบ</li>
        <li>ประสานงานกับทีมงานและผู้ใช้งาน</li>
      </ul>
      
      <h3>สิทธิประโยชน์</h3>
      <ul>
        <li>เงินเดือนตามความสามารถ</li>
        <li>ประกันสังคม</li>
        <li>ประกันสุขภาพ</li>
        <li>วันหยุดตามกฎหมาย</li>
        <li>โอกาสในการพัฒนาตนเอง</li>
      </ul>
    `,
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Banner */}
      <SubHeroBanner image="/working-detail-hero.jpg" height="h-[300px]">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            รายละเอียด <span className="text-[#74CEE2]">ตำแหน่งงาน</span>
          </h1>
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
              <Link href="/working" className="hover:underline">
                รับสมัครงาน
              </Link>
              {" > "}
              <span className="text-[#74CEE2]">รายละเอียดตำแหน่งงาน</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto pb-8 sm:pb-12 md:pb-16">
        <div className="grid grid-cols-12 gap-4 sm:gap-6 md:gap-8">
          {/* Main Content */}
          <div className="col-span-12 lg:col-span-8">
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 md:p-8 space-y-6">
              {/* Header */}
              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  {workingDetail.title}
                </h2>
                <div className="flex flex-wrap gap-4 text-sm sm:text-base text-gray-600">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                      />
                    </svg>
                    <span>{workingDetail.department}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                    <span>{workingDetail.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                      />
                    </svg>
                    <span>ปิดรับสมัคร: {workingDetail.closingDate}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <span
                    className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                      workingDetail.status === "open"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {workingDetail.status === "open" ? "เปิดรับสมัคร" : "ปิดรับสมัคร"}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div
                className="prose prose-lg max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: workingDetail.description }}
              />

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                <Button className="w-full sm:w-auto">
                  สมัครงาน
                </Button>
                <Button variant="outline" className="w-full sm:w-auto">
                  ดาวน์โหลดเอกสาร
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-span-12 lg:col-span-4">
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-5 md:p-6 sticky top-4">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                ข้อมูลตำแหน่งงาน
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">หน่วยงาน</p>
                  <p className="text-base font-semibold text-gray-800">
                    {workingDetail.department}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">ตำแหน่ง</p>
                  <p className="text-base font-semibold text-gray-800">
                    {workingDetail.position}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">สถานที่ปฏิบัติงาน</p>
                  <p className="text-base font-semibold text-gray-800">
                    {workingDetail.location}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">วันที่ประกาศ</p>
                  <p className="text-base font-semibold text-gray-800">
                    {workingDetail.publishDate}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">วันที่ปิดรับสมัคร</p>
                  <p className="text-base font-semibold text-gray-800">
                    {workingDetail.closingDate}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link
                  href="/working"
                  className="text-[#74CEE2] hover:text-[#5ab6cc] font-semibold text-sm"
                >
                  ← กลับไปยังรายการตำแหน่งงาน
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
