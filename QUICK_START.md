# Quick Start Guide

Get up and running with the React + Vite + TypeScript resume website in minutes.

## 🚀 Installation (First Time)

```bash
# 1. Clone the repository (if not already done)
git clone <repository-url>
cd <repository-name>

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Visit **http://localhost:5173/** to see the app running!

## 📝 Daily Development Workflow

```bash
# Start dev server with hot reload
npm run dev

# In another terminal, watch for type errors
npm run type-check

# Lint your code
npm run lint

# Auto-fix linting issues
npm run lint:fix

# Format all files
npm run format
```

## 🏗️ Building for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

Production files will be in the `dist/` directory.

## 📂 Adding New Content

### Update Personal Information

Edit `src/data/profile.ts`:

```typescript
export const profile = {
  name: 'Your Name',
  title: 'Your Title',
  // ...
}
```

### Add Work Experience

Edit `src/data/experience.ts`:

```typescript
export const experiences: Experience[] = [
  {
    id: 'unique-id',
    title: 'Job Title',
    company: 'Company Name',
    period: 'Jan 2024 - Present',
    description: '...',
    responsibilities: ['...'],
  },
  // ...
]
```

### Add Projects

Edit `src/data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: 'project-id',
    title: 'Project Name',
    url: 'https://project-url.com',
    description: '...',
  },
  // ...
]
```

### Update Skills

Edit `src/data/skills.ts`:

```typescript
export const techSkills: string[] = [
  'JavaScript',
  'TypeScript',
  // ...
]
```

## 🎨 Styling

### Global Styles

Edit `src/styles/global.css` to modify:

- Color palette
- Typography scale
- Spacing system
- Shadows and borders

### Component-Specific Styles

Create a CSS Module next to your component:

```
MyComponent.tsx
MyComponent.module.css
```

Import and use:

```tsx
import styles from './MyComponent.module.css'

;<div className={styles.container}>...</div>
```

## 🖼️ Using Icons

```tsx
import Icon from '@components/icons'

// Basic icon
<Icon name="github" />

// With size
<Icon name="linkedin" size={24} />

// With accessibility label
<Icon name="email" aria-label="Send Email" />
```

Available icons: github, twitter, linkedin, email, globe, user, handshake, cog, tools, graduate, puzzle, language, suitcase, code, download

## 🛠️ Common Tasks

### Add a New Component

1. Create file: `src/components/MyComponent.tsx`

```tsx
interface MyComponentProps {
  title: string
}

export default function MyComponent({ title }: MyComponentProps) {
  return <div>{title}</div>
}
```

2. Import using path alias:

```tsx
import MyComponent from '@components/MyComponent'
```

### Add a Custom Hook

1. Create file: `src/hooks/useMyHook.ts`

```tsx
export function useMyHook() {
  // Hook logic
  return {
    /* state, functions */
  }
}
```

2. Import using path alias:

```tsx
import { useMyHook } from '@hooks/useMyHook'
```

### Add a Context Provider

1. Create file: `src/context/MyContext.tsx`

```tsx
import { createContext, useContext } from 'react'

const MyContext = createContext(null)

export function MyProvider({ children }) {
  return <MyContext.Provider value={/* value */}>{children}</MyContext.Provider>
}

export function useMyContext() {
  return useContext(MyContext)
}
```

2. Wrap your app in `src/App.tsx`:

```tsx
import { MyProvider } from '@context/MyContext'

;<MyProvider>{/* App content */}</MyProvider>
```

## 🔍 Troubleshooting

### Dev server not starting

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Type errors

```bash
# Run type check to see all errors
npm run type-check
```

### Linting errors

```bash
# See all linting issues
npm run lint

# Auto-fix what can be fixed
npm run lint:fix
```

### Formatting issues

```bash
# Check which files need formatting
npm run format:check

# Format all files
npm run format
```

### Build failing

```bash
# Check for type errors first
npm run type-check

# Then check for linting errors
npm run lint

# Fix any issues and try building again
npm run build
```

## 📚 Useful Resources

- [React Docs](https://react.dev/) - React documentation
- [Vite Docs](https://vitejs.dev/) - Vite documentation
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - TypeScript guide
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [Framer Motion](https://www.framer.com/motion/) - Animation library

## ⚡ Pro Tips

1. **Hot Reload**: Save files to see changes instantly (no page refresh needed)

2. **Path Aliases**: Use `@` imports for cleaner code

   ```tsx
   // ❌ Avoid
   import { profile } from '../../../data/profile'

   // ✅ Better
   import { profile } from '@data/profile'
   ```

3. **Type Safety**: Let TypeScript catch errors before runtime

   ```tsx
   // TypeScript will warn if you use wrong icon name
   <Icon name="githb" /> // ❌ Error: "githb" is not a valid icon
   <Icon name="github" /> // ✅ Correct
   ```

4. **Code Formatting**: Set up your editor to format on save
   - VS Code: Install Prettier extension and enable "Format on Save"

5. **Git Hooks**: Code is automatically linted and formatted on commit
   - Just commit normally: `git commit -m "message"`
   - Hooks run automatically

## 🎯 Next Steps

Ready to build? Start with:

1. **Create the Hero Section**
   - Add profile image
   - Display name and title
   - Add social links
   - Add download button

2. **Build the Sidebar**
   - About Me section
   - Skills list
   - Education timeline
   - Languages

3. **Add Main Content**
   - Work Experience cards
   - Project showcase
   - Animations with Framer Motion

4. **Implement SEO**
   - Use react-helmet-async
   - Add meta tags from data

5. **Add Routing**
   - Multiple pages
   - Smooth navigation

---

Happy coding! 🎉
