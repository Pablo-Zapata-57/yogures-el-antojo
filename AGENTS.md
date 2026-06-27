# AGENTS.md — Yogures el Antojo

## Tech stack
- Vite 5 + React 18 + React Router 6 (BrowserRouter) + TanStack React Query
- Tailwind CSS 3 + shadcn/ui (Radix primitives) — `.jsx` files, **not TypeScript**
- Vitest + jsdom + @testing-library/react
- ESLint 9 flat config + typescript-eslint

## Dev commands
| Command | Action |
|---|---|
| `npm run dev` | Dev server on **port 8080**, HMR overlay disabled |
| `npm run build` | Production build |
| `npm run build:dev` | Dev-mode build |
| `npm run lint` | ESLint on all files |
| `npm run test` | Vitest (single run) |
| `npm run test:watch` | Vitest watch mode |

Test pattern: `src/**/*.{test,spec}.{ts,tsx}`, setup at `src/test/setup.ts`.

## Project conventions
- `@/` alias maps to `src/` (vite + jsconfig). Use `@/components/ui/Button` for shadcn imports.
- `cn(...)` utility in `@/lib/utils` wraps `clsx` + `twMerge`.
- CSS design tokens (HSL variables) live in `src/index.css` — brand colors: primary (strawberry pink), secondary (mango orange), cream.
- Custom animations: `fade-up`, `float`, `pulse-soft`.

## Architecture
- **Entry**: `src/main.jsx` → `src/App.jsx` (providers + routes)
- **Pages**: `/` (Index), `/blog`, `/blog/:slug`, `*` (NotFound)
- **WhatsApp number**: `+573046083756` — hardcoded in multiple components
- **No backend, no database, no API calls** — fully static marketing site
- Blog content sourced from `src/data/blogData.json`

## Package manager
`npm` is preferred. Both `package-lock.json` and `bun.lock`/`bun.lockb` exist in the repo.

## Notas importantes
1. Nunca hagas commit sin mi autorizacion explicita 
2. Siempre responde en español
3. Nunca hagas push a github sin mi autorizacion explicita
4. Los mensajes de los commit deben ser cortos y tecnicos