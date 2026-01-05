# 🎨 OKMD Design & Blueprint Guide

## 📂 โครงสร้างไฟล์

### 1. Blueprint (Design References)
**ตำแหน่ง:** `/workspace/blueprint/`

ภาพ design จาก Figma ที่ใช้เป็น reference สำหรับการพัฒนา UI

```
/workspace/blueprint/
├── home-section/          # หน้า Homepage ทั้งหมด
│   ├── Upnavbar.png      # Navbar หลัก
│   ├── Upnavbar2.png     # Navbar แบบมี dropdown
│   ├── Upnavbar3.png     # Mobile menu
│   ├── Property 1=Uphero.png  # Hero section
│   ├── UpHighlight.png   # Highlight section
│   ├── UpRecommended.png # Smart Picks section
│   ├── UpActivity.png    # Activity Calendar
│   ├── Property 1=Default.png # Knowledge Box
│   ├── UpNews.png        # News section
│   ├── Upfooter.png      # Footer
│   └── UpHome.png        # Footer (full)
│
├── news/                 # หน้าข่าว
│   ├── News.png         # News listing page
│   └── News_detail.png  # News detail page
│
├── knowledge/            # หน้าตู้ความรู้
│   ├── Book.png         # Knowledge listing
│   └── Book_detail.png  # Knowledge detail
│
├── Calendar Event/       # หน้าปฏิทินกิจกรรม
│   ├── Calendar of events03.png
│   └── Calendar of events_detail.png
│
├── careers/             # หน้าสมัครงาน
│   ├── Apply for work.png
│   ├── Apply for work_Add.png
│   ├── Apply for work_Success.png
│   └── ...
│
├── complaint/           # หน้ารับเรื่องร้องเรียน
│   ├── complaint.png
│   ├── complaint form.png
│   └── complaint form status.png
│
├── about/              # หน้าเกี่ยวกับ OKMD
│   └── About us.png
│
├── policy/             # หน้านโยบาย
│   ├── policy1.png
│   ├── policy2.png
│   └── ...
│
├── Report/             # หน้ารายงาน
│   ├── report01.png
│   └── ...
│
├── procurement/        # หน้าจัดซื้อจัดจ้าง
│   ├── Frame 1000007399.png
│   └── Frame 1000007400.png
│
├── login/              # หน้า Login
│   └── login.png
│
├── pdpa/               # หน้า PDPA
│   └── PDPA.png
│
├── contact/            # หน้าติดต่อ
│   └── Contract.png
│
└── mobile_home/        # Mobile versions
    ├── hero.png
    ├── High.png
    └── ...
```

---

### 2. Public Assets (รูปภาพที่ใช้งานจริง)
**ตำแหน่ง:** `/workspace/public/`

รูปภาพที่ใช้ในเว็บไซต์ (ใช้ใน component)

```
/workspace/public/
├── okmd-2025.png         # Logo หลัก
├── okmd_white.png        # Logo สีขาว (ใช้ใน Footer)
├── okmd_ai_logo.png      # Logo OKMD AI
├── rectangle-689.png     # Hero banner
├── bg_footer.png         # Background footer
│
├── ic-1.png to ic-6.png  # Social media icons
├── menu.png              # Mobile menu icon
├── close.png             # Close icon
├── dropdown.png          # Dropdown arrow
│
├── rec1.png, rec2.png    # Recommend section images
├── act1.png to act5.png  # Activity images
├── kn-1.png to kn-6.png  # Knowledge magazine covers
│
└── [news images]         # ภาพข่าวต่างๆ
```

---

## 🔍 วิธีใช้งาน

### สำหรับนักพัฒนา (Developers)

#### 1. ดู Blueprint Design
```bash
# เปิดดูรูป blueprint ด้วย image viewer
cd /workspace/blueprint/home-section/
# ดูไฟล์ Upnavbar.png, UpHighlight.png, etc.
```

#### 2. ใช้รูปภาพใน Component
```tsx
import Image from "next/image";

// ใช้รูปจาก /public
<Image 
  src="/okmd-2025.png"  // ไม่ต้องใส่ /public/
  width={150}
  height={50}
  alt="OKMD Logo"
/>
```

