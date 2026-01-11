"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles, Loader2 } from "lucide-react";

interface RecommendItem {
  id: number;
  title: string;
  desc: string;
  img: string;
  tag: string;
}

const DEFAULT_ITEMS: RecommendItem[] = [
  {
    id: 1,
    tag: "Smart picks",
    title: "Unleash\nYour Potential",
    img: "/rec1.png",
    color: "from-[#0E7893]/90 to-[#16A7CB]/80",
  },
  {
    id: 2,
    tag: "OKMD",
    title: "Unlock knowledge\nanywhere you are",
    img: "/rec2.png",
    color: "from-[#1B1D20]/90 to-[#3A3D41]/80",
  },
];

export default function RecommendSection() {
  const [items, setItems] = useState<RecommendItem[]>(DEFAULT_ITEMS);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        setIsLoading(true);
        // Simulate API
        await new Promise((resolve) => setTimeout(resolve, 100));
        setItems(DEFAULT_ITEMS);
      } catch (err) {
        console.error("Error fetching recommendations:", err);
        setError("ไม่สามารถโหลดข้อมูลได้");
        setItems(DEFAULT_ITEMS);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRecommendations();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center bg-[#0F0F0F] rounded-3xl">
        <Loader2 className="w-8 h-8 text-[#74CEE2] animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-full bg-[#0F0F0F] rounded-3xl p-6 md:p-10 shadow-lg space-y-8">
      <header className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Smart Picks
        </h2>
        <p className="text-gray-300 text-sm sm:text-base mt-2 max-w-lg mx-auto">
          ชุดเนื้อหาที่คัดสรรโดยทีมภัณฑารักษ์และ AI
          เพื่อให้คุณเจอแรงบันดาลใจได้ไวขึ้น
        </p>
      </header>

      <div className="flex flex-col gap-6">
        {items.map((item) => (
          <article
            key={item.id}
            tabIndex={0}
            role="button"
            className="
              group relative isolate overflow-hidden 
              rounded-2xl border border-white/10
              bg-[#151515]
              shadow-md
              transition-all duration-300 hover:shadow-xl hover:scale-[1.01]
              h-[280px] sm:h-[320px]
              cursor-pointer
            "
          >
            <Image
              src={item.img}
              alt={item.title}
              fill
              className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <span className="inline-flex items-center gap-2 text-[#74CEE2] text-xs font-medium uppercase tracking-wider mb-2">
                <Sparkles size={14} /> {item.tag}
              </span>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
                {item.title}
              </h3>

              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
