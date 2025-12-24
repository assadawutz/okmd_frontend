'use client';

import React, { useEffect, useState } from 'react';
import AboutBanner from '../aboutokmd/AboutBanner';

// 1. สร้าง Mapping Object สำหรับแปลง Key จาก API เป็นภาษาไทยตามรูปภาพที่แนบมา
const TYPE_MAP: Record<string, string> = {
    'invitation-tender': 'ประกาศเชิญชวน/ประกวดราคา',
    'price-inquiry': 'ประกาศสอบราคา',
    'invitation-specific': 'ประกาศเชิญผู้เสนอราคา (เชิญเฉพาะราย)',
    'amendment': 'ประกาศแก้ไข/เพิ่มเติมเอกสารประกวดราคา',
    'extension': 'ประกาศขยายกำหนดเวลา',
    'clarification': 'ประกาศชี้แจง/ตอบข้อซักถาม',
    'winner-selection': 'ประกาศผลผู้ชนะ/การคัดเลือก',
    'cancellation': 'ประกาศยกเลิก/ยุติการประกวด',
    'contract-signing': 'ประกาศลงนามสัญญา',
    'additional-info': 'ประกาศข้อมูลเพิ่มเติม/เอกสารแนบ',
};

const STATUS_MAP: Record<string, string> = {
    'draft': 'ร่าง',
    'published': 'ประกาศ/เผยแพร่',
    'open-for-proposals': 'เปิดรับข้อเสนอ/ยื่นซอง',
    'clarification-period': 'ช่วงชี้แจง/ตอบข้อซักถาม',
    'closed-for-proposals': 'ปิดรับข้อเสนอ',
    'evaluation': 'ประเมินข้อเสนอ/ตรวจสอบคุณสมบัติ',
    'winner-selection': 'เลือก/คัดเลือกผู้ชนะ',
    'winner-announcement': 'ประกาศผลผู้ชนะ',
    'negotiation': 'เจรจาต่อรอง/ตกลงราคา',
    'awaiting-approval': 'รออนุมัติ',
    'contract-signing': 'ลงนามสัญญา',
    'implementation': 'อยู่ระหว่างดำเนินการ',
    'completed': 'สำเร็จ/ปิดโครงการ',
    'cancelled': 'ยกเลิก/ระงับ',
};

const METHOD_MAP: Record<string, string> = {
    'tender': 'ประกวดราคา',
    'e-bidding': 'ประกวดราคาทางอิเล็กทรอนิกส์ (e-Bidding)',
    'price-inquiry': 'สอบราคา',
    'selection': 'คัดเลือก',
    'negotiation': 'ตกลงราคา / เจรจาต่อรอง',
    'direct-appointment': 'เฉพาะเจาะจง (แต่งตั้งโดยตรง)',
    'direct-purchase': 'ซื้อโดยตรง / จัดซื้อเล็กน้อย',
    'reverse-auction': 'ประมูล / ยกประมูลย้อนกลับ',
    'special-emergency': 'วิธีการพิเศษ / กรณีฉุกเฉิน',
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
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/procurement-announcements/${id}`);
            const result = await res.json();
            setData(result.data);
        };
        fetchDetail();
    }, [id]);

    if (!data) return <div className="p-10 text-center text-gray-400">กำลังโหลด...</div>;

    const formatThaiDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('th-TH', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
    };

    // 2. ดึงค่าภาษาไทยจาก Map ถ้าไม่เจอให้แสดงค่าเดิมจาก API
    const type = TYPE_MAP[data.type] || data.type;
    const statusThai = STATUS_MAP[data.status] || data.status;
    const methodThai = METHOD_MAP[data.method] || data.method;

    return (
        
        <div>
            <main>
                <div className="container">Breadcrumb</div>
                <AboutBanner />
            </main>
            <div className='container mx-auto px-4 py-10'>
                <header className="mb-8">
                    <h1 className="text-3xl font-extrabold mb-4">
                        Procurement <span className="text-[#74CEE2]">Announcement</span>
                    </h1>
                    <h2 className="text-2xl font-bold mb-2 text-gray-800 leading-tight">
                        {data.title}
                    </h2>
                    <p className="text-gray-400 text-sm">
                        {formatThaiDate(data.publish_date)}
                    </p>
                </header>

                {/* Info Section */}
                <div className="space-y-4 mb-10 text-[17px]">
                    <div className="flex flex-col md:flex-row pb-2">
                        <span className="font-bold w-48 text-gray-700">ประเภท :</span>
                        <span>{type}</span>
                    </div>
                    <div className="flex flex-col md:flex-row pb-2">
                        <span className="font-bold w-48 text-gray-700">วิธีจัดซื้อจัดจ้าง :</span>
                        <span>{methodThai}</span>
                    </div>
                    <div className="flex flex-col md:flex-row pb-2">
                        <span className="font-bold w-48 text-gray-700">วันที่ยื่นข้อเสนอ :</span>
                        <span>{formatThaiDate(data.start_date)}</span>
                    </div>
                    <div className="flex flex-col md:flex-row pb-2">
                        <span className="font-bold w-48 text-gray-700">สถานะโครงการ :</span>
                        <span className={data.status === 'completed' ? 'text-green-600' : 'text-blue-600'}>
                            {statusThai}
                        </span>
                    </div>
                </div>

                {/* ตารางรายการเอกสาร */}
                <div className="overflow-hidden rounded-xl border border-gray-100 shadow-sm mb-5">
                    <table className="w-full border-collapse text-left">
                        <thead>
                            <tr className="bg-[#74CEE2] text-white">
                                <th className="py-4 px-6 font-medium">ดาวน์โหลดเอกสารที่เกี่ยวข้อง</th>
                                <th className="py-4 px-4 font-medium">วันที่ประกาศ</th>
                                <th className="py-4 px-4 font-medium text-center">วันที่สิ้นสุด</th>
                                <th className="py-4 px-6 font-medium text-right">ผู้บันทึก</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white hover:bg-blue-50/30 transition-colors">
                                <td className="py-5 px-6">
                                    <a
                                        href={data.file}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-700 font-medium hover:text-[#74CEE2] transition-colors flex items-center gap-2"
                                    >
                                        {type}
                                    </a>
                                </td>
                                <td className="py-5 px-4 text-gray-500">
                                    {formatThaiDate(data.publish_date)}
                                </td>
                                <td className="py-5 px-4 text-center text-gray-400">
                                    {data.end_date ? formatThaiDate(data.end_date) : "-"}
                                </td>
                                <td className="py-5 px-6 text-right text-gray-500">
                                    {data.user_id || "Adisorn"}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}