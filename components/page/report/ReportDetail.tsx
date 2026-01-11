'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import AboutBanner from '../aboutokmd/AboutBanner';

const TYPE_MAP: Record<string, string> = {
  'annual': 'รายงานประจำปี',
  'financial': 'รายงานการเงิน',
  'performance': 'รายงานผลการดำเนินงาน',
  'analysis': 'รายงานวิเคราะห์',
  'outcome': 'รายงานผลลัพธ์',
  'value-for-money': 'รายงานคุ้มค่าเงิน',
};

const STATUS_MAP: Record<string, string> = {
  'draft': 'ร่าง',
  'published': 'เผยแพร่',
  'archived': 'เก็บถาวร',
};

interface ReportDetailData {
  id: number;
  title: string;
  type: string;
  status: string;
  publish_date: string;
  department: string;
  description?: string;
  file?: string;
  author?: string;
}

export default function ReportDetail({ id }: { id: string }) {
  const [data, setData] = useState<ReportDetailData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        // Mock data for now - replace with actual API call
        const mockData: ReportDetailData = {
          id: parseInt(id),
          title: 'รายงานประจำปี 2567',
          type: 'annual',
          status: 'published',
          publish_date: '2024-01-15',
          department: 'สำนักงานบริหารและพัฒนาองค์ความรู้',
          description: 'รายงานประจำปีของสำนักงานบริหารและพัฒนาองค์ความรู้ ประจำปีงบประมาณ 2567',
          file: '/files/report-annual-2567.pdf',
          author: 'สำนักงานบริหารและพัฒนาองค์ความรู้',
        };

        setData(mockData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching report detail:', error);
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-white">
        <AboutBanner />
        <div className="container mx-auto px-4 py-10">
          <div className="p-10 text-center text-gray-400">กำลังโหลด...</div>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="w-full min-h-screen bg-white">
        <AboutBanner />
        <div className="container mx-auto px-4 py-10">
          <div className="p-10 text-center text-gray-400">ไม่พบข้อมูลรายงาน</div>
        </div>
      </div>
    );
  }

  const formatThaiDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('th-TH', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const type = TYPE_MAP[data.type] || data.type;
  const statusThai = STATUS_MAP[data.status] || data.status;

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Banner */}
      <AboutBanner />

      {/* Breadcrumb */}
      <div className="container mx-auto pt-4 sm:pt-6 md:pt-8 mb-4 sm:mb-6 md:mb-8">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="text-sm sm:text-base md:text-lg text-gray-500 font-medium">
              <Link href="/" className="hover:underline">
                หน้าหลัก
              </Link>
              {" > "}
              <Link href="/report" className="hover:underline">
                รายงาน
              </Link>
              {" > "}
              <span className="text-[#74CEE2]">{data.title}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <header className="mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
            <span className="text-[#74CEE2]">รายงาน</span>
          </h1>
          <h2 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800 leading-tight">
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
            <span className="font-bold w-48 text-gray-700">สถานะ :</span>
            <span className={data.status === 'published' ? 'text-green-600' : 'text-gray-600'}>
              {statusThai}
            </span>
          </div>
          <div className="flex flex-col md:flex-row pb-2">
            <span className="font-bold w-48 text-gray-700">หน่วยงาน :</span>
            <span>{data.department}</span>
          </div>
          {data.author && (
            <div className="flex flex-col md:flex-row pb-2">
              <span className="font-bold w-48 text-gray-700">ผู้จัดทำ :</span>
              <span>{data.author}</span>
            </div>
          )}
        </div>

        {/* Description */}
        {data.description && (
          <div className="mb-10">
            <h3 className="text-xl font-bold text-gray-800 mb-4">รายละเอียด</h3>
            <p className="text-gray-700 leading-relaxed">{data.description}</p>
          </div>
        )}

        {/* Download Section */}
        {data.file && (
          <div className="overflow-hidden rounded-xl border border-gray-100 shadow-sm mb-5">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-[#74CEE2] text-white">
                  <th className="py-4 px-6 font-medium">ดาวน์โหลดเอกสาร</th>
                  <th className="py-4 px-4 font-medium">วันที่เผยแพร่</th>
                  <th className="py-4 px-6 font-medium text-right">หน่วยงาน</th>
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
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M11.25 4.5A2.25 2.25 0 0 0 9 6.75v12.75a1.5 1.5 0 0 0 1.5 1.5h1.5A.75.75 0 0 1 12 21h4.5a2.25 2.25 0 0 0 2.25-2.25V7.25a.75.75 0 0 1 .168-.49l2.122-2.122a.75.75 0 0 0-.53-1.28H15a2.25 2.25 0 0 0-2.25-2.25H11.25Z" />
                      </svg>
                      {data.title}
                    </a>
                  </td>
                  <td className="py-5 px-4 text-gray-500">
                    {formatThaiDate(data.publish_date)}
                  </td>
                  <td className="py-5 px-6 text-right text-gray-500">
                    {data.department}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
