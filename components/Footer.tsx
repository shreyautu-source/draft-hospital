import Link from "next/link";
import { HOTEL_INFO } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#040d0c] text-slate-300/90 pt-16 pb-8 border-t border-emerald-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-300 font-extrabold text-xl">
                D
              </div>
              <h3 className="text-2xl font-bold text-slate-100 tracking-tight">
                Draft Hotel
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed">
              {HOTEL_INFO.subtagline} High-speed optical fiber WiFi, boutique suite rooms, and artisan mountain dining at Draft Café.
            </p>
            <div className="pt-2 flex items-center space-x-3">
              <a
                href={HOTEL_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Draft Hotel on Instagram"
                className="w-9 h-9 rounded-full bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-800/60 flex items-center justify-center text-amber-300 transition-colors"
              >
                📷
              </a>
              <a
                href={HOTEL_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Draft Hotel on Facebook"
                className="w-9 h-9 rounded-full bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-800/60 flex items-center justify-center text-amber-300 transition-colors"
              >
                🌐
              </a>
              <a
                href={`https://wa.me/${HOTEL_INFO.whatsappPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Draft Hotel on WhatsApp"
                className="w-9 h-9 rounded-full bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-800/60 flex items-center justify-center text-amber-300 transition-colors"
              >
                💬
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-base font-bold text-amber-300 mb-4 border-b border-emerald-900/80 pb-2 uppercase tracking-wider">
              Explore Draft Hotel
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/" className="hover:text-amber-300 transition-colors flex items-center space-x-2">
                  <span>›</span> <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/experiences" className="hover:text-amber-300 transition-colors flex items-center space-x-2">
                  <span>›</span> <span>Bir Billing Experiences</span>
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-amber-300 transition-colors flex items-center space-x-2">
                  <span>›</span> <span>Photo Gallery</span>
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-amber-300 transition-colors flex items-center space-x-2">
                  <span>›</span> <span>Bir Travel Guides & Blog</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Info */}
          <div>
            <h4 className="text-base font-bold text-amber-300 mb-4 border-b border-emerald-900/80 pb-2 uppercase tracking-wider">
              Quick Info
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/about" className="hover:text-amber-300 transition-colors flex items-center space-x-2">
                  <span>›</span> <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-300 transition-colors flex items-center space-x-2">
                  <span>›</span> <span>Contact & Directions</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div>
            <h4 className="text-base font-bold text-amber-300 mb-4 border-b border-emerald-900/80 pb-2 uppercase tracking-wider">
              Location & Reservations
            </h4>
            <address className="not-italic space-y-3 text-xs sm:text-sm">
              <p className="flex items-start space-x-3 text-slate-300/90">
                <span className="text-base mt-0.5">📍</span>
                <span>Near Paragliding Landing Site, Bir, Himachal Pradesh 176077</span>
              </p>
              <p className="flex items-center space-x-3 text-slate-300/90">
                <span className="text-base">📞</span>
                <a href={`tel:${HOTEL_INFO.phone}`} className="hover:text-amber-300 transition-colors">
                  {HOTEL_INFO.phone}
                </a>
              </p>
              <p className="flex items-center space-x-3 text-slate-300/90">
                <span className="text-base">📧</span>
                <a href={`mailto:${HOTEL_INFO.email}`} className="hover:text-amber-300 transition-colors">
                  {HOTEL_INFO.email}
                </a>
              </p>
              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Bir,Himachal+Pradesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs font-semibold px-4 py-2 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-800/60 text-slate-200 transition-colors"
                >
                  <span>🗺️</span>
                  <span>View on Google Maps</span>
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-emerald-900/60 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 space-y-4 sm:space-y-0">
          <p>&copy; {new Date().getFullYear()} Draft Hotel Bir Billing. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/sitemap.xml" className="hover:text-amber-300 transition-colors">
              Sitemap
            </Link>
            <Link href="/contact" className="hover:text-amber-300 transition-colors">
              Direct Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
