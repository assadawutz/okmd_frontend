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
