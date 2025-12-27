"use client";

import { useState } from "react";
import Link from "next/link";
import SubHeroBanner from "@/components/ui/SubHeroBanner";
import Input from "@/components/ui/Input";
import Dropdown from "@/components/ui/Dropdown";
import Button from "@/components/ui/Button";
import { CiSearch } from "react-icons/ci";

type WorkingItem = {
  id: number;
  title: string;
  department: string;
  position: string;
  location: string;
  publishDate: string;
  closingDate: string;
  status: "open" | "closed";
};

export default function WorkingPage() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [status, setStatus] = useState("");

  const departmentOptions = [
    { label: "ทั้งหมด", value: "" },
    { label: "สำนักงานบริหารและพัฒนาองค์ความรู้", value: "okmd" },
    { label: "มิวเซียมสยาม", value: "museum" },
    { label: "สถาบันอุทยานการเรียนรู้", value: "tkpark" },
  ];

  const statusOptions = [
    { label: "ทั้งหมด", value: "" },
    { label: "เปิดรับสมัคร", value: "open" },
    { label: "ปิดรับสมัคร", value: "closed" },
  ];

  // Mock data
  const workingList: WorkingItem[] = [
    {
      id: 1,
      title: "ตำแหน่งนักพัฒนาระบบสารสนเทศ",
      department: "สำนักงานบริหารและพัฒนาองค์ความรู้",
      position: "นักพัฒนาระบบ",
      location: "กรุงเทพมหานคร",
      publishDate: "15 มกราคม 2568",
      closingDate: "15 กุมภาพันธ์ 2568",
      status: "open",
    },
    {
      id: 2,
      title: "ตำแหน่งนักวิชาการองค์ความรู้",
      department: "สำนักงานบริหารและพัฒนาองค์ความรู้",
      position: "นักวิชาการ",
      location: "กรุงเทพมหานคร",
      publishDate: "10 มกราคม 2568",
      closingDate: "10 กุมภาพันธ์ 2568",
      status: "open",
    },
    {
      id: 3,
      title: "ตำแหน่งเจ้าหน้าที่บริหารงานทั่วไป",
      department: "มิวเซียมสยาม",
      position: "เจ้าหน้าที่",
      location: "กรุงเทพมหานคร",
      publishDate: "5 มกราคม 2568",
      closingDate: "5 กุมภาพันธ์ 2568",
      status: "closed",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Banner */}
      <SubHeroBanner image="/working-hero.jpg" height="h-[300px]">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            รับสมัคร <span className="text-[#74CEE2]">งาน</span>
          </h1>
          <p className="text-xl mt-4 text-white/90">
            ติดตามตำแหน่งงานว่างล่าสุดจาก OKMD
          </p>
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
              <span className="text-[#74CEE2]">รับสมัครงาน</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto pb-8 sm:pb-12 md:pb-16">
        <div className="grid grid-cols-12 gap-4 sm:gap-6">
          <div className="col-span-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6">
              รับสมัคร <span className="text-[#74CEE2]">งาน</span>
            </h2>
          </div>

          {/* Filters */}
          <div className="col-span-12">
            <div className="bg-gray-50 rounded-xl p-4 sm:p-5 md:p-6 mb-6 sm:mb-7 md:mb-8">
              <div className="grid grid-cols-12 gap-3 sm:gap-4">
                <div className="col-span-12 sm:col-span-6 md:col-span-4">
                  <Input
                    label="ค้นหา"
                    placeholder="ค้นหาตำแหน่งงาน..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    icon={<CiSearch size={22} />}
                  />
                </div>

                <div className="col-span-12 sm:col-span-6 md:col-span-4">
                  <Dropdown
                    label="หน่วยงาน"
                    value={department}
                    onChange={setDepartment}
                    placeholder="เลือกหน่วยงาน"
                    options={departmentOptions}
                  />
                </div>

                <div className="col-span-12 sm:col-span-6 md:col-span-4">
                  <Dropdown
                    label="สถานะ"
                    value={status}
                    onChange={setStatus}
                    placeholder="เลือกสถานะ"
                    options={statusOptions}
                  />
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <Button className="w-full sm:w-auto">ค้นหา</Button>
              </div>
            </div>
          </div>

          {/* Working List */}
          <div className="col-span-12">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left min-w-[800px]">
                  <thead className="bg-[#74CEE2] text-white">
                    <tr>
                      <th className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold">
                        ลำดับ
                      </th>
                      <th className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold">
                        ตำแหน่งงาน
                      </th>
                      <th className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold">
                        หน่วยงาน
                      </th>
                      <th className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-center">
                        สถานที่ปฏิบัติงาน
                      </th>
                      <th className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-center">
                        วันที่ประกาศ
                      </th>
                      <th className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-center">
                        วันที่ปิดรับสมัคร
                      </th>
                      <th className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-center">
                        สถานะ
                      </th>
                      <th className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-center">
                        การดำเนินการ
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {workingList.map((item, index) => (
                      <tr
                        key={item.id}
                        className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                          index % 2 === 0 ? "bg-white" : "bg-gray-50"
                        }`}
                      >
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-700">
                          {index + 1}
                        </td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-800 font-medium">
                          {item.title}
                        </td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-700">
                          {item.department}
                        </td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-700 text-center">
                          {item.location}
                        </td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-700 text-center">
                          {item.publishDate}
                        </td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-700 text-center">
                          {item.closingDate}
                        </td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-center">
                          <span
                            className={`px-3 py-1 rounded-lg text-sm font-semibold ${
                              item.status === "open"
                                ? "bg-green-100 text-green-800"
                                : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {item.status === "open" ? "เปิดรับสมัคร" : "ปิดรับสมัคร"}
                          </span>
                        </td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-center">
                          <Link
                            href={`/working/${item.id}`}
                            className="text-[#74CEE2] hover:text-[#5ab6cc] font-semibold text-sm sm:text-base"
                          >
                            ดูรายละเอียด
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
