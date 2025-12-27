"use client";

import Image from "next/image";
import Link from "next/link";

const ITEMS = [
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
  return (
    <section className="bg-[#0F0F0F] py-16 md:py-20">
      <div className="container mx-auto">

        {/* HEADER */}
        <header className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Smart Picks
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto mt-2">
            ชุดเนื้อหาที่คัดสรรโดยทีมภัณฑารักษ์และ AI เพื่อให้คุณเจอแรงบันดาลใจได้ไวขึ้น
          </p>
        </header>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {ITEMS.map((item) => (
            <Link
              key={item.id}
              href="#"
              className="
                group relative isolate overflow-hidden 
                rounded-2xl
                bg-[#151515]
                shadow-[0_8px_24px_rgba(0,0,0,0.4)]
                transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.5)]
                h-[300px] sm:h-[340px] md:h-[380px] lg:h-[400px]
                cursor-pointer
              "
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-90 group-hover:scale-[1.03] transition-transform duration-700"
              />
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${item.color} to-transparent`} />

              {/* Content */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                <span className="text-[#74CEE2] text-xs sm:text-sm font-medium uppercase tracking-wider mb-2">
                  {item.tag}
                </span>
                
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight whitespace-pre-line">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
