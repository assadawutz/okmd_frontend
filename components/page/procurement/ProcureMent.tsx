'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { CiSearch } from 'react-icons/ci';

import AboutBanner from '../aboutokmd/AboutBanner';
import Input from '@/components/ui/Input';
import Dropdown from '@/components/ui/Dropdown';
import InputDate from '@/components/ui/InputDate';
import Button from '@/components/ui/Button';
import { FaInfoCircle } from 'react-icons/fa';

/* ================= MAP ================= */

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
  draft: 'ร่าง',
  published: 'ประกาศ/เผยแพร่',
  'open-for-proposals': 'เปิดรับข้อเสนอ',
  'closed-for-proposals': 'ปิดรับข้อเสนอ',
  evaluation: 'ประเมินข้อเสนอ',
  'winner-announcement': 'ประกาศผลผู้ชนะ',
  'awaiting-approval': 'รออนุมัติ',
  implementation: 'อยู่ระหว่างดำเนินการ',
  completed: 'สำเร็จ/ปิดโครงการ',
  cancelled: 'ยกเลิก',
};

const METHOD_MAP: Record<string, string> = {
  tender: 'ประกวดราคา',
  'e-bidding': 'e-Bidding',
  'price-inquiry': 'สอบราคา',
  selection: 'คัดเลือก',
  negotiation: 'เจรจาต่อรอง',
  'direct-appointment': 'เฉพาะเจาะจง',
  'direct-purchase': 'ซื้อโดยตรง',
  'reverse-auction': 'ประมูลย้อนกลับ',
  'special-emergency': 'กรณีพิเศษ/ฉุกเฉิน',
};

