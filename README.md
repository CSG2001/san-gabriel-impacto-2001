# Legendarios CSG 2001

Plataforma interactiva de alto impacto visual para commemoration los 25 años de la Promoción 2001 del Colegio San Gabriel. El sitio funciona como un portafolio digital de 13 proyectos sociales y comunitarios ejecutados por la generación, utilizando una narrativa visual basada en paneles de historieta y estética caricaturesca.

## Quickstart

> **Requisito:** Instalar bun antes de continuar. Ver https://bun.sh

```bash
# Instalar dependencias
bun install

# Iniciar servidor de desarrollo (http://localhost:8080)
bun run dev

# Construcción para producción
bun run build

# Vista previa de producción
bun run preview
```

## Rutas

- `/` - Página principal
- `/proyecto/:slug` - Detalle de proyecto
- `*` - Página no encontrada

## Tecnologías

- React + Vite + TypeScript
- shadcn/ui + Radix UI
- TailwindCSS
- React Router
- TanStack React Query
- Recharts

## Deployment

See **AGENTS.md** for full deployment documentation using `gh-pages-deploy` skill.

- Auto-deploy: push to `main` triggers GitHub Pages build
- Live site: https://csg2001.github.io/
- Use `gh-pages-deploy` skill for guided deployment workflow