"use client";

import { useState } from "react";
import Link from "next/link";
import SubHeroBanner from "@/components/ui/SubHeroBanner";
import Input from "@/components/ui/Input";
import Dropdown from "@/components/ui/Dropdown";
import Button from "@/components/ui/Button";
import { CiSearch } from "react-icons/ci";

type ProcurementCardProps = {
  id: string;
  title: string;
  number: string;
  date: string;
  method: string;
  status: string;
};

function ProcurementCard({
  id,
  title,
  number,
  date,
  method,
  status,
}: ProcurementCardProps) {
  return (
    <Link
      href={`/procurement/${id}`}
      className="bg-white rounded-xl shadow-sm p-6 transition-all duration-300 hover:shadow-lg active:scale-95 cursor-pointer border border-gray-100 hover:border-[#16A7CB] group h-full flex flex-col"
    >
      <div className="flex flex-col gap-4 flex-grow">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#16A7CB] transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-500 text-sm flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#16A7CB] rounded-full"></span>
            เลขที่โครงการ: {number}
          </p>
        </div>

        <div className="border-t border-gray-100 pt-4 space-y-2 mt-auto">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="font-semibold w-24">วันที่ประกาศ:</span>
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="font-semibold w-24">วิธีจัดซื้อ:</span>
            <span>{method}</span>
          </div>
        </div>

        <div className="pt-2 flex justify-between items-center">
          <span
            className={`px-3 py-1 rounded-lg text-sm font-semibold inline-block ${
              status === "open"
                ? "bg-green-50 text-green-700 border border-green-100"
                : "bg-gray-50 text-gray-500 border border-gray-100"
            }`}
          >
            {status === "open" ? "กำลังเปิดรับ" : "ปิดรับสมัคร"}
          </span>

          <span className="text-[#16A7CB] font-semibold text-sm group-hover:underline inline-flex items-center gap-1">
            รายละเอียด <span>→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function Procurement() {
  const [search, setSearch] = useState("");
  const [year, setYear] = useState("");

  const procurements: ProcurementCardProps[] = [
    {
      id: "1",
      title: "ประกาศประกวดราคาซื้อครุภัณฑ์คอมพิวเตอร์ จำนวน 50 เครื่อง",
      number: "OKMD-P-2024-001",
      date: "25 มกราคม 2568",
      method: "ประกวดราคาอิเล็กทรอนิกส์ (e-bidding)",
      status: "open",
    },
    {
      id: "2",
      title: "ประกาศจ้างเหมาบริการรักษาความปลอดภัย",
      number: "OKMD-P-2024-002",
      date: "20 มกราคม 2568",
      method: "คัดเลือก",
      status: "open",
    },
    {
      id: "3",
      title: "ประกาศจ้างที่ปรึกษาโครงการพัฒนาบุคลากร",
      number: "OKMD-P-2023-099",
      date: "28 ธันวาคม 2567",
      method: "เฉพาะเจาะจง",
      status: "closed",
    },
    {
      id: "4",
      title: "ซื้อวัสดุสำนักงาน ประจำปีงบประมาณ 2568",
      number: "OKMD-P-2024-003",
      date: "15 มกราคม 2568",
      method: "ตกลงราคา",
      status: "open",
    },
  ];

  const yearOptions = [
    { label: "ทั้งหมด", value: "" },
    { label: "2568", value: "2568" },
    { label: "2567", value: "2567" },
  ];

  return (
    <div className="w-full space-y-8">
      {/* HEADER BLOCK */}
      <div className="w-full h-[250px] md:h-[300px] rounded-3xl overflow-hidden relative shadow-sm">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/procurement-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            จัดซื้อ <span className="text-[#74CEE2]">จัดจ้าง</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            ประกาศจัดซื้อจัดจ้างและราคากลาง เพื่อความโปร่งใสและตรวจสอบได้
          </p>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div className="flex items-center text-sm text-gray-500 px-2">
        <Link href="/" className="hover:text-[#16A7CB] transition-colors">
          หน้าหลัก
        </Link>
        <span className="mx-2">›</span>
        <span className="text-[#16A7CB] font-medium">จัดซื้อจัดจ้าง</span>
      </div>

      {/* CONTENT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* SIDEBAR BLOCK */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 sticky top-24 space-y-6">
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-[#1B1D20]">ค้นหาประกาศ</h3>
              <Input
                placeholder="พิมพ์คำค้นหา..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                icon={<CiSearch size={20} />}
              />
              <Dropdown
                label="ปีงบประมาณ"
                value={year}
                onChange={setYear}
                placeholder="เลือกปี"
                options={yearOptions}
              />
              <Button className="w-full rounded-xl">ค้นหา</Button>
            </div>

            <div className="h-px bg-gray-100 w-full" />

            <div>
              <h3 className="font-bold text-lg mb-3 text-[#1B1D20]">
                หมวดหมู่
              </h3>
              <ul className="space-y-2">
                {[
                  "ประกาศเชิญชวน",
                  "ประกาศผลผู้ชนะ",
                  "สรุปผลการจัดซื้อจัดจ้าง",
                  "ราคากลาง",
                ].map((item, index) => (
                  <li key={index}>
                    <button className="w-full text-left px-4 py-2 rounded-lg text-gray-600 hover:bg-[#E8F6FB] hover:text-[#16A7CB] transition-all text-sm font-medium">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* LIST BLOCK */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 min-h-[500px]">
            <h2 className="text-2xl font-bold text-[#1B1D20] mb-6 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-[#16A7CB] rounded-full"></span>
              รายการประกาศ ({procurements.length})
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {procurements.map((item) => (
                <div key={item.id} className="w-full">
                  <ProcurementCard {...item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
