"use client";

import { useState } from "react";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import Carousel from "@/components/Carousel";
import { GALLERY_COLLECTION, HOTEL_INFO } from "@/lib/data";

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; alt: string } | null>(null);

  const filterTabs = [
    { id: "all", label: "All Photos" },
    { id: "boutique", label: "Boutique Suite" },
    { id: "standard", label: "Standard Deluxe" },
    { id: "family", label: "Family Suite" },
    { id: "double-family", label: "Grand Family Villa" },
    { id: "outdoor", label: "Outdoor Views" },
    { id: "paragliding", label: "Paragliding & Sunsets" },
  ];

  const filteredImages =
    activeTab === "all"
      ? GALLERY_COLLECTION
      : GALLERY_COLLECTION.filter((item) => item.category === activeTab);

  return (
    <div className="pt-28 pb-20 bg-[#061412] text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Photo Gallery", url: "/gallery" }]} />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-300 bg-emerald-950 px-3.5 py-1.5 rounded-full border border-emerald-800">
            Real Moments & Spaces
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-100 tracking-tight">
            Draft Hotel Photo Gallery
          </h1>
          <p className="text-base sm:text-lg text-slate-300/80 leading-relaxed">
            Take a visual tour of our boutique rooms, mountain view patio, outdoor seating deck, and breathtaking Bir paragliding sky views.
          </p>
        </div>

        {/* Featured Gallery Carousel */}
        <div className="mb-16">
          <Carousel slides={GALLERY_COLLECTION} autoPlayInterval={5000} showThumbnails={true} />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-amber-400 text-slate-950 shadow-lg scale-105 font-bold"
                  : "bg-emerald-950/60 text-slate-200 hover:bg-emerald-900 border border-emerald-800/40"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(item)}
              className="relative h-64 rounded-2xl overflow-hidden border border-emerald-900/40 cursor-pointer group shadow-xl"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061412]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                <span className="text-xs font-bold text-slate-100">{item.title}</span>
                <span className="text-[10px] text-amber-300 font-semibold uppercase">Click to enlarge</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl w-full max-h-[90vh] bg-[#040d0c] rounded-3xl overflow-hidden border border-emerald-700/60 p-4 space-y-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center px-2">
                <h2 className="text-lg font-bold text-slate-100">{selectedImage.title}</h2>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="w-9 h-9 rounded-full bg-emerald-950/80 text-slate-100 font-bold flex items-center justify-center hover:bg-emerald-900"
                >
                  ✕
                </button>
              </div>
              <div className="relative h-[65vh] w-full rounded-2xl overflow-hidden">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex justify-between items-center px-2 text-xs text-slate-300">
                <p>{selectedImage.alt}</p>
                <a
                  href={`https://wa.me/${HOTEL_INFO.whatsappPhone}?text=${encodeURIComponent(
                    `Hi Draft Hotel, I saw photo '${selectedImage.title}' on your website gallery and would like to inquire about booking.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-amber-400 text-slate-950 font-extrabold hover:bg-amber-300"
                >
                  Inquire This Room / Stay
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
