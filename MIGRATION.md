# Migration Guide: Static HTML to React + Vite + TypeScript

This document outlines the migration process from the static HTML/CSS resume website to a modern React application.

## Overview

**Before**: Single `index.html` file with inline CSS and Font Awesome CDN  
**After**: React 18 + Vite 6 + TypeScript 5 application with component architecture

## What Was Migrated

### ✅ Static Assets

| Original Location | New Location             | Notes                                             |
| ----------------- | ------------------------ | ------------------------------------------------- |
| `font/*.otf`      | `src/assets/fonts/*.otf` | Loaded via `@font-face` in `src/styles/fonts.css` |
| `images/*`        | `src/assets/images/*`    | Imported as ES modules                            |
| `favicon/*`       | `public/*`               | Served as static assets                           |
| `robots.txt`      | `public/robots.txt`      | Served as static asset                            |

### ✅ Content Data

All content from `index-old.html` was extracted into TypeScript data files:

- **Personal Info**: `src/data/profile.ts`
- **Work Experience**: `src/data/experience.ts`
- **Skills**: `src/data/skills.ts` (tech skills, tools, soft skills)
- **Education**: `src/data/education.ts`
- **Projects**: `src/data/projects.ts`

### ✅ Design System

CSS custom properties from `css/new_style.css` were migrated to `src/styles/global.css`:

- Color palette (primary, accent, semantic colors)
- Typography scale (fluid responsive sizing)
- Spacing system (4/8px based)
- Shadows, borders, transitions
- Accessibility features (`prefers-reduced-motion`)

### ✅ SEO & Meta Tags

Comprehensive SEO configuration was extracted from HTML `<head>`:

- Primary meta tags (title, description, keywords)
- Open Graph tags (Facebook/LinkedIn)
- Twitter Card tags
- JSON-LD structured data (Schema.org Person type)
- Canonical URL

**Implementation**: Managed via `react-helmet-async` with data from `src/data/profile.ts`

## Key Changes

### 🔄 Font Awesome CDN → React Icons

**Before**:

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
/>
<i class="fab fa-github"></i>
```

**After**:

```tsx
import Icon from '@components/icons'
;<Icon name="github" size={24} />
```

**Benefits**:

- Tree-shaking (only used icons bundled)
- No external CDN dependency
- Type-safe icon names
- Better performance

### 🔄 Font Loading

**Before**:

```css
@font-face {
  font-family: 'Proxima Nova';
  src: url('../font/ProximaNova-Regular.otf');
}
```

**After**:

```css
@font-face {
  font-family: 'Proxima Nova';
  src: url('@assets/fonts/ProximaNova-Regular.otf') format('opentype');
  font-display: swap;
}
```

**Benefits**:

- Vite asset pipeline optimization
- `font-display: swap` for better performance
- Path aliases for cleaner imports

### 🔄 HTML Structure → React Components

**Before**: Single monolithic HTML file

**After**: Component-based architecture

```
Hero Section (planned)
├── Profile Image
├── Name & Title
├── Description
└── Social Links

Sidebar (planned)
├── About Me
├── Skills
├── Education
└── Languages

Main Content (planned)
├── Work Experience
└── Projects
```

### 🔄 Build Process

**Before**: No build step, files served as-is

**After**: Vite build pipeline

- TypeScript compilation
- Code splitting (vendor, animations, forms)
- CSS optimization with PostCSS
- Asset optimization (fonts, images)
- Minification (ESBuild)

## Migration Steps Taken

### 1. Project Initialization

```bash
# Created directory structure
mkdir -p src/{components,sections,data,styles,assets/{fonts,images},hooks,context} public

