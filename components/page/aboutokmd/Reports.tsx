"use client";

import Link from "next/link";

const title = {
  name: "รายงานผลการปฏิบัติงานตามคำรับรองการปฏิบัติงาน",
};

const data = [
  {
    id: 1,
    title: "มาตรการส่งเสริมคุณธรรมและความโปร่งใสของ สบร. ประจำปีงบประมาณ พ.ศ.2568",
    size: "75.53 KB",
    href: "#",
  },
  {
    id: 2,
    title: "รายงานผลการดำเนินการเพื่อส่งเสริมคุณธรรมและความโปร่งใส ประจำปีงบประมาณ พ.ศ.2567",
    size: "75.53 KB",
    href: "#",
  },
  {
    id: 3,
    title: "มาตรการส่งเสริมคุณธรรมและความโปร่งใสของ สบร. ประจำปีงบประมาณ พ.ศ.2567",
    size: "75.53 KB",
    href: "#",
  },
  {
    id: 4,
    title: "มาตรการส่งเสริมคุณธรรมและความโปร่งใสของ สบร. ประจำปีงบประมาณ พ.ศ.2567",
    size: "75.53 KB",
    href: "#",
  },
  {
    id: 5,
    title: "คู่มือการบริหารจัดการผลประโยชน์ทับซ้อน สบร. (ฉบับปรับปรุง ครั้งที่ 4) ปี 2565",
    size: "75.53 KB",
    href: "#",
  },
  {
    id: 6,
    title: "OKMD: คำรับรองการปฏิบัติงาน ประจำปีงบประมาณ พ.ศ. 2557",
    size: "75.53 KB",
    href: "#",
  },
];

export default function Reports() {
  return (
    <div className="w-full text-[#40444D]">
      <h1 className="text-2xl lg:text-3xl font-bold mb-8">{title.name}</h1>
      
      <div className="w-full rounded-lg overflow-hidden">
        <div className="bg-[#6BCFE3] text-white py-4 px-6 text-base lg:text-lg font-medium">
          เอกสาร{title.name}
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
