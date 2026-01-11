# 🚀 COMPLETE BLUEPRINT IMPLEMENTATION PLAN

**วันที่:** 2026-01-02  
**เป้าหมาย:** ทุกหน้าต้องเหมือน blueprint 100%  
**Total:** 113 blueprint images ใน 17 categories

---

## 📊 Overview

### Total Progress: 35% → Target: 100%

| Priority | Categories | Images | Status | Target |
|----------|-----------|--------|--------|--------|
| **P1** | Home + Mobile | 30 | 🟢 85% | ✅ 100% |
| **P2** | News, Knowledge, Calendar | 27 | 🟡 40% | ✅ 100% |
| **P3** | Forms & Applications | 30 | 🟡 20% | ✅ 100% |
| **P4** | Information Pages | 26 | 🔴 10% | ✅ 100% |

---

## 🎯 Phase 1: HOME SECTIONS (Priority 1 - CRITICAL)

### Status: 🟢 85% → Target: 100%

**Blueprint Folder:** `blueprint/Home/`, `blueprint/Home Section/`  
**Total Images:** 23 images

### ✅ Completed (15/23)
- [x] main.png - Full homepage desktop
- [x] home_mobile.png - Full homepage mobile
- [x] Upnavbar.png - Desktop navbar
- [x] Upnavbar2.png - Navbar with dropdowns
- [x] Property 1=Uphero.png - Hero section
- [x] Property 1=Default.png - Knowledge Box
- [x] Property 1=Default-1.png - Search section
- [x] UpHighlight.png - Highlight section
- [x] UpRecommended.png - Smart Picks
- [x] UpActivity.png - Activity calendar
- [x] UpNews.png - News section
- [x] Upfooter.png - Footer logos
- [x] UpHome.png - Footer full
- [x] hero.png - Mobile hero (from mobile_home/)
- [x] Upnavbar3.png - Mobile menu

### ⏳ To Do (8/23)
- [ ] UpB.png - ต้องเช็คว่าคืออะไร
- [ ] UpDetail.png - ต้องเช็คว่าคืออะไร
- [ ] Up.png - Event detail card
- [ ] UpActivity-2.png - Activity with events list
- [ ] High.png - Highlight mobile (from mobile_home/)
- [ ] Property 1=2.png - Mobile section
- [ ] Property 1=4927.png - Mobile section
- [ ] Property 1=Frame 1000007421.png - Mobile section

### Action Items:
1. เปิดดูภาพที่เหลือทั้ง 8 ภาพ
2. ระบุว่าแต่ละภาพคือ section ไหน
3. เปรียบเทียบกับ current implementation
4. ปรับแต่งให้ตรง 100%
5. ทดสอบ responsive ทุก breakpoint

**Files to Update:**
- `app/page.tsx` - Home page
- `components/page/home/*.tsx` - All home sections
- `components/layout/Header.tsx` - Navbar
- `components/layout/Footer.tsx` - Footer

---

## 🎯 Phase 2: NEWS (Priority 2)

### Status: 🟡 50% → Target: 100%

**Blueprint Folder:** `blueprint/news/`  
**Total Images:** 2 images

### To Do (2/2)
- [ ] News.png - News listing page
- [ ] News_detail.png - News detail page

### Action Items:
1. เปิดดู News.png และ News_detail.png
2. เปรียบเทียบกับ current pages
3. ปรับ layout, styling, content
4. เพิ่ม error handling ถ้ายังไม่มี
5. ทดสอบ responsive

**Files to Update:**
- `app/(frontend)/news/page.tsx` - Listing
- `app/(frontend)/news/[id]/page.tsx` - Detail
- `components/News.tsx` - News component (if exists)

---

## 🎯 Phase 3: KNOWLEDGE (Priority 2)

### Status: 🟡 50% → Target: 100%

**Blueprint Folder:** `blueprint/knowledge/`  
**Total Images:** 8 images

