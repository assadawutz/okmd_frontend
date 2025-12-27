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
