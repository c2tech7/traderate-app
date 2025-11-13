import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/layout/site-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://trade-rate.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TradeRate — Rate Builders, Developers & Owners",
    template: "%s | TradeRate",
  },
  description:
    "TradeRate helps tradespeople review builders, developers, and commercial owners on payment reliability, communication, safety, and respect.",
  keywords: [
    "construction reviews",
    "builder ratings",
    "trade partner feedback",
    "contractor payments",
    "site safety insights",
  ],
  openGraph: {
    title: "TradeRate — Construction rating intelligence",
    description:
      "Discover transparent reviews from trades on how builders pay, communicate, and run safe jobsites.",
    url: siteUrl,
    siteName: "TradeRate",
    images: [
      {
        url: "/favicon.ico",
        width: 64,
        height: 64,
        alt: "TradeRate logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TradeRate",
    description: "Fair pay and respect for every trade partner.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <ThemeProvider>
          <div className="mx-auto max-w-6xl px-4 pb-16">
            <SiteHeader />
            <main className="mt-10">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
