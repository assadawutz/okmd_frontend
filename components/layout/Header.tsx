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
    } catch {}
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
            <ul className="flex gap-6 text-[16px] font-medium text-[#1B1D20] whitespace-nowrap">
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

  const MENU_CONTENT: Record<string, string[]> = {
    "รู้จัก OKMD": [
      "เกี่ยวกับองค์กร",
      "นโยบายการดำเนินงาน",
      "แผนการดำเนินงาน",
      "โครงสร้าง OKMD",
      "คณะกรรมการและคู่มือบริหาร",
      "รายงาน",
      "ศูนย์ช่วยเหลือ",
      "คณุรองการจัดจ้าง สบธ.",
      "คู่มือ / แนวทางการปฏิบัติงาน",
      "การเปิดเผยข้อมูลสาธารณะ",
      "คู้มริดีมนุศีสทธิอิเล็กทรอนิกส์",
    ],
    ข่าวประชาสัมพันธ์: ["ข่าว OKMD", "OKMD Knowledge Portal", "OKMD Magazine"],
    บริการความรู้: ["จัดซื้อจัดจ้าง", "สมัครงาน", "ฝึกงาน"],
  };

  const items = MENU_CONTENT[active] || [];

  return (
    <div
      data-mega-panel
      className="fixed left-0 top-[var(--header-h)] w-full bg-white shadow-lg border-t border-gray-200 z-40"
    >
      <div className="container mx-auto py-8">
        <h3 className="text-xl font-semibold text-[#16A7CB] mb-6 border-b border-[#16A7CB] pb-2">
          {active}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {items.map((item) => (
            <Link
              key={item}
              href="#"
              className="py-3 px-4 rounded-lg hover:bg-gray-50 text-left text-[15px] font-normal text-[#1B1D20] transition flex items-center gap-2"
            >
              <span className="text-[#16A7CB]">›</span>
              {item}
            </Link>
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
    { label: "ปฏิทินและกิจกรรม", href: "/calendar-of-event" },
    { label: "บริการความรู้", hasDropdown: true },
    { label: "ติดต่อเรา", href: "/contract" },
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
          className="flex items-center gap-1 cursor-pointer group text-[16px] font-medium transition"
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
        className="flex items-center gap-1 cursor-pointer group text-[16px] font-medium transition"
      >
        <span className="relative">
          {label}
          <span className={`absolute left-0 -bottom-[2px] h-[2px] transition-all ${isOpen ? 'w-full bg-[#74CEE2]' : 'w-0 bg-[#74CEE2] group-hover:w-full'}`}></span>
        </span>

        {hasDropdown && (
          <Image
            src="/dropdown.png"
            width={16}
            height={16}
            alt=""
            className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        )}
      </button>
    </li>
  );
}

/* ====================================================== */
/*                     MOBILE MENU                        */
/* ====================================================== */
function MobileMenu({
  onClose,
  active,
  setActive,
}: {
  onClose: () => void;
  active?: string | null;
  setActive?: (a: string | null) => void;
}) {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const MOBILE_MENUS = [
    {
      label: "รู้จัก OKMD",
      items: [
        "เกี่ยวกับองค์กร",
        "นโยบายการดำเนินงาน",
        "แผนการดำเนินงาน",
        "โครงสร้าง OKMD",
      ],
    },
    {
      label: "นโยบายการดำเนินงาน",
      hasDropdown: true,
    },
    {
      label: "แผนการดำเนินงาน",
      hasDropdown: true,
    },
    {
      label: "โครงสร้าง OKMD",
    },
    {
      label: "คณะกรรมการและคู่มือบริหาร",
      hasDropdown: true,
    },
    {
      label: "การรองการจัดจ้าง",
      hasDropdown: true,
    },
    {
      label: "การกำกับดูแลกิจการ",
      hasDropdown: true,
    },
    {
      label: "รายงาน",
      hasDropdown: true,
    },
    {
      label: "กฎ ระเบียบ ข้อบังคับ",
    },
    {
      label: "ศูนย์ข้อมูลข่าวสารอิเล็กทรอนิกส์ของ สบธ.",
    },
    {
      label: "คู่มือ / แนวทางการปฏิบัติงาน",
    },
    {
      label: "การเปิดเผยข้อมูลสาธารณะ",
    },
    {
      label: "คู้มริดีมนุศีสทธิอิเล็กทรอนิกส์",
    },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 bg-black/40 z-[60] animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="absolute w-full h-full top-0 bg-white shadow-xl overflow-y-auto animate-slideDown"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white z-10 border-b border-gray-200 p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-[#1B1D20]">
              เกี่ยวกับ <span className="text-[#16A7CB]">OKMD</span>
            </h2>
            <button onClick={onClose} className="p-2">
              <Image src="/close.png" width={24} height={24} alt="close" />
            </button>
          </div>
        </div>

        {/* Menu Items */}
        <div className="p-6 pt-4">
          <div className="mb-6">
            <Link
              href="/about-okmd/about-us"
              className="block py-3 text-[16px] font-medium text-[#16A7CB] border-b border-[#16A7CB]"
            >
              รู้จัก OKMD
            </Link>
          </div>

          <ul className="flex flex-col text-[16px] font-normal text-[#1B1D20] divide-y divide-gray-200">
            {MOBILE_MENUS.map((menu, idx) => (
              <li key={idx}>
                {menu.hasDropdown ? (
                  <button
                    onClick={() =>
                      setExpandedMenu(
                        expandedMenu === menu.label ? null : menu.label
                      )
                    }
                    className="flex justify-between items-center w-full py-4 text-left"
                  >
                    {menu.label}
                    <Image
                      src="/dropdown.png"
                      width={16}
                      height={16}
                      alt=""
                      className={`transition-transform ${
                        expandedMenu === menu.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <a
                    href="#"
                    className="flex justify-between items-center py-4"
                  >
                    {menu.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function MobileItem({ label, href }: { label: string; href?: string }) {
  if (href)
    return (
      <Link
        href={href}
        className="flex justify-between items-center text-[22px] font-medium"
      >
        {label}
        <Image src="/dropdown.png" width={20} height={20} alt="" />
      </Link>
    );

  return (
    <li className="flex justify-between items-center">
      {label}
      <Image src="/dropdown.png" width={20} height={20} alt="" />
    </li>
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
    <div className="flex items-center  lg:items-end gap-4 ml-4">
      {/* DESKTOP TOOLBAR */}
      <div className="hidden lg:flex flex-col items-end">
        {/* ROW 1 */}
        <div className="flex items-center gap-7 mb-2">
          {/* FONT SIZE */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => applyFont("sm")}
              className="w-8 h-8 rounded bg-[#F1FAFC] flex justify-center items-center text-[13px] cursor-pointer font-medium hover:bg-[#E2F6FA]"
            >
              ก
            </button>
            <button
              onClick={() => applyFont("md")}
              className="w-8 h-8 rounded bg-[#F1FAFC] flex justify-center items-center text-[17px] cursor-pointer font-semibold hover:bg-[#E2F6FA]"
            >
              ก
            </button>
            <button
              onClick={() => applyFont("lg")}
              className="w-8 h-8 rounded bg-[#F1FAFC] flex justify-center items-center text-[21px] cursor-pointer font-semibold hover:bg-[#E2F6FA]"
            >
              ก
            </button>
          </div>

          {/* CONTRAST */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => applyContrast("normal")}
              className="w-8 h-8 rounded bg-[#F1FAFC] text-[#1E1E1E] font-bold flex justify-center items-center cursor-pointer hover:ring-2 hover:ring-[#1E1E1E]/30"
            >
              C
            </button>

            <button
              onClick={() => applyContrast("dark")}
              className="w-8 h-8 rounded bg-[#1E1E1E] text-white font-bold flex justify-center items-center cursor-pointer hover:ring-2 hover:ring-black/50"
            >
              C
            </button>

            <button
              onClick={() => applyContrast("high")}
              className="w-8 h-8 rounded bg-[#1E1E1E] text-[#FFD13F] font-bold flex justify-center items-center cursor-pointer hover:ring-2 hover:ring-[#FFD13F]/50"
            >
              C
            </button>
          </div>
        </div>

        {/* ROW 2 — DONATE */}
        <Link href="/donation">
          <button
            aria-label="Donate"
            className="bg-[#74CEE2] text-white rounded-xl w-[118px] h-11 text-[17px] cursor-pointer font-semibold hover:bg-[#5FC4D8] active:scale-95 transition shadow-sm focus:outline-none focus:ring-2 focus:ring-[#74CEE2] focus:ring-offset-2"
          >
            บริจาค
          </button>
        </Link>
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
