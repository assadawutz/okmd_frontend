"use client";

import { useState } from "react";
import Link from "next/link";
import React from "react";
import Input from "@/components/ui/Input";
import Dropdown from "@/components/ui/Dropdown";
import Button from "@/components/ui/Button";
import { CiSearch } from "react-icons/ci";

type JobCardProps = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  postedDate: string;
  closingDate: string;
  description: string;
};

function JobCard({
  id,
  title,
  department,
  location,
  type,
  postedDate,
  closingDate,
  description,
}: JobCardProps) {
  return (
    <Link
      href={`/career/${id}`}
      className="bg-white rounded-xl shadow-sm p-6 transition-all duration-300 hover:shadow-lg active:scale-95 cursor-pointer border border-gray-100 hover:border-gray-200 group h-full flex flex-col"
    >
      <div className="flex flex-col gap-4 flex-grow">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#16A7CB] transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-base">{department}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <span className="px-3 py-1 bg-[#E8F6FB] text-[#16A7CB] rounded-lg text-sm font-semibold">
            {location}
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold">
            {type}
          </span>
        </div>

        <div className="border-t border-gray-100 pt-4 space-y-2 mt-auto">
          <div className="flex items-center gap-2 text-sm text-gray-500">
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
            <span>ประกาศเมื่อ: {postedDate}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
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
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <span>ปิดรับสมัคร: {closingDate}</span>
          </div>
        </div>

        <div className="pt-2">
          <span className="text-[#16A7CB] font-semibold text-sm group-hover:underline inline-flex items-center gap-1">
            ดูรายละเอียดเพิ่มเติม <span>→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function Career() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");

  // Mock data
  const jobs: JobCardProps[] = [
    {
      id: "1",
      title: "นักพัฒนาระบบสารสนเทศ",
      department: "สำนักงานบริหารและพัฒนาองค์ความรู้",
      location: "กรุงเทพมหานคร",
      type: "งานประจำ",
      postedDate: "15 มกราคม 2568",
      closingDate: "15 กุมภาพันธ์ 2568",
      description:
        "รับผิดชอบในการพัฒนาและดูแลระบบสารสนเทศขององค์กร รวมถึงการออกแบบและพัฒนาระบบใหม่",
    },
    {
      id: "2",
      title: "นักวิชาการองค์ความรู้",
      department: "สำนักงานบริหารและพัฒนาองค์ความรู้",
      location: "กรุงเทพมหานคร",
      type: "งานประจำ",
      postedDate: "10 มกราคม 2568",
      closingDate: "10 กุมภาพันธ์ 2568",
      description:
        "ทำการวิจัยและพัฒนาองค์ความรู้ในด้านต่างๆ เพื่อส่งเสริมการเรียนรู้และพัฒนาสังคม",
    },
    {
      id: "3",
      title: "เจ้าหน้าที่บริหารงานทั่วไป",
      department: "มิวเซียมสยาม",
      location: "กรุงเทพมหานคร",
      type: "งานประจำ",
      postedDate: "5 มกราคม 2568",
      closingDate: "5 กุมภาพันธ์ 2568",
      description:
        "รับผิดชอบงานบริหารงานทั่วไป การประสานงาน และงานเอกสารของหน่วยงาน",
    },
    {
      id: "4",
      title: "นักออกแบบนิทรรศการ",
      department: "สถาบันอุทยานการเรียนรู้",
      location: "กรุงเทพมหานคร",
      type: "งานประจำ",
      postedDate: "1 มกราคม 2568",
      closingDate: "1 กุมภาพันธ์ 2568",
      description: "ออกแบบและจัดทำนิทรรศการเพื่อส่งเสริมการเรียนรู้และวัฒนธรรม",
    },
  ];

  const departmentOptions = [
    { label: "ทั้งหมด", value: "" },
    { label: "สำนักงานบริหารและพัฒนาองค์ความรู้", value: "okmd" },
    { label: "มิวเซียมสยาม", value: "museum" },
    { label: "สถาบันอุทยานการเรียนรู้", value: "tkpark" },
  ];

  const locationOptions = [
    { label: "ทั้งหมด", value: "" },
    { label: "กรุงเทพมหานคร", value: "bangkok" },
    { label: "เชียงใหม่", value: "chiangmai" },
    { label: "อื่นๆ", value: "other" },
  ];

  const jobTypeOptions = [
    { label: "ทั้งหมด", value: "" },
    { label: "งานประจำ", value: "fulltime" },
    { label: "งานสัญญาจ้าง", value: "contract" },
    { label: "งานพาร์ทไทม์", value: "parttime" },
  ];

  return (
    <div className="w-full space-y-8">
      {/* HEADER BLOCK */}
      <div className="w-full h-[250px] md:h-[300px] rounded-3xl overflow-hidden relative shadow-sm">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/career-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            อาชีพ <span className="text-[#74CEE2]">และโอกาส</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            ร่วมเป็นส่วนหนึ่งของทีม OKMD เพื่อสร้างสรรค์สังคมแห่งการเรียนรู้
          </p>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div className="flex items-center text-sm text-gray-500 px-2">
        <Link href="/" className="hover:text-[#16A7CB] transition-colors">
          หน้าหลัก
        </Link>
        <span className="mx-2">›</span>
        <span className="text-[#16A7CB] font-medium">อาชีพและโอกาส</span>
      </div>

      {/* FILTERS & SEARCH */}
      <div className="bg-gray-50 rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <Input
              label="ค้นหาตำแหน่งงาน"
              placeholder="ค้นหา..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              icon={<CiSearch size={22} />}
            />
          </div>
          <div>
            <Dropdown
              label="หน่วยงาน"
              value={department}
              onChange={setDepartment}
              placeholder="เลือกหน่วยงาน"
              options={departmentOptions}
            />
          </div>
          <div>
            <Dropdown
              label="สถานที่"
              value={location}
              onChange={setLocation}
              placeholder="เลือกสถานที่"
              options={locationOptions}
            />
          </div>
          <div>
            <Dropdown
              label="ประเภทงาน"
              value={jobType}
              onChange={setJobType}
              placeholder="เลือกประเภทงาน"
              options={jobTypeOptions}
            />
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <Button className="w-full md:w-auto px-8 py-3 rounded-xl shadow-md">
            ค้นหาตำแหน่งงาน
          </Button>
        </div>
      </div>

      {/* JOB LISTINGS */}
      <div className="bg-white rounded-3xl p-6 md:p-10 border border-gray-100 shadow-sm">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D20] mb-6 border-l-4 border-[#16A7CB] pl-4">
          ตำแหน่งงานที่เปิดรับสมัคร ({jobs.length})
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <div key={job.id} className="w-full">
              <JobCard {...job} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
