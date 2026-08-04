import type { Metadata } from "next";
import { HOTEL_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact & Room Booking | Draft Hotel Bir Billing",
  description:
    "Contact Draft Hotel Bir for room bookings, paragliding packages, and stay inquiries. Call +91 78075 85316 or WhatsApp us directly. Located 3 mins from Bir landing site.",
  keywords: [
    "Draft Hotel Bir contact number",
    "Draft Hotel Bir phone number",
    "Draft Hotel Bir booking",
    "Draft Hotel Bir address",
    "Draft Hotel location Bir",
    "Book room Draft Hotel Bir"
  ],
  alternates: {
    canonical: `${HOTEL_INFO.siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact & Room Booking | Draft Hotel Bir Billing",
    description: "Book direct with Draft Hotel Bir. Call +91 78075 85316 or WhatsApp reception.",
    url: `${HOTEL_INFO.siteUrl}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
