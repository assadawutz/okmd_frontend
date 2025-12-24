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
    <section className="mx-auto bg-[#DFF1F9] w-full py-20">
      {/* HEADER */}
      <div className="text-center mb-16">
              <h2 className="font-semibold text-okmd-dark leading-tight text-2xl sm:text-3xl lg:text-4xl">
          Highlight
        </h2> 
        <p className="mt-2 text-xl opacity-90 text-[#16A7CB]">
          ทุกจุดเด่น ถูกยกมาไว้ตรงนี้
        </p>
      </div>

      {/* DESKTOP */}
      <div className="flex-col w-full hidden items-center md:flex">

        {/* ROW 1 */}
        {highlights.length >= 3 && (
          <div className="flex gap-10">

            {/* BOX 1 */}
            <div className="rounded-2xl h-[330px] shadow-[0_6px_22px_rgba(0,0,0,0.10)] w-[335px] relative overflow-hidden group">
              <Image  
                src={highlights[0].img}
                fill
                alt={highlights[0].title}
                className="object-cover transition-all duration-700 group-hover:scale-[1.06]"
              />
              <div className="bg-gradient-to-b from-black/20 via-black/40 to-black/70 inset-0 absolute" />
              <div className="space-y-3 text-white bottom-6 left-6 absolute drop-shadow-lg">
                <h3 className="font-semibold text-[20px] leading-[28px] whitespace-pre-line">
                  {highlights[0].title}
                </h3>
                {highlights[0].desc && (
                  <p className="opacity-90 text-[14px]">{highlights[0].desc}</p>
                )}
                <a href={highlights[0].link} className="flex text-sm transition text-[#74CEE2] gap-1 items-center hover:opacity-70">
                  อ่านต่อ <span>↗</span>
                </a>
              </div>
            </div>

            {/* BOX 2 */}
            <div className="bg-white flex rounded-2xl h-[330px] px-6 pt-10 pb-10 transition shadow-[0_4px_22px_rgba(0,0,0,0.08)] w-[365px] justify-between hover:shadow-[0_6px_26px_rgba(0,0,0,0.12)]">
              <div>
                <p className="text-sm mb-1 text-gray-500">The Knowledge</p>
                <h3 className="font-bold leading-snug text-4xl">{highlights[1].title.replace("The Knowledge\n", "")}</h3>
              </div>
              <Image
                src={highlights[1].img}
                width={180}
                height={260}
                alt={highlights[1].title}
                className="rounded-none shadow-md"
              />
            </div>

            {/* BOX 3 */}
            <div className="bg-white rounded-2xl h-[330px] px-6 pt-6 transition shadow-[0_4px_22px_rgba(0,0,0,0.08)] w-[365px] relative overflow-hidden hover:shadow-[0_6px_26px_rgba(0,0,0,0.12)]">
              <Image
                src={highlights[2].img}
                width={150}
                height={150}
                alt="highlight-3-icon"
                className="opacity-30 right-4 bottom-4 absolute"
              />

              <p className="font-bold text-lg mb-2 tracking-tight">OKMD</p>

              <h3 className="font-medium mb-3 text-[16px] text-[#1B1D20] leading-6">
                {highlights[2].title}
              </h3>

              {highlights[2].desc && (
                <p className="text-sm text-[#7F8288] leading-5 line-clamp-3">
                  {highlights[2].desc}
                </p>
              )}

              <a href={highlights[2].link} className="flex mt-6 text-sm transition text-[#16A7CB] gap-1 items-center hover:opacity-70">
                อ่านต่อ <span>↗</span>
              </a>
            </div>
          </div>
        )}

        {/* ROW 2 */}
        {highlights.length >= 5 && (
          <div className="flex mt-10 gap-10">

            {/* BOX 4 */}
            <div className="rounded-2xl h-[330px] shadow-[0_6px_22px_rgba(0,0,0,0.10)] w-[752px] relative overflow-hidden group">
              <Image
                src={highlights[3].img}
                fill
                alt={highlights[3].title || "highlight-4"}
                className="object-cover transition-all duration-700 group-hover:scale-[1.06]"
              />
            </div>

            {/* BOX 5 */}
            <div className="rounded-2xl h-[330px] shadow-[0_6px_22px_rgba(0,0,0,0.10)] w-[365px] relative overflow-hidden group">
              <Image
                src={highlights[4].img}
                fill
                alt={highlights[4].title}
                className="object-cover transition-all duration-700 group-hover:scale-[1.06]"
              />
              <div className="bg-black/25 inset-0 absolute" />
              <div className="space-y-3 text-white bottom-6 left-6 absolute drop-shadow-lg">
                <h3 className="font-semibold text-xl leading-snug">
                  {highlights[4].title}
                </h3>
                <a href={highlights[4].link} className="flex text-sm transition text-[#74CEE2] gap-1 items-center hover:opacity-70">
                  อ่านต่อ <span>↗</span>
                </a>
              </div>
            </div>

          </div>
        )}
      </div>

      {/* ================= MOBILE ================= */}
      {highlights.length > 0 && (
        <div className="w-full md:hidden">
          <div ref={ref} className="flex w-full overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar">
            {highlights.map((h, i) => (
            <div
              key={h.id}
              className="bg-white rounded-2xl flex-shrink-0 h-[330px] w-full shadow-[0_6px_18px_rgba(0,0,0,0.10)] snap-center overflow-hidden"
            >
              {/* MOBILE TYPE MATCHING */}
              {i === 0 && (
                <div className="h-full relative">
                  <Image src={h.img} fill alt="" className="object-cover" />
                  <div className="bg-black/40 inset-0 absolute" />
                  <div className="space-y-2 text-white bottom-6 left-6 w-[80%] absolute drop-shadow-lg">
                    <h3 className="font-semibold text-[18px] leading-[24px] whitespace-pre-line">
                      เพราะทุกครั้งที่คุณสูบ{"\n"}คือการทำร้ายตัวเองอย่างช้า ๆ
                    </h3>
                    <p className="opacity-90 text-[13px]">ทุกคำสูบ คือก้าวถอยจากสุขภาพดี</p>
                    <a className="flex text-sm text-[#74CEE2] gap-1 items-center" href="#">
                      อ่านต่อ ↗
                    </a>
                  </div>
                </div>
              )}

              {i === 1 && (
                <div className="bg-white flex h-full px-6 items-center justify-between">
                  <div>
                    <p className="text-sm mb-1 text-gray-600">The Knowledge</p>
                    <h3 className="font-bold leading-snug text-4xl">vol.36</h3>
                  </div>
                  <Image src="/hi2.png" width={140} height={200} alt="" className="rounded-xl shadow" />
                </div>
              )}

              {i === 2 && (
                <div className="bg-white h-full py-6 px-6 relative overflow-hidden">
                  <Image src="/hi3.png" width={120} height={120} alt="" className="opacity-20 right-4 bottom-4 absolute" />
                  <p className="font-bold text-lg mb-2">OKMD</p>
                  <h3 className="font-medium mb-2 text-[15px] text-[#1B1D20] leading-[22px]">
                    สำรวจธุรกิจและองค์กรทั่วโลก เสริมพลังด้าน<br />วัฒนธรรมด้วย AI
                  </h3>
                  <p className="text-sm text-[#7F8288] leading-5 w-[90%] line-clamp-2">
                    sk Mona ใช้ AI ส่งเสริมการเข้าถึงวัฒนธรรม ศิลปะ และพิพิธภัณฑ์
                  </p>
                  <a className="flex mt-4 text-sm text-[#16A7CB] gap-1 items-center" href="#">
                    อ่านต่อ ↗
                  </a>
                </div>
              )}

              {i === 3 && (
                <div className="h-full rounded-2xl relative overflow-hidden">
                  <Image src="/hi4.png" fill alt="" className="object-cover" />
                </div>
              )}

              {i === 4 && (
                <div className="h-full rounded-2xl relative overflow-hidden">
                  <Image src="/hi5.png" fill alt="" className="object-cover" />
                  <div className="bg-black/30 inset-0 absolute" />
                  <div className="space-y-2 text-white bottom-6 left-6 w-[80%] absolute drop-shadow-lg">
                    <h3 className="font-semibold text-lg leading-snug">
                      เรียนรู้แบบเถื่อนๆ ไปกับ สิงห์ วรรณสิงห์
                    </h3>
                    <a className="flex text-sm text-[#74CEE2] gap-1 items-center" href="#">
                      อ่านต่อ ↗
                    </a>
                  </div>
                </div>
              )}
            </div>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex mt-6 justify-center">
            {highlights.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (!ref.current) return;
                setIndex(i);
                ref.current.scrollTo({ left: i * ref.current.clientWidth, behavior: "smooth" });
              }}
              className={`mx-1 rounded-full transition-all ${
                index === i ? "w-6 h-2 bg-[#16A7CB]" : "w-2 h-2 bg-[#C8E8EF]"
              }`}
            />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
