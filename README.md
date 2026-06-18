# SENSUS — Website

The official SENSUS website — a curated gathering for the Web3 ecosystem.

Built with **Next.js 14 (App Router)** · **TypeScript** · **Tailwind CSS**.

## Stack

- **Framework**: Next.js 14 (App Router, Server Components, Route Handlers)
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS with a custom metallic-silver / glassmorphism design system
- **Data**: YouTube Data API v3 (Project Spotlight page)
- **Deployment**: Vercel (recommended) or any Next.js-compatible host

## Features

1. **Home** — Hero with SENSUS tagline + value props + featured events
2. **Events** — Upcoming + past editions, archive, RSVP / apply CTAs
3. **Community** — Who shows up, what you get, partner roster
4. **Project Spotlight** — On-demand archive of every demo, live feed from the SENSUS YouTube channel
5. **Contact** — Application form (demo / partner / press) + social channels

## Local development

```bash
# Install dependencies
npm install

# Copy environment template
cp .env.example .env.local

# Start the dev server
npm run dev
# → http://localhost:3000
```

### Environment variables

| Var | Required | Purpose |
| --- | --- | --- |
| `YOUTUBE_API_KEY` | Optional | Pulls live videos for `/spotlight`. Without it, the page renders an empty state with a fallback to the YouTube channel link. |
| `YOUTUBE_CHANNEL_ID` | Pre-filled | Defaults to `@SENSUSHQ`'s channel ID. |
| `NEXT_PUBLIC_SITE_URL` | Optional | Production URL for SEO / OG. |
| `NEXT_PUBLIC_CONTACT_ENDPOINT` | Optional | POST endpoint for the contact form (Formspree, Resend, custom webhook). Without it, the form runs in demo mode and shows a friendly success state. |
| `NEXT_PUBLIC_X_URL` | Pre-filled | X / Twitter URL. |
| `NEXT_PUBLIC_YOUTUBE_URL` | Pre-filled | YouTube channel URL. |

## YouTube API setup

The Project Spotlight page calls the YouTube Data API v3 server-side:

1. Create a project at https://console.cloud.google.com/
2. Enable **YouTube Data API v3**
3. Create an API key credential
4. Set `YOUTUBE_API_KEY` in your deployment environment

API responses are cached for 5 minutes (`revalidate: 300`) to stay within quota.

## Editing content

- **Events**: edit `lib/events.ts`
- **Site copy / nav**: edit `lib/config.ts`
- **Home hero copy**: edit `app/page.tsx` (or move to MDX if preferred)
- **Theme tokens**: edit `tailwind.config.ts` and `app/globals.css`

## Deployment

### Vercel (recommended)

```bash
npm i -g vercel
vercel
```

Then set the environment variables in the Vercel dashboard.

### Any other Next.js host

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx            # Root layout (Navbar + Footer)
  page.tsx              # Home
  globals.css           # Tailwind + glassmorphism utilities
  events/page.tsx       # Events
  community/page.tsx    # Community
  spotlight/page.tsx    # Project Spotlight (YouTube API)
  contact/
    page.tsx            # Contact
    ContactForm.tsx     # Client form component
components/
  Logo.tsx
  Navbar.tsx
  Footer.tsx
  Button.tsx
  Section.tsx
lib/
  config.ts             # Site config (social, copy, nav)
  events.ts             # Events data
  youtube.ts            # YouTube Data API helper
public/
  favicon.svg
```

## License

© SENSUS. All rights reserved.
