/**
 * News Service Layer
 * แยก Logic และ Data จาก UI Components
 */

export interface NewsItem {
  id: number;
  img: string;
  title: string;
  desc?: string;
  date: string;
  link?: string;
}

export interface NewsResponse {
  items: NewsItem[];
  total: number;
}

/**
 * Fetch news data
 * TODO: Replace with actual API call
 */
export async function getNews(limit?: number): Promise<NewsResponse> {
  // Simulate API call
  const news: NewsItem[] = [
    {
      id: 1,
      img: "/rectangle-700-2.png",
      title:
        "กรมสมเด็จพระเทพรัตน์ราชสุดาฯ เสด็จเปิดศูนย์เยาวชนเทศบาลนครยะลา แหล่งเรียนรู้ TK Park Yala",
      desc: "ความรู้จะมีพลังเมื่อถูกแบ่งปัน \"คิด\" แล้ว \"เล่า\" แล้วนำร่วม \"แชร์\" เพื่อสร้างแรงบันดาลใจให้ใครอีกหลายคน กับ \"OKMD CREATOR: Knowledge Sharing\" กิจกรรมที่ชวนทุกคนมาเขียน",
      date: "3 วันก่อน",
    },
    {
      id: 2,
      img: "/rectangle-700-3.png",
      title:
        "TK Park x มูลนิธิรักลูกทวบทวยชนคนไทยร่วมแบ่งปันคุณค่าผ่านหนังสือกับแคมเปญ \"อ่านแล้ว อ่านอีก\"",
      date: "5 วันก่อน",
    },
    {
      id: 3,
      img: "/rectangle-700-4.jpeg",
      title:
        "The Energy Shift : Transition With Opportunities อีเวนต์ที่จะเปลี่ยนวิสัยทัศน์ด้านพลังงานของคุณ",
      date: "7 วันก่อน",
    },
    {
      id: 4,
      img: "/rectangle-700-5.jpeg",
      title:
        "The Energy Shift : Transition With Opportunities อีเวนต์ที่จะเปลี่ยนวิสัยทัศน์ด้านพลังงานของคุณและอนาคต",
      date: "1 สัปดาห์ก่อน",
    },
  ];

  const items = limit ? news.slice(0, limit) : news;

  return {
    items,
    total: news.length,
  };
}

