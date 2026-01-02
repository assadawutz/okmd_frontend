"use client";

import { useState } from "react";
import Link from "next/link";
import SubHeroBanner from "@/components/ui/SubHeroBanner";
import Input from "@/components/ui/Input";
import Dropdown from "@/components/ui/Dropdown";
import Button from "@/components/ui/Button";
import { CiSearch } from "react-icons/ci";

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
      className="bg-white rounded-xl shadow-sm p-6 transition-all duration-300 hover:shadow-lg active:scale-95 cursor-pointer border border-gray-100 hover:border-gray-200 group h-full flex flex-col"
    >
      <div className="flex flex-col gap-4 flex-grow">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#16A7CB] transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-sm">เลขที่สัญญา: {contractNumber}</p>
        </div>

        <div className="border-t border-gray-100 pt-4 space-y-2 mt-auto">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="font-semibold">ผู้รับจ้าง:</span>
            <span>{contractor}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="font-semibold">วันที่ลงนาม:</span>
            <span>{contractDate}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="font-semibold">มูลค่าสัญญา:</span>
            <span className="text-[#16A7CB] font-bold">{amount}</span>
          </div>
        </div>

        <div className="pt-2">
          <span
            className={`px-3 py-1 rounded-lg text-sm font-semibold inline-block ${
              status === "active"
                ? "bg-green-100 text-green-800"
                : status === "completed"
                ? "bg-blue-100 text-blue-800"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {status === "active"
              ? "กำลังดำเนินการ"
              : status === "completed"
              ? "เสร็จสิ้น"
              : "ยกเลิก"}
          </span>
        </div>

        <div className="pt-2">
          <span className="text-[#16A7CB] font-semibold text-sm group-hover:underline inline-flex items-center gap-1">
            ดูรายละเอียดเพิ่มเติม <span>→</span>
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
    <div className="w-full min-h-screen bg-white pb-20 md:pb-32">
      {/* Hero Banner */}
      <SubHeroBanner image="/contract-hero.jpg" height="h-[300px]">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            สัญญา <span className="text-[#74CEE2]">และข้อตกลง</span>
          </h1>
          <p className="text-lg md:text-xl mt-4 text-white/90">
            ข้อมูลสัญญาและข้อตกลงของ OKMD
          </p>
        </div>
      </SubHeroBanner>

      {/* Breadcrumb - Standard */}
      <div className="border-b border-zinc-200 bg-white">
        <div className="container mx-auto px-4 h-16 md:h-20 flex items-center text-sm md:text-base text-gray-600">
          <Link
            href="/"
            className="hover:text-[#74CEE2] cursor-pointer transition"
          >
            หน้าหลัก
          </Link>
          <span className="mx-2">›</span>
          <span className="text-[#74CEE2]">สัญญาและข้อตกลง</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-12">
          {/* Filters */}
          <div className="col-span-1 md:col-span-12">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-8 md:mb-12">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
                <div className="col-span-1 md:col-span-4">
                  <Input
                    label="ค้นหาสัญญา"
                    placeholder="ค้นหาสัญญา..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    icon={<CiSearch size={22} />}
                  />
                </div>

                <div className="col-span-1 md:col-span-4">
                  <Dropdown
                    label="สถานะ"
                    value={status}
                    onChange={setStatus}
                    placeholder="เลือกสถานะ"
                    options={statusOptions}
                  />
                </div>

                <div className="col-span-1 md:col-span-4">
                  <Dropdown
                    label="ปี"
                    value={year}
                    onChange={setYear}
                    placeholder="เลือกปี"
                    options={yearOptions}
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <Button className="w-full md:w-auto px-8">ค้นหา</Button>
              </div>
            </div>
          </div>

          {/* Contract Listings */}
          <div className="col-span-1 md:col-span-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">
              สัญญาและข้อตกลง ({contracts.length})
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
              {contracts.map((contract) => (
                <div key={contract.id} className="w-full">
                  <ContractCard {...contract} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
