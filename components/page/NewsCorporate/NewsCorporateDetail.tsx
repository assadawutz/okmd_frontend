"use client";

import Image from "next/image";
import { Kanit } from "next/font/google";
import RelatedNews from "@/components/RelatedNews";
import ShareButtons from "@/components/ShareButtons";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, Calendar } from "lucide-react";
import Button from "@/components/ui/Button";

const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-kanit",
});

interface NewsItem {
  id: number;
  title: string;
  content: string;
  banner: string;
  category?: { id: number };
}

interface NewsCorporateDetailProps {
  newsId: string;
}

export default function NewsCorporateDetail({
  newsId,
}: NewsCorporateDetailProps) {
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null);
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [relatedNews, setRelatedNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/news`);

        if (!res.ok) {
          throw new Error("Failed to fetch news");
        }

        const result = await res.json();
        setNewsList(result.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    if (!newsId || newsList.length === 0) return;

    const numericNewsId = Number(newsId);

    const current = newsList.find((item) => item.id === numericNewsId);

    if (!current) return;

    const related = newsList
      .filter(
        (item) =>
          item.id !== current.id && item.category?.id === current.category?.id
      )
      .slice(0, 4);

    setNewsItem(current);
    setRelatedNews(related);
  }, [newsId, newsList]);

  if (loading) {
    return (
      <div className="w-full h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#16A7CB]"></div>
      </div>
    );
  }

  if (!newsItem) {
    return (
      <div className="p-10 text-center text-red-500 text-xl bg-white rounded-3xl shadow-sm border border-gray-100">
        ไม่พบข่าว (404)
      </div>
    );
  }

  return (
    <div className={`${kanit.variable} font-kanit w-full space-y-8`}>
      {/* HEADER BLOCK */}
      <div className="w-full h-[250px] md:h-[300px] rounded-3xl overflow-hidden relative shadow-sm">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/bannerabout.png')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            ข่าว <span className="text-[#74CEE2]">องค์กร</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            อัปเดตข่าวสารและความเคลื่อนไหวล่าสุด
          </p>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div className="flex items-center text-sm text-gray-500 px-2 gap-2">
        <Link href="/" className="hover:text-[#16A7CB] transition-colors">
          หน้าหลัก
        </Link>
        <span>›</span>
        <Link
          href="/news-corporate"
          className="hover:text-[#16A7CB] transition-colors"
        >
          ข่าวองค์กร
        </Link>
        <span>›</span>
        <span className="text-[#16A7CB] font-medium truncate max-w-[200px] md:max-w-xs">
          {newsItem.title}
        </span>
      </div>

      {/* CONTENT */}
      <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
        <header className="mb-10 space-y-4 border-b border-gray-100 pb-8">
          <div className="inline-block px-3 py-1 bg-[#E8F6FB] text-[#16A7CB] rounded-full text-xs font-bold">
            ข่าวองค์กร
          </div>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight text-[#1B1D20]">
            {newsItem.title}
          </h1>
        </header>

        {/* Banner */}
        <div className="w-full aspect-video md:aspect-[21/9] relative rounded-2xl overflow-hidden mb-12 shadow-sm">
          <img
            src={newsItem.banner}
            alt={newsItem.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content & Sidebar */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 border-b border-gray-100 pb-16 mb-16">
          <aside className="md:col-span-3 lg:col-span-2 order-2 md:order-1 space-y-6">
            <div className="p-4 rounded-xl border border-gray-100 bg-[#F8FAFC] text-center">
              <span className="text-xs font-bold text-gray-400 block mb-2 uppercase tracking-wider">
                SHARE
              </span>
              <ShareButtons />
            </div>
            <div className="hidden md:block opacity-60">
              <Image
                src="/okmd_logo_color.png"
                alt="okmd logo"
                width={100}
                height={50}
                className="object-contain mx-auto grayscale opacity-50"
              />
            </div>
          </aside>

          <article
            className="md:col-span-9 lg:col-span-10 order-1 md:order-2 prose prose-lg max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: newsItem.content }}
          />
        </div>

        {/* Related */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-[#1B1D20]">
              ข่าวอื่นๆ
            </h3>
            <Link
              href="/news-corporate"
              className="text-[#16A7CB] font-bold hover:underline"
            >
              ดูทั้งหมด
            </Link>
          </div>
          <RelatedNews items={relatedNews} />
        </div>

        <div className="mt-10 pt-6">
          <Link href="/news-corporate">
            <Button
              variant="outline"
              className="rounded-xl flex items-center gap-2"
            >
              <ChevronLeft size={18} /> ย้อนกลับ
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
