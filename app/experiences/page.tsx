import Image from "next/image";
import Script from "next/script";
import Breadcrumbs from "@/components/Breadcrumbs";
import ExperienceCard from "@/components/ExperienceCard";
import { EXPERIENCES_DATA, HOTEL_INFO } from "@/lib/data";

export const metadata = {
  title: "Bir Paragliding & Experiences | Draft Hotel Bir Billing",
  description:
    "Discover tandem paragliding at Asia's #1 site in Bir Billing, Tibetan monastery tours, waterfall hikes, and mountain workations. Stay 3 minutes from the landing ground at Draft Hotel Bir.",
  keywords: [
    "Draft Hotel Bir paragliding",
    "Tandem paragliding Bir Billing",
    "Draft Hotel Bir activities",
    "Bir paragliding landing ground hotel",
    "Bir Billing guide"
  ],
  alternates: {
    canonical: `${HOTEL_INFO.siteUrl}/experiences`,
  },
};

export default function ExperiencesPage() {
  const touristSchema = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: "Bir Billing Paragliding & Mountain Experiences",
    description: "World famous paragliding takeoff at 2,400m altitude in Billing and landing at Bir, paired with Tibetan monastery culture and nature trails.",
    location: {
      "@type": "Place",
      name: "Bir Billing",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bir",
        addressRegion: "Himachal Pradesh",
        addressCountry: "IN",
      },
    },
  };

  return (
    <div className="pt-28 pb-20 bg-[#061412] text-slate-100">
      <Script
        id="tourist-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Experiences", url: "/experiences" }]} />

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-300 bg-emerald-950 px-3.5 py-1.5 rounded-full border border-emerald-800">
            Adventure & Peace
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-100 tracking-tight">
            Bir Billing Experiences
          </h1>
          <p className="text-base sm:text-lg text-slate-300/80 leading-relaxed">
            From soaring 2,400 meters high over Himalayan ranges to sipping warm butter tea at peaceful Buddhist monasteries, Bir offers a rare blend of high adventure and deep calm.
          </p>
        </div>

        {/* Paragliding Deep Dive Card */}
        <div className="bg-gradient-to-b from-[#0a211e]/90 to-[#040d0c] rounded-3xl p-8 sm:p-12 border border-emerald-800/60 mb-20 space-y-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-300 bg-emerald-950 px-3.5 py-1.5 rounded-full border border-emerald-800">
                #1 Adventure Activity
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
                Tandem Paragliding in Bir Billing
              </h2>
              <p className="text-base text-slate-300/90 leading-relaxed">
                Billing is Asia&apos;s highest paragliding takeoff point (2,400m altitude). Fly with licensed tandem pilots while floating high over pine forests, terraced tea gardens, and snow-clad Himalayan ridges before landing just 3 minutes from Draft Hotel.
              </p>
              <div className="grid grid-cols-2 gap-4 text-xs text-slate-200">
                <div className="p-3 bg-[#040d0c]/80 rounded-xl border border-emerald-900/50">
                  <span className="text-amber-400 font-bold block text-sm">2,400m Altitude</span>
                  <span>Takeoff height at Billing</span>
                </div>
                <div className="p-3 bg-[#040d0c]/80 rounded-xl border border-emerald-900/50">
                  <span className="text-amber-400 font-bold block text-sm">15-30 Mins</span>
                  <span>Average flight duration</span>
                </div>
                <div className="p-3 bg-[#040d0c]/80 rounded-xl border border-emerald-900/50">
                  <span className="text-amber-400 font-bold block text-sm">Certified Pilots</span>
                  <span>Experienced tandem experts</span>
                </div>
                <div className="p-3 bg-[#040d0c]/80 rounded-xl border border-emerald-900/50">
                  <span className="text-amber-400 font-bold block text-sm">Hotel Pickup</span>
                  <span>Direct ride to Billing takeoff</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${HOTEL_INFO.whatsappPhone}?text=${encodeURIComponent(
                    "Hello Draft Hotel, I would like to inquire about Paragliding flight bookings."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm shadow-lg transition-transform transform hover:scale-105"
                >
                  <span>🪂 Book Paragliding Flight</span>
                </a>
              </div>
            </div>

            <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden border border-emerald-800/40 shadow-xl">
              <Image
                src="/images/collection/Paragliding%20and%20Sunset%20/20260608_190909.jpg"
                alt="Paraglider soaring over Bir Billing"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* All Experiences Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
              Explore More Activities in Bir
            </h2>
            <p className="text-sm text-slate-300/80">
              Craft your stay with sunset views, spiritual walks, and pine forest trails.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EXPERIENCES_DATA.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
