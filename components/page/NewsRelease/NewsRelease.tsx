'use client'

import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import NewsCard from "@/components/NewCard";
import { useEffect, useState } from "react";
;
interface NewsItem {
   id: number;
   title: string;
   excerpt: string;
   content: string;
   cover_image: any;
 }

  export default function NewsCorporatePage() {
    const [news, setNews] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);

    const searchParams = useSearchParams();
    const categoryId = searchParams.get("category");

    useEffect(() => {
      const fetchNews = async () => {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/news?category_id=${categoryId}`
          );

          if (!res.ok) {
            throw new Error("Failed to fetch news");
          }

          const result = await res.json();
          setNews(result.data);
        } catch (error) {
          console.error("Error fetching news:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchNews();
    }, []);
    return (
      <div className="min-h-screen bg-white text-slate-800 font-sans pb-20">
        <main className="pl-24">
          {/* Header */}
          <h1 className="text-4xl font-semibold mb-8 text-black">ข่าวประชาสัมพันธ์เครือข่าย</h1>

          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {news.map((newsItem : any) => (
              <NewsCard
                key={newsItem.id}
                data={newsItem}
                path={`/news-release/${newsItem.id}?title=${newsItem.title}`}
              />
            ))}
          </div>

          {/* Divider */}
          <div className="border-b border-black my-12"></div>

          {/* Pagination */}
          <Pagination />
        </main>
      </div>
    );
  }


// 3. Component: Pagination (ปุ่มเปลี่ยนหน้า)
function Pagination() {
  return (
    <div className="flex justify-end md:justify-end items-center gap-2 text-sm text-gray-500">
      {/* Previous Button */}
      <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 hover:bg-gray-50 disabled:opacity-50">
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* Page Numbers */}
      <button className="w-8 h-8 flex items-center justify-center rounded bg-[#74CEE2] text-white font-medium">
        1
      </button>
      <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 hover:bg-gray-50">
        2
      </button>
      <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 hover:bg-gray-50">
        3
      </button>
      <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 hover:bg-gray-50">
        4
      </button>
      <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 hover:bg-gray-50">
        5
      </button>

      <span className="px-1">...</span>

      <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 hover:bg-gray-50">
        20
      </button>

      {/* Next Button */}
      <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 hover:bg-gray-50">
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
