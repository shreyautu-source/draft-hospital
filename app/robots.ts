import { MetadataRoute } from "next";
import { HOTEL_INFO } from "@/lib/data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${HOTEL_INFO.siteUrl}/sitemap.xml`,
  };
}
