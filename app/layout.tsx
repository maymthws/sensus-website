import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "SENSUS — A curated gathering for the Web3 ecosystem",
    template: "%s · SENSUS",
  },
  description: siteConfig.description,
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
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "SENSUS",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SENSUS" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SENSUS — A curated gathering for the Web3 ecosystem",
    description: siteConfig.description,
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/logo-s.png", type: "image/png" },
    ],
    apple: [
      { url: "/favicon-180.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen font-body antialiased">
        <div className="aurora-bg" aria-hidden="true" />
        <div className="relative">
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
          <RevealOnScroll />
        </div>
      </body>
    </html>
  );
}
