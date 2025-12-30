"use client";

import { useState } from "react";
import Link from "next/link";
import SubHeroBanner from "@/components/ui/SubHeroBanner";
import Input from "@/components/ui/Input";
import Dropdown from "@/components/ui/Dropdown";
import Button from "@/components/ui/Button";
import { CiSearch } from "react-icons/ci";

type AnnouncementCardProps = {
  id: string;
  title: string;
  department: string;
  announcementDate: string;
  closingDate: string;
  status: "open" | "closed";
  description: string;
};

function AnnouncementCard({
  id,
  title,
  department,
  announcementDate,
  closingDate,
  status,
  description,
}: AnnouncementCardProps) {
  return (
    <Link
      href={`/job-announcement/${id}`}
      className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-6 transition-all duration-300 hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)] cursor-pointer border border-gray-100"
    >
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 text-base">{department}</p>
          </div>
          <span
            className={`px-4 py-2 rounded-lg text-sm font-semibold ${
              status === "open"
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {status === "open" ? "เปิดรับสมัคร" : "ปิดรับสมัคร"}
          </span>
        </div>

        <div className="border-t border-gray-100 pt-4 space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-600">
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
            <span>ประกาศเมื่อ: {announcementDate}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
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

export default function JobAnnouncement() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [status, setStatus] = useState("");

  // Mock data
  const announcements: AnnouncementCardProps[] = [
    {
      id: "1",
      title: "ประกาศรับสมัครงานตำแหน่งนักพัฒนาระบบสารสนเทศ",
      department: "สำนักงานบริหารและพัฒนาองค์ความรู้",
      announcementDate: "15 มกราคม 2568",
      closingDate: "15 กุมภาพันธ์ 2568",
      status: "open",
      description:
        "รับสมัครงานตำแหน่งนักพัฒนาระบบสารสนเทศ เพื่อพัฒนาระบบและแอปพลิเคชันขององค์กร",
    },
    {
      id: "2",
      title: "ประกาศรับสมัครงานตำแหน่งนักวิชาการองค์ความรู้",
      department: "สำนักงานบริหารและพัฒนาองค์ความรู้",
      announcementDate: "10 มกราคม 2568",
      closingDate: "10 กุมภาพันธ์ 2568",
      status: "open",
      description:
        "รับสมัครงานตำแหน่งนักวิชาการองค์ความรู้ เพื่อทำการวิจัยและพัฒนาองค์ความรู้",
    },
    {
      id: "3",
      title: "ประกาศรับสมัครงานตำแหน่งเจ้าหน้าที่บริหารงานทั่วไป",
      department: "มิวเซียมสยาม",
      announcementDate: "5 มกราคม 2568",
      closingDate: "5 กุมภาพันธ์ 2568",
      status: "closed",
      description:
        "รับสมัครงานตำแหน่งเจ้าหน้าที่บริหารงานทั่วไป เพื่อรับผิดชอบงานบริหารและประสานงาน",
    },
  ];

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

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Banner */}
      <SubHeroBanner image="/bannerabout.png" height="h-[300px]">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            ประกาศ <span className="text-[#74CEE2]">รับสมัครงาน</span>
          </h1>
          <p className="text-xl mt-4 text-white/90">
            ติดตามประกาศรับสมัครงานล่าสุดจาก OKMD
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
              <span className="text-[#74CEE2]">ประกาศรับสมัครงาน</span>
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
                <div className="col-span-12 sm:col-span-6 md:col-span-4">
                  <Input
                    label="ค้นหาประกาศ"
                    placeholder="ค้นหาประกาศ..."
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

          {/* Announcement Listings */}
          <div className="col-span-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-5 md:mb-6">
              ประกาศรับสมัครงาน ({announcements.length})
            </h2>

            <div className="grid grid-cols-12 gap-4 sm:gap-5 md:gap-6">
              {announcements.map((announcement) => (
                <div key={announcement.id} className="col-span-12 sm:col-span-6 lg:col-span-6">
                  <AnnouncementCard {...announcement} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

