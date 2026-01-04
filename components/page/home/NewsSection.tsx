"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { NEWS_DATA } from "@/data/news";

interface NewsItem {
  id: string;
  title: string;
  tag: string;
  date: string;
  img: string;
  body: string;
}

export default function NewsSection() {
  const newsList = Object.values(NEWS_DATA).slice(0, 4) as NewsItem[];

  return (
    <div className="w-full bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 space-y-8">
      {/* HEADER */}
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold text-[#1B1D20]">News</h2>
          <p className="text-[#74CEE2] font-medium">อัปเดตข่าวสารล่าสุด</p>
        </div>
        <Link
          href="/news"
          className="hidden md:flex items-center text-[#16A7CB] font-semibold hover:underline"
        >
          ดูทั้งหมด <ArrowRight className="ml-1 w-4 h-4" />
        </Link>
      </div>

      {/* FEATURED NEWS (Large) */}
      {newsList[0] && (
        <Link
          href={`/news/${newsList[0].id}`}
          className="group block relative w-full h-[320px] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
        >
          <Image
            src={newsList[0].img}
            alt={newsList[0].title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 p-6 text-white w-full">
            <span className="inline-block bg-[#74CEE2] text-black text-xs font-bold px-2 py-1 rounded mb-2">
              Highlight
            </span>
            <h3 className="text-xl md:text-2xl font-bold leading-tight mb-2 group-hover:text-[#74CEE2] transition-colors">
              {newsList[0].title}
            </h3>
            <p className="text-gray-300 text-sm line-clamp-2">
              {newsList[0].body}
            </p>
          </div>
        </Link>
      )}

      {/* NEWS LIST (Stacked) */}
      <div className="flex flex-col gap-4">
        {newsList.slice(1, 4).map((news) => (
          <Link
            key={news.id}
            href={`/news/${news.id}`}
            className="group flex gap-4 p-4 rounded-xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-md transition-all items-center"
          >
            <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-200">
              <Image
                src={news.img}
                alt={news.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-bold text-gray-800 line-clamp-2 group-hover:text-[#16A7CB] transition-colors">
                {news.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                {news.date} • {news.tag}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="md:hidden text-center mt-4">
        <Link
          href="/news"
          className="text-[#16A7CB] font-semibold hover:underline inline-flex items-center"
        >
          ดูยอดทั้งหมด <ArrowRight className="ml-1 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
