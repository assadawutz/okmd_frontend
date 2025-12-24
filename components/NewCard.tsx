import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface NewsCardProps {
  data: {
    id: number;
    title: string;
    description?: string;
    excerpt?: string;
    image?: string;
    cover_image?: string | null;
  };
  path: string;
}

export default function NewsCard({ data, path }: NewsCardProps) {
  const imageUrl = data.image || data.cover_image || "/news1.png";
  const descriptionText = data.description || data.excerpt || "";

  return (
    <Link href={path} className="flex flex-col gap-4 group cursor-pointer">
      {/* รูปภาพ */}
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
        <Image
          src={imageUrl}
          alt={data.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* ข้อความ */}
      <div className="flex flex-col gap-2">
        <h3 className="text-base font-bold leading-tight text-slate-900 group-hover:text-[#74CEE2] transition-colors">
          {data.title}
        </h3>

        <p className="text-gray-500 text-sm line-clamp-2 font-light">
          {descriptionText}
        </p>

        <div className="mt-2 flex items-center text-black text-sm font-normal hover:underline gap-1">
          <ArrowUpRight className="w-7 h-7 text-[#74CEE2]" />
          อ่านเพิ่มเติม
        </div>
      </div>
    </Link>
  );
}
