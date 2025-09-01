# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
Landing page for FixiTruck - AI-powered truck repair assistance platform that connects broken-down truck drivers with nearby repair shops in 30 seconds.

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
src/
├── app/               # Next.js App Router pages
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Home page
│   └── globals.css   # Global styles
├── components/
│   ├── ui/           # ShadCN/UI components
│   └── magicui/      # Magic UI components
└── lib/
    └── utils.ts      # Utility functions
```