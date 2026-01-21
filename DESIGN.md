# Stevens Blockchain Advisory — Design System

This document translates the visual direction in `README.md` into a concrete
design system for implementation. The goal is to keep the site sober, technical,
and more visually distinctive without adding hype or gimmicks.

## Principles

- Quiet authority: clean composition, clear hierarchy.
- Clarity over decoration: every visual element supports content scanning.
- Minimal but not sterile: subtle texture, soft contrast, strong typography.
- No animations or marketing embellishments.

## Palette

**Base**

- Background: `#FFF7E6` (pastel surface)
- Content background: `#FFFFFF` / `rgba(255, 255, 255, 0.9)`
- Primary text: `#0F172A`
- Secondary text: `#5B6577`
- Borders: `#EADDC2`

**Accent**

- Accent (warm yellow): `#E7B44D`
- Accent is reserved for CTAs, section markers, and minimal emphasis.

## Typography

- Font: `Inter` (system fallback)
- Headings: same family, heavier weight
- Tracking: slightly increased on labels (uppercased micro headings)

Recommended sizes:

- H1: 40–48px, 1.1 line-height
- H2: 28–32px, 1.2 line-height
- Body: 16–18px, 1.6 line-height
- Labels: 11–12px, uppercase, letter-spacing 0.2–0.35em

## Layout & Spacing

- Desktop-first layout, centered `max-width` 1200px (`max-w-6xl`)
- Section padding: 96px top/bottom (desktop), 64px on smaller screens
- Generous whitespace between sections and cards
- 2-column grids for cards on desktop; stack on mobile

## Section Treatments

- Hero uses subtle gradient from pastel `surface` to `white`
- Alternating section backgrounds: `white` and `surface` to create rhythm
- Each section heading includes a short accent bar for orientation

## Components

### CTA buttons

- Primary: solid accent with dark text, rounded 6–8px
- Secondary: border with white background
- No hover animations; keep simple

### Cards

- 1px border, white background
- Very subtle shadow (`shadow-sm`) for depth
- Rounded 8px
- Clear title and body hierarchy

### Lists

- Bullet points use small accent dots
- Tight, consistent spacing (8–12px)

### Logos / Trusted by

- Monochrome / low-contrast placeholders
- Centered in soft cards
- Final logos should be muted, avoid high-saturation colors

## Content Guidance

- Keep tone technical and concise
- No Web3 slang or marketing clichés
- Assume a CTO or lead engineer is reading

## Implementation Notes

- Tailwind tokens map to palette names:
  - `bg-surface`, `text-ink`, `text-muted`, `border-border`, `bg-accent`
- Accent bars: `h-1 w-10 bg-accent`
- Avoid illustrations or decorative imagery
