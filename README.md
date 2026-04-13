# Ana Fernandes Studio — Landing Page

A modern, SEO-friendly landing page built with **Next.js 16** and **React 19** for a beauty studio focused on eyebrow design services.

This project was designed as a fast, elegant, single-page experience with strong visual identity, smooth navigation, and production-ready metadata for search engines and social sharing.

## Overview

This repository contains one Next.js application inside the `dess/` directory.

- **Repository root**: deployment configuration (`vercel.json`), license, and project documentation.
- **Application root**: `dess/` (actual Next.js app with source code and dependencies).

## Tech Stack

### Core

- **Next.js** `16.1.6` (App Router)
- **React** `19.2.3`
- **React DOM** `19.2.3`

### Styling & UI

- **Tailwind CSS v4** (`tailwindcss` + `@tailwindcss/postcss`)
- Custom global CSS animations and utility classes in `src/app/globals.css`

### Tooling & Code Quality

- **Biome** (`@biomejs/biome`) for linting and formatting
- Import organization enabled via Biome assist actions

### Performance & Rendering

- `next/image` for optimized images
- `next/font` (Geist + Geist Mono) for optimized web fonts
- React Compiler enabled in `next.config.mjs`

### SEO & Discoverability

- Rich metadata via App Router `metadata`
- Open Graph + Twitter cards
- `robots.txt` route (`src/app/robots.js`)
- `sitemap.xml` route (`src/app/sitemap.js`)
- Structured data (JSON-LD / `BeautySalon`) injected on home page

### Deployment

- **Vercel** with root-level `vercel.json` configured to build from `dess/`

## Features

- Single-page landing with anchored navigation
- Sections:
  - Hero
  - About
  - Services
  - Contact (map + contact details + form UI)
  - Footer
- Sticky header with smooth scrolling
- Reusable premium-styled button component
- Responsive design and subtle motion effects
- Portuguese (Brazil) localization (`lang="pt-BR"`)

## Project Structure

```text
.
├── vercel.json
├── README.md
└── dess/
    ├── package.json
    ├── next.config.mjs
    ├── biome.json
    ├── jsconfig.json
    ├── .env
    └── src/
        ├── app/
        │   ├── layout.jsx
        │   ├── page.jsx
        │   ├── globals.css
        │   ├── robots.js
        │   └── sitemap.js
        ├── components/
        │   ├── shared/NavBar/header.jsx
        │   └── ui/Button/button.jsx
        └── sections/
            ├── hero/hero.jsx
            ├── About/About.jsx
            ├── Services/Services.jsx
            ├── Contact/Contact.jsx
            └── Footer/Footer.jsx
```

## Getting Started

### Prerequisites

- **Node.js 20+** recommended
- **npm 10+** recommended

### 1) Install dependencies

From repository root:

- `npm install --prefix dess`

### 2) Run development server

From repository root:

- `npm run dev --prefix dess`

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

Scripts are defined in `dess/package.json`:

- `dev` → start local development server
- `build` → create production build
- `start` → run production server
- `lint` → run Biome checks
- `format` → format code with Biome

From repository root, use:

- `npm run dev --prefix dess`
- `npm run build --prefix dess`
- `npm run start --prefix dess`
- `npm run lint --prefix dess`
- `npm run format --prefix dess`

## Environment Variables

The app reads:

- `NEXT_PUBLIC_SITE_URL`

This variable is used for canonical URLs, sitemap, robots host, and metadata base.

Example (`dess/.env`):

- `NEXT_PUBLIC_SITE_URL=https://www.anafernandesstudio.com.br`

## Deployment (Vercel)

This repository deploys correctly from root because `vercel.json` points commands to the `dess/` app:

- `installCommand`: `npm install --prefix dess`
- `buildCommand`: `npm run build --prefix dess`
- `devCommand`: `npm run dev --prefix dess`
- `framework`: `nextjs`

## SEO Notes

Implemented SEO resources include:

- App-level metadata and social cards
- `robots.txt` and `sitemap.xml` generated from code
- Structured data (`BeautySalon`) on the home page

For production, make sure contact info, map location, and domain values match your real business details.

## Design Notes

The visual system uses a purple-centered palette with soft gradients, motion accents, and card-based sections to reinforce a premium beauty brand feeling.

## License

This project is distributed under the terms defined in the `LICENSE` file.
