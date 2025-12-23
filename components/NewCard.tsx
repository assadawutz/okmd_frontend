import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface NewsCardProps {
  data: {
    id: number;
    title: string;
    description: string;
    image: string;
  };
  path: string; // path ของหน้าที่ต้องการไป
}

export default function NewsCard({ data, path }: NewsCardProps) {
  return (
    <Link href={path} className="flex flex-col gap-4 group cursor-pointer">
      {/* รูปภาพ */}
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
        <img
          src={data.image}
          alt={data.title}
          
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* ข้อความ */}
      <div className="flex flex-col gap-2">
        <h3 className="text-base font-bold leading-tight text-slate-900 group-hover:text-[#74CEE2] transition-colors">
          {data.title}
        </h3>

        <p className="text-gray-500 text-sm line-clamp-2 font-light">
          {data.description}
        </p>

        <div className="mt-2 flex items-center text-black text-sm font-normal hover:underline gap-1">
          <ArrowUpRight className="w-7 h-7 text-[#74CEE2]" />
          อ่านเพิ่มเติม
        </div>
      </div>
    </Link>
  );
}
