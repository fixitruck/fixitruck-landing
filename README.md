# FixiTruck Landing Page

AI-powered truck repair assistance platform that connects broken-down truck drivers with nearby repair shops in 30 seconds.

## 🚛 Problem We Solve

Truck drivers face critical challenges when their vehicles break down:
- **4-6 hours wasted** calling repair shops one by one
- **$300-500/hour lost revenue** during downtime
- **Language barriers** for non-native English speakers
- **Uncertainty** about repair costs and availability

## 💡 Our Solution

FixiTruck revolutionizes roadside assistance for the 3.5 million truck drivers in the US:
- **30-second AI diagnosis** of truck problems
- **Instant connection** to nearby qualified repair shops
- **Automatic translation** - describe once, AI handles all communication
- **Real-time availability** and pricing from multiple shops

## 🎯 Key Features

- **AI-Powered Diagnosis**: Advanced AI analyzes truck issues instantly
- **One-Time Description**: Explain your problem once, AI translates and communicates with all shops
- **Nearby Shop Network**: Connect with pre-vetted repair facilities
- **Multi-Language Support**: Break down language barriers automatically
- **Mobile-First Design**: Optimized for emergency roadside use
- **Fast Performance**: < 3 second load time on 3G networks

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) - React framework with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe development
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- **UI Components**: [ShadCN/UI](https://ui.shadcn.com/) - High-quality React components
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Smooth interactions
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful icon library
- **Magic UI**: Custom decorative components

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/fixitruck/fixitruck-landing.git
cd fixitruck-landing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🌐 Deployment

### Live Site
The landing page is live at: **[https://fixitruck.com](https://fixitruck.com)**

### Deployment Pipeline
- **Hosting**: GitHub Pages with custom domain
- **CI/CD**: GitHub Actions automatically deploys on push to main branch
- **Build**: Next.js static export optimized for performance

### Deployment Status
[![Deploy to GitHub Pages](https://github.com/fixitruck/fixitruck-landing/actions/workflows/deploy.yml/badge.svg)](https://github.com/fixitruck/fixitruck-landing/actions/workflows/deploy.yml)

## 📝 Available Scripts

```bash
# Development
npm run dev        # Start development server

# Production
npm run build      # Build for production
npm run start      # Start production server

# Code Quality
npm run lint       # Run ESLint

# Components
npx shadcn@latest add [component-name]  # Add new UI components
```

## 📁 Project Structure

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
│   │   ├── navbar.tsx    # Navigation
│   │   └── footer.tsx    # Footer
│   └── lib/
│       └── utils.ts      # Utility functions
├── public/               # Static assets
├── .eslintrc.json       # ESLint config
├── tailwind.config.js   # Tailwind config
├── tsconfig.json        # TypeScript config
└── package.json         # Dependencies
```

## 🎨 Design Principles

- **Mobile-First**: Primary usage during roadside emergencies
- **Accessibility**: WCAG 2.1 AA compliance for all users
- **Performance**: Optimized for slow connections
- **Clarity**: Emergency-focused with prominent CTAs
- **Trust**: Professional design that instills confidence

## 📋 Landing Page Sections

1. **Hero Section**: Clear value proposition with emergency CTA
2. **Problem Section**: Current pain points drivers face
3. **Solution Section**: How FixiTruck solves these problems
4. **Features Section**: Key platform capabilities
5. **How It Works**: Simple 3-step process
6. **Trust Section**: Statistics and testimonials
7. **Final CTA**: Prominent call-to-action

## 🔧 Development Guidelines

### Code Style
- Use TypeScript strict mode
- Follow ESLint configuration
- Use Tailwind utilities for styling
- Maintain mobile-first responsive design
- Use `@/` prefix for imports from src/

### Commit Convention
- Clear, descriptive commit messages
- Reference issue numbers when applicable
- Test before committing

### Performance Targets
- < 3 seconds initial load on 3G
- < 1 second interaction response
- 90+ Lighthouse performance score

## 📄 License

[Add your license information here]

## 🤝 Contributing

[Add contribution guidelines if applicable]

## 📞 Contact

[Add contact information]

---

Built with ❤️ for the 3.5 million truck drivers keeping America moving
