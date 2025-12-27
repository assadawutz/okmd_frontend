"use client";

import Image from "next/image";
import Link from "next/link";
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
  const mainNews = newsList[0];
  const sideNews = newsList.slice(1, 4);

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 md:mb-10 gap-3">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B1D20]">
              News
            </h2>
            <p className="text-[#16A7CB] text-base md:text-lg mt-1">
              อัปเดตข่าว
            </p>
          </div>
          
          <Link 
            href="/news" 
            className="group flex items-center text-[#1B1D20] text-sm font-medium hover:text-[#16A7CB] transition-colors"
          >
            <span className="border-t border-[#1B1D20] group-hover:border-[#16A7CB] w-12 mr-3 transition-colors"></span>
            ดูทั้งหมด
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </Link>
        </div>

        {/* NEWS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* MAIN NEWS - LEFT */}
          {mainNews && (
            <Link 
              href={`/news/${mainNews.id}`}
              className="group block"
            >
              <div className="relative h-[300px] sm:h-[360px] lg:h-[420px] rounded-xl overflow-hidden mb-4">
                <Image
                  src={mainNews.img}
                  alt={mainNews.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-[#1B1D20] mb-2 group-hover:text-[#16A7CB] transition-colors line-clamp-2">
                {mainNews.title}
              </h3>
              
              <p className="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-3 mb-3">
                {mainNews.body}
              </p>
              
              <div className="flex items-center text-[#16A7CB] text-sm font-medium">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
                อ่านต่อ
              </div>
            </Link>
          )}

          {/* SIDE NEWS - RIGHT */}
          <div className="flex flex-col gap-5">
            {sideNews.map((news) => (
              <Link 
                key={news.id} 
                href={`/news/${news.id}`}
                className="group flex gap-4 sm:gap-5"
              >
                <div className="relative w-[120px] sm:w-[160px] h-[90px] sm:h-[110px] flex-shrink-0 rounded-lg overflow-hidden">
                  <Image
                    src={news.img}
                    alt={news.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="flex flex-col justify-center flex-1 min-w-0">
                  <h4 className="text-base sm:text-lg font-bold text-[#1B1D20] mb-1.5 group-hover:text-[#16A7CB] transition-colors line-clamp-2">
                    {news.title}
                  </h4>
                  
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-2">
                    {news.body}
                  </p>
                  
                  <div className="flex items-center text-[#16A7CB] text-sm font-medium">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                    อ่านต่อ
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
