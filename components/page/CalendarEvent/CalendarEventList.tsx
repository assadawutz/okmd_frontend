"use client";

import Link from "next/link";
import CalendarEvent from "@/components/CalendarEvent";
import EventCard from "@/components/page/CalendarEvent/EventCard";
import { useState } from "react";
import FilterDropdown from "@/components/FilterDropdown";
import SubHeroBanner from "@/components/ui/SubHeroBanner";

const MONTHS = [
  "แสดงผลทุกเดือน",
  "มกราคม",
  "กุมภาพันธ์",
  "มีนาคม",
  "เมษายน",
  "พฤษภาคม",
  "มิถุนายน",
  "กรกฎาคม",
  "สิงหาคม",
  "กันยายน",
  "ตุลาคม",
  "พฤศจิกายน",
  "ธันวาคม",
];

// Mock Data
const events = [
  {
    id: 1,
    title: "กิจกรรม Freedom Learn x Conet LANNA: Yi Peng...",
    date: "25 ตุลาคม 2568 เวลา: 11.00 - 15.30 น.",
    location:
      "สถานที่: ห้องเวิร์คช็อป 1 และ 2 อุทยานการเรียนรู้ TK Park ชั้น 8 centralWorld",
    image: "/event1.png",
    alt: "Yi Peng Lantern",
  },
  {
    id: 2,
    title: "กิจกรรม Freedom Learn x Conet LANNA: Yi Peng...",
    date: "25 ตุลาคม 2568 เวลา: 11.00 - 15.30 น.",
    location:
      "สถานที่: ห้องเวิร์คช็อป 1 และ 2 อุทยานการเรียนรู้ TK Park ชั้น 8 centralWorld",
    image: "/event2.png",
    alt: "Family Activity",
  },
  {
    id: 3,
    title: "กิจกรรม Freedom Learn x Conet LANNA: Yi Peng...",
    date: "25 ตุลาคม 2568 เวลา: 11.00 - 15.30 น.",
    location:
      "สถานที่: ห้องเวิร์คช็อป 1 และ 2 อุทยานการเรียนรู้ TK Park ชั้น 8 centralWorld",
    image: "/event3.png",
    alt: "Book Cover",
  },
  {
    id: 4,
    title: "กิจกรรม Freedom Learn x Conet LANNA: Yi Peng...",
    date: "25 ตุลาคม 2568 เวลา: 11.00 - 15.30 น.",
    location:
      "สถานที่: ห้องเวิร์คช็อป 1 และ 2 อุทยานการเรียนรู้ TK Park ชั้น 8 centralWorld",
    image: "/event1.png",
    alt: "Yi Peng Lantern",
  },
];

export default function CalendarEventListPage() {
  const [filters, setFilters] = useState({
    year: "2568",
    month: "all",
    org: "all",
  });
  return (
    <main className="min-h-screen bg-white text-gray-800 pb-20 md:pb-32">
      {/* Hero Banner */}
      <SubHeroBanner image="/bannerabout.png" height="h-[300px]">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            ปฏิทิน <span className="text-[#74CEE2]">กิจกรรม</span>
          </h1>
          <p className="text-lg md:text-xl mt-4 text-white/90 max-w-2xl">
            พบกับกิจกรรมเสริมสร้างความรู้เพื่อกระตุกต่อมคิดตลอดทั้งปี
          </p>
        </div>
      </SubHeroBanner>

      {/* Breadcrumb - Standard */}
      <div className="border-b border-zinc-200 bg-white">
        <div className="container mx-auto px-4 h-16 md:h-20 flex items-center text-sm md:text-base text-gray-600">
          <Link
            href="/"
            className="hover:text-[#74CEE2] cursor-pointer transition"
          >
            หน้าหลัก
          </Link>
          <span className="mx-2">›</span>
          <span className="text-[#74CEE2]">ปฏิทินกิจกรรม</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Filters */}
        <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            <div className="col-span-12 md:col-span-4">
              <FilterDropdown
                label="ปีกิจกรรม"
                value={filters.year}
                options={["ปีกิจกรรม 2568", "ปีกิจกรรม 2567", "ปีกิจกรรม 2566"]}
                onChange={(v) => setFilters({ ...filters, year: v })}
              />
            </div>

            <div className="col-span-12 md:col-span-4">
              <FilterDropdown
                label="เดือน"
                value={filters.month}
                options={MONTHS}
                onChange={(v) => setFilters({ ...filters, month: v })}
              />
            </div>

            <div className="col-span-12 md:col-span-4">
              <FilterDropdown
                label="องค์กร"
                value={filters.org}
                options={[
                  "เลือกแสดงผลเฉพาะองค์กร",
                  "สำนักงานบริหารและพัฒนาองค์ความรู้",
                  "มิวเซียมสยาม",
                  "สถาบันอุทยานการเรียนรู้",
                ]}
                onChange={(v) => setFilters({ ...filters, org: v })}
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 md:mb-10">
            กิจกรรมที่น่าสนใจประจำเดือนนี้
          </h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-start">
            {/* ซ้าย: event cards (8 cols) */}
            <div className="col-span-1 lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {events.map((event) => (
                  <div key={event.id} className="w-full">
                    <EventCard
                      event={event}
                      path={`/calendar-of-event/${event.id}?title=${event.title}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* ขวา: Calendar (4 cols) */}
            <div className="col-span-1 lg:col-span-4 w-full">
              <div className="sticky top-24">
                <CalendarEvent />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
