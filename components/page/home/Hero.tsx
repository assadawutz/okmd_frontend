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
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  }, []);

  const startAuto = useCallback(() => {
    stopAuto();
    timer.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
  }, [stopAuto]);

  useEffect(() => {
    startAuto();
    return () => stopAuto();
  }, [index, startAuto, stopAuto]);

  const goTo = (i: number) => {
    if (i < 0 || i >= SLIDES.length) return;
    stopAuto();
    setIndex(i);
    startAuto();
  };

  return (
    <div
      className="w-full relative overflow-hidden rounded-3xl shadow-sm hover:shadow-md transition-all duration-300"
      aria-label="AI-Driven Hero Section"
    >
      {/* CARD CONTAINER */}
      <div className="relative w-full aspect-[4/5] sm:aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-3xl group">
        {/* SLIDES */}
        {SLIDES.map((slide, i) => {
          const active = i === index;
          return (
            <div
              key={i}
              className={`
                absolute inset-0 transition-all duration-[1200ms]
                ease-[cubic-bezier(.16,.84,.44,1)]
                ${active ? "opacity-100 scale-100" : "opacity-0 scale-105"}
              `}
              aria-hidden={!active}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={i === 0}
                className="object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>
          );
        })}

        {/* CONTENT LAYER */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 text-white z-20 pointer-events-none">
          <div className="pointer-events-auto space-y-4">
            <Image
              src="/okmd_ai_logo.png"
              width={64}
              height={64}
              alt="OKMD AI Logo"
              className="mb-2 drop-shadow-md"
            />

            <div>
              <h1 className="font-bold text-3xl sm:text-4xl leading-tight drop-shadow-lg">
                AI-Driven intelligence:
              </h1>
              <p className="text-lg opacity-90 mt-2 max-w-md drop-shadow-md">
                Search, summarize, and Recommend in an instant.
              </p>
            </div>

            <button
              onClick={() => {}} // Add handler
              className="inline-flex items-center px-6 py-3 bg-[#74CEE2] text-white font-semibold rounded-xl 
                hover:bg-[#5FC4D8] active:scale-95 transition-all shadow-lg cursor-pointer"
            >
              ดูรายละเอียด
            </button>
          </div>
        </div>

        {/* PAGINATION DOTS */}
        <div className="absolute top-6 right-6 flex gap-2 z-30 pointer-events-auto">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`
                h-2 rounded-full transition-all duration-300
                ${
                  i === index
                    ? "w-8 bg-[#74CEE2]"
                    : "w-2 bg-white/50 hover:bg-white"
                }
              `}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
