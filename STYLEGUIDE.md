# Design System Style Guide

This document outlines the design system tokens, components, and usage patterns for the resume website.

## Table of Contents

- [Design Tokens](#design-tokens)
- [Color System](#color-system)
- [Typography](#typography)
- [Spacing](#spacing)
- [Components](#components)
- [Responsive Breakpoints](#responsive-breakpoints)
- [Usage Examples](#usage-examples)

---

## Design Tokens

All design tokens are defined in `src/styles/tokens.css` and exposed as CSS custom properties (CSS variables) on the `:root` element. They can be accessed throughout the codebase using `var(--token-name)`.

### Key Principles

1. **Always use design tokens** instead of hard-coded values
2. **Avoid inline styles** unless required by motion libraries
3. **Use utility classes** for common styling patterns
4. **Respect semantic naming** (e.g., `--color-text-primary` instead of `--color-gray-900`)

---

## Color System

### Primary Palette (Slate)

```css
--color-primary-900: #0f172a; /* Darkest */
--color-primary-800: #1e293b;
--color-primary-700: #334155;
--color-primary-600: #475569;
--color-primary-500: #64748b;
--color-primary-400: #94a3b8;
--color-primary-300: #cbd5e1;
--color-primary-200: #e2e8f0;
--color-primary-100: #f1f5f9;
--color-primary-50: #f8fafc; /* Lightest */
```

### Accent Colors

- **Primary**: `--color-accent-primary` (#2563eb - Blue)
- **Secondary**: `--color-accent-secondary` (#7c3aed - Purple)
- **Tertiary**: `--color-accent-tertiary` (#0e7490 - Cyan)
- **Success**: `--color-accent-success` (#10b981 - Green)
- **Warning**: `--color-accent-warning` (#f59e0b - Orange)
- **Error**: `--color-accent-error` (#ef4444 - Red)

### Semantic Colors

#### Text

- `--color-text-primary`: Primary text color
- `--color-text-secondary`: Secondary/muted text
- `--color-text-tertiary`: Tertiary/very muted text
- `--color-text-inverted`: White text on dark backgrounds

#### Background

- `--color-bg-primary`: Main background (white)
- `--color-bg-secondary`: Secondary background (light gray)
- `--color-bg-tertiary`: Tertiary background (lighter gray)

#### Border

- `--color-border-primary`: Primary border color
- `--color-border-secondary`: Secondary border color

### Usage

```css
/* ✅ Good */
color: var(--color-text-primary);
background-color: var(--color-bg-secondary);

/* ❌ Bad */
color: #1e293b;
background-color: #f8fafc;
```

---

## Typography

### Font Families

- **Primary**: `--font-family-primary` (Proxima Nova + system fallbacks)
- **Monospace**: `--font-family-mono` (SF Mono + monospace fallbacks)

### Font Sizes (Fluid)

All font sizes use `clamp()` for fluid typography that scales smoothly across breakpoints:

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

### Font Weights

- `--font-weight-light`: 300
- `--font-weight-normal`: 400
- `--font-weight-medium`: 500
- `--font-weight-semibold`: 600
- `--font-weight-bold`: 700
- `--font-weight-extrabold`: 800

### Line Heights

- `--line-height-tight`: 1.1 (headings)
- `--line-height-snug`: 1.375
- `--line-height-normal`: 1.5
- `--line-height-relaxed`: 1.6 (body text)
- `--line-height-loose`: 2

### Utility Classes

```html
<p class="text-xl font-bold leading-tight">Large Bold Heading</p>
<p class="text-base font-normal leading-relaxed">Body text</p>
<p class="text-sm text-secondary">Small muted text</p>
```

---

## Spacing

### Spacing Scale

```css
--space-0: 0;
--space-1: 0.25rem; /* 4px */
--space-2: 0.5rem; /* 8px */
--space-3: 0.75rem; /* 12px */
--space-4: 1rem; /* 16px */
--space-5: 1.25rem; /* 20px */
--space-6: 1.5rem; /* 24px */
--space-8: 2rem; /* 32px */
--space-10: 2.5rem; /* 40px */
--space-12: 3rem; /* 48px */
--space-16: 4rem; /* 64px */
--space-20: 5rem; /* 80px */
--space-24: 6rem; /* 96px */
```

### Utility Classes

```html
<!-- Padding -->
<div class="p-4">Padding on all sides</div>
<div class="px-6">Horizontal padding</div>
<div class="py-3">Vertical padding</div>

<!-- Margin -->
<div class="m-4">Margin on all sides</div>
<div class="mt-6">Top margin</div>
<div class="mb-8">Bottom margin</div>

<!-- Gap (for flex/grid) -->
<div class="flex gap-4">Items with gap</div>
```

---

## Components

All component patterns are defined in `src/styles/components.css`.

### Buttons

#### Base Button

```html
<button class="btn btn--primary">Primary Button</button>
<button class="btn btn--secondary">Secondary Button</button>
<button class="btn btn--tertiary">Tertiary Button</button>
<button class="btn btn--ghost">Ghost Button</button>
```

#### Button Sizes

```html
<button class="btn btn--primary btn--sm">Small</button>
<button class="btn btn--primary">Default</button>
<button class="btn btn--primary btn--lg">Large</button>
```

#### Icon Button

```html
<button class="icon-btn">
  <i class="fas fa-heart"></i>
</button>
<button class="icon-btn icon-btn--primary">
  <i class="fas fa-download"></i>
</button>
```

### Cards

#### Basic Card

```html
<div class="card">
  <div class="card__header">
    <h3 class="card__title">Card Title</h3>
    <span class="card__subtitle">Optional subtitle</span>
  </div>
  <div class="card__body">Card content goes here</div>
  <div class="card__footer">
    <button class="btn btn--primary">Action</button>
  </div>
</div>
```

#### Card Variants

```html
<div class="card card--hover">Hover effect card</div>
<div class="card card--secondary">Secondary background</div>
<div class="card card--flat">Flat card (no shadow)</div>
<div class="card card--sm">Small padding card</div>
<div class="card card--lg">Large padding card</div>
```

### Badges

```html
<span class="badge badge--default">Default</span>
<span class="badge badge--primary">Primary</span>
<span class="badge badge--success">Success</span>
<span class="badge badge--warning">Warning</span>
<span class="badge badge--error">Error</span>
<span class="badge badge--primary badge--dot">With Dot</span>
```

### Chips

```html
<div class="chip">Basic Chip</div>
<div class="chip chip--clickable">Clickable Chip</div>
<div class="chip chip--selected">Selected Chip</div>
<div class="chip">
  <i class="chip__icon fas fa-tag"></i>
  Chip with Icon
</div>
<div class="chip">
  Removable
  <button class="chip__remove">
    <i class="fas fa-times"></i>
  </button>
</div>
```

### Avatars

```html
<div class="avatar avatar--md">
  <img src="..." alt="..." class="avatar__img" />
</div>
<div class="avatar avatar--lg avatar--bordered">
  <span class="avatar__initials">AB</span>
</div>
```

Sizes: `avatar--xs`, `avatar--sm`, `avatar--md`, `avatar--lg`, `avatar--xl`, `avatar--2xl`

### Layout Components

#### Container

```html
<div class="container container--xl">Centered content with max-width</div>
```

#### Stack (Vertical Layout)

```html
<div class="stack stack--md">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

#### Inline (Horizontal Layout)

```html
<div class="inline inline--md">
  <button>Action 1</button>
  <button>Action 2</button>
</div>
```

#### Grid

```html
<div class="grid-2">
  <div>Column 1</div>
  <div>Column 2</div>
</div>
<div class="grid-auto">
  <!-- Auto-fitting responsive grid -->
</div>
```

---

## Responsive Breakpoints

The design system uses the following breakpoints:

- **Mobile (xs)**: ≤360px
- **Small (sm)**: 640px
- **Medium (md)**: 768px (tablet)
- **Large (lg)**: 1024px (desktop)
- **Extra Large (xl)**: 1280px
- **2X Large (2xl)**: ≥1440px (ultra-wide)

### Media Query Usage

```css
/* Mobile-first approach */
.element {
  /* Mobile styles (base) */
}

@media (min-width: 768px) {
  .element {
    /* Tablet styles */
  }
}

@media (min-width: 1024px) {
  .element {
    /* Desktop styles */
  }
}

@media (min-width: 1440px) {
  .element {
    /* Ultra-wide styles */
  }
}

/* Max-width for specific adjustments */
@media (max-width: 360px) {
  .element {
    /* Small mobile adjustments */
  }
}
```

---

## Usage Examples

### Example 1: Creating a Featured Card

```html
<div class="card card--hover">
  <div class="card__header">
    <div>
      <h3 class="card__title">Project Name</h3>
      <p class="card__subtitle">2024</p>
    </div>
    <span class="badge badge--primary">Featured</span>
  </div>
  <div class="card__body">
    <p class="text-secondary">Project description goes here...</p>
    <div class="inline inline--sm" style="margin-top: var(--space-3);">
      <span class="chip">React</span>
      <span class="chip">TypeScript</span>
      <span class="chip">CSS</span>
    </div>
  </div>
  <div class="card__footer">
    <a href="#" class="link">View Project</a>
  </div>
</div>
```

### Example 2: Hero Section with Actions

```html
<div class="stack stack--lg">
  <div class="stack stack--sm">
    <span class="text-sm font-semibold uppercase tracking-wider text-accent">
      Welcome
    </span>
    <h1 class="text-4xl font-extrabold">John Doe</h1>
    <p class="text-lg text-secondary">Full Stack Developer</p>
  </div>
  <div class="inline inline--md">
    <button class="btn btn--primary">
      <i class="fas fa-download"></i>
      Download Resume
    </button>
    <button class="btn btn--secondary">
      <i class="fas fa-envelope"></i>
      Contact Me
    </button>
  </div>
</div>
```

### Example 3: Skills Grid

```html
<div class="card">
  <div class="card__header">
    <h3 class="card__title">Technical Skills</h3>
  </div>
  <div class="card__body">
    <div class="stack stack--md">
      <div>
        <h4 class="text-base font-semibold mb-2">Frontend</h4>
        <div class="inline inline--sm flex-wrap">
          <span class="badge badge--default">React</span>
          <span class="badge badge--default">TypeScript</span>
          <span class="badge badge--default">CSS</span>
          <span class="badge badge--default">HTML</span>
        </div>
      </div>
      <div>
        <h4 class="text-base font-semibold mb-2">Backend</h4>
        <div class="inline inline--sm flex-wrap">
          <span class="badge badge--default">Node.js</span>
          <span class="badge badge--default">Python</span>
          <span class="badge badge--default">PostgreSQL</span>
        </div>
      </div>
    </div>
  </div>
</div>
```

---

## Best Practices

### DO ✅

1. **Use design tokens consistently**

   ```css
   padding: var(--space-4);
   color: var(--color-text-primary);
   ```

2. **Leverage utility classes for common patterns**

   ```html
   <div class="flex items-center gap-3">...</div>
   ```

3. **Use semantic naming**

   ```css
   /* Good */
   background: var(--color-bg-secondary);

   /* Avoid */
   background: var(--color-gray-100);
   ```

4. **Follow BEM methodology for custom components**

   ```css
   .component {
   }
   .component__element {
   }
   .component--modifier {
   }
   ```

5. **Mobile-first responsive design**

   ```css
   /* Start with mobile, enhance for larger screens */
   .element {
     width: 100%;
   }

   @media (min-width: 768px) {
     .element {
       width: 50%;
     }
   }
   ```

### DON'T ❌

1. **Don't use hard-coded values**

   ```css
   /* Avoid */
   padding: 16px;
   color: #1e293b;
   ```

2. **Don't use inline styles (except for motion libraries)**

   ```html
   <!-- Avoid -->
   <div style="padding: 16px; color: blue;">...</div>
   ```

3. **Don't create one-off custom values**

   ```css
   /* Avoid */
   border-radius: 13px; /* Use existing token instead */
   ```

4. **Don't ignore accessibility**
   ```css
   /* Always respect prefers-reduced-motion */
   @media (prefers-reduced-motion: reduce) {
     .element {
       animation: none;
     }
   }
   ```

---

## File Structure

```
src/styles/
├── tokens.css       # Design tokens + utility classes
├── global.css       # Reset + base styles (imports tokens)
├── components.css   # Reusable component patterns
├── fonts.css        # Font face declarations
└── resume.css       # Page-specific styles
```

### Import Order

In `main.tsx`:

```tsx
import '@styles/fonts.css'
import '@styles/global.css' // This imports tokens.css
```

Component CSS modules can import what they need:

```css
@import './tokens.css';
```

---

## Questions or Contributions

For questions about the design system or to propose new components/tokens, please create an issue or submit a pull request.
