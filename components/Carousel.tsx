"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export interface CarouselSlide {
  src: string;
  title: string;
  alt: string;
  category?: string;
}

interface CarouselProps {
  slides: CarouselSlide[];
  autoPlayInterval?: number;
  showThumbnails?: boolean;
}

export default function Carousel({
  slides,
  autoPlayInterval = 4000,
  showThumbnails = true,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  useEffect(() => {
    if (autoPlayInterval <= 0 || isPaused || slides.length <= 1) return;
    const timer = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [autoPlayInterval, isPaused, nextSlide, slides.length]);

  if (!slides || slides.length === 0) return null;

  const currentSlide = slides[currentIndex];

  return (
    <div
      className="relative w-full space-y-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Photo Gallery Carousel"
      role="region"
    >
      {/* Main Slide Viewer */}
      <div className="relative h-80 sm:h-[520px] w-full rounded-3xl overflow-hidden border border-emerald-800/60 shadow-2xl bg-[#040d0c] group">
        <Image
          src={currentSlide.src}
          alt={currentSlide.alt}
          fill
          priority
          sizes="(max-width: 1280px) 100vw, 1200px"
          className="object-cover transition-all duration-700 ease-out"
        />

        {/* Gradient Overlay & Info Bar */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#061412] via-[#061412]/30 to-transparent flex flex-col justify-end p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end space-y-2 sm:space-y-0">
            <div>
              {currentSlide.category && (
                <span className="text-xs font-extrabold uppercase tracking-widest text-amber-300 bg-[#040d0c]/90 px-3.5 py-1.5 rounded-full border border-emerald-700/60 mb-3 inline-block shadow-md">
                  {currentSlide.category}
                </span>
              )}
              <h3 className="text-xl sm:text-3xl font-extrabold text-slate-100 drop-shadow-md">
                {currentSlide.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300/90 mt-1 max-w-xl">
                {currentSlide.alt}
              </p>
            </div>
            <div className="text-xs font-bold text-amber-300 font-mono bg-[#040d0c]/90 px-3.5 py-1.5 rounded-full border border-emerald-800/60 shadow-md">
              {currentIndex + 1} / {slides.length}
            </div>
          </div>
        </div>

        {/* Previous Button */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#040d0c]/80 hover:bg-emerald-950 border border-emerald-700/60 text-slate-100 flex items-center justify-center backdrop-blur-md transition-all transform hover:scale-110 shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-400 opacity-90 group-hover:opacity-100"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#040d0c]/80 hover:bg-emerald-950 border border-emerald-700/60 text-slate-100 flex items-center justify-center backdrop-blur-md transition-all transform hover:scale-110 shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-400 opacity-90 group-hover:opacity-100"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? "w-8 bg-amber-400 shadow-md"
                  : "w-2 bg-slate-400/40 hover:bg-slate-200/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnails Row */}
      {showThumbnails && slides.length > 1 && (
        <div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-emerald-800 scrollbar-track-[#040d0c] px-1">
          {slides.map((slide, idx) => {
            const isActive = currentIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative w-20 sm:w-28 h-16 sm:h-20 rounded-2xl overflow-hidden shrink-0 border-2 transition-all duration-200 ${
                  isActive
                    ? "border-amber-400 scale-105 shadow-xl ring-2 ring-amber-500/50 opacity-100"
                    : "border-emerald-900/60 opacity-50 hover:opacity-100"
                }`}
              >
                <Image
                  src={slide.src}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  sizes="112px"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
