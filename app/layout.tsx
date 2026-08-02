import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HOTEL_INFO } from "@/lib/data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(HOTEL_INFO.siteUrl),
  title: {
    default: "Draft Hotel Bir Billing - Boutique Stay, Café & Mountain Retreat",
    template: "%s | Draft Hotel Bir Billing",
  },
  description:
    "Boutique hotel stay just 3 minutes from Bir's paragliding landing site. Offering deluxe rooms, family suites, high-speed fiber WiFi, fresh café dining, and stunning Dhauladhar views in Himachal Pradesh.",
  keywords: [
    "Draft Hotel Bir Billing",
    "Boutique hotel Bir Himachal Pradesh",
    "Bir paragliding hotel near landing site",
    "Best hotels in Bir Billing",
    "Workation stay Bir",
    "Family suite Bir Billing",
    "Draft Cafe Bir",
    "Bir Billing accommodations",
    "Dhauladhar mountain view stay",
    "High speed WiFi stay Bir",
    "Tandem paragliding booking Bir"
  ],
  authors: [{ name: "Draft Hotel Bir Billing" }],
  creator: "Draft Hotel Bir Billing",
  publisher: "Draft Hotel Bir Billing",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Draft Hotel Bir Billing - Where Stories Begin",
    description:
      "Boutique stay minutes from Bir paragliding landing ground. Contemporary mountain comfort, high-speed WiFi, artisan café, and Dhauladhar views.",
    url: HOTEL_INFO.siteUrl,
    siteName: "Draft Hotel Bir Billing",
    images: [
      {
        url: "/images/collection/Outdoor%20View%20/20260702_081827.jpg",
        width: 1200,
        height: 630,
        alt: "Draft Hotel Bir Billing Mountain Retreat",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Draft Hotel Bir Billing - Boutique Stay in Bir",
    description:
      "Stay minutes from Bir's paragliding site. Boutique rooms, cafe, and high-speed fiber WiFi.",
    images: ["/images/collection/Outdoor%20View%20/20260702_081827.jpg"],
    creator: "@thedraftbir",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="geo.region" content="IN-HP" />
        <meta name="geo.placename" content="Bir, Himachal Pradesh" />
        <meta name="geo.position" content={`${HOTEL_INFO.geo.lat};${HOTEL_INFO.geo.lng}`} />
        <meta name="ICBM" content={`${HOTEL_INFO.geo.lat}, ${HOTEL_INFO.geo.lng}`} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#061412] text-slate-100 selection:bg-amber-500 selection:text-slate-950 flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
