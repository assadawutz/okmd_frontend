"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Mapping for Thai page names
const PAGE_NAMES: Record<string, string> = {
  "about-okmd": "รู้จัก OKMD",
  "calendar-of-event": "ปฏิทินกิจกรรม",
  career: "ร่วมงานกับเรา",
  complaint: "ร้องเรียน",
  contract: "ติดต่อเรา",
  donation: "บริจาค",
  "job-announcement": "ประกาศรับสมัครงาน",
  knowledge: "คลังความรู้",
  login: "เข้าสู่ระบบ",
  news: "ข่าวสาร",
  "news-corporate": "ข่าวองค์กร",
  "news-release": "ข่าวประชาสัมพันธ์",
  pdpa: "นโยบายความเป็นส่วนตัว",
  procurement: "จัดซื้อจัดจ้าง",
  recruitment: "รับสมัครงาน",
};

export default function Breadcrumb() {
  const pathname = usePathname();

  // Don't show breadcrumb on homepage
  if (pathname === "/") return null;

  // Generate breadcrumb from pathname
  const paths = pathname.split("/").filter(Boolean);

  return (
    <nav
      className="bg-gray-50 py-3 border-b border-gray-200"
      aria-label="Breadcrumb"
    >
      <div className="container mx-auto px-4 md:px-8">
        <ol className="flex items-center gap-2 text-sm">
          <li>
            <Link
              href="/"
              className="text-gray-600 hover:text-[#00ADEF] transition-colors"
            >
              หน้าหลัก
            </Link>
          </li>
          {paths.map((path, index) => {
            const isLast = index === paths.length - 1;
            const href = "/" + paths.slice(0, index + 1).join("/");
            const displayName = PAGE_NAMES[path] || path;

            return (
              <li key={index} className="flex items-center gap-2">
                <span className="text-gray-400" aria-hidden="true">
                  &gt;
                </span>
                {isLast ? (
                  <span
                    className="text-gray-800 font-medium"
                    aria-current="page"
                  >
                    {displayName}
                  </span>
                ) : (
                  <Link
                    href={href}
                    className="text-gray-600 hover:text-[#00ADEF] transition-colors"
                  >
                    {displayName}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
