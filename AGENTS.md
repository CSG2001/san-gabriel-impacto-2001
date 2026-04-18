# Project Context

A React + Vite + TypeScript application using shadcn/ui components. Uses bun as package manager.

**Visual Style:** Premium Comic-Book / Pop-Art Ilustrado.

## Commands

```bash
bun run dev       # Start dev server at http://localhost:8080
bun run build     # Production build
bun run build:dev # Dev-mode build
bun run lint      # ESLint
bun run test      # Run tests (Vitest)
bun run test:watch# Watch mode
bun run preview   # Preview production build
```

## Testing

- Test files: `src/**/*.{test,spec}.{ts,tsx}`
- Uses jsdom environment
- Setup file: `src/test/setup.ts`

## Path Aliases

`@/*` maps to `./src` (configured in tsconfig and vite.config)

## Routes

- `/` → `src/pages/Index.tsx`
- `/proyecto/:slug` → `src/pages/ProjectDetail.tsx`
- `*` → `src/pages/NotFound.tsx`

## Stack

- React Router for routing
- TanStack React Query for data fetching
- Recharts for charts
- Radix UI primitives (via shadcn/ui)
- TailwindCSS

## Notes

- Dev server uses `lovable-tagger` plugin (only in development mode)
- Deduplicates react/react-dom/@tanstack packages
- No pre-commit hooks configured