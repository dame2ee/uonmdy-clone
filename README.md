# University of Nursing, Mandalay — homepage recreation

A static rebuild of the `uonmdy.edu.mm` home page using Next.js 15 (App Router) and Tailwind CSS v4.

This is a **front-end recreation only**. It never talks to the live site, and every link that would lead there is intentionally inert.

## Stack

- Next.js 15 / React 19, App Router
- Tailwind CSS v4 — `@import "tailwindcss"` plus a `@theme` token block in `app/globals.css`
- TypeScript
- `next/image` serving local assets from `public/images/`

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

```bash
npm run build   # production build
npm run lint    # eslint
```

## Structure

| Path | Purpose |
| --- | --- |
| `app/layout.tsx` | Metadata and the global stylesheet |
| `app/page.tsx` | Composes the page sections |
| `app/globals.css` | Design tokens taken from the original theme (JoomlArt "JA University", blue variant), the `@layer base` element styles, and the `.uon-*` component helpers |
| `lib/data.ts` | All page content: nav, slides, announcements, news, rectors, visitor and campus stats, gallery images |
| `components/Header.tsx` | Navy header, logo, search form |
| `components/MainNav.tsx` | Hover mega-menu and the login sidebar trigger |
| `components/LoginSidebar.tsx` | Off-canvas login form, closed by Escape or the backdrop |
| `components/HeroSlider.tsx` | Four-slide crossfade with playback controls |
| `components/Announcements.tsx` | Three-column announcement grid |
| `components/SpotlightOne.tsx` | Latest News, Rectors, Most Read, visitors counter |
| `components/PhotoGallery.tsx` | Paged 62-image gallery |
| `components/SpotlightTwo.tsx` | Newsletter, contact details, social links |
| `components/NavHelper.tsx` | Breadcrumb and animated campus stat cards |
| `components/Footer.tsx` | Copyright line |

## Notes on the rebuild

- Colours, spacing and type are tokenised from the original template, so the 1170px container width and 13px root font size are preserved.
- **All outbound links are inert.** Nav items, announcements and news entries carry no `href`; only the `next/image` assets, the `mailto:` address and the Facebook page remain real.
- Base element styles live in `@layer base` so Tailwind utilities can override them. An unlayered `a { color: … }` rule outranks every `text-*` utility, which silently broke the nav colours.
- Dropdowns open on `:hover` only. `:focus-within` was removed because clicking a menu item pinned its flyout open.

## Rights

Layout and imagery belong to the University of Nursing, Mandalay. This repository is a non-commercial front-end exercise.
