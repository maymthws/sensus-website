export type EventItem = {
  slug: string;
  title: string;
  date: string; // ISO
  location: string;
  status: "Upcoming" | "Past";
  theme: string;
  summary: string;
  highlights: string[];
  capacity?: string;
  rsvpUrl?: string;
};

// Curated placeholder data — replace the array contents to update the events page.
// Each entry is rendered as a card; the next Upcoming event is featured at the top.
export const events: EventItem[] = [
  {
    slug: "sensus-007-edge-of-the-stack",
    title: "SENSUS #007 — Edge of the Stack",
    date: "2026-08-14T18:00:00+07:00",
    location: "Bangkok · The Parq",
    status: "Upcoming",
    theme: "AI x Consumer",
    summary:
      "Ten-minute demos from teams shipping consumer-grade AI in production. Strict no-slides policy — only working product.",
    highlights: [
      "Curated 10×10 demo format",
      "Investor & partner salon afterwards",
      "Full recording published to YouTube within 48h",
    ],
    capacity: "120 seats · application required",
    rsvpUrl: "https://x.com/SensusHQ",
  },
  {
    slug: "sensus-006-onchain-renaissance",
    title: "SENSUS #006 — Onchain Renaissance",
    date: "2026-05-22T19:00:00+07:00",
    location: "Bangkok · Booking Holdings Building",
    status: "Past",
    theme: "Blockchain",
    summary:
      "Builders re-anchoring onchain experiences around real users and real distribution. Eight demos, two investor panels.",
    highlights: [
      "8 curated demos",
      "Recordings live on the Project Spotlight page",
      "Partnered with three regional VCs",
    ],
  },
  {
    slug: "sensus-005-agents-in-the-wild",
    title: "SENSUS #005 — Agents in the Wild",
    date: "2026-03-06T18:30:00+07:00",
    location: "Singapore · Capitol Theatre",
    status: "Past",
    theme: "AI",
    summary:
      "Agentic systems moving past demos: live integrations, real customers, and the operations behind them.",
    highlights: [
      "First Singapore edition",
      "Co-hosted with regional AI guilds",
      "Featured in Web3 with AI newsletter",
    ],
  },
  {
    slug: "sensus-004-consumer-quiet-revolution",
    title: "SENSUS #004 — Consumer Quiet Revolution",
    date: "2025-11-13T18:30:00+07:00",
    location: "Bangkok · HUBBA-TO",
    status: "Past",
    theme: "Consumer Apps",
    summary:
      "Consumer teams shipping with sub-1M MAU — focused on retention, not hype. Sold out 90 seats in 6 days.",
    highlights: [
      "Sold out · waitlist of 240",
      "6 demos + 4 founder fireside chats",
      "Sponsor: Tether, Kaito, Galxe",
    ],
  },
];

export const themes = ["AI", "Blockchain", "Consumer Apps"] as const;
export type Theme = (typeof themes)[number];
