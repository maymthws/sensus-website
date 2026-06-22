export type EventItem = {
  slug: string;
  title: string;
  shortTitle: string;
  date: string; // ISO start
  endDate?: string; // ISO end
  location: string;
  status: "Upcoming" | "Past";
  theme: string;
  summary: string;
  description: string;
  agenda: { time: string; title: string }[];
  highlights: string[];
  whoShouldAttend: string[];
  capacity?: string;
  rsvpUrl?: string;
  lumaUrl: string;
  coverImage: string;
  organizer: string;
  sponsors: string[];
};

export const events: EventItem[] = [
  {
    slug: "road-to-sensus-bkk-edition",
    title: "ROAD TO SENSUS: BKK EDITION",
    shortTitle: "SENSUS BKK Edition",
    date: "2026-05-19T14:00:00+07:00",
    endDate: "2026-05-19T19:00:00+07:00",
    location: "Bangkok, Thailand",
    status: "Past",
    theme: "Web3 · AI · Consumer",
    summary:
      "Where the Signal meets the stage for global builders and visionaries.",
    description:
      "SENSUS is a curated gathering for the Web3 ecosystem. Moving away from traditional conferences, we focus on a \"High-Signal\" environment — stripping away the noise to foster deep technical discussions, showcase real progress, and build strategic partnerships.",
    agenda: [
      { time: "14:00", title: "Doors Open · Registration and welcome drinks" },
      { time: "14:45", title: "Sponsor Spotlights · Partner ecosystem visions" },
      { time: "15:00", title: "Curated Spotlight Sessions · TED-style showcases" },
      { time: "16:00", title: "Refreshment" },
      { time: "16:15", title: "Curated Spotlight Sessions (continued)" },
      { time: "17:30", title: "SENSUS Connect · Open floor networking" },
    ],
    highlights: [
      "10-minute TED-style Project Spotlights from selected teams",
      "Strategic deal-making with funds, ecosystem leaders, and operators",
      "Complimentary food and drinks throughout the event",
    ],
    whoShouldAttend: [
      "Strategic Partners · Funds, ecosystem leaders, and industry executives",
      "Project Owners / Builders · Founders and technical teams showcasing progress",
      "Web3 Insiders · Dedicated operators and experts driving the industry forward",
    ],
    capacity: "By application · free general admission",
    rsvpUrl: "https://luma.com/dauf89hl",
    lumaUrl: "https://luma.com/dauf89hl",
    coverImage:
      "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=1,anim=false,background=white,quality=75,width=1920,height=1920/uploads/th/aade6eae-c7cf-4a71-95dd-0298b690976f.png",
    organizer: "ContributionDAO",
    sponsors: ["Bitget Academy", "Blockchain4Youth", "Mypal Pro"],
  },
];

export const themes = ["AI", "Blockchain", "Consumer Apps"] as const;
export type Theme = (typeof themes)[number];
