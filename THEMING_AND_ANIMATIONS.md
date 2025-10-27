# Theming and Animations Implementation

This document describes the theming and animation features implemented in this project.

## Features Implemented

### 1. Light/Dark Theme Support

#### Theme Context

- **Location**: `/src/context/ThemeContext.tsx`
- **Features**:
  - React Context API for global theme state management
  - Persists theme preference in `localStorage` with key `resume-theme`
  - Detects and respects system color scheme preference on first load
  - Listens to system theme changes and updates accordingly (if no stored preference)
  - Provides `useTheme` hook for easy access to theme state and controls

#### Theme Toggle Component

- **Location**: `/src/components/ThemeToggle.tsx`
- **Features**:
  - Animated toggle button with smooth transitions
  - Spring-based animations using Framer Motion
  - Accessible with ARIA labels
  - Responsive: label hidden on mobile devices
  - Respects reduced motion preferences

#### CSS Variables for Theming

- **Location**: `/src/styles/tokens.css`
- **Implementation**:
  - Light theme colors defined in `:root`
  - Dark theme colors override via `[data-theme='dark']` selector
  - Smooth color transitions using `--theme-transition` variable (0.3s ease)
  - Theme transitions applied to all key components (layout, sections, navigation)

#### Dark Mode Colors

- Background colors: Inverted slate palette
- Text colors: Light variants for dark backgrounds
- Border colors: Adjusted opacity for visibility
- Accent colors: Slightly brighter for better contrast
- Shadows: Increased opacity for depth on dark backgrounds

### 2. Framer Motion Animations

#### Animation Variants

- **Location**: `/src/utils/animations.ts`
- **Variants Implemented**:
  - `fadeIn`: Basic opacity fade-in
  - `fadeInUp`: Fade in with upward slide (24px)
  - `scaleIn`: Scale from 0.95 to 1 with opacity
  - `slideInLeft`: Slide from left (-24px)
  - `slideInRight`: Slide from right (24px)
  - `staggerContainer`: Parent container for staggered children
  - `staggerItem`: Individual staggered item animation
  - `hoverScale`: Hover micro-interaction (scale 1.02)
  - `tapScale`: Tap/press micro-interaction (scale 0.98)

#### Reduced Motion Support

- **Hook**: `/src/hooks/useReducedMotion.ts`
- **Implementation**:
  - Detects `prefers-reduced-motion: reduce` media query
  - Updates state when user preference changes
  - `getReducedMotionVariants()` function converts animations to instant transitions (0.01ms)
  - All animated components respect this preference

#### AnimatedSection Component

- **Location**: `/src/components/AnimatedSection.tsx`
- **Features**:
  - Wrapper component for scroll-triggered animations
  - Uses custom `useInView` hook with IntersectionObserver
  - Triggers animations when section enters viewport (10% threshold)
  - Animations trigger only once per section (performance optimization)
  - Automatic reduced motion fallback

#### Section Animations

All major sections now have scroll-triggered entrance animations:

- `HeroSection`: Staggered fade-in animations for all elements
- `AboutSection`: Fade-in-up animation on scroll
- `ExperienceSection`: Fade-in-up animation on scroll
- `ProjectsSection`: Staggered card animations with hover effects
- `SkillsSection`: Fade-in-up animation on scroll
- `EducationSection`: Fade-in-up animation on scroll
- `CertificationsSection`: Fade-in-up animation on scroll
- `HobbiesSection`: Fade-in-up animation on scroll
- `ContactSection`: Staggered card animations

#### Micro-Interactions

- Hero CTA buttons: Hover scale and tap feedback
- Social links: Hover scale and tap feedback
- Project cards: Hover scale effect
- Contact cards: Hover scale effect
- Theme toggle: Animated icon rotation and translation

### 3. Smooth Scrolling

#### CSS Smooth Scroll

