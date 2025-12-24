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
  const newsList = Object.values(NEWS_DATA).slice(0, 3) as NewsItem[];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 md:mb-12 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B1D20] mb-2">
              ข่าวสารและกิจกรรม
            </h2>
            <div className="h-1 w-20 bg-[#74CEE2] rounded-full"></div>
          </div>
          
          <Link 
            href="/news" 
            className="group flex items-center text-[#16A7CB] font-medium hover:text-[#1384A2] transition-colors"
          >
            ดูทั้งหมด
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {newsList.map((news) => (
            <Link 
              key={news.id} 
              href={`/news/${news.id}`}
              className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-[200px] lg:h-[220px] w-full overflow-hidden">
                <Image
                  src={news.img}
                  alt={news.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#74CEE2] text-[#1B1D20] text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                  {news.tag}
                </div>
              </div>
              
              <div className="flex flex-col flex-grow p-5 lg:p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                  {news.date}
                </div>
                
                <h3 className="text-lg lg:text-xl font-bold text-[#1B1D20] mb-2 line-clamp-2 group-hover:text-[#16A7CB] transition-colors">
                  {news.title}
                </h3>
                
                <p className="text-gray-600 line-clamp-3 mb-4 text-sm leading-relaxed flex-grow">
                  {news.body}
                </p>
                
                <div className="flex items-center text-[#16A7CB] text-sm font-semibold mt-auto">
                  อ่านเพิ่มเติม
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
