import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BLOG_POSTS, HOTEL_INFO } from "@/lib/data";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | Draft Hotel Bir Billing Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedDate,
      authors: [post.author],
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogPostDetailPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${HOTEL_INFO.siteUrl}${post.image}`,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: HOTEL_INFO.name,
      logo: {
        "@type": "ImageObject",
        url: `${HOTEL_INFO.siteUrl}/brand.jpg`,
      },
    },
    datePublished: post.publishedDate,
  };

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug);

  return (
    <div className="pt-28 pb-20 bg-[#061412] text-slate-100">
      <Script
        id={`blog-${post.slug}-jsonld`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Guides & Blog", url: "/blog" },
            { name: post.title, url: `/blog/${post.slug}` },
          ]}
        />

        {/* Post Header */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center space-x-3 text-xs text-amber-300">
            <span className="bg-emerald-950 px-3 py-1 rounded-full font-bold border border-emerald-800">
              {post.category}
            </span>
            <span>Published: {post.publishedDate}</span>
            <span>• {post.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100 leading-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300/90 italic border-l-2 border-amber-400 pl-4">
            {post.excerpt}
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative h-80 sm:h-[450px] w-full rounded-3xl overflow-hidden mb-12 border border-emerald-800/60 shadow-2xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Post Content */}
        <div className="prose prose-invert prose-amber max-w-none space-y-6 text-slate-200/90 leading-relaxed text-base sm:text-lg bg-[#0a211e]/60 p-8 sm:p-12 rounded-3xl border border-emerald-900/50 mb-16 shadow-xl">
          {post.content.split("\n\n").map((paragraph, idx) => {
            const trimmed = paragraph.trim();
            if (trimmed.startsWith("### ")) {
              return (
                <h3 key={idx} className="text-2xl font-extrabold text-slate-100 mt-6 mb-2">
                  {trimmed.replace("### ", "")}
                </h3>
              );
            }
            if (trimmed.startsWith("- ")) {
              const bulletItems = trimmed.split("\n").map((item) => item.replace("- ", ""));
              return (
                <ul key={idx} className="space-y-2 list-disc list-inside text-slate-200">
                  {bulletItems.map((b, bIdx) => (
                    <li key={bIdx}>{b}</li>
                  ))}
                </ul>
              );
            }
            return <p key={idx}>{trimmed}</p>;
          })}
        </div>

        {/* CTA Box */}
        <div className="bg-gradient-to-r from-emerald-950 via-[#0a211e] to-emerald-950 p-8 rounded-3xl border border-emerald-800/60 text-center space-y-4 mb-16 shadow-xl">
          <h2 className="text-2xl font-bold text-slate-100">Planning Your Bir Trip?</h2>
          <p className="text-sm text-slate-300/90 max-w-xl mx-auto">
            Stay at Draft Hotel Bir Billing—just 3 minutes from the paragliding landing site with high-speed fiber WiFi and comfortable rooms.
          </p>
          <div className="pt-2 flex justify-center space-x-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm shadow-md"
            >
              Book Stay
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-[#040d0c] hover:bg-emerald-950 text-slate-100 font-semibold text-sm border border-emerald-700/60"
            >
              Contact Reception
            </Link>
          </div>
        </div>

        {/* Related Posts */}
        {otherPosts.length > 0 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-100">More Travel Guides</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherPosts.map((op) => (
                <Link
                  key={op.slug}
                  href={`/blog/${op.slug}`}
                  className="bg-[#0a211e]/60 p-5 rounded-2xl border border-emerald-900/50 hover:border-amber-500/50 transition-all flex items-center space-x-4 group shadow-lg"
                >
                  <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                    <Image src={op.image} alt={op.title} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-100 group-hover:text-amber-300 text-sm line-clamp-2">
                      {op.title}
                    </h4>
                    <span className="text-xs text-amber-300/80 mt-1 block">⏱️ {op.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