- **Location**: `/src/styles/global.css`
- **Implementation**: `scroll-behavior: smooth` on `html` element
- Automatically disabled when reduced motion is preferred

#### Scrollspy Navigation

- **Location**: `/src/sections/ResumePage.tsx` (lines 65-94)
- **Features**:
  - Tracks active section based on scroll position
  - 25% viewport offset for better UX
  - Updates navigation active state in real-time
  - Smooth scroll to section on navigation click
  - URL updates to reflect current section

### 4. Loading Animations

#### Skeleton Component

- **Location**: `/src/components/Skeleton.tsx`
- **Features**:
  - Shimmer/pulse animation for loading states
  - Configurable width, height, and variant (text, circular, rectangular)
  - Respects reduced motion preferences
  - CSS gradient-based shimmer effect
- **Styles**: `/src/styles/skeleton.css`

### 5. Performance Optimizations

#### Viewport-Based Rendering

- Uses IntersectionObserver for efficient scroll detection
- Animations trigger only once per section (configurable)
- No performance impact from off-screen animations

#### Framer Motion Tree Shaking

- Animations extracted to reusable variants
- Reduced motion variants computed once per component
- No unnecessary re-renders during animations

#### Code Splitting

- Framer Motion separated into its own chunk (`animation.js`)
- React vendor code in separate chunk
- Optimized bundle sizes

## Usage Examples

### Using the Theme Hook

```tsx
import { useTheme } from '@context/ThemeContext'

function MyComponent() {
  const { theme, toggleTheme, setTheme } = useTheme()

  return <button onClick={toggleTheme}>Current theme: {theme}</button>
}
```

### Creating an Animated Component

```tsx
import { motion } from 'framer-motion'
import { useReducedMotion } from '@hooks/useReducedMotion'
import { fadeInUp, getReducedMotionVariants } from '@utils/animations'

function MyComponent() {
  const prefersReducedMotion = useReducedMotion()
  const variants = prefersReducedMotion
    ? getReducedMotionVariants(fadeInUp)
    : fadeInUp

  return (
    <motion.div initial="hidden" animate="visible" variants={variants}>
      Content
    </motion.div>
  )
}
```

### Using AnimatedSection Wrapper

```tsx
import AnimatedSection from '@components/AnimatedSection'

function MySection() {
  return (
    <AnimatedSection
      id="my-section"
      className="my-section"
      ariaLabelledby="my-heading"
    >
      <h2 id="my-heading">My Section</h2>
      <p>Content</p>
    </AnimatedSection>
  )
}
```

## Browser Support

- Modern browsers with CSS Variables support
- IntersectionObserver API (widely supported)
- prefers-color-scheme media query
- prefers-reduced-motion media query
- localStorage API

## Accessibility

- All animations respect `prefers-reduced-motion` setting
- Theme toggle has proper ARIA labels
- Keyboard navigation fully supported
- Focus states maintained during animations
- No layout shift caused by animations
- Semantic HTML maintained throughout

## Testing

### Theme Persistence

1. Toggle theme on/off
2. Refresh page
3. Verify theme persists

### System Theme Detection

1. Clear localStorage (`resume-theme` key)
2. Refresh page
3. Verify theme matches system preference

### Reduced Motion

1. Enable "Reduce motion" in OS settings
2. Verify all animations are instant (no smooth transitions)
3. Verify theme toggle still works

### Scrollspy

1. Scroll through page
2. Verify active navigation item updates
3. Click navigation items
4. Verify smooth scroll to section

## Configuration

### Animation Timing

Edit `/src/utils/animations.ts` to adjust:

- Duration: Change `duration` in transition objects
- Easing: Modify `ease` arrays
- Distance: Adjust `x` and `y` values in variants

### Theme Colors

Edit `/src/styles/tokens.css`:

- Light theme: Modify `:root` variables
- Dark theme: Modify `[data-theme='dark']` variables

### Transition Speed

Edit `--theme-transition` variable in `/src/styles/tokens.css`
