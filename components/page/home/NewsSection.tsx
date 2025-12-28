"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
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
  const newsList = Object.values(NEWS_DATA).slice(0, 4) as NewsItem[]; // เปลี่ยนเป็น 4 items

  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="container mx-auto">
        
        {/* HEADER */}
        <div className="mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B1D20] mb-2">
            News
          </h2>
          <p className="text-lg sm:text-xl text-[#74CEE2]">
            อัปเดตข่าว
          </p>
        </div>

        {/* NEWS LAYOUT: 1 large left + 3 small right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-7 lg:gap-8">
          
          {/* LEFT: Large Featured News */}
          {newsList[0] && (
            <Link 
              href={`/news/${newsList[0].id}`}
              className="md:col-span-5 group flex flex-col h-full"
            >
              <div className="relative h-[280px] md:h-full w-full overflow-hidden rounded-2xl">
                <Image
                  src={newsList[0].img}
                  alt={newsList[0].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 line-clamp-2 group-hover:text-[#74CEE2] transition-colors">
                    {newsList[0].title}
                  </h3>
                  <p className="text-sm md:text-base text-white/90 line-clamp-3 mb-3">
                    {newsList[0].body}
                  </p>
                  <div className="flex items-center text-[#74CEE2] text-sm font-medium">
                    อ่านต่อ
                    <ArrowRight className="ml-2 h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* RIGHT: 3 News Cards Stack */}
          <div className="md:col-span-7 flex flex-col gap-5 md:gap-6">
            {newsList.slice(1, 4).map((news) => (
              <Link 
                key={news.id} 
                href={`/news/${news.id}`}
                className="group flex gap-4 md:gap-5 bg-white hover:bg-gray-50 rounded-xl transition-all"
              >
                {/* Image */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={news.img}
                    alt={news.title}
                    fill
                    sizes="160px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1 flex flex-col justify-center py-2">
                  <h3 className="text-base md:text-lg font-bold text-[#1B1D20] mb-2 line-clamp-2 group-hover:text-[#16A7CB] transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                    {news.body}
                  </p>
                  <div className="flex items-center text-[#16A7CB] text-sm font-medium">
                    อ่านต่อ
                    <ArrowRight className="ml-1 h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* "ดูทั้งหมด" Link */}
        <div className="mt-8 md:mt-10 flex justify-end">
          <Link 
            href="/news" 
            className="group flex items-center text-[#16A7CB] font-medium hover:text-[#1384A2] transition-colors"
          >
            ดูทั้งหมด
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
