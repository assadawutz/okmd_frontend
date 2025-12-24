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
    <section className="bg-white py-20">
      <div className="container mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B1D20] mb-2">
              ข่าวสารและกิจกรรม
            </h2>
            <div className="h-1 w-24 bg-[#74CEE2] rounded-full"></div>
          </div>
          
          <Link 
            href="/news" 
            className="group flex items-center text-[#16A7CB] font-medium hover:text-[#1384A2] transition-colors"
          >
            ดูทั้งหมด
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsList.map((news) => (
            <Link 
              key={news.id} 
              href={`/news/${news.id}`}
              className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-[240px] w-full overflow-hidden">
                <Image
                  src={news.img}
                  alt={news.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#74CEE2] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                  {news.tag}
                </div>
              </div>
              
              <div className="flex flex-col flex-grow p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {news.date}
                </div>
                
                <h3 className="text-xl font-bold text-[#1B1D20] mb-3 line-clamp-2 group-hover:text-[#16A7CB] transition-colors">
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