### To Do (8/8)
- [ ] Book.png - Knowledge listing
- [ ] Book-1.png - Alternative view
- [ ] Book_detail.png - Detail view
- [ ] Book_detail-1.png - Alternative detail
- [ ] knowledge-list-1.png
- [ ] knowledge-list-2.png
- [ ] knowledge-detail-1.png
- [ ] knowledge-detail-2.png

### Action Items:
1. เปิดดูทั้ง 8 ภาพ
2. ระบุความแตกต่างของแต่ละภาพ
3. เปรียบเทียบกับ current implementation
4. ปรับให้ตรงทุกรูปแบบ
5. ทดสอบทุก state

**Files to Update:**
- `app/(frontend)/knowledge/page.tsx` - Listing
- `app/(frontend)/knowledge/[id]/page.tsx` - Detail
- `components/page/home/Knowledge.tsx` - Knowledge section

---

## 🎯 Phase 4: CALENDAR EVENT (Priority 2)

### Status: 🟡 30% → Target: 100%

**Blueprint Folder:** `blueprint/activity_calendar/`, `blueprint/Calendar Event/`, `blueprint/hover-activity_calendar/`  
**Total Images:** 17 images

### To Do (17/17)
- [ ] Calendar of events01.png
- [ ] Calendar of events02.png
- [ ] Calendar of events03.png - Main listing
- [ ] Calendar of events03-1.png
- [ ] Calendar of events03-2.png
- [ ] Calendar of events03-3.png
- [ ] Calendar of events_detail.png - Detail page
- [ ] hover_1.png - Hover state 1
- [ ] hover_1-1.png - Hover state 2
- [ ] hover_1-2.png - Hover state 3
- [ ] hover_1-3.png - Hover state 4
- [ ] hover_1-4.png - Hover state 5
- [ ] (และอีก 5 hover states)

### Action Items:
1. เปิดดูทั้ง 17 ภาพ
2. ระบุ main listing, detail, และ hover states
3. สร้าง/ปรับ calendar listing page
4. สร้าง/ปรับ calendar detail page
5. เพิ่ม hover effects ทั้งหมด
6. ทดสอบ interactions

**Files to Update:**
- `app/(frontend)/calendar-of-event/page.tsx` - Listing
- `app/(frontend)/calendar-of-event/[id]/page.tsx` - Detail
- `components/page/home/Activity.tsx` - Activity section

---

## 🎯 Phase 5: CAREERS / APPLY FOR WORK (Priority 3)

### Status: 🟡 30% → Target: 100%

**Blueprint Folder:** `blueprint/careers/`, `blueprint/Work/`  
**Total Images:** 14 images (7 x 2 folders)

### To Do (14/14)
- [ ] Apply for work.png - Main form
- [ ] Apply for work-1.png - Alternative view
- [ ] Apply for work_Add.png - Add state
- [ ] Apply for work_Edit.png - Edit state
- [ ] Apply for work_delete.png - Delete state
- [ ] Apply for work_record.png - Record view
- [ ] Apply for work_Success.png - Success message
- [ ] (และอีก 7 ภาพจาก folder ที่ 2)

### Action Items:
1. เปิดดูทั้ง 14 ภาพ
2. ระบุทุก state: Add, Edit, Delete, Success
3. สร้าง/ปรับ career application form
4. เพิ่ม state management สำหรับทุก state
5. เพิ่ม validation และ error handling
6. ทดสอบทุก flow

**Files to Update:**
- `app/(frontend)/career/page.tsx` - Listing
- `app/(frontend)/career/[id]/page.tsx` - Detail/Apply

---

## 🎯 Phase 6: COMPLAINT (Priority 3)

### Status: 🟡 40% → Target: 100%

**Blueprint Folder:** `blueprint/complaint/`  
**Total Images:** 7 images

### To Do (7/7)
- [ ] complaint.png - Main page with tabs
- [ ] complaint-1.png - Alternative view
- [ ] complaint form.png - Form view
- [ ] complaint form detail.png - Detail view
- [ ] complaint form detail-1.png - Alternative detail
- [ ] complaint form status.png - Status tracking
- [ ] complaint-upload.png - Upload state

