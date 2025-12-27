"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

const SLIDES = [
  { src: "/rectangle-689.png", alt: "AI-Driven Intelligence Banner 1" },
  { src: "/rectangle-689.png", alt: "AI-Driven Intelligence Banner 2" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const stopAuto = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const startAuto = useCallback(() => {
    stopAuto();
    timer.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
  }, [stopAuto]);

  /* AUTOPLAY */
  useEffect(() => {
    startAuto();
    return stopAuto;
  }, [index, startAuto, stopAuto]);

  const goTo = (i: number) => {
    stopAuto();
    setIndex(i);
    startAuto();
  };

  return (
    <section
      className="w-full bg-[#C5DBE3] overflow-hidden"
      aria-label="AI-Driven Hero Section"
      aria-live="off"
    >

      {/* ========== DESKTOP ========== */}
      <div className="hidden md:block">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="relative min-h-[480px] lg:min-h-[520px] xl:min-h-[560px] flex items-center">

            {/* LEFT CONTENT */}
            <div className="relative z-20 max-w-[600px] py-12">
              {/* OKMD AI Logo */}
              <div className="flex items-center gap-2 mb-6">
                <Image
                  src="/okmd_ai_logo.png"
                  width={56}
                  height={56}
                  alt="OKMD AI Logo"
                  className="transition-all hover:scale-[1.05]"
                />
              </div>

              <h1 className="text-[#1B1D20] font-bold text-4xl lg:text-5xl xl:text-[52px] leading-[1.1] mb-4">
                AI-Driven intelligence:
              </h1>

              <p className="text-[#1B1D20] text-lg lg:text-xl xl:text-2xl mb-6 opacity-85">
                Search, summarize, and Recommend in an instant.
              </p>

              <button
                type="button"
                className="bg-[#74CEE2] px-6 py-3 rounded-xl text-white text-base lg:text-lg font-medium
                  hover:bg-[#5FC4D8] active:scale-95 transition-all shadow-md"
              >
                ดูรายละเอียด
              </button>
            </div>

            {/* RIGHT AI ROBOT IMAGE */}
            <div className="absolute right-0 top-0 bottom-0 w-[55%] lg:w-[50%] flex items-center justify-end">
              <div className="relative w-full h-full">
                {/* AI Chip Icon */}
                <div className="absolute right-[20%] top-[30%] z-10">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 border-2 border-[#74CEE2]/50 rounded-lg flex items-center justify-center">
                    <span className="text-[#74CEE2] text-4xl lg:text-5xl font-light">AI</span>
                  </div>
                </div>
                {/* Robot Hand Image - using existing image */}
                <Image
                  src="/rectangle-689.png"
                  alt="AI Robot Hand"
                  fill
                  className="object-contain object-right"
                  priority
                />
              </div>
            </div>

          </div>
        </div>

        {/* PAGINATION DESKTOP */}
        <nav className="container mx-auto flex justify-center pb-8" aria-label="Slide navigation">
          <ul className="flex items-center gap-3 list-none m-0 p-0">
            {SLIDES.map((_, i) => (
              <li key={i}>
                <button
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-pressed={i === index}
                  className={`
                    block transition-all rounded-full cursor-pointer
                    ${i === index ? "w-10 h-2 bg-[#74CEE2]" : "w-2 h-2 bg-[#9AACB1] hover:bg-[#7A9AA1]"}
                  `}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* ========== MOBILE ========== */}
      <div className="md:hidden">
        <div className="container mx-auto px-4 py-10">
          
          {/* OKMD AI Logo */}
          <div className="flex items-center gap-2 mb-5">
            <Image
              src="/okmd_ai_logo.png"
              width={48}
              height={48}
              alt="OKMD AI Logo"
            />
          </div>

          <h2 className="text-[#1B1D20] font-bold text-3xl leading-tight mb-3">
            AI-Driven intelligence:
          </h2>

          <p className="text-[#1B1D20] text-base mb-5 opacity-85">
            Search, summarize, and Recommend in an instant.
          </p>

          <button
            type="button"
            className="bg-[#74CEE2] px-5 py-2.5 rounded-xl text-white text-base font-medium
              hover:bg-[#5FC4D8] active:scale-95 transition-all shadow-md"
          >
            ดูรายละเอียด
          </button>

        </div>

        {/* PAGINATION MOBILE */}
        <nav className="container mx-auto flex gap-2 justify-center pb-8" aria-label="Mobile slide navigation">
          <ul className="flex gap-2 m-0 p-0 list-none">
            {SLIDES.map((_, i) => (
              <li key={i}>
                <button
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  aria-pressed={i === index}
                  onClick={() => goTo(i)}
                  className={`
                    cursor-pointer block rounded-full transition-all
                    ${i === index ? "w-6 h-1.5 bg-[#74CEE2]" : "w-1.5 h-1.5 bg-[#9AACB1]"}
                  `}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
