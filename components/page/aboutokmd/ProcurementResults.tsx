"use client";

import Link from "next/link";
import { useState } from "react";

const title = {
  name: "รายงานผลจัดซื้อจัดจ้าง",
};

type TabType = "plan" | "result";

const planData = [
  {
    id: 1,
    title: "รายงานวิเคราะห์ผลการจัดซื้อจัดจ้าง ประจำปี 2565",
    size: "75.53 KB",
    href: "#",
  },
  {
    id: 2,
    title: "รายงานวิเคราะห์ผลการจัดซื้อจัดจ้าง ประจำปี 2564",
    size: "75.53 KB",
    href: "#",
  },
  {
    id: 3,
    title: "รายงานวิเคราะห์ผลการจัดซื้อจัดจ้าง ประจำปี 2563",
    size: "75.53 KB",
    href: "#",
  },
  {
    id: 4,
    title: "รายงานวิเคราะห์ผลการจัดซื้อจัดจ้าง ประจำปี 2562",
    size: "75.53 KB",
    href: "#",
  },
  {
    id: 5,
    title: "รายงานวิเคราะห์ผลการจัดซื้อจัดจ้าง ประจำปี 2561",
    size: "75.53 KB",
    href: "#",
  },
  {
    id: 6,
    title: "รายงานวิเคราะห์ผลการจัดซื้อจัดจ้าง ประจำปี 2560",
    size: "75.53 KB",
    href: "#",
  },
];

const resultData = [
  {
    id: 1,
    title: "ประกาศผู้ชนะการจัดซื้อจัดจ้างหรือผู้ได้รับการคัดเลือก และสาระสำคัญของสัญญาหรือข้อตกลงเป็นหนังสือ ประจำไตรมาสที่ 4 (ก.ค. - ก.ย. 68)",
    size: "75.53 KB",
    href: "#",
  },
  {
    id: 2,
    title: "สรุปผลการดำเนินการจัดซื้อ/จัดจ้าง ประจำเดือนกันยายน 2568 ประจำปีงบประมาณ 2568",
    size: "75.53 KB",
    href: "#",
  },
  {
    id: 3,
    title: "ประกาศผู้ชนะการจัดซื้อจัดจ้างหรือผู้ได้รับการคัดเลือก และสาระสำคัญของสัญญาหรือข้อตกลงเป็นหนังสือ ประจำไตรมาสที่ 4 (ก.ค. - ก.ย. 68)",
    size: "75.53 KB",
    href: "#",
  },
  {
    id: 4,
    title: "สรุปผลการดำเนินการจัดซื้อ/จัดจ้าง ประจำเดือนกันยายน 2568 ประจำปีงบประมาณ 2568",
    size: "75.53 KB",
    href: "#",
  },
];

export default function ProcurementResults() {
  const [activeTab, setActiveTab] = useState<TabType>("plan");

  const currentData = activeTab === "plan" ? planData : resultData;
  const tabTitle =
    activeTab === "plan"
      ? "แผนปฏิบัติการจัดซื้อจัดจ้างประจำปี"
      : "รายงานผลดำเนินการจัดซื้อจัดจ้าง";

  return (
    <div className="w-full text-[#40444D]">
      <h1 className="text-2xl lg:text-3xl font-bold mb-8">{title.name}</h1>

      {/* Tab Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        <button
          onClick={() => setActiveTab("plan")}
          className={`px-4 py-2 text-sm rounded transition-colors ${
            activeTab === "plan"
              ? "bg-[#16A7CB] text-white"
              : "bg-gray-100 text-[#40444D] hover:bg-gray-200"
          }`}
        >
          แผนปฏิบัติการจัดซื้อจัดจ้างประจำปี
        </button>
        <button
          onClick={() => setActiveTab("result")}
          className={`px-4 py-2 text-sm rounded transition-colors ${
            activeTab === "result"
              ? "bg-[#16A7CB] text-white"
              : "bg-gray-100 text-[#40444D] hover:bg-gray-200"
          }`}
        >
          รายงานผลดำเนินการจัดซื้อจัดจ้าง
        </button>
      </div>

      {/* Report List */}
      <div className="w-full rounded-lg overflow-hidden">
        <div className="bg-[#6BCFE3] text-white py-4 px-6 text-base lg:text-lg font-medium">
          {tabTitle}
        </div>

        <div className="flex flex-col">
          {currentData.map((item, idx) => (
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
