# Heartopia Cozy Guide MVP

A static MVP landing site for an unofficial fan-made Heartopia guide project.

## Project Status

This is an early MVP. It uses sample placeholder data only and does not include verified game data yet.

## Pages

- `index.html` &mdash; Home
- `beginner-guide.html` &mdash; Beginner Guide
- `codes.html` &mdash; Codes Tracker
- `recipes.html` &mdash; Recipes Notes
- `fish.html` &mdash; Fish Notes
- `npc-gifts.html` &mdash; NPC Gift Notes
- `checklist.html` &mdash; Daily Checklist

## Files

- `styles.css` &mdash; Shared styles
- `script.js` &mdash; Small frontend interactions and table search
- `README.md` &mdash; Project documentation
- `docs/domain-launch-checklist.md` &mdash; Custom domain launch checklist and manual verification record
- `docs/mvp-stage-summary-and-next-roadmap.md` &mdash; MVP stage summary and next roadmap
- `docs/seo-phase-1-completion-note.md` &mdash; SEO Phase 1 completion note for sitemap, robots, and social meta verification.
- `docs/real-data-collection-principles.md` &mdash; Principles for collecting, verifying, and publishing real game data.
- `docs/manual-data-verification-workflow.md` &mdash; Manual workflow for verifying real game data before publishing.
- `docs/real-data-field-schema.md` &mdash; Field schema design for future verified game data.
- `templates/real-data-entry-template.md` &mdash; Manual data entry template for future verified game data.
- `docs/traffic-entry-page-plan.md` &mdash; First traffic entry page plan for SEO, community distribution, and returning-user loops.
- `docs/p0-entry-page-url-content-structure.md` &mdash; URL and content structure design for the first P0 traffic entry pages.
- `docs/p0-page-implementation-task-breakdown.md` &mdash; Implementation task breakdown for the first P0 traffic entry pages.
- `docs/p0-live-verification-record.md` &mdash; Live verification record for P0 traffic entry pages after deployment on cozyguidehub.com.

## Sample Data Files

- `data/recipes.sample.json` — Placeholder recipe data for schema testing only.
- `data/fish.sample.json` — Placeholder fish data for schema testing only.
- `data/npc-gifts.sample.json` — Placeholder NPC gift data for schema testing only.
- `data/codes.sample.json` — Schema-only code data with no real or fake codes.
- `data/checklist-items.sample.json` — Placeholder checklist items for schema testing only.
- `data/events.sample.json` — Placeholder event data for schema testing only.
- `data/materials.sample.json` — Placeholder material data for schema testing only.

## SEO Files

- `sitemap.xml` &mdash; Basic sitemap for the official domain.
- `robots.txt` &mdash; Allows crawling and points to the sitemap.

## How to Preview Locally

Open `index.html` directly in a browser.

Optional &mdash; start a local server:

```bash
python -m http.server 8000
```

Then open:

```
http://localhost:8000
```

## Live Site

