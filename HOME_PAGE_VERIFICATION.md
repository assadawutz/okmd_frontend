# Home Page Verification - Main & Mobile



## Section Order (ตาม app/page.tsx)

1. Hero Section
2. Search Section
3. Highlight Section
4. Smart Picks Section (Recommend)
5. Activity Calendar Section
6. Knowledge Box Section
7. News Section

---

## Verification Status

### ✅ 1. Hero Section
**File:** `components/page/home/Hero.tsx`
**Status:** ✅ Implemented

**Desktop (main):**
- ✅ Full-width banner with carousel
- ✅ OKMD AI logo (72x72px)
- ✅ Title: "AI-Driven intelligence:"
- ✅ Subtitle: "Search, summarize, and Recommend in an instant."
- ✅ CTA Button: "ดูรายละเอียด"
- ✅ Pagination dots
- ✅ Height: h-[520px] lg:h-[560px]

**Mobile:**
- ✅ Carousel slider

- ✅ Height: h-[280px] sm:h-[320px]
- ✅ Text positioning (bottom)
- ✅ Responsive font sizes
- ✅ Mobile pagination

**Notes:** 
- Component structure matches blueprint
- Responsive design implemented
- Uses proper container and spacing

---

### ✅ 2. Search Section
**File:** `components/page/home/Search.tsx`
**Status:** ✅ Implemented

