"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  getHighlights,
  type HighlightItem,
} from "@/lib/services/highlight.service";

interface UIBlockProps {
  data: HighlightItem;
  variant?: "large" | "knowledge" | "okmd" | "image-only";
}

const HighlightCard = ({ data, variant = "image-only" }: UIBlockProps) => {
  return (
    <div className="group relative w-full overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ease-in-out cursor-pointer active:scale-[0.98]">
      {/* Image Background for Large/Image-Only */}
      {(variant === "large" || variant === "image-only") && (
        <div className="relative h-[320px] w-full">
          <Image
            src={data.img}
            fill
            alt={data.title}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-xl font-bold leading-tight mb-2 drop-shadow-md">
              {data.title}
            </h3>
            {data.desc && (
              <p className="text-sm opacity-90 line-clamp-2 mb-3">
                {data.desc}
              </p>
            )}
            <span className="inline-flex items-center text-[#74CEE2] text-sm font-medium gap-1 hover:underline">
              อ่านต่อ <span>↗</span>
            </span>
          </div>
        </div>
      )}

      {/* Variant: Knowledge */}
      {variant === "knowledge" && (
        <div className="flex h-[320px] w-full flex-col justify-between bg-white p-6 md:flex-row md:items-center">
          <div className="flex-1 space-y-2">
            <p className="text-sm text-gray-500 font-medium tracking-wide">
              The Knowledge
            </p>
            <h3 className="text-2xl font-bold text-[#1B1D20] leading-tight group-hover:text-[#16A7CB] transition-colors">
              {data.title.replace("The Knowledge\n", "")}
            </h3>
          </div>
          <div className="relative h-[160px] w-full md:w-[140px] md:h-[200px] mt-4 md:mt-0 shadow-md transform group-hover:rotate-1 transition-transform">
            <Image
              src={data.img}
              fill
              alt={data.title}
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Variant: OKMD */}
      {variant === "okmd" && (
        <div className="h-[320px] w-full bg-white p-6 flex flex-col justify-between relative overflow-hidden">
          <Image
            src={data.img}
            width={100}
            height={100}
            alt=""
            className="absolute bottom-[-10px] right-[-10px] opacity-10 rotate-12"
          />
          <div>
            <p className="font-bold text-lg text-[#16A7CB] mb-2">OKMD</p>
            <h3 className="text-xl font-bold text-[#1B1D20] leading-snug mb-2 group-hover:text-[#16A7CB] transition-colors">
              {data.title}
            </h3>
            {data.desc && (
              <p className="text-gray-500 text-sm line-clamp-3">{data.desc}</p>
            )}
          </div>
          <span className="inline-flex items-center text-[#16A7CB] text-sm font-medium gap-1 mt-4">
            อ่านต่อ <span>↗</span>
          </span>
        </div>
      )}
    </div>
  );
};

export default function HighlightSection() {
  const [highlights, setHighlights] = useState<HighlightItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHighlights = async () => {
      try {
        setIsLoading(true);
        const data = await getHighlights();
        if (!data?.length) setError("ไม่พบข้อมูล Highlight");
        else setHighlights(data);
      } catch (err) {
        setError("เกิดข้อผิดพลาดในการโหลดข้อมูล");
      } finally {
        setIsLoading(false);
      }
    };
    fetchHighlights();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full space-y-4 animate-pulse">
        <div className="h-8 w-1/3 bg-gray-200 rounded-md mx-auto" />
        <div className="h-[320px] w-full bg-gray-100 rounded-2xl" />
        <div className="h-[320px] w-full bg-gray-100 rounded-2xl" />
      </div>
    );
  }

  if (error)
    return <div className="text-center py-10 text-red-500">{error}</div>;

  if (highlights.length === 0) {
    return null;
  }

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="text-center space-y-2 mb-8">
        <h2 className="text-3xl font-bold text-[#1B1D20]">Highlight</h2>
        <p className="text-[#16A7CB] font-medium">
          ทุกจุดเด่น ถูกยกมาไว้ตรงนี้
        </p>
      </div>

      {/* Content Stack */}
      <div className="flex flex-col gap-6">
        {highlights.map((item, i) => {
          // Determine variant based on index or content (simulating the bento logic but stacked)
          let variant: "large" | "knowledge" | "okmd" | "image-only" = "large";
          if (i === 1) variant = "knowledge";
          else if (i === 2) variant = "okmd";

          return <HighlightCard key={i} data={item} variant={variant} />;
        })}
      </div>
    </div>
  );
}
