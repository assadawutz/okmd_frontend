"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type JobItem = {
  id: string;
  title: string;
  type: string;
  positions: number;
};

const JOBS: JobItem[] = [
  {
    id: "1",
    title: "เจ้าหน้าที่ช่วยปฏิบัติงานบริหารทรัพยากรกายภาพ ด้าน IT (สำนักภาคใต้ จ.สงขลา)",
    type: "เจ้าหน้าที่ประจำ",
    positions: 1,
  },
  {
    id: "2",
    title: "นักบริหารงานบุคลลอาวุโส",
    type: "เจ้าหน้าที่ประจำ",
    positions: 1,
  },
  {
    id: "3",
    title: "เจ้าหน้าที่ช่วยปฏิบัติงานบริหารทรัพยากรกายภาพ ด้าน IT (สำนักภาคใต้ จ.สงขลา)",
    type: "เจ้าหน้าที่ประจำ",
    positions: 1,
  },
  {
    id: "4",
    title: "นักบริหารงานบุคลลอาวุโส",
    type: "เจ้าหน้าที่ประจำ",
    positions: 1,
  },
  {
    id: "5",
    title: "เจ้าหน้าที่ช่วยปฏิบัติงานบริหารทรัพยากรกายภาพ ด้าน IT (สำนักภาคใต้ จ.สงขลา)",
    type: "เจ้าหน้าที่ประจำ",
    positions: 1,
  },
  {
    id: "6",
    title: "นักบริหารงานบุคลลอาวุโส",
    type: "เจ้าหน้าที่ประจำ",
    positions: 1,
  },
  {
    id: "7",
    title: "เจ้าหน้าที่ช่วยปฏิบัติงานบริหารทรัพยากรกายภาพ ด้าน IT (สำนักภาคใต้ จ.สงขลา)",
    type: "เจ้าหน้าที่ประจำ",
    positions: 1,
  },
  {
    id: "8",
    title: "นักบริหารงานบุคลลอาวุโส",
    type: "เจ้าหน้าที่ประจำ",
    positions: 1,
  },
];

export default function Career() {
  const [search, setSearch] = useState("");
  const [jobType, setJobType] = useState("ทั้งหมด");
  const [currentPage, setCurrentPage] = useState(1);

  const totalJobs = 151653;
  const totalPages = 20;

  return (
    <div className="w-full min-h-screen bg-white">
      
      {/* Breadcrumb */}
      <div className="container mx-auto pt-6 md:pt-8 pb-4">
        <div className="text-sm text-gray-500 font-medium">
          <Link href="/" className="hover:text-[#16A7CB]">หน้าหลัก</Link>
          {" > "}
          <span className="text-[#16A7CB]">ค้นหางาน</span>
        </div>
      </div>

      {/* Hero Image */}
      <div className="container mx-auto mb-8">
        <div className="relative h-[200px] md:h-[280px] rounded-xl overflow-hidden">
          <Image
            src="/images/banner/RC1(4).jpg"
            alt="Working with Us"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="container mx-auto pb-16">
        
        {/* Title */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-[#1B1D20]">
            Working <span className="text-[#16A7CB]">with Us</span>
          </h1>
          <p className="text-gray-500 text-sm mt-2 max-w-3xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        {/* Job Count */}
        <p className="text-[#1B1D20] font-medium mb-6">
          ค้นหางาน จากงานกว่า {totalJobs.toLocaleString()} อัตรา
        </p>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="พิมพ์ตำแหน่งงาน"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#16A7CB]/30"
              />
            </div>
          </div>
          
          <select
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            className="px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#16A7CB]/30 min-w-[160px]"
          >
            <option>ทั้งหมด</option>
            <option>งานประจำ</option>
            <option>สัญญาจ้าง</option>
            <option>ฝึกงาน</option>
          </select>

          <button className="px-6 py-3 bg-[#E8F6FB] text-[#16A7CB] rounded-lg text-sm font-medium hover:bg-[#D5EEF5] transition-colors">
            สำหรับนักศึกษาฝึกงาน
          </button>

          <button className="px-6 py-3 bg-[#16A7CB] text-white rounded-lg text-sm font-medium hover:bg-[#0e8aa8] transition-colors">
            สมัครงาน
          </button>
        </div>

        {/* Job Table */}
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-[#16A7CB] text-white text-sm font-medium">
            <div className="col-span-7 px-6 py-4">ตำแหน่งงาน</div>
            <div className="col-span-3 px-4 py-4">ประเภทการจ้างงาน</div>
            <div className="col-span-2 px-4 py-4 text-right">ขั้นตอนการสมัครงาน</div>
          </div>

          {/* Table Body */}
          {JOBS.map((job, idx) => (
            <Link
              key={job.id}
              href={`/career/${job.id}`}
              className={`grid grid-cols-12 text-sm hover:bg-gray-50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
            >
              <div className="col-span-7 px-6 py-4 text-[#1B1D20]">{job.title}</div>
              <div className="col-span-3 px-4 py-4 text-gray-600">{job.type}</div>
              <div className="col-span-2 px-4 py-4 text-right text-gray-600">{job.positions} อัตรา</div>
            </Link>
          ))}

        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 gap-2">
          <button className="w-10 h-10 rounded-lg bg-[#16A7CB] text-white text-sm font-medium">1</button>
          <button className="w-10 h-10 rounded-lg bg-gray-100 text-gray-600 text-sm font-medium hover:bg-gray-200">2</button>
          <button className="w-10 h-10 rounded-lg bg-gray-100 text-gray-600 text-sm font-medium hover:bg-gray-200">3</button>
          <button className="w-10 h-10 rounded-lg bg-gray-100 text-gray-600 text-sm font-medium hover:bg-gray-200">4</button>
          <button className="w-10 h-10 rounded-lg bg-gray-100 text-gray-600 text-sm font-medium hover:bg-gray-200">5</button>
          <span className="flex items-center px-2 text-gray-400">...</span>
          <button className="w-10 h-10 rounded-lg bg-gray-100 text-gray-600 text-sm font-medium hover:bg-gray-200">{totalPages}</button>
          <button className="w-10 h-10 rounded-lg bg-gray-100 text-gray-600 text-sm font-medium hover:bg-gray-200">
            <svg className="w-4 h-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
}
