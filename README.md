# Midnight Rodeo · Pre-Launch Roster Survey

Live site: **https://midnightrodeo2026.github.io/survey/**

Roster survey for the Horde guild **Midnight Rodeo** (WoW Forever).
Plain HTML, CSS and JavaScript — no build step.

## Views

| Hash | What it shows |
|---|---|
| `#home` | Masthead, start button, live roster board |
| `#survey` | 7-section survey. Drafts autosave in the browser. |
| `#done` | Confirmation ticket |
| `#council` | Leadership dashboard: gaps, heatmap, CSV, targets |

## Shared answers

Without Supabase keys in `js/config.js`, the published site runs in **demo mode** (answers stay in that browser). To collect a real shared roster:

1. Create a free Supabase project
2. Run `supabase/schema.sql`
3. Insert leadership emails into `leaders`
4. Put the project URL and anon key in `js/config.js`
