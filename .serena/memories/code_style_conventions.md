# Code Style and Conventions

## IMPORTANT: No Emojis Policy
**NEVER use emojis in any part of the codebase, documentation, or comments.**
- No emojis in README files
- No emojis in code comments
- No emojis in commit messages
- No emojis in documentation
- Keep all text professional and emoji-free

## TypeScript Configuration
- **Strict Mode**: Enabled (strict: true in tsconfig.json)
- **Target**: ES2017
- **Module Resolution**: Bundler
- **JSX**: Preserve
- **Path Aliases**: Use `@/*` for imports from src directory

## File Naming Conventions
- Components: kebab-case (e.g., `dot-pattern.tsx`, `navbar.tsx`)
- Pages: lowercase (e.g., `page.tsx`, `layout.tsx`)
- Utilities: lowercase (e.g., `utils.ts`)

## Project Structure
```
src/
├── app/               # Next.js App Router pages
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Page components
│   └── globals.css   # Global styles
├── components/
│   ├── ui/           # ShadCN/UI components
│   └── magicui/      # Magic UI components
└── lib/
    └── utils.ts      # Utility functions
```

## Import Conventions
- Use absolute imports with `@/` prefix
- Group imports: React/Next.js first, then external libraries, then local imports

## Component Guidelines
- Functional components with TypeScript
- Export as default for pages
- Named exports for components
- Use Tailwind CSS for styling
- Mobile-first responsive design

## CSS Conventions
- Use Tailwind utility classes
- Custom styles in globals.css when necessary
- Tailwind configuration in tailwind.config.js
- CSS animations via tailwindcss-animate plugin

## Linting
- ESLint with Next.js core-web-vitals configuration
- Run `npm run lint` before committing

## Documentation Standards
- Clear, professional language without emojis
- Technical accuracy and completeness
- Structured with clear headings
- Code examples where appropriate