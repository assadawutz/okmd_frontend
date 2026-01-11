"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarNavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

interface SidebarNavProps {
  items: SidebarNavItem[];
  title?: string;
}

export default function SidebarNav({ items, title }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <nav className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      {title && (
        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
          <h2 className="font-semibold text-gray-800">{title}</h2>
        </div>
      )}
      <ul className="py-2">
        {items.map((item, index) => {
          const isActive =
            pathname === item.href || pathname.startsWith(item.href + "/");

          return (
            <li key={index}>
              <Link
                href={item.href}
                className={`
                  flex items-center gap-3 px-4 py-3 transition-all
                  ${
                    isActive
                      ? "bg-[#00ADEF] text-white font-medium"
                      : "text-gray-700 hover:bg-gray-50 hover:text-[#00ADEF]"
                  }
                `}
              >
                {item.icon && (
                  <span
                    className={`flex-shrink-0 ${
                      isActive ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {item.icon}
                  </span>
                )}
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
