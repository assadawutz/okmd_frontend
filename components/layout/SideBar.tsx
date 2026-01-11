'use client';

import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import Link from 'next/link';

type SubMenuItem = {
  title: string;
  slug: string;
};

type MenuItem = {
  title: string;
  slug?: string;
  children?: SubMenuItem[];
};

const MENU_DATA: MenuItem[] = [
  { title: 'รู้จัก OKMD', slug: 'about' },
  { title: 'นโยบายการดำเนินงาน', slug: 'policy' },
  {
    title: 'แผนการดำเนินงาน',
    children: [
      { title: 'แผนปฏิบัติการ', slug: 'action-plan' },
      { title: 'แผนยุทธศาสตร์', slug: 'strategic-plan' },
    ],
  },
  { title: 'โครงสร้าง OKMD', slug: 'structure' },
  { title: 'คณะกรรมการและผู้บริหาร', slug: 'board' },
  {
    title: 'คำรับรองการปฏิบัติงาน',
    children: [
      { title: 'คำรับรองการปฏิบัติงาน', slug: 'commitment' },
    ],
  },
  { title: 'การกำกับดูแลกิจการ', slug: 'governance' },
  {
    title: 'รายงาน',
    children: [
      { title: 'รายงานผลการปฏิบัติงาน', slug: 'reports' },
      {
        title: 'รายงานผลการดำเนินงาน',
        slug: 'outcome-report',
      },
      { title: 'รายงานประจำปี', slug: 'annual-report' },
      { title: 'งบการเงิน', slug: 'financial-statements' },
      { title: 'รายงานผลจัดซื้อจัดจ้าง', slug: 'procurement-results' },
    ],
  },
  { title: 'กฎ ระเบียบ ข้อบังคับ', slug: 'rules' },
  { title: 'ศูนย์ข้อมูลข่าวสารอิเล็กทรอนิกส์ของ สบร.', slug: 'info-center' },
  { title: 'คู่มือ/แนวทางการปฏิบัติงาน', slug: 'manuals' },
  { title: 'การเปิดเผยข้อมูลสาธารณะ', slug: 'disclosure' },
  { title: 'ผู้บริหารเทคโนโลยีสารสนเทศ', slug: 'cio' },
];

const Sidebar = () => {
  const pathname = usePathname();
  const [expandedMenus, setExpandedMenus] = useState<string[]>(['รายงาน']);

  const toggleMenu = (title: string) => {
    setExpandedMenus((prev) =>
      prev.includes(title)
        ? prev.filter((t) => t !== title)
        : [...prev, title]
    );
  };

  const isActiveSlug = (slug: string) => {
    return pathname === `/about-okmd/${slug}`;
  };

  return (
    <div className="w-full mb-5 pr-4">
      <h1 className="text-2xl lg:text-3xl border-b border-gray-200 pb-3 font-semibold text-[#333]">
        เกี่ยวกับ <span className="text-[#16A7CB]">OKMD</span>
      </h1>

      <ul className="space-y-2 mt-4 p-0 m-0">
        {menu 
        .filter((item) => ALLOWED_IDS.includes(item.id))
        .map((item) => {
          const href = `/about-okmd/${item.slug}`;
          const isActive = pathname === href;

          return (
            <li key={item.id} className="border-b border-gray-300 list-none">
              <Link
                href={href}
                className={`
                  block py-3 text-lg transition-colors
                  ${isActive
                    ? 'text-[#16A7CB] font-medium border-b'
                    : 'hover:text-[#16A7CB]'}
                `}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
