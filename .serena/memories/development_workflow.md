# FixiTruck Landing Page - Development Workflow

## Quick Start Commands

### Essential Commands
```bash
npm install         # Install all dependencies
npm run dev        # Start development server (http://localhost:3000)
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint checks
```

### Component Management
```bash
npx shadcn@latest add [component]  # Add ShadCN/UI component
npx shadcn@latest add button       # Example: add button component
```

## Development Process

### 1. Before Starting Work
- Pull latest changes: `git pull origin main`
- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Check existing patterns in codebase

### 2. During Development
- Use TypeScript strict mode - no any types
- Follow mobile-first responsive design
- Use Tailwind utilities for styling
- Import with `@/` prefix from src
- Test on mobile viewport first
- Check performance (< 3s load time)

### 3. Before Committing
**ALWAYS run these commands:**
```bash
npm run lint       # Fix any linting errors
npm run build      # Ensure production build works
```

### 4. Git Workflow
```bash
git status                    # Check changes
git add .                     # Stage changes
git commit -m "description"   # Commit with clear message
git push origin branch-name   # Push to remote
```

## Code Style Guidelines

### File Naming
- Components: kebab-case (e.g., `hero-section.tsx`)
- Pages: lowercase (e.g., `page.tsx`)
- Utilities: lowercase (e.g., `utils.ts`)

### Component Structure
```typescript
// 1. Imports
import { useState } from 'react'
import { Button } from '@/components/ui/button'

// 2. Types/Interfaces
interface ComponentProps {
  title: string
  // ...
}

// 3. Component
export function ComponentName({ title }: ComponentProps) {
  // Logic here
  return (
    // JSX here
  )
}
```

### Tailwind CSS Usage
```tsx
// Good - using Tailwind utilities
<div className="flex items-center justify-between p-4 md:p-6">

// Bad - inline styles
<div style={{ display: 'flex', padding: '16px' }}>
```

## Performance Checklist

### Before Deployment
- [ ] Lighthouse score > 90
- [ ] Load time < 3 seconds on 3G
- [ ] All images optimized
- [ ] No console errors
- [ ] Mobile responsive tested
- [ ] Accessibility checked (WCAG 2.1 AA)
- [ ] Forms have proper validation
- [ ] CTAs are prominent and clear

### Testing Viewports
- Mobile: 375px (iPhone SE)
- Tablet: 768px (iPad)
- Desktop: 1440px (MacBook)

## Common Tasks

### Adding a New Section
1. Create component in `src/components/`
2. Import in `src/app/page.tsx`
3. Follow existing section patterns
4. Ensure mobile-first styling
5. Test responsiveness

### Adding UI Component
```bash
# Browse available components
# https://ui.shadcn.com/docs/components

# Add component
npx shadcn@latest add dialog

# Component will be added to src/components/ui/
```

### Updating Dependencies
```bash
npm update            # Update all to latest minor/patch
npm outdated         # Check for outdated packages
npm install package@latest  # Update specific package
```

## Troubleshooting

### Port 3000 Already in Use
```bash
lsof -i :3000        # Find process using port
kill -9 [PID]        # Kill the process
npm run dev          # Restart dev server
```

### Build Errors
1. Clear Next.js cache: `rm -rf .next`
2. Clear node_modules: `rm -rf node_modules && npm install`
3. Check TypeScript errors: `npx tsc --noEmit`
4. Check ESLint: `npm run lint`

### Performance Issues
1. Check bundle size: Build and analyze
2. Optimize images: Use Next.js Image component
3. Lazy load components where appropriate
4. Check for unnecessary re-renders

## Emergency Response Features
Since this is an emergency service landing page:
- Keep load times minimal
- Make CTAs highly visible
- Ensure forms work on all devices
- Test on slow connections
- Provide fallbacks for features