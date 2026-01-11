# All Pages & Routes - Complete List

## Overview
รายการทุกหน้าและ route ในระบบ เพื่อเปรียบเทียบกับ Figma

---

## Routes List (28 routes)

### 1. Home
- **Route**: `/`
- **File**: `app/page.tsx`
- **Component**: HomePage (Server Component)
- **Sections**: Hero, Search, Highlight, Smart Picks, Activity, Knowledge, News

### 2. About OKMD (Dynamic)
- **Route**: `/about-okmd/[page]`
- **File**: `app/(frontend)/about-okmd/[page]/page.tsx`
- **Component**: AboutOkmd
- **Dynamic pages**: vision-mission, board, organization, etc.

### 3. Calendar of Event - List
- **Route**: `/calendar-of-event`
- **File**: `app/(frontend)/calendar-of-event/page.tsx`
- **Component**: CalendarEventListPage

### 4. Calendar of Event - Detail
- **Route**: `/calendar-of-event/[id]`
- **File**: `app/(frontend)/calendar-of-event/[id]/page.tsx`
- **Component**: CalendarEventDetailPage

### 5. Career - List
- **Route**: `/career`
- **File**: `app/(frontend)/career/page.tsx`
- **Component**: Career

### 6. Career - Detail
- **Route**: `/career/[id]`
- **File**: `app/(frontend)/career/[id]/page.tsx`
- **Component**: CareerDetailPage

### 7. Complaint
- **Route**: `/complaint`
- **File**: `app/(frontend)/complaint/page.tsx`
- **Component**: ComplaintPage
- **Sections**: Channels, Form, Track, Report, Files

### 8. Contract
- **Route**: `/contract`
- **File**: `app/(frontend)/contract/page.tsx`
- **Component**: Contract

### 9. Donation - List
- **Route**: `/donation`
- **File**: `app/(frontend)/donation/page.tsx`
- **Component**: Donation

### 10. Donation - Detail
- **Route**: `/donation/[id]`
- **File**: `app/(frontend)/donation/[id]/page.tsx`
- **Component**: DonationAmountSelector
- **Steps**: Amount → Receipt → Confirm

### 11. Job Announcement - List
- **Route**: `/job-announcement`
- **File**: `app/(frontend)/job-announcement/page.tsx`
- **Component**: JobAnnouncementPage

### 12. Job Announcement - Detail
- **Route**: `/job-announcement/[id]`
- **File**: `app/(frontend)/job-announcement/[id]/page.tsx`
- **Component**: JobAnnouncementDetailPage

### 13. Knowledge - List
- **Route**: `/knowledge`
- **File**: `app/(frontend)/knowledge/page.tsx`
- **Component**: KnowledgePage
- **Categories**: magazine, recommend, infographic, research, recommended

### 14. Knowledge - Detail
- **Route**: `/knowledge/[id]`
- **File**: `app/(frontend)/knowledge/[id]/page.tsx`
- **Component**: KnowledgeDetailPage

### 15. Login
- **Route**: `/login`
- **File**: `app/(frontend)/login/page.tsx`
- **Component**: Login

### 16. News - List
- **Route**: `/news`
- **File**: `app/(frontend)/news/page.tsx`
- **Component**: NewsPage
- **Categories**: announce, org

### 17. News - Detail
- **Route**: `/news/[id]`
- **File**: `app/(frontend)/news/[id]/page.tsx`
- **Component**: NewsDetailPage

### 18. News Corporate - List
- **Route**: `/news-corporate`
- **File**: `app/(frontend)/news-corporate/page.tsx`
- **Component**: NewsCorporatePage

### 19. News Corporate - Detail
- **Route**: `/news-corporate/[id]`
- **File**: `app/(frontend)/news-corporate/[id]/page.tsx`
- **Component**: NewsCorporateDetailPage

### 20. News Release - List
- **Route**: `/news-release`
- **File**: `app/(frontend)/news-release/page.tsx`
- **Component**: NewsReleasePage

### 21. News Release - Detail
- **Route**: `/news-release/[id]`
- **File**: `app/(frontend)/news-release/[id]/page.tsx`
- **Component**: NewsReleaseDetailPage

### 22. PDPA
- **Route**: `/pdpa`
- **File**: `app/(frontend)/pdpa/page.tsx`
- **Component**: PDPA

### 23. Procurement - List
- **Route**: `/procurement`
- **File**: `app/(frontend)/procurement/page.tsx`
- **Component**: ProcureMent
- **Filters**: search, type, status, method, dates

### 24. Procurement - Detail
- **Route**: `/procurement/[id]`
- **File**: `app/(frontend)/procurement/[id]/page.tsx`
- **Component**: ProcureMentDetail

### 25. Recruitment - Announcement
- **Route**: `/recruitment/announcement`
- **File**: `app/(frontend)/recruitment/announcement/page.tsx`
- **Component**: RecruitmentAnnouncementPage

### 26. Recruitment - Apply
- **Route**: `/recruitment/apply`
- **File**: `app/(frontend)/recruitment/apply/page.tsx`
- **Component**: RecruitmentApplyPage

### 27. Recruitment - Detail
- **Route**: `/recruitment/detail`
- **File**: `app/(frontend)/recruitment/detail/page.tsx`
- **Component**: RecruitmentDetailPage

### 28. Recruitment - List
- **Route**: `/recruitment/list`
- **File**: `app/(frontend)/recruitment/list/page.tsx`
- **Component**: RecruitmentListPage

---

## Layout Components

### Header
- **File**: `components/layout/Header.tsx`
- **Features**: Logo, menu, mega menu, mobile menu, tools

### Footer
- **File**: `components/layout/Footer.tsx`
- **Features**: Contact info, social media, navigation links

### Logo Bar
- **File**: `components/Bar.tsx`
- **Features**: Partner organization logos

---

## Summary

**Total Routes**: 28 routes  
**Total Pages**: 28 pages  
**Layout Components**: 3 (Header, Footer, LogoBar)

---

## For Figma Comparison

ต้องการทราบจาก Figma:

1. **Frames List**: มีกี่ frames? ชื่ออะไร?
2. **Route Mapping**: Frame ไหน map กับ route ไหน?
3. **Missing Pages**: มีหน้าไหนใน Figma ที่ยังไม่มี?
4. **Extra Pages**: มีหน้าไหนใน codebase ที่ไม่มีใน Figma?
5. **Design Specs**: Spacing, typography, colors, dimensions

---

**Last Updated**: Current  
**Version**: 1.0

