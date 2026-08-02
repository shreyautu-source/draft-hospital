"use client";

import { useState } from "react";
import Script from "next/script";
import { FAQS } from "@/lib/data";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#0a211e]/80 to-[#040d0c] relative">
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-300 bg-[#040d0c]/80 px-3.5 py-1.5 rounded-full border border-emerald-800/80 shadow-md">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 mt-4 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-300/80 max-w-2xl mx-auto">
            Everything you need to know about staying at Draft Hotel Bir Billing, paragliding bookings, and mountain amenities.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#0a211e]/50 rounded-2xl border border-emerald-900/50 overflow-hidden transition-colors shadow-lg"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-5 flex justify-between items-center space-x-4 focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-100">
                    {faq.question}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-emerald-950/80 border border-emerald-700/60 flex items-center justify-center text-amber-300 font-extrabold text-sm shrink-0 shadow-md">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300/90 leading-relaxed border-t border-emerald-900/30 pt-4 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
