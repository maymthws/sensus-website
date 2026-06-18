import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "SENSUS — A curated gathering for the Web3 ecosystem",
    template: "%s · SENSUS",
  },
  description:
    "SENSUS brings builders and strategic partners together through high-signal conversations, exclusive showcases, and real connections designed to grow into long-term relationships.",
  keywords: [
    "SENSUS",
    "Web3",
    "AI",
    "Blockchain",
    "Consumer Apps",
    "Demo Day",
    "Builder Community",
  ],
  openGraph: {
    type: "website",
    title: "SENSUS — A curated gathering for the Web3 ecosystem",
    description:
      "SENSUS brings builders and strategic partners together through high-signal conversations, exclusive showcases, and real connections.",
    url: siteConfig.url,
    siteName: "SENSUS",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SENSUS" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SENSUS — A curated gathering for the Web3 ecosystem",
    description:
      "High-signal Web3 gatherings, curated showcases, real connections.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen text-sensus-50 font-body antialiased">
        <div className="relative isolate">
          <div
            aria-hidden
            className="pointer-events-none fixed inset-0 -z-10 grid-bg opacity-50"
          />
          <div
            aria-hidden
            className="pointer-events-none fixed inset-0 -z-10 bg-radial-spotlight"
          />
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