// Component ย่อยสำหรับแสดง Label พร้อม Tooltip
const LabelWithTooltip = ({ title, tooltip }: { title: string; tooltip: string }) => {
  return (
    <div className="flex items-center gap-2">
      <span>{title}</span>
      <div className="group relative flex items-center">
        <FaInfoCircle className="text-gray-400 cursor-help hover:text-[#74CEE2]" size={14} />
        
        {/* Tooltip Popup */}
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-max px-2 py-1 bg-gray-800 text-white text-xs rounded shadow-lg z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {tooltip}
          {/* Arrow */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
        </div>
      </div>
    </div>
  );
};

/* ================= COMPONENT ================= */

interface ProcurementItem {
  id: number;
  title: string;
  start_date: string;
  status: string;
}

export default function ProcureMent() {
  const [data, setData] = useState<ProcurementItem[]>([]);
  const [loading, setLoading] = useState(true);

  // filters (ยังไม่เอาไป query)
  const [search, setSearch] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState('');
  const [method, setMethod] = useState('');
  const [startdate, setStartDate] = useState('');
  const [enddate, setEndDate] = useState('');

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/procurement-announcements`
        );
        const result = await res.json();

        if (isMounted) {
          setData(result.data || []);
          setLoading(false);
        }
      } catch {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Banner */}
      <AboutBanner />

      {/* Breadcrumb */}
      <div className="container pt-4 sm:pt-6 md:pt-8 mb-4 sm:mb-6 md:mb-8">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="text-sm sm:text-base md:text-lg text-gray-500 font-medium">
              <Link href="/" className="hover:underline">
                หน้าหลัก
              </Link>
              {" > "}
              <span className="text-[#74CEE2]">ประกาศจัดซื้อจัดจ้าง</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-8 sm:pb-12 md:pb-16">
        <div className="grid grid-cols-12 gap-4 sm:gap-6">
          <div className="col-span-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6">
              ประกาศ <span className="text-[#74CEE2]">จัดซื้อจัดจ้าง</span>
            </h1>
          </div>

          {/* ================= FILTER ================= */}
          <div className="col-span-12">
            <div className="bg-gray-50 rounded-xl p-4 sm:p-5 md:p-6 mb-6 sm:mb-7 md:mb-8">
              <div className="grid grid-cols-12 gap-3 sm:gap-4 md:gap-5 mb-3 sm:mb-4">
                <div className="col-span-12 sm:col-span-6 md:col-span-3">
                  <Input
                    label="ค้นหา"
                    placeholder="ค้นหาชื่อโครงการ"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    icon={<CiSearch size={22} />}
                  />
                </div>

                <div className="col-span-12 sm:col-span-6 md:col-span-3">
                  <Dropdown
                    label={<LabelWithTooltip title="ประเภทประกาศ" tooltip="ประเภทการประกาศ" />}
                    value={type}
                    onChange={setType}
                    placeholder="เลือกประเภท"
                    options={[
                      { label: 'ทั้งหมด', value: 'all' },
                      ...Object.entries(TYPE_MAP).map(([value, label]) => ({
                        value,
                        label,
                      })),
                    ]}
                  />
                </div>

                <div className="col-span-12 sm:col-span-6 md:col-span-3">
                  <Dropdown
                    label="สถานะ"
                    value={status}
                    onChange={setStatus}
                    placeholder="เลือกสถานะ"
                    options={[
                      { label: 'ทั้งหมด', value: 'all' },
                      ...Object.entries(STATUS_MAP).map(([value, label]) => ({
                        value,
                        label,
                      })),
                    ]}
                  />
                </div>

                <div className="col-span-12 sm:col-span-6 md:col-span-3">
                  <Dropdown
                    label="วิธีการจัดซื้อจัดจ้าง"
                    value={method}
                    onChange={setMethod}
                    placeholder="เลือกวิธีการ"
                    options={[
                      { label: 'ทั้งหมด', value: 'all' },
                      ...Object.entries(METHOD_MAP).map(([value, label]) => ({
                        value,
                        label,
                      })),
                    ]}
                  />
                </div>
              </div>

              {/* ================= DATE ================= */}
              <div className="grid grid-cols-12 gap-3 sm:gap-4 md:gap-5">
                <div className="col-span-12 sm:col-span-6 md:col-span-3">
                  <InputDate
                    label="วันที่เริ่ม"
                    value={startdate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>

                <div className="col-span-12 sm:col-span-6 md:col-span-3">
                  <InputDate
                    label="วันที่สิ้นสุด"
                    value={enddate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>

                <div className="col-span-12 sm:col-span-6 md:col-span-3 flex items-end">
                  <Button className="w-full sm:w-auto">แสดง</Button>
                </div>
              </div>
            </div>
          </div>

          {/* ================= TABLE ================= */}
          <div className="col-span-12 mb-5 overflow-x-auto">
            <div className="bg-[#74CEE2] grid grid-cols-12 px-3 sm:px-4 md:px-6 py-3 sm:py-4 font-semibold rounded-t-lg text-white min-w-[800px]">
              <div className="col-span-12 sm:col-span-6 md:col-span-5 lg:col-span-5">โครงการ</div>
              <div className="col-span-6 sm:col-span-3 md:col-span-2 lg:col-span-2 text-center">วันที่เริ่ม</div>
              <div className="col-span-6 sm:col-span-3 md:col-span-2 lg:col-span-2 text-center">สถานะ</div>
              <div className="col-span-12 sm:col-span-6 md:col-span-3 lg:col-span-3 text-center">ผู้บันทึก</div>
            </div>

          {loading && (
            <div className="p-6 text-center">กำลังโหลดข้อมูล...</div>
          )}

            {!loading &&
              data.map((item, index) => (
                <Link
                  key={item.id}
                  href={`/procurement/${item.id}`}
                  className={clsx(
                    'grid grid-cols-12 px-3 sm:px-4 md:px-6 py-3 sm:py-4 border-b border-gray-200 cursor-pointer hover:bg-[#E6F7FB] transition-colors min-w-[800px]',
                    index % 2 === 0 ? 'bg-white' : 'bg-[#F1FAFC]'
                  )}
                >
                  <div className="col-span-12 sm:col-span-6 md:col-span-5 lg:col-span-5 text-sm sm:text-base">{item.title}</div>

                  <div className="col-span-6 sm:col-span-3 md:col-span-2 lg:col-span-2 text-center text-sm sm:text-base">
                    {item.start_date
                      ? new Date(item.start_date).toLocaleDateString('th-TH')
                      : '-'}
                  </div>

                  <div className="col-span-6 sm:col-span-3 md:col-span-2 lg:col-span-2 text-center text-sm sm:text-base">
                    {STATUS_MAP[item.status] ?? '-'}
                  </div>

                  <div className="col-span-12 sm:col-span-6 md:col-span-3 lg:col-span-3 text-center text-sm sm:text-base">Adisorn</div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
