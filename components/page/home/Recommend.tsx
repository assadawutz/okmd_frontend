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
    <section className="bg-[#0F0F0F] py-16 md:py-24">
      <div className="w-full flex justify-center">
        <div className="w-full container mx-auto px-6 lg:px-10 space-y-12">

          <header className="text-center space-y-0">
            
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Smart Picks
              </h2>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
                ชุดเนื้อหาที่คัดสรรโดยทีมภัณฑารักษ์และ AI เพื่อให้คุณเจอแรงบันดาลใจได้ไวขึ้น
              </p>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {ITEMS.map((item) => (
              <article
                key={item.id}
                className="
                  group relative isolate overflow-hidden 
                  rounded-[24px] border border-white/10
                  bg-[#151515]
                  shadow-[0_16px_45px_rgba(0,0,0,0.55)]
                  transition duration-500 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(0,0,0,0.65)]
                  min-h-[300px] sm:min-h-[360px] md:min-h-[420px]
                  flex
                "
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover absolute inset-0 opacity-80 group-hover:scale-[1.05] transition duration-[1200ms]"
                />


                
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
