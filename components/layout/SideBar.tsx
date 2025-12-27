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

      <ul className="mt-4 space-y-0">
        {MENU_DATA.map((item, idx) => {
          const hasChildren = item.children && item.children.length > 0;
          const isExpanded = expandedMenus.includes(item.title);
          const isActive = item.slug && isActiveSlug(item.slug);

          return (
            <li key={idx} className="border-b border-gray-200">
              {hasChildren ? (
                <>
                  <button
                    onClick={() => toggleMenu(item.title)}
                    className={`w-full flex items-center justify-between py-3 text-sm lg:text-base transition-colors hover:text-[#16A7CB] ${
                      isExpanded ? 'text-[#16A7CB]' : 'text-[#40444D]'
                    }`}
                  >
                    <span>{item.title}</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isExpanded && (
                    <ul className="pb-2 pl-4 space-y-1">
                      {item.children!.map((child, childIdx) => {
                        const isChildActive = isActiveSlug(child.slug);
                        return (
                          <li key={childIdx}>
                            <Link
                              href={`/about-okmd/${child.slug}`}
                              className={`block py-2 text-sm transition-colors ${
                                isChildActive
                                  ? 'text-[#16A7CB] font-medium'
                                  : 'text-[#40444D] hover:text-[#16A7CB]'
                              }`}
                            >
                              {child.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={`/about-okmd/${item.slug}`}
                  className={`block py-3 text-sm lg:text-base transition-colors ${
                    isActive
                      ? 'text-[#16A7CB] font-medium'
                      : 'text-[#40444D] hover:text-[#16A7CB]'
                  }`}
                >
                  {item.title}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
