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

const ActivityCard = ({
  item,
  featured = false,
}: {
  item: ActivityItem;
  featured?: boolean;
}) => (
  <article
    tabIndex={0}
    role="button"
    className={`relative overflow-hidden rounded-2xl group cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 active:scale-[0.98] ${
      featured ? "h-[280px]" : "h-[220px]"
    }`}
  >
    <Image
      src={item.img}
      alt={item.title}
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

    <div className="absolute top-3 left-3 bg-[#74CEE2] text-[#1B1D20] px-2.5 py-1 text-xs font-bold rounded">
      {item.tag}
    </div>

    <div className="absolute bottom-4 left-4 right-4 text-white z-10">
      <h3
        className={`font-bold leading-tight drop-shadow-md line-clamp-2 ${
          featured ? "text-xl" : "text-base"
        }`}
      >
        {item.title}
      </h3>
      <p className="text-xs opacity-90 mt-1 drop-shadow-md">
        {item.location} • {item.dateLabel}
      </p>
    </div>
  </article>
);

export default function ActivityBlock() {
  const [activities, setActivities] = useState<ActivityItem[]>([]);
  const [calendar, setCalendar] = useState<CalendarData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const [activitiesData, calendarData] = await Promise.all([
          getActivities(),
          getCalendarData(),
        ]);

        if (!activitiesData?.length) setError("ไม่พบข้อมูลกิจกรรม");
        else {
          setActivities(activitiesData);
          setCalendar(calendarData);
        }
      } catch (err) {
        setError("เกิดข้อผิดพลาดในการโหลดข้อมูล");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading)
    return (
      <div className="w-full h-64 bg-[#F8FBFD] rounded-3xl animate-pulse" />
    );
  if (error)
    return <div className="text-center py-10 text-red-500">{error}</div>;
  if (!calendar) return null;

  return (
    <div className="w-full bg-[#F8FBFD] rounded-3xl p-6 md:p-8 space-y-6 md:space-y-8">
      {/* HEADER */}
      <div className="text-center md:text-left md:flex md:items-end md:justify-between">
        <div>
          <h2 className="text-3xl md:text-4xl text-[#1B1D20] font-bold tracking-tight">
            Activity Calendar
          </h2>
          <p className="text-[#6ABBCE] mt-2 font-medium">
            ทุกกิจกรรมคือแรงบันดาลใจ สู่ความคิดที่แตกต่าง
          </p>
        </div>
        <button className="hidden md:block text-[#16A7CB] text-sm font-semibold hover:underline">
          ดูปฏิทินทั้งหมด ↗
        </button>
      </div>

      {/* CALENDAR BLOCK */}
      <div className="bg-[#26282B] rounded-2xl p-6 text-white shadow-lg">
        <div className="flex items-center justify-between mb-4 border-b border-gray-700 pb-4">
          <div>
            <p className="text-[#6ABBCE] text-sm uppercase font-bold tracking-wider">
              {calendar.day}
            </p>
            <p className="text-gray-400 text-xs">{calendar.month}</p>
          </div>
          <div className="text-5xl font-bold leading-none">{calendar.date}</div>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center text-xs">
          {calendar.week.map((w, i) => (
            <span key={i} className="text-gray-500 py-2">
              {w}
            </span>
          ))}
          {calendar.grid.map((n, i) => (
            <div
              key={i}
              className={`py-2 rounded ${
                n === calendar.date
                  ? "bg-[#16A7CB] font-bold text-white"
                  : "text-gray-400"
              }`}
            >
              {n}
            </div>
          ))}
        </div>
      </div>

      {/* ACTIVITY FEED */}
      <div className="flex flex-col gap-4">
        {/* Top Featured */}
        {activities.length > 0 && (
          <ActivityCard item={activities[0]} featured />
        )}

        {/* List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {activities.slice(1, 5).map((item) => (
            <ActivityCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      <div className="md:hidden text-center mt-4">
        <button className="text-[#16A7CB] text-sm font-semibold hover:underline">
          ดูปฏิทินทั้งหมด ↗
        </button>
      </div>
    </div>
  );
}
