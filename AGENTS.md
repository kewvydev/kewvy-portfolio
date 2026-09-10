# Repository Guidelines

## Project Structure & Module Organization

This is a Next.js 16 portfolio built with the App Router and TypeScript. Route entry points and global styles live in `app/`: `app/page.tsx` composes the landing page, `app/layout.tsx` defines shared document layout, and `app/api/contact/route.ts` handles contact-form submissions. Reusable page sections belong in `components/`; keep a component's local styles beside it when appropriate (for example, `components/DotGrid.css`). Shared utilities and third-party setup belong in `lib/`. Static images, PDFs, icons, and project assets are served from `public/`, with grouped assets under paths such as `public/projects/` and `public/highlights/`.

## Build, Test, and Development Commands

Use pnpm because `pnpm-lock.yaml` is committed.

- `pnpm install` installs the locked dependencies.
- `pnpm dev` starts the local Next.js development server at `http://localhost:3000`.
- `pnpm lint` runs ESLint with Next.js Core Web Vitals and TypeScript rules.
- `pnpm build` creates the production build and performs Next.js type/build validation.
- `pnpm start` serves an existing production build.

Run `pnpm lint && pnpm build` before opening a pull request. There is no dedicated automated test suite yet; validate visual changes in the browser and exercise the contact form when changing its UI or API route.

## Coding Style & Naming Conventions

Use TypeScript for new React components and follow the existing two-space indentation, semicolons, and double-quoted imports. Name React component files in PascalCase (`ScrollToTopButton.tsx`), utilities in camelCase (`utils.ts`), and route handlers using Next.js conventions (`app/api/<name>/route.ts`). Prefer the `@/` alias for root-relative imports. Keep client-only hooks, event listeners, and animation code scoped to the component that needs them.

## Configuration & Security

The contact API requires `RESEND_API_KEY`; place it in an uncommitted local environment file such as `.env.local`. Never commit credentials or replace the configured sender/recipient with personal test values. Treat files in `public/` as publishable content and optimize images before adding large assets.

## Commits & Pull Requests

Recent history uses short, imperative, descriptive subjects, such as `Updated CV`, `Portfolio redesign`, and `GSAP animations added`. Keep commits focused and avoid unrelated formatting churn. Pull requests should explain the user-visible change, link any relevant issue, list validation commands run, and include screenshots or a short recording for layout, animation, or responsive changes. Call out any new environment variables or public assets explicitly.
