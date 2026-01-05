"use client";

import NewsCard from "@/components/NewCard";

export default function NewsSection() {
  const newsList = [
    {
      id: 1,
      title: "ประกาศผลการคัดเลือกข้อเสนอโครงการ...",
      description: "ประกาศผลการคัดเลือกข้อเสนอโครงการ เพื่อรับการสนับสนุนงบประมาณ ประจำปีงบประมาณ พ.ศ. 2568",
      image: "/news1.png",
      path: "/news/1",
    },
    {
      id: 2,
      title: "OKMD ร่วมกับ TK Park จัดกิจกรรม...",
      description: "OKMD ร่วมกับ TK Park จัดกิจกรรมส่งเสริมการอ่านและการเรียนรู้สำหรับเยาวชน",
      image: "/news2.png",
      path: "/news/2",
    },
    {
      id: 3,
      title: "การประชุมวิชาการประจำปี 2568",
      description: "ขอเชิญร่วมงานประชุมวิชาการประจำปี 2568 ในหัวข้อ Future of Learning",
      image: "/news3.png",
      path: "/news/3",
    },
    {
      id: 4,
      title: "โครงการฝึกอบรมทักษะดิจิทัล",
      description: "เปิดรับสมัครผู้สนใจเข้าร่วมโครงการฝึกอบรมทักษะดิจิทัลเพื่ออาชีพ",
      image: "/news4.png",
      path: "/news/4",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-[#1B1D20]">ข่าวและกิจกรรม</h2>
          <a
            href="/news"
            className="text-[#16A7CB] font-medium hover:underline flex items-center gap-1"
          >
            ดูทั้งหมด
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsList.map((item) => (
            <NewsCard
              key={item.id}
              data={{
                id: item.id,
                title: item.title,
                description: item.description,
                image: item.image,
              }}
              path={item.path}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
