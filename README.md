# Personal Resume Website

This is a personal resume website for V Chaitanya Chowdari, showcasing his skills, experience, and projects.

<img width="1470" height="800" alt="Screenshot 2025-09-20 at 7 14 12 PM" src="https://github.com/user-attachments/assets/966cce0a-fe79-4298-b0fa-8892224acd71" />

## Project Overview

The website is a static site built with HTML and CSS. It is designed to be a clean, modern, and professional online resume.

## Features

*   **Responsive Design:** The website is fully responsive and works on all devices, from mobile phones to desktops.
*   **Modern UI/UX:** The website has a clean and modern design, with a focus on readability and user experience.
*   **Font Awesome Icons:** The website uses Font Awesome for icons.
*   **Performance Optimized:** Implements modern web performance best practices for fast loading.

## Performance Optimizations

This website has been optimized for maximum performance with the following techniques:

### Image Optimization
- **97.84% size reduction** on profile image (318 KB → 6.86 KB)
- Modern image formats (AVIF, WebP) with PNG fallback
- Responsive images with 2x resolution for retina displays
- Lazy loading for below-the-fold images
- Explicit width/height attributes to prevent layout shifts

### Font Loading
- Critical fonts preloaded for faster render
- `font-display: swap` to prevent invisible text during font loading
- Relative font paths for better caching
- Only essential font weights loaded

### CSS Optimization
- Critical CSS inlined (1.9 KB) for instant above-the-fold render
- Non-critical CSS loaded asynchronously
- Minified CSS bundle (25% size reduction)
- CSS containment (`content-visibility`) for improved rendering performance

### Resource Loading
- Font Awesome loaded asynchronously to prevent render blocking
- DNS prefetch and preconnect for external resources
- Noscript fallbacks for accessibility

### Expected Performance
- **Lighthouse Score:** 90+ (desktop), 85+ (mobile)
- **Image Savings:** ~310 KB per page load
- **Faster First Contentful Paint (FCP)**
- **Improved Largest Contentful Paint (LCP)**
- **Reduced Cumulative Layout Shift (CLS)**

For detailed performance metrics and analysis, see [PERFORMANCE.md](PERFORMANCE.md).

## Setup and Installation

To run this project locally, you can simply open the `index.html` file in your web browser. There are no special dependencies or build steps required.

### Running Performance Audits

To run Lighthouse performance audits:

```bash
# Make the script executable (if not already)
chmod +x run-lighthouse.sh

# Run the audit
./run-lighthouse.sh
```

This will generate HTML reports for both desktop and mobile performance metrics.

## Deployment

This website is a static site, so it can be deployed to any static hosting provider, such as:

*   GitHub Pages
*   Netlify
*   Vercel
*   AWS S3

To deploy the website, you can simply upload the contents of this repository to your hosting provider.

## License

This project is open source and available under the [MIT License](LICENSE).
