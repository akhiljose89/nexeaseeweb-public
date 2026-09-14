# NexEease Website

Corporate website for **NexEease** — company overview, products (**NexTrazer**) and contact.

Built with [Vite](https://vite.dev) + [React](https://react.dev) + TypeScript + [React Router](https://reactrouter.com). No CSS framework — plain CSS with design tokens in `src/styles/global.css`.

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
```

```bash
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build locally
```

## Pages

| Route | File | Purpose |
|---|---|---|
| `/` | `src/pages/HomePage.tsx` | Landing page |
| `/about` | `src/pages/AboutPage.tsx` | Company mission, story, values, approach |
| `/products` | `src/pages/ProductsPage.tsx` | Product overview |
| `/products/nextrazer` | `src/pages/NexTrazerPage.tsx` | NexTrazer product page |
| `/contact` | `src/pages/ContactPage.tsx` | Contact form + details |
| `*` | `src/pages/NotFoundPage.tsx` | 404 |

## Updating content

All page copy is separated from the components so it can be replaced without touching layout code:

| What | Where |
|---|---|
| Company name, product name, contact details, nav & footer links, social links | `src/config/site.ts` |
| Landing page text | `src/content/home.ts` |
| About page text | `src/content/about.ts` |
| Products overview + NexTrazer page text | `src/content/products.ts` |
| Contact page text | `src/content/contact.ts` |
| Logo | `src/components/Logo.tsx` + `public/logo/` |
| Favicons | `public/favicon.ico`, `public/favicon-navy-*.png`, `public/apple-touch-icon-180x180.png` |
| Colours, fonts, spacing | `:root` tokens at the top of `src/styles/global.css` |

Feature cards reference icons by key (`icon: 'shield'`); available keys are listed in `src/components/Icons.tsx`.

The current text is **placeholder copy** derived from the product positioning — swap it for final marketing content when available.

### Logo

The real NexEasee logo lives in `public/logo/` (copied and optimised — lossless PNG + WebP,
`400w`/`800w` for retina — from `Marketing/NexEease-Logo/NexEasee-Logo-Exports/01-website/`).
`Logo.tsx` swaps to the white-wordmark `-on-dark` variant via the `light` prop, used in the
footer (navy background); the header uses the normal variant on its light background.
Favicons use the navy-tile versions from the same pack's `02-favicon/` folder, since the
transparent mark partly disappears in dark-mode browser tabs.

### Renaming the product

`PRODUCT_NAME` in `src/config/site.ts` drives every mention of the product name. The route `/products/nextrazer` is defined in `src/App.tsx` and `src/config/site.ts` (navigation/footer links) if the slug also needs to change.

## Contact form

The form in `src/pages/ContactPage.tsx` currently shows a confirmation message client-side only. Wire the `onSubmit` handler to a form backend (e.g. Formspree, Netlify Forms, or an API endpoint) before going live.

## Deployment

`npm run build` outputs a static site into `dist/`. It can be hosted on any static host (Netlify, Vercel, Cloudflare Pages, S3 + CloudFront, Azure Static Web Apps, nginx…).

Because the site uses client-side routing, configure the host to serve `index.html` for unknown paths (SPA fallback).
