"use client";

import Link from "next/link";
import { useState } from "react";

const title = {
  name: "รายงานผลการดำเนินงาน",
  subtitle: "สรุปผลการดำเนินงาน | ประจำปีงบประมาณ 2562",
};

type TabType = "evaluation" | "budget";

const evaluationData = [
  {
    id: 1,
    title: "รายงานการประเมินผลสัมฤทธิ์ของการดำเนินงาน ปี 2561",
    size: "75.53 KB",
    href: "#",
  },
  {
    id: 2,
    title: "รายงานการประเมินผลสัมฤทธิ์ของการดำเนินงาน ปี 2560",
    size: "75.53 KB",
    href: "#",
  },
];

const budgetData = [
  {
    id: 1,
    title: "รายงานการประเมินผลสัมฤทธิ์ของการดำเนินงาน ปี 2561",
    size: "75.53 KB",
    href: "#",
  },
  {
    id: 2,
    title: "รายงานการประเมินผลสัมฤทธิ์ของการดำเนินงาน ปี 2560",
    size: "75.53 KB",
    href: "#",
  },
  {
    id: 3,
    title: "รายงานการประเมินผลสัมฤทธิ์ของการดำเนินงาน ปี 2561",
    size: "75.53 KB",
    href: "#",
  },
  {
    id: 4,
    title: "รายงานการประเมินผลสัมฤทธิ์ของการดำเนินงาน ปี 2560",
    size: "75.53 KB",
    href: "#",
  },
];

export default function OutcomeReport() {
  const [activeTab, setActiveTab] = useState<TabType>("evaluation");

  const currentData = activeTab === "evaluation" ? evaluationData : budgetData;
  const tabTitle =
    activeTab === "evaluation"
      ? "รายงานการประเมินผลการปฏิบัติงาน"
      : "รายงานการกำกับติดตาม การใช้จ่ายงบประมาณ";

  return (
    <div className="w-full text-[#40444D]">
      <h1 className="text-2xl lg:text-3xl font-bold mb-2">{title.name}</h1>
      <p className="text-sm text-gray-600 mb-4">{title.subtitle}</p>

      {/* Links */}
      <div className="mb-6 space-y-1">
        <a
          href="#"
          className="block text-sm text-[#40444D] hover:text-[#16A7CB] transition-colors"
        >
          ลิ้งค์วิดีโอ
        </a>
        <a
          href="#"
          className="block text-sm text-[#40444D] hover:text-[#16A7CB] transition-colors"
        >
          ลิ้งค์เว็บ
        </a>
      </div>

      {/* Tab Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab("evaluation")}
          className={`px-4 py-2 text-sm rounded transition-colors ${
            activeTab === "evaluation"
              ? "bg-[#16A7CB] text-white"
              : "bg-gray-100 text-[#40444D] hover:bg-gray-200"
          }`}
        >
          การประเมินผลการปฏิบัติงาน
        </button>
        <button
          onClick={() => setActiveTab("budget")}
          className={`px-4 py-2 text-sm rounded transition-colors ${
            activeTab === "budget"
              ? "bg-[#16A7CB] text-white"
              : "bg-gray-100 text-[#40444D] hover:bg-gray-200"
          }`}
        >
          การกำกับติดตาม การใช้จ่ายงบประมาณ
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
