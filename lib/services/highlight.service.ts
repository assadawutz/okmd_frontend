/**
 * Highlight Service Layer
 * แยก Logic และ Data จาก UI Components
 */

export interface HighlightItem {
  id: number;
  img: string;
  title: string;
  desc?: string;
  link: string;
}

/**
 * Fetch highlight data
 * TODO: Replace with actual API call
 */
export async function getHighlights(): Promise<HighlightItem[]> {
  return [
    {
      id: 1,
      img: "/hi1.png",
      title: "เพราะทุกครั้งที่คุณสูบ \nคือการทำร้ายตัวเองอย่างช้า ๆ",
      desc: "ทุกคำสูบ คือก้าวถอยจากสุขภาพดี",
      link: "#",
    },
    {
      id: 2,
      img: "/hi2.png",
      title: "The Knowledge\nvol.36",
      desc: "",
      link: "#",
    },
    {
      id: 3,
      img: "/hi3.png",
      title: "สำรวจธุรกิจและองค์กรทั่วโลก เสริมพลังด้านวัฒนธรรมด้วย AI",
      desc: "sk Mona ใช้ AI ส่งเสริมการเข้าถึงวัฒนธรรม ศิลปะ และพิพิธภัณฑ์",
      link: "#",
    },
    { id: 4, img: "/hi4.png", title: "", desc: "", link: "#" },
    {
      id: 5,
      img: "/hi5.png",
      title: "เรียนรู้แบบเถื่อนๆ ไปกับ สิงห์ วรรณสิงห์",
      desc: "",
      link: "#",
    },
  ];
}

