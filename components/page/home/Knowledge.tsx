"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

type MenuItem = {
  label: string;
  value: string;
};

type MagazineItem = {
  id: string;
  title: string;
  img: string;
  volume: string;
  date: string;
  description: string;
  fileSize: string;
};

const MENU: MenuItem[] = [
  { label: "OKMD กระตุกต่อมคิด นิตยสารเพื่อพัฒนาความคิด", value: "magazine" },
  { label: "OKMD แนะนำหนังสือดี", value: "recommend" },
  { label: "OKMD Infographic", value: "infographic" },
  { label: "OKMD บทความวิจัย", value: "research" },
  { label: "OKMD Recommended", value: "recommended" },
];

const MAGAZINES: MagazineItem[] = [
  {
    id: "1",
    title: "The Knowledge vol.40",
    img: "/kn-4.png",
    volume: "ฉบับที่ 40",
    date: "กันยายน - ตุลาคม 2568",
    description: "นิตยสาร OKMD | เพิ่มพูนความรู้ | สร้างสรรค์ภูมิปัญญา สำนักงานบริหารและพัฒนาองค์ความรู้ (องค์การมหาชน)",
    fileSize: "27,935.23 KB",
  },
  {
    id: "2",
    title: "The Knowledge vol.39",
    img: "/kn-1.png",
    volume: "ฉบับที่ 39",
    date: "กรกฎาคม - สิงหาคม 2568",
    description: "AI DEEPFAKE",
    fileSize: "54,265.14 KB",
  },
  {
    id: "3",
    title: "The Knowledge vol.38",
    img: "/kn-2.png",
    volume: "ฉบับที่ 38",
    date: "พฤษภาคม - มิถุนายน 2568",
    description: "INFORMATION OVERLOAD",
    fileSize: "54,265.14 KB",
  },
  {
    id: "4",
    title: "The Knowledge vol.37",
    img: "/kn-3.png",
    volume: "ฉบับที่ 37",
    date: "มีนาคม - เมษายน 2568",
    description: "GLOBAL BOILING",
    fileSize: "54,265.14 KB",
  },
];

export default function KnowledgeShelfSection() {
  const [selectedMenu, setSelectedMenu] = useState("magazine");
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  const currentMagazine = MAGAZINES[currentSlide];

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % MAGAZINES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-[#E8F4F8] py-16 md:py-20">
      <div className="container mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-start mb-8 md:mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B1D20]">
              Knowledge Box
            </h2>
            <p className="text-[#16A7CB] text-base md:text-lg mt-1">
              ตู้ความรู้ | สร้างสรรค์ภูมิปัญญา
            </p>
          </div>

          <Link 
            href="/knowledge" 
            className="hidden sm:flex items-center text-[#1B1D20] text-sm font-medium hover:text-[#16A7CB] transition-colors"
          >
            <span className="border-t border-[#1B1D20] w-12 mr-3"></span>
            ดูทั้งหมด
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </Link>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* LEFT - MENU */}
          <div className="lg:col-span-3">
            <nav className="flex flex-col">
              {MENU.map((item, idx) => (
                <button
                  key={item.value}
                  onClick={() => setSelectedMenu(item.value)}
                  className={`
                    text-left py-3.5 px-4 text-sm font-medium transition-all border-b border-gray-200
                    ${selectedMenu === item.value 
                      ? "text-[#16A7CB] bg-white/50" 
                      : "text-[#1B1D20] hover:text-[#16A7CB] hover:bg-white/30"
                    }
                    ${idx === 0 ? "border-t" : ""}
                  `}
                >
                  <div className="flex items-center justify-between">
                    <span className="line-clamp-2">{item.label}</span>
                    {selectedMenu === item.value && (
                      <svg className="w-4 h-4 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </div>
                </button>
              ))}
            </nav>
          </div>

          {/* CENTER - MAGAZINE IMAGE */}
          <div className="lg:col-span-4 flex justify-center items-center" ref={slideRef}>
            <div className="relative w-full max-w-[280px] lg:max-w-[320px]">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={currentMagazine.img}
                  alt={currentMagazine.title}
                  fill
                  className="object-cover transition-opacity duration-500"
                />
              </div>
              
              {/* Pagination dots */}
              <div className="flex justify-center gap-2 mt-6">
                {MAGAZINES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`
                      rounded-full transition-all
                      ${currentSlide === idx 
                        ? "w-8 h-2 bg-[#16A7CB]" 
                        : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                      }
                    `}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT - INFO */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#1B1D20] mb-3">
              {currentMagazine.title}
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-1">
              {currentMagazine.description}
            </p>
            <p className="text-gray-500 text-sm mb-4">
              {currentMagazine.volume} | {currentMagazine.date}
            </p>
            <p className="text-gray-400 text-xs mb-6">
              สำนักงานบริหารและพัฒนาองค์ความรู้ (องค์การมหาชน)
            </p>

            <a 
              href="#" 
              className="inline-flex items-center text-[#16A7CB] text-sm font-medium hover:underline"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              ดาวน์โหลดเอกสาร pdf ขนาด {currentMagazine.fileSize}
            </a>
          </div>

        </div>

        {/* MOBILE - View All Link */}
        <div className="sm:hidden mt-8 text-center">
          <Link 
            href="/knowledge" 
            className="inline-flex items-center text-[#16A7CB] text-sm font-medium"
          >
            ดูทั้งหมด
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
