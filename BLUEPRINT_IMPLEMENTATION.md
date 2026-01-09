# OKMD Frontend Blueprint Implementation Guide

## สรุปการถอดโครงสร้าง Blueprint

เอกสารนี้สรุปการถอดโครงสร้าง blueprint จากภาพที่ให้มาและวิธีการนำไปใช้งาน

---

## 1. ไฟล์ที่สร้างขึ้น

### 1.1 BLUEPRINT_STRUCTURE.md
เอกสารหลักที่ถอดโครงสร้างทั้งหมดจาก blueprint รวมถึง:
- Layout Structure (Header, Footer, Logo Bar)
- Home Page Sections (Hero, Search, Highlight, Smart Picks, Activity, Knowledge, News)
- Color Palette
- Typography
- Component Patterns
- Spacing & Layout
- Responsive Design
- Accessibility Considerations
- File Structure Reference

### 1.2 การอัปเดตคอมโพเนนต์

#### components/page/home/Recommend.tsx
อัปเดตให้ตรงกับ blueprint:
- เปลี่ยน subtitle เป็น "เราไม่ได้แค่แนะนำ แต่เรากำหนดนิยามใหม่ให้กับทางเลือก"
- ปรับโครงสร้าง cards ให้มี 2 แบบ:
  - Card 1: White background card with "OKMD", "Unleash", "Your Potential"
  - Card 2: Dark background card with "OKMD KNOWLEDGE PORTAL", "Unlock knowledge anywhere you are"

---

## 2. โครงสร้างหลักของเว็บไซต์

### 2.1 Layout Hierarchy

```
Root Layout (app/layout.tsx)
├── Header (components/layout/Header.tsx)
├── Main Content
│   └── Home Page (app/page.tsx)
│       ├── Hero Section
│       ├── Search Section
│       ├── Highlight Section
│       ├── Smart Picks Section (Recommend)
│       ├── Activity Calendar Section
│       ├── Knowledge Shelf Section
│       └── News Section
├── Logo Bar (components/Bar.tsx)
└── Footer (components/layout/Footer.tsx)
```

### 2.2 Components Mapping

| Blueprint Section | Component File | Status |
|------------------|----------------|--------|
| Header/Navigation | `components/layout/Header.tsx` | ✅ Existing |
| Logo Bar | `components/Bar.tsx` | ✅ Existing |
| Footer | `components/layout/Footer.tsx` | ✅ Existing |
| Hero Section | `components/page/home/Hero.tsx` | ✅ Existing |
| Search Section | `components/page/home/Search.tsx` | ✅ Existing |
| Highlight Section | `components/page/home/Highlight.tsx` | ✅ Existing |
| Smart Picks | `components/page/home/Recommend.tsx` | ✅ Updated |
| Activity Calendar | `components/page/home/Activity.tsx` | ✅ Existing |
| Knowledge Shelf | `components/page/home/Knowledge.tsx` | ✅ Existing |
| News Section | `components/page/home/NewsSection.tsx` | ✅ Existing |

---

## 3. Color System จาก Blueprint

### Primary Colors
```css
--okmd-cyan: #74CEE2 / #16A7CB
--okmd-dark: #1B1D20
--okmd-dark-gray: #26282B
--okmd-black: #0F0F0F
```

### Background Colors
```css
--okmd-light-blue: #DFF1F9 / #F8FBFD
--okmd-gray: #ECECED
--okmd-white: #FFFFFF
```

