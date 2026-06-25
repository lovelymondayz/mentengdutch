# Toko Menteng — Indonesische Toko in Voorburg & Wassenaar

**Live:** [client.arjism.com](https://client.arjism.com)

## Design System

**Palette:** Dark charcoal base (`#0F0F0F`) + amber accent (`#D4A843`) + off-white text (`#F8F4ED`) + muted sage (`#8B9E7C`)

**Typography:** Space Grotesk (geometric, modern)

**Layout philosophy:** Sharp corners, generous whitespace, thin borders, no rounded elements, subtle grain texture overlay

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4 (CSS-first config via `@theme`)
- Docker + nginx for production

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
```

## Deployment

```bash
docker compose up -d --build
```

## Sections

1. **Header** — Minimal dark header, text logo, mobile drawer
2. **Hero** — Split layout (text left, image right), no overlay
3. **Banner** — Thin amber announcement bar
4. **Menu** — Pill tabs + horizontal list-style cards with prices
5. **About** — Full-height image + text panel
6. **Catering** — Centered CTA block
7. **Reviews** — 3-column cards on dark surface
8. **Location** — Info left, embedded map right
9. **Videos** — 2-column with play overlays
10. **Shop** — 4-column product grid
11. **Footer** — Minimal, dark, no color blocks

## Anti-Plagiarism Notes

This design is **completely distinct** from jakartamunch.com:
- Different palette (dark vs. light, amber vs. red/lime)
- Different typography (Space Grotesk vs. Archivo)
- Different layout (split hero, list menu, sharp corners vs. centered hero, portrait cards, rounded)
- Different visual treatment (grain overlay, thin borders vs. thick borders, no dividers)
- Different section arrangement (no marquee, no curved dividers, no centered hero overlay)
