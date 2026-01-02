"use client";

import { useState } from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import Input from "@/components/ui/Input";
import Dropdown from "@/components/ui/Dropdown";
import Button from "@/components/ui/Button";

type ContractCardProps = {
  id: string;
  title: string;
  contractNumber: string;
  contractor: string;
  contractDate: string;
  amount: string;
  status: string;
};

function ContractCard({
  id,
  title,
  contractNumber,
  contractor,
  contractDate,
  amount,
  status,
}: ContractCardProps) {
  return (
    <Link
      href={`/contract/${id}`}
      className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 hover:border-[#16A7CB] hover:shadow-md transition-all duration-300 group h-full flex flex-col relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-4">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            status === "active"
              ? "bg-green-50 text-green-600 border border-green-100"
              : status === "completed"
              ? "bg-blue-50 text-blue-600 border border-blue-100"
              : "bg-gray-50 text-gray-500 border border-gray-100"
          }`}
        >
          {status === "active"
            ? "กำลังดำเนินการ"
            : status === "completed"
            ? "เสร็จสิ้น"
            : "ยกเลิก"}
        </span>
      </div>

      <div className="flex flex-col gap-4 flex-grow mt-2">
        <div>
          <div className="text-xs text-gray-400 mb-1 font-medium">
            เลขที่สัญญา: {contractNumber}
          </div>
          <h3 className="text-xl font-bold text-[#1B1D20] mb-2 group-hover:text-[#16A7CB] transition-colors leading-snug">
            {title}
          </h3>
        </div>

        <div className="border-t border-gray-100 pt-4 space-y-3 mt-auto">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span className="text-gray-400">ผู้รับจ้าง</span>
            <span className="font-medium text-right max-w-[60%] truncate">
              {contractor}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span className="text-gray-400">วันที่ลงนาม</span>
            <span className="font-medium">{contractDate}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">มูลค่าสัญญา</span>
            <span className="text-[#16A7CB] font-bold text-lg">{amount}</span>
          </div>
        </div>

        <div className="pt-2 mt-2">
          <span className="w-full text-center block bg-gray-50 text-gray-600 py-2 rounded-xl text-sm font-semibold group-hover:bg-[#16A7CB] group-hover:text-white transition-all">
            ดูรายละเอียด
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function Contract() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [year, setYear] = useState("");

  // Mock data
  const contracts: ContractCardProps[] = [
    {
      id: "1",
      title: "สัญญาจ้างพัฒนาระบบสารสนเทศ",
      contractNumber: "OKMD-2024-001",
      contractor: "บริษัท เทคโนโลยี จำกัด",
      contractDate: "15 มกราคม 2568",
      amount: "2,500,000 บาท",
      status: "active",
    },
    {
      id: "2",
      title: "สัญญาจ้างออกแบบและพัฒนาเว็บไซต์",
      contractNumber: "OKMD-2024-002",
      contractor: "บริษัท ดิจิทัล โซลูชั่น จำกัด",
      contractDate: "20 มกราคม 2568",
      amount: "1,800,000 บาท",
      status: "active",
    },
    {
      id: "3",
      title: "สัญญาจ้างจัดทำนิทรรศการ",
      contractNumber: "OKMD-2023-050",
      contractor: "บริษัท อีเวนต์ แอนด์ ดีไซน์ จำกัด",
      contractDate: "10 ธันวาคม 2567",
      amount: "3,200,000 บาท",
      status: "completed",
    },
  ];

  const statusOptions = [
    { label: "ทั้งหมด", value: "" },
    { label: "กำลังดำเนินการ", value: "active" },
    { label: "เสร็จสิ้น", value: "completed" },
    { label: "ยกเลิก", value: "cancelled" },
  ];

  const yearOptions = [
    { label: "ทั้งหมด", value: "" },
    { label: "2568", value: "2568" },
    { label: "2567", value: "2567" },
    { label: "2566", value: "2566" },
  ];

  return (
    <div className="w-full space-y-8">
      {/* HEADER BLOCK */}
      <div className="w-full h-[250px] md:h-[300px] rounded-3xl overflow-hidden relative shadow-sm">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/contract-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            สัญญา <span className="text-[#74CEE2]">และข้อตกลง</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            ข้อมูลสัญญาและข้อตกลงของ OKMD
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-500 px-2 gap-2">
        <Link href="/" className="hover:text-[#16A7CB] transition-colors">
          หน้าหลัก
        </Link>
        <span>›</span>
        <span className="text-[#16A7CB] font-medium">สัญญาและข้อตกลง</span>
      </div>

      {/* Filter Section */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-end">
          <div className="col-span-1 md:col-span-4">
            <Input
              label="ค้นหาสัญญา"
              placeholder="ค้นหาสัญญา..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              icon={<CiSearch className="text-gray-400" size={20} />}
            />
          </div>

          <div className="col-span-1 md:col-span-3">
            <Dropdown
              label="สถานะ"
              value={status}
              onChange={setStatus}
              placeholder="เลือกสถานะ"
              options={statusOptions}
            />
          </div>

          <div className="col-span-1 md:col-span-3">
            <Dropdown
              label="ปีงบประมาณ"
              value={year}
              onChange={setYear}
              placeholder="เลือกปี"
              options={yearOptions}
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <Button className="w-full rounded-xl shadow-lg shadow-[#16A7CB]/20 h-[48px] md:h-auto">
              ค้นหา
            </Button>
          </div>
        </div>
      </div>

      {/* Listing Section */}
      <div className="space-y-6">
        <h2 className="text-xl md:text-2xl font-bold text-[#1B1D20] px-2 flex items-center gap-2">
          <span className="w-2 h-6 bg-[#16A7CB] rounded-full block"></span>
          รายการสัญญา ({contracts.length})
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contracts.map((contract) => (
            <div key={contract.id} className="w-full">
              <ContractCard {...contract} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
