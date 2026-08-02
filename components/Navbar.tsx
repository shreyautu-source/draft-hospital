"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HOTEL_INFO } from "@/lib/data";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    // { href: "/rooms", label: "Rooms & Stay" },
    // { href: "/cafe", label: "Draft Café" },
    { href: "/experiences", label: "Experiences" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About Us" },
    { href: "/blog", label: "Guides & Blog" },
    { href: "/contact", label: "Contact & Book" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <nav
        aria-label="Main Navigation"
        className={`${
          scrolled || pathname !== "/"
            ? "bg-[#061412]/95 backdrop-blur-md shadow-2xl py-3 border-b border-emerald-900/40"
            : "bg-gradient-to-b from-[#040d0c]/90 via-[#040d0c]/40 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Brand Logo & Name */}
            <Link
              href="/"
              className="group flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-lg p-1"
            >
              <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-300 font-extrabold text-xl group-hover:scale-105 transition-transform shadow-md">
                D
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-extrabold text-slate-100 tracking-tight group-hover:text-amber-300 transition-colors">
                  Draft Hotel
                </span>
                <span className="text-[10px] text-amber-400 font-bold tracking-widest uppercase -mt-1">
                  Bir Billing • Himalayas
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                      isActive
                        ? "bg-emerald-900/60 text-amber-300 shadow-md border border-emerald-700/60"
                        : "text-slate-200/90 hover:text-amber-300 hover:bg-emerald-950/60"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Action Buttons (Call / WhatsApp) */}
            <div className="hidden sm:flex items-center space-x-3">
              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="hidden md:inline-flex items-center space-x-2 text-xs font-semibold px-4 py-2 rounded-full bg-emerald-950/70 hover:bg-emerald-900 text-slate-200 border border-emerald-800/60 transition-colors shadow-sm"
              >
                <span>📞</span>
                <span>Call Desk</span>
              </a>
              <a
                href={`https://wa.me/${HOTEL_INFO.whatsappPhone}?text=${encodeURIComponent(
                  "Hello Draft Hotel Bir Billing, I would like to inquire about room availability and booking."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs sm:text-sm font-extrabold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 transition-all transform hover:scale-105 shadow-lg"
              >
                <span>💬</span>
                <span>Book Now</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="lg:hidden text-slate-100 p-2 rounded-lg hover:bg-emerald-900/50 focus:outline-none focus:ring-2 focus:ring-amber-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Drawer Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-emerald-900/60 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                        isActive
                          ? "bg-emerald-900/80 text-amber-300 font-bold"
                          : "text-slate-200 hover:bg-emerald-950/60"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
              <div className="mt-4 pt-4 border-t border-emerald-900/80 flex flex-col space-y-2 px-2">
                <a
                  href={`tel:${HOTEL_INFO.phone}`}
                  className="flex items-center justify-center space-x-2 py-3 rounded-lg bg-emerald-950/80 text-slate-100 font-semibold text-sm border border-emerald-800/60"
                >
                  <span>📞</span>
                  <span>Direct Call: {HOTEL_INFO.phone}</span>
                </a>
                <a
                  href={`https://wa.me/${HOTEL_INFO.whatsappPhone}?text=${encodeURIComponent(
                    "Hello Draft Hotel Bir Billing, I would like to inquire about room availability and booking."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 py-3 rounded-lg bg-amber-500 text-slate-950 font-extrabold text-sm shadow-md"
                >
                  <span>💬</span>
                  <span>Book via WhatsApp</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
