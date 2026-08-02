import Image from "next/image";
import { ExperienceType } from "@/lib/data";

interface ExperienceCardProps {
  experience: ExperienceType;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="bg-gradient-to-b from-[#0a211e]/70 to-[#040d0c]/90 rounded-3xl overflow-hidden border border-emerald-900/50 shadow-2xl hover:border-amber-500/50 transition-all duration-500 group flex flex-col h-full">
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={experience.image}
          alt={`${experience.title} in Bir Billing - Draft Hotel`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061412] via-transparent to-transparent"></div>
        <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-[#040d0c]/80 border border-emerald-700/60 backdrop-blur-md flex items-center justify-center text-2xl shadow-lg">
          {experience.icon}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-100 mb-1.5 group-hover:text-amber-300 transition-colors">
          {experience.title}
        </h3>
        <p className="text-xs font-semibold text-amber-300 mb-3">
          {experience.subtitle}
        </p>
        <p className="text-xs sm:text-sm text-slate-300/80 mb-4 line-clamp-3 leading-relaxed flex-grow">
          {experience.description}
        </p>

        <div className="space-y-1.5 pt-3 border-t border-emerald-900/50 text-xs text-slate-300/90">
          <div className="flex items-center space-x-2">
            <span>⏱️</span>
            <span><strong>Duration:</strong> {experience.duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>☀️</span>
            <span><strong>Best Season:</strong> {experience.bestTime}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
