"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  getActivities,
  getCalendarData,
  type ActivityItem,
  type CalendarData,
} from "@/lib/services/activity.service";

/* ฟังก์ชันแก้ dateTime ให้ถูกต้อง YYYY-MM-DD */
function formatDate(day: number) {
  const padded = String(day).padStart(2, "0");
  return `2024-09-${padded}`;
}

export default function ActivityBlock() {
  const [activities, setActivities] = useState<ActivityItem[]>([]);
  const [calendar, setCalendar] = useState<CalendarData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const [activitiesData, calendarData] = await Promise.all([
          getActivities(),
          getCalendarData(),
        ]);

        if (!activitiesData || activitiesData.length === 0) {
          setError("ไม่พบข้อมูลกิจกรรม");
        } else {
          setActivities(activitiesData);
          setCalendar(calendarData);
        }
      } catch (err) {
        console.error("Failed to fetch activity data:", err);
        setError("เกิดข้อผิดพลาดในการโหลดข้อมูล");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section
      aria-label="Activity Block"
      className="w-full bg-[#F8FBFD] py-16 md:py-20"
    >
      <div className="container mx-auto flex flex-col gap-8 md:gap-10 lg:gap-12">
        <div className="flex flex-col text-center md:flex-row md:items-center md:justify-center gap-3 md:gap-4">
          <div>
            <p className="text-3xl md:text-4xl text-[#000000] font-semibold">
              Activity Calendar
            </p>
            <h2 className="text-sm md:text-base mt-4 md:mt-6 font-normal text-[#6ABBCE] leading-tight">
              ทุกกิจกรรมคือแรงบันดาลใจ สู่ความคิดที่แตกต่าง
            </h2>
          </div>
        </div>

        {/* LOADING STATE */}
        {isLoading && (
          <div className="flex items-center justify-center py-20">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-[#74CEE2] border-t-transparent rounded-full animate-spin"></div>
              <p className="text-[#6ABBCE] text-lg">
                กำลังโหลดข้อมูลกิจกรรม...
              </p>
            </div>
          </div>
        )}

        {/* ERROR STATE */}
        {error && !isLoading && (
          <div className="flex items-center justify-center py-20">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md text-center">
              <div className="text-red-500 text-5xl mb-4">⚠️</div>
              <h3 className="text-xl font-semibold text-[#1B1D20] mb-2">
                เกิดข้อผิดพลาด
              </h3>
              <p className="text-gray-600">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-6 px-6 py-2.5 bg-[#74CEE2] text-white rounded-xl hover:bg-[#5FC4D8] transition-colors"
              >
                โหลดใหม่อีกครั้ง
              </button>
            </div>
          </div>
        )}

        {/* CONTENT - Only show when not loading and no error */}
        {!isLoading && !error && activities.length > 0 && calendar && (
          <>
            {/* ================= DESKTOP ================= */}
            <div className="hidden md:flex flex-col gap-5 md:gap-6 lg:gap-8">
              {/* ---------------- ROW 1 ---------------- */}
              <div className="grid grid-cols-3 gap-5 md:gap-6 lg:gap-8">
                {activities.slice(0, 3).map((item) => (
                  <article
                    key={item.id}
                    aria-label={`Activity ${item.title}`}
                    tabIndex={0}
                    role="button"
                    className="relative h-[220px] lg:h-[240px] rounded-2xl overflow-hidden group cursor-pointer shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#74CEE2] focus:ring-offset-2"
                  >
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/60 group-hover:to-black/70 transition-all duration-300" />

                    <div className="absolute top-3 right-3">
                      <img
                        src="/mu-3.png"
                        alt=""
                        className="w-9 h-9 opacity-90"
                      />
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white z-10 transform group-hover:-translate-y-1 transition-transform duration-300">
                      <span className="inline-block bg-[#74CEE2] text-xs font-bold px-2.5 py-1 rounded mb-2 text-[#1B1D20]">
                        {item.tag}
                      </span>
                      <h3 className="text-lg lg:text-xl font-bold leading-tight drop-shadow-md line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-sm opacity-90 mt-1 drop-shadow-md">
                        {item.location} • {item.dateLabel}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              {/* ---------------- ROW 2 ---------------- */}
              <div className="grid grid-cols-12 gap-5 md:gap-6 lg:gap-8">
                {activities.slice(3, 5).map((item, idx) => (
                  <article
                    key={item.id}
                    aria-label={item.title}
                    tabIndex={0}
                    role="button"
                    className="relative overflow-hidden group cursor-pointer col-span-3 h-[280px] lg:h-[300px] rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#74CEE2] focus:ring-offset-2"
                  >
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className={`${
                        idx === 1 ? "object-contain bg-gray-50" : "object-cover"
                      } transition-transform duration-500 group-hover:scale-105`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-300" />

                    <div className="absolute bottom-4 left-4 right-4 text-white z-10 transform group-hover:-translate-y-1 transition-transform duration-300">
                      <h3 className="text-base lg:text-lg font-bold leading-tight drop-shadow-md line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-xs opacity-90 mt-1">
                        {item.dateLabel}
                      </p>
                    </div>
                  </article>
                ))}

                {/* CALENDAR */}
                <article
                  aria-label="Activity Calendar"
                  className="col-span-6 bg-[#26282B] rounded-2xl p-5 lg:p-6 flex flex-row gap-5 lg:gap-8 h-[280px] lg:h-[300px] shadow-[0_12px_32px_rgba(0,0,0,0.18)]"
                >
                  {/* LEFT */}
                  <div className="flex flex-col items-center justify-center w-[100px] lg:w-[120px]">
                    <p className="text-xs text-[#6ABBCE] tracking-wide uppercase">
                      {calendar.day}
                    </p>
                    <p className="text-gray-400 mt-2 text-sm">
                      {calendar.month}
                    </p>
                    <p className="text-6xl lg:text-7xl font-bold text-white leading-none mt-1">
                      {calendar.date}
                    </p>
                  </div>

                  {/* RIGHT CALENDAR */}
                  <div className="grid grid-cols-7 gap-1 text-center flex-1 content-center">
                    {calendar.week.map((w, idx) => (
                      <span
                        key={`w-${idx}`}
                        className="text-gray-400 text-xs lg:text-sm font-semibold py-1"
                      >
                        {w}
                      </span>
                    ))}

                    {calendar.grid.map((n, idx) => {
                      const active = n === calendar.date;
                      return (
                        <time
                          key={`d-${idx}`}
                          dateTime={formatDate(n)}
                          className={`
                            text-sm lg:text-base py-1.5 lg:py-2 flex items-center justify-center rounded-lg cursor-pointer transition-all
                            ${
                              active
                                ? "bg-okmd-cyan text-white font-semibold"
                                : "text-gray-300 hover:bg-[#3A3D41] hover:text-white"
                            }
                          `}
                        >
                          {n}
                        </time>
                      );
                    })}
                  </div>
                </article>
              </div>
            </div>

            {/* ================= MOBILE ================= */}
            <div className="md:hidden flex flex-col gap-6 px-4">
              <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar -mx-4 px-4">
                {activities.map((item) => (
                  <article
                    key={item.id}
                    aria-label={item.title}
                    className="relative w-[80vw] max-w-[320px] h-[200px] flex-shrink-0 rounded-2xl overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
                  >
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      sizes="80vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/30 to-black/75" />

                    <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-[#74CEE2] text-[#1B1D20] px-2.5 py-1 text-xs font-bold">
                        {item.tag}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 space-y-1 text-white drop-shadow">
                      <p className="text-base font-semibold leading-tight line-clamp-2">
                        {item.title}
                      </p>
                      <p className="text-xs text-white/80">
                        {item.location} • {item.dateLabel}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              {/* MOBILE CALENDAR */}
              <article
                aria-label="Calendar mobile"
                className="bg-[#26282B] rounded-2xl p-4 flex flex-row gap-4 shadow-[0_10px_28px_rgba(0,0,0,0.18)]"
              >
                <div className="flex flex-col items-center justify-center w-[70px]">
                  <p className="text-xs text-[#6ABBCE] uppercase">
                    {calendar.day}
                  </p>
                  <p className="text-gray-400 text-xs mt-1">{calendar.month}</p>
                  <p className="text-4xl font-bold text-white leading-none">
                    {calendar.date}
                  </p>
                </div>

                <div className="grid grid-cols-7 gap-0.5 text-center flex-1 text-[10px] content-center">
                  {calendar.week.map((w, idx) => (
                    <span
                      key={`mw-${idx}`}
                      className="text-gray-400 font-medium py-1"
                    >
                      {w}
                    </span>
                  ))}

                  {calendar.grid.map((n, idx) => (
                    <time
                      key={`md-${idx}`}
                      dateTime={formatDate(n)}
                      className={`
                        py-1 rounded-md
                        ${
                          n === calendar.date
                            ? "bg-okmd-cyan text-white font-semibold"
                            : "text-gray-300"
                        }
                      `}
                    >
                      {n}
                    </time>
                  ))}
                </div>
              </article>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
