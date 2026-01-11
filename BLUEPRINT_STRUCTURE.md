# OKMD Frontend Blueprint Structure

## Overview

เอกสารนี้ถอดโครงสร้างจาก blueprint ของเว็บไซต์ OKMD เพื่อใช้เป็นแนวทางในการพัฒนาระบบ

**Figma Design Files:**

- **main** = Desktop version ของหน้า home
- **mobile** = Mobile version ของหน้า home

**Figma Link**: https://www.figma.com/design/vZPAT5UaJJJWqkKutRPvPA/OKMD-by-Dev?node-id=0-1&t=ZI8ZzChEvwRa1fBM-1

---

## 1. Layout Structure

### 1.1 Header/Navigation Bar

**Location:** `components/layout/Header.tsx`

**Components:**

- Logo: "okmd" (light blue, lowercase)
- Navigation Menu Items (with dropdowns):
  - รู้จัก OKMD (Know OKMD)
  - ข่าวประชาสัมพันธ์ (Public Relations News)
  - ปฏิทินและกิจกรรม (Calendar and Activities)
  - บริการความรู้ (Knowledge Services)
  - ร่วมงานกับเรา (Work with Us)
  - ติดต่อเรา (Contact Us)
- Utility Bar (Right side):
  - Language selector (Thai flag icon)
  - Font size controls (3 buttons: ก ก ก)
  - Contrast controls (3 buttons: C C C)
  - Tax Benefits button (สิทธิประโยชน์ทางภาษี) - Light blue button

**Styling:**

