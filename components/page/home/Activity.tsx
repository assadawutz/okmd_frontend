"use client";

import Image from "next/image";
import Link from "next/link";

const ACTIVITIES = [
  {
    id: 1,
    img: "/act1.png",
    title: "กิจกรรม Freedom Learn x Conet LANNA: Yi Peng...",
    location: "สถานที่: ห้องเวิร์กช็อป 1 และ 2 อุทยาน",
    venue: "การเรียนรู้ TK Park ชั้น 8 centralwOrld",
    date: "25 ตุลาคม 2568",
    time: "เวลา: 11.00 - 15.30 น.",
  },
  {
    id: 2,
    img: "/act2.png",
    title: "กิจกรรม Freedom Learn x Conet LANNA: Yi Peng...",
    location: "สถานที่: ห้องเวิร์กช็อป 1 และ 2 อุทยาน",
    venue: "การเรียนรู้ TK Park ชั้น 8 centralwOrld",
    date: "25 ตุลาคม 2568",
    time: "เวลา: 11.00 - 15.30 น.",
  },
  {
    id: 3,
    img: "/act3.png",
    title: "กิจกรรม Freedom Learn x Conet LANNA: Yi Peng...",
    location: "สถานที่: ห้องเวิร์กช็อป 1 และ 2 อุทยาน",
    venue: "การเรียนรู้ TK Park ชั้น 8 centralwOrld",
    date: "25 ตุลาคม 2568",
    time: "เวลา: 11.00 - 15.30 น.",
  },
];

const CAL = {
  day: "MONDAY",
  month: "September",
  date: 20,
  week: ["S", "M", "T", "W", "T", "F", "S"],
  grid: [
    26, 27, 28, 29, 30, 31, 1,
    2, 3, 4, 5, 6, 7, 8,
    9, 10, 11, 12, 13, 14, 15,
    16, 17, 18, 19, 20, 21, 22,
    23, 24, 25, 26, 27, 28, 29,
    30, 31, 1, 2, 3, 4, 5,
  ],
  events: [
    { date: 20, title: "Music Talk: Music and the Cities ครั้งที่ 5 London", time: "เวลา: 15.00 - 17.00 น." },
    { date: 20, title: "Music Talk: Music and the Cities ครั้งที่ 5 London", time: "เวลา: 15.00 - 17.00 น." },
  ]
};

export default function ActivityBlock() {
  return (
    <section aria-label="Activity Block" className="w-full bg-[#F8FBFD] py-16 md:py-20">
      <div className="container mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B1D20]">
            Activity Calendar
          </h2>
          <p className="text-[#6ABBCE] text-sm md:text-base mt-2">
            ทุกกิจกรรมคือแรงบันดาลใจ สู่ความคิดที่แตกต่าง
          </p>
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden md:grid grid-cols-12 gap-6">

          {/* EVENT CARDS - LEFT */}
          <div className="col-span-8 grid grid-cols-2 gap-5">
            
            {/* ROW 1 */}
            {ACTIVITIES.slice(0, 2).map((item) => (
              <Link
                key={item.id}
                href={`/calendar-of-event/${item.id}`}
                className="group relative h-[240px] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Date Badge */}
                <div className="absolute top-3 left-3 bg-white/95 rounded-lg px-2.5 py-1.5 text-center shadow-sm">
                  <p className="text-[10px] text-gray-500 leading-tight">วันเสาร์ที่ 25 ตุลาคม 2568</p>
                  <p className="text-[10px] text-gray-500">เวลา 11:00-15:30 น.</p>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-sm font-semibold leading-snug line-clamp-2 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs opacity-80 line-clamp-1">{item.location}</p>
                  <p className="text-xs opacity-80 line-clamp-1">{item.venue}</p>
                  <div className="flex items-center text-[#74CEE2] text-xs font-medium mt-2">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                    อ่านเพิ่มเติม
                  </div>
                </div>
              </Link>
            ))}

            {/* ROW 2 - Single larger card */}
            <Link
              href={`/calendar-of-event/${ACTIVITIES[2].id}`}
              className="group col-span-1 relative h-[280px] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <Image
                src={ACTIVITIES[2].img}
                alt={ACTIVITIES[2].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Date Badge */}
              <div className="absolute top-3 left-3 bg-white/95 rounded-lg px-2.5 py-1.5 text-center shadow-sm">
                <p className="text-[10px] text-gray-500 leading-tight">วันเสาร์ที่ 25 ตุลาคม 2568</p>
                <p className="text-[10px] text-gray-500">เวลา 11:00-15:30 น.</p>
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h3 className="text-sm font-semibold leading-snug line-clamp-2 mb-1">
                  {ACTIVITIES[2].title}
                </h3>
                <p className="text-xs opacity-80 line-clamp-1">{ACTIVITIES[2].location}</p>
                <p className="text-xs opacity-80 line-clamp-1">{ACTIVITIES[2].venue}</p>
                <div className="flex items-center text-[#74CEE2] text-xs font-medium mt-2">
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                  อ่านเพิ่มเติม
                </div>
              </div>
            </Link>

          </div>

          {/* CALENDAR - RIGHT */}
          <div className="col-span-4 bg-white rounded-xl shadow-md p-5">
            
            {/* Calendar Header */}
            <div className="flex items-center justify-center mb-4">
              <div className="text-center">
                <p className="text-xs text-[#6ABBCE] uppercase tracking-wide">{CAL.day}</p>
                <p className="text-5xl font-bold text-[#1B1D20]">{CAL.date}</p>
                <p className="text-sm text-gray-500">{CAL.month}</p>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 text-center mb-4">
              {CAL.week.map((w, idx) => (
                <span key={`w-${idx}`} className="text-gray-400 text-xs font-medium py-1">
                  {w}
                </span>
              ))}

              {CAL.grid.map((n, idx) => {
                const active = n === CAL.date;
                return (
                  <button
                    key={`d-${idx}`}
                    className={`
                      text-xs py-1.5 rounded transition-all
                      ${active
                        ? "bg-[#16A7CB] text-white font-semibold"
                        : "text-gray-600 hover:bg-gray-100"
                      }
                    `}
                  >
                    {n}
                  </button>
                );
              })}
            </div>

            {/* Events List */}
            <div className="space-y-2 border-t pt-3">
              {CAL.events.map((event, idx) => (
                <div key={idx} className="flex gap-2 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                  <div className="w-1 bg-[#16A7CB] rounded-full flex-shrink-0"></div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-[#1B1D20] line-clamp-1">{event.title}</p>
                    <p className="text-[10px] text-gray-500">{event.time}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* ================= MOBILE ================= */}
        <div className="md:hidden flex flex-col gap-6 px-4">

          <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar -mx-4 px-4">
            {ACTIVITIES.map((item) => (
              <Link
                key={item.id}
                href={`/calendar-of-event/${item.id}`}
                className="relative w-[80vw] max-w-[300px] h-[220px] flex-shrink-0 rounded-xl overflow-hidden shadow-md"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-sm font-semibold leading-snug line-clamp-2 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs opacity-80 line-clamp-1">{item.date}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link 
              href="/calendar-of-event" 
              className="inline-flex items-center text-[#16A7CB] text-sm font-medium"
            >
              ดูทั้งหมด
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