### Usage
- **Light Blue (#74CEE2 / #16A7CB)**: Primary accent, buttons, links
- **Dark (#1B1D20)**: Headings, important text
- **Dark Gray (#26282B)**: Calendar widget, dark sections
- **Black (#0F0F0F)**: Smart Picks background, high contrast sections

---

## 4. Typography System

### Font Family
- **Font**: Kanit (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Character Sets**: Latin, Thai

### Font Sizes
- **H1**: `text-4xl` to `text-[56px]` (Hero titles)
- **H2**: `text-2xl` to `text-4xl` (Section titles)
- **H3**: `text-xl` to `text-2xl` (Subsection titles)
- **Body**: `text-base` to `text-lg`
- **Small**: `text-sm` to `text-xs`

---

## 5. Component Patterns

### 5.1 Cards

**Standard Card:**
```tsx
<div className="
  bg-white rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.06)]
  hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]
  hover:-translate-y-1
  transition-all duration-300
">
```

**Image Card with Overlay:**
```tsx
<div className="relative overflow-hidden rounded-2xl">
  <Image src={...} fill className="object-cover" />
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
  <div className="absolute bottom-4 left-4 right-4 text-white">
    {/* Content */}
  </div>
</div>
```

### 5.2 Buttons

**Primary Button:**
```tsx
<button className="
  bg-[#74CEE2] hover:bg-[#5FC4D8]
  text-white
  px-6 py-3 rounded-xl
  font-medium
  transition-all hover:scale-105
">
```

**Secondary Button:**
```tsx
<button className="
  bg-white/20 border border-white
  text-white
  px-6 py-3 rounded-xl
  hover:bg-white/30
  transition-all
">
```

### 5.3 Links

**Standard Link:**
```tsx
<a className="
  text-[#16A7CB]
  hover:text-[#1384A2]
  hover:underline underline-offset-4
  transition-all
">
  Link Text
  <span>↗</span>
</a>
```

---

## 6. Responsive Breakpoints

### Tailwind Breakpoints
- **Mobile**: Default (< 768px)
- **Tablet**: `md:` (768px+)
- **Desktop**: `lg:` (1024px+)

### Layout Adaptations

**Desktop:**
- Multi-column grids (2-3 columns)
- Larger font sizes
- Full navigation menu
- Side-by-side layouts

**Tablet:**
- 2-column grids
- Medium font sizes
- Collapsible navigation
- Stacked layouts for some sections

**Mobile:**
- Single column layouts
- Horizontal scrolling for cards
- Hamburger menu
- Smaller font sizes
- Stacked footer columns

---

## 7. การใช้งาน Blueprint Structure

### 7.1 สำหรับ Developer

1. **อ่าน BLUEPRINT_STRUCTURE.md** เพื่อทำความเข้าใจโครงสร้างทั้งหมด
2. **ตรวจสอบ components ที่มีอยู่** ว่าได้ implement ตาม blueprint แล้วหรือยัง
3. **อัปเดต components** ให้ตรงกับ blueprint design
4. **ทดสอบ responsive behavior** บนทุก device sizes
5. **ตรวจสอบ accessibility** ตาม WCAG guidelines

### 7.2 สำหรับ Designer

1. **ใช้ BLUEPRINT_STRUCTURE.md** เป็น reference สำหรับ design specifications
2. **ตรวจสอบ color palette** และ typography system
3. **ตรวจสอบ spacing และ layout patterns**
4. **ให้ feedback** หากมีส่วนที่ต้องปรับปรุง

### 7.3 สำหรับ Project Manager

1. **ใช้เอกสารนี้** เพื่อ tracking progress
2. **ตรวจสอบ checklist** ของ components
3. **ติดตามการอัปเดต** ตาม blueprint

---

## 8. Checklist สำหรับ Implementation

### Layout Components
- [x] Header/Navigation Bar
- [x] Logo Bar (Partner Organizations)
- [x] Footer

### Home Page Sections
- [x] Hero Section
- [x] Search Section
- [x] Highlight Section
- [x] Smart Picks Section (Updated)
- [x] Activity Calendar Section
- [x] Knowledge Shelf Section
- [x] News Section

### Design System
- [x] Color Palette
- [x] Typography
- [x] Component Patterns
- [x] Spacing System
- [x] Responsive Design

### Quality Assurance
- [ ] Accessibility Testing
- [ ] Cross-browser Testing
- [ ] Performance Optimization
- [ ] SEO Optimization
- [ ] Mobile Testing

---

## 9. Next Steps

### Immediate Actions
1. ✅ สร้างเอกสาร blueprint structure
2. ✅ อัปเดต Smart Picks section
3. ⏳ Review และอัปเดต components อื่นๆ ให้ตรงกับ blueprint
4. ⏳ เพิ่ม animations และ transitions
5. ⏳ ทำ accessibility audit
6. ⏳ Performance optimization

### Future Enhancements
1. เพิ่ม API integrations
2. เพิ่ม error handling
3. เพิ่ม loading states
4. เพิ่ม testing suite
5. เพิ่ม documentation
6. เพิ่ม Storybook components

---

## 10. References

- **Blueprint Images**: Provided design mockups
- **Component Files**: `components/` directory
- **Page Files**: `app/` directory
- **Main Blueprint Doc**: `BLUEPRINT_STRUCTURE.md`

---

## 11. Notes

- Blueprint structure ถอดจากภาพ design ที่ให้มา
- Components ส่วนใหญ่มีอยู่แล้วใน codebase
- จำเป็นต้อง review และปรับปรุงให้ตรงกับ blueprint design
- Responsive design เป็นสิ่งสำคัญ
- Accessibility ต้องให้ความสำคัญ

---

**Created**: Based on blueprint images provided
**Last Updated**: After blueprint structure extraction
**Version**: 1.0
