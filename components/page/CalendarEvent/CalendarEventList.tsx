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
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Banner */}
      <SubHeroBanner image="/bannerabout.png" height="h-[300px]">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            ปฏิทิน <span className="text-[#74CEE2]">กิจกรรม</span>
          </h1>
          <p className="text-xl mt-4 text-white/90">
            พบกับกิจกรรมเสริมสร้างความรู้เพื่อกระตุกต่อมคิดตลอดทั้งปี
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
              <span className="text-[#74CEE2]">ปฏิทินกิจกรรม</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto pb-8 sm:pb-12 md:pb-16">
        <div className="grid grid-cols-12 gap-4 sm:gap-6">
          {/* Filters */}
          <div className="col-span-12">
            <div className="bg-gray-50 rounded-xl p-4 sm:p-5 md:p-6 mb-6 sm:mb-7 md:mb-8">
              <div className="grid grid-cols-12 gap-3 sm:gap-4">
                <div className="col-span-12 sm:col-span-6 md:col-span-4">
                  <FilterDropdown
                    label="ปีกิจกรรม"
                    value={filters.year}
                    options={["ปีกิจกรรม 2568", "ปีกิจกรรม 2567", "ปีกิจกรรม 2566"]}
                    onChange={(v) => setFilters({ ...filters, year: v })}
                  />
                </div>

                <div className="col-span-12 sm:col-span-6 md:col-span-4">
                  <FilterDropdown
                    label="เดือน"
                    value={filters.month}
                    options={MONTHS}
                    onChange={(v) => setFilters({ ...filters, month: v })}
                  />
                </div>

                <div className="col-span-12 sm:col-span-6 md:col-span-4">
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
          </div>

          {/* Content Section */}
          <div className="col-span-12">
            <section>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-5 md:mb-6">
                กิจกรรมที่น่าสนใจประจำเดือนนี้
              </h2>

              {/* Grid Layout */}
              <div className="grid grid-cols-12 gap-4 sm:gap-6 md:gap-8 items-start">
                {/* ซ้าย: event cards */}
                <div className="col-span-12 lg:col-span-8">
                  <div className="grid grid-cols-12 gap-4 sm:gap-5 md:gap-6">
                    {events.map((event) => (
                      <div key={event.id} className="col-span-12 sm:col-span-6">
                        <EventCard
                          event={event}
                          path={`/calendar-of-event/${event.id}?title=${event.title}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* ขวา: Calendar */}
                <div className="col-span-12 lg:col-span-4">
                  <div className="sticky top-4 sm:top-6 md:top-8">
                    <CalendarEvent />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

