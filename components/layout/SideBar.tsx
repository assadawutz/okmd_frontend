'use client';

import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

type MenuItem = {
  id: number;
  title: string;
  slug: string;
};

const Sidebar = () => {
  const ALLOWED_IDS = [1,2,3,5];
  const pathname = usePathname();
  const [menu, setMenu] = useState<MenuItem[]>([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/about-us-page`
      );
      const result = await res.json();
      setMenu(result.data);
    };

    fetchMenu();
  }, []);

  return (
    <div className="w-full mb-5">
      <h1 className="text-4xl border-b pb-2 font-semibold">
        เกี่ยวกับ <span className="text-[#16A7CB]">OKMD</span>
      </h1>

      <ul className="space-y-2 mt-4 p-0">
        {menu 
        .filter((item) => ALLOWED_IDS.includes(item.id))
        .map((item) => {
          const href = `/about-okmd/${item.slug}`;
          const isActive = pathname === href;

          return (
            <li key={item.id} className="border-b border-gray-300 list-none ml-[-25px]">
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