- White background
- Black text for navigation
- Light blue (#74CEE2) for logo and accents

---

### 1.2 Logo Bar (Partner Organizations)

**Location:** `components/Bar.tsx`

**Logos (Horizontal banner, dark gray background):**

1. สำนักนายกรัฐมนตรี (Office of the Prime Minister) - Circular emblem
2. okmd - Stylized lowercase text
3. TKPark - Bold text with stylized figure
4. MUSeum siam - Circular graphic with stylized figure

**Styling:**

- Dark gray background (#1F1F1F)
- White logos/icons
- Centered, evenly spaced

---

### 1.3 Footer

**Location:** `components/layout/Footer.tsx`

**Structure:**

#### Top Section (Two Columns)

**Left Column:**

- OKMD logo (white)
- Title: "Office of Knowledge Management and Development"
- Contact Information:
  - โทรศัพท์: 0 2105 6500
  - อีเมล: saraban@okmd.or.th

**Right Column:**

- Heading: "ช่องทางติดตาม" (Follow Us)
- Social Media Icons (6 icons):
  - Facebook
  - LINE
  - YouTube
  - TikTok
  - Instagram
  - X (Twitter)
- Button: "รับเรื่องร้องเรียน" (Receive Complaints) - Black button with white text

#### Middle Section (Three Columns)

**Column 1 - เกี่ยวกับ OKMD (Thai):**

- คำรับรองการปฏิบัติงาน (Performance Certification)
- การกำกับการดูแลกิจการ (Corporate Governance)
- แผนการดำเนินงาน (Operational Plan)
- เอกสารและรายงาน (Documents and Reports)
- ศูนย์ข้อมูลข่าวสารอิเล็กทรอนิกส์ของ สบร. (Electronic Information Center)
- คู่มือ / แนวทางการปฏิบัติงาน (Manual / Operational Guidelines)
- ข้อมูลสาธารณะขององค์กร (Public Information)

**Column 2 - OKMD Services (English):**

- OKMD AI
- OKMD Knowledge Portal
- OKMD Magazine

**Column 3 - จัดซื้อจัดจ้าง/ร่วมงาน (Thai):**

- จัดซื้อจัดจ้าง (Procurement)
- สมัครงาน (Job Application)
- ฝึกงาน (Internship)

#### Bottom Section

- Copyright: "ลิขสิทธิ์ © 2547 - 2568 OKMD สำนักงานบริหารและพัฒนาองค์ความรู้ (องค์การมหาชน) สงวนลิขสิทธิ์"
- Links: นโยบายการคุ้มครองส่วนบุคคล | แผนผังเว็บ | นโยบายการใช้คุกกี้

**Styling:**

- Blue gradient background (#16A7CB)
- White text
- Subtle wave patterns overlay

---

## 2. Home Page Sections

### 2.1 Hero Section

**Location:** `components/page/home/Hero.tsx`

**Features:**

- Full-width banner/carousel
- OKMD AI logo
- Title: "AI-Driven intelligence:"
- Subtitle: "Search, summarize, and Recommend in an instant."
- CTA Button: "ดูรายละเอียด"
- Pagination dots

**Styling:**

- Image background
- Dark text overlay
- Light blue accent buttons (#74CEE2)

---

### 2.2 Search Section

**Location:** `components/page/home/Search.tsx`

**Features:**

- Header: "KNOWLEDGE IS OPPORTUNITY"
- Dark container (#1B1D20)
- White search card
- Search input with placeholder
- Search button (light blue circle)
- AI Summary section (shows after search)
- Search results list

---

### 2.3 Highlight Section

**Location:** `components/page/home/Highlight.tsx`

**Structure:**

- Title: "Highlight"
- Subtitle: "ทุกจุดเด่น ถูกยกมาไว้ตรงนี้"

**Desktop Layout (5 cards):**

- **Row 1 (3 cards):**
  - Card 1: Image card with text overlay (gradient)
  - Card 2: Magazine card (white background, "The Knowledge vol.XX")
  - Card 3: OKMD Knowledge Portal card (white background, icon in corner)
- **Row 2 (2 cards):**
  - Card 4: Large image card (landscape)
  - Card 5: Text card with link

**Mobile Layout:**

- Horizontal scrollable cards
- Pagination dots

**Styling:**

- Light blue background (#DFF1F9)
- Rounded corners (rounded-2xl)
- Shadow effects

---

### 2.4 Smart Picks Section

**Location:** `components/page/home/Recommend.tsx`

**Structure:**

- Title: "Smart Picks"
- Subtitle: "เราไม่ได้แค่แนะนำ แต่เรากำหนดนิยามใหม่ให้กับทางเลือก" (Thai)

**Cards (2 columns on desktop):**

- **Card 1 - "Unleash Your Potential":**

  - White background
  - OKMD logo
  - Title: "Unleash Your Potential"
  - Image: Human hand + AI/robotic hand interaction
  - Arrow icon (bottom right)

- **Card 2 - "OKMD KNOWLEDGE PORTAL":**
  - Dark background (library image)
  - Title: "OKMD KNOWLEDGE PORTAL"
  - Subtitle: "Unlock knowledge anywhere you are"
  - Arrow icon (bottom right, white)

**Styling:**

- Dark background (#0F0F0F)
- White text
- Rounded corners
- Hover effects

---

### 2.5 Activity Calendar Section

**Location:** `components/page/home/Activity.tsx`

**Structure:**

- Title: "Activity Calendar"
- Subtitle: "ทุกกิจกรรมคือแรงบันดาลใจ สู่ความคิดที่แตกต่าง"

**Desktop Layout:**

- **Row 1:** 3 activity cards (images with overlays)
- **Row 2:**
  - 2 activity cards (smaller)
  - Calendar widget (large, dark gray background)

**Calendar Widget:**

- Left: Large date display (MONDAY, September, 20)
- Right: Calendar grid (7x6)
- Highlighted dates (current date in light blue)
- Event indicators

**Mobile Layout:**

- Horizontal scrollable activity cards
- Compact calendar widget

**Styling:**

- Light background (#F8FBFD)
- Dark calendar widget (#26282B)
- Activity cards with gradient overlays

---

### 2.6 Knowledge Shelf Section

**Location:** `components/page/home/Knowledge.tsx`

**Structure:**

- Title: "Knowledge Box" / "ตู้ความรู้"

**Layout (Sidebar + Content):**

- **Left Sidebar Menu:**

  - OKMD กระตุกต่อมคิด นิตยสารเพื่อพัฒนาความคิด (OKMD Provokes Thought Magazine)
  - OKMD แนะนำหนังสือดี (OKMD Recommends Good Books)
  - OKMD Infographic
  - OKMD บทความวิจัย (OKMD Research Articles)
  - OKMD Recommended

- **Right Content Area:**
  - Section title (from selected menu)
  - Grid of magazine cards (3 columns on desktop)
  - Pagination

**Magazine Card:**

- Magazine cover image
- Title
- Download info (file size)
- "อ่านเพิ่มเติม" link

**Styling:**

- White background
- Light blue accent (#74CEE2)

---

### 2.7 News Section

**Location:** `components/page/home/NewsSection.tsx`

**Structure:**

- Title: "ข่าวสารและกิจกรรม"
- "ดูทั้งหมด" link (right aligned)

**Grid Layout:**

- 3 columns on desktop
- News cards with:
  - Image
  - Tag badge
  - Date
  - Title
  - Description (excerpt)
  - "อ่านเพิ่มเติม" link

**Styling:**

- White background
- Card shadows
- Hover effects

---

## 3. Color Palette

### Primary Colors

- **Light Blue (OKMD Cyan):** `#74CEE2` / `#16A7CB`
- **Dark Blue:** `#1B1D20`
- **Dark Gray:** `#26282B` / `#1F1F1F`
- **Black:** `#0F0F0F` / `#000000`

### Background Colors

- **White:** `#FFFFFF`
- **Light Blue Background:** `#DFF1F9` / `#F8FBFD`
- **Gray Background:** `#ECECED`

### Text Colors

- **Dark Text:** `#1B1D20`
- **Gray Text:** `#7F8288` / `#898989`
- **White Text:** `#FFFFFF`

---

## 4. Typography

### Font Family

- **Primary:** Kanit (Google Fonts)
- **Weights:** 300, 400, 500, 600, 700
- **Character Sets:** Latin, Thai

### Font Sizes

- **Headings:**
  - H1: `text-4xl` to `text-[56px]`
  - H2: `text-2xl` to `text-4xl`
  - H3: `text-xl` to `text-2xl`
- **Body:** `text-base` to `text-lg`
- **Small Text:** `text-sm` to `text-xs`

---

## 5. Component Patterns

### Cards

- **Rounded corners:** `rounded-xl` to `rounded-2xl`
- **Shadows:** `shadow-[0_4px_16px_rgba(0,0,0,0.06)]`
- **Hover effects:** `hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]`
- **Hover transform:** `hover:-translate-y-1`

### Buttons

- **Primary:** Light blue background (`#74CEE2`)
- **Secondary:** White with border
- **Dark:** Dark background with white text
- **Rounded:** `rounded-xl` to `rounded-full`
- **Hover:** Scale and color transitions

### Links

- **Default:** Blue text (`#16A7CB`)
- **Hover:** Underline and color change
- **Arrow icon:** `↗` or icon component

---

## 6. Spacing & Layout

### Container

- **Max width:** Container class (responsive)
- **Padding:** `px-6 lg:px-10`
- **Section padding:** `py-16 md:py-20`

### Grid Systems

- **12-column grid:** `grid-cols-12`
- **Responsive breakpoints:**
  - Mobile: `grid-cols-1`
  - Tablet: `md:grid-cols-2` or `md:grid-cols-3`
  - Desktop: `lg:grid-cols-3` or `lg:grid-cols-4`

### Gaps

- **Small:** `gap-4` to `gap-6`
- **Medium:** `gap-6` to `gap-8`
- **Large:** `gap-10` to `gap-12`

---

## 7. Interactive Elements

### Dropdowns

- Chevron icon (down arrow)
- Hover states
- Active states

### Pagination

- Dots (for carousels)
- Numbered pages (for lists)
- Previous/Next arrows
- Active state highlighting

### Search

- Input field with border
- Search icon button
- Loading state (spinner)
- Results display

---

## 8. Responsive Design

### Breakpoints

- **Mobile:** < 768px (default)
- **Tablet:** `md:` 768px+
- **Desktop:** `lg:` 1024px+

### Mobile Adaptations

- Single column layouts
- Horizontal scrolling for cards
- Simplified navigation (hamburger menu)
- Stacked footer columns
- Smaller font sizes

---

## 9. Accessibility Considerations

### ARIA Labels

- Navigation landmarks
- Button labels
- Image alt text
- Section labels

### Keyboard Navigation

- Focus states
- Tab order
- Enter/Space for interactions

### Color Contrast

- WCAG AA compliance
- Text contrast ratios
- Interactive element visibility

---

## 10. File Structure Reference

```
components/
├── layout/
│   ├── Header.tsx          # Navigation bar
│   ├── Footer.tsx          # Footer section
│   └── ...
├── page/
│   └── home/
│       ├── Hero.tsx        # Hero banner
│       ├── Search.tsx      # Search section
│       ├── Highlight.tsx   # Highlight cards
│       ├── Recommend.tsx   # Smart Picks
│       ├── Activity.tsx    # Activity Calendar
│       ├── Knowledge.tsx   # Knowledge Shelf
│       └── NewsSection.tsx # News section
└── Bar.tsx                 # Logo bar

app/
├── page.tsx                # Home page
└── layout.tsx              # Root layout
```

---

## 11. Implementation Notes

### Image Optimization

- Use Next.js Image component
- Appropriate sizes attribute
- Lazy loading where applicable

### Performance

- Code splitting
- Lazy loading sections
- Image optimization
- CSS-in-JS or Tailwind CSS

### SEO

- Semantic HTML
- Meta tags
- Structured data
- Alt text for images

---

## 12. Next Steps

1. ✅ Review existing components against blueprint
2. ✅ Update components to match blueprint design
3. ✅ Ensure responsive behavior
4. ✅ Test accessibility
5. ✅ Optimize performance
6. ✅ Add animations/transitions
7. ✅ Implement API integrations
8. ✅ Add error handling
9. ✅ Write tests
10. ✅ Documentation

---

**Last Updated:** Based on blueprint images provided
**Version:** 1.0
