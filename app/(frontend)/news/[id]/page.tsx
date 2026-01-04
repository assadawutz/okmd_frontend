"use client";

import { NEWS_DATA } from "../../../../data/news";
import Image from "next/image";
import Link from "next/link";
import {
  Copy,
  Facebook,
  Linkedin,
  Mail,
  Twitter,
  ChevronLeft,
} from "lucide-react";
import { ContainerPage } from "@/components/shared/ContainerPage";
import Button from "@/components/ui/Button";

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
      <ContainerPage>
        <div className="w-full min-h-[50vh] flex flex-col items-center justify-center text-center space-y-4 bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
          <div className="text-3xl md:text-4xl font-bold text-[#1B1D20]">
            ไม่พบข่าวนี้
          </div>
          <p className="text-gray-500">
            ข่าวที่คุณต้องการอาจถูกลบหรือย้ายไปแล้ว
          </p>
          <Link href="/news">
            <Button className="rounded-xl">กลับไปหน้าข่าวทั้งหมด</Button>
          </Link>
        </div>
      </ContainerPage>
    );
  }

  return (
    <ContainerPage>
      <div className="w-full space-y-8">
        {/* HEADER BLOCK (Replacing traditional text header with new visual block) */}
        {!n.img ? (
          <div className="w-full h-[250px] md:h-[300px] rounded-3xl overflow-hidden relative shadow-sm">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/bannerabout.png')" }}
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white">
              <h1 className="text-2xl md:text-4xl font-bold mb-2">{n.title}</h1>
              <div className="flex items-center gap-4 text-sm opacity-80">
                <span>{n.date}</span>
              </div>
            </div>
          </div>
        ) : null}

        {/* BREADCRUMB */}
        <div className="flex items-center text-sm text-gray-500 px-2 gap-2">
          <Link href="/" className="hover:text-[#16A7CB] transition-colors">
            หน้าหลัก
          </Link>
          <span>›</span>
          <Link href="/news" className="hover:text-[#16A7CB] transition-colors">
            ข่าวสาร
          </Link>
          <span>›</span>
          <span className="text-[#16A7CB] font-medium truncate max-w-[200px] md:max-w-xs">
            {n.title}
          </span>
        </div>

        {/* CONTENT BLOCK */}
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
          {/* ARTICLE HEADER */}
          <header className="space-y-6 mb-8 border-b border-gray-100 pb-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 bg-[#E8F6FB] text-[#16A7CB] rounded-full text-xs font-bold">
                {n.category === "announce" ? "ข่าวประชาสัมพันธ์" : "ข่าวองค์กร"}
              </span>
              <span className="text-gray-400 text-sm">{n.date}</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight text-[#1B1D20]">
              {n.title}
            </h1>
          </header>

          {/* HERO IMAGE for article */}
          {n.img && (
            <div className="w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-2xl relative shadow-sm mb-10">
              <Image
                src={n.img}
                alt={n.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            {/* SHARE & SIDEBAR */}
            <aside className="md:col-span-3 lg:col-span-2 order-2 md:order-1">
              <div className="sticky top-24 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Share
                  </h3>
                  <div className="flex md:flex-col gap-3">
                    <button className="w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all">
                      <Facebook size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-black/5 text-black flex items-center justify-center hover:bg-black hover:text-white transition-all">
                      <Twitter size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-gray-200 transition-all">
                      <Copy size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </aside>

            {/* ARTICLE CONTENT */}
            <article className="md:col-span-9 lg:col-span-10 order-1 md:order-2">
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <p className="font-semibold text-xl leading-relaxed text-[#1B1D20] mb-8">
                  {n.desc}
                </p>
                {bodyParagraphs.length > 0 ? (
                  bodyParagraphs.map((para: string, idx: number) => (
                    <p key={idx} className="mb-6 whitespace-pre-line">
                      {para}
                    </p>
                  ))
                ) : (
                  <p className="whitespace-pre-line mb-6">{n.body}</p>
                )}
              </div>
            </article>
          </div>

          {/* RELATED NEWS */}
          <div className="mt-16 pt-10 border-t border-gray-100">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-[#1B1D20]">
                ข่าวที่เกี่ยวข้อง
              </h2>
              <Link
                href="/news"
                className="text-[#16A7CB] font-bold hover:underline text-sm"
              >
                ดูทั้งหมด
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {n.related?.map((r: RelatedNewsItem, i: number) => (
                <Link
                  key={i}
                  href={`/news/${r.id}`}
                  className="group flex flex-col"
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
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <Link href="/news">
              <Button
                variant="outline"
                className="rounded-xl flex items-center gap-2"
              >
                <ChevronLeft size={18} /> ย้อนกลับ
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </ContainerPage>
  );
}
