"use client";

import Link from "next/link";

type Crumb = { label: string; href?: string };

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <div className="w-full">
      <div
        className="
          flex flex-wrap items-center
          gap-1 sm:gap-2 lg:gap-3
          
          text-sm 
          sm:text-base
          md:text-lg
          lg:text-xl
        "
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <div
              key={item.label}
              className="flex items-center gap-1 sm:gap-2 lg:gap-3"
            >
              {/* --- NON-LAST (Clickable) --- */}
              {!isLast && item.href && (
                <Link
                  href={item.href}
                  className="
                    text-gray-600
                    hover:text-[#74CEE2]
                    transition
                    cursor-pointer
                    no-underline
                  "
                >
                  {item.label}
                </Link>
              )}

              {/* --- LAST (Active) --- */}
              {isLast && (
                <div className="font-bold text-[#74CEE2]">
                  {item.label}
                </div>
              )}

              {/* --- SEPARATOR --- */}
              {!isLast && (
                <div
                  className="
                    text-gray-400 select-none
                    text-sm sm:text-base md:text-lg lg:text-xl
                  "
                >
                  ›
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
