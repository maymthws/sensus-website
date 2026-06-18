export const siteConfig = {
  name: "SENSUS",
  shortName: "SENSUS",
  tagline: "A curated gathering for the Web3 ecosystem.",
  description:
    "SENSUS brings builders and strategic partners together through high-signal conversations, exclusive showcases, and real connections designed to grow into long-term relationships.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://sensus.website",
  social: {
    x: process.env.NEXT_PUBLIC_X_URL || "https://x.com/SensusHQ",
    youtube:
      process.env.NEXT_PUBLIC_YOUTUBE_URL ||
      "https://www.youtube.com/@SENSUSHQ",
  },
  youtube: {
    channelId: process.env.YOUTUBE_CHANNEL_ID || "UCXtjwuX39ewNlcVwtKMP8zA",
  },
  contact: {
    endpoint: process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || "",
  },
} as const;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Community", href: "/community" },
  { label: "Project Spotlight", href: "/spotlight" },
  { label: "Contact", href: "/contact" },
] as const;
