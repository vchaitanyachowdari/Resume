# Performance Optimization Guide

This document outlines the performance optimizations implemented in the resume website to achieve Lighthouse scores ≥90 on both desktop and mobile.

## Table of Contents

1. [Code Splitting](#code-splitting)
2. [Image Optimization](#image-optimization)
3. [Build Optimizations](#build-optimizations)
4. [Critical Asset Preloading](#critical-asset-preloading)
5. [CSS Optimizations](#css-optimizations)
6. [Web Vitals Monitoring](#web-vitals-monitoring)
7. [Bundle Analysis](#bundle-analysis)

## Code Splitting

### React.lazy and Suspense

Non-critical sections are lazy-loaded using `React.lazy` and `Suspense` to reduce initial bundle size:

- **Lazy-Loaded Sections:**
  - Projects Section
  - Education Section
  - Certifications Section
  - Hobbies Section
  - Contact Section

- **Critical Sections (Always Loaded):**
  - Hero Section
  - About Section
  - Experience Section
  - Skills Section

### Intersection Observer Preloading

The `LazySection` component uses Intersection Observer API to preload components before they enter the viewport:

```tsx
<LazySection
  importFn={() => import('@sections/ProjectsSection')}
  preloadDistance={300}
/>
```

- `preloadDistance`: Triggers component loading 300px before viewport intersection
- Skeleton fallbacks are shown while components load
- Improves perceived performance with smooth transitions

## Image Optimization

### WebP Generation

All PNG/JPG images are automatically converted to WebP format with multiple responsive sizes:

```bash
npm run optimize-images
```

**Generated Sizes:**
- 320w, 640w, 960w, 1280w (responsive breakpoints)
- Full-size WebP versions

**Benefits:**
- 25-35% smaller file sizes compared to PNG/JPG
- Faster image loading
- Reduced bandwidth usage

### Optimized Image Component

The `OptimizedImage` component provides:
- Native lazy loading with intersection observer
- Automatic WebP/fallback format selection
- Responsive srcset support
- Smooth loading transitions
- Defined width/height to prevent layout shifts

```tsx
<OptimizedImage
  src={image}
  webpSrc={imageWebp}
  alt="Description"
  width={300}
  height={300}
  eager={false} // or true for critical images
/>
```

## Build Optimizations

### Vite Configuration

**Manual Chunking Strategy:**
```typescript
manualChunks: {
  'react-vendor': ['react', 'react-dom'],
  'react-router': ['react-router-dom'],
  'react-helmet': ['react-helmet-async'],
  'react-query': ['@tanstack/react-query'],
  'animation': ['framer-motion'],
  'forms': ['react-hook-form', '@hookform/resolvers', 'zod'],
  'icons': ['react-icons'],
}
```

**Benefits:**
- Separate vendor chunks for better caching
- Reduced main bundle size
- Efficient code splitting

### Compression

Both Gzip and Brotli compression are applied:

```typescript
viteCompression({
  algorithm: 'gzip',
  ext: '.gz',
})
viteCompression({
  algorithm: 'brotliCompress',
  ext: '.br',
})
```

**Compression Ratios:**
- Gzip: ~70% size reduction
- Brotli: ~75% size reduction

### Asset Organization

Assets are organized by type for optimal caching:
- `/assets/js/[name]-[hash].js` - JavaScript bundles
- `/assets/css/[name]-[hash].css` - Stylesheets
- `/assets/images/[name]-[hash][ext]` - Images
- `/assets/fonts/[name]-[hash][ext]` - Fonts

## Critical Asset Preloading

### Font Preloading

Critical fonts are preloaded in index.html:

```html
<link rel="preload" href="/src/assets/fonts/ProximaNova-Regular.otf" 
      as="font" type="font/otf" crossorigin="anonymous" />
<link rel="preload" href="/src/assets/fonts/Proxima Nova Bold.otf" 
      as="font" type="font/otf" crossorigin="anonymous" />
```

### Hero Image Preloading

The hero image is preloaded as it's critical for LCP:

```html
<link rel="preload" href="/src/assets/images/logo.webp" 
      as="image" type="image/webp" />
```

## CSS Optimizations

### CSS Containment

Applied to major sections to improve rendering performance:

```css
.resume-section {
  contain: layout style paint;
  content-visibility: auto;
  contain-intrinsic-size: auto 500px;
}
```

**Benefits:**
- Browser can skip rendering off-screen content
- Reduced layout thrashing
- Improved scroll performance

### Static Dimensions

All images and media have defined dimensions to prevent layout shifts:

```tsx
<OptimizedImage width={300} height={300} />
```

**Impact on Core Web Vitals:**
- Improved CLS (Cumulative Layout Shift)
- Better visual stability
- Enhanced user experience

### Content Visibility

Sections use `content-visibility: auto` for lazy rendering:
- Only visible sections are rendered
- Hidden sections are skipped by the browser
- Significantly faster initial render

## Web Vitals Monitoring

### useWebVitals Hook

Runtime performance monitoring via the `web-vitals` library:

```tsx
useWebVitals({
  reportToConsole: true,
  reportToAnalytics: false,
})
```

**Tracked Metrics:**
- **CLS** (Cumulative Layout Shift) - Visual stability
- **INP** (Interaction to Next Paint) - Responsiveness (replaces FID)
- **LCP** (Largest Contentful Paint) - Loading performance
- **FCP** (First Contentful Paint) - Initial render
- **TTFB** (Time to First Byte) - Server response

**Console Output:**
- Metrics logged with color-coded ratings (good/needs-improvement/poor)
- Real-time performance insights during development
- Optional analytics integration for production

## Bundle Analysis

### Rollup Visualizer

View detailed bundle composition:

```bash
npm run analyze
```

**Generates:**
- Interactive treemap of bundle contents
- Gzip and Brotli size comparison
- Module size breakdown
- Dependency analysis

**Output:** `dist/stats.html`

### Key Metrics to Monitor

- **Initial JS Payload:** Should be < 200KB (gzipped)
- **Largest Chunk:** Keep individual chunks < 150KB
- **Lazy Chunks:** Verify proper code splitting
- **Vendor Chunks:** Monitor third-party library sizes

## Performance Targets

### Lighthouse Scores

**Target:** ≥90 on both desktop and mobile

**Key Areas:**
- Performance: ≥90
- Accessibility: ≥95
- Best Practices: ≥95
- SEO: ≥95

### Core Web Vitals

- **LCP:** < 2.5s (Good)
- **INP:** < 200ms (Good)
- **CLS:** < 0.1 (Good)
- **FCP:** < 1.8s (Good)
- **TTFB:** < 600ms (Good)

## Testing Performance

### Local Testing

1. Build the production bundle:
   ```bash
   npm run build
   ```

2. Preview the production build:
   ```bash
   npm run preview
   ```

3. Run Lighthouse audit:
   - Open Chrome DevTools
   - Navigate to Lighthouse tab
   - Run audit for both mobile and desktop

### Bundle Size Analysis

```bash
npm run analyze
```

Review the generated `dist/stats.html` for:
- Unexpected large dependencies
- Opportunities for further code splitting
- Duplicate dependencies

### Network Performance

Monitor network tab for:
- Resource loading order
- Compression effectiveness
- Cache utilization
- Lazy loading behavior

## Continuous Optimization

### Regular Tasks

1. **Run bundle analysis** after adding new dependencies
2. **Monitor web vitals** in production via analytics
3. **Test on slow networks** (3G throttling)
4. **Verify image optimization** when adding new images
5. **Check Lighthouse scores** before deploying

### Best Practices

- Keep vendor chunks small by avoiding unnecessary dependencies
- Lazy-load non-critical features
- Use WebP for all images
- Define explicit dimensions for media
- Minimize JavaScript execution time
- Implement efficient caching strategies

## Resources

- [Web Vitals](https://web.dev/vitals/)
- [Vite Build Optimization](https://vitejs.dev/guide/build.html)
- [React Code Splitting](https://react.dev/reference/react/lazy)
- [WebP Image Format](https://developers.google.com/speed/webp)
- [CSS Containment](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Containment)
