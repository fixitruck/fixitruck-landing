# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
Landing page for Fixitruck - AI-powered truck repair assistance platform that connects broken-down truck drivers with nearby repair shops in 30 seconds.

## Business Context
- **Problem**: Truck drivers waste 4-6 hours calling repair shops when broken down, losing $300-500/hour
- **Solution**: AI diagnosis in 30 seconds + instant connection to nearby shops + automatic translation
- **Target Market**: 3.5 million truck drivers in the US
- **Key Differentiator**: One-time problem description with automatic translation - drivers describe once, AI handles everything else

## Commands (Once Tech Stack is Chosen)
```bash
# Project setup commands will be added based on chosen tech stack
# Expected commands: install, dev, build, test, lint
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

## Tech Stack Considerations
When implementing, consider:
- Static site generator for speed (Next.js, Astro, or similar)
- CDN deployment for fast global access
- Progressive enhancement for reliability
- Minimal JavaScript for core functionality
- Image optimization for mobile networks