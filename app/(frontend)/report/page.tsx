"use client";

import { useState } from "react";
import Link from "next/link";
import SubHeroBanner from "@/components/ui/SubHeroBanner";
import Input from "@/components/ui/Input";
import Dropdown from "@/components/ui/Dropdown";
import InputDate from "@/components/ui/InputDate";
import Button from "@/components/ui/Button";
import { CiSearch } from "react-icons/ci";

export default function ReportPage() {
  const [search, setSearch] = useState("");
  const [reportType, setReportType] = useState("");
  const [year, setYear] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const reportTypeOptions = [
    { label: "ทั้งหมด", value: "" },
    { label: "รายงานประจำปี", value: "annual" },
    { label: "รายงานประจำไตรมาส", value: "quarterly" },
    { label: "รายงานประจำเดือน", value: "monthly" },
    { label: "รายงานการเงิน", value: "financial" },
    { label: "รายงานการดำเนินงาน", value: "operational" },
  ];

  // Mock data for reports
  const reports = [
    {
      id: 1,
      title: "รายงานประจำปี 2567",
      type: "annual",
      year: "2567",
      publishDate: "15 มกราคม 2568",
      fileSize: "2.5 MB",
      downloadCount: 1250,
    },
    {
      id: 2,
      title: "รายงานประจำไตรมาสที่ 4/2567",
      type: "quarterly",
      year: "2567",
      publishDate: "10 มกราคม 2568",
      fileSize: "1.8 MB",
      downloadCount: 890,
    },
    {
      id: 3,
      title: "รายงานการเงินประจำปี 2567",
      type: "financial",
      year: "2567",
      publishDate: "5 มกราคม 2568",
      fileSize: "3.2 MB",
      downloadCount: 2100,
    },
    {
      id: 4,
      title: "รายงานประจำเดือนธันวาคม 2567",
      type: "monthly",
      year: "2567",
      publishDate: "1 มกราคม 2568",
      fileSize: "850 KB",
      downloadCount: 450,
    },
    {
      id: 5,
      title: "รายงานการดำเนินงานประจำปี 2567",
      type: "operational",
      year: "2567",
      publishDate: "20 ธันวาคม 2567",
      fileSize: "4.1 MB",
      downloadCount: 1680,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Banner */}
      <SubHeroBanner image="/report-hero.jpg" height="h-[300px]">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            รายงาน <span className="text-[#74CEE2]">ประจำปี</span>
          </h1>
          <p className="text-xl mt-4 text-white/90">
            ติดตามรายงานและเอกสารสำคัญของ OKMD
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
              <span className="text-[#74CEE2]">รายงาน</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto pb-8 sm:pb-12 md:pb-16">
        <div className="grid grid-cols-12 gap-4 sm:gap-6">
          <div className="col-span-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6">
              รายงาน <span className="text-[#74CEE2]">ประจำปี</span>
            </h2>
          </div>

          {/* Filters */}
          <div className="col-span-12">
            <div className="bg-gray-50 rounded-xl p-4 sm:p-5 md:p-6 mb-6 sm:mb-7 md:mb-8">
              <div className="grid grid-cols-12 gap-3 sm:gap-4 md:gap-5">
                <div className="col-span-12 sm:col-span-6 md:col-span-3">
                  <Input
                    label="ค้นหา"
                    placeholder="ค้นหารายงาน..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    icon={<CiSearch size={22} />}
                  />
                </div>

                <div className="col-span-12 sm:col-span-6 md:col-span-3">
                  <Dropdown
                    label="ประเภทรายงาน"
                    value={reportType}
                    onChange={setReportType}
                    placeholder="เลือกประเภท"
                    options={reportTypeOptions}
                  />
                </div>

                <div className="col-span-12 sm:col-span-6 md:col-span-3">
                  <Input
                    label="ปี"
                    placeholder="เช่น 2567"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  />
                </div>

                <div className="col-span-12 sm:col-span-6 md:col-span-3 flex items-end">
                  <Button className="w-full sm:w-auto">ค้นหา</Button>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-3 sm:gap-4 md:gap-5 mt-4">
                <div className="col-span-12 sm:col-span-6 md:col-span-3">
                  <InputDate
                    label="วันที่เริ่ม"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>

                <div className="col-span-12 sm:col-span-6 md:col-span-3">
                  <InputDate
                    label="วันที่สิ้นสุด"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Report List */}
          <div className="col-span-12">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-[#74CEE2] text-white">
                    <tr>
                      <th className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold">
                        ลำดับ
                      </th>
                      <th className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold">
                        ชื่อรายงาน
                      </th>
                      <th className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-center">
                        ประเภท
                      </th>
                      <th className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-center">
                        ปี
                      </th>
                      <th className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-center">
                        วันที่เผยแพร่
                      </th>
                      <th className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-center">
                        ขนาดไฟล์
                      </th>
                      <th className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-center">
                        ดาวน์โหลด
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {reports.map((report, index) => (
                      <tr
                        key={report.id}
                        className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                          index % 2 === 0 ? "bg-white" : "bg-gray-50"
                        }`}
                      >
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-700">
                          {index + 1}
                        </td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-800 font-medium">
                          {report.title}
                        </td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-700 text-center">
                          {reportTypeOptions.find((opt) => opt.value === report.type)?.label || "-"}
                        </td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-700 text-center">
                          {report.year}
                        </td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-700 text-center">
                          {report.publishDate}
                        </td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-700 text-center">
                          {report.fileSize}
                        </td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-center">
                          <button
                            onClick={() => alert(`ดาวน์โหลด: ${report.title}`)}
                            className="bg-[#74CEE2] text-white px-4 py-2 rounded-lg hover:bg-[#5ab6cc] transition text-sm sm:text-base font-semibold"
                          >
                            ดาวน์โหลด
                          </button>
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
