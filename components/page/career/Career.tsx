"use client";

import { useState } from "react";
import Link from "next/link";
import React from "react";
import SubHeroBanner from "@/components/ui/SubHeroBanner";
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

function JobCard({ id, title, department, location, type, postedDate, closingDate, description }: JobCardProps) {
  return (
    <Link
      href={`/career/${id}`}
      className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-6 transition-all duration-300 hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)] cursor-pointer border border-gray-100"
    >
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 text-base">{department}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-2 bg-[#E8F6FB] text-[#16A7CB] rounded-lg text-sm font-semibold">
            {location}
          </span>
          <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold">
            {type}
          </span>
        </div>

        <div className="border-t border-gray-100 pt-4 space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
            <span>ประกาศเมื่อ: {postedDate}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <span>ปิดรับสมัคร: {closingDate}</span>
          </div>
        </div>

        <p className="text-gray-700 text-sm line-clamp-2">{description}</p>

        <div className="pt-2">
          <span className="text-[#16A7CB] font-semibold text-sm hover:underline">
            ดูรายละเอียดเพิ่มเติม →
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
      description: "รับผิดชอบในการพัฒนาและดูแลระบบสารสนเทศขององค์กร รวมถึงการออกแบบและพัฒนาระบบใหม่",
    },
    {
      id: "2",
      title: "นักวิชาการองค์ความรู้",
      department: "สำนักงานบริหารและพัฒนาองค์ความรู้",
      location: "กรุงเทพมหานคร",
      type: "งานประจำ",
      postedDate: "10 มกราคม 2568",
      closingDate: "10 กุมภาพันธ์ 2568",
      description: "ทำการวิจัยและพัฒนาองค์ความรู้ในด้านต่างๆ เพื่อส่งเสริมการเรียนรู้และพัฒนาสังคม",
    },
    {
      id: "3",
      title: "เจ้าหน้าที่บริหารงานทั่วไป",
      department: "มิวเซียมสยาม",
      location: "กรุงเทพมหานคร",
      type: "งานประจำ",
      postedDate: "5 มกราคม 2568",
      closingDate: "5 กุมภาพันธ์ 2568",
      description: "รับผิดชอบงานบริหารงานทั่วไป การประสานงาน และงานเอกสารของหน่วยงาน",
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
    <div className="w-full min-h-screen bg-white">
      {/* Hero Banner */}
      <SubHeroBanner
        image="/career-hero.jpg"
        height="h-[300px]"
      >
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            อาชีพ <span className="text-[#74CEE2]">และโอกาส</span>
          </h1>
          <p className="text-xl mt-4 text-white/90">
            ร่วมเป็นส่วนหนึ่งของทีม OKMD เพื่อสร้างสรรค์สังคมแห่งการเรียนรู้
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
              <span className="text-[#74CEE2]">อาชีพและโอกาส</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto pb-8 sm:pb-12 md:pb-16">
        <div className="grid grid-cols-12 gap-4 sm:gap-6">
          {/* Filters */}
          <div className="col-span-12">
            <div className="bg-gray-50 rounded-xl p-4 sm:p-5 md:p-6 mb-6 sm:mb-7 md:mb-8">
              <div className="grid grid-cols-12 gap-3 sm:gap-4">
                <div className="col-span-12 sm:col-span-6 md:col-span-3">
                  <Input
                    label="ค้นหาตำแหน่งงาน"
                    placeholder="ค้นหาตำแหน่งงาน..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    icon={<CiSearch size={22} />}
                  />
                </div>

                <div className="col-span-12 sm:col-span-6 md:col-span-3">
                  <Dropdown
                    label="หน่วยงาน"
                    value={department}
                    onChange={setDepartment}
                    placeholder="เลือกหน่วยงาน"
                    options={departmentOptions}
                  />
                </div>

                <div className="col-span-12 sm:col-span-6 md:col-span-3">
                  <Dropdown
                    label="สถานที่"
                    value={location}
                    onChange={setLocation}
                    placeholder="เลือกสถานที่"
                    options={locationOptions}
                  />
                </div>

                <div className="col-span-12 sm:col-span-6 md:col-span-3">
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
                <Button className="w-full sm:w-auto">ค้นหา</Button>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="col-span-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-5 md:mb-6">
              ตำแหน่งงานที่เปิดรับสมัคร ({jobs.length})
            </h2>

            <div className="grid grid-cols-12 gap-4 sm:gap-5 md:gap-6">
              {jobs.map((job) => (
                <div key={job.id} className="col-span-12 sm:col-span-6 lg:col-span-6">
                  <JobCard {...job} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

