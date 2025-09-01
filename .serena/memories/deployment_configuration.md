# FixiTruck Landing Page - Deployment Configuration

## Production Environment
- **Live URL**: https://fixitruck.com
- **Hosting Platform**: GitHub Pages
- **Custom Domain**: fixitruck.com (configured via CNAME)
- **SSL Certificate**: Automatically provisioned by GitHub Pages

## CI/CD Pipeline

### GitHub Actions Workflows
1. **deploy.yml** - Production deployment workflow
   - Triggers on push to main branch
   - Builds Next.js static export
   - Deploys to GitHub Pages
   - Runs in ~1 minute

2. **ci.yml** - Continuous integration checks
   - Runs ESLint for code quality
   - TypeScript type checking
   - Build verification
   - Lighthouse performance audits

### Build Configuration
- **Framework**: Next.js 15 with static export
- **Build Output**: `out/` directory
- **Configuration Files**:
  - `next.config.js` - Next.js config with `output: 'export'`
  - `next.config.ts` - TypeScript version (backup)
  - `public/CNAME` - Custom domain configuration
  - `.nojekyll` - Preserves _next directory in GitHub Pages

### DNS Configuration
- **Type**: A records pointing to GitHub Pages servers
- **Records**:
  - 4 A records: 185.199.108-111.153
  - 4 AAAA records for IPv6 support
- **Provider**: Namecheap
- **Propagation**: Usually 10-30 minutes

## Deployment Process

### Automatic Deployment
1. Push code to main branch
2. GitHub Actions workflow triggers
3. Build process creates static export
4. Files deployed to GitHub Pages
5. Site live at fixitruck.com

### Manual Deployment
```bash
# Build locally
npm run build

# Output will be in out/ directory
# Can be served with any static hosting
```

### Monitoring
- **Build Status**: Check Actions tab in GitHub repository
- **Deployment Status**: Settings → Pages shows deployment info
- **Site Health**: Lighthouse CI runs on each deployment

## Performance Targets
- Load time < 3 seconds on 3G
- Lighthouse score > 90
- Static export for optimal caching
- CDN distribution via GitHub Pages

## Troubleshooting

### Common Issues
1. **404 Error**: Check if build created out/ directory
2. **DNS Issues**: Verify A records in domain provider
3. **Build Failures**: Check next.config.js is present
4. **HTTPS Issues**: Enable "Enforce HTTPS" in GitHub Pages settings

### Rollback Process
- Revert commit in main branch
- GitHub Actions will automatically redeploy previous version