import { notFound } from "next/navigation";
import Script from "next/script";
import Breadcrumbs from "@/components/Breadcrumbs";
import Carousel from "@/components/Carousel";
import { ROOMS_DATA, HOTEL_INFO } from "@/lib/data";

interface RoomPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return ROOMS_DATA.map((room) => ({
    slug: room.slug,
  }));
}

export async function generateMetadata({ params }: RoomPageProps) {
  const { slug } = await params;
  const room = ROOMS_DATA.find((r) => r.slug === slug);
  if (!room) return {};

  return {
    title: `${room.name} | Draft Hotel Bir Billing`,
    description: `${room.shortDescription} Book direct for best rates in Bir Billing. Includes high-speed fiber WiFi, hot showers, and mountain views.`,
    alternates: {
      canonical: `/rooms/${room.slug}`,
    },
    openGraph: {
      title: `${room.name} - Draft Hotel Bir Billing`,
      description: room.shortDescription,
      images: [{ url: room.featuredImage }],
    },
  };
}

export default async function RoomDetailPage({ params }: RoomPageProps) {
  const { slug } = await params;
  const room = ROOMS_DATA.find((r) => r.slug === slug);

  if (!room) {
    notFound();
  }

  const roomSchema = {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    name: room.name,
    description: room.fullDescription,
    occupancy: {
      "@type": "QuantitativeValue",
      value: room.capacity,
    },
    bed: {
      "@type": "BedDetails",
      typeOfBed: room.bedType,
    },
    amenityFeature: room.amenities.map((a) => ({
      "@type": "LocationFeatureSpecification",
      name: a,
      value: true,
    })),
  };

  return (
    <div className="pt-28 pb-20 bg-[#061412] text-slate-100">
      <Script
        id={`room-${room.slug}-jsonld`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(roomSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Accommodations", url: "/rooms" },
            { name: room.name, url: `/rooms/${room.slug}` },
          ]}
        />

        {/* Room Title Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 space-y-4 lg:space-y-0">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-300 bg-emerald-950 px-3.5 py-1.5 rounded-full border border-emerald-800">
              {room.capacity}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100 mt-3">
              {room.name}
            </h1>
            <p className="text-sm sm:text-base text-slate-300/80 mt-1">
              📍 View: <strong className="text-slate-100">{room.view}</strong> | Bed: <strong className="text-slate-100">{room.bedType}</strong>
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-right">
              <span className="text-xs text-amber-400 font-bold block">Best Available Rates</span>
            </div>
            <a
              href={`https://wa.me/${HOTEL_INFO.whatsappPhone}?text=${encodeURIComponent(
                `Hello Draft Hotel, I'd like to check availability for the ${room.name}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm shadow-lg transition-transform transform hover:scale-105"
            >
              💬 Book Now
            </a>
          </div>
        </div>

        {/* Room Photo Gallery Carousel */}
        <div className="mb-12">
          <Carousel
            slides={room.images.map((img, idx) => ({
              src: img,
              title: `${room.name} View ${idx + 1}`,
              alt: `${room.name} photo ${idx + 1} - Draft Hotel Bir Billing`,
              category: room.name,
            }))}
            autoPlayInterval={4000}
            showThumbnails={true}
          />
        </div>

        {/* Room Specifications & Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Description */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-[#0a211e]/60 p-8 rounded-3xl border border-emerald-900/50 space-y-4 shadow-xl">
              <h2 className="text-2xl font-extrabold text-slate-100">About This Room</h2>
              <p className="text-base text-slate-300/90 leading-relaxed">
                {room.fullDescription}
              </p>
            </div>

            {/* Room Features */}
            <div className="bg-[#0a211e]/60 p-8 rounded-3xl border border-emerald-900/50 space-y-4 shadow-xl">
              <h2 className="text-2xl font-extrabold text-slate-100">Highlights & Key Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {room.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-sm text-slate-200">
                    <span className="w-7 h-7 rounded-full bg-emerald-950 border border-emerald-700/60 flex items-center justify-center text-amber-300 font-extrabold text-xs shrink-0 shadow-md">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Full Amenities Grid */}
            <div className="bg-[#0a211e]/60 p-8 rounded-3xl border border-emerald-900/50 space-y-4 shadow-xl">
              <h2 className="text-2xl font-extrabold text-slate-100">Included Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
                {room.amenities.map((amenity, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-emerald-950/70 border border-emerald-900/60 text-slate-200">
                    ✨ {amenity}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="space-y-6">
            <div className="bg-gradient-to-b from-[#0a211e]/90 to-[#040d0c] p-8 rounded-3xl border border-emerald-800/60 space-y-6 sticky top-28 shadow-2xl">
              <div className="border-b border-emerald-900/60 pb-4">
                <span className="text-xs text-amber-400 uppercase tracking-widest font-extrabold block">Direct Booking Guarantee</span>
                <span className="text-lg font-bold text-slate-100">Best Available Rates</span>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex justify-between py-1 border-b border-emerald-900/40">
                  <span>Check-in:</span>
                  <span className="font-bold text-slate-100">12:00 PM</span>
                </div>
                <div className="flex justify-between py-1 border-b border-emerald-900/40">
                  <span>Check-out:</span>
                  <span className="font-bold text-slate-100">11:00 AM</span>
                </div>
                <div className="flex justify-between py-1 border-b border-emerald-900/40">
                  <span>High-Speed Fiber WiFi:</span>
                  <span className="font-bold text-amber-300">Included Free</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Breakfast Option:</span>
                  <span className="font-bold text-slate-100">Available at Draft Café</span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href={`https://wa.me/${HOTEL_INFO.whatsappPhone}?text=${encodeURIComponent(
                    `Hi Draft Hotel, I would like to reserve the ${room.name}. Please check availability.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm shadow-md transition-all"
                >
                  💬 Reserve via WhatsApp
                </a>
                <a
                  href={`tel:${HOTEL_INFO.phone}`}
                  className="w-full block text-center py-3.5 rounded-full bg-[#040d0c] hover:bg-emerald-950 text-slate-100 font-semibold text-sm border border-emerald-700/60 transition-colors"
                >
                  📞 Call Desk: {HOTEL_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
