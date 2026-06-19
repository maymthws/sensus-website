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
  },
  twitter: {
    card: "summary_large_image",
    title: "SENSUS — A curated gathering for the Web3 ecosystem",
    description: siteConfig.description,
  },
  icons: { icon: "/favicon.svg" },
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
