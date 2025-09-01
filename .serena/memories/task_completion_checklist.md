# Task Completion Checklist

## Before Committing Any Changes

### 1. Code Quality Checks
```bash
# Run the linter to check for code issues
npm run lint

# Fix any linting errors before proceeding
```

### 2. Build Verification
```bash
# Ensure the project builds successfully
npm run build

# Check for any TypeScript errors or build warnings
```

### 3. Testing
```bash
# Run the development server to manually test changes
npm run dev

# Verify:
# - All features work as expected
# - No console errors
# - Mobile responsiveness
# - Performance (< 3s load time)
```

### 4. Code Review Checklist
- [ ] Code follows TypeScript strict mode requirements
- [ ] All imports use `@/` prefix where applicable
- [ ] Components are properly typed
- [ ] Tailwind classes are used for styling
- [ ] Mobile-first design is maintained
- [ ] Accessibility requirements are met (WCAG 2.1 AA)
- [ ] No commented-out code left behind
- [ ] Clear and descriptive variable/function names

### 5. Git Commit
- Write clear, descriptive commit messages
- Follow conventional commit format if applicable
- Stage only relevant files
- Ensure no sensitive information is committed

### 6. Final Verification
- All existing tests still pass
- New functionality is working correctly
- Performance targets are met
- Code is ready for production deployment