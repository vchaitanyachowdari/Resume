# SEO Implementation Guide

This document outlines the SEO metadata and best practices implemented in this resume website.

## Features Implemented

### 1. Dynamic SEO Meta Tags with react-helmet-async

- **Title Tags**: Dynamic titles that change based on the active section
- **Meta Descriptions**: Section-specific descriptions optimized for search engines
- **Keywords**: Relevant keywords for each section
- **Canonical URLs**: Proper canonical links to avoid duplicate content issues
- **Language Tags**: HTML lang attribute set to "en"
- **Robots Meta**: Control over indexing and crawling

### 2. Open Graph & Social Media Tags

#### Open Graph (Facebook, LinkedIn)

- `og:type`: Set to "website"
- `og:site_name`: "V Chaitanya Chowdari"
- `og:title`: Dynamic title per section
- `og:description`: Dynamic description per section
- `og:url`: Section-specific URLs
- `og:image`: Optimized OG image (1200x630px recommended)
- `og:image:width` & `og:image:height`: Image dimensions
- `og:image:alt`: Descriptive alt text
- `og:locale`: Set to "en_US"

#### Twitter Card

- `twitter:card`: "summary_large_image"
- `twitter:site`: @vchaitanyachai
- `twitter:creator`: @vchaitanyachai
- `twitter:title`: Dynamic title per section
- `twitter:description`: Dynamic description per section
- `twitter:image`: Optimized Twitter card image
- `twitter:image:alt`: Descriptive alt text

### 3. JSON-LD Structured Data

Implemented multiple Schema.org types:

#### Person Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "V Chaitanya Chowdari",
  "email": "vchaitanya@chowdari.in",
  "url": "https://www.chowdari.in",
  "jobTitle": "AI Generilist | AI Automation Expert | AI Agents Builder",
  "description": "...",
  "sameAs": ["GitHub", "LinkedIn", "Twitter", "Portfolio URLs"]
}
```

#### WebSite Schema

- Describes the website
- Links to the author
- Provides site description

#### Organization Schema

- For each major company/startup
- Includes employee relationships
- Founding dates where applicable

#### CreativeWork Schema (Projects)

- For featured projects
- Includes project descriptions, URLs, and tags
- Links creator to Person schema

### 4. Theme Color Meta Tags

Dynamic theme color that changes based on light/dark mode:

- **Light Mode**: `#ffffff` (white)
- **Dark Mode**: `#0f172a` (slate-900)

Also includes:

- `msapplication-TileColor`: For Windows tiles
- `apple-mobile-web-app-status-bar-style`: For iOS

### 5. Sitemap & Robots.txt

#### Sitemap.xml

Located at: `/sitemap.xml`

Contains all main sections:

- `/` (Homepage - Priority: 1.0, Weekly)
- `/about` (Priority: 0.9, Monthly)
- `/experience` (Priority: 0.9, Monthly)
- `/projects` (Priority: 0.8, Monthly)
- `/skills` (Priority: 0.8, Monthly)
- `/education` (Priority: 0.7, Yearly)
- `/certifications` (Priority: 0.7, Monthly)
- `/hobbies` (Priority: 0.6, Yearly)
- `/contact` (Priority: 0.9, Monthly)

#### Robots.txt

Located at: `/robots.txt`

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /private/

Sitemap: https://www.chowdari.in/resume/sitemap.xml
```

### 6. Performance & SEO Best Practices

- **Preconnect & DNS-prefetch**: For external resources
- **Responsive Images**: Using WebP format with fallbacks
- **Lazy Loading**: For below-the-fold content
- **Font Optimization**: Local fonts with proper preloading
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Accessibility**: ARIA labels and keyboard navigation

## Usage

### Running the Application

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Generating Sitemap

The sitemap is automatically generated during the build process via a Vite plugin. You can also generate it manually:

```bash
npm run generate-sitemap
```

## SEO Component

The `SEO` component is located at `/src/components/SEO/SEO.tsx` and accepts the following props:

```typescript
interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  canonicalUrl?: string
  ogImage?: string
  ogType?: string
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player'
  twitterHandle?: string
  noindex?: boolean
  nofollow?: boolean
  structuredData?: Record<string, unknown>[]
}
```

### Example Usage

```tsx
import { SEO } from '@components/SEO'
import { getAllStructuredData } from '@utils/structuredData'

function MyPage() {
  const structuredData = getAllStructuredData()

  return (
    <>
      <SEO
        title="My Page Title"
        description="My page description"
        keywords={['keyword1', 'keyword2']}
        canonicalUrl="https://www.chowdari.in/resume/my-page"
        ogImage="https://www.chowdari.in/resume/og-image.png"
        structuredData={structuredData}
      />
      {/* Page content */}
    </>
  )
}
```

## Testing SEO

### Tools & Resources

1. **Google Rich Results Test**: https://search.google.com/test/rich-results
   - Test your structured data
   - Ensure JSON-LD is valid

2. **Google Search Console**: https://search.google.com/search-console
   - Submit sitemap
   - Monitor indexing status
   - Check for errors

3. **Lighthouse (Chrome DevTools)**:

   ```bash
   npm run build
   npm run preview
   # Open Chrome DevTools > Lighthouse > Run audit
   ```

   - Target: SEO score ≥ 95

4. **Facebook Debugger**: https://developers.facebook.com/tools/debug/
   - Test Open Graph tags
   - Clear Facebook cache

5. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
   - Test Twitter card appearance

6. **Schema Markup Validator**: https://validator.schema.org/
   - Validate JSON-LD structured data

### Manual Checks

1. **View Page Source**: Right-click > "View Page Source"
   - Verify meta tags are present
   - Check JSON-LD scripts

2. **Test Dynamic Updates**:
   - Navigate between sections
   - Verify title and meta tags update
   - Check canonical URL changes

3. **Test Theme Color**:
   - Toggle dark/light mode
   - Check theme-color meta tag updates

## Deployment

When deploying to production:

1. Ensure `base` URL in `vite.config.ts` is correct
2. Update `baseUrl` in sitemap plugin configuration
3. Update all absolute URLs in SEO data files
4. Submit sitemap to Google Search Console
5. Test all meta tags on live site

## Files Structure

```
├── src/
│   ├── components/
│   │   └── SEO/
│   │       ├── SEO.tsx         # Main SEO component
│   │       └── index.ts        # Export
│   ├── data/
│   │   └── seoData.ts          # Section-specific SEO data
│   └── utils/
│       └── structuredData.ts   # JSON-LD schema helpers
├── public/
│   ├── robots.txt              # Robots.txt file
│   ├── sitemap.xml             # Generated sitemap
│   └── og-image.png            # Open Graph image
├── scripts/
│   └── generate-sitemap.js     # Sitemap generation script
└── vite-plugin-sitemap.ts      # Vite plugin for build-time generation
```

## Maintenance

### Updating SEO Data

1. **Per-section SEO**: Edit `/src/data/seoData.ts`
2. **Structured data**: Edit `/src/utils/structuredData.ts`
3. **Sitemap URLs**: Edit `/scripts/generate-sitemap.js` or `/vite-plugin-sitemap.ts`

### Adding New Sections

1. Add section to navigation data
2. Add section SEO data in `seoData.ts`
3. Update sitemap script with new route
4. Rebuild and test

## Performance Impact

The SEO implementation has minimal performance impact:

- react-helmet-async: ~7KB gzipped
- Structured data: ~2-3KB per page
- No runtime performance overhead
- All meta tags rendered on initial load

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11+ (with polyfills if needed)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This SEO implementation follows the same license as the main project.
