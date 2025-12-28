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
