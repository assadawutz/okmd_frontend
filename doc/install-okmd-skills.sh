#!/bin/bash

# ============================================================================
# OKMD Web - Cursor Skills Installer
# ============================================================================
# This script installs FF2S OMEGA Architecture skills into Cursor IDE
# 
# Skills installed:
# 1. ff2s-responsive.md - ResponsiveView pattern and mobile/desktop strategies
# 2. ff2s-coding-standards.md - Coding standards and conventions
# 3. ff2s-mobile-slider.md - MobileSlider implementation patterns
#
# Usage:
#   chmod +x install-okmd-skills.sh
#   ./install-okmd-skills.sh
#
# Author: OKMD Development Team
# Version: 1.0.0
# Last Updated: December 27, 2025
# ============================================================================

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Banner
echo ""
echo "╔════════════════════════════════════════════════════════════════╗"
echo "║         OKMD Web - Cursor Skills Installer                    ║"
echo "║         FF2S OMEGA Architecture Skills                        ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

# Get current directory
WORKSPACE_DIR=$(pwd)
SKILLS_DIR="${WORKSPACE_DIR}/.cursor/skills"

print_info "Workspace directory: ${WORKSPACE_DIR}"
print_info "Skills directory: ${SKILLS_DIR}"
echo ""

# Create skills directory if it doesn't exist
if [ ! -d "${SKILLS_DIR}" ]; then
    print_info "Creating skills directory..."
    mkdir -p "${SKILLS_DIR}"
    print_success "Skills directory created"
else
    print_warning "Skills directory already exists"
fi

echo ""
print_info "Installing skills..."
echo ""

# ============================================================================
# Skill 1: FF2S Responsive Pattern
# ============================================================================
print_info "Installing skill 1/3: ff2s-responsive.md"

cat > "${SKILLS_DIR}/ff2s-responsive.md" << 'EOF'
# FF2S OMEGA - ResponsiveView Pattern

## Overview

The ResponsiveView pattern is a core architectural pattern in FF2S OMEGA for handling responsive layouts in OKMD Web applications.

## Core Concept

**Mobile (< 1024px):** Use Swiper carousel for touch-friendly interaction
**Desktop (≥ 1024px):** Use Grid layout for better information density

## ResponsiveView Component

```tsx
interface ResponsiveViewProps {
  mobile: React.ReactNode;
  desktop: React.ReactNode;
}

export function ResponsiveView({ mobile, desktop }: ResponsiveViewProps) {
  return (
    <>
      <div className="block lg:hidden">{mobile}</div>
      <div className="hidden lg:block">{desktop}</div>
    </>
  );
}
```

## Usage Pattern

```tsx
<ResponsiveView
  mobile={
    <MobileSlider items={data}>
      {(item) => <Card {...item} />}
    </MobileSlider>
  }
  desktop={
    <div className="grid grid-cols-3 gap-6">
      {data.map((item) => <Card key={item.id} {...item} />)}
    </div>
  }
/>
```

## When to Use

✅ **Use ResponsiveView when:**
- Content benefits from carousel on mobile
- Desktop needs multi-column grid layout
- Touch interaction is important on mobile
- Different layouts provide better UX

❌ **Don't use ResponsiveView when:**
- Simple responsive CSS is sufficient
- Same layout works on all devices
- Content is single-column on all screens

## Grid Layout Patterns

### Two Columns
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
```

### Three Columns
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

### Four Columns
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
```

## Breakpoints

- `sm`: 640px (Mobile landscape)
- `md`: 768px (Tablet)
- `lg`: 1024px (Desktop) ← Primary breakpoint for ResponsiveView
- `xl`: 1280px (Large desktop)
- `2xl`: 1536px (Extra large)

## Best Practices

1. Always use `lg:` breakpoint for ResponsiveView split
2. Mobile slider should show 1-1.5 slides for optimal UX
3. Desktop grid should use 2-4 columns depending on content
4. Test both layouts separately
5. Ensure touch targets are at least 44x44px on mobile
EOF

print_success "✓ ff2s-responsive.md installed"

# ============================================================================
# Skill 2: FF2S Coding Standards
# ============================================================================
print_info "Installing skill 2/3: ff2s-coding-standards.md"

cat > "${SKILLS_DIR}/ff2s-coding-standards.md" << 'EOF'
# FF2S OMEGA - Coding Standards

## Critical Rules

### 1. NO Backticks in Shell Scripts

❌ **NEVER USE:**
```bash
files=`ls *.txt`
count=`wc -l < file.txt`
```

✅ **ALWAYS USE:**
```bash
files=$(ls *.txt)
count=$(wc -l < file.txt)
```

### 2. NO px Units in CSS/Tailwind

❌ **NEVER USE:**
```tsx
<div style={{ padding: '16px' }}>
<div className="p-[16px]">
```

✅ **ALWAYS USE:**
```tsx
<div className="p-4">
```

**Tailwind Spacing Scale:**
- `p-2` = 8px
- `p-4` = 16px
- `p-6` = 24px
- `p-8` = 32px
- `p-12` = 48px
- `p-16` = 64px

