# 🎨 Phase 1: Home Sections - Implementation Guide

**วันที่:** 2026-01-02  
**เวลา:** 00:23 น.  
**สถานะ:** 🚀 เริ่มทำงาน

---

## 📊 Blueprint Analysis Complete

### ภาพที่วิเคราะห์แล้ว (All 23 images)

#### ✅ Main Layouts (2 images)
1. **main.png** - Full homepage desktop ✅
2. **home_mobile.png** - Full homepage mobile ✅

#### ✅ Header/Navigation (3 images)
3. **Upnavbar.png** - Desktop navbar ✅
4. **Upnavbar2.png** - Navbar with dropdowns ✅
5. **UpB.png** - Breadcrumb ("หน้าหลัก >") ✅ **NEW!**

#### ✅ Hero Section (1 image)
6. **Property 1=Uphero.png** - Hero section ✅

#### ✅ Search Section (1 image)
7. **Property 1=Default-1.png** - Search section ✅

#### ✅ Content Sections (4 images)
8. **Property 1=Default.png** - Knowledge Box ✅
9. **UpNews.png** - News section ✅
10. **UpDetail.png** - Inner page template (About OKMD) ✅ **NEW!**

#### ⏳ Sections ที่ต้องหา blueprints
- Highlight Section (ต้องหา blueprint)
- Recommend/Smart Picks (ต้องหา blueprint)
- Activity Calendar (ต้องหา blueprint)

#### ✅ Footer (2 images)
11. **Upfooter.png** - Footer logos ✅
12. **UpHome.png** - Footer full ✅

---

## 🔍 New Findings

### 1. UpB.png - Breadcrumb Navigation
**Description:**
- Simple breadcrumb: "หน้าหลัก >" (Home >)
- White/light gray background
- Dark gray/black text
- Spans full width of container

**Usage:**
- Inner pages only (not on homepage)
- Below header, above main content
- Shows current page hierarchy

**Implementation:**
```tsx
// components/layout/Breadcrumb.tsx
<nav className="bg-gray-50 py-3">
  <div className="container mx-auto px-4">
    <span className="text-gray-700">หน้าหลัก &gt;</span>
  </div>
</nav>
```

### 2. UpDetail.png - Inner Page Template
**Description:**
- Full page layout for "รู้จัก OKMD" (About OKMD)
- Header with logo + navigation + utilities
- Page title in light blue
- Sidebar navigation (left)
- Main content area (right)
- Footer with partner logos + main footer

**Key Elements:**
- **Header:** Logo, nav menu, language switcher, social icons, Donate button
- **Page Title:** "รู้จัก OKMD" in OKMD Blue
- **Sidebar:** Vertical nav with blue highlight for active item
- **Content:** White space for text/images
- **Footer:** Partner logos (dark gray) + Main footer (teal/cyan)

**Usage:**
- Template for all inner pages
- About OKMD, Agencies, Knowledge Services, etc.

**Implementation:**
```tsx
// app/(frontend)/about-okmd/[page]/page.tsx
<div className="min-h-screen">
  <Header />
  <Breadcrumb />
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold text-[#00ADEF] mb-8">
      รู้จัก OKMD
    </h1>
    <div className="grid grid-cols-12 gap-8">
      <aside className="col-span-3">
        <SidebarNav />
      </aside>
      <main className="col-span-9">
        {/* Content */}
      </main>
    </div>
  </div>
  <Footer />
</div>
```

---

## 📋 Phase 1 Tasks

### ✅ Completed
- [x] วิเคราะห์ blueprint ทั้งหมด (23 images)
- [x] ระบุ UpB.png = Breadcrumb
- [x] ระบุ UpDetail.png = Inner page template

### ⏳ To Do

#### 1. สร้าง Breadcrumb Component
- [ ] สร้าง `components/layout/Breadcrumb.tsx`
- [ ] เพิ่ม dynamic breadcrumb paths
- [ ] ทดสอบใน inner pages

