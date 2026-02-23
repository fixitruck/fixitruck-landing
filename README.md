# FixiTruck Landing Page

Static marketing landing page for [fixitruck.com](https://fixitruck.com).

Built with the [Play Tailwind](https://github.com/TailGrids/play-tailwind) template.

## Development

Open `index.html` in a browser. No build step required.

## Deployment

Pushes to `main` auto-deploy to production via GitHub Actions (rsync to server).

### Required GitHub secrets

- `DEPLOY_SSH_KEY` -- SSH private key
- `DEPLOY_HOST` -- Server hostname
- `DEPLOY_USER` -- SSH username
