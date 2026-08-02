import { MetadataRoute } from "next";
import { ROOMS_DATA, BLOG_POSTS, HOTEL_INFO } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = HOTEL_INFO.siteUrl;

  // Static routes
  const routes = [
    "",
    "/rooms",
    "/cafe",
    "/experiences",
    "/gallery",
    "/about",
    "/contact",
    "/blog",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Room detail routes
  const roomRoutes = ROOMS_DATA.map((room) => ({
    url: `${baseUrl}/rooms/${room.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Blog detail routes
  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...roomRoutes, ...blogRoutes];
}