### 3. Functional Components Only

❌ **NEVER USE:**
```tsx
class MyComponent extends React.Component {
  render() {
    return <div>Hello</div>;
  }
}
```

✅ **ALWAYS USE:**
```tsx
export function MyComponent() {
  return <div>Hello</div>;
}
```

### 4. Named Exports

❌ **NEVER USE:**
```tsx
export default function Hero() {
  return <div>Hero</div>;
}
```

✅ **ALWAYS USE:**
```tsx
export function Hero() {
  return <div>Hero</div>;
}
```

### 5. Lucide React Icons

❌ **NEVER USE:**
```tsx
import { FaHeart } from 'react-icons/fa';
import HeartIcon from '@heroicons/react/24/solid';
```

✅ **ALWAYS USE:**
```tsx
import { Heart, Star, Menu } from 'lucide-react';

<Heart className="w-6 h-6" />
```

## Naming Conventions

### Files
- Components: `PascalCase.tsx` (e.g., `HeroSection.tsx`)
- Pages: `page.tsx` (Next.js convention)
- Utilities: `camelCase.ts` (e.g., `formatDate.ts`)
- Services: `kebab-case.service.ts` (e.g., `news.service.ts`)

### Code
```typescript
// Components: PascalCase
export function HeroSection() {}

// Functions: camelCase
function formatDate() {}

// Constants: UPPER_CASE
const API_BASE_URL = 'https://api.okmd.or.th';

// Types/Interfaces: PascalCase
interface UserProfile {}
type NewsItem = {};
```

## Import Order

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

## TypeScript Best Practices

```tsx
// Define interfaces for props
interface HeroProps {
  title: string;
  subtitle?: string;
  image: string;
  onAction?: () => void;
}

// Use interfaces in components
export function Hero({ title, subtitle, image, onAction }: HeroProps) {
  return (
    <section>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </section>
  );
}
```

## Component Structure

```tsx
// 1. Imports
import React from 'react';
import { Heart } from 'lucide-react';

// 2. Types/Interfaces
interface ComponentProps {
  title: string;
}

// 3. Component
export function Component({ title }: ComponentProps) {
  // 4. Hooks
  const [count, setCount] = React.useState(0);
  
  // 5. Handlers
  const handleClick = () => {
    setCount(count + 1);
  };
  
  // 6. Render
  return (
    <div className="p-4">
      <h1>{title}</h1>
      <button onClick={handleClick}>Count: {count}</button>
    </div>
  );
}
```

## Tailwind Best Practices

```tsx
// Use semantic spacing
<div className="p-4 m-6 gap-4">

// Mobile-first responsive
<div className="text-base md:text-lg lg:text-xl">

// Group related utilities
<div className="
  flex items-center justify-center
  bg-white rounded-lg shadow-md
  p-6 m-4
  hover:shadow-xl transition-shadow
">
```

## Accessibility

```tsx
// Semantic HTML
<article>
  <header>
    <h1>Title</h1>
  </header>
  <section>
    <p>Content</p>
  </section>
</article>

// ARIA labels
<button aria-label="Close menu">
  <X className="w-6 h-6" />
</button>

// Keyboard navigation
<Link
  href="/news"
  className="focus:outline-none focus:ring-2 focus:ring-primary"
>
  News
</Link>
```

## Checklist

Before committing code, verify:

- [ ] NO backticks in shell scripts
- [ ] NO px units in styles
- [ ] Functional components only
- [ ] Named exports only
- [ ] Lucide React icons only
- [ ] Proper TypeScript types
- [ ] Correct import order
- [ ] Semantic HTML
- [ ] Accessibility attributes
- [ ] Mobile-first responsive design
EOF

print_success "✓ ff2s-coding-standards.md installed"

# ============================================================================
# Skill 3: MobileSlider Implementation
# ============================================================================
print_info "Installing skill 3/3: ff2s-mobile-slider.md"

cat > "${SKILLS_DIR}/ff2s-mobile-slider.md" << 'EOF'
# FF2S OMEGA - MobileSlider Implementation

## Overview

MobileSlider is a reusable wrapper around Swiper.js for implementing mobile carousels in OKMD Web applications.

## Core Component

```tsx
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

## Basic Usage

```tsx
<MobileSlider items={newsItems}>
  {(item) => <NewsCard {...item} />}
</MobileSlider>
```

## Common Patterns

### 1. Single Slide (Default)

```tsx
<MobileSlider 
  items={items}
  slidesPerView={1}
  spaceBetween={16}
>
  {(item) => <Card {...item} />}
</MobileSlider>
```

### 2. Partial Next Slide (Peek)

```tsx
<MobileSlider 
  items={items}
  slidesPerView={1.2}  // Shows 20% of next slide
  spaceBetween={16}
>
  {(item) => <Card {...item} />}
</MobileSlider>
```

### 3. Multiple Slides

```tsx
<MobileSlider 
  items={items}
  slidesPerView={2}
  spaceBetween={12}
>
  {(item) => <SmallCard {...item} />}
