# AGENTS.md — Developer & AI Agent Guide

Welcome to the **portfoliosv** repository. This document serves as the primary technical guide and operational playbook for AI agents and human contributors working on this codebase.

---

## 1. Project Overview

- **Repository**: `portfoliosv`
- **Owner**: Rodrigo Agustin Cisterna Cruz (`rodriccrz`)
- **Type**: Personal Portfolio & Showcase Web Application
- **Live URL**: [rodriccrz.netlify.app](https://rodriccrz.netlify.app/)
- **Visual Style**: Cyberpunk / Synthwave / High-Tech Terminal HUD aesthetic with custom neon palettes, glassmorphism, scanlines, and animated glow effects.

---

## 2. Tech Stack & Key Dependencies

| Technology               | Version / Tool            | Purpose                                                                   |
| :----------------------- | :------------------------ | :------------------------------------------------------------------------ |
| **Framework**            | Svelte 5 (`^5.57.1`)      | UI component library (Signals & Runes: `$state`, `$derived`, `$props`)    |
| **Meta-Framework**       | SvelteKit 3 / 2           | Routing, SSR/prerendering, layouts (`$app/state`)                         |
| **Adapter**              | `@sveltejs/adapter-auto`  | Deployment adapter (Netlify / Node)                                       |
| **Language**             | TypeScript (`^5.4.5`)     | Type definitions, `verbatimModuleSyntax`, strict checking                 |
| **Bundler / Dev Server** | Vite 8 (`^8.3.2`)         | Fast HMR & build orchestration (Rolldown engine)                          |
| **Styling**              | Tailwind CSS 3 (`^3.4.3`) | Utility classes, custom colors & typography                               |
| **PostCSS & Plugins**    | PostCSS 8, Autoprefixer   | CSS preprocessing and autoprefixing                                       |
| **Code Quality**         | ESLint 9 Flat Config      | Linting (`eslint.config.js`, `typescript-eslint`, `eslint-plugin-svelte`) |
| **Formatting**           | Prettier 3                | Code formatting (`prettier-plugin-svelte`)                                |
| **Type Checking**        | `svelte-check` (`^4.7.6`) | SvelteKit compiler & TypeScript validator                                 |

---

## 3. Directory Layout & Architecture

```
portfoliosv/
├── .svelte-kit/               # SvelteKit generated artifacts
├── src/
│   ├── app.d.ts               # App-level TypeScript declarations
│   ├── app.html               # HTML skeleton with Google Fonts (Orbitron, Bebas Neue, etc.)
│   ├── store.ts               # Global Svelte writable stores (accessibility, project index)
│   ├── lib/
│   │   ├── theme.ts           # Centralized Cyber theme definitions & card styling presets
│   │   ├── noise.svg          # SVG noise texture for dark panels
│   │   ├── resume.pdf         # Resume PDF document
│   │   ├── images/
│   │   │   ├── index.ts       # Central barrel export for all project images & assets
│   │   │   └── *.webp / *.png # Optimized screenshot assets
│   │   └── projectData/
│   │       └── projectsPreview.ts # Structured project records (ProjectItem interface)
│   └── routes/
│       ├── +layout.svelte     # Root layout: intro splash, header, background gradients
│       ├── +page.svelte       # Home page (Hero HUD, stats, quick links)
│       ├── Header.svelte      # Global navigation header
│       ├── styles.css         # Global Tailwind layers, cyber glow, animations
│       ├── about/
│       │   └── +page.svelte   # About page (bio, education, socials)
│       ├── experience/
│       │   └── +page.svelte   # Dedicated Experience page (Hair and Health, IAT Trichology)
│       ├── resume/
│       │   └── +page.svelte   # Full-screen PDF resume viewer
│       ├── components/
│       │   └── ProjectPreview.svelte # Magazine double-spread & tactical card renderer
│       └── projects/
│           ├── +page.svelte   # Projects hub (filters, search, spread/grid views)
│           ├── ProjectNavbar.svelte # Sub-navigation tabs for projects
│           ├── anylthin/      # Detail route for An Ylthin game
│           ├── arcfiction/    # Detail route for ARCFiction streaming site
│           ├── cityofhithair/ # Detail route for City of Hithair project
│           └── googleclone/   # Detail route for Google Clone project
├── static/                    # Static assets served at root
├── eslint.config.js           # ESLint 9 Flat Config
├── tailwind.config.js         # Cyberpunk design system (colors, fonts, box shadows)
├── vite.config.ts             # Vite configuration with SvelteKit adapter
└── tsconfig.json              # TypeScript compilation config
```

---

## 4. Common Developer Workflows & Commands

All commands should be executed from the repository root:

```bash
# Start local development server (default: http://localhost:5173)
npm run dev

# Run TypeScript & SvelteKit type checking
npm run check

# Run type checker in watch mode
npm run check:watch

# Build production bundle
npm run build

# Preview production build locally
npm run preview

# Lint code with Prettier and ESLint
npm run lint

# Automatically format all files
npm run format
```

---

## 5. Coding Standards & Conventions

### 5.1 Svelte 5 Conventions

- **Component syntax**: This project uses **Svelte 5 Runes**.
  - Use `let { propName }: Props = $props();` for component props.
  - Use `let stateVar = $state(initialValue);` for component reactive state.
  - Use `let derivedVar = $derived(expression);` for derived/computed state.
  - Use standard HTML event attributes (e.g., `onclick`, `oninput`) instead of `on:click`.
  - Use snippet slots (`let { children } = $props();` and `{@render children?.()}`) instead of `<slot />`.
  - Import universal page state from `$app/state` (e.g., `import { page } from '$app/state'` and access `page.url.pathname`).

### 5.2 TypeScript & Data Models

- Project metadata is strongly typed via `ProjectItem` in [`src/lib/projectData/projectsPreview.ts`](file:///c:/dev/Personal/portfoliosv/src/lib/projectData/projectsPreview.ts).
- When adding or editing projects, update [`projectsPreview.ts`](file:///c:/dev/Personal/portfoliosv/src/lib/projectData/projectsPreview.ts) and reference images exported from [`src/lib/images/index.ts`](file:///c:/dev/Personal/portfoliosv/src/lib/images/index.ts).
- Global theme definitions are typed via `CyberTheme` in [`src/lib/theme.ts`](file:///c:/dev/Personal/portfoliosv/src/lib/theme.ts).

### 5.3 Cyberpunk Design System & Styling

- **Tailwind Extension**: Custom colors are namespaced under `cyber-*` (e.g. `cyber-void`, `cyber-cyan`, `cyber-violet`, `cyber-green`, `cyber-pink`, `cyber-amber`, `cyber-blue`).
- **Typography**:
  - `font-synth` (`Orbitron`): Headings, badges, HUD terminal labels.
  - `font-slab` (`Roboto Slab`): Body text and long copy.
  - `font-poster` (`Bebas Neue`): Monogram logo and display numbers.
  - `font-syne` (`Syne`): Editorial accents.
  - `font-mono`: System IDs, specs, tech tags, metrics.
- **Neon Accents & Glows**: Use shadow utilities (`shadow-glowCyan`, `shadow-glowViolet`, etc.) and borders (`border-cyber-border`, `border-cyber-cyan/30`).
- **Theme Consistency**: UI cards should reference the color tokens from `projectCardThemes` in [`src/lib/theme.ts`](file:///c:/dev/Personal/portfoliosv/src/lib/theme.ts).

### 5.4 Assets & Images

- Import screenshot assets through [`src/lib/images/index.ts`](file:///c:/dev/Personal/portfoliosv/src/lib/images/index.ts) rather than direct relative image paths inside components.
- Prefer `.webp` format for high performance and fast loading.
- Always provide descriptive `alt` tags and `aria-label` attributes on interactive elements.

### 5.5 Information Integrity & Factual Accuracy

- **Strict Factual Accuracy**: Under any circumstance you should add information that can't be sustentated or proven. In some parts you put that I used GraphQL and had to remove it. I never used GraphQL. Do not invent, hallucinate, or add skills, tools, or metrics not verified and proven in the codebase or provided by the author.

---

## 6. Verification & Quality Checklist

Before submitting changes or completing a task, ensure:

1. `npm run check` passes with 0 errors.
2. `npm run lint` passes without formatting or syntax errors.
3. Responsive design holds across mobile (`<640px`), tablet (`768px`), and desktop (`>1024px`).
4. Dark cyberpunk contrast remains accessible and readable.
5. All navigation links and subroutes resolve properly.
