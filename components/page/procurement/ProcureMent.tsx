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
      className="bg-white rounded-xl shadow-sm p-6 transition-all duration-300 hover:shadow-lg active:scale-95 cursor-pointer border border-gray-100 hover:border-gray-200 group h-full flex flex-col"
    >
      <div className="flex flex-col gap-4 flex-grow">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#16A7CB] transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 text-sm">เลขที่โครงการ: {number}</p>
        </div>

        <div className="border-t border-gray-100 pt-4 space-y-2 mt-auto">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="font-semibold">วันที่ประกาศ:</span>
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="font-semibold">วิธีจัดซื้อ:</span>
            <span>{method}</span>
          </div>
        </div>

        <div className="pt-2 flex justify-between items-center">
          <span
            className={`px-3 py-1 rounded-lg text-sm font-semibold inline-block ${
              status === "open"
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-600"
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
    <div className="w-full min-h-screen bg-white pb-20 md:pb-32">
      <SubHeroBanner image="/procurement-hero.jpg" height="h-[300px]">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            จัดซื้อ <span className="text-[#74CEE2]">จัดจ้าง</span>
          </h1>
          <p className="text-lg md:text-xl mt-4 text-white/90">
            ประกาศจัดซื้อจัดจ้างและราคากลาง
          </p>
        </div>
      </SubHeroBanner>

      <div className="border-b border-zinc-200 bg-white">
        <div className="container mx-auto px-4 h-16 md:h-20 flex items-center text-sm md:text-base text-gray-600">
          <Link
            href="/"
            className="hover:text-[#74CEE2] cursor-pointer transition"
          >
            หน้าหลัก
          </Link>
          <span className="mx-2">›</span>
          <span className="text-[#74CEE2]">จัดซื้อจัดจ้าง</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-12">
          {/* Sidebar / Filters */}
          <div className="col-span-1 md:col-span-12 lg:col-span-3">
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm sticky top-24">
              <h3 className="font-bold text-lg mb-4 text-gray-800">
                ค้นหาประกาศ
              </h3>
              <div className="space-y-4">
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
                <Button className="w-full mt-2">ค้นหา</Button>
              </div>

              <div className="mt-8 border-t border-gray-100 pt-6">
                <h3 className="font-bold text-lg mb-4 text-gray-800">
                  หมวดหมู่
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="cursor-pointer hover:text-[#16A7CB] transition-colors font-medium text-[#16A7CB]">
                    ประกาศเชิญชวน
                  </li>
                  <li className="cursor-pointer hover:text-[#16A7CB] transition-colors">
                    ประกาศผลผู้ชนะ
                  </li>
                  <li className="cursor-pointer hover:text-[#16A7CB] transition-colors">
                    สรุปผลการจัดซื้อจัดจ้าง
                  </li>
                  <li className="cursor-pointer hover:text-[#16A7CB] transition-colors">
                    ราคากลาง
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Listing */}
          <div className="col-span-1 md:col-span-12 lg:col-span-9">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                รายการประกาศ ({procurements.length})
              </h2>
            </div>

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
