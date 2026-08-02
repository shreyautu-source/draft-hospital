import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BLOG_POSTS } from "@/lib/data";

export const metadata = {
  title: "Bir Billing Travel Guides & Blog | Draft Hotel",
  description:
    "Read ultimate guides to paragliding in Bir Billing, top cafes, mountain workations, weekend itineraries from Delhi, and local Himachali travel tips.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogListingPage() {
  return (
    <div className="pt-28 pb-20 bg-[#061412] text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Blog & Travel Guides", url: "/blog" }]} />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-300 bg-emerald-950 px-3.5 py-1.5 rounded-full border border-emerald-800">
            Local Himalayan Insights
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-100 tracking-tight">
            Bir Travel Guides & Stories
          </h1>
          <p className="text-base sm:text-lg text-slate-300/80 leading-relaxed">
            Everything you need to know about flying, stay tips, local cafes, and planning the ultimate trip to Bir Billing.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="bg-[#0a211e]/60 rounded-3xl overflow-hidden border border-emerald-900/50 shadow-2xl hover:border-amber-500/50 transition-all duration-500 group flex flex-col h-full"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-[#040d0c]/90 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold text-amber-300 border border-emerald-800 shadow-md">
                  {post.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow space-y-3">
                <div className="flex justify-between text-xs text-amber-300/80">
                  <span>{post.publishedDate}</span>
                  <span>⏱️ {post.readTime}</span>
                </div>

                <h2 className="text-xl font-bold text-slate-100 group-hover:text-amber-300 transition-colors leading-snug">
                  {post.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-300/80 line-clamp-3 leading-relaxed flex-grow">
                  {post.excerpt}
                </p>

                <div className="pt-4 border-t border-emerald-900/40">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center space-x-2 text-xs font-bold text-amber-400 hover:text-amber-300"
                  >
                    <span>Read Full Guide</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
