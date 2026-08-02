import Image from "next/image";
import { RoomType, HOTEL_INFO } from "@/lib/data";

interface RoomCardProps {
  room: RoomType;
}

export default function RoomCard({ room }: RoomCardProps) {
  return (
    <article className="bg-gradient-to-b from-[#0a211e]/70 to-[#040d0c]/90 rounded-3xl overflow-hidden border border-emerald-900/50 shadow-2xl hover:border-amber-500/50 transition-all duration-500 group flex flex-col h-full">
      {/* Featured Image */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden">
        <Image
          src={room.featuredImage}
          alt={`${room.name} - Draft Hotel Bir Billing`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061412] via-transparent to-transparent"></div>
        <div className="absolute bottom-3 left-3 flex items-center">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#040d0c]/80 text-amber-300 border border-emerald-800/80 backdrop-blur-md">
            {room.capacity}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-slate-100 mb-2 group-hover:text-amber-300 transition-colors">
          {room.name}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300/80 mb-4 line-clamp-2 leading-relaxed">
          {room.shortDescription}
        </p>

        {/* Room Attributes */}
        <div className="grid grid-cols-2 gap-2 mb-6 text-xs text-amber-300/90 bg-[#040d0c]/60 p-3 rounded-2xl border border-emerald-900/40">
          <div className="flex items-center space-x-1.5">
            <span>🛏️</span>
            <span className="truncate">{room.bedType}</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span>🏞️</span>
            <span className="truncate">{room.view}</span>
          </div>
        </div>

        {/* Key Amenities */}
        <div className="mb-6 flex-grow">
          <div className="flex flex-wrap gap-1.5">
            {room.amenities.slice(0, 4).map((amenity, idx) => (
              <span
                key={idx}
                className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-emerald-950/80 text-slate-200 border border-emerald-900/60"
              >
                ✓ {amenity}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="pt-4 border-t border-emerald-900/50">
          <a
            href={`https://wa.me/${HOTEL_INFO.whatsappPhone}?text=${encodeURIComponent(
              `Hi Draft Hotel, I would like to inquire about booking the ${room.name}. Please share rates and availability.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block text-center text-xs font-extrabold px-4 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 transition-all shadow-lg"
          >
            Inquire Rates & Availability
          </a>
        </div>
      </div>
    </article>
  );
}
