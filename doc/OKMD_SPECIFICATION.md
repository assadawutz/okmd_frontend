# OKMD Web Project Specification

> Complete Guide for OKMD (Office of Knowledge Management and Development) Web Application
> Version: 1.0.0 | Last Updated: December 2025

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Architecture](#architecture)
4. [Design System](#design-system)
5. [Coding Standards](#coding-standards)
6. [Component Structure](#component-structure)
7. [ResponsiveView Pattern](#responsiveview-pattern)
8. [MobileSlider Implementation](#mobileslider-implementation)
9. [Component Examples](#component-examples)
10. [Dependencies](#dependencies)
11. [Development Workflow](#development-workflow)
12. [Best Practices](#best-practices)
13. [Complete Checklist](#complete-checklist)

---

## 🎯 Project Overview

OKMD Web is a modern government organization website built with Next.js 14+, implementing the **FF2S OMEGA Architecture** pattern for optimal responsive design and user experience.

### Key Features

- 📱 **Mobile-First Responsive Design** - Swiper carousel for mobile, Grid layout for desktop
- 🏛️ **Government Information Portal** - News, Events, Careers, Procurement, Knowledge Base
- ♿ **Accessibility Focused** - WCAG 2.1 AA compliance
- 🚀 **Performance Optimized** - Server-side rendering, image optimization
- 🎨 **Consistent Design System** - Thai government UI standards with modern UX

### Target Audience

- Citizens seeking government services
- Job seekers looking for career opportunities
- Organizations interested in procurement
- General public accessing knowledge resources

---

## 🛠️ Tech Stack

### Core Technologies

```typescript
{
  "framework": "Next.js 14+",
  "runtime": "React 18+",
  "language": "TypeScript 5+",
  "styling": "Tailwind CSS 3+",
  "icons": "Lucide React",
  "carousel": "Swiper.js 11+",
  "fonts": "IBM Plex Sans Thai",
  "package-manager": "npm"
}
```

### Key Libraries

| Library | Version | Purpose |
|---------|---------|---------|
| **next** | ^14.0.0 | React framework with SSR |
| **react** | ^18.0.0 | UI library |
| **typescript** | ^5.0.0 | Type safety |
| **tailwindcss** | ^3.4.0 | Utility-first CSS |
| **lucide-react** | ^0.400.0+ | Icon library |
| **swiper** | ^11.0.0 | Mobile carousel |
| **framer-motion** | latest | Animations (optional) |

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks (optional)
- **TypeScript** - Static type checking

---

## 🏗️ Architecture

### FF2S OMEGA Architecture

**FF2S** stands for **Functional, Fast, Scalable, Secure** and **OMEGA** represents the comprehensive approach to web development.

#### Core Principles

1. **Functional Components Only** - No class components
2. **Named Exports** - Better tree-shaking and imports
3. **Type Safety** - TypeScript everywhere
4. **Server Components First** - Use client components sparingly
5. **Responsive by Design** - Mobile-first approach

#### Project Structure

```
/workspace/
├── app/                          # Next.js App Router
│   ├── (frontend)/              # Public-facing routes
│   │   ├── about-okmd/         # About pages
│   │   ├── calendar-of-event/  # Event calendar
│   │   ├── career/             # Career opportunities
│   │   ├── complaint/          # Complaint system
│   │   ├── contract/           # Contract information
│   │   ├── donation/           # Donation system
│   │   ├── job-announcement/   # Job postings
│   │   ├── knowledge/          # Knowledge base
│   │   ├── login/              # Authentication
│   │   ├── news/               # News articles
│   │   ├── news-corporate/     # Corporate news
│   │   ├── news-release/       # Press releases
│   │   ├── pdpa/               # Privacy policy
│   │   ├── procurement/        # Procurement info
│   │   └── recruitment/        # Recruitment system
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Homepage
│   └── globals.css             # Global styles
├── components/                  # Reusable components
│   ├── layout/                 # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── NavBar.tsx
│   │   └── SideBar.tsx
│   ├── page/                   # Page-specific components
│   │   ├── home/
│   │   ├── aboutokmd/
│   │   ├── CalendarEvent/
│   │   └── ...
│   └── ui/                     # UI primitives
│       ├── Button.tsx
│       ├── Input.tsx
│       └── Select.tsx
├── lib/                        # Utilities and services
│   └── services/               # API services
├── data/                       # Static data
├── public/                     # Static assets
└── blueprint/                  # Design files

```

#### File Naming Conventions

- **Components**: `PascalCase.tsx` (e.g., `HeroSection.tsx`)
- **Pages**: `page.tsx` (Next.js convention)
- **Utilities**: `camelCase.ts` (e.g., `formatDate.ts`)
- **Services**: `kebab-case.service.ts` (e.g., `news.service.ts`)
- **Types**: `PascalCase.types.ts` (e.g., `News.types.ts`)

---

## 🎨 Design System

### Color Palette

#### Primary Colors

```typescript
const colors = {
  primary: {
    DEFAULT: '#1E3A8A',    // Blue-900 - Main brand color
    light: '#3B82F6',      // Blue-500
    dark: '#1E40AF',       // Blue-800
  },
  secondary: {
    DEFAULT: '#DC2626',    // Red-600 - Accent color
    light: '#EF4444',      // Red-500
    dark: '#991B1B',       // Red-800
  },
  accent: {
    DEFAULT: '#F59E0B',    // Amber-500 - Highlights
    light: '#FCD34D',      // Amber-300
    dark: '#D97706',       // Amber-600
  }
}
```

#### Neutral Colors

```typescript
const neutrals = {
  white: '#FFFFFF',
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
  black: '#000000',
}
```

### Typography

#### Font Family

```css
/* globals.css */
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'IBM Plex Sans Thai', 'Noto Sans Thai', sans-serif;
}
```

#### Font Sizes (Tailwind Classes)

```typescript
const typography = {
  // Headings
  'h1': 'text-4xl md:text-5xl lg:text-6xl',      // 36px → 48px → 60px
  'h2': 'text-3xl md:text-4xl lg:text-5xl',      // 30px → 36px → 48px
  'h3': 'text-2xl md:text-3xl lg:text-4xl',      // 24px → 30px → 36px
  'h4': 'text-xl md:text-2xl lg:text-3xl',       // 20px → 24px → 30px
  'h5': 'text-lg md:text-xl lg:text-2xl',        // 18px → 20px → 24px
  'h6': 'text-base md:text-lg lg:text-xl',       // 16px → 18px → 20px
  
  // Body text
  'body-lg': 'text-lg',                          // 18px
  'body': 'text-base',                           // 16px (default)
  'body-sm': 'text-sm',                          // 14px
  'caption': 'text-xs',                          // 12px
}
```

#### Font Weights

```typescript
const fontWeights = {
  light: 'font-light',      // 300
  normal: 'font-normal',    // 400
  medium: 'font-medium',    // 500
  semibold: 'font-semibold', // 600
  bold: 'font-bold',        // 700
}
```

### Spacing System

**Use Tailwind's spacing scale** - NO `px` units allowed!

```typescript
const spacing = {
  // Padding/Margin
  'xs': 'p-2',     // 8px
  'sm': 'p-4',     // 16px
  'md': 'p-6',     // 24px
  'lg': 'p-8',     // 32px
  'xl': 'p-12',    // 48px
  '2xl': 'p-16',   // 64px
  
  // Gaps
  'gap-sm': 'gap-4',   // 16px
  'gap-md': 'gap-6',   // 24px
  'gap-lg': 'gap-8',   // 32px
}
```

### Breakpoints

```typescript
const breakpoints = {
  'sm': '640px',    // Mobile landscape
  'md': '768px',    // Tablet
  'lg': '1024px',   // Desktop
  'xl': '1280px',   // Large desktop
  '2xl': '1536px',  // Extra large
}
```

### Component Variants

#### Buttons

```typescript
const buttonVariants = {
  primary: 'bg-primary text-white hover:bg-primary-dark',
  secondary: 'bg-secondary text-white hover:bg-secondary-dark',
  outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  ghost: 'text-primary hover:bg-gray-100',
}

const buttonSizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}
```

#### Cards

```typescript
const cardVariants = {
  default: 'bg-white rounded-lg shadow-md p-6',
  bordered: 'bg-white rounded-lg border-2 border-gray-200 p-6',
  elevated: 'bg-white rounded-lg shadow-xl p-6',
}
```

---

## 📏 Coding Standards

### 1. NO Backticks in Shell Scripts

❌ **WRONG:**
```bash
files=`ls *.txt`
count=`wc -l < file.txt`
```

✅ **CORRECT:**
```bash
files=$(ls *.txt)
count=$(wc -l < file.txt)
```

### 2. NO px Units in CSS/Tailwind

❌ **WRONG:**
```tsx
<div style={{ padding: '16px', margin: '24px' }}>
<div className="p-[16px] m-[24px]">
```

✅ **CORRECT:**
```tsx
<div className="p-4 m-6">
```

### 3. Functional Components Only

❌ **WRONG:**
```tsx
class MyComponent extends React.Component {
  render() {
    return <div>Hello</div>;
  }
}
```

✅ **CORRECT:**
```tsx
export function MyComponent() {
  return <div>Hello</div>;
}
```

### 4. Named Exports

❌ **WRONG:**
```tsx
export default function Hero() {
  return <div>Hero</div>;
}
```

✅ **CORRECT:**
```tsx
export function Hero() {
  return <div>Hero</div>;
}
```

### 5. Lucide React Icons

❌ **WRONG:**
```tsx
import { FaHeart } from 'react-icons/fa';
import HeartIcon from '@heroicons/react/24/solid';
```

✅ **CORRECT:**
```tsx
import { Heart, Star, Menu } from 'lucide-react';

<Heart className="w-6 h-6" />
```

### 6. TypeScript Types

```tsx
// Define types for props
interface HeroProps {
  title: string;
  subtitle?: string;
  image: string;
}

export function Hero({ title, subtitle, image }: HeroProps) {
  return (
    <section className="relative">
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </section>
  );
}
```

### 7. Import Order

```tsx
// 1. React and Next.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// 2. Third-party libraries
import { Heart, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';

// 3. Local components
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

// 4. Utilities and services
import { formatDate } from '@/lib/utils';
import { fetchNews } from '@/lib/services/news.service';

// 5. Types
import type { News } from '@/types/News.types';

// 6. Styles
import 'swiper/css';
```

### 8. Naming Conventions

```typescript
// Components: PascalCase
export function HeroSection() {}
export function NewsCard() {}

// Functions: camelCase
function formatDate() {}
function fetchUserData() {}

// Constants: UPPER_CASE
const API_BASE_URL = 'https://api.okmd.or.th';
const MAX_ITEMS = 10;

// Types/Interfaces: PascalCase
interface UserProfile {}
type NewsItem = {};
```

---

## 🧩 Component Structure

### Standard Component Template

```tsx
// components/ExampleComponent.tsx
import React from 'react';
import { Heart } from 'lucide-react';

/**
 * ExampleComponent - Brief description
 * 
 * @param title - The title to display
 * @param items - Array of items to render
 */

interface ExampleComponentProps {
  title: string;
  items: Array<{
    id: string;
    name: string;
  }>;
  onItemClick?: (id: string) => void;
}

export function ExampleComponent({ 
  title, 
  items, 
  onItemClick 
}: ExampleComponentProps) {
  const handleClick = (id: string) => {
    if (onItemClick) {
      onItemClick(id);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
            onClick={() => handleClick(item.id)}
          >
            <Heart className="w-6 h-6 text-primary mb-4" />
            <h3 className="text-xl font-semibold">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
```

### Layout Component Pattern

```tsx
// components/layout/PageLayout.tsx
import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
}

export function PageLayout({ children, showSidebar = false }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {showSidebar ? (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <aside className="lg:col-span-1">
                {/* Sidebar content */}
              </aside>
              <div className="lg:col-span-3">
                {children}
              </div>
            </div>
          ) : (
            children
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
```

---

## 📱 ResponsiveView Pattern

### Core Concept

The **ResponsiveView Pattern** allows different components for mobile and desktop views:

- **Mobile (< 1024px)**: Use Swiper carousel for better touch interaction
- **Desktop (≥ 1024px)**: Use Grid layout for better information density

### Implementation

```tsx
// components/ResponsiveView.tsx
import React from 'react';

interface ResponsiveViewProps {
  mobile: React.ReactNode;
  desktop: React.ReactNode;
}

export function ResponsiveView({ mobile, desktop }: ResponsiveViewProps) {
  return (
    <>
      {/* Mobile view: visible on screens < lg */}
      <div className="block lg:hidden">
        {mobile}
      </div>
      
      {/* Desktop view: visible on screens ≥ lg */}
      <div className="hidden lg:block">
        {desktop}
      </div>
    </>
  );
}
```

### Usage Example

```tsx
import { ResponsiveView } from '@/components/ResponsiveView';
import { MobileSlider } from '@/components/MobileSlider';

export function NewsSection() {
  const newsItems = [
    { id: 1, title: 'News 1', image: '/news1.jpg' },
    { id: 2, title: 'News 2', image: '/news2.jpg' },
    { id: 3, title: 'News 3', image: '/news3.jpg' },
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8">Latest News</h2>
      
      <ResponsiveView
        mobile={
          <MobileSlider items={newsItems}>
            {(item) => <NewsCard {...item} />}
          </MobileSlider>
        }
        desktop={
          <div className="grid grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <NewsCard key={item.id} {...item} />
            ))}
          </div>
        }
      />
    </section>
  );
}
```

### When to Use ResponsiveView

✅ **Use When:**
- Content benefits from carousel on mobile
- Desktop needs grid layout for multiple columns
- Touch interaction is important on mobile
- Different layouts provide better UX

❌ **Don't Use When:**
- Simple responsive CSS is sufficient
- Same layout works on all devices
- Content is single-column on all screens

---

## 🎠 MobileSlider Implementation

### Core Component

```tsx
// components/MobileSlider.tsx
'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface MobileSliderProps<T> {
  items: T[];
  children: (item: T, index: number) => React.ReactNode;
  slidesPerView?: number;
  spaceBetween?: number;
  autoplay?: boolean;
  loop?: boolean;
}

export function MobileSlider<T extends { id: string | number }>({
  items,
  children,
  slidesPerView = 1,
  spaceBetween = 16,
  autoplay = false,
  loop = true,
}: MobileSliderProps<T>) {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      pagination={{ clickable: true }}
      autoplay={autoplay ? { delay: 3000, disableOnInteraction: false } : false}
      loop={loop}
      className="w-full"
    >
      {items.map((item, index) => (
        <SwiperSlide key={item.id}>
          {children(item, index)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
```

### Advanced Configuration

```tsx
// Multi-slide mobile slider
<MobileSlider
  items={products}
  slidesPerView={1.2}  // Show partial next slide
  spaceBetween={16}
  autoplay={true}
  loop={true}
>
  {(product) => <ProductCard {...product} />}
</MobileSlider>

// Responsive slides per view
import { Swiper, SwiperSlide } from 'swiper/react';

<Swiper
  breakpoints={{
    320: { slidesPerView: 1, spaceBetween: 16 },
    640: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 24 },
  }}
>
  {/* slides */}
</Swiper>
```

### Pagination Styling

```css
/* globals.css */
.swiper-pagination-bullet {
  background: #3B82F6; /* primary-light */
  opacity: 0.5;
  width: 10px;
  height: 10px;
}

.swiper-pagination-bullet-active {
  opacity: 1;
  background: #1E3A8A; /* primary */
}
```

---

## 💡 Component Examples

### 1. Hero Section

```tsx
// components/page/home/Hero.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="OKMD Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            สำนักงานพัฒนาองค์ความรู้
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            Office of Knowledge Management and Development
          </p>
          <Link
            href="/about-okmd"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            เรียนรู้เพิ่มเติม
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
```

### 2. News Card Component

```tsx
// components/NewsCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User } from 'lucide-react';

interface NewsCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

export function NewsCard({
  id,
  title,
  excerpt,
  image,
  date,
  author,
  category,
}: NewsCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      {/* Image */}
      <Link href={`/news/${id}`}>
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
              {category}
            </span>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6">
        <Link href={`/news/${id}`}>
          <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
        </Link>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{author}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
```

### 3. Features Section with ResponsiveView

```tsx
// components/page/home/Features.tsx
import React from 'react';
import { BookOpen, Users, Award, TrendingUp } from 'lucide-react';
import { ResponsiveView } from '@/components/ResponsiveView';
import { MobileSlider } from '@/components/MobileSlider';

const features = [
  {
    id: '1',
    icon: BookOpen,
    title: 'ฐานความรู้',
    description: 'เข้าถึงแหล่งความรู้ที่หลากหลาย',
  },
  {
    id: '2',
    icon: Users,
    title: 'ชุมชนออนไลน์',
    description: 'แลกเปลี่ยนความรู้กับผู้เชี่ยวชาญ',
  },
  {
    id: '3',
    icon: Award,
    title: 'การรับรอง',
    description: 'ใบรับรองที่ได้มาตรฐาน',
  },
  {
    id: '4',
    icon: TrendingUp,
    title: 'พัฒนาทักษะ',
    description: 'เพิ่มศักยภาพของคุณ',
  },
];

function FeatureCard({ icon: Icon, title, description }: typeof features[0]) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          ทำไมต้องเลือก OKMD
        </h2>

        <ResponsiveView
          mobile={
            <MobileSlider items={features} slidesPerView={1} autoplay>
              {(feature) => <FeatureCard {...feature} />}
            </MobileSlider>
          }
          desktop={
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => (
                <FeatureCard key={feature.id} {...feature} />
              ))}
            </div>
          }
        />
      </div>
    </section>
  );
}
```

### 4. Testimonials with Advanced Slider

```tsx
// components/page/home/Testimonials.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const testimonials = [
  {
    id: 1,
    name: 'คุณสมชาย ใจดี',
    role: 'นักพัฒนาซอฟต์แวร์',
    image: '/images/testimonial1.jpg',
    content: 'OKMD ช่วยให้ฉันพัฒนาทักษะใหม่ๆ และเติบโตในอาชีพการงาน',
    rating: 5,
  },
  {
    id: 2,
    name: 'คุณสมหญิง รักเรียน',
    role: 'นักการศึกษา',
    image: '/images/testimonial2.jpg',
    content: 'แหล่งความรู้ที่ยอดเยี่ยม เนื้อหาคุณภาพสูง',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          ความคิดเห็นจากผู้ใช้งาน
        </h2>

        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          effect="fade"
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          className="max-w-4xl mx-auto"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-12">
                <Quote className="w-12 h-12 mb-6 opacity-50" />
                
                <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-white/80">{testimonial.role}</p>
                    <div className="flex gap-1 mt-2">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
```

### 5. Calendar Event Card

```tsx
// components/page/CalendarEvent/EventCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, Clock } from 'lucide-react';

interface EventCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  time: string;
  location: string;
  category: string;
}

export function EventCard({
  id,
  title,
  description,
  image,
  date,
  time,
  location,
  category,
}: EventCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
      <Link href={`/calendar-of-event/${id}`}>
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 right-4">
            <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
              {category}
            </span>
          </div>
        </div>
      </Link>

      <div className="p-6">
        <Link href={`/calendar-of-event/${id}`}>
          <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
        </Link>

        <p className="text-gray-600 mb-4 line-clamp-2">
          {description}
        </p>

        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="line-clamp-1">{location}</span>
          </div>
        </div>

        <Link
          href={`/calendar-of-event/${id}`}
          className="mt-4 block w-full text-center bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition-colors"
        >
          ดูรายละเอียด
        </Link>
      </div>
    </article>
  );
}
```

---

## 📦 Dependencies

### Installation

```bash
# Initialize project (if starting fresh)
npx create-next-app@latest okmd-web --typescript --tailwind --app

# Navigate to project
cd okmd-web

# Install required dependencies
npm install lucide-react swiper

# Install dev dependencies
npm install -D @types/node @types/react @types/react-dom

# Optional: Additional utilities
npm install clsx tailwind-merge
```

### package.json

```json
{
  "name": "okmd-web",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "lucide-react": "^0.400.0",
    "swiper": "^11.1.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^14.2.0"
  }
}
```

### Tailwind Configuration

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A8A',
          light: '#3B82F6',
          dark: '#1E40AF',
        },
        secondary: {
          DEFAULT: '#DC2626',
          light: '#EF4444',
          dark: '#991B1B',
        },
        accent: {
          DEFAULT: '#F59E0B',
          light: '#FCD34D',
          dark: '#D97706',
        },
      },
      fontFamily: {
        sans: ['IBM Plex Sans Thai', 'Noto Sans Thai', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## 🔄 Development Workflow

### 1. Local Development

```bash
# Start development server
npm run dev

# Open browser to http://localhost:3000
```

### 2. Creating New Components

```bash
# Create component file
touch components/MyNewComponent.tsx

# Add basic structure
# (See Component Structure section above)
```

### 3. Adding New Pages

```bash
# Create page directory
mkdir -p app/(frontend)/my-new-page

# Create page file
touch app/(frontend)/my-new-page/page.tsx
```

### 4. Code Quality Checks

```bash
# Run linter
npm run lint

# Fix linting issues
npm run lint -- --fix

# Type check
npx tsc --noEmit
```

### 5. Building for Production

```bash
# Build project
npm run build

# Test production build locally
npm run start
```

---

## ✅ Best Practices

### Performance Optimization

1. **Image Optimization**
```tsx
// Use Next.js Image component
import Image from 'next/image';

<Image
  src="/hero.jpg"
  alt="Hero"
  width={1920}
  height={1080}
  priority // For above-the-fold images
/>
```

2. **Code Splitting**
```tsx
// Dynamic imports for heavy components
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('@/components/HeavyComponent'), {
  loading: () => <div>Loading...</div>,
});
```

3. **Server Components**
```tsx
// Use server components by default (no 'use client')
export async function NewsPage() {
  const news = await fetchNews(); // Server-side data fetching
  
  return <NewsList news={news} />;
}
```

### Accessibility

1. **Semantic HTML**
```tsx
<article>
  <header>
    <h1>Title</h1>
  </header>
  <section>
    <p>Content</p>
  </section>
</article>
```

2. **ARIA Labels**
```tsx
<button aria-label="Close menu">
  <X className="w-6 h-6" />
</button>
```

3. **Keyboard Navigation**
```tsx
<Link
  href="/news"
  className="focus:outline-none focus:ring-2 focus:ring-primary"
>
  News
</Link>
```

### Error Handling

```tsx
// Error boundary for client components
'use client';

import { useEffect } from 'react';

export function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-2xl font-bold mb-4">เกิดข้อผิดพลาด</h2>
      <button
        onClick={reset}
        className="bg-primary text-white px-6 py-3 rounded-lg"
      >
        ลองใหม่อีกครั้ง
      </button>
    </div>
  );
}
```

### Loading States

```tsx
// loading.tsx in app directory
export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-gray-200 rounded w-1/4" />
        <div className="h-48 bg-gray-200 rounded" />
        <div className="h-48 bg-gray-200 rounded" />
      </div>
    </div>
  );
}
```

---

## 📋 Complete Checklist

### Component Development Checklist

- [ ] Use functional components only
- [ ] Use named exports (not default)
- [ ] Add TypeScript interfaces for props
- [ ] Use Lucide React for icons
- [ ] Use Tailwind classes (NO px units)
- [ ] Add proper accessibility attributes
- [ ] Implement responsive design
- [ ] Add loading and error states
- [ ] Optimize images with Next/Image
- [ ] Add hover and focus states
- [ ] Follow naming conventions
- [ ] Add JSDoc comments

### Responsive Design Checklist

- [ ] Test on mobile (< 640px)
- [ ] Test on tablet (768px - 1023px)
- [ ] Test on desktop (≥ 1024px)
- [ ] Use ResponsiveView for different layouts
- [ ] Implement MobileSlider for carousels
- [ ] Test touch interactions on mobile
- [ ] Verify grid layouts on desktop
- [ ] Check font sizes across breakpoints

### Code Quality Checklist

- [ ] No backticks in shell scripts
- [ ] No px units in styles
- [ ] Proper import order
- [ ] No console.log in production
- [ ] Type-safe code
- [ ] Handle edge cases
- [ ] Add error boundaries
- [ ] Optimize bundle size

### Before Deployment Checklist

- [ ] Run `npm run build` successfully
- [ ] Fix all TypeScript errors
- [ ] Fix all ESLint warnings
- [ ] Test all major features
- [ ] Verify SEO meta tags
- [ ] Check accessibility (a11y)
- [ ] Optimize images
- [ ] Test on multiple browsers
- [ ] Verify responsive design
- [ ] Check loading performance

---

## 📚 Additional Resources

### Official Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Lucide Icons](https://lucide.dev)
- [Swiper Documentation](https://swiperjs.com/react)

### Learning Resources

- Next.js App Router Guide
- React Server Components
- TypeScript Best Practices
- Tailwind CSS Tips and Tricks
- Accessibility Guidelines (WCAG 2.1)

---

## 🎓 Summary

This specification provides a complete guide for developing the OKMD Web application using modern web technologies and the FF2S OMEGA Architecture. Key takeaways:

1. **Use Functional Components** with named exports
2. **Implement ResponsiveView Pattern** for mobile/desktop layouts
3. **NO backticks** in shell scripts (use `$(command)`)
4. **NO px units** in CSS (use Tailwind utilities)
5. **Use Lucide React** for icons
6. **Follow TypeScript** best practices
7. **Optimize for Performance** and Accessibility

Follow this specification to build a consistent, maintainable, and high-quality web application.

---

**Last Updated:** December 27, 2025  
**Version:** 1.0.0  
**Maintained by:** OKMD Development Team