</MobileSlider>
```

### 4. Autoplay Slider

```tsx
<MobileSlider 
  items={items}
  autoplay={true}
  loop={true}
>
  {(item) => <HeroSlide {...item} />}
</MobileSlider>
```

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `T[]` | required | Array of items to display |
| `children` | `(item: T, index: number) => ReactNode` | required | Render function for each item |
| `slidesPerView` | `number` | `1` | Number of slides visible |
| `spaceBetween` | `number` | `16` | Space between slides in px |
| `autoplay` | `boolean` | `false` | Enable autoplay |
| `loop` | `boolean` | `true` | Enable infinite loop |

## Advanced Configuration

### Responsive Breakpoints

```tsx
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

### Custom Pagination

```tsx
<Swiper
  pagination={{
    clickable: true,
    dynamicBullets: true,
  }}
>
  {/* slides */}
</Swiper>
```

### Navigation Arrows

```tsx
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

<Swiper
  modules={[Pagination, Navigation]}
  navigation
>
  {/* slides */}
</Swiper>
```

## Styling Pagination

Add to `globals.css`:

```css
/* Pagination bullets */
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

/* Navigation arrows */
.swiper-button-next,
.swiper-button-prev {
  color: #1E3A8A;
}
```

## Best Practices

### 1. Always Mark as Client Component

```tsx
'use client';  // Required at top of file
```

### 2. Import Required CSS

```tsx
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
```

### 3. Provide Unique Keys

```tsx
{items.map((item) => (
  <SwiperSlide key={item.id}>  // Must have unique key
    <Card {...item} />
  </SwiperSlide>
))}
```

### 4. Handle Empty States

```tsx
export function MobileSlider({ items, children }: MobileSliderProps) {
  if (items.length === 0) {
    return <div>No items to display</div>;
  }
  
  return <Swiper>{/* ... */}</Swiper>;
}
```

### 5. Optimize Images in Slides

```tsx
<SwiperSlide>
  <Image
    src={item.image}
    alt={item.title}
    width={800}
    height={600}
    className="object-cover"
    loading="lazy"
  />
</SwiperSlide>
```

## Common Use Cases

### Hero Carousel

```tsx
<MobileSlider
  items={heroes}
  slidesPerView={1}
  autoplay={true}
  loop={true}
>
  {(hero) => <HeroSlide {...hero} />}
</MobileSlider>
```

### News Feed

```tsx
<MobileSlider
  items={news}
  slidesPerView={1.2}
  spaceBetween={16}
>
  {(article) => <NewsCard {...article} />}
</MobileSlider>
```

### Product Gallery

```tsx
<MobileSlider
  items={products}
  slidesPerView={2}
  spaceBetween={12}
>
  {(product) => <ProductCard {...product} />}
</MobileSlider>
```

### Testimonials

```tsx
<MobileSlider
  items={testimonials}
  slidesPerView={1}
  autoplay={true}
  loop={true}
>
  {(testimonial) => <TestimonialCard {...testimonial} />}
</MobileSlider>
```

## Troubleshooting

### Issue: Slides not showing

**Solution:** Ensure parent has defined width
```tsx
<div className="w-full">
  <MobileSlider items={items}>
    {(item) => <Card {...item} />}
  </MobileSlider>
</div>
```

### Issue: Pagination not visible

**Solution:** Import CSS and add spacing
```tsx
import 'swiper/css/pagination';

<div className="pb-12">  {/* Space for pagination */}
  <MobileSlider items={items}>
    {(item) => <Card {...item} />}
  </MobileSlider>
</div>
```

### Issue: Autoplay not working

**Solution:** Ensure correct config
```tsx
<Swiper
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,  // Keep playing after user interaction
  }}
>
```

## Checklist

- [ ] File marked as 'use client'
- [ ] Swiper CSS imported
- [ ] Unique keys on SwiperSlide
- [ ] Items have id property
- [ ] Parent container has width
- [ ] Images are optimized
- [ ] Tested on mobile device
- [ ] Pagination is visible
EOF

print_success "✓ ff2s-mobile-slider.md installed"

echo ""
print_success "═══════════════════════════════════════════════════════════"
print_success "All skills installed successfully!"
print_success "═══════════════════════════════════════════════════════════"
echo ""

print_info "Skills installed in: ${SKILLS_DIR}"
print_info ""
print_info "Skills created:"
print_info "  1. ff2s-responsive.md - ResponsiveView pattern"
print_info "  2. ff2s-coding-standards.md - Coding standards"
print_info "  3. ff2s-mobile-slider.md - MobileSlider implementation"
echo ""

print_warning "═══════════════════════════════════════════════════════════"
print_warning "Next Steps:"
print_warning "═══════════════════════════════════════════════════════════"
echo ""
print_info "1. Open Cursor IDE"
print_info "2. Go to Settings → Features"
print_info "3. Enable 'Agent Skills'"
print_info "4. Restart Cursor"
print_info "5. AI will now follow FF2S OMEGA standards automatically"
echo ""

print_success "Installation complete! 🎉"
echo ""
