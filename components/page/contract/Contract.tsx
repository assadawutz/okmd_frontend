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
      className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-6 transition-all duration-300 hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)] cursor-pointer border border-gray-100"
    >
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">เลขที่สัญญา: {contractNumber}</p>
        </div>

        <div className="border-t border-gray-100 pt-4 space-y-2">
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
            className={`px-4 py-2 rounded-lg text-sm font-semibold inline-block ${
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
          <span className="text-[#16A7CB] font-semibold text-sm hover:underline">
            ดูรายละเอียดเพิ่มเติม →
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
    <div className="w-full min-h-screen bg-white">
      {/* Hero Banner */}
      <SubHeroBanner image="/contract-hero.jpg" height="h-[300px]">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            สัญญา <span className="text-[#74CEE2]">และข้อตกลง</span>
          </h1>
          <p className="text-xl mt-4 text-white/90">
            ข้อมูลสัญญาและข้อตกลงของ OKMD
          </p>
        </div>
      </SubHeroBanner>

      {/* Breadcrumb */}
      <div className="container mx-auto pt-4 sm:pt-6 md:pt-8 mb-4 sm:mb-6 md:mb-8">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="text-sm sm:text-base md:text-lg text-gray-500 font-medium">
              <Link href="/" className="hover:underline">
                หน้าหลัก
              </Link>
              {" > "}
              <span className="text-[#74CEE2]">สัญญาและข้อตกลง</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto pb-8 sm:pb-12 md:pb-16">
        <div className="grid grid-cols-12 gap-4 sm:gap-6">
          {/* Filters */}
          <div className="col-span-12">
            <div className="bg-gray-50 rounded-xl p-4 sm:p-5 md:p-6 mb-6 sm:mb-7 md:mb-8">
              <div className="grid grid-cols-12 gap-3 sm:gap-4">
                <div className="col-span-12 sm:col-span-6 md:col-span-4">
                  <Input
                    label="ค้นหาสัญญา"
                    placeholder="ค้นหาสัญญา..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    icon={<CiSearch size={22} />}
                  />
                </div>

                <div className="col-span-12 sm:col-span-6 md:col-span-4">
                  <Dropdown
                    label="สถานะ"
                    value={status}
                    onChange={setStatus}
                    placeholder="เลือกสถานะ"
                    options={statusOptions}
                  />
                </div>

                <div className="col-span-12 sm:col-span-6 md:col-span-4">
                  <Dropdown
                    label="ปี"
                    value={year}
                    onChange={setYear}
                    placeholder="เลือกปี"
                    options={yearOptions}
                  />
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <Button className="w-full sm:w-auto">ค้นหา</Button>
              </div>
            </div>
          </div>

          {/* Contract Listings */}
          <div className="col-span-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-5 md:mb-6">
              สัญญาและข้อตกลง ({contracts.length})
            </h2>

            <div className="grid grid-cols-12 gap-4 sm:gap-5 md:gap-6">
              {contracts.map((contract) => (
                <div key={contract.id} className="col-span-12 sm:col-span-6 lg:col-span-6">
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

