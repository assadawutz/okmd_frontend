"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, FileText, Calendar, User, Tag } from "lucide-react";
import Button from "@/components/ui/Button";

// 1. สร้าง Mapping Object สำหรับแปลง Key จาก API เป็นภาษาไทย
const TYPE_MAP: Record<string, string> = {
  "invitation-tender": "ประกาศเชิญชวน/ประกวดราคา",
  "price-inquiry": "ประกาศสอบราคา",
  "invitation-specific": "ประกาศเชิญผู้เสนอราคา (เชิญเฉพาะราย)",
  amendment: "ประกาศแก้ไข/เพิ่มเติมเอกสารประกวดราคา",
  extension: "ประกาศขยายกำหนดเวลา",
  clarification: "ประกาศชี้แจง/ตอบข้อซักถาม",
  "winner-selection": "ประกาศผลผู้ชนะ/การคัดเลือก",
  cancellation: "ประกาศยกเลิก/ยุติการประกวด",
  "contract-signing": "ประกาศลงนามสัญญา",
  "additional-info": "ประกาศข้อมูลเพิ่มเติม/เอกสารแนบ",
};

const STATUS_MAP: Record<string, string> = {
  draft: "ร่าง",
  published: "ประกาศ/เผยแพร่",
  "open-for-proposals": "เปิดรับข้อเสนอ/ยื่นซอง",
  "clarification-period": "ช่วงชี้แจง/ตอบข้อซักถาม",
  "closed-for-proposals": "ปิดรับข้อเสนอ",
  evaluation: "ประเมินข้อเสนอ/ตรวจสอบคุณสมบัติ",
  "winner-selection": "เลือก/คัดเลือกผู้ชนะ",
  "winner-announcement": "ประกาศผลผู้ชนะ",
  negotiation: "เจรจาต่อรอง/ตกลงราคา",
  "awaiting-approval": "รออนุมัติ",
  "contract-signing": "ลงนามสัญญา",
  implementation: "อยู่ระหว่างดำเนินการ",
  completed: "สำเร็จ/ปิดโครงการ",
  cancelled: "ยกเลิก/ระงับ",
};

const METHOD_MAP: Record<string, string> = {
  tender: "ประกวดราคา",
  "e-bidding": "ประกวดราคาทางอิเล็กทรอนิกส์ (e-Bidding)",
  "price-inquiry": "สอบราคา",
  selection: "คัดเลือก",
  negotiation: "ตกลงราคา / เจรจาต่อรอง",
  "direct-appointment": "เฉพาะเจาะจง (แต่งตั้งโดยตรง)",
  "direct-purchase": "ซื้อโดยตรง / จัดซื้อเล็กน้อย",
  "reverse-auction": "ประมูล / ยกประมูลย้อนกลับ",
  "special-emergency": "วิธีการพิเศษ / กรณีฉุกเฉิน",
};

interface ProcurementDetailData {
  title: string;
  type: string;
  status: string;
  method: string;
  publish_date: string;
  start_date: string;
  end_date?: string;
  file?: string;
  user_id?: string;
}

export default function ProcureMentDetail({ id }: { id: string }) {
  const [data, setData] = useState<ProcurementDetailData | null>(null);

  useEffect(() => {
    const fetchDetail = async () => {
      // Mock data if API fails or for demo
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/procurement-announcements/${id}`
        );
        if (!res.ok) throw new Error("Failed to fetch");
        const result = await res.json();
        setData(result.data);
      } catch (e) {
        // Fallback Mock Data
        setData({
          title: "ประกาศประกวดราคาจ้างเหมาบริการรักษาความปลอดภัย ประจำปี 2568",
          type: "invitation-tender",
          status: "open-for-proposals",
          method: "e-bidding",
          publish_date: new Date().toISOString(),
          start_date: new Date().toISOString(),
          end_date: new Date(Date.now() + 86400000 * 7).toISOString(),
          file: "#",
          user_id: "เจ้าหน้าที่พัสดุ",
        });
      }
    };
    fetchDetail();
  }, [id]);

  const formatThaiDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("th-TH", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  if (!data)
    return (
      <div className="w-full h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#16A7CB]"></div>
      </div>
    );

  const type = TYPE_MAP[data.type] || data.type;
  const statusThai = STATUS_MAP[data.status] || data.status;
  const methodThai = METHOD_MAP[data.method] || data.method;

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
            ประกาศและข่าวสารการจัดซื้อจัดจ้าง
          </p>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div className="flex items-center text-sm text-gray-500 px-2 gap-2">
        <Link href="/" className="hover:text-[#16A7CB] transition-colors">
          หน้าหลัก
        </Link>
        <span>›</span>
        <Link
          href="/procurement"
          className="hover:text-[#16A7CB] transition-colors"
        >
          จัดซื้อจัดจ้าง
        </Link>
        <span>›</span>
        <span className="text-[#16A7CB] font-medium truncate max-w-[200px] md:max-w-xs">
          {data.title}
        </span>
      </div>

      {/* CONTENT */}
      <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
        <header className="mb-10 space-y-4 border-b border-gray-100 pb-8">
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-semibold border ${
              data.status === "completed"
                ? "bg-green-50 text-green-600 border-green-100"
                : "bg-blue-50 text-blue-600 border-blue-100"
            }`}
          >
            {statusThai}
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-[#1B1D20] leading-snug">
            {data.title}
          </h1>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Calendar size={16} />
            ประกาศเมื่อ: {formatThaiDate(data.publish_date)}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-100 space-y-4">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1">
                <Tag size={12} /> ประเภท
              </span>
              <span className="font-semibold text-[#1B1D20]">{type}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1">
                <FileText size={12} /> วิธีจัดซื้อจัดจ้าง
              </span>
              <span className="font-semibold text-[#1B1D20]">{methodThai}</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-bold text-[#1B1D20] flex items-center gap-2">
            <span className="w-1.5 h-6 bg-[#16A7CB] rounded-full"></span>
            เอกสารที่เกี่ยวข้อง
          </h3>

          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="grid grid-cols-12 gap-4 p-4 bg-gray-50 border-b border-gray-200 text-sm font-bold text-gray-500 hidden md:grid">
              <div className="col-span-6">รายการเอกสาร</div>
              <div className="col-span-3 text-center">วันที่ประกาศ</div>
              <div className="col-span-3 text-right">ผู้บันทึก</div>
            </div>

            <div className="p-4 md:p-0">
              <div className="flex flex-col md:grid md:grid-cols-12 gap-4 md:p-4 items-center hover:bg-[#E8F6FB]/30 transition-colors border-b border-gray-100 last:border-0">
                <div className="col-span-6 w-full">
                  <a
                    href={data.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#16A7CB] hover:underline flex items-center gap-2"
                  >
                    <FileText size={18} />
                    {data.title} (เอกสารแนบ)
                  </a>
                </div>
                <div className="col-span-3 text-sm text-gray-500 w-full md:text-center flex md:block justify-between">
                  <span className="md:hidden font-medium">วันที่ประกาศ:</span>
                  {formatThaiDate(data.publish_date)}
                </div>
                <div className="col-span-3 text-sm text-gray-500 w-full md:text-right flex md:block justify-between">
                  <span className="md:hidden font-medium">ผู้บันทึก:</span>
                  <div className="flex items-center justify-end gap-2">
                    <User size={14} className="hidden md:block" />
                    {data.user_id || "เจ้าหน้าที่พัสดุ"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-100 pt-6">
          <Link href="/procurement">
            <Button
              variant="outline"
              className="rounded-xl flex items-center gap-2"
            >
              <ChevronLeft size={18} /> ย้อนกลับ
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
