"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { NEWS_DATA } from "../../../../data/news";
import Image from "next/image";
import Link from "next/link";
import { Copy, Facebook, Linkedin, Mail, Twitter } from "lucide-react";

interface RelatedNewsItem {
  id: string;
  img: string;
  title: string;
}

export default function NewsDetail({ params }: { params: { id: string } }) {
  const n = NEWS_DATA[params.id];
  const bodyParagraphs = (n?.body || "").split("\n\n").filter(Boolean);

  if (!n) {
    return (
      <main className="w-full min-h-[60vh] flex items-center justify-center bg-white">
        <div className="text-center space-y-4">
          <div className="text-3xl md:text-4xl font-bold text-[#1B1D20]">
            ไม่พบข่าวนี้
          </div>
          <p className="text-gray-500">
            ข่าวที่คุณต้องการอาจถูกลบหรือย้ายไปแล้ว
          </p>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#74CEE2] text-white rounded-xl hover:bg-[#5FC4D8] transition font-medium"
          >
            กลับไปหน้าข่าวทั้งหมด ↗
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full bg-white pb-20 md:pb-32">
      {/* ======================== BREADCRUMB ======================== */}
      <div className="w-full bg-white border-b border-zinc-200">
        <div className="container mx-auto px-4 h-16 md:h-20 flex items-center">
          <Breadcrumb
            items={[
              { label: "หน้าหลัก", href: "/" },
              { label: "ข่าวสาร", href: "/news" },
              { label: n.title },
            ]}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 space-y-12 md:space-y-16">
        {/* ======================== HEADER BLOCK ======================== */}
        <header className="space-y-6 md:space-y-8 max-w-5xl">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-[44px] font-bold leading-tight text-[#1B1D20]">
              {n.title}
            </h1>
            <div className="flex items-center gap-4 text-sm md:text-base text-gray-500">
              <span className="font-medium text-[#16A7CB]">
                {n.category === "announce" ? "ข่าวประชาสัมพันธ์" : "ข่าวองค์กร"}
              </span>
              <span>•</span>
              <span>{n.date}</span>
            </div>
          </div>
        </header>

        {/* ======================== HERO IMAGE ======================== */}
        <div className="w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-2xl relative shadow-sm">
          <Image
            src={n.img}
            alt={n.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* ======================== CONTENT GRID ======================== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
          {/* LEFT SIDEBAR (Share & Meta) */}
          <aside className="col-span-1 md:col-span-3 lg:col-span-2 space-y-8 order-2 md:order-1">
            <div className="sticky top-24 space-y-8">
              {/* Logo */}
              <div className="hidden md:block">
                <Image
                  src="/okmd_logo_color.png"
                  width={100}
                  height={40}
                  alt="OKMD"
                  className="object-contain"
                />
              </div>

              {/* Share Tools */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-[#1B1D20] uppercase tracking-wider">
                  Share
                </h3>
                <div className="flex md:flex-col gap-4">
                  <button
                    aria-label="Share on Facebook"
                    className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition shadow-sm"
                  >
                    <Facebook size={18} fill="currentColor" />
                  </button>
                  <button
                    aria-label="Share on Twitter"
                    className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:opacity-90 transition shadow-sm"
                  >
                    <Twitter size={18} fill="currentColor" />
                  </button>
                  <button
                    aria-label="Share via Email"
                    className="w-10 h-10 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-gray-200 transition shadow-sm"
                  >
                    <Mail size={18} />
                  </button>
                  <button
                    aria-label="Copy Link"
                    className="w-10 h-10 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-gray-200 transition shadow-sm"
                  >
                    <Copy size={18} />
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT CONTENT: ARTICLE */}
          <article className="col-span-1 md:col-span-9 lg:col-span-8 order-1 md:order-2">
            <div className="prose prose-lg max-w-none text-[#1B1D20] leading-loose">
              <p className="font-semibold text-xl md:text-2xl leading-relaxed mb-8 text-gray-900 border-l-4 border-[#74CEE2] pl-6">
                {n.desc}
              </p>

              <div className="space-y-6 text-base md:text-lg text-gray-700 font-normal">
                {bodyParagraphs.length > 0 ? (
                  bodyParagraphs.map((para: string, idx: number) => (
                    <p key={idx} className="whitespace-pre-line">
                      {para}
                    </p>
                  ))
                ) : (
                  <p className="whitespace-pre-line">{n.body}</p>
                )}
              </div>
            </div>
          </article>
        </div>

        {/* ======================== RELATED SECTION ======================== */}
        <section className="pt-16 md:pt-24 border-t border-gray-100 mt-12 md:mt-16">
          <div className="flex items-center justify-between mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D20]">
              ข่าวที่เกี่ยวข้อง
            </h2>
            <Link
              href="/news"
              className="text-[#16A7CB] font-semibold hover:underline"
            >
              ดูทั้งหมด
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {n.related?.map((r: RelatedNewsItem, i: number) => (
              <Link
                key={i}
                href={`/news/${r.id}`}
                className="group flex flex-col cursor-pointer"
              >
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4 relative shadow-sm border border-gray-100">
                  <Image
                    src={r.img}
                    alt={r.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#1B1D20] leading-snug line-clamp-2 mb-2 group-hover:text-[#16A7CB] transition-colors">
                  {r.title}
                </h3>
                <span className="inline-flex items-center text-[#16A7CB] text-sm font-semibold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  อ่านต่อ ↗
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
