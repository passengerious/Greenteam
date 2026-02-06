# Repository Guidelines

## Project Structure & Module Organization
- `App.tsx`, `index.tsx`, and `index.html` define the app entry points and root layout.
- `components/` holds UI sections such as `Header.tsx`, `Hero.tsx`, and `RouteCalculator.tsx`.
- `contexts/` contains shared React context logic (currently `LanguageContext.tsx`).
- `constants.ts` and `types.ts` centralize shared values and TypeScript types.
- Build tooling lives in `vite.config.ts`, `tsconfig.json`, and `package.json`.

## Build, Test, and Development Commands
- `npm install`: install dependencies before running anything.
- `npm run dev`: start the Vite dev server for local development.
- `npm run build`: produce a production build in `dist/`.
- `npm run preview`: serve the production build locally for verification.

## Coding Style & Naming Conventions
- Use TypeScript + React with 2-space indentation (match the existing files).
- Prefer PascalCase for React components (`RouteCalculator.tsx`) and camelCase for variables and functions.
- Keep shared values in `constants.ts` and reusable types in `types.ts`.
- No formatter or linter is configured; keep edits consistent with surrounding code.

## Testing Guidelines
- There is no testing framework configured and no `tests/` directory.
- If you add tests, document the framework, add scripts (e.g., `npm test`), and note test locations.

## Commit & Pull Request Guidelines
- Git history is minimal (`init`, `Initial commit`), so no established commit message convention exists.
- For new work, use clear, imperative messages (e.g., `Add route calculation helper`).
- PRs should include: a short summary, testing notes (or “not run”), and screenshots for UI changes.

## Security & Configuration Tips
- Set `GEMINI_API_KEY` in `.env.local` for local runs; avoid committing secrets.
- Keep environment-specific settings out of source files and documented in `README.md`.