### Action Items:
1. เปิดดูทั้ง 7 ภาพ
2. ระบุ tabs และ states ทั้งหมด
3. สร้าง/ปรับ complaint form
4. เพิ่ม file upload functionality
5. เพิ่ม status tracking
6. ทดสอบทุก tab และ state

**Files to Update:**
- `app/(frontend)/complaint/page.tsx`

---

## 🎯 Phase 7: JOB ANNOUNCEMENT (Priority 3)

### Status: 🔴 0% → Target: 100%

**Blueprint Folder:** `blueprint/job-announcement/`, `blueprint/Job announcement/`  
**Total Images:** 6 images (3 x 2 folders)

### To Do (6/6)
- [ ] Job announcement.png - Listing
- [ ] Job announcement-1.png - Alternative view 1
- [ ] Job announcement-2.png - Alternative view 2
- [ ] (และอีก 3 ภาพจาก folder ที่ 2)

### Action Items:
1. เปิดดูทั้ง 6 ภาพ
2. สร้าง job announcement listing page
3. สร้าง job announcement detail page
4. เพิ่ม error handling
5. ทดสอบ responsive

**Files to Update:**
- `app/(frontend)/job-announcement/page.tsx` - Listing
- `app/(frontend)/job-announcement/[id]/page.tsx` - Detail

---

## 🎯 Phase 8: WORKING / RECRUITMENT (Priority 3)

### Status: 🔴 0% → Target: 100%

**Blueprint Folder:** `blueprint/working/`  
**Total Images:** 2 images

### To Do (2/2)
- [ ] Working_List.png - List view
- [ ] Working Detail.png - Detail view

### Action Items:
1. เปิดดู 2 ภาพ
2. สร้าง recruitment listing page
3. สร้าง recruitment detail page
4. เพิ่ม error handling
5. ทดสอบ responsive

**Files to Update:**
- `app/(frontend)/recruitment/page.tsx` - Listing
- `app/(frontend)/recruitment/[id]/page.tsx` - Detail (if needed)

---

## 🎯 Phase 9: LOGIN (Priority 3)

### Status: 🟡 30% → Target: 100%

**Blueprint Folder:** `blueprint/login/`  
**Total Images:** 1 image

### To Do (1/1)
- [ ] login.png

### Action Items:
1. เปิดดู login.png
2. เปรียบเทียบกับ current login page
3. ปรับ layout, styling
4. เพิ่ม validation และ error handling
5. ทดสอบ login flow

**Files to Update:**
- `app/(frontend)/login/page.tsx`

---

## 🎯 Phase 10: ABOUT OKMD (Priority 4)

### Status: 🔴 0% → Target: 100%

**Blueprint Folder:** `blueprint/about/`  
**Total Images:** 1 image

### To Do (1/1)
- [ ] About us.png

### Action Items:
1. เปิดดู About us.png
2. สร้าง/ปรับ about page
3. เพิ่มเนื้อหาตาม blueprint
4. ทดสอบ responsive

**Files to Update:**
- `app/(frontend)/about-okmd/[page]/page.tsx`

---

## 🎯 Phase 11: POLICY (Priority 4)

### Status: 🔴 0% → Target: 100%

**Blueprint Folder:** `blueprint/policy/`  
**Total Images:** 7 images

### To Do (7/7)
- [ ] policy1.png
- [ ] policy2.png
- [ ] policy3.png
- [ ] policyplan1.png
- [ ] policyplan2.png
- [ ] policyplan3.png
- [ ] policyplan4.png

### Action Items:
1. เปิดดูทั้ง 7 ภาพ
2. สร้างหน้า policy ทั้ง 7 แบบ
3. เพิ่มเนื้อหาตาม blueprint
4. ทดสอบ responsive

**Files to Create/Update:**
- `components/page/aboutokmd/` - Policy components

---

## 🎯 Phase 12: REPORT (Priority 4)

### Status: 🔴 0% → Target: 100%

**Blueprint Folder:** `blueprint/Report/`  
**Total Images:** 7 images

