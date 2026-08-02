import Link from "next/link";
import Script from "next/script";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [{ name: "Home", url: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://www.drafthospitality.com${item.url}`,
    })),
  };

  return (
    <>
      <Script
        id={`breadcrumb-jsonld-${allItems.length}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-6 bg-emerald-950/40 rounded-2xl mb-6 border border-emerald-900/50 backdrop-blur-md">
        <ol className="flex items-center space-x-2 text-xs sm:text-sm text-slate-300 flex-wrap">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            return (
              <li key={item.url} className="flex items-center space-x-2">
                {index > 0 && <span className="text-emerald-500/60">/</span>}
                {isLast ? (
                  <span className="font-bold text-amber-300 truncate max-w-[200px] sm:max-w-none" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.url}
                    className="hover:text-amber-400 transition-colors hover:underline"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
