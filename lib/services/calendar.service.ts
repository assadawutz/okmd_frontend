/**
 * Calendar Service Layer
 * แยก Logic และ Data จาก UI Components
 */

export interface CalendarEvent {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
  alt: string;
}

export interface CalendarFilters {
  year: string;
  month: string;
  org: string;
}

/**
 * Fetch calendar events
 * TODO: Replace with actual API call
 */
export async function getCalendarEvents(filters?: CalendarFilters): Promise<CalendarEvent[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  return [
    {
      id: 1,
      title: "กิจกรรม Freedom Learn x Conet LANNA: Yi Peng...",
      date: "25 ตุลาคม 2568 เวลา: 11.00 - 15.30 น.",
      location: "สถานที่: ห้องเวิร์คช็อป 1 และ 2 อุทยานการเรียนรู้ TK Park ชั้น 8 centralWorld",
      image: "/event1.png",
      alt: "Yi Peng Lantern",
    },
    {
      id: 2,
      title: "กิจกรรม Freedom Learn x Conet LANNA: Yi Peng...",
      date: "25 ตุลาคม 2568 เวลา: 11.00 - 15.30 น.",
      location: "สถานที่: ห้องเวิร์คช็อป 1 และ 2 อุทยานการเรียนรู้ TK Park ชั้น 8 centralWorld",
      image: "/event2.png",
      alt: "Family Activity",
    },
    {
      id: 3,
      title: "กิจกรรม Freedom Learn x Conet LANNA: Yi Peng...",
      date: "25 ตุลาคม 2568 เวลา: 11.00 - 15.30 น.",
      location: "สถานที่: ห้องเวิร์คช็อป 1 และ 2 อุทยานการเรียนรู้ TK Park ชั้น 8 centralWorld",
      image: "/event3.png",
      alt: "Book Cover",
    },
    {
      id: 4,
      title: "กิจกรรม Freedom Learn x Conet LANNA: Yi Peng...",
      date: "25 ตุลาคม 2568 เวลา: 11.00 - 15.30 น.",
      location: "สถานที่: ห้องเวิร์คช็อป 1 และ 2 อุทยานการเรียนรู้ TK Park ชั้น 8 centralWorld",
      image: "/event1.png",
      alt: "Yi Peng Lantern",
    },
  ];
}

/**
 * Get calendar event by ID
 * TODO: Replace with actual API call
 */
export async function getCalendarEventById(id: string): Promise<CalendarEvent | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  const events = await getCalendarEvents();
  return events.find((e) => e.id === Number(id)) || null;
}
