'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import AboutBanner from '../aboutokmd/AboutBanner';

const STATUS_MAP: Record<string, string> = {
  'planning': 'วางแผน',
  'in-progress': 'กำลังดำเนินการ',
  'completed': 'เสร็จสิ้น',
  'on-hold': 'ระงับชั่วคราว',
  'cancelled': 'ยกเลิก',
};

interface WorkingDetailData {
  id: number;
  title: string;
  department: string;
  start_date: string;
  end_date?: string;
  status: string;
  location?: string;
  description?: string;
  objectives?: string[];
  progress?: number;
  responsible_person?: string;
  budget?: string;
  files?: Array<{ name: string; url: string }>;
}

export default function WorkingDetail({ id }: { id: string }) {
  const [data, setData] = useState<WorkingDetailData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        // Mock data for now - replace with actual API call
        const mockData: WorkingDetailData = {
          id: parseInt(id),
          title: 'โครงการพัฒนาระบบสารสนเทศ',
          department: 'สำนักงานบริหารและพัฒนาองค์ความรู้',
          start_date: '2024-01-01',
          end_date: '2024-12-31',
          status: 'in-progress',
          location: 'กรุงเทพมหานคร',
          description: 'โครงการพัฒนาระบบสารสนเทศเพื่อเพิ่มประสิทธิภาพในการบริหารจัดการข้อมูลและบริการขององค์กร',
          objectives: [
            'พัฒนาระบบฐานข้อมูลกลาง',
            'เพิ่มประสิทธิภาพการทำงาน',
            'ปรับปรุงการบริการให้กับประชาชน',
          ],
          progress: 65,
          responsible_person: 'นายสมชาย ใจดี',
          budget: '5,000,000 บาท',
          files: [
            { name: 'เอกสารโครงการ.pdf', url: '/files/project-doc.pdf' },
            { name: 'รายงานความคืบหน้า.pdf', url: '/files/progress-report.pdf' },
          ],
        };

        setData(mockData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching working detail:', error);
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
          <div className="p-10 text-center text-gray-400">ไม่พบข้อมูลโครงการ</div>
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
              <Link href="/working" className="hover:underline">
                งานที่กำลังดำเนินการ
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
            งานที่กำลัง <span className="text-[#74CEE2]">ดำเนินการ</span>
          </h1>
          <h2 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800 leading-tight">
            {data.title}
          </h2>
        </header>

        {/* Info Section */}
        <div className="space-y-4 mb-10 text-[17px]">
          <div className="flex flex-col md:flex-row pb-2">
            <span className="font-bold w-48 text-gray-700">หน่วยงาน :</span>
            <span>{data.department}</span>
          </div>
          <div className="flex flex-col md:flex-row pb-2">
            <span className="font-bold w-48 text-gray-700">วันที่เริ่ม :</span>
            <span>{formatThaiDate(data.start_date)}</span>
          </div>
          {data.end_date && (
            <div className="flex flex-col md:flex-row pb-2">
              <span className="font-bold w-48 text-gray-700">วันที่สิ้นสุด :</span>
              <span>{formatThaiDate(data.end_date)}</span>
            </div>
          )}
          <div className="flex flex-col md:flex-row pb-2">
            <span className="font-bold w-48 text-gray-700">สถานะ :</span>
            <span
              className={clsx(
                'px-3 py-1 rounded-full text-sm font-medium inline-block',
                data.status === 'completed'
                  ? 'bg-green-100 text-green-800'
                  : data.status === 'in-progress'
                  ? 'bg-blue-100 text-blue-800'
                  : data.status === 'planning'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-gray-100 text-gray-800'
              )}
            >
              {statusThai}
            </span>
          </div>
          {data.location && (
            <div className="flex flex-col md:flex-row pb-2">
              <span className="font-bold w-48 text-gray-700">สถานที่ :</span>
              <span>{data.location}</span>
            </div>
          )}
          {data.responsible_person && (
            <div className="flex flex-col md:flex-row pb-2">
              <span className="font-bold w-48 text-gray-700">ผู้รับผิดชอบ :</span>
              <span>{data.responsible_person}</span>
            </div>
          )}
          {data.budget && (
            <div className="flex flex-col md:flex-row pb-2">
              <span className="font-bold w-48 text-gray-700">งบประมาณ :</span>
              <span>{data.budget}</span>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        {data.progress !== undefined && (
          <div className="mb-10">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-semibold text-gray-700">ความคืบหน้า</span>
              <span className="text-lg font-bold text-[#74CEE2]">{data.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-[#74CEE2] h-4 rounded-full transition-all duration-300"
                style={{ width: `${data.progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Description */}
        {data.description && (
          <div className="mb-10">
            <h3 className="text-xl font-bold text-gray-800 mb-4">รายละเอียดโครงการ</h3>
            <p className="text-gray-700 leading-relaxed">{data.description}</p>
          </div>
        )}

        {/* Objectives */}
        {data.objectives && data.objectives.length > 0 && (
          <div className="mb-10">
            <h3 className="text-xl font-bold text-gray-800 mb-4">วัตถุประสงค์</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {data.objectives.map((objective, index) => (
                <li key={index}>{objective}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Files Section */}
        {data.files && data.files.length > 0 && (
          <div className="overflow-hidden rounded-xl border border-gray-100 shadow-sm mb-5">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-[#74CEE2] text-white">
                  <th className="py-4 px-6 font-medium">เอกสารที่เกี่ยวข้อง</th>
                  <th className="py-4 px-6 font-medium text-right">ดาวน์โหลด</th>
                </tr>
              </thead>
              <tbody>
                {data.files.map((file, index) => (
                  <tr
                    key={index}
                    className={clsx(
                      'bg-white hover:bg-blue-50/30 transition-colors',
                      index !== data.files!.length - 1 && 'border-b border-gray-100'
                    )}
                  >
                    <td className="py-5 px-6">
                      <span className="text-gray-700 font-medium">{file.name}</span>
                    </td>
                    <td className="py-5 px-6 text-right">
                      <a
                        href={file.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#74CEE2] hover:underline flex items-center justify-end gap-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.41-3.42a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.41 3.42V3a.75.75 0 0 1 .75-.75Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        ดาวน์โหลด
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
