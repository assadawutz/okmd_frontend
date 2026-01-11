/**
 * Activity Service Layer
 * แยก Logic และ Data จาก UI Components
 */

export interface ActivityItem {
  id: number;
  img: string;
  tag: string;
  title: string;
  location: string;
  dateLabel: string;
  date?: string; // ISO date format
}

/**
 * Fetch activity data
 * TODO: Replace with actual API call
 */
export async function getActivities(): Promise<ActivityItem[]> {
  try {
    // In production, this would be an API call
    // const response = await fetch('/api/activities');
    // if (!response.ok) throw new Error('Failed to fetch activities');
    // return await response.json();
    
    const activities: ActivityItem[] = [
      {
        id: 1,
        img: "/act1.png",
        tag: "Workshop",
        title: "ค่ายสร้างสรรค์ไอเดียเพื่อชุมชน",
        location: "TK Park Bangkok",
        dateLabel: "12 ต.ค. 2567",
        date: "2024-10-12",
      },
      {
        id: 2,
        img: "/act2.png",
        tag: "Experience",
        title: "Open House OKMD Library",
        location: "OKMD Space",
        dateLabel: "24 ต.ค. 2567",
        date: "2024-10-24",
      },
      {
        id: 3,
        img: "/act3.png",
        tag: "Learning Lab",
        title: "Design Sprint for Youth",
        location: "TK Park Yala",
        dateLabel: "30 ต.ค. 2567",
        date: "2024-10-30",
      },
      {
        id: 4,
        img: "/act4.png",
        tag: "Creative Talk",
        title: "พลิกมุมคิดธุรกิจท้องถิ่น",
        location: "Museum Siam",
        dateLabel: "3 พ.ย. 2567",
        date: "2024-11-03",
      },
      {
        id: 5,
        img: "/act5.png",
        tag: "เสวนา",
        title: "AI เพื่อการเรียนรู้",
        location: "OKMD Studio",
        dateLabel: "5 พ.ย. 2567",
        date: "2024-11-05",
      },
    ];
    
    return activities;
  } catch (error) {
    console.error('Error fetching activities:', error);
    // Return empty array as fallback
    return [];
  }
}

export interface CalendarData {
  day: string;
  month: string;
  date: number;
  week: string[];
  grid: number[];
}

/**
 * Get calendar data for current month
 * TODO: Replace with actual calendar logic
 */
export async function getCalendarData(): Promise<CalendarData> {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 100));
    
    const calendarData: CalendarData = {
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
    };
    
    return calendarData;
  } catch (error) {
    console.error('Error fetching calendar data:', error);
    // Return default calendar data as fallback
    return {
      day: "MONDAY",
      month: "January",
      date: 1,
      week: ["S", "M", "T", "W", "T", "F", "S"],
      grid: Array(42).fill(1),
    };
  }
}
