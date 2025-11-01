# Responsive Design Implementation

This document outlines the comprehensive responsive design implementation for the resume website, ensuring optimal display and functionality across all device types.

## Breakpoints

The website uses a mobile-first approach with the following breakpoint system:

### Device Categories

| Device Category    | Breakpoint Range | Media Query                                          |
| ------------------ | ---------------- | ---------------------------------------------------- |
| **Small Mobile**   | 320px - 360px    | `@media (max-width: 320px)`                          |
| **Mobile Phones**  | 361px - 480px    | `@media (max-width: 480px)`                          |
| **Large Phones**   | 481px - 599px    | `@media (min-width: 481px) and (max-width: 599px)`   |
| **Small Tablets**  | 600px - 768px    | `@media (min-width: 600px) and (max-width: 768px)`   |
| **Tablets**        | 769px - 899px    | `@media (min-width: 769px) and (max-width: 899px)`   |
| **Small Laptops**  | 900px - 1024px   | `@media (min-width: 900px) and (max-width: 1024px)`  |
| **Laptops**        | 1025px - 1279px  | `@media (min-width: 1025px) and (max-width: 1279px)` |
| **Desktops**       | 1280px - 1439px  | `@media (min-width: 1280px) and (max-width: 1439px)` |
| **Large Desktops** | 1440px - 1599px  | `@media (min-width: 1440px) and (max-width: 1599px)` |
| **Ultra-wide**     | 1600px+          | `@media (min-width: 1600px)`                         |

## Fluid Typography

All text elements use fluid typography that automatically scales based on viewport size:

```css
--font-size-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
--font-size-sm: clamp(0.875rem, 0.825rem + 0.25vw, 1rem);
--font-size-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
--font-size-lg: clamp(1.125rem, 1.05rem + 0.375vw, 1.25rem);
--font-size-xl: clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem);
--font-size-2xl: clamp(1.5rem, 1.35rem + 0.75vw, 1.875rem);
--font-size-3xl: clamp(1.875rem, 1.65rem + 1.125vw, 2.25rem);
--font-size-4xl: clamp(2.25rem, 1.95rem + 1.5vw, 3rem);
--font-size-5xl: clamp(2.5rem, 2.1rem + 2vw, 3.5rem);
```

## Responsive Spacing

Fluid spacing variables adapt to screen size:

```css
--space-fluid-xs: clamp(0.25rem, 0.2rem + 0.25vw, 0.5rem);
--space-fluid-sm: clamp(0.5rem, 0.4rem + 0.5vw, 1rem);
--space-fluid-md: clamp(1rem, 0.8rem + 1vw, 2rem);
--space-fluid-lg: clamp(1.5rem, 1.2rem + 1.5vw, 3rem);
--space-fluid-xl: clamp(2rem, 1.5rem + 2.5vw, 4rem);
--space-fluid-2xl: clamp(3rem, 2rem + 5vw, 6rem);
```

## Layout Adaptations

### Desktop (1600px+)

- Sidebar navigation: 300px width
- Two-column grid layout
- Maximum content width: 1500px
- Large spacing and padding

### Large Desktop (1440px - 1599px)

- Sidebar navigation: 280px width
- Two-column grid layout
- Maximum content width: 1400px
- Generous spacing

### Desktop (1280px - 1439px)

- Sidebar navigation: 260px width
- Two-column grid layout
- Maximum content width: 1280px

### Laptop (1025px - 1279px)

- Sidebar navigation: 240px width
- Two-column grid layout
- Maximum content width: 1200px

### Small Laptop (900px - 1024px)

- Sidebar navigation: 220px width (static position)
- Single-column content layout
- Navigation remains sidebar style

### Tablet (769px - 899px)

- Single-column layout
- Horizontal scrollable navigation
- Side-by-side hero layout maintained
- Touch-friendly tap targets (44px minimum)

### Small Tablet (600px - 768px)

- Single-column layout
- Horizontal scrollable navigation
- Centered hero section
- Touch-friendly tap targets (44px minimum)

### Large Phone (481px - 599px)

- Single-column layout
- Horizontal scrollable navigation
- Centered hero section
- Touch-friendly tap targets (44px minimum)

### Mobile (≤480px)

- Single-column layout
- Horizontal scrollable navigation
- Centered hero section
- Stacked action buttons
- Touch-friendly tap targets (48px minimum)
- Reduced padding and spacing

### Small Mobile (≤360px)

- Minimal padding
- Compact elements
- Smaller avatar size
- Touch-friendly tap targets maintained (44px minimum)

### Extra Small (≤320px)

- Extra compact layout
- Minimal spacing
- Touch-friendly tap targets maintained (44px minimum)
- Smaller font sizes

## Touch-Friendly Interactions

### Touch Target Sizes

All interactive elements meet or exceed WCAG 2.1 Level AAA guidelines:

- **Minimum**: 44px × 44px (tablets and up)
- **Comfortable**: 48px × 48px (mobile phones)
- **Large**: 56px × 56px (optional for primary actions)

### Touch Device Detection

The site uses the `@media (hover: none) and (pointer: coarse)` query to detect touch devices and applies:

