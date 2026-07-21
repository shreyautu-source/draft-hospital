import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "Draft Bir - Boutique Stay | Stay. Slow Down. Feel Bir.",
  description: "A boutique stay just minutes from Bir's paragliding landing site, where contemporary comfort meets mountain calm. Wake up to the Dhauladhar views, unwind in thoughtfully designed rooms, and experience Bir at your own pace. Offering deluxe rooms, cozy dorms, fresh café food, and curated experiences for travelers seeking meaningful mountain escapes.",
  keywords: "Draft Bir, boutique hotel Bir, Himachal Pradesh accommodation, paragliding Bir, mountain stay Bir, Bir Billing hotels, workation Bir, café Bir, Dhauladhar views, budget dorms Bir, deluxe rooms Bir, nature walks Bir, sunset views Bir, local culture Himachal, weekend getaway Bir, adventure sports Bir, remote work friendly hotel, mountain retreat India, Bir valley stay, thoughtful hospitality",
  authors: [{ name: "Draft Bir" }],
  creator: "Draft Bir",
  publisher: "Draft Bir",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.drafthospitality.com"),
  alternates: {
    canonical: "/",
  },
  other: {
    'og:image': 'https://www.drafthospitality.com/brand.jpg',
    'og:image:secure_url': 'https://www.drafthospitality.com/brand.jpg',
    'og:image:type': 'image/jpeg',
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:locale': 'en_IN',
  },
  openGraph: {
    title: "Draft Bir - Boutique Stay | Stay. Slow Down. Feel Bir.",
    description: "A boutique stay just minutes from Bir's paragliding landing site, where contemporary comfort meets mountain calm. Wake up to the Dhauladhar views, unwind in thoughtfully designed rooms, and experience Bir at your own pace.",
    url: "https://www.drafthospitality.com",
    siteName: "Draft Bir",
    images: [
      {
        url: "https://www.drafthospitality.com/brand.jpg",
        width: 1200,
        height: 630,
        alt: "Draft Bir - Boutique Stay in Himachal Pradesh",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Draft Bir - Stay. Slow Down. Feel Bir.",
    description: "A boutique stay minutes from Bir's paragliding site. Contemporary comfort meets mountain calm. Deluxe rooms, cozy dorms, café, and curated experiences.",
    images: ["https://www.drafthospitality.com/brand.jpg"],
    creator: "@thedraftbir",
    site: "@thedraftbir",
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
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://www.drafthospitality.com" />
        <meta name="geo.region" content="IN-HP" />
        <meta name="geo.placename" content="Bir, Himachal Pradesh" />
        <meta name="geo.position" content="32.0419;76.7243" />
        <meta name="ICBM" content="32.0419, 76.7243" />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hotel",
              "name": "Draft Bir",
              "description": "A boutique stay just minutes from Bir's paragliding landing site. Contemporary comfort meets mountain calm with thoughtfully designed rooms, café, and curated experiences.",
              "url": "https://www.drafthospitality.com",
              "logo": "https://www.drafthospitality.com/brand.jpg",
              "image": "https://www.drafthospitality.com/brand.jpg",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Near Paragliding Landing Site",
                "addressLocality": "Bir",
                "addressRegion": "Himachal Pradesh",
                "postalCode": "176077",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 32.0419,
                "longitude": 76.7243
              },
              "amenityFeature": [
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Mountain Views",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Paragliding",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Workation-Friendly",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Deluxe Rooms",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Cozy Dorms",
                  "value": true
                }
              ],
              "priceRange": "₹₹",
              "sameAs": [
                "https://www.facebook.com/drafthouse.bir",
                "https://www.instagram.com/thedraftbir"
              ],
              "potentialAction": {
                "@type": "ReserveAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://www.drafthospitality.com"
                },
                "result": {
                  "@type": "LodgingReservation",
                  "name": "Book Your Stay"
                }
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
