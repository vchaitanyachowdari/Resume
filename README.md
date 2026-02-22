# Personal Resume Website - React + Vite + TypeScript

Modern personal resume website for V Chaitanya Chowdari, built with React, Vite, and TypeScript. This application showcases skills, experience, projects, and professional background with a focus on AI, automation, and full-stack development.

<img width="1470" height="800" alt="Screenshot 2025-09-20 at 7 14 12 PM" src="https://github.com/user-attachments/assets/966cce0a-fe79-4298-b0fa-8892224acd71" />

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will start at `http://localhost:5173/`

## 📁 Project Structure

```
├── public/              # Static assets (favicon, manifest, robots.txt, sitemap.xml)
│   ├── robots.txt      # Search engine crawling rules
│   ├── sitemap.xml     # Auto-generated sitemap (build)
│   ├── og-image.png    # Open Graph social sharing image
│   └── site.webmanifest # PWA manifest
├── src/
│   ├── assets/         # Dynamic assets (fonts, images)
│   │   ├── fonts/      # Proxima Nova font family
│   │   └── images/     # Profile images and logos
│   ├── components/     # Reusable React components
│   │   ├── icons/      # Icon barrel exports (react-icons)
│   │   └── SEO/        # SEO meta tags component
│   ├── context/        # React Context providers
│   │   └── ThemeContext.tsx # Dark/light theme management
│   ├── data/           # Data models and constants
│   │   ├── profile.ts  # Personal information
│   │   ├── seoData.ts  # Section-specific SEO metadata
│   │   ├── experience.ts  # Work experience data
│   │   ├── skills.ts   # Technical and soft skills
│   │   ├── education.ts   # Educational background
│   │   └── projects.ts # Portfolio projects
│   ├── hooks/          # Custom React hooks
│   ├── sections/       # Page sections (Hero, Experience, Projects, etc.)
│   ├── styles/         # Global styles and design tokens
│   │   ├── fonts.css   # @font-face declarations
│   │   ├── tokens.css  # Design tokens and theme variables
│   │   └── global.css  # CSS custom properties and resets
│   ├── test/           # Test setup and utilities
│   │   ├── setup.ts    # Vitest setup and global mocks
│   │   └── test-utils.tsx # Custom render with providers
│   ├── utils/          # Utility functions
│   │   └── structuredData.ts # JSON-LD schema generators
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Application entry point
│   └── vite-env.d.ts   # Vite TypeScript declarations
├── e2e/                # End-to-end tests
│   ├── routing.spec.ts # Navigation and routing tests
│   ├── contact-form.spec.ts # Form submission tests
│   └── theme-persistence.spec.ts # Theme toggle tests
├── scripts/            # Build scripts
│   └── generate-sitemap.js # Sitemap generation script
├── index.html          # HTML entry point
├── vite.config.ts      # Vite configuration with path aliases
├── vitest.config.ts    # Vitest test configuration
├── playwright.config.ts # Playwright E2E test configuration
├── vite-plugin-sitemap.ts # Custom Vite plugin for sitemap
├── tsconfig.json       # TypeScript configuration
├── eslint.config.js    # ESLint configuration
├── .prettierrc         # Prettier configuration
├── SEO_IMPLEMENTATION.md # SEO documentation
├── PWA_ANALYTICS_DOCUMENTATION.md # PWA & Analytics documentation
└── package.json        # Dependencies and scripts
```

## 🛠️ Technology Stack

### Core Framework

- **React 18.3** - UI library with hooks and concurrent features
- **TypeScript 5.6** - Type-safe JavaScript
- **Vite 6.0** - Fast build tool with HMR

### Routing & State Management

- **React Router DOM 7.1** - Client-side routing
- **@tanstack/react-query 5.62** - Server state management (ready for API integration)
- **React Context** - Global state management

### UI & Animation

- **Framer Motion 11.15** - Production-ready animation library
- **React Icons 5.4** - Tree-shakeable icon library (replacing Font Awesome CDN)
- **CSS Modules** - Scoped component styles
- **PostCSS + Autoprefixer** - CSS processing and vendor prefixes

### Forms & Validation

- **React Hook Form 7.54** - Performant form library
- **Zod 3.24** - TypeScript-first schema validation

### Meta Tags & SEO

- **React Helmet Async 2.0** - Manage document head (title, meta tags, etc.)

### PWA & Analytics

