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

interface WorkingItem {
  id: number;
  title: string;
  department: string;
  start_date: string;
  end_date?: string;
  status: string;
  location?: string;
}

const STATUS_MAP: Record<string, string> = {
  'planning': 'วางแผน',
  'in-progress': 'กำลังดำเนินการ',
  'completed': 'เสร็จสิ้น',
  'on-hold': 'ระงับชั่วคราว',
  'cancelled': 'ยกเลิก',
};

export default function Working() {
  const [data, setData] = useState<WorkingItem[]>([]);
  const [loading, setLoading] = useState(true);

  // filters
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [department, setDepartment] = useState('');
  const [startdate, setStartDate] = useState('');
  const [enddate, setEndDate] = useState('');

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        // Mock data for now - replace with actual API call
        const mockData: WorkingItem[] = [
          {
            id: 1,
            title: 'โครงการพัฒนาระบบสารสนเทศ',
            department: 'สำนักงานบริหารและพัฒนาองค์ความรู้',
            start_date: '2024-01-01',
            end_date: '2024-12-31',
            status: 'in-progress',
            location: 'กรุงเทพมหานคร',
          },
          {
            id: 2,
            title: 'โครงการอบรมบุคลากร',
            department: 'สำนักงานบริหารและพัฒนาองค์ความรู้',
            start_date: '2024-03-15',
            end_date: '2024-03-20',
            status: 'completed',
            location: 'กรุงเทพมหานคร',
          },
          {
            id: 3,
            title: 'โครงการจัดซื้ออุปกรณ์',
            department: 'สำนักงานบริหารและพัฒนาองค์ความรู้',
            start_date: '2024-02-01',
            status: 'planning',
            location: 'กรุงเทพมหานคร',
          },
        ];

        if (isMounted) {
          setData(mockData);
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

  const departmentOptions = [
    { label: 'ทั้งหมด', value: 'all' },
    { label: 'สำนักงานบริหารและพัฒนาองค์ความรู้', value: 'okmd' },
    { label: 'มิวเซียมสยาม', value: 'museum' },
    { label: 'สถาบันอุทยานการเรียนรู้', value: 'tkpark' },
  ];

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
              <span className="text-[#74CEE2]">งานที่กำลังดำเนินการ</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto pb-8 sm:pb-12 md:pb-16">
        <div className="grid grid-cols-12 gap-4 sm:gap-6">
          <div className="col-span-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6">
              งานที่กำลัง <span className="text-[#74CEE2]">ดำเนินการ</span>
            </h1>
          </div>

          {/* ================= FILTER ================= */}
          <div className="col-span-12">
            <div className="bg-gray-50 rounded-xl p-4 sm:p-5 md:p-6 mb-6 sm:mb-7 md:mb-8">
              <div className="grid grid-cols-12 gap-3 sm:gap-4 md:gap-5 mb-3 sm:mb-4">
                <div className="col-span-12 sm:col-span-6 md:col-span-4">
                  <Input
                    label="ค้นหา"
                    placeholder="ค้นหาชื่อโครงการ"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    icon={<CiSearch size={22} />}
                  />
                </div>

                <div className="col-span-12 sm:col-span-6 md:col-span-4">
                  <Dropdown
                    label="หน่วยงาน"
                    value={department}
                    onChange={setDepartment}
                    placeholder="เลือกหน่วยงาน"
                    options={departmentOptions}
                  />
                </div>

                <div className="col-span-12 sm:col-span-6 md:col-span-4">
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
              <div className="col-span-12 sm:col-span-5 md:col-span-5 lg:col-span-5">ชื่อโครงการ</div>
              <div className="col-span-6 sm:col-span-2 md:col-span-2 lg:col-span-2 text-center">หน่วยงาน</div>
              <div className="col-span-6 sm:col-span-2 md:col-span-2 lg:col-span-2 text-center">วันที่เริ่ม</div>
              <div className="col-span-12 sm:col-span-3 md:col-span-3 lg:col-span-3 text-center">สถานะ</div>
            </div>

            {loading && (
              <div className="p-6 text-center">กำลังโหลดข้อมูล...</div>
            )}

            {!loading &&
              data.map((item, index) => (
                <Link
                  key={item.id}
                  href={`/working/${item.id}`}
                  className={clsx(
                    'grid grid-cols-12 px-3 sm:px-4 md:px-6 py-3 sm:py-4 border-b border-gray-200 cursor-pointer hover:bg-[#E6F7FB] transition-colors min-w-[800px]',
                    index % 2 === 0 ? 'bg-white' : 'bg-[#F1FAFC]'
                  )}
                >
                  <div className="col-span-12 sm:col-span-5 md:col-span-5 lg:col-span-5 text-sm sm:text-base">{item.title}</div>

                  <div className="col-span-6 sm:col-span-2 md:col-span-2 lg:col-span-2 text-center text-sm sm:text-base">
                    {item.department}
                  </div>

                  <div className="col-span-6 sm:col-span-2 md:col-span-2 lg:col-span-2 text-center text-sm sm:text-base">
                    {item.start_date
                      ? new Date(item.start_date).toLocaleDateString('th-TH')
                      : '-'}
                  </div>

                  <div className="col-span-12 sm:col-span-3 md:col-span-3 lg:col-span-3 text-center text-sm sm:text-base">
                    <span
                      className={clsx(
                        'px-3 py-1 rounded-full text-xs font-medium',
                        item.status === 'completed'
                          ? 'bg-green-100 text-green-800'
                          : item.status === 'in-progress'
                          ? 'bg-blue-100 text-blue-800'
                          : item.status === 'planning'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-gray-100 text-gray-800'
                      )}
                    >
                      {STATUS_MAP[item.status] ?? '-'}
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
