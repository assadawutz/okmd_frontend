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
      className="w-full bg-white"
      aria-label="AI-Driven Hero Section"
      aria-live="off"
    >

      {/* ========== DESKTOP ========== */}
      <div className="hidden md:block">
        <figure className="relative w-full h-[560px] overflow-hidden">

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
                  className="object-cover transition-transform duration-[1200ms] hover:scale-[1.04]"
                />
              </div>
            );
          })}

          {/* TEXT LAYER */}
          <figcaption className="absolute inset-0 flex items-center z-20 pointer-events-none">
            <div className="container mx-auto">

                <Image
                  src="/okmd_ai_logo.png"
                  width={80}
                  height={80}
                  alt="OKMD AI Logo"
                  className="mb-6 transition-all hover:scale-[1.05] pointer-events-auto"
                />

                <h1 className="text-[#1B1D20] font-bold text-4xl md:text-5xl lg:text-[64px] leading-tight lg:leading-[72px]">
                  AI-Driven intelligence:
                </h1>

                <p className="text-[#1B1D20] text-lg md:text-xl lg:text-[24px] mt-4 opacity-90 max-w-[600px]">
                  Search, summarize, and Recommend in an instant.
                </p>

                <button
                  type="button"
                  className="mt-6 bg-[#74CEE2] px-6 py-3 rounded-xl text-white text-base md:text-lg font-medium
                    hover:bg-[#5FC4D8] active:scale-95 transition shadow-md pointer-events-auto"
                >
                  ดูรายละเอียด
                </button>
            </div>
          </figcaption>
        </figure>

        {/* PAGINATION DESKTOP */}
        <div className="container mx-auto py-8">
          <nav className="flex justify-center" aria-label="Slide navigation">
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
                      ${i === index ? "w-12 h-2 bg-[#74CEE2]" : "w-2 h-2 bg-[#ECECED]"}
                    `}
                  />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* ========== MOBILE ========== */}
      <div className="md:hidden">
        <figure className="relative w-full h-[300px] overflow-hidden">

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
          <figcaption className="absolute bottom-10 left-0 right-0 z-20">
            <div className="container mx-auto">
              <h2 className="text-[#1B1D20] font-bold text-2xl md:text-3xl leading-tight">
                AI-Driven intelligence:
              </h2>
              <p className="text-[#1B1D20] text-base md:text-lg mt-2 leading-relaxed opacity-90">
                Search, summarize, and Recommend in an instant.
              </p>
            </div>
          </figcaption>
        </figure>

        {/* PAGINATION MOBILE */}
        <div className="container mx-auto py-6">
          <nav className="flex justify-center" aria-label="Mobile slide navigation">
            <ul className="flex gap-2 m-0 p-0 list-none">
              {SLIDES.map((_, i) => (
                <li key={i}>
                  <button
                    type="button"
                    aria-label={`Go to slide ${i + 1}`}
                    aria-pressed={i === index}
                    onClick={() => goTo(i)}
                    className={`
                      cursor-pointer block rounded-sm transition-all
                      ${i === index ? "w-[21px] h-[5px] bg-[#74CEE2]" : "w-[21px] h-[5px] bg-[#C4C5C8]"}
                    `}
                  />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
