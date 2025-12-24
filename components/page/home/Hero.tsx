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
    }, 4000);
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
      className="w-full cursor-pointer bg-white overflow-hidden"
      aria-label="AI-Driven Hero Section"
      aria-live="off"
    >

      {/* ========== DESKTOP ========== */}
      <div className="hidden md:block">
        <figure className="relative w-full h-[520px] lg:h-[560px] overflow-hidden mb-0">

          {SLIDES.map((slide, i) => {
            const active = i === index;
            return (
              <div
                key={i}
                aria-hidden={!active}
                className={`
                  absolute inset-0 transition-all duration-[1200ms]
                  ease-[cubic-bezier(.16,.84,.44,1)]
                  ${active ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-105 translate-x-6"}
                `}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover transition-transform duration-[1200ms]"
                />
              </div>
            );
          })}

          {/* TEXT LAYER */}
          <figcaption className="absolute inset-0 flex items-top z-20 mt-8 pointer-events-none">
            <div className="w-full flex justify-center">
              <div className="container w-full">

                <Image
                  src="/okmd_ai_logo.png"
                  width={72}
                  height={72}
                  alt="OKMD AI Logo"
                  className="mb-5 transition-all hover:scale-[1.05] pointer-events-auto"
                />

                <h1 className="text-[#1B1D20] font-bold text-4xl lg:text-5xl xl:text-[56px] leading-tight lg:leading-[1.15]">
                  AI-Driven intelligence:
                </h1>

                <p className="text-[#1B1D20] text-lg lg:text-xl xl:text-2xl mt-3 lg:mt-4 opacity-90 max-w-xl">
                  Search, summarize, and Recommend in an instant.
                </p>

                <button
                  type="button"
                  className="mt-5 lg:mt-6 bg-[#74CEE2] px-5 lg:px-6 py-2.5 lg:py-3 rounded-xl text-white text-base lg:text-lg font-medium
                    hover:bg-[#5FC4D8] active:scale-95 transition-all shadow-md pointer-events-auto"
                >
                  ดูรายละเอียด
                </button>
            </div>
          </figcaption>
        </figure>

        {/* PAGINATION DESKTOP */}
        <nav className="container mx-auto flex justify-center mt-8 pb-8" aria-label="Slide navigation">
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
                    ${i === index ? "w-10 h-2 bg-[#74CEE2]" : "w-2 h-2 bg-[#ECECED] hover:bg-[#D1D5DB]"}
                  `}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* ========== MOBILE ========== */}
      <div className="md:hidden">
        <figure className="relative w-full h-[280px] sm:h-[320px] overflow-hidden m-0">

          {SLIDES.map((slide, i) => {
            const active = i === index;
            return (
              <div
                key={i}
                aria-hidden={!active}
                className={`
                  absolute inset-0 transition-all duration-[1000ms]
                  ${active ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-105 translate-x-4"}
                `}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            );
          })}

          {/* MOBILE TEXT */}
          <figcaption className="absolute container mx-auto px-4 bottom-[40px] left-0 right-0 z-20">
            <div className="max-w-[300px]">
              <h2 className="text-[#1B1D20] font-bold text-3xl leading-[24px]">
                AI-Driven intelligence:
              </h2>
              <p className="text-[#1B1D20] text-lg mt-2 leading-[14px] opacity-90">
                Search, summarize, and Recommend in an instant.
              </p>
            </div>
          </figcaption>
        </figure>

        {/* PAGINATION MOBILE */}
        <nav className="container mx-auto flex gap-2 mt-6 justify-center pb-8" aria-label="Mobile slide navigation">
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
                    ${i === index ? "w-6 h-1.5 bg-[#74CEE2]" : "w-1.5 h-1.5 bg-[#C4C5C8]"}
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