- **vite-plugin-pwa** - Progressive Web App support with Workbox
- **workbox-window** - Service worker management
- **Google Analytics 4** - Privacy-respecting analytics with DNT support

### Code Quality

- **ESLint 9.17** - Linting with React/TypeScript rules
- **Prettier 3.4** - Code formatting
- **Husky 9.1** - Git hooks
- **lint-staged 15.3** - Pre-commit linting

### Testing

- **Vitest 4.0** - Unit and integration testing (Jest-compatible API)
- **@testing-library/react 16.3** - React component testing
- **@testing-library/jest-dom 6.9** - Custom matchers for DOM nodes
- **@testing-library/user-event 14.6** - User interaction simulation
- **Playwright 1.56** - End-to-end testing across browsers
- **@vitest/ui** - Interactive test UI

## 🧪 Testing

This project includes comprehensive testing coverage for critical components and workflows.

### Unit & Integration Tests

Unit tests are written using **Vitest** with **React Testing Library**, covering:

- **HeroSection** - Rendering, social links, download tracking, accessibility
- **SectionNav** - Navigation items, routing, active states, keyboard accessibility
- **ContactForm** - Form validation, submission, error handling, accessibility
- **ThemeToggle** - Theme switching, persistence, keyboard navigation

```bash
# Run tests in watch mode
npm run test

# Run tests once
npm run test:run

# View test UI
npm run test:ui

# Generate coverage report
npm run test:coverage
```

**Coverage Thresholds:**
- Lines: 60%
- Functions: 60%
- Branches: 60%
- Statements: 60%

Tests are located in `__tests__` directories next to the components they test:
```
src/
  components/
    __tests__/
      ContactForm.test.tsx
      ThemeToggle.test.tsx
  sections/
    __tests__/
      HeroSection.test.tsx
```

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

## SEO Configuration

This website includes comprehensive SEO optimization to maximize search engine visibility and social media sharing effectiveness.

### What's Included

#### 1. **Primary Meta Tags**
*   **Title:** Optimized with primary keywords (AI Generalist, Automation Expert, Full Stack Developer)
*   **Meta Description:** Compelling 155-character description highlighting key expertise and accomplishments
*   **Keywords:** Comprehensive list of relevant technical skills and specializations
*   **Robots Directive:** Set to `index, follow` for maximum search engine crawling
*   **Language:** Specified as English
*   **Canonical URL:** Set to prevent duplicate content issues

#### 2. **Open Graph Meta Tags (Facebook, LinkedIn)**
*   **og:type:** Set to `profile` for person/professional pages
*   **og:title:** SEO-optimized title for social sharing
*   **og:description:** Engaging description for social previews
*   **og:image:** Profile image with proper dimensions (1200x630 recommended)
*   **og:url:** Canonical URL of the resume page
*   **profile:first_name & profile:last_name:** Structured name data

#### 3. **Twitter Card Meta Tags**
*   **twitter:card:** Set to `summary_large_image` for prominent visual display
*   **twitter:creator:** Twitter handle (@vchaitanyachai)
*   **twitter:title:** Optimized title for Twitter sharing
*   **twitter:description:** Concise description for tweets
*   **twitter:image:** Profile image with descriptive alt text

#### 4. **JSON-LD Structured Data (Schema.org)**
The website implements comprehensive `Person` schema including:
*   **Basic Information:** Name, job titles, description, contact details
*   **Education:** Alumni information from IIT Indore, 100x Engineers, and BIET
*   **Skills:** Complete list of technical skills and expertise areas
*   **Languages:** Spoken languages (English, Telugu, Hindi, Kannada)
*   **Social Profiles:** Links to GitHub, Twitter/X, LinkedIn, and portfolio sites (sameAs property)
*   **Work Organizations:** Current roles and companies (worksFor property)
*   **Credentials:** Educational certificates and professional qualifications

This structured data helps search engines better understand the content and can enable rich results in search listings.

#### 5. **Semantic HTML Structure**
*   **Heading Hierarchy:** Logical structure (h1 → h2 → h3 → h4 → h5) for accessibility and SEO
*   **Alt Text:** Descriptive alternative text for all images
*   **Language Attribute:** `lang="en"` on HTML tag
*   **Semantic Elements:** Proper use of `<header>`, `<main>`, `<aside>`, `<section>`, and `<footer>`

### How to Maintain SEO

When updating the website, follow these guidelines to maintain SEO effectiveness:

