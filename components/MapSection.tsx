"use client";

import { HOTEL_INFO } from "@/lib/data";

interface MapSectionProps {
  showTitle?: boolean;
  className?: string;
}

export default function MapSection({ showTitle = true, className = "" }: MapSectionProps) {
  return (
    <section className={`w-full ${className}`}>
      {showTitle && (
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-300 bg-emerald-950 px-3.5 py-1.5 rounded-full border border-emerald-800">
            Interactive Location Map
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Find Draft Hotel Bir Billing
          </h2>
          <p className="text-sm sm:text-base text-slate-300/80 leading-relaxed">
            Located just 3 minutes walk from Bir&apos;s world-famous paragliding landing site. Tap below to navigate directly using Google Maps.
          </p>
        </div>
      )}

      <div className="bg-[#0a211e]/70 rounded-3xl border border-emerald-900/60 overflow-hidden shadow-2xl p-4 sm:p-6 space-y-6">
        {/* Map Header & Direct CTA Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[#040d0c]/80 p-4 sm:p-5 rounded-2xl border border-emerald-800/50">
          <div className="flex items-center space-x-3.5">
            <div className="w-11 h-11 rounded-2xl bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-300 text-xl font-bold shrink-0">
              📍
            </div>
            <div>
              <h3 className="font-extrabold text-slate-100 text-base sm:text-lg">
                Draft Hotel Bir Billing
              </h3>
              <p className="text-xs text-amber-300/90 font-medium">
                At landing Site, Near Paragliding Landing Side, Bir, Himachal Pradesh 176077
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
            <a
              href={HOTEL_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs tracking-wide shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>📍</span>
              <span>Open Google Maps</span>
            </a>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                "Draft Hotel Bir Billing At landing Site, Near Bir Paragliding Landing Side, Road, Colony, Suja, Bir, Himachal Pradesh 176077"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-5 py-3 rounded-xl bg-emerald-950 hover:bg-emerald-900 text-slate-100 font-bold text-xs border border-emerald-700/60 transition-colors flex items-center justify-center space-x-2"
            >
              <span>🧭</span>
              <span>Get Directions</span>
            </a>
          </div>
        </div>

        {/* Embedded Google Map iframe */}
        <div className="relative w-full h-[380px] sm:h-[480px] rounded-2xl overflow-hidden border border-emerald-900/60 shadow-inner bg-[#040d0c]">
          <iframe
            title="Draft Hotel Bir Billing Google Map Location"
            src={HOTEL_INFO.googleMapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, filter: "contrast(1.05) brightness(0.95)" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full rounded-2xl"
          ></iframe>
        </div>

        {/* Location Highlights Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-200">
          <div className="bg-[#040d0c]/60 p-4 rounded-xl border border-emerald-800/40 space-y-1.5">
            <div className="flex items-center space-x-2 text-amber-300 font-bold text-sm">
              <span>🪂</span>
              <span>3 Mins to Landing Ground</span>
            </div>
            <p className="text-slate-300/80 leading-relaxed">
              Step outside and walk straight to Bir Paragliding landing site & evening sunset point.
            </p>
          </div>

          <div className="bg-[#040d0c]/60 p-4 rounded-xl border border-emerald-800/40 space-y-1.5">
            <div className="flex items-center space-x-2 text-amber-300 font-bold text-sm">
              <span>🚌</span>
              <span>Easy Transport Access</span>
            </div>
            <p className="text-slate-300/80 leading-relaxed">
              Just 5 mins from Bir Bus Stop / Chowk with direct taxi pickup & drop facilities.
            </p>
          </div>

          <div className="bg-[#040d0c]/60 p-4 rounded-xl border border-emerald-800/40 space-y-1.5">
            <div className="flex items-center space-x-2 text-amber-300 font-bold text-sm">
              <span>🏔️</span>
              <span>Dhauladhar Mountain Vistas</span>
            </div>
            <p className="text-slate-300/80 leading-relaxed">
              Uninterrupted 360° views of snow-dusted Dhauladhar ranges right from the property.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
