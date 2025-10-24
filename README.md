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
├── public/              # Static assets (favicon, manifest, robots.txt)
├── src/
│   ├── assets/         # Dynamic assets (fonts, images)
│   │   ├── fonts/      # Proxima Nova font family
│   │   └── images/     # Profile images and logos
│   ├── components/     # Reusable React components
│   │   └── icons/      # Icon barrel exports (react-icons)
│   ├── context/        # React Context providers
│   ├── data/           # Data models and constants
│   │   ├── profile.ts  # Personal information and SEO data
│   │   ├── experience.ts  # Work experience data
│   │   ├── skills.ts   # Technical and soft skills
│   │   ├── education.ts   # Educational background
│   │   └── projects.ts # Portfolio projects
│   ├── hooks/          # Custom React hooks
│   ├── sections/       # Page sections (Hero, Experience, Projects, etc.)
│   ├── styles/         # Global styles and design tokens
│   │   ├── fonts.css   # @font-face declarations
│   │   └── global.css  # CSS custom properties and resets
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Application entry point
│   └── vite-env.d.ts   # Vite TypeScript declarations
├── index.html          # HTML entry point
├── vite.config.ts      # Vite configuration with path aliases
├── tsconfig.json       # TypeScript configuration
├── eslint.config.js    # ESLint configuration
├── .prettierrc         # Prettier configuration
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

### Code Quality

- **ESLint 9.17** - Linting with React/TypeScript rules
- **Prettier 3.4** - Code formatting
- **Husky 9.1** - Git hooks
- **lint-staged 15.3** - Pre-commit linting

## 🎨 Design System

### CSS Custom Properties

The application uses a comprehensive design token system defined in `src/styles/global.css`:

#### Color Palette

```css
/* Primary (Slate) */
--color-primary-900 to --color-primary-50

/* Accent Colors */
--color-accent-primary: #2563eb (Blue)
--color-accent-secondary: #7c3aed (Purple)
--color-accent-tertiary: #0e7490 (Cyan)
```

#### Typography Scale

- Fluid responsive sizing using `clamp()`
- Font sizes: `xs` (0.75rem) to `4xl` (3rem)
- Font family: Proxima Nova (locally hosted)

#### Spacing System

- 4/8px based scale: `--space-1` (4px) to `--space-16` (64px)

#### Shadows, Borders & Transitions

- Layered shadow system (`xs` to `xl`)
- Border radius tokens (`sm` to `full`)
- Cubic-bezier easing functions

### Accessibility

- WCAG AA compliant color contrast ratios
- Keyboard navigation support
- Respects `prefers-reduced-motion`
- Semantic HTML structure

## 🔧 Development

### Available Scripts

```bash
# Development
npm run dev              # Start dev server with HMR
npm run build           # Type-check and build for production
npm run preview         # Preview production build locally

# Code Quality
npm run lint            # Run ESLint
npm run lint:fix        # Fix ESLint errors
npm run format          # Format code with Prettier
npm run format:check    # Check code formatting
npm run type-check      # Run TypeScript compiler (no emit)
```

### Path Aliases

The project uses TypeScript path aliases configured in `tsconfig.json` and `vite.config.ts`:

```typescript
import { profile } from '@data/profile'
import Icon from '@components/icons'
import '@styles/global.css'
```

Available aliases:

- `@/*` → `./src/*`
- `@components/*` → `./src/components/*`
- `@sections/*` → `./src/sections/*`
- `@data/*` → `./src/data/*`
- `@styles/*` → `./src/styles/*`
- `@assets/*` → `./src/assets/*`
- `@hooks/*` → `./src/hooks/*`
- `@context/*` → `./src/context/*`

### Icon Usage

Icons are managed through a barrel export in `src/components/icons/index.tsx`:

```tsx
import Icon from '@components/icons'

;<Icon name="github" size={24} aria-label="GitHub Profile" />
```

This replaces the Font Awesome CDN with tree-shaken `react-icons/fa` imports.

## 📦 Build & Deployment

### Production Build

```bash
npm run build
```

Outputs to `dist/` directory with:

- Minified JavaScript (ESBuild)
- Code splitting (React vendor, animations, forms)
- Optimized CSS with vendor prefixes
- Font files and images in `dist/assets/`

### Deployment Targets

The build output is compatible with:

- **GitHub Pages** - Set `base: './'` in `vite.config.ts` (already configured)
- **Netlify** - Drag & drop `dist/` folder or connect Git repo
- **Vercel** - Import project and set build command to `npm run build`
- **AWS S3** - Upload `dist/` contents to bucket
- **Any static hosting** - Serve `dist/` folder

### GitHub Pages Deployment

1. Build the project: `npm run build`
2. Deploy the `dist/` folder to `gh-pages` branch
3. Configure GitHub Pages to serve from `gh-pages` branch

Or use GitHub Actions workflow (see `.github/workflows/`)

## 🔍 SEO Configuration

### Meta Tags

Managed via `react-helmet-async` with data from `src/data/profile.ts`:

- Primary meta tags (title, description, keywords)
- Open Graph tags (Facebook, LinkedIn)
- Twitter Card tags
- Canonical URL
- Structured data (JSON-LD Schema.org)

### Robots & Sitemap

- `robots.txt` in `public/`
- Consider adding `sitemap.xml` for better indexing

## 🎯 Migration Notes

This project was migrated from a static HTML/CSS website to a React + Vite application:

### What Was Migrated

✅ All static assets (fonts, images, favicon)  
✅ Design system (CSS custom properties)  
✅ Content data (experience, skills, education, projects)  
✅ SEO metadata and structured data  
✅ Responsive design system

### What Changed

- **Font Awesome CDN** → Tree-shaken `react-icons`
- **Single HTML file** → Component-based architecture
- **Inline styles/CSS** → CSS Modules + global design tokens
- **No build step** → Vite build with HMR and optimizations

### Legacy Files

- `index-old.html` - Original static HTML file (preserved for reference)
- `css/new_style.css` - Original stylesheet (design tokens migrated to `src/styles/`)
- `README-old.md` - Previous README (design system documentation)

## 🧪 Testing

Currently, the project does not include a testing framework. Consider adding:

- **Vitest** - Unit testing (Vite-native)
- **React Testing Library** - Component testing
- **Playwright** or **Cypress** - E2E testing

## 📝 Code Style & Conventions

### TypeScript

- Strict mode enabled
- Explicit return types for exported functions
- Interface for props, type for unions/primitives

### React

- Functional components with hooks
- PascalCase for components
- camelCase for functions/variables
- Avoid default exports (except for page components)

### CSS

- Use CSS custom properties for design tokens
- BEM-like naming for classes
- CSS Modules for component-specific styles
- Mobile-first responsive design

### File Naming

- Components: `PascalCase.tsx`
- Utilities/Hooks: `camelCase.ts`
- Styles: `kebab-case.css` or `PascalCase.module.css`

## 🤝 Contributing

When contributing, ensure:

1. Code passes ESLint: `npm run lint`
2. Code is formatted: `npm run format`
3. TypeScript compiles: `npm run type-check`
4. Build succeeds: `npm run build`

Git hooks (via Husky + lint-staged) enforce these checks on commit.

## 📄 License

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
