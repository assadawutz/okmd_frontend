# OKMD Web Project Specification

## 1. Project Overview

**Project Name:** OKMD Web
**Description:** Official website for OKMD (Office of Knowledge Management and Development).

## 2. Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Mobile Swipe:** Swiper.js

## 3. Architecture: FF2S OMEGA

The project follows the FF2S OMEGA architecture pattern.

### Core Principles

1. **Feature-First:** Code is organized by feature (e.g., `app/(frontend)/news/`, `components/page/news/`).
2. **Responsive-First:** Mobile and Desktop experiences are considered distinct but unified via `ResponsiveView`.
3. **Strict Standards:** No direct pixel units, no shell backticks, strict naming conventions.

## 4. Responsive Strategy

We use a **ResponsiveView Pattern** to handle distinct layouts for mobile and desktop.

- **Mobile:** Often uses a carousel/slider (`MobileSlider` based on Swiper) for list items.
- **Desktop:** Uses grid layouts (`grid-cols-*`).

### Implementation

```tsx
import { ResponsiveView } from '@/components/ui/ResponsiveView';
import { MobileSlider } from '@/components/ui/MobileSlider';

export default function FeatureList({ items }) {
  return (
    <ResponsiveView
      mobile={
        <MobileSlider items={items} renderItem={(item) => <Card data={item} />} />
      }
      desktop={
        <div className="grid grid-cols-3 gap-6">
          {items.map((item) => <Card key={item.id} data={item} />)}
        </div>
      }
    />
  );
}
```

## 5. Design System

### Colors

- **Primary:** Defined in Tailwind config (e.g., `text-primary`, `bg-primary`).
- **Secondary:** Accent colors.
- **Backgrounds:** `bg-background`, `bg-surface`.

### Typography

- Font family: Configured in `app/layout.tsx`.
- Sizes: Use Tailwind classes `text-sm`, `text-base`, `text-lg`, `text-xl`, `font-bold`.

### Spacing

- Use Tailwind spacing scale: `p-4`, `m-6`, `gap-4`.
- **FORBIDDEN:** `16px`, `20px` (arbitrary values).

## 6. Coding Standards

### General

- **Functional Components:** All React components must be functional.
- **Named Exports:** Use named exports for components.
- **Strict TypeScript:** No `any`. Define interfaces/types.

### Shell / Scripts

- **NO Backticks:** Do not use backticks for command substitution.
  - ❌ `files=\`ls *.txt\``
  - ✅ `files=$(ls *.txt)`

### CSS / Styling

- **NO Pixels:** Do not use `px` for layout values.
  - ❌ `w-[300px]`, `p-[20px]`
  - ✅ `w-72`, `p-5`

### Icons

- Use `lucide-react`.
- Example: `<Heart className="w-6 h-6" />`

## 7. File Organization

```
/workspace
├── app/
│   ├── (frontend)/       # Page routes
│   │   ├── news/
│   │   └── ...
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── layout/           # Header, Footer, Sidebar
│   ├── ui/               # Reusable UI (Button, Input, MobileSlider)
│   ├── page/             # Page-specific components
│   │   ├── news/
│   │   └── ...
│   └── ...
├── lib/
│   ├── utils.ts
│   └── ...
└── ...
```

## 8. Development Workflow

1.  **Check Requirements:** Review design blueprints.
2.  **Plan Component:** Determine if it needs `ResponsiveView`.
3.  **Implement:**
    - Create types.
    - Build Mobile view (check for Swiper needs).
    - Build Desktop view (Grid).
    - Integrate in Page.
4.  **Verify:** Check responsiveness and data binding.

## 9. Checklist

- [ ] Tech stack confirmed (Next.js, TS, Tailwind)
- [ ] Architecture followed (FF2S OMEGA)
- [ ] ResponsiveView implemented where layout differs
- [ ] MobileSlider used for mobile lists
- [ ] No px units in classNames
- [ ] No backticks in scripts
- [ ] Lucide icons used
- [ ] Components properly organized in `components/page/` or `components/ui/`