**Desktop (main):**
- ✅ Header: "KNOWLEDGE IS OPPORTUNITY"
- ✅ Dark container (#1B1D20)
- ✅ White search card
- ✅ Search input with placeholder
- ✅ Search button (light blue circle)
- ✅ AI Summary section (conditional)
- ✅ Search results list

**Mobile:**
- ✅ Responsive padding and spacing
- ✅ Mobile-friendly input sizing
- ✅ Stacked layout

**Notes:**
- Uses client component (has state/interaction)
- Proper responsive design
- Matches blueprint structure

---

### ✅ 3. Highlight Section
**File:** `components/page/home/Highlight.tsx`
**Status:** ✅ Implemented & Updated

**Desktop (main):**
- ✅ Title: "Highlight"
- ✅ Subtitle: "ทุกจุดเด่น ถูกยกมาไว้ตรงนี้"
- ✅ Background: #DFF1F9
- ✅ Row 1: 3 cards (grid-cols-12, col-span-4 each)
  - Card 1: Image with gradient overlay
  - Card 2: Magazine card (white background)
  - Card 3: OKMD card (white background, icon)
- ✅ Row 2: 2 cards (col-span-8, col-span-4)
  - Card 4: Large landscape image
  - Card 5: Image with text overlay
- ✅ Card height: h-[320px] lg:h-[340px]
- ✅ Gap: gap-6 lg:gap-8
- ✅ Shadows and hover effects

**Mobile:**
- ✅ Carousel slider 
- ✅ Card width: w-[85vw] max-w-[340px]
- ✅ Card height: h-[300px]
- ✅ Snap scrolling
- ✅ Pagination dots

**Notes:**
- Layout matches blueprint (5 cards: 3+2)
- Grid system: grid-cols-12
- Proper responsive design

---

### ✅ 4. Smart Picks Section
**File:** `components/page/home/Recommend.tsx`
**Status:** ✅ Implemented & Updated

**Desktop (main):**
- ✅ Title: "Smart Picks"
- ✅ Subtitle: "เราไม่ได้แค่แนะนำ แต่เรากำหนดนิยามใหม่ให้กับทางเลือก"
- ✅ Background: #0F0F0F (dark)
- ✅ 2-column grid (md:grid-cols-2)
- ✅ Card 1: White background, "OKMD", "Unleash", "Your Potential"
- ✅ Card 2: Dark background, "OKMD KNOWLEDGE PORTAL", "Unlock knowledge anywhere you are"
- ✅ Arrow icons (bottom right)
- ✅ Card heights: h-[280px] sm:h-[320px] md:h-[380px] lg:h-[400px]

**Mobile:**
- ✅ Single column (grid-cols-1)
- ✅ Responsive card heights
- ✅ Stacked layout

**Notes:**
- Subtitle updated to match blueprint
- 2-card layout matches design
- Proper card variants (light/dark)

---

### ✅ 5. Activity Calendar Section
**File:** `components/page/home/Activity.tsx`
**Status:** ✅ Implemented

**Desktop (main):**
- ✅ Title: "Activity Calendar"
- ✅ Subtitle: "ทุกกิจกรรมคือแรงบันดาลใจ สู่ความคิดที่แตกต่าง"
- ✅ Background: #F8FBFD
- ✅ Row 1: 3 activity cards (grid-cols-3)
- ✅ Row 2: 2 activity cards (col-span-3) + Calendar widget (col-span-6)
- ✅ Calendar widget: Dark background (#26282B)
- ✅ Date display: Large on left, grid on right
- ✅ Highlighted dates

**Mobile:**
- ✅ Horizontal scrollable activity cards
- ✅ Card width: w-[80vw] max-w-[320px]
- ✅ Compact calendar widget
- ✅ Responsive date display

**Notes:**
- Grid system: grid-cols-12
- Calendar widget matches blueprint
- Proper responsive design

---

### ✅ 6. Knowledge Shelf Section
**File:** `components/page/home/Knowledge.tsx`
**Status:** ✅ Implemented

**Desktop (main):**
- ✅ Title: "ตู้ ความรู้"
- ✅ Sidebar menu (left, col-span-3)
  - OKMD กระตุกต่อมคิด นิตยสารเพื่อพัฒนาความคิด
  - OKMD แนะนำหนังสือดี
  - OKMD Infographic
  - OKMD บทความวิจัย
  - OKMD Recommended
- ✅ Content area (right, col-span-9)
- ✅ Magazine cards grid (3 columns)
- ✅ Pagination

**Mobile:**
- ✅ Stacked layout (sidebar above content)
- ✅ Single column cards
- ✅ Responsive menu

**Notes:**
- Grid system: grid-cols-12
- Sidebar + content layout matches blueprint
- Proper separation of concerns

---

### ✅ 7. News Section
**File:** `components/page/home/NewsSection.tsx`
**Status:** ✅ Implemented

**Desktop (main):**
- ✅ Title: "ข่าวสารและกิจกรรม"
- ✅ "ดูทั้งหมด" link (right aligned)
- ✅ 3-column grid (lg:grid-cols-3)
- ✅ News cards with:
  - Image
  - Tag badge
  - Date
  - Title
  - Description
  - "อ่านเพิ่มเติม" link

**Mobile:**
- ✅ Single column layout
- ✅ Card stacking
- ✅ Responsive image sizes

**Notes:**
- Matches blueprint structure
- Proper responsive design
- Card layout matches design

---

## Common Patterns Verified

### Container System 
✅ All sections use: `container mx-auto px-4 sm:px-6 md:px-8 lg:px-10`
✅ Grid system: `grid grid-cols-12` where needed
✅ Max-width: 1440px (via container class)

### Responsive Design
✅ Mobile-first approach (base → sm → md → lg)
✅ Proper breakpoints:
- base: < 640px (mobile)
- sm: ≥ 640px
- md: ≥ 768px (tablet)
- lg: ≥ 1024px (desktop)

### Styling
✅ Colors match blueprint:
- OKMD Cyan: #74CEE2 / #16A7CB
- Dark: #1B1D20
- Backgrounds: #DFF1F9, #F8FBFD, #0F0F0F
✅ Border radius: rounded-2xl (16px)
✅ Shadows: Matching blueprint specs
✅ Typography: Kanit font, proper weights

---

กฎการป้องกันภาพบิดเบี้ยว (Anti-Distortion & Capping)

Viewport Constraints: ไม่ว่าความกว้างหน้าจอจะใหญ่เพียงใด (3xl ถึง 7xl) ต้อง ล็อกความกว้างของ Content Block ภายในไว้ที่ md:w-2xl (672px) สำหรับส่วนเนื้อหาหลักเพื่อให้เนื้อหาไม่แผ่กระจายจนเสียรูป

Internal Spanning Rule: สำหรับรายการเนื้อหา (Content Lists) ให้ใช้ grid grid-cols-1 sm:grid-cols-3 (มือถือ 1 คอลัมน์ / ตั้งแต่ sm ขึ้นไปเป็น 3 คอลัมน์คงที่)

Aspect Ratio: บังคับใช้ aspect-video หรือ aspect-square สำหรับรูปภาพและการ์ดเพื่อป้องกันการยืด/เบี้ยว

Gap Control: ระยะห่างระหว่าง Block บนเดสก์ท็อปต้องอยู่ระหว่าง gap-8 ถึง gap-12 เท่านั้น


ห้าม เพิ่ม UI หรือไอคอนที่ไม่ได้อยู่ในภาพดีไซน์

กฎระดับอะตอมและการโต้ตอบ (Atomic & Interactivity)

Typography Hierarchy:

Mobile: text-base (Body) / text-2xl (Heading)

Desktop (md+): text-lg (Body) / text-3xl (Heading)

Line-Height: บังคับใช้ leading-relaxed สำหรับ Paragraph เสมอ

Interactivity:

ต้องมี cursor-pointer และ transition-all duration-200 ในทุกจุดโต้ตอบ

ปุ่มและการ์ดต้องใช้ active:scale-[0.98] สำหรับ tactile feedback

Data & Validation: ข้อมูล Input ทั้งหมดต้องตรวจสอบผ่าน Schema-based (Zod) และแยก Logic ที่ยาวเกิน 10 บรรทัดออกไปไว้ใน Custom Hooks


Enforcement: ให้ AI และ Developer ยึดไฟล์นี้เป็นข้อยุติสูงสุดในการทำงาน ห้ามปรับแต่ง UI เกินขอบเขตของดีไซน์

## Component Architecture

### Server vs Client Components
✅ Pages are Server Components by default
✅ Components use "use client" ONLY when needed (state/interaction)

### Service Layer
✅ Data fetching in services (lib/services/)
✅ Components handle presentation only
✅ Proper separation of concerns

---

## Next Steps (If Needed)

1. **Compare with Figma Design:**
   - Open Figma frames: `main` (desktop) and `mobile`
   - Compare spacing, sizes, colors
   - Verify exact pixel values

2. **Pixel Perfect Adjustments:**
   - If discrepancies found, update exact values
   - Maintain existing structure and layout
   - Do NOT change UX/UI elements

3. **Testing:**
   - Test on multiple devices
   - Verify responsive behavior
   - Check accessibility

---

## Questions for Figma Verification

หากต้องการให้ทำ pixel perfect:

1. **Spacing Values:**
   - Exact padding values (px)?
   - Exact gap values (px)?
   - Exact margin values (px)?

2. **Typography:**
   - Exact font sizes (px)?
   - Exact line heights?
   - Exact letter spacing?

3. **Dimensions:**
   - Exact card heights (px)?
   - Exact container widths?
   - Exact image sizes?

4. **Colors:**
   - Exact hex codes?
   - Exact opacity values?

---

**Last Updated**: When verification was done  
**Version**: 1.0
