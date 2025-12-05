# AIT Advantages - HPE & AIT Datathon Partnership

Interactive presentation showcasing the strategic benefits for AIT from the HPE Datathon Partnership.

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
│   ├── Hero/          # Hero section with HPE logo
│   ├── Navigation/    # Sticky navbar with scroll indicator
│   ├── Sections/      # Executive Summary, Rough Concept, Benefits
│   └── common/        # Reusable components (Button, MetricCard, etc.)
├── hooks/             # Custom React hooks
├── data/              # Content data (benefits, metrics, agenda)
└── styles/            # Global CSS and variables
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

## Lead

**Raphael NEUHERZ**

---
December 2024
