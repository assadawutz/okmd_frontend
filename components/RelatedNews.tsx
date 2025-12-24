"use client";

import Image from "next/image";
import { Share2 } from "lucide-react";
import { useRouter } from "next/navigation";

interface RelatedNewsItem {
  id: number | string;
  title: string;
  banner?: string;
  cover_image?: string | null;
  category?: {
    id?: number;
    slug?: string;
  };
}

interface RelatedNewsProps {
  items: RelatedNewsItem[];
}

function RelatedNewsCard({ id, title, banner, cover_image, category }: RelatedNewsItem) {
  const router = useRouter();
  const imageUrl = banner || cover_image || "/news1.png";
  const hasLink = category?.slug || category?.id;

  const handleClick = () => {
    if (category?.slug) {
      router.push(`/${category.slug}/${id}`);
    } else if (category?.id) {
      router.push(`/news/${id}`);
    }
  };

  return (
    <div
      className={`group w-full ${hasLink ? "cursor-pointer" : "cursor-default"}`}
      onClick={handleClick}
    >
      <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-3">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <h3 className="font-medium text-gray-900 line-clamp-2 group-hover:text-cyan-600 mb-2">
        {title}
      </h3>

      {hasLink && (
        <div className="flex items-center text-xs text-cyan-500 font-semibold gap-1">
          <Share2 size={12} className="rotate-180" />
          <span>อ่านต่อ</span>
        </div>
      )}
    </div>
  );
}

export default function RelatedNews({ items }: RelatedNewsProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Related</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {items.slice(0, 4).map((item) => (
          <RelatedNewsCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
