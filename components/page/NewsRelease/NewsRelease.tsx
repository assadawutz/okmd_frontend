"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSearchParams } from "next/navigation";
import NewsCard from "@/components/NewCard";
import { useEffect, useState } from "react";
import Link from "next/link";
import SubHeroBanner from "@/components/ui/SubHeroBanner";

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  cover_image: string | null;
}

export default function NewsReleasePage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const categoryId = searchParams.get("category");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // const res = await fetch(
        //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/news?category_id=${categoryId}`
        // );

        // if (!res.ok) {
        //   throw new Error("Failed to fetch news");
        // }

        // const result = await res.json();
        // setNews(result.data);

        // Mock data
        setNews([
          {
            id: 1,
            title: "ข่าวประชาสัมพันธ์ 1",
            excerpt: "รายละเอียดข่าว...",
            content: "...",
            cover_image: null,
          },
          {
            id: 2,
            title: "ข่าวประชาสัมพันธ์ 2",
            excerpt: "รายละเอียดข่าว...",
            content: "...",
            cover_image: null,
          },
        ]);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [categoryId]);
  return (
    <div className="w-full space-y-8">
      {/* HEADER BLOCK */}
      <div className="w-full h-[250px] md:h-[300px] rounded-3xl overflow-hidden relative shadow-sm">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/bannerabout.png')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            ข่าว <span className="text-[#74CEE2]">ประชาสัมพันธ์เครือข่าย</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            ข่าวสารจากเครือข่ายและพันธมิตรของเรา
          </p>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div className="flex items-center text-sm text-gray-500 px-2">
        <Link href="/" className="hover:text-[#16A7CB] transition-colors">
          หน้าหลัก
        </Link>
        <span className="mx-2">›</span>
        <span className="text-[#16A7CB] font-medium">
          ข่าวประชาสัมพันธ์เครือข่าย
        </span>
      </div>

      {/* CONTENT BLOCK */}
      <div className="bg-white rounded-3xl p-6 md:p-10 border border-gray-100 shadow-sm min-h-[500px]">
        <h2 className="text-2xl font-bold text-[#1B1D20] mb-8 border-l-4 border-[#16A7CB] pl-4">
          รายการข่าวล่าสุด
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {news.map((newsItem: NewsItem) => (
            <div key={newsItem.id} className="w-full">
              <NewsCard
                data={newsItem}
                path={`/news-release/${newsItem.id}?title=${newsItem.title}`}
              />
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-100 w-full mb-8"></div>

        {/* Pagination */}
        <div className="flex justify-center">
          <Pagination />
        </div>
      </div>
    </div>
  );
}

// 3. Component: Pagination (ปุ่มเปลี่ยนหน้า)
function Pagination() {
  return (
    <div className="flex justify-center items-center gap-2 text-sm text-gray-500">
      {/* Previous Button */}
      <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 hover:bg-gray-50 hover:border-[#16A7CB] hover:text-[#16A7CB] transition-all disabled:opacity-50">
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* Page Numbers */}
      <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#16A7CB] text-white font-medium shadow-md">
        1
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 hover:bg-gray-50 hover:border-[#16A7CB] hover:text-[#16A7CB] transition-all">
        2
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 hover:bg-gray-50 hover:border-[#16A7CB] hover:text-[#16A7CB] transition-all">
        3
      </button>
      <span className="px-1 text-gray-400">...</span>

      {/* Next Button */}
      <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 hover:bg-gray-50 hover:border-[#16A7CB] hover:text-[#16A7CB] transition-all">
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
