import Image from "next/image";
import Script from "next/script";
import Breadcrumbs from "@/components/Breadcrumbs";
import { HOTEL_INFO } from "@/lib/data";

export const metadata = {
  title: "Draft Café & Dining | Mountain Views & Artisan Coffee in Bir",
  description:
    "Relax at Draft Café in Bir Billing. Serving artisan espresso, fresh breakfast bowls, Himachali teas, wood-fired pizzas, and mountain views near the landing ground.",
  alternates: {
    canonical: "/cafe",
  },
};

export default function CafePage() {
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Draft Café Bir Billing",
    description: "Artisan mountain café serving specialty coffee, local Himachali bites, breakfast bowls, and wood-fired pizzas with Dhauladhar mountain views.",
    url: `${HOTEL_INFO.siteUrl}/cafe`,
    telephone: HOTEL_INFO.phone,
    servesCuisine: ["Himachali", "Italian", "Cafe", "Continental"],
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Draft Hotel, Near Paragliding Landing Site",
      addressLocality: "Bir",
      addressRegion: "Himachal Pradesh",
      postalCode: "176077",
      addressCountry: "IN",
    },
    openingHours: "Mo-Su 07:30-22:30",
  };

  const menuCategories = [
    {
      name: "Artisan Brews & Teas",
      icon: "☕",
      items: [
        { title: "Specialty Espresso & Cappuccino", desc: "Freshly ground Arabica beans brewed with mountain water", price: "₹140" },
        { title: "Cold Brew & Iced Latte", desc: "Slow steeped for 16 hours for a smooth, bold flavor", price: "₹170" },
        { title: "Organic Himachali Herbal Tea", desc: "Local mint, lemongrass, ginger, and wild mountain honey", price: "₹90" },
        { title: "Masala Chai Pot", desc: "Traditional slow-boiled spiced milk tea", price: "₹80" },
      ],
    },
    {
      name: "Mountain Breakfast Bowls",
      icon: "🥣",
      items: [
        { title: "Dhauladhar Power Bowl", desc: "Oats, toasted almonds, chia seeds, fresh fruits & wild honey", price: "₹240" },
        { title: "Avocado & Poached Egg Toast", desc: "Artisan sourdough topped with smashed avocado & herbs", price: "₹280" },
        { title: "Himachali Siddu Plate", desc: "Traditional steamed wheat bread stuffed with poppy seeds & ghee", price: "₹220" },
        { title: "Fluffy Pancake Stack", desc: "Served with maple syrup, butter, and seasonal berries", price: "₹220" },
      ],
    },
    {
      name: "Gourmet Bites & Mains",
      icon: "🍕",
      items: [
        { title: "Artisan Wood-Fired Style Pizza", desc: "Fresh mozzarella, basil pesto, cherry tomatoes & crispy crust", price: "₹380" },
        { title: "Classic Draft Club Sandwich", desc: "Layered grilled sourdough with veggies, cheese & house dip", price: "₹260" },
        { title: "Creamy Garlic Wild Mushroom Pasta", desc: "Al dente penne tossed in rich parmesan cream sauce", price: "₹340" },
        { title: "Hummus & Warm Pita Platter", desc: "House-made chickpea hummus with olive oil & pickled veggies", price: "₹290" },
      ],
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#061412] text-slate-100">
      <Script
        id="restaurant-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Draft Café", url: "/cafe" }]} />

        {/* Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden mb-16 border border-emerald-900/60 shadow-2xl">
          <div className="relative h-80 sm:h-96 w-full">
            <Image
              src="/images/collection/Outdoor%20View%20/20260702_082525.jpg"
              alt="Draft Cafe Outdoor Deck View Bir Billing"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#061412]/95 via-[#061412]/80 to-[#061412]/50"></div>
          </div>
          <div className="absolute inset-0 p-6 sm:p-12 flex flex-col justify-center max-w-2xl space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-300 bg-emerald-950 px-3.5 py-1.5 rounded-full border border-emerald-800 self-start shadow-md">
              Open Daily: 7:30 AM – 10:30 PM
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100">
              Draft Café & Dining
            </h1>
            <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed">
              Pair good coffee with great mountain views. Enjoy freshly prepared food, high-speed fiber internet, and a peaceful deck facing the Dhauladhar ranges.
            </p>
          </div>
        </div>

        {/* Cafe Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-[#0a211e]/60 p-6 rounded-3xl border border-emerald-900/40 space-y-3 shadow-xl">
            <span className="text-3xl">☕</span>
            <h2 className="text-xl font-bold text-slate-100">Specialty Coffee & Teas</h2>
            <p className="text-xs text-slate-300/80 leading-relaxed">
              We brew 100% single-origin Arabica coffee beans and serve hand-picked Himachali mountain teas infused with wild herbs.
            </p>
          </div>
          <div className="bg-[#0a211e]/60 p-6 rounded-3xl border border-emerald-900/40 space-y-3 shadow-xl">
            <span className="text-3xl">🏔️</span>
            <h2 className="text-xl font-bold text-slate-100">Unblocked Mountain Views</h2>
            <p className="text-xs text-slate-300/80 leading-relaxed">
              Our outdoor deck overlooks the pine ridges where paragliders float smoothly during golden hour sunsets.
            </p>
          </div>
          <div className="bg-[#0a211e]/60 p-6 rounded-3xl border border-emerald-900/40 space-y-3 shadow-xl">
            <span className="text-3xl">💻</span>
            <h2 className="text-xl font-bold text-slate-100">Nomad & Workation Friendly</h2>
            <p className="text-xs text-slate-300/80 leading-relaxed">
              Equipped with power charging ports at every table and 100+ Mbps optical fiber internet for remote workers.
            </p>
          </div>
        </div>

        {/* Menu Showcase */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-300 bg-emerald-950 px-3.5 py-1.5 rounded-full border border-emerald-800">
              Fresh Daily Menu
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
              Draft Café Signature Items
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {menuCategories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-[#0a211e]/60 p-8 rounded-3xl border border-emerald-900/50 space-y-6 shadow-xl"
              >
                <div className="flex items-center space-x-3 border-b border-emerald-900/50 pb-4">
                  <span className="text-3xl">{cat.icon}</span>
                  <h3 className="text-xl font-bold text-slate-100">{cat.name}</h3>
                </div>

                <div className="space-y-4">
                  {cat.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="space-y-1 border-b border-emerald-900/30 pb-3 last:border-0 last:pb-0">
                      <div className="flex justify-between items-baseline">
                        <h4 className="font-bold text-slate-100 text-sm">{item.title}</h4>
                        <span className="text-xs font-extrabold text-amber-400 px-2 py-0.5 bg-[#040d0c] rounded-md border border-emerald-900">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300/80">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
