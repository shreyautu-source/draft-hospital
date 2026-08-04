import Breadcrumbs from "@/components/Breadcrumbs";
import RoomCard from "@/components/RoomCard";
import { ROOMS_DATA, HOTEL_INFO } from "@/lib/data";

export const metadata = {
  title: "Accommodations & Suite Rooms | Draft Hotel Bir",
  description:
    "Explore luxury suite rooms, deluxe double rooms, and family villa suites at Draft Hotel Bir Billing. High-speed fiber WiFi, 24/7 hot showers, mountain balconies, 3 mins from landing ground.",
  keywords: [
    "Draft Hotel Bir rooms",
    "Draft Hotel room rates",
    "Draft Hotel Bir family suite",
    "Best boutique hotel rooms Bir Billing",
    "Draft Hotel accommodation"
  ],
  alternates: {
    canonical: `${HOTEL_INFO.siteUrl}/rooms`,
  },
};

export default function RoomsPage() {
  return (
    <div className="pt-28 pb-20 bg-[#061412] text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Accommodations", url: "/rooms" }]} />

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-300 bg-emerald-950 px-3.5 py-1.5 rounded-full border border-emerald-800">
            Thoughtful Hospitality
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-100 tracking-tight">
            Rooms & Suite Stays
          </h1>
          <p className="text-base sm:text-lg text-slate-300/80 leading-relaxed">
            Whether you&apos;re visiting Bir for thrilling paragliding flights, a quiet workation, or a family vacation, our rooms are designed with natural warmth, modern comforts, and peaceful mountain views.
          </p>
        </div>

        {/* Room Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {ROOMS_DATA.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        {/* Standard Inclusions & Policies */}
        <div className="bg-gradient-to-b from-[#0a211e]/70 to-[#040d0c] rounded-3xl p-8 sm:p-12 border border-emerald-900/50 space-y-8 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
              All Stays Include
            </h2>
            <p className="text-sm text-slate-300/80">
              Every room at Draft Hotel Bir Billing comes standard with our premium guest amenities:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-slate-200">
            <div className="bg-[#040d0c]/70 p-5 rounded-2xl border border-emerald-800/40 flex items-start space-x-4">
              <span className="text-2xl">⚡</span>
              <div>
                <h3 className="font-bold text-slate-100">100+ Mbps Fiber WiFi</h3>
                <p className="text-xs text-amber-300/80 mt-1">Dual-band high speed connection for video calls and streaming.</p>
              </div>
            </div>
            <div className="bg-[#040d0c]/70 p-5 rounded-2xl border border-emerald-800/40 flex items-start space-x-4">
              <span className="text-2xl">🚿</span>
              <div>
                <h3 className="font-bold text-slate-100">24/7 Hot Water Shower</h3>
                <p className="text-xs text-amber-300/80 mt-1">Instant hot water geysers in all private bathrooms.</p>
              </div>
            </div>
            <div className="bg-[#040d0c]/70 p-5 rounded-2xl border border-emerald-800/40 flex items-start space-x-4">
              <span className="text-2xl">☕</span>
              <div>
                <h3 className="font-bold text-slate-100">In-Room Tea & Coffee</h3>
                <p className="text-xs text-amber-300/80 mt-1">Electric kettle setup with complimentary tea bags & coffee.</p>
              </div>
            </div>
            <div className="bg-[#040d0c]/70 p-5 rounded-2xl border border-emerald-800/40 flex items-start space-x-4">
              <span className="text-2xl">🍽️</span>
              <div>
                <h3 className="font-bold text-slate-100">Draft Café Room Service</h3>
                <p className="text-xs text-amber-300/80 mt-1">Order fresh breakfast, coffee, and snacks right to your room.</p>
              </div>
            </div>
            <div className="bg-[#040d0c]/70 p-5 rounded-2xl border border-emerald-800/40 flex items-start space-x-4">
              <span className="text-2xl">🧹</span>
              <div>
                <h3 className="font-bold text-slate-100">Daily Housekeeping</h3>
                <p className="text-xs text-amber-300/80 mt-1">Pristine linen changes and room refresh on request.</p>
              </div>
            </div>
            <div className="bg-[#040d0c]/70 p-5 rounded-2xl border border-emerald-800/40 flex items-start space-x-4">
              <span className="text-2xl">🪂</span>
              <div>
                <h3 className="font-bold text-slate-100">Paragliding Assistance</h3>
                <p className="text-xs text-amber-300/80 mt-1">Certified pilot booking and takeoff pickup directly from hotel.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
