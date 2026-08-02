import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import RoomCard from "@/components/RoomCard";
import ExperienceCard from "@/components/ExperienceCard";
import FAQSection from "@/components/FAQSection";
import Carousel from "@/components/Carousel";
import { ROOMS_DATA, EXPERIENCES_DATA, GALLERY_COLLECTION, TESTIMONIALS, HOTEL_INFO } from "@/lib/data";

export default function Home() {
  const hotelSchema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: HOTEL_INFO.name,
    description: HOTEL_INFO.subtagline,
    url: HOTEL_INFO.siteUrl,
    telephone: HOTEL_INFO.phone,
    email: HOTEL_INFO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Near Paragliding Landing Site",
      addressLocality: "Bir",
      addressRegion: "Himachal Pradesh",
      postalCode: "176077",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: HOTEL_INFO.geo.lat,
      longitude: HOTEL_INFO.geo.lng,
    },
    priceRange: "₹₹",
    image: `${HOTEL_INFO.siteUrl}/images/collection/Outdoor%20View%20/20260702_081827.jpg`,
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Paragliding Landing Ground Access", value: true },
      { "@type": "LocationFeatureSpecification", name: "High-Speed Fiber WiFi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Draft Café & Dining", value: true },
      { "@type": "LocationFeatureSpecification", name: "Mountain Balconies", value: true }
    ],
    starRating: {
      "@type": "Rating",
      ratingValue: "4.9"
    }
  };

  return (
    <>
      <Script
        id="hotel-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/collection/Outdoor%20View%20/20260702_081827.jpg"
            alt="Draft Hotel Bir Billing Mountain View and Pine Forest"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061412]/95 via-[#061412]/85 to-[#061412]/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#061412] via-transparent to-[#061412]/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 backdrop-blur-md shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs sm:text-sm font-semibold text-amber-300 uppercase tracking-wider">
                3 Mins from Paragliding Landing Ground
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-100 tracking-tight leading-[1.1]">
              Where Stories Begin <span className="text-amber-400">In Bir Billing.</span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300/90 leading-relaxed font-normal max-w-2xl">
              A boutique mountain retreat nestled under the Dhauladhar ranges. Experience high-speed workations, cozy suite rooms, artisan coffee at Draft Café, and tandem paragliding at your doorstep.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-extrabold text-base transition-all transform hover:scale-105 shadow-xl text-center"
              >
                Book Your Stay
              </Link>
              <a
                href={`https://wa.me/${HOTEL_INFO.whatsappPhone}?text=${encodeURIComponent(
                  "Hello Draft Hotel Bir Billing, I would like to inquire about room availability and booking."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-emerald-950/80 hover:bg-emerald-900 text-slate-100 font-semibold text-base border border-emerald-700/60 backdrop-blur-sm transition-all text-center flex items-center justify-center space-x-2"
              >
                <span>💬 WhatsApp Inquiry</span>
              </a>
            </div>

            {/* Quick Feature Badges */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-emerald-900/60 text-xs text-slate-300">
              <div className="flex items-center space-x-2">
                <span className="text-lg">🪂</span>
                <span>Near Landing Site</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-lg">⚡</span>
                <span>100+ Mbps Fiber WiFi</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-lg">☕</span>
                <span>In-House Draft Café</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-lg">⭐</span>
                <span>4.9 Guest Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodations Highlight Section */}
      <section className="py-20 bg-gradient-to-b from-[#061412] to-[#040d0c] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-300 bg-[#0a211e] px-3.5 py-1.5 rounded-full border border-emerald-800/80">
                Crafted For Comfort
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 mt-3">
                Rooms & Suite Stays
              </h2>
            </div>
            <Link
              href="/contact"
              className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors"
            >
              <span>Inquire & Reserve</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ROOMS_DATA.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>

      {/* Draft Café Feature Section */}
      <section className="py-20 bg-[#040d0c] relative overflow-hidden border-y border-emerald-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Cafe Details */}
            <div className="space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-300 bg-emerald-950 px-3.5 py-1.5 rounded-full border border-emerald-800">
                Fresh Local Flavors
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100">
                Draft Café & Mountain Dining
              </h2>
              <p className="text-base text-slate-300/80 leading-relaxed">
                Whether you need a rich espresso before your paragliding flight or a slow Himachali dinner under the stars, Draft Café serves wholesome food prepared with fresh mountain ingredients.
              </p>
              <ul className="space-y-3 text-sm text-slate-200">
                <li className="flex items-center space-x-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-900 flex items-center justify-center text-amber-300 text-xs font-bold">✓</span>
                  <span>Artisan Cappuccinos, Cold Brews & Herbal Himachali Teas</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-900 flex items-center justify-center text-amber-300 text-xs font-bold">✓</span>
                  <span>Wood-fired style pizzas, gourmet burgers & healthy breakfast bowls</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-900 flex items-center justify-center text-amber-300 text-xs font-bold">✓</span>
                  <span>Outdoor deck seating with unblocked views of paragliders landing</span>
                </li>
              </ul>
              <div className="pt-4 flex items-center space-x-4">
                <Link
                  href="/cafe"
                  className="px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm transition-all shadow-lg"
                >
                  Explore Cafe Menu
                </Link>
              </div>
            </div>

            {/* Cafe Image Showcase */}
            <div className="grid grid-cols-2 gap-4 relative">
              <div className="relative h-64 rounded-3xl overflow-hidden border border-emerald-800/40 shadow-xl">
                <Image
                  src="/images/collection/Outdoor%20View%20/20260702_082525.jpg"
                  alt="Draft Cafe Deck View"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-64 rounded-3xl overflow-hidden border border-emerald-800/40 mt-8 shadow-xl">
                <Image
                  src="/images/collection/Outdoor%20View%20/20260704_192652.jpg"
                  alt="Draft Cafe Outdoor Evening Ambience"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bir Billing Experiences */}
      <section className="py-20 bg-gradient-to-b from-[#040d0c] to-[#061412] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-300 bg-[#0a211e] px-3.5 py-1.5 rounded-full border border-emerald-800">
              Unforgettable Moments
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100">
              Curated Bir Experiences
            </h2>
            <p className="text-base text-slate-300/80">
              From flying 2,400 meters high to quiet monastery walks, discover what makes Bir Billing one of the world&apos;s most special mountain destinations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EXPERIENCES_DATA.slice(0, 3).map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/experiences"
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-emerald-950 hover:bg-emerald-900 text-slate-100 font-semibold text-sm border border-emerald-700/60 transition-colors"
            >
              <span>Explore All Experiences & Paragliding Info</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Photo Gallery Carousel Section */}
      <section className="py-20 bg-[#061412] border-t border-emerald-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-300 bg-emerald-950 px-3.5 py-1.5 rounded-full border border-emerald-800">
                Visual Journey
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 mt-3">
                Life at Draft Hotel
              </h2>
            </div>
            <Link
              href="/gallery"
              className="mt-4 md:mt-0 text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors"
            >
              View Full Gallery ({GALLERY_COLLECTION.length}+ Photos) →
            </Link>
          </div>

          <div className="mb-6">
            <Carousel slides={GALLERY_COLLECTION.slice(0, 10)} autoPlayInterval={4000} showThumbnails={true} />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-[#061412] to-[#0a211e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-300 bg-[#040d0c] px-3.5 py-1.5 rounded-full border border-emerald-800">
              Guest Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 mt-3">
              Loved By Travelers & Nomads
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-[#040d0c]/70 p-8 rounded-3xl border border-emerald-900/50 space-y-4 flex flex-col justify-between shadow-xl"
              >
                <div className="space-y-3">
                  <div className="flex text-amber-400 text-sm">
                    {"★".repeat(t.rating)}
                  </div>
                  <p className="text-sm text-slate-300/90 italic leading-relaxed">
                    &quot;{t.quote}&quot;
                  </p>
                </div>
                <div className="pt-4 border-t border-emerald-900/40 flex justify-between items-center text-xs">
                  <div>
                    <p className="font-bold text-slate-100">{t.author}</p>
                    <p className="text-amber-300/80">{t.location}</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-950 text-slate-200 text-[10px]">
                    {t.roomStayed}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Booking CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-emerald-950 via-[#0a211e] to-emerald-950 relative border-t border-emerald-800/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100">
            Ready for Your Mountain Escape?
          </h2>
          <p className="text-base sm:text-lg text-slate-300/90 max-w-2xl mx-auto">
            Book directly with us for guaranteed lowest rates, flexible check-ins, and complimentary paragliding guidance.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <a
              href={`https://wa.me/${HOTEL_INFO.whatsappPhone}?text=${encodeURIComponent(
                "Hello Draft Hotel Bir Billing, I would like to book a room. Please share pricing and availability."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-extrabold text-base shadow-xl transition-transform transform hover:scale-105"
            >
              💬 WhatsApp Instant Booking
            </a>
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#040d0c] hover:bg-emerald-950 text-slate-100 font-semibold text-base border border-emerald-700/60 transition-colors"
            >
              📞 Call Reception: {HOTEL_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
