# Progress Tracker - AIT & HPE Datathon Partnership Presentation

> Last Updated: 2026-01-23
> Current Branch: `version-2`
> Main Branch: `main`

---

## Project Overview

A professional React web presentation showcasing the **AIT Austrian Institute of Technology & HPE Datathon Partnership**. The event is scheduled for **September 2026**.

### Key Details
- **Budget**: €35,000 total investment
- **HPE Technology Value**: €500,000+
- **Target Participants**: 50-100 AI Professionals
- **Event Date**: September 2026 (milestone planning from Feb 2026)

### Partners
- **HPE** (Hewlett Packard Enterprise) - Primary funding
- **NVIDIA** - GPU/AI technology
- **AIT** - Austrian Institute of Technology (premises, data, research)

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2 | UI Framework |
| TypeScript | 5.9 | Type Safety |
| Vite | 7.2 | Build Tool |
| Framer Motion | 12.23 | Animations |

### Commands
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

## Project Structure

```
src/
├── components/
│   ├── Hero/           # Hero section with partner logos
│   │   ├── Hero.tsx
│   │   ├── HpeLogo.tsx
│   │   ├── AitLogo.tsx
│   │   └── ActionButtons.tsx
│   ├── Navigation/     # Sticky navbar with scroll progress
│   │   └── Navbar.tsx
│   ├── Sections/       # Main content sections
│   │   ├── ExecutiveSummary.tsx
│   │   ├── RoughConcept.tsx       # Contains Preparation Steps
│   │   ├── BenefitsSection.tsx
│   │   ├── BenefitCard.tsx
│   │   ├── BenefitDetail.tsx
│   │   ├── TeamMembers.tsx
│   │   └── Footer.tsx
│   └── common/         # Reusable UI components
│       ├── Button.tsx
│       ├── MetricCard.tsx
│       ├── ProgressBar.tsx
│       └── BenefitTag.tsx
├── hooks/
│   ├── useToggleSection.ts
│   └── useScrollProgress.ts
├── data/
│   └── benefits.ts     # Centralized content data
├── styles/
│   └── global.css
├── App.tsx             # Main app component
└── main.tsx            # Entry point
```

---

## Current State (as of 2026-01-23)

### Completed Features
- [x] Hero section with partner logos (HPE, AIT, NVIDIA)
- [x] Executive Summary section
- [x] Rough Concept section with Preparation Steps
- [x] Strategic Benefits section with expandable cards
- [x] Team Members section
- [x] Footer with disclaimer
- [x] Scroll-based navigation with progress indicator
- [x] Responsive design
- [x] Framer Motion animations
- [x] Offline viewing support (local fonts, launcher scripts)
- [x] PDF export capability
- [x] Docker deployment
- [x] GitHub Pages deployment

### Recent Changes (Last 10 Commits)
1. `887b7f4` - Add Preparation Steps section with Critical Milestones & Deadlines
2. `4b7521a` - Update milestone plan to start from Feb 2026, event moved to Sep 2026
3. `4410f8a` - Add offline font support for local viewing
4. `5848a46` - Update marketing investment from €52.5k to €35k
5. `b53086d` - Fix PDF - ensure all sections render completely
6. `72ad36c` - Add PDF presentation (all sections combined)
7. `774dcce` - Add offline distribution instructions to README
8. `87c3c05` - Add cross-platform launcher scripts for offline viewing
9. `1ccb6fa` - Change base path to relative for offline viewing
10. `b57c1e0` - Update investment leverage from €70k to €35k

---

## Key Files for Reference

| File | Purpose |
|------|---------|
| `CLAUDE.md` | Full project specification and design requirements |
| `README.md` | Documentation and deployment instructions |
| `src/App.tsx` | Main application component structure |
| `src/data/benefits.ts` | Centralized content/data for benefits |
| `src/components/Sections/RoughConcept.tsx` | Contains milestone/preparation steps |
| `preparation.txt` | Raw preparation content (~47KB) |

---

## Color Palette

```css
--hpe-green: #01A982      /* HPE Primary */
--nvidia-green: #76B900   /* NVIDIA */
--ait-blue: #0066B3       /* AIT */
--dark-surface: #121212   /* Background */
```

---

## Team

### AIT Team
| Name | Role |
|------|------|
| Dr. Karl Kugler | Head of AI Factory Austria AI:AT |
| Markus Stöhr | Co-Lead AI Factory Austria AI:AT |
| Thomas Mayerhofer | Head of Innovation - AI and Business Growth |

### HPE Team
| Name | Role |
|------|------|
| Johannes Koch | Executive Sponsor |
| Stefan Brock | Executive Sponsor |
| Raphael Neuherz | Sales/Organisation/Lead |
| Milena Hirschmann | GTM CE Hybrid Cloud |
| Werner Plessl | Account Manager of AIT |
| Manfred Traumueller | Managing Director |

---

## Deployment

- **Live Demo**: https://ainxtgendev.github.io/Neuherz-Datathon/
- **Branch**: Deploy from `version-2` branch
- **Build Output**: `dist/` folder

---

## Known Issues / TODOs

*Document any pending items here*

- [ ] No known issues at this time

---

## Notes for Next Session

*Add any context that would be helpful for the next work session*

- The presentation is functionally complete
- Focus on `version-2` branch for all changes
- Check `preparation.txt` for detailed event planning content
- Key specification document: `CLAUDE.md`

---

## How to Resume Work

1. Read this file (`progress.md`)
2. Check current branch: `git branch` (should be `version-2`)
3. Review recent changes: `git log --oneline -5`
4. Check for uncommitted changes: `git status`
5. Read `CLAUDE.md` for full project specification
6. Run `npm run dev` to start development server

---

*This file should be updated whenever significant changes are made to the project.*