#### Updating Personal Information
1. **Update Meta Tags:** If you change your job title or expertise, update:
   *   `<title>` tag
   *   `meta name="title"`
   *   `meta name="description"`
   *   `meta name="keywords"`
   *   Open Graph tags (`og:title`, `og:description`)
   *   Twitter Card tags (`twitter:title`, `twitter:description`)

2. **Update JSON-LD Schema:** Modify the structured data script to reflect:
   *   New job titles in `jobTitle` array
   *   New skills in `knowsAbout` array
   *   New education entries in `alumniOf` array
   *   New organizations in `worksFor` array
   *   Updated social profiles in `sameAs` array

#### Changing Images
1. Update the image URL in:
   *   `og:image` meta tag
   *   `twitter:image` meta tag
   *   JSON-LD `image` property
2. Ensure images are:
   *   At least 1200x630 pixels for optimal social sharing
   *   Compressed for fast loading
   *   Have descriptive alt text

#### Adding New Content
1. **Maintain Heading Hierarchy:** Use headings in order (h1 → h2 → h3, etc.)
2. **Add Alt Text:** Include descriptive alt text for all new images
3. **Update Keywords:** Add relevant new skills or technologies to meta keywords
4. **Update Structured Data:** Add new accomplishments, skills, or credentials to JSON-LD

#### Canonical URL
*   The canonical URL is currently set to `https://www.chowdari.in/resume`
*   If you deploy to a different domain, update:
    *   `<link rel="canonical" href="...">`
    *   `og:url` meta tag
    *   `twitter:url` meta tag
    *   JSON-LD `url` property

### Testing Your SEO

Use these tools to validate your SEO implementation:

1. **Google Rich Results Test:** https://search.google.com/test/rich-results
   *   Validates JSON-LD structured data
   *   Shows preview of how Google might display your page

2. **Facebook Sharing Debugger:** https://developers.facebook.com/tools/debug/
   *   Tests Open Graph tags
   *   Shows preview of Facebook/LinkedIn posts

3. **Twitter Card Validator:** https://cards-dev.twitter.com/validator
   *   Tests Twitter Card implementation
   *   Shows preview of Twitter posts

4. **SEO Site Checkup:** https://seositecheckup.com/
   *   Comprehensive SEO audit
   *   Identifies improvement opportunities

5. **Schema Markup Validator:** https://validator.schema.org/
   *   Validates JSON-LD structured data syntax
   *   Checks Schema.org compliance

### Best Practices

1. **Keep Content Updated:** Regularly update your resume with new skills and experiences
2. **Monitor Performance:** Use Google Search Console to track search performance
3. **Optimize Images:** Compress images to maintain fast loading times
4. **Mobile-First:** Ensure all changes work well on mobile devices
5. **Consistent NAP:** Keep Name, Address, Phone consistent across all platforms
6. **Fresh Content:** Update content regularly to signal active maintenance to search engines
7. **Internal Links:** Link to your portfolio and projects for better site structure
8. **External Validation:** Encourage social shares and backlinks to improve authority

### Common Issues and Solutions

**Issue:** Changes not reflected in social media previews
*   **Solution:** Use the Facebook and Twitter debugging tools to clear cache

**Issue:** Structured data validation errors
*   **Solution:** Use Google Rich Results Test and Schema Markup Validator to identify errors

**Issue:** Images not showing in previews
*   **Solution:** Ensure image URLs are absolute (include full domain) and publicly accessible

**Issue:** Duplicate content warnings
*   **Solution:** Ensure canonical URL is correctly set and consistent

## License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**V Chaitanya Chowdari**  
AI Generalist | AI Automation Expert | AI Agents Builder

- 🌐 Portfolio: [chowdari.in](https://www.chowdari.in)
- 💼 LinkedIn: [v-chaitanya-chowdari](https://www.linkedin.com/in/v-chaitanya-chowdari-bb3733202)
- 🐙 GitHub: [vchaitanyachowdari](https://github.com/vchaitanyachowdari)
- 🐦 Twitter: [@vchaitanyachai](https://x.com/vchaitanyachai)
- 📧 Email: vchaitanya@chowdari.in

---

**Note**: This is the initial React foundation setup. Future development will include:

- Component implementation for all resume sections
- Page routing and navigation
- Animations with Framer Motion
- Contact form with validation
- Dark mode theme toggle
- Performance optimizations
