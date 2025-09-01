# Suggested Commands for FixiTruck Landing Page Development

## Development Commands
```bash
# Install dependencies
npm install

# Run development server (port 3000 by default)
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linter to check code quality
npm run lint
```

## Component Management
```bash
# Add new ShadCN/UI components
npx shadcn@latest add [component-name]
```

## Git Commands (Darwin/macOS)
```bash
# Check status
git status

# Stage changes
git add .

# Commit changes
git commit -m "message"

# View logs
git log --oneline

# Create and switch to new branch
git checkout -b branch-name

# Push to remote
git push origin branch-name
```

## File System Commands (Darwin/macOS)
```bash
# List files
ls -la

# Navigate directories
cd directory-name

# View file contents
cat filename

# Search for files
find . -name "*.tsx"

# Search in files (macOS)
grep -r "search-term" .
```

## Process Management
```bash
# Kill development server if needed
# Use Ctrl+C in terminal or:
lsof -i :3000  # Find process on port 3000
kill -9 PID    # Kill process by PID
```