### To Do (7/7)
- [ ] report01.png
- [ ] report02.png
- [ ] report02-1.png
- [ ] report03.png
- [ ] report04.png
- [ ] report05.png
- [ ] report05-1.png

### Action Items:
1. เปิดดูทั้ง 7 ภาพ
2. สร้างหน้า report ทั้ง 7 แบบ
3. เพิ่มเนื้อหาตาม blueprint
4. ทดสอบ responsive

**Files to Create:**
- New report pages

---

## 🎯 Phase 13: RULES (Priority 4)

### Status: 🔴 0% → Target: 100%

**Blueprint Folder:** `blueprint/rules/`  
**Total Images:** 1 image

### To Do (1/1)
- [ ] Rules, regulations, and regulations.png

### Action Items:
1. เปิดดูภาพ
2. สร้างหน้า rules
3. เพิ่มเนื้อหาตาม blueprint
4. ทดสอบ responsive

**Files to Create:**
- New rules page

---

## 🎯 Phase 14: PROCUREMENT (Priority 4)

### Status: 🟡 20% → Target: 100%

**Blueprint Folder:** `blueprint/procurement/`  
**Total Images:** 2 images

### To Do (2/2)
- [ ] Frame 1000007399.png
- [ ] Frame 1000007400.png

### Action Items:
1. เปิดดู 2 ภาพ
2. เปรียบเทียบกับ current pages
3. ปรับให้ตรง 100%
4. ทดสอบ responsive

**Files to Update:**
- `app/(frontend)/procurement/page.tsx`
- `app/(frontend)/procurement/[id]/page.tsx`

---

## 🎯 Phase 15: PDPA (Priority 4)

### Status: 🟡 20% → Target: 100%

**Blueprint Folder:** `blueprint/pdpa/`  
**Total Images:** 1 image

### To Do (1/1)
- [ ] PDPA.png

### Action Items:
1. เปิดดูภาพ
2. เปรียบเทียบกับ current page
3. ปรับให้ตรง 100%
4. ทดสอบ responsive

**Files to Update:**
- `app/(frontend)/pdpa/page.tsx`

---

## 🎯 Phase 16: CONTRACT / CONTACT (Priority 4)

### Status: 🟡 20% → Target: 100%

**Blueprint Folder:** `blueprint/contact/`  
**Total Images:** 1 image

### To Do (1/1)
- [ ] Contract.png

### Action Items:
1. เปิดดูภาพ
2. เปรียบเทียบกับ current page
3. ปรับให้ตรง 100%
4. ทดสอบ responsive

**Files to Update:**
- `app/(frontend)/contract/page.tsx`

---

## 📊 Summary

### Total Work:
- **113 blueprint images**
- **17 categories**
- **~50 pages to create/update**

### Timeline Estimate:
- **Phase 1 (P1):** 4-6 hours - Home sections completion
- **Phase 2-4 (P2):** 8-10 hours - News, Knowledge, Calendar
- **Phase 5-9 (P3):** 12-15 hours - Forms & Applications
- **Phase 10-16 (P4):** 10-12 hours - Information pages
- **Total:** 34-43 hours

### Approach:
1. ทำทีละ phase ตาม priority
2. แต่ละ phase: เปิดดูภาพ → เปรียบเทียบ → ปรับแต่ง → ทดสอบ
3. ทุกหน้าต้องเหมือน blueprint 100%
4. ทุกหน้าต้องมี error handling
5. ทุกหน้าต้อง responsive

---

## 🚀 Next Steps

**ทันที:**
1. เริ่มจาก Phase 1 - ดูภาพที่เหลือใน Home sections
2. ปรับแต่งให้ครบ 100%
3. ทดสอบ responsive

**จากนั้น:**
4. Phase 2 - News
5. Phase 3 - Knowledge
6. Phase 4 - Calendar Event
7. ... ทำต่อไปตาม priority

---

**สถานะ:** ✅ แผนพร้อม - เริ่มทำงานได้เลย!  
**เป้าหมาย:** 100% Blueprint Compliance  
**Method:** ภาพ = blueprint (ต้องเหมือนทุกรายละเอียด)
