"use client";

import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";

interface NewsCategory {
  id: number;
  title: string;
  slug: string;
}

const SideBarNews = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("category");

  const [menu, setMenu] = useState<NewsCategory[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/news-category`
        );
        if (!res.ok) throw new Error("Failed to fetch news");
        const result = await res.json();
        setMenu(result.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  const isActive = (item: NewsCategory) => {
    return pathname.includes(item.slug) && categoryId === item.id.toString();
  };

  return (
    /* 🔴 ล้าง padding ของ parent */
    <aside className="w-full mb-5 px-0">
      {/* ---------- Title ---------- */}
      <h1 className="m-0 text-4xl font-semibold text-[#1B1D20] ">
        New<span className="text-[#74CEE2]">s</span>
      </h1>

      {/* ---------- Menu ---------- */}
      <ul className="mt-4 space-y-2 list-none p-0 m-0">
        {menu.map((item) => {
          const active = isActive(item);

          return (
            <li key={item.id} className="w-full ml-[-25px]">
              <Link
                href={`/${item.slug}?category=${item.id}`}
                className={`block w-full py-3 text-lg transition-colors border-b ${
                  active
                    ? "text-[#74CEE2] font-medium border-b-2 border-[#74CEE2]"
                    : "text-[#40444D] hover:text-[#74CEE2] hover:border-b"
                }`}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default SideBarNews;
