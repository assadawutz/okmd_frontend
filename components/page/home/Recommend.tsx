"use client";

import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";

const ITEMS = [
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
  return (
    <section className="bg-[#0F0F0F] py-20">
      <div className="container mx-auto">
        <div className="space-y-12">

          <header className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Smart Picks
            </h2>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mt-3">
              ชุดเนื้อหาที่คัดสรรโดยทีมภัณฑารักษ์และ AI เพื่อให้คุณเจอแรงบันดาลใจได้ไวขึ้น
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {ITEMS.map((item) => (
              <article
                key={item.id}
                className="
                  group relative isolate overflow-hidden 
                  rounded-2xl border border-white/10
                  bg-[#151515]
                  shadow-[0_12px_36px_rgba(0,0,0,0.5)]
                  transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.6)]
                  h-[280px] sm:h-[320px] md:h-[380px] lg:h-[400px]
                  cursor-pointer
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
      </div>
    </section>
  );
}
