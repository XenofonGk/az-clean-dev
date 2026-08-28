# AZ Clean — dev redesign

This is a **preview/proposal** for a redesign of [azclean.gr](https://azclean.gr).
It is a real [React](https://react.dev) app built with [Vite](https://vite.dev),
**not** the live site — nothing here affects azclean.gr until someone
deliberately copies it over.

Live preview: **https://xenofongk.github.io/az-clean-dev/**

## How deployment works

Every time a commit lands on `main`, a GitHub Actions workflow
(`.github/workflows/deploy.yml`) automatically:

1. installs dependencies (`npm ci`)
2. builds the site (`npm run build`)
3. publishes the result to GitHub Pages

You don't have to build or upload anything by hand — just edit files, commit
to `main` (or open a PR and merge it), and the live preview updates itself
in a minute or two. You can watch progress under the repo's **Actions** tab.

## Project structure

```
index.html              ← Vite entry point (fonts, favicon, page <title>)
src/
  main.jsx              ← mounts the app — you'll rarely need to touch this
  App.jsx                ← the page, top to bottom, one line per section
  index.css              ← all styles (colors, fonts, spacing — see below)
  data.js                 ← ALL the real text content: services, steps,
                             reviews, areas, FAQs, phone number, booking hours
  assets/                 ← real photos + the AZ Clean logo
  components/
    Header.jsx, Hero.jsx, Proof.jsx, Services.jsx, HowItWorks.jsx,
    BoatBand.jsx, Booking.jsx, Testimonials.jsx, AreasFaq.jsx,
    FinalCta.jsx, Footer.jsx, StickyBar.jsx  ← one file per section
    Rv.jsx                ← "fade in on scroll" wrapper, used everywhere
    Compare.jsx            ← the draggable before/after photo slider
```

### The most common edits

- **Change any wording, a service description, a review, an FAQ answer, the
  phone number, or the booking hours** → edit `src/data.js`. That file has
  no JSX in it, just plain lists — the safest place to make text changes.
- **Change a photo** → drop the new file in `src/assets/`, then update the
  `import ... from "../assets/..."` line at the top of the component that
  uses it (e.g. `Hero.jsx`, `Proof.jsx`, `BoatBand.jsx`).
- **Change a color, font, or spacing** → `src/index.css`. Colors are defined
  once at the top as CSS variables (`--gold-deep`, `--ink`, etc.) and used
  everywhere else — change the variable, not each individual rule.
- **Add/remove/reorder a whole section** → `src/App.jsx`. Each section is
  one line (`<Hero />`, `<Proof />`, ...); reorder the lines to reorder the
  page.
- **Change the booking hours logic itself** (not just the displayed hours)
  → `src/data.js`, the constants right above `nextDays()`.

## Running it locally

Requires [Node.js](https://nodejs.org) 18+.

```bash
npm install       # first time only
npm run dev       # starts a local server with live-reload
npm run build     # builds the production version into dist/
npm run preview   # serves the dist/ build locally, to sanity-check it
```

## Notes

- The site is deployed as a GitHub Pages *project* site
  (`xenofongk.github.io/az-clean-dev/`), so `vite.config.js` sets
  `base: "/az-clean-dev/"`. If this ever moves to its own domain, that's
  the one line to change.
- The booking form on the page is a **visual demo only** — it is explicitly
  labeled as such and does not send anything anywhere. It is not yet
  connected to a real Setmore (or other) account.
- The orange banner at the top of the page and the `noindex` tag in
  `index.html` exist so this preview doesn't get confused with the real
  site or picked up by search engines. Remove both only when this design
  is actually approved to go live.