#### 3. เช็ค Design Compliance
```bash
# เทียบโค้ดกับ blueprint
1. เปิดไฟล์ blueprint ที่ต้องการ
2. เปิดหน้าเว็บใน browser
3. เทียบทุกรายละเอียด:
   - ระยะห่าง (spacing)
   - สี (colors)
   - ฟอนต์ (fonts)
   - ขนาด (sizes)
   - เอฟเฟกต์ (hover, shadow)
```

---

## 📋 Checklist การตรวจสอบ

### Homepage Sections

- [ ] **Navbar** (`blueprint/home-section/Upnavbar.png`)
  - Logo position & size
  - Menu items & spacing
  - Font size & weight
  - Dropdown behavior
  - Mobile menu (`Upnavbar3.png`)

- [ ] **Hero Section** (`Property 1=Uphero.png`)
  - Background image
  - Text positioning
  - Button style
  - Responsive design

- [ ] **Highlight** (`UpHighlight.png`)
  - 5 cards layout (3 top, 2 bottom)
  - Card styles & shadows
  - Image aspect ratios
  - Hover effects

- [ ] **Smart Picks** (`UpRecommended.png`)
  - Dark background (#0F0F0F)
  - 2 cards side-by-side
  - Image overlays
  - Typography

- [ ] **Activity Calendar** (`UpActivity.png`)
  - Event cards layout
  - Calendar widget style
  - Date highlighting

- [ ] **Knowledge Box** (`Property 1=Default.png`)
  - Left menu
  - Magazine display
  - Pagination

- [ ] **News Section** (`UpNews.png`)
  - 3 news cards
  - Card layout
  - "ดูทั้งหมด" link

- [ ] **Footer** (`Upfooter.png`, `UpHome.png`)
  - Logo bar (siam museum, tkpark, etc.)
  - Footer sections
  - Social icons
  - Links & copyright

---

## 🎨 Design Tokens

### Colors (จาก Blueprint)
```css
/* Primary */
--okmd-cyan: #74CEE2
--okmd-cyan-dark: #16A7CB
--okmd-cyan-light: #DFF1F9

/* Neutral */
--dark: #1B1D20
--dark-bg: #0F0F0F
--gray: #7F8288
--light-bg: #F8FBFD

/* Backgrounds */
--bg-highlight: #DFF1F9
--bg-footer: #16A7CB
```

### Typography
```css
Font Family: Kanit (Thai + Latin)
Weights: 300, 400, 500, 600, 700

/* Headings */
H1: 56px / bold
H2: 36-40px / bold
H3: 24-28px / semibold

/* Body */
Base: 16px / normal
Small: 14px / normal
```

### Spacing
```css
Container: max-w-[1200px]
Section padding: py-12 md:py-16 lg:py-20
Card gap: gap-6 lg:gap-8
```

---

## 🚀 Quick Commands

```bash
# ดูรายการ blueprint ทั้งหมด
ls -la /workspace/blueprint/

# ดูรายการรูปภาพ public
ls -la /workspace/public/

# เช็คว่ามีรูปอะไรบ้างใน section ที่ต้องการ
ls /workspace/blueprint/home-section/
ls /workspace/blueprint/news/
ls /workspace/blueprint/knowledge/
```

---

## 📝 หมายเหตุ

1. **Blueprint** คือรูป design จาก Figma (อย่าแก้ไข)
2. **Public** คือรูปภาพที่ใช้งานจริงในเว็บไซต์
3. ชื่อไฟล์ใน blueprint จะบอกว่าเป็น section ไหน
   - `Up` prefix = แต่ละส่วนของหน้า
   - `Property 1=` = Figma component variants
4. ต้องเทียบทุก pixel ให้ตรงกับ blueprint 100%
5. ถ้าเจอส่วนที่ไม่แน่ใจ ให้ดู blueprint อีกครั้ง

---

## 🔗 Related Files

- `BLUEPRINT_COMPLIANCE_REPORT.md` - รายงานความคืบหน้า
- `components/` - React components
- `app/` - Next.js pages
- `tailwind.config.ts` - Tailwind configuration

---

**Last Updated:** 2025-12-28
**Status:** In Development - 70% Complete
