interface NewsItem {
  id: string;
  title: string;
  tag: string;
  date: string;
  img: string;
  infoImage: string;
  body: string;
  related: { id: string; img: string; title: string }[];
}

export const NEWS_DATA: Record<string, NewsItem> = {
  "1": {
    id: "1",
    title: "OKMD จัดกิจกรรม Knowledge Day กระตุ้นการเรียนรู้ยุคใหม่",
    tag: "ข่าวกิจกรรม",
    date: "15 มิถุนายน 2568",
    img: "/news1.png",
    infoImage: "/news-detail-1.png",
    body: `OKMD จัดงาน Knowledge Day ประจำปี 2568 
เพื่อส่งเสริมการเรียนรู้สำหรับเยาวชนไทย พร้อมกิจกรรม workshop  
และเสวนาจากผู้เชี่ยวชาญหลายด้าน...
    `,
    related: [
      { id: "2", img: "/news2.png", title: "เปิดตัว OKMD Knowledge Portal" },
      { id: "3", img: "/news3.png", title: "เปิดคอร์ส Creative Thinking" }
    ]
  },

  "2": {
    id: "2",
    title: "เปิดตัวแพลตฟอร์ม OKMD Knowledge Portal",
    tag: "ข่าวประกาศ",
    date: "12 มิถุนายน 2568",
    img: "/news2.png",
    infoImage: "/news-detail-2.png",
    body: `OKMD เปิดตัวแพลตฟอร์ม OKMD Knowledge Portal 
คลังองค์ความรู้ยุคใหม่สำหรับประชาชนทุกกลุ่ม...
    `,
    related: [
      { id: "1", img: "/news1.png", title: "กิจกรรม Knowledge Day" },
      { id: "3", img: "/news3.png", title: "คอร์ส Creative Thinking" }
    ]
  }
}
