# AI Portfolio Task

A responsive personal portfolio built with **React**, **TypeScript**, **Vite**, and **Framer Motion**.

## Features

- Responsive layout for mobile, tablet, and desktop
- Sticky top navigation with in-page section links
- Hero, About, Skills, Projects, Contact, and Footer sections
- Smooth reveal and staggered motion effects with reduced-motion fallback
- Project cards with stack tags and external links
- Ready-to-use GitHub Pages deployment workflow

## Tech Stack

- React 19
- TypeScript 6
- Vite 8
- Framer Motion
- ESLint

## Prerequisites

- Node.js 20+ (Node 22 recommended)
- npm 10+

## Getting Started

```bash
npm install
npm run dev
```

The app will run locally at the URL shown by Vite (typically `http://localhost:5173`).

## Scripts

```bash
npm run dev        # Start local development server
npm run typecheck  # Run TypeScript project checks
npm run lint       # Run ESLint
npm run build      # Type-check and build production assets
npm run preview    # Preview the production build locally
```

## GitHub Pages Deployment

This repository includes `.github/workflows/deploy-pages.yml`.

### One-time setup in GitHub repository settings

1. Go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.

### Deploy flow

- Every push to `main` or `master` triggers deployment.
- You can also trigger it manually from **Actions → Deploy to GitHub Pages → Run workflow**.
- The workflow automatically sets the correct Vite base path using the repository name.

## Project Structure

```text
src/
  App.tsx
  main.tsx
  index.css
public/
.github/workflows/
  deploy-pages.yml
```

## Quality Checks

Run before opening a PR:

```bash
npm run typecheck
npm run lint
npm run build
```

## Accessibility Notes

- Motion-heavy effects respect `prefers-reduced-motion`.
- Navigation and content are structured with semantic HTML sections.

## License

This project is for portfolio/demo purposes.
