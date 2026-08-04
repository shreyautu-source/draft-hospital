import type { Metadata } from "next";
import { HOTEL_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Photo Gallery & Virtual Tour | Draft Hotel Bir",
  description:
    "Explore photos of Draft Hotel Bir: boutique suite rooms, family villas, mountain view deck, Draft Cafe, and sunset paragliding views in Bir Billing.",
  keywords: [
    "Draft Hotel Bir photos",
    "Draft Hotel Bir gallery",
    "Draft Hotel Bir rooms pictures",
    "Draft Cafe Bir photos",
    "Draft Hotel Bir views"
  ],
  alternates: {
    canonical: `${HOTEL_INFO.siteUrl}/gallery`,
  },
  openGraph: {
    title: "Photo Gallery | Draft Hotel Bir Billing",
    description: "Visual tour of rooms, mountain patio, and paragliding landing site views at Draft Hotel Bir.",
    url: `${HOTEL_INFO.siteUrl}/gallery`,
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
