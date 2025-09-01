# FixiTruck Landing Page - Codebase Structure

## Directory Layout
```
fixitruck-landing/
├── src/                  # Source code directory
│   ├── app/             # Next.js App Router
│   │   ├── layout.tsx   # Root layout wrapping all pages
│   │   ├── page.tsx     # Home page (main landing page)
│   │   └── globals.css  # Global styles and Tailwind directives
│   ├── components/      # React components
│   │   ├── ui/          # ShadCN/UI component library
│   │   ├── magicui/     # Decorative Magic UI components
│   │   │   └── dot-pattern.tsx  # Background dot pattern
│   │   ├── navbar.tsx   # Navigation bar component
│   │   └── footer.tsx   # Footer component
│   └── lib/             # Utilities and helpers
│       └── utils.ts     # Utility functions (cn for className merging)
├── public/              # Static assets (images, fonts, etc.)
├── .serena/             # Serena MCP configuration
├── .claude/             # Claude AI assistant configuration
├── node_modules/        # Dependencies (git-ignored)
├── .next/              # Next.js build output (git-ignored)
├── package.json        # Dependencies and npm scripts
├── package-lock.json   # Locked dependency versions
├── tsconfig.json       # TypeScript configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration for Tailwind
├── next.config.ts      # Next.js configuration
├── components.json     # ShadCN/UI components configuration
├── .eslintrc.json     # ESLint rules configuration
├── .gitignore         # Git ignore patterns
├── README.md          # Project documentation
└── CLAUDE.md          # Claude AI guidance document
```

## Key Configuration Files

### TypeScript (tsconfig.json)
- Target: ES2017
- Strict mode enabled
- Module resolution: bundler
- Path alias: `@/*` maps to `./src/*`
- JSX: preserve

### Tailwind CSS (tailwind.config.js)
- Content paths configured for all components
- Custom animations via tailwindcss-animate plugin
- Extended theme for project-specific styles

### Next.js (next.config.ts)
- App Router enabled
- TypeScript and ESLint integration
- Performance optimizations

### ESLint (.eslintrc.json)
- Extends next/core-web-vitals
- Ensures best practices and performance

## Component Architecture

### Pages (App Router)
- `app/layout.tsx`: Root layout with metadata and providers
- `app/page.tsx`: Landing page with all main sections
- `app/globals.css`: Base Tailwind directives and global styles

### Shared Components
- `navbar.tsx`: Responsive navigation with mobile menu
- `footer.tsx`: Footer with links and company info
- UI components: Reusable ShadCN/UI elements
- Magic UI: Decorative elements for visual appeal

### Landing Page Sections
1. Hero Section: Value proposition and emergency CTA
2. Problem Section: Pain points visualization
3. Solution Section: How FixiTruck solves problems
4. Features Section: Key platform capabilities
5. How It Works: 3-step process explanation
6. Trust Section: Stats and testimonials
7. Final CTA: Conversion-focused action

## Dependencies Structure

### Core Dependencies
- next: 15.x - Framework
- react & react-dom: 19.x - UI library
- typescript: 5.9.x - Type safety

### UI/Styling
- tailwindcss: 3.4.x - Utility CSS
- tailwindcss-animate: 1.0.x - Animations
- class-variance-authority: 0.7.x - Component variants
- clsx & tailwind-merge: Class utilities

### Components/Icons
- lucide-react: 0.542.x - Icons
- framer-motion: 12.x - Animations
- ShadCN/UI components (installed as needed)

### Development Dependencies
- @types/* packages for TypeScript
- eslint & eslint-config-next
- autoprefixer & postcss