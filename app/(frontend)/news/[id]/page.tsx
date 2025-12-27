"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { NEWS_DATA } from "../../../../data/news";
import Image from "next/image";
import Link from "next/link";

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
      <main className="w-full h-screen flex items-center justify-center bg-white">
        <div className="text-center space-y-3">
          <div className="text-3xl font-bold text-[#1B1D20]">ไม่พบข่าวนี้</div>
          <Link href="/news" className="inline-flex items-center gap-2 text-[#16A7CB] font-semibold">
            กลับไปหน้าข่าวทั้งหมด ↗
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full bg-white pb-24">
      {/* ======================== BREADCRUMB ======================== */}
      <div className="w-full bg-white">
        <div className="container mx-auto px-0 h-20 flex items-center">

          <Breadcrumb
            items={[
              { label: "หน้าหลัก", href: "/" },
              { label: "ข่าวสาร", href: "/news" },
              { label: n.title },
            ]}
          />

        </div>
      </div>
      <div className="container mx-auto px-4 pt-10 space-y-10">

        {/* ======================== TITLE BLOCK ======================== */}
        <div className="space-y-3">
          <h1 className="text-[28px] md:text-[34px] font-bold leading-tight text-[#1B1D20] max-w-[760px]">
            {n.title}
          </h1>

          <div className="text-right text-xs text-gray-500">
            {n.date}
          </div>
        </div>

        {/* ======================== HERO IMAGE ======================== */}
        <div className="w-full overflow-hidden rounded-xl">
          <Image
            src={n.img}
            alt={n.title}
            width={1600}
            height={900}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* ======================== BODY + SHARE ======================== */}
        <div className="grid grid-cols-12 gap-10 pt-8">

          {/* LEFT SIDE (logo + share) */}
          <aside className="col-span-12 md:col-span-2 space-y-6">

            {/* Logo */}
            <Image
              src="/logo1.png"
              width={95}
              height={45}
              alt="OKMD"
              className="object-contain"
            />

            {/* Share */}
            <div className="space-y-2">
              <div className="text-sm font-semibold text-[#1B1D20]">Share</div>

              <div className="flex gap-4">
                {[
                  { src: "/ic-1.png", alt: "facebook" },
                  { src: "/ic-2.png", alt: "twitter" },
                  { src: "/ic-3.png", alt: "mail" }
                ].map((icon, i) => (
                  <button key={i} className="transition hover:opacity-80">
                    <Image
                      src={icon.src}
                      width={22}
                      height={22}
                      alt={icon.alt}
                      unoptimized
                      className="object-contain bg-gray-500"
                    />
                  </button>
                ))}
              </div>
            </div>


          </aside>

          {/* RIGHT SIDE: ARTICLE */}
          <article className="col-span-12 md:col-span-10">
            <div className="space-y-6 text-[17px] leading-[30px] text-[#1B1D20]">
              {bodyParagraphs.length > 0
                ? bodyParagraphs.map((para: string, idx: number) => (
                  <p key={idx} className="whitespace-pre-line">
                    {para}
                  </p>
                ))
                : <p className="whitespace-pre-line">{n.body}</p>
              }
            </div>
          </article>

        </div>

        {/* ======================== RELATED ======================== */}
        <section className="pt-10">
          <div className="w-full border-t border-zinc-300 pt-6 mb-6"></div>

          <div className="text-2xl md:text-3xl font-bold mb-6">Related</div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">

            {n.related?.map((r: RelatedNewsItem, i: number) => (
              <Link key={i} href={`/news/${r.id}`} className="group flex flex-col">

                <div className="w-full h-[170px] rounded-xl overflow-hidden">
                  <Image
                    src={r.img}
                    alt={r.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition"
                  />
                </div>

                <div className="mt-3 text-[#1B1D20] font-semibold leading-snug">
                  {r.title}
                </div>

                <span className="text-[#16A7CB] text-sm mt-1group-hover:opacity-80 transition">
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
