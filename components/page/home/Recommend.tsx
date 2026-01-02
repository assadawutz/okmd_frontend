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
    title: "Unleash Your Potential",
    desc: "เราไม่ได้แค่แนะนำ แต่เราคัดหมวดนิยมใหม่ให้เป็นทางเลือก พร้อมคัดความรู้ที่ใช้ได้จริงในชีวิตประจำวัน",
    img: "/rec1.png",
    tag: "Smart picks",
  },
  {
    id: 2,
    title: "Unlock knowledge anywhere you are",
    desc: "OKMD Knowledge Portal ศูนย์รวมองค์ความรู้ดิจิทัลที่หยิบได้ทุกอุปกรณ์",
    img: "/rec2.png",
    tag: "Knowledge hub",
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
        setError(null);

        // TODO: Replace with actual API call
        // const data = await getRecommendations();
        // setItems(data);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 100));
        setItems(DEFAULT_ITEMS);
      } catch (err) {
        console.error("Error fetching recommendations:", err);
        setError("ไม่สามารถโหลดข้อมูลได้");
        setItems(DEFAULT_ITEMS); // Fallback to default items
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecommendations();
  }, []);

  if (isLoading) {
    return (
      <section className="bg-[#0F0F0F] py-12 md:py-16 lg:py-20">
        <div className="container mx-auto">
          <div className="flex items-center justify-center min-h-[400px]">
            <Loader2 className="w-8 h-8 text-[#74CEE2] animate-spin" />
          </div>
        </div>
      </section>
    );
  }

  if (error && items.length === 0) {
    return (
      <section className="bg-[#0F0F0F] py-12 md:py-16 lg:py-20">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
            <p className="text-red-400 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-[#74CEE2] text-white rounded-lg hover:bg-[#5ab8cc] transition-colors"
            >
              ลองอีกครั้ง
            </button>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="bg-[#0F0F0F] py-16 md:py-20">
      <div className="container mx-auto">
        <header className="text-center mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Smart Picks
          </h2>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mt-3">
            ชุดเนื้อหาที่คัดสรรโดยทีมภัณฑารักษ์และ AI
            เพื่อให้คุณเจอแรงบันดาลใจได้ไวขึ้น
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {items.map((item) => (
            <article
              key={item.id}
              tabIndex={0}
              role="button"
              aria-label={item.title}
              className="
                group relative isolate overflow-hidden 
                rounded-2xl border border-white/10
                bg-[#151515]
                shadow-[0_12px_36px_rgba(0,0,0,0.5)]
                transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.6)]
                h-[280px] sm:h-[320px] md:h-[380px] lg:h-[400px]
                cursor-pointer
                focus:outline-none focus:ring-2 focus:ring-[#74CEE2] focus:ring-offset-2 focus:ring-offset-[#0F0F0F]
              "
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-80 group-hover:scale-[1.04] transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 transition-all duration-300" />

              <div className="absolute inset-0 p-5 sm:p-6 md:p-8 flex flex-col justify-end">
                <span className="inline-flex items-center gap-2 text-[#74CEE2] text-xs sm:text-sm font-medium uppercase tracking-wider mb-2">
                  <Sparkles size={14} /> {item.tag}
                </span>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4 sm:mb-5 line-clamp-2 sm:line-clamp-3">
                  {item.desc}
                </p>

                <div className="flex items-center text-white text-sm sm:text-base font-medium group/btn w-fit">
                  View collection
                  <span className="ml-2 bg-white/20 p-1.5 rounded-full group-hover/btn:bg-[#74CEE2] transition-colors">
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
