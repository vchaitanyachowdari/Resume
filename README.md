# Personal Resume Website

This is a personal resume website for V Chaitanya Chowdari, showcasing his skills, experience, and projects.

<img width="1470" height="800" alt="Screenshot 2025-09-20 at 7 14 12 PM" src="https://github.com/user-attachments/assets/966cce0a-fe79-4298-b0fa-8892224acd71" />

## Project Overview

The website is a static site built with HTML and CSS. It is designed to be a clean, modern, and professional online resume.

## Features

*   **Responsive Design:** The website is fully responsive and works on all devices, from mobile phones to desktops.
*   **Modern UI/UX:** The website has a clean and modern design, with a focus on readability and user experience.
*   **Font Awesome Icons:** The website uses Font Awesome for icons.
*   **Contemporary Design System:** Built with a comprehensive design token system including modern colors, fluid typography, and consistent spacing.
*   **Smooth Transitions:** Enhanced user experience with subtle animations and hover effects.
*   **Accessibility:** WCAG AA compliant color contrast ratios and keyboard navigation support.

## Design System

The website implements a modern design token system documented in the CSS file. Key components include:

### Color Palette
- **Primary Colors:** Slate blue scale from `#0f172a` to `#f8fafc` for neutral hierarchy
- **Accent Colors:** Blue (`#3b82f6`), Purple (`#8b5cf6`), and Cyan (`#06b6d4`) for interactive elements
- **Semantic Colors:** Predefined tokens for text, backgrounds, and borders ensuring consistency

### Typography Scale
Uses `clamp()` for fluid responsive font sizing:
- **Font Sizes:** From `xs` (0.75-0.875rem) to `4xl` (2.25-3rem)
- **Font Weights:** Light (300), Regular (400), Medium (500), Semibold (600), Bold (700)
- **Line Heights:** Tight (1.25) to Loose (2) for optimal readability
- **Letter Spacing:** From tight (-0.025em) to widest (0.1em) for hierarchy

### Spacing System
4/8px based spacing scale using CSS custom properties:
- **Scale:** `--space-1` (4px) through `--space-24` (96px)
- **Consistent Rhythm:** Applied uniformly across padding, margins, and gaps

### Visual Components
- **Shadows:** Layered depth system from `xs` to `2xl` for card elevation
- **Border Radius:** From `sm` (0.25rem) to `full` (9999px) for modern rounded corners
- **Transitions:** Cubic-bezier easing functions for smooth animations (150-500ms)
- **Gradients:** Subtle gradients on hero section, buttons, and interactive elements

### Component Styles
- **Hero Section:** Gradient background with animated pulse effect
- **Cards:** Elevated sections with hover states and visual depth
- **Buttons:** Gradient-filled with overlay effects and transform animations
- **Skills Badges:** Pill-shaped with gradient hover states
- **Job Cards:** Left-bordered with slide-in hover effects
- **Social Links:** Icon buttons with gradient fills on hover

### Accessibility Features
- **Color Contrast:** All text meets WCAG AA standards (4.5:1 for normal text, 3:1 for large text)
  - Primary Text (#1e293b) on White: 14.63:1
  - Secondary Text (#475569) on White: 7.58:1
  - Accent Blue (#2563eb) on White: 5.17:1
  - Accent Purple (#7c3aed) on White: 5.70:1
  - White on Dark Backgrounds: 17.85:1
- **Focus States:** Visible outlines on all interactive elements
- **Reduced Motion:** Respects `prefers-reduced-motion` user preference
- **Semantic HTML:** Proper heading hierarchy and ARIA-friendly markup
- **Keyboard Navigation:** All interactive elements are keyboard accessible

## Maintenance Guidelines

### Adding New Colors
When adding new colors to the design system:
1. Ensure contrast ratios meet WCAG AA (4.5:1 for normal text, 3:1 for large text)
2. Define colors as CSS custom properties in the `:root` section
3. Use semantic naming (e.g., `--color-accent-*`, `--color-text-*`)

### Modifying Typography
- Use the existing `clamp()` functions for fluid responsive sizing
- Maintain the established scale ratios for visual hierarchy
- Test on multiple screen sizes (mobile, tablet, desktop)

### Updating Spacing
- Follow the 4/8px spacing scale (`--space-*` variables)
- Use consistent spacing tokens across all components
- Avoid hard-coded values; always use CSS custom properties

## Setup and Installation

To run this project locally, you can simply open the `index.html` file in your web browser. There are no special dependencies or build steps required.

## Deployment

This website is a static site, so it can be deployed to any static hosting provider, such as:

*   GitHub Pages
*   Netlify
*   Vercel
*   AWS S3

To deploy the website, you can simply upload the contents of this repository to your hosting provider.

## License

This project is open source and available under the [MIT License](LICENSE).