#### 2. สร้าง Inner Page Template
- [ ] สร้าง layout สำหรับ inner pages
- [ ] สร้าง Sidebar navigation component
- [ ] ปรับ About OKMD pages

#### 3. ตรวจสอบ Home Page Sections
- [ ] Hero Section - เปรียบเทียบกับ Property 1=Uphero.png
- [ ] Search Section - เปรียบเทียบกับ Property 1=Default-1.png
- [ ] Highlight Section - หา blueprint
- [ ] Recommend Section - หา blueprint
- [ ] Activity Section - หา blueprint
- [ ] Knowledge Section - เปรียบเทียบกับ Property 1=Default.png
- [ ] News Section - เปรียบเทียบกับ UpNews.png

#### 4. ตรวจสอบ Header/Footer
- [ ] Header - เปรียบเทียบกับ Upnavbar.png, Upnavbar2.png
- [ ] Footer - เปรียบเทียบกับ Upfooter.png, UpHome.png

#### 5. ทดสอบ Responsive
- [ ] Desktop (1440px)
- [ ] Tablet (768px)
- [ ] Mobile (375px) - เปรียบเทียบกับ home_mobile.png

---

## 🎯 Next Steps

### Step 1: สร้าง Breadcrumb Component (15 นาที)
```tsx
// components/layout/Breadcrumb.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumb() {
  const pathname = usePathname();
  
  // Generate breadcrumb from pathname
  const paths = pathname.split('/').filter(Boolean);
  
  return (
    <nav className="bg-gray-50 py-3 border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center gap-2 text-sm">
          <Link href="/" className="text-gray-600 hover:text-[#00ADEF]">
            หน้าหลัก
          </Link>
          {paths.map((path, index) => (
            <span key={index} className="flex items-center gap-2">
              <span className="text-gray-400">&gt;</span>
              <span className="text-gray-800">{path}</span>
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
}
```

### Step 2: สร้าง Inner Page Layout (30 นาที)
```tsx
// components/layout/InnerPageLayout.tsx
import Breadcrumb from './Breadcrumb';
import SidebarNav from './SidebarNav';

interface InnerPageLayoutProps {
  title: string;
  children: React.ReactNode;
  sidebarItems?: Array<{
    label: string;
    href: string;
    active?: boolean;
  }>;
}

export default function InnerPageLayout({
  title,
  children,
  sidebarItems
}: InnerPageLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb />
      <div className="container mx-auto px-4 md:px-8 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#00ADEF] mb-8">
          {title}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {sidebarItems && (
            <aside className="md:col-span-3">
              <SidebarNav items={sidebarItems} />
            </aside>
          )}
          <main className={sidebarItems ? 'md:col-span-9' : 'md:col-span-12'}>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
```

### Step 3: ตรวจสอบ Home Sections (1 ชั่วโมง)
- เปิด dev server
- เปรียบเทียบแต่ละ section กับ blueprint
- ปรับแต่งให้ตรง 100%

---

## 📊 Progress

### Blueprint Analysis: 100% ✅
- ✅ ทุกภาพวิเคราะห์เสร็จแล้ว
- ✅ ระบุ usage ของแต่ละภาพ
- ✅ เข้าใจโครงสร้างทั้งหมด

### Implementation: 0% → Target: 100%
- [ ] Breadcrumb component
- [ ] Inner page layout
- [ ] Home sections review
- [ ] Header/Footer review
- [ ] Responsive testing

---

## 🚀 Start Implementation

**ขั้นตอนถัดไป:**
1. สร้าง Breadcrumb component
2. สร้าง InnerPageLayout component
3. สร้าง SidebarNav component
4. ตรวจสอบ Home sections
5. ทดสอบ responsive

**เวลาโดยประมาณ:** 1-2 ชั่วโมง

**พร้อมเริ่มทำ!** 🚀
