# AIT Advantages - HPE & AIT Datathon Partnership

## Overview

This is a professional React web presentation that pitches the strategic benefits of a partnership between AIT (Austrian Institute of Technology) and HPE (Hewlett Packard Enterprise) for organizing a Datathon event.

**Lead:** Raphael NEUHERZ | **Created:** December 2024

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Features

- **React 18** with TypeScript
- **Framer Motion** animations
- **Mobile-first** responsive design
- **Interactive sections** (Executive Summary, Rough Concept)
- **SVG logo fallback** when image unavailable

## Project Structure

```
src/
├── components/
│   ├── Hero/          # Hero section with logos
│   ├── Navigation/    # Sticky navbar with scroll progress
│   ├── Sections/      # Executive Summary, Benefits, Footer
│   └── common/        # Reusable UI components
├── hooks/             # useToggleSection, useScrollProgress
├── data/benefits.ts   # Centralized content data
└── styles/            # CSS variables and global styles
```

## Deployment

### Vercel (Recommended)
```bash
npx vercel
```

### Docker
```bash
docker build -t ait-advantages .
docker run -p 8080:80 ait-advantages
```

### Static Hosting
Build and upload the `dist/` folder to any static hosting service.

## Environment

- Node.js 18+
- npm 9+

## Current Team

- **Milena Hirschmann** - Manager Go to Market
- **Raphael Neuherz** - Central Data Serv Storage
- **Werner Plessl** - Development
- **Manfred Traumueller** - Managing Director

---
December 2024
