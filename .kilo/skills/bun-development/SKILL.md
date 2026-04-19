# Project-Specific Bun Development

This project uses Bun as the package manager and runtime.

## Verified Commands

```bash
bun run dev       # Dev server at http://localhost:8080
bun run build     # Production build
bun run build:dev # Dev-mode build
bun run lint      # ESLint
bun run test      # Vitest (jsdom environment)
bun run preview   # Preview production build
```

## Package Management

- Uses `bun.lockb` (binary lockfile)
- Install: `bun install` or `bun i`
- Add deps: `bun add <package>`
- Dev deps: `bun add -d <package>`

## Key Files

- `vite.config.ts`: Dev server on port 8080, uses `lovable-tagger` in dev mode
- `vitest.config.ts`: Test setup in `src/test/setup.ts`, jsdom environment

## Path Aliases

`@/*` maps to `./src` (configured in tsconfig and vite.config)