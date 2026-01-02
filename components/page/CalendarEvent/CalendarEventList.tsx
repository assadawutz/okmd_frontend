"use client";

import Link from "next/link";
import CalendarEvent from "@/components/CalendarEvent";
import EventCard from "@/components/page/CalendarEvent/EventCard";
import { useState } from "react";
import FilterDropdown from "@/components/FilterDropdown";

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
  "มกราคม",
  "กุมภาพันธ์",
  "มีนาคม",
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
    <div className="w-full space-y-8">
      {/* HEADER BLOCK */}
      <div className="w-full h-[250px] md:h-[300px] rounded-3xl overflow-hidden relative shadow-sm">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/bannerabout.png')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            ปฏิทิน <span className="text-[#74CEE2]">กิจกรรม</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl">
            พบกับกิจกรรมเสริมสร้างความรู้เพื่อกระตุกต่อมคิดตลอดทั้งปี
          </p>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div className="flex items-center text-sm text-gray-500 px-2">
        <Link href="/" className="hover:text-[#16A7CB] transition-colors">
          หน้าหลัก
        </Link>
        <span className="mx-2">›</span>
        <span className="text-[#16A7CB] font-medium">ปฏิทินกิจกรรม</span>
      </div>

      {/* FILTER BLOCK */}
      <div className="bg-gray-50 rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div>
            <FilterDropdown
              label="ปีกิจกรรม"
              value={filters.year}
              options={["ปีกิจกรรม 2568", "ปีกิจกรรม 2567", "ปีกิจกรรม 2566"]}
              onChange={(v) => setFilters({ ...filters, year: v })}
            />
          </div>

          <div>
            <FilterDropdown
              label="เดือน"
              value={filters.month}
              options={MONTHS}
              onChange={(v) => setFilters({ ...filters, month: v })}
            />
          </div>

          <div>
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

      {/* CONTENT GRID */}
      <div className="bg-white rounded-3xl p-6 md:p-10 border border-gray-100 shadow-sm">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D20] mb-8 border-l-4 border-[#16A7CB] pl-4">
          กิจกรรมที่น่าสนใจประจำเดือนนี้
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: EVENTS */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

          {/* RIGHT: CALENDAR WIDGET */}
          <div className="lg:col-span-4 w-full">
            <div className="sticky top-24 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
              <CalendarEvent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
