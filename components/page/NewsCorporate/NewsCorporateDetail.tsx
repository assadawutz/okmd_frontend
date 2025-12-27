"use client";

import Image from "next/image";
import { Kanit } from "next/font/google";
import RelatedNews from "@/components/RelatedNews";
import ShareButtons from "@/components/ShareButtons";
import { useEffect, useState } from "react";

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

export default function NewsCorporateDetail({ newsId }: NewsCorporateDetailProps) {
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
      return <div className="p-10 text-center">กำลังโหลด...</div>;
    }
  
    if (!newsItem) {
      return (
        <div className="p-10 text-center text-red-500 text-xl">
          ข่าวไม่พบ (404)
        </div>
      );
    }

  return (
    <div
      className={`${kanit.variable} font-kanit min-h-screen bg-white text-[#333]`}
    >
      <main className="container py-8 ">
        {/* Header */}
        <header className="mb-6 flex flex-col md:flex-row md:items-end justify-between">
          <h1 className="text-2xl md:text-3xl font-bold leading-tight max-w-4xl text-gray-900 ">
            {newsItem.title}
          </h1>
        </header>

        {/* Banner (เหมือนตัวบน) */}
        <div className="w-full aspect-[21/9] relative rounded-lg overflow-hidden mb-10">
          <img
            src={newsItem.banner}
            alt={newsItem.title}
            width={1440}
            height={675}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 border-b border-gray-200 pb-16">
          {/* Aside */}
          <aside className="lg:col-span-2 flex flex-col gap-6">
            <Image
              src="/okmd-2025.png"
              alt="okmd logo"
              width={100}
              height={50}
              className="object-contain"
            />
            <div className="h-px w-full bg-gray-400"></div>
            <ShareButtons />
          </aside>

          {/* Article */}
          <article
            className="lg:col-span-10 lg:pl-9 prose max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: newsItem.content }}
          />
        </div>

        {/* Related */}
        <div className="container mt-16">
          <RelatedNews items={relatedNews} />
        </div>
      </main>
    </div>
  );
}
