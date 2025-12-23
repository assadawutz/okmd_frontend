import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface EventCardProps {
  event: {
    id: number;
    title: string;
    date: string;
    location: string;
    image: string;
    alt?: string;
  };
  path: string;
}

export default function EventCard({ event, path }: EventCardProps) {
  return (
    <Link href={path} className="flex flex-col gap-4 group cursor-pointer">
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
        <Image
          src={event.image}
          alt={event.alt || event.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <h3 className="text-base font-bold text-slate-900 group-hover:text-[#74CEE2] transition">
        {event.title}
      </h3>

      <p className="text-gray-500 text-sm">{event.date}</p>
      <p className="text-gray-500 text-sm">{event.location}</p>

      <div className="mt-2 flex items-center text-black text-sm font-normal hover:underline gap-1">
        <ArrowUpRight className="w-7 h-7 text-[#74CEE2]" />
        อ่านเพิ่มเติม
      </div>
    </Link>
  );
}
