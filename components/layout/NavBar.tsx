<<<<<<< HEAD
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { createPortal } from "react-dom";

/* ====================================================== */
/*                        HEADER (FINAL)                  */
/* ====================================================== */
export default function NavBar() {
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
        <div className="container mx-auto px-4 lg:px-0 py-4 flex items-center justify-between">

          {/* ---------------- LOGO ---------------- */}
          <Link href="/" aria-label="OKMD Home" className="flex">
            <Image
              src="/okmd-2025.png"
              width={150}
              height={50}
              alt="OKMD Logo"
              priority
              className="object-contain hover:scale-[1.04] transition"
            />
          </Link>

          {/* ---------------- DESKTOP MENU ---------------- */}
          <nav
            data-menubar
            className="hidden lg:flex absolute left-1/2 -translate-x-1/2"
          >
            <ul className="flex gap-7 text-[18px] font-semibold text-[#1B1D20] whitespace-nowrap">
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

  /* ถ้าเมนูนี้เป็นลิงก์ → ไม่ต้องแสดงเมกาเมนู */
  if (active === "ตู้ความรู้") return null;

  return (
    <div
      data-mega-panel
      className="fixed left-0 top-[var(--header-h)] w-full bg-white shadow-lg border-t border-gray-200 z-10"
    >
      <div className="container mx-auto px-6 lg:px-10 py-8">
        <h3 className="text-2xl font-semibold text-[#1B1D20] mb-6">
          {active}
        </h3>

        <div className="grid grid-cols-3 gap-4">
          {["เมนูย่อย A1", "เมนูย่อย A2", "เมนูย่อย A3"].map((t) => (
             <button
              key={t}
              className="py-3 px-4 rounded-lg hover:bg-gray-50 text-left text-[17px] font-medium text-[#1B1D20] transition"
            >
              {t}
            </button>
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
    { label: "รู้จัก OKMD", href: "/about-okmd/about-us" },
    { label: "ตู้ความรู้", href: "/knowledge" },
    { label: "ข่าวและกิจกรรม", href: "/news" },
    { label: "ปฏิทินกิจกรรม", href: "/calendar-of-event" },
    { label: "OKMD AI", href: "#" },
    { label: "Knowledge Portal", href: "#" },
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
}: {
  label: string;
  active: string | null;
  setActive: (a: string | null) => void;
  href?: string;
}) {
  const isOpen = active === label;

  /* ======================= LINK MODE ======================= */
  if (href) {
    return (
      <li>
        <Link
          href={href}
          className="flex items-center gap-1 cursor-pointer group text-[18px] font-medium transition"
        >
          <span className="relative">
            {label}
            <span className="absolute left-0 -bottom-[3px] h-[3px] w-0 bg-[#74CEE2] group-hover:w-full transition-all"></span>
          </span>
        </Link>
      </li>
    );
  }

  /* ==================== DROPDOWN MODE ==================== */
  return (
    <li>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setActive(isOpen ? null : label);
        }}
        className="flex items-center gap-1 cursor-pointer group text-[18px] font-medium transition"
      >
        <span className="relative">
          {label}
          <span className="absolute left-0 -bottom-[3px] h-[3px] w-0 bg-[#74CEE2] group-hover:w-full transition-all"></span>
        </span>

        <Image
          src="/dropdown.png"
          width={16}
          height={16}
          alt=""
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
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
  active: string | null;
  setActive: (a: string | null) => void;
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 bg-black/40 z-[60] animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="absolute w-full top-0 bg-white shadow-xl p-7 animate-slideDown"
        onClick={(e) => e.stopPropagation()}
      >
        {/* close */}
        <div className="flex justify-end mb-8">
          <button onClick={onClose} className="p-2">
            <Image src="/close.png" width={28} height={28} alt="close" />
          </button>
        </div>

        <ul className="flex flex-col text-[22px] font-medium text-[#1B1D20] gap-7">
          <MobileItem label="รู้จัก OKMD"href="/about-okmd/about-us" />
          <MobileItem label="ตู้ความรู้" href="/knowledge" />
          <MobileItem label="ข่าวและกิจกรรม" />
          <MobileItem label="ปฏิทินกิจกรรม" />
          <MobileItem label="OKMD AI" />
          <MobileItem label="Knowledge Portal" />
          <MobileItem label="ติดต่อเรา" />
        </ul>

        {/* donate */}
       <Link href="/donation">
        <button className="mt-10 w-full bg-[#74CEE2] text-white text-[20px] font-bold py-3 rounded-xl active:scale-95 transition">
          บริจาค 
        </button>
       </Link>
      </div>
    </div>
  );
}

function MobileItem({
  label,
  href,
}: {
  label: string;
  href?: string;
}) {
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
/*                  RIGHT TOOLBAR (FINAL FIX)             */
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
          className="bg-[#74CEE2] text-white rounded-xl w-[118px] h-11 text-[17px] cursor-pointer font-semibold hover:bg-[#5FC4D8] active:scale-95 transition shadow-sm"
        >
          บริจาค
        </button>
        </Link>
      </div>

      {/* MOBILE MENU BUTTON */}
      <button
        aria-label="Open menu"
        className="lg:hidden p-2 active:scale-90"
        onClick={onOpenMenu}
      >
        <Image src="/menu.png" width={38} height={38} alt="menu" />
      </button>
    </div>
=======
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-4xl font-bold text-primary">okmd</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {/* รู้จัก OKMD */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-primary transition-colors">
                <span>รู้จัก OKMD</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* ข่าวประชาสัมพันธ์ */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-primary transition-colors">
                <span>ข่าวประชาสัมพันธ์</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* ปฏิทินและกิจกรรม */}
            <Link href="/calendar-of-event" className="text-gray-700 hover:text-primary transition-colors">
              ปฏิทินและกิจกรรม
            </Link>

            {/* บริการความรู้ */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-primary transition-colors">
                <span>บริการความรู้</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* รวมงานกับเรา */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-primary transition-colors">
                <span>รวมงานกับเรา</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* ติดต่อเรา */}
            <Link href="/contract" className="text-gray-700 hover:text-primary transition-colors">
              ติดต่อเรา
            </Link>
          </div>

          {/* Right Side Controls */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Selector */}
            <button className="flex items-center gap-1 text-gray-700 hover:text-primary">
              <Image src="/images/th-flag.png" alt="TH" width={24} height={16} className="rounded" />
              <ChevronDown className="w-4 h-4" />
            </button>

            {/* Font Size */}
            <div className="flex items-center gap-1">
              <button className="text-gray-600 hover:text-primary text-sm">ก</button>
              <button className="text-gray-600 hover:text-primary text-base">ก</button>
              <button className="text-gray-600 hover:text-primary text-lg">ก</button>
              <button className="text-gray-600 hover:text-primary text-xl">ก</button>
            </div>

            {/* Contrast Toggle */}
            <div className="flex items-center gap-1">
              <button className="w-8 h-8 bg-white border-2 border-gray-300 rounded hover:border-primary"></button>
              <button className="w-8 h-8 bg-black rounded hover:ring-2 hover:ring-primary"></button>
            </div>

            {/* Login Button */}
            <Link
              href="/login"
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors"
            >
              สมัครประโยชน์ภาครัฐ
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <Link href="/about-okmd" className="text-gray-700 hover:text-primary">
                รู้จัก OKMD
              </Link>
              <Link href="/news" className="text-gray-700 hover:text-primary">
                ข่าวประชาสัมพันธ์
              </Link>
              <Link href="/calendar-of-event" className="text-gray-700 hover:text-primary">
                ปฏิทินและกิจกรรม
              </Link>
              <Link href="/knowledge" className="text-gray-700 hover:text-primary">
                บริการความรู้
              </Link>
              <Link href="/career" className="text-gray-700 hover:text-primary">
                รวมงานกับเรา
              </Link>
              <Link href="/contract" className="text-gray-700 hover:text-primary">
                ติดต่อเรา
              </Link>
              <Link
                href="/login"
                className="bg-primary text-white px-6 py-2 rounded-lg text-center hover:bg-primary-dark"
              >
                สมัครประโยชน์ภาครัฐ
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
>>>>>>> ee32eab149ccab6503beca1a3e6544424290e66f
  );
}
