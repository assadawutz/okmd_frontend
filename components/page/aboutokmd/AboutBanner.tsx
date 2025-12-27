"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AboutBanner() {
  const pathname = usePathname();
  
  // Get the current page name from the URL
  const getPageName = () => {
    const segments = pathname.split("/").filter(Boolean);
    const lastSegment = segments[segments.length - 1];
    
    // Map slugs to Thai names
    const pageNames: Record<string, string> = {
      "about": "รู้จัก OKMD",
      "policy": "นโยบายการดำเนินงาน",
      "action-plan": "แผนปฏิบัติการ",
      "strategic-plan": "แผนยุทธศาสตร์",
      "structure": "โครงสร้าง OKMD",
      "board": "คณะกรรมการและผู้บริหาร",
      "commitment": "คำรับรองการปฏิบัติงาน",
      "governance": "การกำกับดูแลกิจการ",
      "reports": "รายงานผลการปฏิบัติงานตามคำรับรองการปฏิบัติงาน",
      "outcome-report": "รายงานผลการดำเนินงาน",
      "annual-report": "รายงานประจำปี",
      "financial-statements": "งบการเงิน",
      "procurement-results": "รายงานผลจัดซื้อจัดจ้าง",
      "rules": "กฎ ระเบียบ ข้อบังคับ",
      "info-center": "ศูนย์ข้อมูลข่าวสารอิเล็กทรอนิกส์",
      "manuals": "คู่มือ/แนวทางการปฏิบัติงาน",
      "disclosure": "การเปิดเผยข้อมูลสาธารณะ",
      "cio": "ผู้บริหารเทคโนโลยีสารสนเทศ",
    };
    
    return pageNames[lastSegment] || "รู้จัก OKMD";
  };

  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="text-sm text-gray-500">
          <Link href="/" className="hover:text-[#16A7CB] transition-colors">
            หน้าหลัก
          </Link>
          <span className="mx-2">&gt;</span>
          <Link href="/about-okmd/about" className="hover:text-[#16A7CB] transition-colors">
            รู้จัก OKMD
          </Link>
          <span className="mx-2">&gt;</span>
          <span className="text-[#16A7CB]">{getPageName()}</span>
        </nav>
      </div>

      {/* Hero Banner */}
      <div className="relative w-full h-[200px] md:h-[280px] lg:h-[320px] overflow-hidden">
        <Image
          src="/images/banner/about-banner.jpg"
          alt="About OKMD Banner"
          fill
          className="object-cover"
          priority
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/bannerabout.png";
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#16A7CB]/30 to-transparent" />
      </div>
    </div>
  );
}
