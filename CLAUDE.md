# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static marketing landing page for [fixitruck.com](https://fixitruck.com) — a platform connecting drivers/fleets with truck repair shops. Built on the [Play Tailwind](https://github.com/TailGrids/play-tailwind) template.

## Development

No build step. Open `index.html` directly in a browser. The entire site is a single HTML file with vanilla JS.

## Deployment

Pushes to `main` auto-deploy via GitHub Actions (rsync to `/var/www/fixitruck.com/`). Manual deploy available via `workflow_dispatch`.

## Architecture

**Single-page static site** — no framework, no bundler, no package manager.

- `index.html` — the entire landing page (sections: hero, how-it-works, features, footer)
- `assets/js/main.js` — all interactivity (sticky header, mobile menu, theme toggle, smooth scroll, back-to-top)
- `src/css/tailwind.css` — pre-compiled Tailwind CSS v4.0.9 stylesheet (not built from source)
- `assets/css/` — vendor CSS (animate.css, swiper)
- `assets/js/` — vendor JS (WOW.js for scroll animations, Swiper bundled but unused)
- `assets/images/` — organized by section (hero/, about/, team/, logo/, footer/)

## Key Patterns

- **Dark mode**: toggled via `dark` class on `<html>`, persisted in `localStorage` key `theme`, falls back to `prefers-color-scheme`
- **Sticky navbar**: JS adds `.sticky` class to `.ud-header` on scroll; inline `<style>` block handles logo color changes (`.sticky .header-logo` → dark text)
- **Scroll animations**: elements use WOW.js with `class="wow fadeInUp"` and `data-wow-delay` attributes
- **Responsive nav**: hamburger toggle (`#navbarToggler`) controls `#navbarCollapse`; nav links close menu on click
- **Section anchors**: `#home`, `#how-it-works`, `#features` — active menu highlighting based on scroll position with 73px navbar offset

## Design Tokens (from Tailwind config)

- Primary: `#3758F9` (blue)
- Secondary: `#13C296` (green)
- Dark: `#111928`
- Body text: `#637381`
- Font: Inter (Google Fonts, weights 100–900)
- HTML background: `#090E34` (prevents flash during dark mode load)

## External Links in the Page

- `/accounts/login/` — Sign in page
- `/api/v1/docs/` — API documentation
- `support@fixitruck.com` — Support email

These are separate applications, not part of this repo.
