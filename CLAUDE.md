# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
FixiTruck is an AI-powered truck repair assistance platform that revolutionizes roadside assistance for the 3.5 million truck drivers in the US. Our landing page serves as the primary entry point for drivers seeking immediate help during breakdowns.

## Business Context
- **Problem**: Truck drivers waste 4-6 hours calling repair shops when broken down, losing $300-500/hour
- **Solution**: AI diagnosis in 30 seconds + instant connection to nearby shops + automatic translation
- **Target Market**: 3.5 million truck drivers in the US
- **Key Differentiator**: One-time problem description with automatic translation - drivers describe once, AI handles everything else

## Commands
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linter
npm run lint

# Add ShadCN/UI components
npx shadcn@latest add [component-name]
```

## Design Requirements
- **Mobile-first**: Primary usage on phones during roadside emergencies
- **Performance**: < 3 seconds load time on 3G networks
- **Accessibility**: WCAG 2.1 AA compliance for diverse driver population
- **Language**: Support for non-native English speakers (automatic translation feature)
- **Emergency-focused**: Clear CTAs for immediate help, minimal friction

## Content Structure (Planned)
1. **Hero Section**: Clear value proposition with emergency CTA
2. **Problem Section**: Current pain points (4-6 hour delays, language barriers, lost revenue)
3. **Solution Section**: 30-second AI diagnosis + instant shop connection
4. **Features Section**: Key benefits (AI diagnosis, nearby shops, auto-translation)
5. **How It Works**: Simple 3-step process visualization
6. **Trust Section**: Stats, testimonials, number of drivers helped
7. **Final CTA**: Prominent "Get Help Now" action

## Tech Stack
- **Next.js 15**: React framework with App Router for optimal performance
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **ShadCN/UI**: High-quality React components
- **Magic UI**: Beautiful UI components (Dot Pattern background)
- **Framer Motion**: Animation library

## Project Structure
```
fixitruck-landing/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles
│   ├── components/
│   │   ├── ui/           # ShadCN/UI components
│   │   ├── magicui/      # Decorative components
│   │   ├── navbar.tsx    # Navigation bar
│   │   └── footer.tsx    # Footer section
│   └── lib/
│       └── utils.ts      # Utility functions
├── public/               # Static assets
├── .eslintrc.json       # ESLint configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
├── package.json         # Dependencies and scripts
└── CLAUDE.md           # This file
```

## Development Guidelines

### Code Style
- **TypeScript**: Use strict mode, proper typing for all components and functions
- **Components**: Functional components with TypeScript interfaces/types
- **Imports**: Use `@/` prefix for imports from src directory
- **Styling**: Tailwind CSS utilities, avoid inline styles
- **Naming**: kebab-case for files, PascalCase for components

### Quality Checks
Before committing any changes, always run:
```bash
npm run lint        # Check for linting errors
npm run build      # Ensure production build works
```

### Performance Requirements
- Initial load < 3 seconds on 3G networks
- Lighthouse score > 90 for performance
- Mobile-first responsive design
- Optimized images and assets

### Accessibility Standards
- WCAG 2.1 AA compliance
- Semantic HTML elements
- Proper ARIA labels where needed
- Keyboard navigation support
- Screen reader compatibility