- **Official**: [https://cozyguidehub.com](https://cozyguidehub.com)
- **WWW**: [https://www.cozyguidehub.com](https://www.cozyguidehub.com)
- **Backup (Cloudflare Pages)**: [https://heartopia-cozy-guide.pages.dev](https://heartopia-cozy-guide.pages.dev)

Both apex and www domains are active with SSL enabled.

## Deployment

This project can be deployed as a static site.

Suitable options:

- Cloudflare Pages
- Vercel
- GitHub Pages
- Netlify

No build command is required.

Recommended deployment settings:

- Build command: none
- Output directory: `/`
- Root directory: project root

## Current Scope

This MVP includes:

- Static home page
- Beginner guide page
- Codes tracker template
- Recipes placeholder table
- Fish placeholder table
- NPC gifts placeholder table
- Daily checklist page
- Shared navigation
- Basic table search
- Language selector UI preview

This MVP does **not** include:

- Real verified game data
- Official assets
- Backend
- Database
- Login
- Payment
- Comments
- User accounts
- Automated data updates
- Full multilingual translations

## Data Policy

All sample rows are placeholders for layout testing only.

Do not treat placeholder recipes, fish, NPC gifts, or checklist items as verified Heartopia game data.

Future real data should be manually verified before publishing.

## Design

Cozy notebook / warm island journal theme with cream background, mint green accents, soft orange highlights, and deep blue-gray text. Designed for readability on both desktop and mobile.

## Local Site Audit

T009 checked navigation, active states, placeholder warnings, search behavior, footer disclaimer, mobile readability, and deployment readiness.

## Development Notes

- **T001** &mdash; Created the first MVP landing page with all sections (hero, quick cards, beginner route, codes preview, database preview, checklist, FAQ, footer).
- **T002** &mdash; Improved layout, copy clarity, MVP warnings, and mobile readability. Added MVP status banner, stronger placeholder warnings in codes section, "planned" notes in database preview, and more natural FAQ wording.
- **T003** &mdash; Added the first standalone beginner guide page (`beginner-guide.html`) with general MVP-safe beginner structure: first day route, daily routine, priority cards, common mistakes, future plans, and FAQ.
- **T004** &mdash; Added the recipes MVP page (`recipes.html`) with placeholder recipe table, search UI, recipe data policy, status cards, and future database plan.
- **T004.1** &mdash; Checks multi-page navigation consistency, active navigation states, shared footer disclaimer, and safe JavaScript behavior.
- **T005** &mdash; Added the fish MVP page (`fish.html`) with placeholder fish table, search UI, fish data policy, status cards, and future collection guide plan. Refactored script.js table search into a generic `[data-table]`-driven function shared between recipes and fish pages.
- **T006** &mdash; Added the NPC Gifts MVP page (`npc-gifts.html`) with placeholder gift table, search UI, NPC gift data policy, status cards, and future friendship guide plan.
- **T006.1** &mdash; Checks navigation consistency, active states, shared disclaimer, placeholder warnings, and table search behavior across current MVP pages.
- **T007** &mdash; Added the Codes Tracker MVP page (`codes.html`) with no fake codes, empty verified-code state, manual verification policy, code status explanation, redeem steps, and future code table plan.
- **T008** &mdash; Added the Daily Checklist MVP page (`checklist.html`) with static checkbox groups, progress-saving placeholder, checklist data policy, and future tool plan.
- **T009** &mdash; Runs a local full-site audit for navigation, search behavior, placeholder data safety, shared disclaimer, README accuracy, and deployment readiness.
- **T010** &mdash; Prepares the static MVP for GitHub and static hosting deployment by cleaning README structure, deployment notes, data policy, and public project scope.
- **T014** &mdash; Fixes FAQ navigation links to point to `index.html#faq`, adds `id="faq"` to the homepage FAQ section, confirms Checklist links already point to the standalone `checklist.html`, adds a language selector UI preview (English / 中文 / Русский / Français / 日本語 / 한국어) in the navigation bar of all pages, and implements a lightweight localStorage-based language preference with a toast notification. No full translations are included.
- **T017** &mdash; Fixes the language selector default state so English is shown by default while multilingual translation remains a preview-only feature. Validates localStorage values against the allowed language list, falls back to `en` for invalid or missing values, and shows the toast only when switching to a non-English language.
- **T019** &mdash; Improves local desktop preview guidance and mobile navigation readability with responsive nav behavior, table readability checks, and language selector preservation.
- **T021** &mdash; Improves mobile navigation labels and active state styling so NPC Gifts does not wrap awkwardly on small screens.
- **T024** &mdash; Updates the project documentation with the official custom domain `https://cozyguidehub.com`, keeps the Cloudflare Pages URL as a backup, and records that both apex and www domains are active with SSL enabled.
- **T026** &mdash; Updates page titles, meta descriptions, and footer site identity to use the official custom domain `https://cozyguidehub.com` while keeping the project clearly marked as a fan-made MVP.
- **T028** &mdash; Adds a formal custom domain launch checklist under `docs/domain-launch-checklist.md`.
- **T030** &mdash; Updates the custom domain launch checklist with confirmed apex and www domain accessibility status.
- **T032** &mdash; Marks the remaining manually verified launch checklist items for footer, titles, FAQ, checklist, search, mobile navigation, and language selector behavior.
- **T034** &mdash; Adds the MVP stage summary and next roadmap document to define the current project status, risks, and recommended next phases.
- **T036** &mdash; Adds `sitemap.xml` and `robots.txt` for the official domain `https://cozyguidehub.com`.
- **T039** &mdash; Adds Open Graph and Twitter Card text meta tags to all 7 HTML pages using the official domain `https://cozyguidehub.com`.
- **T042** &mdash; Adds the SEO Phase 1 completion note documenting sitemap, robots, and Open Graph / Twitter meta verification.
- **T044** &mdash; Adds real data collection principles before any verified game data is added to the site.
- **T046** &mdash; Adds the manual data verification workflow for real game data before any live verified data is published.
- **T048** &mdash; Adds the real data field schema design before creating JSON data files or publishing verified game data.
- **T050** &mdash; Adds sample JSON data files under `data/` for schema testing only; no real verified game data or fake codes are included.
- **T052** &mdash; Adds a manual real data entry template for future candidate data records without publishing real game data.
- **T054** &mdash; Adds the first traffic entry page plan to shift the project from infrastructure setup toward content-driven acquisition.
- **T056** &mdash; Designs URL and content structure for the first P0 traffic entry pages (Beginner Guide, First Day Guide, Codes Tracker, Daily Checklist).
- **T058** &mdash; Creates the implementation task breakdown for the first P0 traffic entry pages before modifying user-facing pages.
- **T060** &mdash; Upgrades beginner-guide.html into a stronger P0 traffic entry page with beginner-safe guidance, related links, and clear unverified-data boundaries.
- **T062** &mdash; Creates first-day-guide.html as a P0 traffic entry page with general first-day guidance, clear unverified-data boundaries, and internal links.
- **T064** &mdash; Strengthens codes.html into a more trustworthy Codes Tracker with no verified active codes state, verification policy, last-checked status, and clear unverified-code boundaries.
- **T066** &mdash; Strengthens checklist.html into a stronger Daily Checklist traffic entry page with general planning tips, verified-task boundaries, related links, and a future save-feature note.
- **T068** &mdash; Updates P0 page internal links and entry paths across Home, Beginner Guide, First Day Guide, Codes Tracker, and Daily Checklist. Hero buttons linked to real pages, card headings made clickable, steps sections enriched with direct links, related pages button styles unified, codes tag corrected to MVP Preview, and quick link bar added below home page cards.
- **T071** &mdash; Records the live verification results for P0 traffic entry pages after deployment on cozyguidehub.com, confirming page availability, sitemap and robots status, meta tags, internal links, and safety boundaries.

## Disclaimer

This is an unofficial fan-made guide site. Heartopia and related names belong to their respective owners. This site is not affiliated with or endorsed by XD Games.
