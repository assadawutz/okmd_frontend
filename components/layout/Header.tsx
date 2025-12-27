"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { createPortal } from "react-dom";

/* ====================================================== */
/*                        HEADER                           */
/* ====================================================== */
export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);

  /* Load settings */
  useEffect(() => {
    try {
      const f = localStorage.getItem("font") || "md";
      const c = localStorage.getItem("contrast") || "normal";
      document.documentElement.setAttribute("data-font", f);
      document.documentElement.setAttribute("data-contrast", c);
    } catch { }
  }, []);

  /* Set header height variable */
  useEffect(() => {
    if (!headerRef.current) return;
    document.documentElement.style.setProperty(
      "--header-h",
      headerRef.current.getBoundingClientRect().height + "px"
    );
  });

  /* Close menu when click outside */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (!t.closest("[data-menubar]") && !t.closest("[data-mega-panel]")) {
        setActive(null);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-[#ECECED] shadow-sm"
      >
        <div className="container mx-auto px-4 lg:px-8 py-3 lg:py-4 flex items-center justify-between">

          {/* ---------------- LOGO ---------------- */}
          <Link href="/" aria-label="OKMD Home" className="flex flex-shrink-0">
            <Image
              src="/okmd-2025.png"
              width={120}
              height={40}
              alt="OKMD Logo"
              priority
              className="object-contain hover:scale-[1.02] transition w-[100px] lg:w-[130px]"
            />
          </Link>

          {/* ---------------- DESKTOP MENU ---------------- */}
          <nav
            data-menubar
            className="hidden lg:flex items-center"
          >
            <ul className="flex gap-6 xl:gap-8 text-[16px] font-medium text-[#1B1D20] whitespace-nowrap">
              <MenuList active={active} setActive={setActive} />
            </ul>
          </nav>

          {/* ---------------- RIGHT TOOLS ---------------- */}
          <RightTools onOpenMenu={() => setOpen(true)} />
        </div>
      </header>

      {/* ---------------- DESKTOP MEGA MENU ---------------- */}
      {typeof window !== "undefined" &&
        createPortal(<MegaMenu active={active} />, document.body)}

      {/* ---------------- MOBILE MENU ---------------- */}
      {open && (
        <MobileMenu
          onClose={() => setOpen(false)}
          active={active}
          setActive={setActive}
        />
      )}
    </>
  );
}

