# TestSuite Web — Landing Page

**Test Management Suite** enterprise landing page. Built for the Atlassian Marketplace product — a complete QA management platform natively integrated with Jira Cloud.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite 6 |
| Styling | TailwindCSS 3.4 |
| Icons | Lucide React |
| Font | Inter + JetBrains Mono |
| Package Manager | pnpm |

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm 8+

### Install

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Runs on `http://localhost:3000` with HMR.

### Build

```bash
pnpm build
```

Output in `dist/` — optimized for Vercel deployment.

### Preview

```bash
pnpm preview
```

## Project Structure

```
src/
├── main.tsx                  # Entry point
├── App.tsx                   # Root component
├── index.css                 # Tailwind + custom utilities
├── components/
│   ├── ui/                   # Reusable primitives
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── SectionHeading.tsx
│   │   └── Container.tsx
│   ├── Navbar.tsx            # Fixed nav with scroll detection
│   ├── Hero.tsx              # Animated hero with stats
│   ├── Features.tsx          # 8-feature grid
│   ├── Architecture.tsx      # Stack diagram + tech list
│   ├── Modules.tsx           # 8 platform modules
│   ├── ApiSection.tsx        # REST endpoints + code example
│   ├── Comparison.tsx        # Competitive matrix
│   ├── CtaSection.tsx        # Glass CTA card
│   └── Footer.tsx            # Multi-column footer
├── hooks/
│   └── useScrollAnimation.ts # IntersectionObserver hook
├── data/
│   └── content.ts            # All marketing copy and config
└── types/
    └── index.ts              # TypeScript interfaces
```

## Deploy to Vercel

1. Push to GitHub
2. Import repo on [vercel.com](https://vercel.com)
3. Framework: **Vite**
4. Build command: `pnpm build`
5. Output directory: `dist`

## License

Proprietary. All rights reserved.
