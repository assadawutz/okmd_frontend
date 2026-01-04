"use client";

import Link from "next/link";

const title = {
  name: "งบการเงิน",
  header: "สำนักงานบริหารและพัฒนาองค์ความรู้ (องค์การมหาชน) งบแสดงฐานะการเงิน",
};

const data = [
  {
    id: 1,
    title: "ดาวน์โหลดรายงานงบการเงินปี 2567",
    size: "75.53 KB",
    href: "#",
  },
  {
    id: 2,
    title: "ดาวน์โหลดรายงานงบการเงินปี 2566",
    size: "75.53 KB",
    href: "#",
  },
  {
    id: 3,
    title: "ดาวน์โหลดรายงานงบการเงินปี 2565",
    size: "75.53 KB",
    href: "#",
  },
  {
    id: 4,
    title: "ดาวน์โหลดรายงานงบการเงินปี 2564",
    size: "75.53 KB",
    href: "#",
  },
  {
    id: 5,
    title: "ดาวน์โหลดรายงานงบการเงินปี 2563",
    size: "75.53 KB",
    href: "#",
  },
  {
    id: 6,
    title: "ดาวน์โหลดรายงานงบการเงินปี 2562",
    size: "75.53 KB",
    href: "#",
  },
  {
    id: 7,
    title: "ดาวน์โหลดรายงานงบการเงินปี 2560",
    size: "75.53 KB",
    href: "#",
  },
  {
    id: 8,
    title: "ดาวน์โหลดรายงานงบการเงินปี 2559",
    size: "75.53 KB",
    href: "#",
  },
  {
    id: 9,
    title: "ดาวน์โหลดรายงานงบการเงินปี 2558",
    size: "75.53 KB",
    href: "#",
  },
  {
    id: 10,
    title: "ดาวน์โหลดรายงานงบการเงินปี 2557",
    size: "75.53 KB",
    href: "#",
  },
];

export default function FinancialStatements() {
  return (
    <div className="w-full text-[#40444D]">
      <h1 className="text-2xl lg:text-3xl font-bold mb-8">{title.name}</h1>

      <div className="w-full rounded-lg overflow-hidden">
        <div className="bg-[#6BCFE3] text-white py-4 px-6 text-base lg:text-lg font-medium">
          {title.header}
        </div>

        <div className="flex flex-col">
          {data.map((item, idx) => (
            <Link
              key={item.id}
              href={item.href}
              className={`flex items-start justify-between py-5 px-6 border-b border-gray-100 last:border-0 hover:bg-[#F8FCFD] transition-colors ${
                idx % 2 !== 0 ? "bg-[#F2FBFC]" : "bg-white"
              }`}
            >
              <span className="text-sm lg:text-base pr-4 flex-1">
                {item.title}
              </span>
              <span className="text-[#16A7CB] text-sm whitespace-nowrap">
                (ดาวน์โหลดเอกสาร pdf ขนาด {item.size})
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
