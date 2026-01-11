"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import { ChevronLeft } from "lucide-react";

interface AboutUsData {
  title?: string;
  content?: string;
  [key: string]: unknown;
}

interface MenuItem {
  id: number;
  title: string;
  slug: string;
}

interface AboutUsProps {
  page: string;
}

const ALLOWED_IDS = [1, 2, 3, 5];

const AboutOkmd = ({ page }: AboutUsProps) => {
  const [data, setData] = useState<AboutUsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/about-us-page`
        );
        const result = await res.json();
        setMenu(result.data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };

    fetchMenu();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/about-us-page/${page}`
        );

        if (!res.ok) throw new Error("Not found");

        const result = await res.json();
        setData(result.data);
      } catch {
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  if (loading)
    return (
      <div className="w-full h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#16A7CB]"></div>
      </div>
    );

  if (!data) {
    return (
      <div className="w-full space-y-8">
        <div className="w-full h-[250px] md:h-[300px] rounded-3xl overflow-hidden relative shadow-sm bg-gray-100 flex items-center justify-center">
          <p className="text-gray-400">ไม่พบข้อมูล</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full space-y-8">
      {/* HEADER BLOCK */}
      <div className="w-full h-[250px] md:h-[300px] rounded-3xl overflow-hidden relative shadow-sm">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/bannerabout.png')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            เกี่ยวกับ <span className="text-[#74CEE2]">OKMD</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            ข้อมูลองค์กรและโครงสร้างการบริหาร
          </p>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div className="flex items-center text-sm text-gray-500 px-2 gap-2">
        <Link href="/" className="hover:text-[#16A7CB] transition-colors">
          หน้าหลัก
        </Link>
        <span>›</span>
        <Link
          href="/about-okmd"
          className="hover:text-[#16A7CB] transition-colors"
        >
          เกี่ยวกับ OKMD
        </Link>
        <span>›</span>
        <span className="text-[#16A7CB] font-medium truncate max-w-[200px] md:max-w-xs">
          {data.title}
        </span>
      </div>

      {/* NAVIGATION (Horizontal Scrollable) */}
      <div className="w-full overflow-x-auto pb-4 -mb-4">
        <div className="flex space-x-2 md:space-x-4 min-w-max px-2">
          {menu
            .filter((item) => ALLOWED_IDS.includes(item.id))
            .map((item) => {
              const href = `/about-okmd/${item.slug}`;
              const isActive =
                pathname === href || pathname?.includes(item.slug);
              return (
                <Link key={item.id} href={href}>
                  <div
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer whitespace-nowrap border ${
                      isActive
                        ? "bg-[#16A7CB] text-white border-[#16A7CB]"
                        : "bg-white text-gray-600 border-gray-200 hover:border-[#16A7CB] hover:text-[#16A7CB]"
                    }`}
                  >
                    {item.title}
                  </div>
                </Link>
              );
            })}
        </div>
      </div>

      {/* CONTENT BLOCK */}
      <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
        <h1 className="text-2xl md:text-3xl font-bold text-[#1B1D20] mb-8 border-b border-gray-100 pb-4">
          {data.title}
        </h1>

        <div
          className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: data.content || "" }}
        />

        <div className="mt-10 pt-6 border-t border-gray-100">
          <Link href="/">
            <Button
              variant="outline"
              className="rounded-xl flex items-center gap-2"
            >
              <ChevronLeft size={18} /> กลับหน้าหลัก
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutOkmd;
