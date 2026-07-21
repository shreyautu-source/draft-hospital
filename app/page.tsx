"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  // Images array for gallery
  const galleryImages = [
    "/images/1781419103887.png",
    "/images/1781419262860.png",
    "/images/1781419351717.png",
    "/images/1781419425375.png",
    "/images/1781419531379.png",
    "/images/1781419636668.png",
    "/images/1781419695321.png",
    "/images/1781420533557.png",
    "/images/1781420814272.png",
    "/images/1781420937977.png",
    "/images/1781421009958.png",
    "/images/1781421198242.png",
  ];

  const cafeImages = [
    "/images/1781421291852.png",
    "/images/1781421343883.png",
    "/images/1781421450791.png",
    "/images/1781421690561.png",
  ];

  const roomImages = [
    "/images/1781422029859.png",
    "/images/1781422099610.png",
    "/images/1781422180976.png",
  ];

  return (
    <>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-amber-950/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-amber-100">Draft Bir</h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('hero')} className="text-amber-100 hover:text-amber-300 transition-colors">Home</button>
              <button onClick={() => scrollToSection('rooms')} className="text-amber-100 hover:text-amber-300 transition-colors">Stay</button>
              <button onClick={() => scrollToSection('cafe')} className="text-amber-100 hover:text-amber-300 transition-colors">Café</button>
              <button onClick={() => scrollToSection('experiences')} className="text-amber-100 hover:text-amber-300 transition-colors">Experiences</button>
              <button onClick={() => scrollToSection('gallery')} className="text-amber-100 hover:text-amber-300 transition-colors">Gallery</button>
              <button onClick={() => scrollToSection('about')} className="text-amber-100 hover:text-amber-300 transition-colors">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-amber-100 hover:text-amber-300 transition-colors">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-amber-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <button onClick={() => scrollToSection('hero')} className="block w-full text-left py-2 text-amber-100 hover:text-amber-300 transition-colors">Home</button>
              <button onClick={() => scrollToSection('rooms')} className="block w-full text-left py-2 text-amber-100 hover:text-amber-300 transition-colors">Stay</button>
              <button onClick={() => scrollToSection('cafe')} className="block w-full text-left py-2 text-amber-100 hover:text-amber-300 transition-colors">Café</button>
              <button onClick={() => scrollToSection('experiences')} className="block w-full text-left py-2 text-amber-100 hover:text-amber-300 transition-colors">Experiences</button>
              <button onClick={() => scrollToSection('gallery')} className="block w-full text-left py-2 text-amber-100 hover:text-amber-300 transition-colors">Gallery</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-amber-100 hover:text-amber-300 transition-colors">About</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-amber-100 hover:text-amber-300 transition-colors">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Background Image */}
      <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/1782662637412.png"
            alt="Draft Bir Mountain View"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/80 via-amber-800/70 to-yellow-700/60"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-amber-100 mb-6 animate-fade-in drop-shadow-lg">
            Stay. Slow Down. Feel Bir.
          </h1>
          <p className="text-xl sm:text-2xl text-amber-200 mb-8 max-w-3xl mx-auto animate-fade-in-delay drop-shadow-md">
            A boutique stay just minutes from Bir&apos;s paragliding landing site, where contemporary comfort meets mountain calm. Wake up to the Dhauladhar views, unwind in thoughtfully designed rooms, and experience Bir at your own pace.
          </p>
          <a
            href="tel:+917807585316"
            className="inline-block bg-amber-100 text-amber-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-200 transition-all duration-300 transform hover:scale-105 animate-fade-in-delay shadow-lg"
          >
            Book Your Stay
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Rooms Section with Images */}
      <section id="rooms" className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">Designed for Rest</h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Our rooms combine modern comfort with warm hospitality, offering everything you need for a relaxing mountain escape. Whether you&apos;re travelling solo, as a couple, or with family, every stay is crafted to make you feel at home.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 relative">
                <Image
                  src={roomImages[0]}
                  alt="Deluxe Rooms"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-amber-900 mb-2">Deluxe Rooms</h3>
                <p className="text-amber-700 mb-4">Spacious rooms with mountain views and modern amenities</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 relative">
                <Image
                  src={roomImages[1]}
                  alt="Cozy Dorms"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-amber-900 mb-2">Cozy Dorms</h3>
                <p className="text-amber-700 mb-4">Budget-friendly shared spaces perfect for solo travelers</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 relative">
                <Image
                  src={roomImages[2]}
                  alt="Family Suites"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-amber-900 mb-2">Family Suites</h3>
                <p className="text-amber-700 mb-4">Comfortable spaces designed for families and groups</p>
              </div>
            </div>
          </div>

          {/* Additional Room Images Showcase */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="h-32 relative rounded-lg overflow-hidden">
              <Image
                src="/images/1781422308492.png"
                alt="Room View 1"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="h-32 relative rounded-lg overflow-hidden">
              <Image
                src="/images/1781422602806.png"
                alt="Room View 2"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="h-32 relative rounded-lg overflow-hidden">
              <Image
                src="/images/1781422739077.png"
                alt="Room View 3"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="h-32 relative rounded-lg overflow-hidden">
              <Image
                src="/images/1781205614750.png"
                alt="Room View 4"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="tel:+917807585316"
              className="inline-block bg-amber-900 text-amber-100 px-8 py-4 rounded-full font-semibold hover:bg-amber-800 transition-colors duration-300"
            >
              Explore Rooms
            </a>
          </div>
        </div>
      </section>

      {/* Café Section with Images */}
      <section id="cafe" className="py-20 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">Fresh Food. Mountain Views.</h2>
              <p className="text-xl text-amber-700 mb-8">
                Our café serves freshly prepared meals, great coffee, and comforting favourites in a relaxed setting. Enjoy delicious food while soaking in the peaceful atmosphere of Bir.
              </p>
              <a
                href="tel:+917807585316"
                className="inline-block bg-amber-900 text-amber-100 px-8 py-4 rounded-full font-semibold hover:bg-amber-800 transition-colors duration-300"
              >
                Visit Café
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {cafeImages.map((img, index) => (
                <div key={index} className="h-40 relative rounded-lg overflow-hidden">
                  <Image
                    src={img}
                    alt={`Café Image ${index + 1}`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Section with Background */}
      <section id="experiences" className="py-20 bg-gradient-to-b from-amber-50 to-white relative">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/1781205850240.png"
            alt="Background Pattern"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">More Than Just a Stay</h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Experience the best of Bir with adventures and slow moments alike.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group bg-white/80 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors duration-300">
                <span className="text-3xl">🪂</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Paragliding</h3>
              <p className="text-amber-700">Soar above the valley with world-class paragliding</p>
            </div>

            <div className="text-center group bg-white/80 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors duration-300">
                <span className="text-3xl">🥾</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Nature Walks</h3>
              <p className="text-amber-700">Explore scenic trails and hidden mountain paths</p>
            </div>

            <div className="text-center group bg-white/80 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors duration-300">
                <span className="text-3xl">☕</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Café Hopping</h3>
              <p className="text-amber-700">Discover Bir&apos;s vibrant café culture</p>
            </div>

            <div className="text-center group bg-white/80 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors duration-300">
                <span className="text-3xl">🌅</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Sunset Views</h3>
              <p className="text-amber-700">Witness breathtaking sunsets over the mountains</p>
            </div>

            <div className="text-center group bg-white/80 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors duration-300">
                <span className="text-3xl">🏛️</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Local Culture</h3>
              <p className="text-amber-700">Immerse yourself in local traditions and monasteries</p>
            </div>

            <div className="text-center group bg-white/80 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors duration-300">
                <span className="text-3xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Workation-Friendly</h3>
              <p className="text-amber-700">Perfect setup for remote work with mountain views</p>
            </div>
          </div>

          {/* Experience Images */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="h-48 relative rounded-lg overflow-hidden">
              <Image
                src="/images/1781284371394.png"
                alt="Paragliding Experience"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="h-48 relative rounded-lg overflow-hidden">
              <Image
                src="/images/1781288214135.png"
                alt="Mountain Views"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="h-48 relative rounded-lg overflow-hidden col-span-2">
              <Image
                src="/images/1782662637412.png"
                alt="Bir Valley"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="tel:+917807585316"
              className="inline-block bg-amber-900 text-amber-100 px-8 py-4 rounded-full font-semibold hover:bg-amber-800 transition-colors duration-300"
            >
              Explore Experiences
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section with All Images */}
      <section id="gallery" className="py-20 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">Every Corner Tells a Story</h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Take a glimpse into the spaces, views, and experiences that make Draft Bir special.
            </p>
          </div>

          {/* Main Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className={`relative rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ${
                  index % 5 === 0 ? 'md:col-span-2 md:row-span-2 h-96' : 'h-64'
                }`}
              >
                <Image
                  src={img}
                  alt={`Gallery Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.instagram.com/thedraftbir/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-900 text-amber-100 px-8 py-4 rounded-full font-semibold hover:bg-amber-800 transition-colors duration-300"
            >
              View More on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* About Section with Background Image */}
      <section id="about" className="py-20 relative">
        <div className="absolute inset-0">
          <Image
            src="/images/1781205614750.png"
            alt="About Background"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">Welcome to Draft Bir</h2>
          <p className="text-xl text-amber-700 mb-8">
            Draft Bir is a boutique stay created for travellers who appreciate thoughtful design, peaceful surroundings, and genuine hospitality. Conveniently located near Bir&apos;s famous paragliding landing site, it offers the perfect base to explore the mountains while enjoying a comfortable and memorable stay.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            className="inline-block bg-amber-900 text-amber-100 px-8 py-4 rounded-full font-semibold hover:bg-amber-800 transition-colors duration-300"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">Let&apos;s Plan Your Stay</h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Have questions or need help planning your visit? We&apos;d love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <a href="https://maps.google.com/?q=Bir,Himachal+Pradesh" target="_blank" rel="noopener noreferrer" className="text-center group">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors duration-300">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-lg font-semibold text-amber-900 mb-1">Location</h3>
              <p className="text-amber-700">Bir, Himachal Pradesh</p>
            </a>

            <a href="tel:+917807585316" className="text-center group">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors duration-300">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-lg font-semibold text-amber-900 mb-1">Phone</h3>
              <p className="text-amber-700">+91 78075 85316</p>
            </a>

            <a href="mailto:draft.bir.2026@gmail.com" className="text-center group">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors duration-300">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="text-lg font-semibold text-amber-900 mb-1">Email</h3>
              <p className="text-amber-700">draft.bir.2026@gmail.com</p>
            </a>

            <a href="https://www.instagram.com/thedraftbir/" target="_blank" rel="noopener noreferrer" className="text-center group">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors duration-300">
                <span className="text-2xl">📷</span>
              </div>
              <h3 className="text-lg font-semibold text-amber-900 mb-1">Instagram</h3>
              <p className="text-amber-700">@thedraftbir</p>
            </a>
          </div>

          <div className="text-center mt-12">
            <a
              href="tel:+917807585316"
              className="inline-block bg-amber-900 text-amber-100 px-8 py-4 rounded-full font-semibold hover:bg-amber-800 transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA Section with Background Image */}
      <section className="py-20 relative text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/1782662637412.png"
            alt="CTA Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-amber-800/80 to-yellow-700/70"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">Your Mountain Escape Starts Here</h2>
          <p className="text-xl text-amber-200 mb-8 drop-shadow-md">
            Comfortable rooms, delicious food, unforgettable experiences, and the charm of Bir—all waiting for you.
          </p>
          <a
            href="tel:+917807585316"
            className="inline-block bg-amber-100 text-amber-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-amber-200 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Book Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-950 text-amber-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Draft Bir</h3>
              <p className="text-amber-200">Stay. Slow Down. Feel Bir.</p>
            </div>

            <div className="flex space-x-6">
              <a href="https://www.facebook.com/drafthouse.bir" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:text-amber-100 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/thedraftbir/" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:text-amber-100 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-amber-900 text-center text-amber-300">
            <p>&copy; 2024 Draft Bir. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}