# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

An English↔Polish vocabulary trainer SPA (React 19 + TypeScript + Vite + MUI v7 + Redux Toolkit). Users are shown a Polish word and must produce its English translation, either by typing (`write` mode) or picking from multiple choices (`options` mode). Word data lives in `src/data/wordsall.json` (~3,850 `{english, polish}` pairs).

## Commands

- `npm run dev` — Vite dev server (port 5173).
- `npm run build` — **`tsc -b && vite build`**: the TypeScript build gates the Vite build, so type errors fail the build. Use this to check types.
- `npm run build:analyze` — production build with `vite-bundle-analyzer` visualizer.
- `npm run preview` — preview the production build (port 4173).
- `npm run lint` / `npm run lint:fix` — ESLint (flat config, `eslint.config.js`).
- `npm run format` — Prettier over `src/**/*.{ts,tsx,js,jsx}`.
- `npm run deploy` — `gh-pages -d dist` (deploy is **manual**, not CI-driven — see note below).

**There is no test runner.** No tests, test scripts, or test dependencies exist — do not invent `npm test` workflows.

## Architecture

### The exercise loop is effect-driven, not imperative

This is the central pattern and the thing most likely to cause confusion. The lesson never advances via an explicit "next word" call. Instead, **state reset is the trigger**: clearing `currentWord` causes the next word to be selected through a `useEffect`.

- `useWordSelection` (hook in `src/hooks/`, mounted by `ExercisePage`) watches `currentWord`. When it's empty, it picks a random word not already in `allWords`, then dispatches `setCurrentWord` (Polish) and `setAnswer` (English).
- `checkAnswer` (`src/utils/answerUtils.ts`) compares the typed answer against `lesson.answer`, dispatches `addGoodWord`/`addBadWord`, then dispatches `setReset`.
- `setReset` (`lessonSlice`) clears `currentWord`/`answer`/`myAnswer`/`optionsWords` → `useWordSelection` fires again → next word appears.

So `checkAnswer` is the single chokepoint for scoring a round, and **it takes `dispatch` as an argument** (the utils are pure of state but receive dispatch). Follow that pattern; don't read answer state a second way inside a component that calls `checkAnswer`.

Auto-check: `useAutoAnswerCheck` auto-marks a correct answer (without pressing Check) when `myAnswer === answer` **and** `showWordHint` is enabled. Keep this in mind when changing write-mode input flow.

### Redux: three slices, typed hooks

- `app` — `page`, `darkMode`, `showSettings`.
- `lesson` — all exercise state: `currentWord`, `answer`, `myAnswer`, `goodWords`, `badWords`, `allWords`, `optionsWords`, `numberOfOptionsWords`, `mode` (`"options" | "write"`), `showWordHint`, `showLettersHint`.
- `user` — `name`, `lang` (largely vestigial; default `lang: "en"`).

**Always use `useAppDispatch` / `useAppSelector` from `src/store/hooks.ts`** (typed via `AppDispatch`/`RootState`), never the raw `react-redux` versions.

### Modes & hints

- Mode toggles with `switchMode`. `OptionsWords` generates `numberOfOptionsWords - 1` random English words plus the real answer, shuffles, and clicking any option immediately runs `checkAnswer` (no separate submit).
- `showWordHint`: progressive reveal — `Word` compares `answer` vs `myAnswer` with `countMatchingFirstLetters` and reveals that many leading letters (`revealFirstLetters`), rendering `_` as placeholder chips.
- `showLettersHint`: `LettersHint` shows the sorted unique letters of the answer, coloring the ones the user has already typed.

### Routing & the GitHub Pages base path

The app is served from a subpath, so the base path must stay consistent across three places — changing one without the others breaks deep links:

- `vite.config.ts`: `base: "/englishWords/"`.
- `App.tsx`: `<BrowserRouter basename="/englishWords">`.
- `public/404.html` + the inline script in `index.html`: the `spa-github-pages` redirect trick (`pathSegmentsToKeep = 1`) so refreshing a deep link on GitHub Pages doesn't 404. Don't remove these unless the deployment target changes.

Routes are generated from `config/menuItems.ts` (`home`/`exercise`/`settings`); `App.tsx` maps each entry to `<Route>` and redirects `/` to the first item. To add a page, add a `MenuItemType` entry (with a component) — routing wires up automatically.

### SEO is runtime DOM mutation

`SEO` and `BreadcrumbSchema` are components that return `null` and mutate `document.head`/`document.title` in `useEffect`. They don't render markup. `index.html` holds the static/default meta tags and JSON-LD; the components update them per route.

## Conventions & gotchas

- **Imports include extensions and use `type`.** `tsconfig.app.json` sets `allowImportingTsExtensions: true` and `verbatimModuleSyntax: true`. Relative imports carry `.ts`/`.tsx` (e.g. `import Settings from "../components/Settings.tsx"`), and type-only imports must be `import { type WordPair }`. Omitting either fails the `tsc -b` build gate.
- **MUI v7 Grid syntax.** Use `<Grid size={{ xs: 12, sm: 6 }}>`, **not** the legacy `<Grid item xs={12}>`. This repo is on MUI v7 / React 19.
- **Filename typo is intentional.** `src/utils/wordFunctons.ts` is misspelled (missing "i"). `Word.tsx` imports from it — leave the name as-is or update all imports together.
- `userSlice` and `config/settings.ts` (`{ title: "Words Learning App" }`) exist but are mostly unused; check before relying on them.
- The `README.md` claims automated CI/CD, but `.github/workflows/` is empty. Deployment is the manual `npm run deploy` (`gh-pages`); `deploy:ci` exists for a CI step that hasn't been authored yet.
