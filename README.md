# Ana Fernandes Studio — Landing Page

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-20232A?logo=react&logoColor=61DAFB)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

A modern, SEO-friendly landing page built with **Next.js 16** and **React 19** for a beauty studio focused on eyebrow design services.

This project delivers a polished single-page experience with a strong visual identity, smooth section navigation, and production-ready metadata for search engines and social sharing.

## Live Demo

- **Production URL:** https://www.anafernandesstudio.com.br

## Preview

![Ana Fernandes Studio Preview](./dess/public/foto_hero.jpg)

## Highlights

- Elegant one-page layout with anchored navigation
- Reusable UI primitives and section-based architecture
- SEO-ready metadata (Open Graph, Twitter, robots, sitemap, JSON-LD)
- Image and font optimization through Next.js built-ins
- Tailwind CSS v4 styling with custom motion and premium visual effects
- Vercel deployment configured for a monorepo-like folder layout (`dess/`)

## Overview

This repository contains one Next.js application inside the `dess/` directory.

- **Repository root**: deployment config (`vercel.json`), license, and docs
- **Application root**: `dess/` (actual Next.js app and dependencies)

## Tech Stack

### Core

- **Next.js** `16.1.6` (App Router)
- **React** `19.2.3`
- **React DOM** `19.2.3`

### Styling & UI

- **Tailwind CSS v4** (`tailwindcss` + `@tailwindcss/postcss`)
- Custom global animations and utility classes in `src/app/globals.css`

### Tooling & Code Quality

- **Biome** (`@biomejs/biome`) for linting and formatting
- Import organization enabled via Biome assist actions

### Performance & Rendering

- `next/image` for optimized image delivery
- `next/font` (Geist + Geist Mono) for optimized font loading
- React Compiler enabled in `next.config.mjs`

### SEO & Discoverability

- App Router metadata API
- Open Graph + Twitter cards
- `robots.txt` route (`src/app/robots.js`)
- `sitemap.xml` route (`src/app/sitemap.js`)
- JSON-LD (`BeautySalon`) in the home page

### Deployment

- **Vercel** with root-level `vercel.json` configured to build from `dess/`

## Features

- Sticky, semi-transparent header with smooth-scroll navigation
- Content sections:
  - Hero
  - About
  - Services
  - Contact (map + contact details + form UI)
  - Footer
- Reusable premium-styled button component
- Responsive behavior and subtle micro-interactions
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

### Install dependencies

From repository root:

- `npm install --prefix dess`

### Run development server

From repository root:

- `npm run dev --prefix dess`

Open [http://localhost:3000](http://localhost:3000).

## Scripts

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

Used for canonical URLs, sitemap, robots host, and metadata base.

Example (`dess/.env`):

- `NEXT_PUBLIC_SITE_URL=https://www.anafernandesstudio.com.br`

## Deployment (Vercel)

Deploy works from repository root because `vercel.json` points commands to `dess/`:

- `installCommand`: `npm install --prefix dess`
- `buildCommand`: `npm run build --prefix dess`
- `devCommand`: `npm run dev --prefix dess`
- `framework`: `nextjs`

## SEO Notes

Implemented SEO resources include:

- App-level metadata and social cards
- `robots.txt` and `sitemap.xml` generated from code
- Structured data (`BeautySalon`) on the home page

For production, ensure business contact details, map location, and domain values match your final brand data.

## Design Notes

The visual system uses a purple-centered palette, soft gradients, card-based sections, and subtle motion to reinforce a premium beauty brand identity.

## License

This project is distributed under the terms defined in the `LICENSE` file.