# Initialized package.json with dependencies
npm install
```

### 2. Configuration Files Created

- `vite.config.ts` - Vite configuration with path aliases
- `tsconfig.json` - TypeScript configuration
- `tsconfig.node.json` - TypeScript for Vite config
- `eslint.config.js` - ESLint with React/TypeScript rules
- `.prettierrc` - Prettier configuration
- `postcss.config.js` - PostCSS with Autoprefixer

### 3. Asset Migration

```bash
# Copied fonts
cp -r font/* src/assets/fonts/

# Copied images
cp -r images/* src/assets/images/

# Copied favicon files
cp -r favicon/* public/

# Copied robots.txt
cp robots.txt public/
```

### 4. Data Extraction

- Parsed `index-old.html` to extract content
- Created TypeScript interfaces for data models
- Organized data into separate files by category

### 5. Style Migration

- Extracted CSS custom properties
- Created `src/styles/global.css` with design tokens
- Created `src/styles/fonts.css` with `@font-face` declarations

### 6. Tooling Setup

- ESLint with React/TypeScript rules
- Prettier for code formatting
- Husky + lint-staged for pre-commit hooks
- Git hooks enforce linting/formatting on commit

### 7. Icon Migration

- Identified all Font Awesome icons used
- Created icon barrel export in `src/components/icons/index.tsx`
- Mapped Font Awesome class names to `react-icons/fa` imports

### 8. Documentation

- Updated README.md with setup instructions
- Created MIGRATION.md (this file)
- Preserved legacy files for reference

## Verification Steps

### ✅ Development Server

```bash
npm run dev
# Opens at http://localhost:5173/
# Hot Module Replacement (HMR) working
```

### ✅ Production Build

```bash
npm run build
# Output: dist/ directory
# Build time: ~2-3 seconds
# No errors or warnings
```

### ✅ Code Quality

```bash
npm run lint        # ESLint: No errors
npm run format      # Prettier: Files formatted
npm run type-check  # TypeScript: No type errors
```

### ✅ Preview

```bash
npm run preview
# Serves production build at http://localhost:4173/
```

## Legacy Files Preserved

For reference, the following original files were preserved:

- `index-old.html` - Original HTML structure and content
- `css/new_style.css` - Original stylesheet with design system
- `font/` - Original font files (duplicated to `src/assets/fonts/`)
- `images/` - Original images (duplicated to `src/assets/images/`)
- `favicon/` - Original favicon files (duplicated to `public/`)
- `README-old.md` - Previous README with design system documentation

**Note**: These files are not used by the React application but kept for historical reference.

## Next Steps (Future Development)

The foundation is complete. Future tasks include:

### 1. Component Implementation

- [ ] Hero/Header component with profile image and social links
- [ ] Sidebar component with About, Skills, Education sections
- [ ] Work Experience component with job cards
- [ ] Projects component with project cards
- [ ] Footer component

### 2. Routing

- [ ] Set up React Router with routes
- [ ] Add navigation between sections
- [ ] Implement smooth scrolling

### 3. Animations

- [ ] Add Framer Motion animations to components
- [ ] Implement scroll-triggered animations
- [ ] Add hover/focus effects

### 4. Features

- [ ] Contact form with React Hook Form + Zod validation
- [ ] Dark mode toggle (theme context)
- [ ] Download resume PDF button
- [ ] SEO component with react-helmet-async

### 5. Optimization

- [ ] Image optimization (lazy loading, WebP format)
- [ ] Performance monitoring
- [ ] Lighthouse audit improvements
- [ ] Add PWA support

### 6. Testing

- [ ] Set up Vitest for unit testing
- [ ] Add React Testing Library for component tests
- [ ] E2E tests with Playwright/Cypress

## Breaking Changes

### For Content Updates

**Before**: Edit `index.html` directly

**After**: Edit TypeScript data files in `src/data/`

Example:

```typescript
// src/data/profile.ts
export const profile = {
  name: 'V Chaitanya Chowdari',
  title: 'AI Generilist | AI Automation Expert | AI Agents Builder',
  // ...
}
```

### For Style Updates

**Before**: Edit `css/new_style.css`

**After**: Edit `src/styles/global.css` or component-specific CSS modules

### For Icon Changes

**Before**: Use Font Awesome classes

```html
<i class="fab fa-github"></i>
```

**After**: Use Icon component

```tsx
<Icon name="github" size={24} />
```

## Deployment Changes

### Before

Upload files to hosting provider:

- `index.html`
- `css/`
- `font/`
- `images/`
- `favicon/`

### After

Build and deploy `dist/` folder:

```bash
npm run build
# Upload dist/ folder contents to hosting
```

For GitHub Pages, the build output is already configured with `base: './'`.

## Performance Improvements

### Bundle Size

- Code splitting reduces initial load
- Tree-shaking removes unused code
- Font subsetting (future optimization)

### Loading Performance

- `font-display: swap` prevents FOIT
- Lazy-loaded routes (when implemented)
- Optimized images (when implemented)

### Developer Experience

- Hot Module Replacement (instant updates)
- TypeScript type safety
- ESLint/Prettier enforcement
- Path aliases for cleaner imports

## Troubleshooting

### Issue: Build fails with "terser not found"

**Solution**: Changed `vite.config.ts` to use `minify: 'esbuild'` instead of `'terser'`

### Issue: Font paths not resolving

**Solution**: Use path aliases (`@assets/fonts/...`) in `@font-face` declarations

### Issue: Icons not rendering

**Solution**: Ensured icon barrel exports use default export for the component

### Issue: TypeScript errors with em-dashes in strings

**Solution**: Replaced em-dashes (–) with regular hyphens (-) in data files

## Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Hook Form](https://react-hook-form.com/)
- [TanStack Query](https://tanstack.com/query/)

## Questions or Issues?

If you encounter any issues during future development:

1. Check the console for error messages
2. Run `npm run type-check` to catch TypeScript errors
3. Run `npm run lint` to check for linting issues
4. Refer to component examples in the `/src` directory
5. Check the original files (`index-old.html`, `css/new_style.css`) for reference

---

**Migration completed**: React foundation successfully initialized with all assets, data, and tooling in place.
