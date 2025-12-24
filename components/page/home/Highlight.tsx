"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { getHighlights, type HighlightItem } from "@/lib/services/highlight.service";

export default function HighlightSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const [highlights, setHighlights] = useState<HighlightItem[]>([]);

  useEffect(() => {
    // Fetch highlights from service layer
    getHighlights().then((data) => {
      setHighlights(data);
    });
  }, []);

  /* AUTO SLIDE */
  useEffect(() => {
    if (highlights.length === 0) return;
    const timer = setInterval(() => {
      if (!ref.current) return;
      const next = (index + 1) % highlights.length;
      setIndex(next);
      ref.current.scrollTo({
        left: next * ref.current.clientWidth,
        behavior: "smooth",
      });
    }, 3800);
    return () => clearInterval(timer);
  }, [index, highlights.length]);

  return (
    <section className="bg-[#DFF1F9] w-full py-16 md:py-20">
      {/* HEADER */}
      <div className="container mx-auto px-6 lg:px-10 text-center mb-10 md:mb-14">
        <h2 className="font-semibold text-okmd-dark leading-tight text-2xl sm:text-3xl lg:text-4xl">
          Highlight
        </h2> 
        <p className="mt-2 text-lg sm:text-xl text-[#16A7CB]">
          ทุกจุดเด่น ถูกยกมาไว้ตรงนี้
        </p>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:block">
        <div className="container mx-auto px-6 lg:px-10">

          {/* ROW 1 */}
          {highlights.length >= 3 && (
            <div className="grid grid-cols-12 gap-6 lg:gap-8">

              {/* BOX 1 */}
              <div className="col-span-4 rounded-2xl h-[320px] lg:h-[340px] shadow-[0_6px_22px_rgba(0,0,0,0.10)] relative overflow-hidden group cursor-pointer">
                <Image  
                  src={highlights[0].img}
                  fill
                  alt={highlights[0].title}
                  className="object-cover transition-all duration-700 group-hover:scale-[1.05]"
                />
                <div className="bg-gradient-to-b from-black/20 via-black/40 to-black/70 inset-0 absolute" />
                <div className="space-y-2 text-white bottom-5 left-5 right-5 absolute drop-shadow-lg">
                  <h3 className="font-semibold text-lg lg:text-xl leading-snug line-clamp-2">
                    {highlights[0].title}
                  </h3>
                  {highlights[0].desc && (
                    <p className="opacity-90 text-sm line-clamp-2">{highlights[0].desc}</p>
                  )}
                  <a href={highlights[0].link} className="inline-flex text-sm transition text-[#74CEE2] gap-1 items-center hover:opacity-70">
                    อ่านต่อ <span>↗</span>
                  </a>
                </div>
              </div>

              {/* BOX 2 */}
              <div className="col-span-4 bg-white flex rounded-2xl h-[320px] lg:h-[340px] p-5 lg:p-6 transition shadow-[0_4px_22px_rgba(0,0,0,0.08)] justify-between hover:shadow-[0_6px_26px_rgba(0,0,0,0.12)] cursor-pointer">
                <div className="flex flex-col justify-center">
                  <p className="text-sm mb-1 text-gray-500">The Knowledge</p>
                  <h3 className="font-bold leading-snug text-3xl lg:text-4xl">{highlights[1].title.replace("The Knowledge\n", "")}</h3>
                </div>
                <Image
                  src={highlights[1].img}
                  width={160}
                  height={240}
                  alt={highlights[1].title}
                  className="rounded-none shadow-md object-contain"
                />
              </div>

              {/* BOX 3 */}
              <div className="col-span-4 bg-white rounded-2xl h-[320px] lg:h-[340px] p-5 lg:p-6 transition shadow-[0_4px_22px_rgba(0,0,0,0.08)] relative overflow-hidden hover:shadow-[0_6px_26px_rgba(0,0,0,0.12)] cursor-pointer">
                <Image
                  src={highlights[2].img}
                  width={120}
                  height={120}
                  alt="highlight-3-icon"
                  className="opacity-20 right-4 bottom-4 absolute"
                />

                <p className="font-bold text-lg mb-2 tracking-tight">OKMD</p>

                <h3 className="font-medium mb-3 text-base text-[#1B1D20] leading-snug line-clamp-2">
                  {highlights[2].title}
                </h3>

                {highlights[2].desc && (
                  <p className="text-sm text-[#7F8288] leading-relaxed line-clamp-4">
                    {highlights[2].desc}
                  </p>
                )}

                <a href={highlights[2].link} className="inline-flex mt-5 text-sm transition text-[#16A7CB] gap-1 items-center hover:opacity-70">
                  อ่านต่อ <span>↗</span>
                </a>
              </div>
            </div>
          )}

          {/* ROW 2 */}
          {highlights.length >= 5 && (
            <div className="grid grid-cols-12 gap-6 lg:gap-8 mt-6 lg:mt-8">

              {/* BOX 4 */}
              <div className="col-span-8 rounded-2xl h-[320px] lg:h-[340px] shadow-[0_6px_22px_rgba(0,0,0,0.10)] relative overflow-hidden group cursor-pointer">
                <Image
                  src={highlights[3].img}
                  fill
                  alt={highlights[3].title || "highlight-4"}
                  className="object-cover transition-all duration-700 group-hover:scale-[1.05]"
                />
                <div className="bg-gradient-to-t from-black/50 via-transparent to-transparent inset-0 absolute" />
              </div>

              {/* BOX 5 */}
              <div className="col-span-4 rounded-2xl h-[320px] lg:h-[340px] shadow-[0_6px_22px_rgba(0,0,0,0.10)] relative overflow-hidden group cursor-pointer">
                <Image
                  src={highlights[4].img}
                  fill
                  alt={highlights[4].title}
                  className="object-cover transition-all duration-700 group-hover:scale-[1.05]"
                />
                <div className="bg-gradient-to-t from-black/60 via-black/20 to-transparent inset-0 absolute" />
                <div className="space-y-2 text-white bottom-5 left-5 right-5 absolute drop-shadow-lg">
                  <h3 className="font-semibold text-lg lg:text-xl leading-snug line-clamp-2">
                    {highlights[4].title}
                  </h3>
                  <a href={highlights[4].link} className="inline-flex text-sm transition text-[#74CEE2] gap-1 items-center hover:opacity-70">
                    อ่านต่อ <span>↗</span>
                  </a>
                </div>
              </div>

            </div>
          )}
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      {highlights.length > 0 && (
        <div className="md:hidden px-4 sm:px-6">
          <div ref={ref} className="flex w-full overflow-x-auto scroll-smooth snap-x snap-mandatory gap-4 pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {highlights.map((h, i) => (
              <div
                key={h.id}
                className="bg-white rounded-2xl flex-shrink-0 h-[300px] w-[85vw] max-w-[340px] shadow-[0_6px_18px_rgba(0,0,0,0.10)] snap-center overflow-hidden"
              >
                {/* MOBILE TYPE MATCHING */}
                {i === 0 && (
                  <div className="h-full relative">
                    <Image src={h.img} fill alt={h.title} className="object-cover" />
                    <div className="bg-gradient-to-t from-black/70 via-black/30 to-transparent inset-0 absolute" />
                    <div className="space-y-2 text-white bottom-5 left-5 right-5 absolute drop-shadow-lg">
                      <h3 className="font-semibold text-lg leading-snug line-clamp-2">
                        {h.title}
                      </h3>
                      {h.desc && (
                        <p className="opacity-90 text-sm line-clamp-1">{h.desc}</p>
                      )}
                      <a className="inline-flex text-sm text-[#74CEE2] gap-1 items-center" href={h.link}>
                        อ่านต่อ ↗
                      </a>
                    </div>
                  </div>
                )}

                {i === 1 && (
                  <div className="bg-white flex h-full px-5 items-center justify-between">
                    <div>
                      <p className="text-sm mb-1 text-gray-500">The Knowledge</p>
                      <h3 className="font-bold leading-snug text-3xl">{h.title.replace("The Knowledge\n", "")}</h3>
                    </div>
                    <Image src={h.img} width={120} height={180} alt={h.title} className="rounded-lg shadow object-contain" />
                  </div>
                )}

                {i === 2 && (
                  <div className="bg-white h-full p-5 relative overflow-hidden">
                    <Image src={h.img} width={100} height={100} alt="" className="opacity-20 right-3 bottom-3 absolute" />
                    <p className="font-bold text-lg mb-2">OKMD</p>
                    <h3 className="font-medium mb-2 text-base text-[#1B1D20] leading-snug line-clamp-2">
                      {h.title}
                    </h3>
                    {h.desc && (
                      <p className="text-sm text-[#7F8288] leading-relaxed line-clamp-3">
                        {h.desc}
                      </p>
                    )}
                    <a className="inline-flex mt-4 text-sm text-[#16A7CB] gap-1 items-center" href={h.link}>
                      อ่านต่อ ↗
                    </a>
                  </div>
                )}

                {i === 3 && (
                  <div className="h-full relative overflow-hidden">
                    <Image src={h.img} fill alt={h.title || "highlight"} className="object-cover" />
                    <div className="bg-gradient-to-t from-black/50 via-transparent to-transparent inset-0 absolute" />
                  </div>
                )}

                {i === 4 && (
                  <div className="h-full relative overflow-hidden">
                    <Image src={h.img} fill alt={h.title} className="object-cover" />
                    <div className="bg-gradient-to-t from-black/70 via-black/20 to-transparent inset-0 absolute" />
                    <div className="space-y-2 text-white bottom-5 left-5 right-5 absolute drop-shadow-lg">
                      <h3 className="font-semibold text-lg leading-snug line-clamp-2">
                        {h.title}
                      </h3>
                      <a className="inline-flex text-sm text-[#74CEE2] gap-1 items-center" href={h.link}>
                        อ่านต่อ ↗
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex mt-5 gap-1.5 justify-center">
            {highlights.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (!ref.current) return;
                  setIndex(i);
                  ref.current.scrollTo({ left: i * ref.current.clientWidth, behavior: "smooth" });
                }}
                className={`rounded-full transition-all ${
                  index === i ? "w-6 h-2 bg-[#16A7CB]" : "w-2 h-2 bg-[#C8E8EF] hover:bg-[#A8D8E8]"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