/* ====================================================== */
/*                      MEGA MENU                         */
/* ====================================================== */
function MegaMenu({ active }: { active: string | null }) {
  if (!active) return null;

  const menuData: Record<string, { title: string; items: { label: string; href: string }[] }[]> = {
    "รู้จัก OKMD": [
      {
        title: "เกี่ยวกับองค์กร",
        items: [
          { label: "รู้จัก OKMD", href: "/about-okmd/about-us" },
          { label: "โครงสร้าง OKMD", href: "/about-okmd/structure" },
          { label: "คณะกรรมการและผู้บริหาร", href: "/about-okmd/executives" },
          { label: "ผู้บริหารเทคโนโลยีสารสนเทศ", href: "/about-okmd/cio" },
        ]
      },
      {
        title: "นโยบายและแผน",
        items: [
          { label: "นโยบายการดำเนินงาน", href: "/about-okmd/policy" },
          { label: "แผนการดำเนินงาน", href: "/about-okmd/plan" },
          { label: "คำรับรองการปฏิบัติงาน", href: "/about-okmd/acceptance" },
          { label: "การกำกับดูแลกิจการ", href: "/about-okmd/governance" },
        ]
      },
      {
        title: "รายงาน",
        items: [
          { label: "รายงานผลการปฏิบัติงาน", href: "/about-okmd/outcome-report" },
          { label: "รายงานผลการดำเนินงาน", href: "/about-okmd/operational-plan" },
          { label: "รายงานประจำปี", href: "/about-okmd/annual-report" },
          { label: "งบการเงิน", href: "/about-okmd/financial-statements" },
        ]
      },
    ],
    "ข่าวประชาสัมพันธ์": [
      {
        title: "ข่าวสาร",
        items: [
          { label: "ข่าวทั้งหมด", href: "/news" },
          { label: "ข่าวองค์กร", href: "/news-corporate" },
          { label: "ข่าวเผยแพร่", href: "/news-release" },
        ]
      },
    ],
    "บริการความรู้": [
      {
        title: "คลังความรู้",
        items: [
          { label: "ตู้ความรู้", href: "/knowledge" },
          { label: "OKMD กระตุกต่อมคิด", href: "/knowledge" },
          { label: "OKMD Infographic", href: "/knowledge" },
          { label: "OKMD บทความวิจัย", href: "/knowledge" },
        ]
      },
    ],
    "ร่วมงานกับเรา": [
      {
        title: "สมัครงาน",
        items: [
          { label: "ตำแหน่งงานว่าง", href: "/career" },
          { label: "ประกาศผู้ผ่านการคัดเลือก", href: "/job-announcement" },
          { label: "ฝึกงาน", href: "/career" },
        ]
      },
    ],
  };

  const data = menuData[active];
  if (!data) return null;

  return (
    <div
      data-mega-panel
      className="fixed left-0 top-[var(--header-h)] w-full bg-white shadow-lg border-t border-gray-200 z-40"
    >
      <div className="container mx-auto px-6 lg:px-10 py-8">
        <div className="grid grid-cols-3 gap-8">
          {data.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-lg font-bold text-[#16A7CB] mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.href}
                      className="text-[15px] text-[#1B1D20] hover:text-[#16A7CB] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ====================================================== */
/*                   MENU LIST / MENU ITEM                */
/* ====================================================== */
function MenuList({
  active,
  setActive,
}: {
  active: string | null;
  setActive: (a: string | null) => void;
}) {
  const menus = [
    { label: "รู้จัก OKMD", hasDropdown: true },
    { label: "ข่าวประชาสัมพันธ์", hasDropdown: true },
    { label: "ปฏิทินกิจกรรม", href: "/calendar-of-event" },
    { label: "บริการความรู้", hasDropdown: true },
    { label: "ร่วมงานกับเรา", hasDropdown: true },
    { label: "ติดต่อเรา", href: "/complaint" },
  ];

  return (
    <>
      {menus.map((m) => (
        <MenuItem
          key={m.label}
          label={m.label}
          active={active}
          setActive={setActive}
          href={m.href}
          hasDropdown={m.hasDropdown}
        />
      ))}
    </>
  );
}

function MenuItem({
  label,
  active,
  setActive,
  href,
  hasDropdown,
}: {
  label: string;
  active: string | null;
  setActive: (a: string | null) => void;
  href?: string;
  hasDropdown?: boolean;
}) {
  const isOpen = active === label;

  /* LINK MODE */
  if (href && !hasDropdown) {
    return (
      <li>
        <Link
          href={href}
          className="flex items-center gap-1 cursor-pointer group text-[16px] font-medium transition py-2"
        >
          <span className="relative">
            {label}
            <span className="absolute left-0 -bottom-[2px] h-[2px] w-0 bg-[#74CEE2] group-hover:w-full transition-all"></span>
          </span>
        </Link>
      </li>
    );
  }

  /* DROPDOWN MODE */
  return (
    <li>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setActive(isOpen ? null : label);
        }}
        className="flex items-center gap-1.5 cursor-pointer group text-[16px] font-medium transition py-2"
      >
        <span className="relative">
          {label}
          <span className={`absolute left-0 -bottom-[2px] h-[2px] transition-all ${isOpen ? 'w-full bg-[#74CEE2]' : 'w-0 bg-[#74CEE2] group-hover:w-full'}`}></span>
        </span>

        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </li>
  );
}

/* ====================================================== */
/*                     MOBILE MENU                        */
/* ====================================================== */
function MobileMenu({
  onClose,
}: {
  onClose: () => void;
  active?: string | null;
  setActive?: (a: string | null) => void;
}) {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const menuItems = [
    {
      label: "รู้จัก OKMD",
      subItems: [
        { label: "รู้จัก OKMD", href: "/about-okmd/about-us" },
        { label: "โครงสร้าง OKMD", href: "/about-okmd/structure" },
        { label: "คณะกรรมการและผู้บริหาร", href: "/about-okmd/executives" },
        { label: "นโยบายการดำเนินงาน", href: "/about-okmd/policy" },
        { label: "รายงาน", href: "/about-okmd/reports" },
      ]
    },
    { label: "ข่าวประชาสัมพันธ์", href: "/news" },
    { label: "ปฏิทินกิจกรรม", href: "/calendar-of-event" },
    { label: "บริการความรู้", href: "/knowledge" },
    { label: "ร่วมงานกับเรา", href: "/career" },
    { label: "ติดต่อเรา", href: "/complaint" },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 bg-black/40 z-[60] animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="absolute w-full top-0 bg-white shadow-xl p-6 animate-slideDown max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* close */}
        <div className="flex justify-end mb-6">
          <button onClick={onClose} className="p-2">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <ul className="flex flex-col text-[18px] font-medium text-[#1B1D20] gap-1">
          {menuItems.map((item) => (
            <li key={item.label} className="border-b border-gray-100 last:border-0">
              {item.subItems ? (
                <>
                  <button
                    onClick={() => setExpandedMenu(expandedMenu === item.label ? null : item.label)}
                    className="flex justify-between items-center w-full py-4"
                  >
                    {item.label}
                    <svg
                      className={`w-5 h-5 transition-transform ${expandedMenu === item.label ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedMenu === item.label && (
                    <ul className="pb-4 pl-4 space-y-3">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.label}>
                          <Link
                            href={subItem.href}
                            onClick={onClose}
                            className="text-[16px] text-gray-600 hover:text-[#16A7CB]"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={item.href || "#"}
                  onClick={onClose}
                  className="flex justify-between items-center py-4"
                >
                  {item.label}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* donate */}
        <Link href="/donation" onClick={onClose}>
          <button className="mt-8 w-full bg-[#74CEE2] text-white text-[18px] font-bold py-3.5 rounded-xl active:scale-95 transition">
            Donate
          </button>
        </Link>
      </div>
    </div>
  );
}

/* ====================================================== */
/*                  RIGHT TOOLBAR                          */
/* ====================================================== */
function RightTools({ onOpenMenu }: { onOpenMenu: () => void }) {
  const applyFont = (size: "sm" | "md" | "lg") => {
    document.documentElement.setAttribute("data-font", size);
    localStorage.setItem("font", size);
  };

  const applyContrast = (mode: "normal" | "dark" | "high") => {
    document.documentElement.setAttribute("data-contrast", mode);
    localStorage.setItem("contrast", mode);
  };

  return (
    <div className="flex items-center gap-3 lg:gap-4">

      {/* LANGUAGE SELECTOR */}
      <div className="hidden lg:flex items-center gap-2">
        <Image src="/th-flag.svg" width={24} height={16} alt="Thai" className="object-contain" />
        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* FONT SIZE */}
      <div className="hidden lg:flex items-center gap-1.5">
        <button
          onClick={() => applyFont("sm")}
          className="w-7 h-7 rounded bg-[#F1FAFC] flex justify-center items-center text-[12px] cursor-pointer font-medium hover:bg-[#E2F6FA] transition"
          aria-label="Small font"
        >
          ก
        </button>
        <button
          onClick={() => applyFont("md")}
          className="w-7 h-7 rounded bg-[#F1FAFC] flex justify-center items-center text-[15px] cursor-pointer font-semibold hover:bg-[#E2F6FA] transition"
          aria-label="Medium font"
        >
          ก
        </button>
        <button
          onClick={() => applyFont("lg")}
          className="w-7 h-7 rounded bg-[#F1FAFC] flex justify-center items-center text-[18px] cursor-pointer font-semibold hover:bg-[#E2F6FA] transition"
          aria-label="Large font"
        >
          ก
        </button>
      </div>

      {/* CONTRAST */}
      <div className="hidden lg:flex items-center gap-1.5">
        <button
          onClick={() => applyContrast("normal")}
          className="w-7 h-7 rounded bg-[#F1FAFC] text-[#1E1E1E] font-bold flex justify-center items-center cursor-pointer hover:ring-2 hover:ring-[#1E1E1E]/20 transition text-[13px]"
          aria-label="Normal contrast"
        >
          C
        </button>

        <button
          onClick={() => applyContrast("dark")}
          className="w-7 h-7 rounded bg-[#1E1E1E] text-white font-bold flex justify-center items-center cursor-pointer hover:ring-2 hover:ring-black/30 transition text-[13px]"
          aria-label="Dark contrast"
        >
          C
        </button>

        <button
          onClick={() => applyContrast("high")}
          className="w-7 h-7 rounded bg-[#1E1E1E] text-[#FFD13F] font-bold flex justify-center items-center cursor-pointer hover:ring-2 hover:ring-[#FFD13F]/30 transition text-[13px]"
          aria-label="High contrast"
        >
          C
        </button>
      </div>

      {/* DONATE BUTTON */}
      <Link href="/donation" className="hidden lg:block">
        <button
          aria-label="Donate"
          className="bg-[#74CEE2] text-white rounded-full px-6 py-2.5 text-[15px] cursor-pointer font-semibold hover:bg-[#5FC4D8] active:scale-95 transition shadow-sm"
        >
          Donate
        </button>
      </Link>

      {/* MOBILE MENU BUTTON */}
      <button
        aria-label="Open menu"
        className="lg:hidden p-2 active:scale-90"
        onClick={onOpenMenu}
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  );
}
