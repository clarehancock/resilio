# GRC Framework — Backend (Phase C)

Express API backed by Postgres (built for Supabase's free tier), plus a Claude-powered
"reality check" that compares a self-rating against the real SCF maturity levels.

## Identity model — read this first

There is **no authentication**. A person types a name, the backend finds-or-creates a
record for that exact name (case-insensitive), and everything they enter is tied to
that record. Re-entering the same name later returns the same data.

This means:
- **Duplicate names collide on purpose.** Two people who both type "Dave" share one
  record. Fine for an internal tool where you tell people to pick something distinctive;
  not fine if you need real privacy between users.
- **Anyone who knows or guesses a name can see and edit that person's data.** There's no
  password.

This is an accepted tradeoff for a prototype, not an oversight — see the chat history if
you want the reasoning. If this ever needs to hold sensitive data or be given to external
customers unsupervised, it needs real auth before that happens.

## Setup

1. **Supabase**: Project Settings → Database → Connection string. Grab both the pooled
   (port 6543) and direct (port 5432) connection strings.
2. **Anthropic API key**: console.anthropic.com → API Keys → Create Key. This is separate
   from a claude.ai login and is billed per-use.
3. ```bash
   cd server
   cp .env.example .env
   # paste in your DATABASE_URL, DIRECT_URL, and ANTHROPIC_API_KEY
   npm install
   npm run migrate   # creates the assessees + ratings tables (run once)
   npm run dev         # starts the API on http://localhost:4000
   ```
4. In `web/index.html`, uncomment and set `window.GRC_API_URL` to point at this server
   (or leave it pointing at `http://localhost:4000` for local dev).

## What's in the database vs. the frontend

The **activity catalog** (domains, NIST functions, activity names, CMM rubric text, SCF
controls) stays static in the frontend's `data.js` / `scf-detail.js` — it doesn't change
per person, so there's no reason to duplicate it in Postgres.

The **database only holds per-person dynamic state**: who's who (`assessees`), and each
person's rating/practice-text/AI-assessment per activity (`ratings`). This keeps the
schema small and means updating the framework's content is still just editing a JS file
and redeploying the static site — no migration needed.

## The `/api/assess` endpoint

Takes a person's self-rating, their free-text description of what they actually do, and
the real CMM level definitions for that domain (sent by the frontend, which already has
`scf-detail.js` loaded). Sends all of it to Claude with instructions to estimate which
maturity level the description actually reflects, independent of the self-rating, and
return a short, direct comparison. The result is cached back onto the `ratings` row so it
doesn't need to be regenerated until the person clicks "Re-check."

Costs a small amount per call (Claude API billing) — this only happens when someone
explicitly clicks the check button, never automatically.

## Known limitations worth knowing about

- No rate limiting on `/api/assess` — someone could hammer it and run up your Anthropic
  bill. Fine for internal use, worth adding before wider distribution.
- No retry/backoff if Claude's API is briefly down — the frontend just shows the error.
- CORS is locked to whatever origins you list in `CORS_ORIGIN` — update it when you
  deploy the frontend somewhere real (e.g. your GitHub Pages URL).
