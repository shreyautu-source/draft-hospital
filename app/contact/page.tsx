"use client";

import { useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import MapSection from "@/components/MapSection";
import { HOTEL_INFO } from "@/lib/data";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    checkIn: "",
    checkOut: "",
    roomType: "Boutique Suite Room",
    guests: "2 Adults",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Draft Hotel! I'd like to book a stay:\n\n` +
    `👤 Name: ${formData.name}\n` +
    `📞 Phone: ${formData.phone}\n` +
    `📅 Check-in: ${formData.checkIn || "Flexible"}\n` +
    `📅 Check-out: ${formData.checkOut || "Flexible"}\n` +
    `🛏️ Room: ${formData.roomType}\n` +
    `👥 Guests: ${formData.guests}\n` +
    `💬 Note: ${formData.message || "None"}`
  );

  return (
    <div className="pt-28 pb-20 bg-[#061412] text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Contact & Book", url: "/contact" }]} />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-300 bg-emerald-950 px-3.5 py-1.5 rounded-full border border-emerald-800">
            Direct Reservations
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-100 tracking-tight">
            Contact & Reserve
          </h1>
          <p className="text-base sm:text-lg text-slate-300/80 leading-relaxed">
            Have questions about room availability, paragliding packages, or directions to Bir? Reach out directly to our team.
          </p>
        </div>

        {/* Form and Contact Details Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Booking Inquiry Form */}
          <div className="lg:col-span-7 bg-[#0a211e]/60 p-8 sm:p-10 rounded-3xl border border-emerald-900/50 space-y-6 shadow-xl">
            <h2 className="text-2xl font-bold text-slate-100">Send Booking Inquiry</h2>

            {submitted ? (
              <div className="p-6 bg-emerald-950/90 border border-emerald-500/60 rounded-2xl space-y-4 text-center shadow-lg">
                <span className="text-4xl block">🎉</span>
                <h3 className="text-xl font-bold text-emerald-200">Inquiry Ready to Send!</h3>
                <p className="text-sm text-emerald-100/90">
                  Thank you, <strong>{formData.name}</strong>. Click below to instantly send your stay dates to our reception on WhatsApp.
                </p>
                <a
                  href={`https://wa.me/${HOTEL_INFO.whatsappPhone}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3.5 rounded-full bg-emerald-400 text-slate-950 font-extrabold text-sm shadow-lg hover:bg-emerald-300"
                >
                  💬 Open WhatsApp Now
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#040d0c]/80 border border-emerald-900/60 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#040d0c]/80 border border-emerald-900/60 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1">Check-in Date</label>
                    <input
                      type="date"
                      value={formData.checkIn}
                      onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#040d0c]/80 border border-emerald-900/60 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1">Check-out Date</label>
                    <input
                      type="date"
                      value={formData.checkOut}
                      onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#040d0c]/80 border border-emerald-900/60 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1">Select Room Category</label>
                    <select
                      value={formData.roomType}
                      onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#040d0c]/80 border border-emerald-900/60 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                    >
                      <option value="Boutique Suite Room">Boutique Suite Room</option>
                      <option value="Standard Deluxe Room">Standard Deluxe Room</option>
                      <option value="Family Suite">Family Suite</option>
                      <option value="Grand Double Family Villa">Grand Double Family Villa</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1">Number of Guests</label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#040d0c]/80 border border-emerald-900/60 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                    >
                      <option value="1 Solo Traveler">1 Solo Traveler</option>
                      <option value="2 Adults">2 Adults</option>
                      <option value="3 Guests">3 Guests</option>
                      <option value="4 Family Guests">4 Family Guests</option>
                      <option value="5+ Group / Family">5+ Group / Family</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">Special Requirements / Message</label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Paragliding booking request, late check-in, extra bed..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#040d0c]/80 border border-emerald-900/60 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-base shadow-lg transition-transform transform hover:scale-[1.02]"
                >
                  Proceed to Send Inquiry
                </button>
              </form>
            )}
          </div>

          {/* Quick Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0a211e]/60 p-8 rounded-3xl border border-emerald-900/50 space-y-6 shadow-xl">
              <h2 className="text-2xl font-bold text-slate-100">Contact Details</h2>

              <div className="space-y-4 text-sm text-slate-200">
                <a
                  href={`tel:${HOTEL_INFO.phone}`}
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-[#040d0c]/80 border border-emerald-900/50 hover:bg-emerald-950 transition-colors"
                >
                  <span className="text-2xl">📞</span>
                  <div>
                    <span className="text-xs text-amber-300 block font-semibold">Phone / Booking Desk</span>
                    <span className="font-bold text-slate-100">{HOTEL_INFO.phone}</span>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${HOTEL_INFO.whatsappPhone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-[#040d0c]/80 border border-emerald-900/50 hover:bg-emerald-950 transition-colors"
                >
                  <span className="text-2xl">💬</span>
                  <div>
                    <span className="text-xs text-amber-300 block font-semibold">Instant WhatsApp</span>
                    <span className="font-bold text-slate-100">Chat with Reception</span>
                  </div>
                </a>

                <a
                  href={`mailto:${HOTEL_INFO.email}`}
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-[#040d0c]/80 border border-emerald-900/50 hover:bg-emerald-950 transition-colors"
                >
                  <span className="text-2xl">📧</span>
                  <div>
                    <span className="text-xs text-amber-300 block font-semibold">Email Inquiry</span>
                    <span className="font-bold text-slate-100">{HOTEL_INFO.email}</span>
                  </div>
                </a>

                <a
                  href={HOTEL_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-[#040d0c]/80 border border-emerald-900/50 hover:bg-emerald-950 transition-colors"
                >
                  <span className="text-2xl">📷</span>
                  <div>
                    <span className="text-xs text-amber-300 block font-semibold">Instagram</span>
                    <span className="font-bold text-slate-100">@thedraftbir</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <MapSection className="mb-20" />

        {/* How to Reach Bir Section */}
        <div className="bg-gradient-to-b from-[#0a211e]/80 to-[#040d0c] rounded-3xl p-8 sm:p-12 border border-emerald-900/50 space-y-8 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-slate-100">How to Reach Bir Billing</h2>
            <p className="text-sm text-slate-300/80">Convenient transport connections from major Indian cities:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-200">
            <div className="bg-[#040d0c]/70 p-6 rounded-2xl border border-emerald-800/40 space-y-2">
              <span className="text-2xl">🚌</span>
              <h3 className="font-bold text-slate-100 text-base">By Bus (From Delhi / Chandigarh)</h3>
              <p className="text-xs text-slate-300/80 leading-relaxed">
                Daily overnight Volvo buses run directly from Delhi (ISBT Kashmiri Gate / Majnu Ka Tilla) to Bir Chowk (approx. 10-11 hours).
              </p>
            </div>
            <div className="bg-[#040d0c]/70 p-6 rounded-2xl border border-emerald-800/40 space-y-2">
              <span className="text-2xl">✈️</span>
              <h3 className="font-bold text-slate-100 text-base">By Flight (Kangra / Gaggal Airport)</h3>
              <p className="text-xs text-slate-300/80 leading-relaxed">
                Nearest airport is Kangra/Dharamshala Airport (DHM), roughly 67 km from Bir (1.5 hours taxi drive).
              </p>
            </div>
            <div className="bg-[#040d0c]/70 p-6 rounded-2xl border border-emerald-800/40 space-y-2">
              <span className="text-2xl">🚂</span>
              <h3 className="font-bold text-slate-100 text-base">By Train (Pathankot / Ahju)</h3>
              <p className="text-xs text-slate-300/80 leading-relaxed">
                Major railhead is Pathankot (140 km). Toy train connects Pathankot to Ahju station (only 3 km from Bir).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
