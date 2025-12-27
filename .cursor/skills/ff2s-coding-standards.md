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
