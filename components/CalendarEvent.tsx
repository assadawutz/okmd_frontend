"use client";

import { useState, useMemo } from "react";
import { CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";

// --- Types & Interfaces ---
interface Event {
  id: number;
  title: string;
  time: string;
  date: Date; // ใช้วันที่แบบ Object จริง
  type: "music" | "talk" | "workshop";
}

// --- Mock Data (ข้อมูลจำลองแบบมีวันที่จริง) ---
// สร้าง Event ในเดือนปัจจุบันเพื่อทดสอบ
const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth();

const MOCK_EVENTS: Event[] = [
  {
    id: 1,
    title: "Music Talk: Music and the Cities (London)",
    time: "15.00 - 17.00 น.",
    date: new Date(currentYear, currentMonth, 20), // วันที่ 20 ของเดือนนี้
    type: "music",
  },
  {
    id: 2,
    title: "Art Workshop: Painting Dreams",
    time: "10.00 - 12.00 น.",
    date: new Date(currentYear, currentMonth, 14), // วันที่ 14 ของเดือนนี้
    type: "workshop",
  },
  {
    id: 3,
    title: "Tech Meetup 2025",
    time: "18.00 - 20.00 น.",
    date: new Date(currentYear, currentMonth, 20), // วันที่ 20 (มี 2 งาน)
    type: "talk",
  },
];

// --- Helper Functions ---
const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const daysFull = [
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
];

export default function RealCalendarEvent() {
  // State
  const [currentDate, setCurrentDate] = useState(new Date()); // เดือนที่กำลังดู
  const [selectedDate, setSelectedDate] = useState(new Date()); // วันที่ user คลิกเลือก

  // Logic คำนวณปฏิทิน
  const calendarDays = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // หาวันแรกของเดือน (0-6)
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    // หาจำนวนวันในเดือนปัจจุบัน
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    // หาจำนวนวันในเดือนก่อนหน้า (สำหรับเติมช่องว่าง)
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    const daysArray = [];

    // 1. เติมวันที่ของเดือนก่อนหน้า (จางๆ)
    for (let i = 0; i < firstDayOfMonth; i++) {
      daysArray.push({
        day: daysInPrevMonth - firstDayOfMonth + 1 + i,
        currentMonth: false,
        dateObj: new Date(
          year,
          month - 1,
          daysInPrevMonth - firstDayOfMonth + 1 + i
        ),
      });
    }

    // 2. เติมวันที่ของเดือนปัจจุบัน
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push({
        day: i,
        currentMonth: true,
        dateObj: new Date(year, month, i),
      });
    }

    // 3. เติมวันที่ของเดือนถัดไป (ให้ครบตาราง 42 ช่อง หรือ 35 ช่อง)
    const remainingSlots = 42 - daysArray.length;
    for (let i = 1; i <= remainingSlots; i++) {
      daysArray.push({
        day: i,
        currentMonth: false,
        dateObj: new Date(year, month + 1, i),
      });
    }

    return daysArray;
  }, [currentDate]);

  // Filter Events ตามวันที่เลือก
  const selectedEvents = MOCK_EVENTS.filter(
    (event) =>
      event.date.getDate() === selectedDate.getDate() &&
      event.date.getMonth() === selectedDate.getMonth() &&
      event.date.getFullYear() === selectedDate.getFullYear()
  );

  // เช็คว่าวันไหนมี Event บ้าง (เพื่อแสดงจุดสี)
  const hasEvent = (d: Date) => {
    return MOCK_EVENTS.some(
      (event) =>
        event.date.getDate() === d.getDate() &&
        event.date.getMonth() === d.getMonth() &&
        event.date.getFullYear() === d.getFullYear()
    );
  };

  // ฟังก์ชันเปลี่ยนเดือน
  const prevMonth = () =>
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  const nextMonth = () =>
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );

  return (
    <div className="bg-[#1a1c23] text-white rounded-3xl p-6 shadow-xl w-full max-w-sm mx-auto">
      {/* ส่วนควบคุมเปลี่ยนเดือน (แอบไว้ หรือทำให้เนียน) */}
      <div className="flex justify-between items-center mb-2 px-1">
        {/* ปุ่มซ่อนเนียนๆ เพื่อเปลี่ยนเดือน */}
        <button onClick={prevMonth} className="text-gray-600 hover:text-white">
          <ChevronLeft size={16} />
        </button>
        <button onClick={nextMonth} className="text-gray-600 hover:text-white">
          <ChevronRight size={16} />
        </button>
      </div>

      {/* ส่วนบน: แสดงผลวันที่เลือก - ตารางปฏิทิน */}
      <div className="flex justify-between items-start mb-6 gap-4">
        {/* ซ้าย: วันที่ที่เลือก (Interactive) */}
        <div className="flex flex-col pt-2 min-w-[100px]">
          <div className="text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-1">
            {daysFull[selectedDate.getDay()]}
          </div>
          <div className="text-gray-400 text-xs font-medium mb-auto">
            {months[selectedDate.getMonth()]}
          </div>
          <div className="text-7xl font-light text-white mt-2 leading-none">
            {selectedDate.getDate()}
          </div>
        </div>

        {/* ขวา: ตารางปฏิทิน (Generated Grid) */}
        <div className="pt-1">
          {/* หัวตาราง */}
          <div className="grid grid-cols-7 gap-2 text-center text-[10px] text-gray-500 mb-2 font-medium">
            {daysOfWeek.map((d, i) => (
              <span key={i}>{d}</span>
            ))}
          </div>

          {/* วันที่ */}
          <div className="grid grid-cols-7 gap-y-2 gap-x-2 text-center text-[10px]">
            {calendarDays.map((dateItem, index) => {
              const isSelected =
                dateItem.dateObj.toDateString() === selectedDate.toDateString();
              const isEventDay = hasEvent(dateItem.dateObj);

              return (
                <div
                  key={index}
                  onClick={() => setSelectedDate(dateItem.dateObj)}
                  className={`
                    relative flex items-center justify-center w-5 h-5 cursor-pointer rounded-full transition-all
                    ${
                      !dateItem.currentMonth
                        ? "text-gray-600 opacity-40"
                        : "text-gray-400 hover:text-white"
                    }
                    ${isSelected ? "text-cyan-400 font-bold scale-110" : ""}
                  `}
                >
                  {dateItem.day}

                  {/* จุดสีแดงแจ้งเตือน Event */}
                  {isEventDay && !isSelected && (
                    <span className="absolute -bottom-1 w-1 h-1 bg-red-500 rounded-full"></span>
                  )}
                  {/* กรณีเลือกวันที่มี event ให้จุดหายไป หรือเปลี่ยนสีตามต้องการ */}
                  {isEventDay && isSelected && (
                    <span className="absolute -bottom-1 w-1 h-1 bg-cyan-400 rounded-full"></span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700/50 mb-4"></div>

      {/* ส่วนล่าง: รายการกิจกรรม (Filtered Event List) */}
      <div className="space-y-3 min-h-[120px]">
        {selectedEvents.length > 0 ? (
          selectedEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl p-3 flex gap-3 items-start shadow-sm transition hover:scale-[1.02] cursor-pointer animate-in fade-in slide-in-from-bottom-2 duration-300"
            >
              <div
                className={`p-2 rounded-lg shrink-0 ${
                  event.type === "workshop"
                    ? "bg-red-50 text-red-500"
                    : "bg-cyan-50 text-cyan-500"
                }`}
              >
                <CalendarIcon size={16} />
              </div>
              <div>
                <p className="text-gray-900 text-xs font-bold leading-tight line-clamp-2">
                  {event.title}
                </p>
                <p className="text-gray-500 text-[10px] mt-1 font-medium">
                  เวลา: {event.time}
                </p>
              </div>
            </div>
          ))
        ) : (
          // กรณีไม่มีกิจกรรม
          <div className="text-center py-6 text-gray-500 text-xs">
            ไม่มีกิจกรรมในวันที่ {selectedDate.getDate()}{" "}
            {months[selectedDate.getMonth()]}
          </div>
        )}
      </div>
    </div>
  );
}
