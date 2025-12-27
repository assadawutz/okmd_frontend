"use client";

import Image from "next/image";

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
    <div className="relative w-full h-[280px] sm:h-[340px] md:h-[400px] lg:h-[420px] overflow-hidden">
      <Image
        src="/bannerabout.png"
        alt="About OKMD Banner"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
    </div>
  );
}
