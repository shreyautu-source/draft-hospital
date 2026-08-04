import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import { HOTEL_INFO } from "@/lib/data";

export const metadata = {
  title: "About Draft Hotel Bir | Mountain Hospitality & Story",
  description:
    "Learn about Draft Hotel Bir - a boutique retreat in Bir Billing created for travelers seeking thoughtful design, peaceful surroundings, and genuine Himachali hospitality 3 minutes from the paragliding landing site.",
  alternates: {
    canonical: `${HOTEL_INFO.siteUrl}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 bg-[#061412] text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "About Us", url: "/about" }]} />

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-300 bg-emerald-950 px-3.5 py-1.5 rounded-full border border-emerald-800">
            Our Story & Values
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-100 tracking-tight">
            About Draft Hotel Bir
          </h1>
          <p className="text-base sm:text-lg text-slate-300/80 leading-relaxed">
            Where stories begin. A boutique stay in Bir Billing designed for travelers who value aesthetic simplicity, genuine hospitality, and unhurried mountain moments.
          </p>
        </div>

        {/* Content & Image Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-slate-100">
              Thoughtfully Designed Mountain Retreat
            </h2>
            <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed">
              Draft Hotel Bir Billing was born out of a desire to create a sanctuary in the Himalayas that balances modern comfort with natural alpine beauty. Located just a short 3-minute stroll from Bir&apos;s world-renowned paragliding landing site, our hotel offers front-row views of paragliders soaring against sunset skies.
            </p>
            <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed">
              Whether you are landing after a thrilling tandem flight from Billing, working remotely over high-speed optical fiber WiFi, or enjoying freshly brewed artisan coffee at Draft Café, we ensure every detail of your stay feels seamless and welcoming.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-[#040d0c]/80 border border-emerald-900/50 space-y-1 shadow-lg">
                <span className="text-amber-400 font-extrabold text-lg block">3 Mins</span>
                <span className="text-slate-300">Walk to Paragliding Landing Ground</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#040d0c]/80 border border-emerald-900/50 space-y-1 shadow-lg">
                <span className="text-amber-400 font-extrabold text-lg block">100+ Mbps</span>
                <span className="text-slate-300">High-Speed Optical Fiber WiFi</span>
              </div>
            </div>
          </div>

          <div className="relative h-96 sm:h-[450px] rounded-3xl overflow-hidden border border-emerald-800/60 shadow-2xl">
            <Image
              src="/images/collection/Outdoor%20View%20/20260704_192652.jpg"
              alt="Draft Hotel Bir Billing Courtyard and Exterior"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Pillars of Draft Hotel */}
        <div className="bg-gradient-to-b from-[#0a211e]/80 to-[#040d0c] rounded-3xl p-8 sm:p-12 border border-emerald-900/50 space-y-8 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-slate-100">Why Stay With Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#040d0c]/70 p-6 rounded-2xl border border-emerald-800/40 space-y-3">
              <span className="text-3xl">🌿</span>
              <h3 className="text-xl font-bold text-slate-100">Peaceful Mountain Vibe</h3>
              <p className="text-xs text-slate-300/80 leading-relaxed">
                Tucked away from noisy traffic while remaining right in the heart of Bir&apos;s cafe and landing ground precinct.
              </p>
            </div>
            <div className="bg-[#040d0c]/70 p-6 rounded-2xl border border-emerald-800/40 space-y-3">
              <span className="text-3xl">☕</span>
              <h3 className="text-xl font-bold text-slate-100">In-House Draft Café</h3>
              <p className="text-xs text-slate-300/80 leading-relaxed">
                No need to travel for great food. Enjoy artisan coffee, wood-fired pizzas, and fresh breakfast right on our deck.
              </p>
            </div>
            <div className="bg-[#040d0c]/70 p-6 rounded-2xl border border-emerald-800/40 space-y-3">
              <span className="text-3xl">🤝</span>
              <h3 className="text-xl font-bold text-slate-100">Local Himalayan Warmth</h3>
              <p className="text-xs text-slate-300/80 leading-relaxed">
                Our local team helps you plan paragliding flights, trekking routes, monastery visits, and seamless taxi transfers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
