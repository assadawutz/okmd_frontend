"use client";

import Link from "next/link";
import Image from "next/image";
import CalendarEvent from "@/components/CalendarEvent";
import { useState } from "react";

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
    location: "สถานที่: ห้องเวิร์คช็อป 1 และ 2 อุทยาน",
    venue: "การเรียนรู้ TK Park ชั้น 8 centralWorld",
    image: "/event1.png",
  },
  {
    id: 2,
    title: "กิจกรรม Freedom Learn x Conet LANNA: Yi Peng...",
    date: "25 ตุลาคม 2568 เวลา: 11.00 - 15.30 น.",
    location: "สถานที่: ห้องเวิร์คช็อป 1 และ 2 อุทยาน",
    venue: "การเรียนรู้ TK Park ชั้น 8 centralWorld",
    image: "/event2.png",
  },
  {
    id: 3,
    title: "กิจกรรม Freedom Learn x Conet LANNA: Yi Peng...",
    date: "25 ตุลาคม 2568 เวลา: 11.00 - 15.30 น.",
    location: "สถานที่: ห้องเวิร์คช็อป 1 และ 2 อุทยาน",
    venue: "การเรียนรู้ TK Park ชั้น 8 centralWorld",
    image: "/event3.png",
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
      
      {/* Breadcrumb */}
      <div className="container mx-auto pt-6 md:pt-8 pb-4">
        <div className="text-sm text-gray-500 font-medium">
          <Link href="/" className="hover:text-[#16A7CB]">หน้าหลัก</Link>
          {" > "}
          <span className="text-[#16A7CB]">ปฏิทินกิจกรรม</span>
        </div>
      </div>

      <div className="container mx-auto pb-16">
        
        {/* Title */}
        <p className="text-gray-500 text-sm mb-6">
          พบกับกิจกรรมเสริมสร้างความรู้เพื่อกระตุกต่อมคิดตลอดทั้งปี 2568
        </p>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <select
            value={filters.year}
            onChange={(e) => setFilters({ ...filters, year: e.target.value })}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#16A7CB]/30"
          >
            <option value="2568">ปีกิจกรรม 2568</option>
            <option value="2567">ปีกิจกรรม 2567</option>
            <option value="2566">ปีกิจกรรม 2566</option>
          </select>

          <select
            value={filters.month}
            onChange={(e) => setFilters({ ...filters, month: e.target.value })}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#16A7CB]/30"
          >
            {MONTHS.map((month, idx) => (
              <option key={idx} value={idx === 0 ? "all" : month}>{month}</option>
            ))}
          </select>

          <select
            value={filters.org}
            onChange={(e) => setFilters({ ...filters, org: e.target.value })}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#16A7CB]/30"
          >
            <option value="all">เลือกแสดงผลเฉพาะองค์กร</option>
            <option value="okmd">สำนักงานบริหารและพัฒนาองค์ความรู้</option>
            <option value="museum">มิวเซียมสยาม</option>
            <option value="tkpark">สถาบันอุทยานการเรียนรู้</option>
          </select>
        </div>

        {/* Content */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-[#1B1D20] mb-6">
            กิจกรรมที่น่าสนใจประจำเดือนนี้
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            
            {/* Event Cards */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {events.map((event) => (
                  <Link
                    key={event.id}
                    href={`/calendar-of-event/${event.id}`}
                    className="group block"
                  >
                    <div className="relative h-[200px] rounded-xl overflow-hidden mb-3">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Date Badge */}
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm">
                        <p className="text-[11px] text-gray-500 leading-tight">วันเสาร์ที่ 25 ตุลาคม 2568</p>
                        <p className="text-[11px] text-gray-500">เวลา 11:00-15:30 น.</p>
                      </div>
                    </div>
                    
                    <p className="text-xs text-gray-500 mb-1">{event.date}</p>
                    
                    <h3 className="text-base font-semibold text-[#1B1D20] mb-1 group-hover:text-[#16A7CB] transition-colors line-clamp-2">
                      {event.title}
                    </h3>
                    
                    <p className="text-xs text-gray-500 line-clamp-1">{event.location}</p>
                    <p className="text-xs text-gray-500 line-clamp-1">{event.venue}</p>
                    
                    <div className="flex items-center text-[#16A7CB] text-sm font-medium mt-2">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                      อ่านเพิ่มเติม
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Calendar */}
            <div className="lg:col-span-4">
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
