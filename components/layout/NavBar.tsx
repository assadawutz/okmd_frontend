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
  );
}
