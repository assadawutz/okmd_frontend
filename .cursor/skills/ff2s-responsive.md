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