- Larger tap targets (48px minimum)
- Removed hover effects (replaced with active states)
- Scale-down animations on tap
- Optimized spacing between interactive elements

### Examples

```css
@media (hover: none) and (pointer: coarse) {
  .section-nav__link {
    min-height: 48px;
    padding: var(--space-3) var(--space-4);
  }

  .section-nav__link:hover {
    transform: none;
  }

  .section-nav__link:active {
    background: var(--color-accent-primary-light);
    color: var(--color-accent-primary);
  }
}
```

## Landscape Orientation Support

Special handling for devices in landscape mode with limited vertical space:

```css
@media (orientation: landscape) and (max-height: 600px) {
  .resume-layout {
    padding: var(--space-4) var(--space-4) var(--space-6);
  }

  .hero-section__media {
    width: 120px;
    height: 120px;
  }
}
```

## Section-Specific Adaptations

### Navigation

- **Desktop**: Vertical sidebar, sticky positioning
- **Tablet/Mobile**: Horizontal scrollable bar, smooth scrolling

### Hero Section

- **Desktop**: Side-by-side layout (avatar + content)
- **Tablet**: Side-by-side on larger tablets, centered on smaller
- **Mobile**: Centered, stacked layout

### Content Grid

- **Desktop**: Two-column grid (sidebar + main)
- **Tablet/Mobile**: Single-column, stacked layout

### Contact Cards

- **Desktop**: Multi-column grid (auto-fit)
- **Tablet**: 2 columns or auto-fit
- **Mobile**: Single column

### Timeline Items

- **Desktop**: Side-by-side header (title + date)
- **Mobile**: Stacked layout

### Stat Cards

- **Desktop**: Horizontal layout (icon + content)
- **Mobile**: Stacked layout

## Performance Optimizations

### Mobile Optimizations

- Smooth scrolling with `-webkit-overflow-scrolling: touch`
- Thin scrollbars with `scrollbar-width: thin`
- No horizontal overflow with `overflow-x: hidden`
- Optimized transitions for reduced motion

### Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

## Browser Compatibility

- `-webkit-tap-highlight-color: transparent` - Removes tap highlight on WebKit browsers
- `-webkit-text-size-adjust: 100%` - Prevents text size adjustment on iOS
- `-webkit-overflow-scrolling: touch` - Smooth momentum scrolling on iOS
- `user-select: none` - Prevents text selection on buttons and interactive elements

## Utility Classes

### Responsive Visibility

```css
.hidden-mobile        /* Hidden on mobile, visible on tablet+ */
.visible-mobile-only  /* Visible only on mobile */
.hidden-desktop       /* Hidden on desktop, visible on smaller */
.visible-desktop-only /* Visible only on desktop */
```

### Touch Targets

```css
.touch-target            /* 44px × 44px */
.touch-target-comfortable /* 48px × 48px */
.touch-target-large      /* 56px × 56px */
```

### Scrolling

```css
.overflow-x-hidden  /* Prevent horizontal overflow */
.overflow-y-auto    /* Allow vertical scrolling */
.scrollable-x       /* Horizontal smooth scrolling */
.scrollable-y       /* Vertical smooth scrolling */
```

## Testing Guidelines

### Device Testing Matrix

1. **Mobile Phones**
   - iPhone SE (320px width)
   - iPhone 12/13/14 (390px width)
   - iPhone 14 Pro Max (430px width)
   - Samsung Galaxy S20 (360px width)
   - Pixel 5 (393px width)

2. **Tablets**
   - iPad Mini (768px width)
   - iPad (810px width)
   - iPad Pro 11" (834px width)
   - iPad Pro 12.9" (1024px width)

3. **Laptops/Desktops**
   - MacBook Air (1280px width)
   - MacBook Pro 13" (1440px width)
   - MacBook Pro 16" (1728px width)
   - Desktop 1920px
   - Ultra-wide 2560px

### Orientation Testing

- Test both portrait and landscape orientations
- Verify landscape mode on phones with height < 600px

### Browser Testing

- Chrome/Edge (Desktop & Mobile)
- Safari (Desktop & iOS)
- Firefox (Desktop & Mobile)
- Samsung Internet

## Key Features

✅ Fluid typography that scales with viewport  
✅ Flexible grid layouts using CSS Grid and Flexbox  
✅ Touch-friendly interactions (48px tap targets on mobile)  
✅ Responsive images that scale proportionally  
✅ Optimized content reflow on smaller screens  
✅ Landscape orientation support  
✅ No horizontal scrolling on any device  
✅ Smooth transitions between breakpoints  
✅ Reduced motion support  
✅ Dark mode compatibility  
✅ Performance optimized for mobile devices

## Maintenance

When adding new components:

1. Use fluid typography variables (`--font-size-*`)
2. Use responsive spacing variables (`--space-*` or `--space-fluid-*`)
3. Ensure interactive elements meet minimum touch target sizes
4. Test on multiple breakpoints
5. Verify in both light and dark modes
6. Test with reduced motion preferences
7. Verify landscape orientation behavior
8. Check for horizontal overflow

## Resources

- [WCAG 2.1 Touch Target Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [MDN Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [CSS Tricks: A Complete Guide to CSS Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)
