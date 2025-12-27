#!/bin/bash

# OKMD Skills Installer
# Creates .cursor/skills directory and installs project-specific skills

SKILLS_DIR=".cursor/skills"

# Ensure directory exists
mkdir -p "$SKILLS_DIR"

echo "Installing skills to $SKILLS_DIR..."

# 1. ff2s-responsive.md
cat > "$SKILLS_DIR/ff2s-responsive.md" << 'EOF'
# FF2S Responsive Pattern

This project uses a strict separation of concerns for Mobile and Desktop layouts using the `ResponsiveView` pattern.

## Strategy

1.  **Mobile First:** Design for mobile often implies a vertical stack or a horizontal slider (Swiper).
2.  **Desktop Second:** Desktop layouts typically use Grids or Flexbox rows.
3.  **Unification:** Use `ResponsiveView` component to switch between them.

## When to use

- Use when the DOM structure significantly differs between mobile and desktop (e.g., Slider vs Grid).
- Do NOT use for simple style changes (e.g., `text-sm md:text-lg`). For simple style changes, use Tailwind responsive prefixes.

## Implementation Pattern

```tsx
import { ResponsiveView } from '@/components/ui/ResponsiveView';

// ...

<ResponsiveView
  mobile={<MobileLayout data={data} />}
  desktop={<DesktopLayout data={data} />}
/>
```

## Key Components

- `ResponsiveView`: Handles the conditional rendering or CSS-based hiding/showing.
- `MobileSlider`: Wrapper around Swiper for mobile lists.
EOF

# 2. ff2s-coding-standards.md
cat > "$SKILLS_DIR/ff2s-coding-standards.md" << 'EOF'
# FF2S Coding Standards

## Shell Scripting
- **NO Backticks:** Never use backticks for command substitution. Always use `$()`.
  - ❌ `VAR=`command``
  - ✅ `VAR=$(command)`

## CSS / Tailwind
- **NO Pixels:** Avoid using arbitrary pixel values in Tailwind classes. Use the design system spacing scale.
  - ❌ `p-[15px]`, `m-[10px]`, `w-[350px]`
  - ✅ `p-4`, `m-2`, `w-80` (or closest standard value)

## React / TypeScript
- **Functional Components:** Use functional components with hooks.
- **Named Exports:** Prefer named exports over default exports for components.
- **Lucide Icons:** Use `lucide-react` for all icons.
  - `import { IconName } from 'lucide-react';`
- **File Naming:**
  - Components: `PascalCase.tsx`
  - Utilities: `camelCase.ts`
  - Constants/Types: `PascalCase.ts` or `camelCase.ts` depending on content.

## Imports
- Organize imports:
  1. Built-in / React
  2. External libraries (Next.js, Lucide, etc.)
  3. Internal Components (`@/components/...`)
  4. Internal Utils/Hooks/Types (`@/lib/...`, `@/types/...`)
  5. Styles
EOF

# 3. ff2s-mobile-slider.md
cat > "$SKILLS_DIR/ff2s-mobile-slider.md" << 'EOF'
# FF2S Mobile Slider

## Usage
The `MobileSlider` component is the standard way to present lists of items on mobile screens. It wraps Swiper.js.

## Props
- `items`: Array of data items.
- `renderItem`: Function to render each item `(item, index) => ReactNode`.
- `slidesPerView`: (Optional) Number of slides to show. Defaults to 1 or auto.
- `className`: (Optional) Wrapper class.

## Example

```tsx
import { MobileSlider } from '@/components/ui/MobileSlider';
import { Card } from './Card';

// ... inside a component
<MobileSlider
  items={newsItems}
  slidesPerView={1.2}
  renderItem={(item) => (
    <Card
      title={item.title}
      image={item.image}
      date={item.date}
    />
  )}
/>
```

## Setup
Ensure Swiper styles are imported in `MobileSlider` or globally if not already present.
EOF

echo "✅ Skills installed successfully!"
echo "Files created:"
ls -l "$SKILLS_DIR"
