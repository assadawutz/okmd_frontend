/**
 * News Service Layer
 * แยก Logic และ Data จาก UI Components
 */

export interface NewsItem {
  id: number | string;
  img: string;
  title: string;
  desc?: string;
  date: string;
  link?: string;
  tag?: string;
  body?: string;
  infoImage?: string;
  banner?: string;
  content?: string;
  category?: {
    id: number;
    name: string;
  };
  cover_image?: string | null;
  related?: Array<{ id: string; img: string; title: string }>;
}

export interface NewsResponse {
  items: NewsItem[];
  total: number;
}

/**
 * Fetch news data
 * TODO: Replace with actual API call
 */
export async function getNews(limit?: number, categoryId?: number): Promise<NewsResponse> {
  // Simulate API call
  const news: NewsItem[] = [
    {
      id: 1,
      img: "/rectangle-700-2.png",
      title:
        "กรมสมเด็จพระเทพรัตน์ราชสุดาฯ เสด็จเปิดศูนย์เยาวชนเทศบาลนครยะลา แหล่งเรียนรู้ TK Park Yala",
      desc: "ความรู้จะมีพลังเมื่อถูกแบ่งปัน \"คิด\" แล้ว \"เล่า\" แล้วนำร่วม \"แชร์\" เพื่อสร้างแรงบันดาลใจให้ใครอีกหลายคน กับ \"OKMD CREATOR: Knowledge Sharing\" กิจกรรมที่ชวนทุกคนมาเขียน",
      date: "3 วันก่อน",
      tag: "ข่าวกิจกรรม",
      body: "รายละเอียดข่าว...",
      banner: "/news-detail-1.png",
      content: "<p>เนื้อหาข่าว...</p>",
      category: { id: 1, name: "ข่าวกิจกรรม" },
      cover_image: "/rectangle-700-2.png",
    },
    {
      id: 2,
      img: "/rectangle-700-3.png",
      title:
        "TK Park x มูลนิธิรักลูกทวบทวยชนคนไทยร่วมแบ่งปันคุณค่าผ่านหนังสือกับแคมเปญ \"อ่านแล้ว อ่านอีก\"",
      date: "5 วันก่อน",
      tag: "ข่าวประกาศ",
      body: "รายละเอียดข่าว...",
      banner: "/news-detail-2.png",
      content: "<p>เนื้อหาข่าว...</p>",
      category: { id: 2, name: "ข่าวประกาศ" },
      cover_image: "/rectangle-700-3.png",
    },
    {
      id: 3,
      img: "/rectangle-700-4.jpeg",
      title:
        "The Energy Shift : Transition With Opportunities อีเวนต์ที่จะเปลี่ยนวิสัยทัศน์ด้านพลังงานของคุณ",
      date: "7 วันก่อน",
      tag: "ข่าวกิจกรรม",
      body: "รายละเอียดข่าว...",
      banner: "/news-detail-3.png",
      content: "<p>เนื้อหาข่าว...</p>",
      category: { id: 1, name: "ข่าวกิจกรรม" },
      cover_image: "/rectangle-700-4.jpeg",
    },
    {
      id: 4,
      img: "/rectangle-700-5.jpeg",
      title:
        "The Energy Shift : Transition With Opportunities อีเวนต์ที่จะเปลี่ยนวิสัยทัศน์ด้านพลังงานของคุณและอนาคต",
      date: "1 สัปดาห์ก่อน",
      tag: "ข่าวประกาศ",
      body: "รายละเอียดข่าว...",
      banner: "/news-detail-4.png",
      content: "<p>เนื้อหาข่าว...</p>",
      category: { id: 2, name: "ข่าวประกาศ" },
      cover_image: "/rectangle-700-5.jpeg",
    },
  ];

  let filtered = news;
  if (categoryId) {
    filtered = filtered.filter((item) => item.category?.id === categoryId);
  }

  const items = limit ? filtered.slice(0, limit) : filtered;

  return {
    items,
    total: filtered.length,
  };
}

/**
 * Get news item by ID
 * TODO: Replace with actual API call
 */
export async function getNewsById(id: string | number): Promise<NewsItem | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  const response = await getNews();
  return response.items.find((item) => item.id === id || String(item.id) === String(id)) || null;
}

