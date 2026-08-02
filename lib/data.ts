// Comprehensive Data Source for Draft Hotel Bir Billing
// Built for high performance, SEO structure, and complete image collection integration.

export interface RoomType {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  capacity: string;
  bedType: string;
  view: string;
  pricePerNight: string;
  featuredImage: string;
  images: string[];
  amenities: string[];
  features: string[];
}

export interface ExperienceType {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  image: string;
  duration: string;
  bestTime: string;
  highlights: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  readTime: string;
  publishedDate: string;
  author: string;
  category: string;
  image: string;
}

export interface GalleryItem {
  src: string;
  category: 'boutique' | 'family' | 'double-family' | 'standard' | 'outdoor' | 'paragliding';
  title: string;
  alt: string;
}

export const HOTEL_INFO = {
  name: "Draft Hotel Bir Billing",
  tagline: "Where Stories Begin.",
  subtagline: "A boutique mountain retreat minutes from Bir's world-famous paragliding landing site.",
  phone: "+91 78075 85316",
  whatsappPhone: "+917807585316",
  email: "draft.bir.2026@gmail.com",
  address: "Near Paragliding Landing Site, Bir, Himachal Pradesh 176077",
  geo: {
    lat: 32.0419,
    lng: 76.7243,
  },
  social: {
    instagram: "https://www.instagram.com/thedraftbir/",
    facebook: "https://www.facebook.com/drafthouse.bir",
  },
  siteUrl: "https://www.drafthospitality.com",
};

// Encoded paths for public/images/collection folders
export const ROOMS_DATA: RoomType[] = [
  {
    id: "boutique-room",
    slug: "boutique-room",
    name: "Boutique Suite Room",
    shortDescription: "Elegant private suite featuring artisan wood accents, plush king bedding, and direct views of the Dhauladhar peaks.",
    fullDescription: "Our Boutique Suite Room is tailored for travelers who appreciate refined mountain luxury. Featuring custom handcrafted wooden furniture, large view windows facing the lush valley and Dhauladhar ranges, high-speed WiFi for remote work, premium linens, and a luxurious en-suite bathroom. Perfect for couples, solos, or travelers seeking a tranquil sanctuary.",
    capacity: "2 Adults (Up to 3 guests)",
    bedType: "King Size Bed",
    view: "Dhauladhar Mountain & Forest View",
    pricePerNight: "₹3,499",
    featuredImage: "/images/collection/Boutique%20room/20260709_163408.jpg",
    images: [
      "/images/collection/Boutique%20room/20260709_163408.jpg",
      "/images/collection/Boutique%20room/20260709_163017.jpg",
      "/images/collection/Boutique%20room/20260709_163037.jpg",
      "/images/collection/Boutique%20room/20260709_163423.jpg",
      "/images/collection/Boutique%20room/20260709_163432.jpg",
      "/images/collection/Boutique%20room/20260709_163536.jpg",
      "/images/collection/Boutique%20room/20260709_163943.jpg",
      "/images/collection/Boutique%20room/20260710_204104.jpg"
    ],
    amenities: [
      "High-Speed Fiber WiFi",
      "Private Balcony / View",
      "Hot Water Kettle & Tea Setup",
      "24/7 Hot Water Shower",
      "Work Desk & Ergonomic Chair",
      "Daily Housekeeping",
      "Room Service",
      "Premium Toiletries"
    ],
    features: [
      "Panoramic Himalayan Sunrise Views",
      "Sound-insulated Cozy Ambience",
      "Minutes from Paragliding Landing Site",
      "Workation Setup Ready"
    ]
  },
  {
    id: "standard-room",
    slug: "standard-room",
    name: "Standard Deluxe Room",
    shortDescription: "Cozy, warm, and thoughtfully appointed room with modern amenities, ideal for couples and budget-conscious explorers.",
    fullDescription: "Our Standard Deluxe Room delivers exceptional comfort with minimalist alpine styling. Enjoy a comfortable queen-size bed, private modern bathroom, warm lighting, and quiet mountain vibes. Designed for short getaways, weekend paragliding trips, or relaxed stays in Bir.",
    capacity: "2 Adults",
    bedType: "Queen / Double Bed",
    view: "Garden & Mountain View",
    pricePerNight: "₹2,499",
    featuredImage: "/images/collection/Standard%20Rooms/20260709_163526.jpg",
    images: [
      "/images/collection/Standard%20Rooms/20260709_163526.jpg",
      "/images/collection/Standard%20Rooms/20260709_162959.jpg",
      "/images/collection/Standard%20Rooms/20260709_163019.jpg",
      "/images/collection/Standard%20Rooms/20260709_163607.jpg",
      "/images/collection/Standard%20Rooms/20260709_163726.jpg",
      "/images/collection/Standard%20Rooms/20260709_163930.jpg",
      "/images/collection/Standard%20Rooms/20260710_203918.jpg"
    ],
    amenities: [
      "High-Speed Fiber WiFi",
      "24/7 Hot Water",
      "Electric Kettle with Tea/Coffee",
      "Work Desk",
      "Daily Housekeeping",
      "In-room Dining Option"
    ],
    features: [
      "Clean, Peaceful Sanctuary",
      "Easy Access to Draft Café",
      "Affordable Luxury"
    ]
  },
  {
    id: "family-room",
    slug: "family-room",
    name: "Family Suite",
    shortDescription: "Spacious accommodation featuring double bedding, ample seating area, and beautiful valley windows for families or groups.",
    fullDescription: "Designed for families, small groups, or friends traveling together, the Family Suite offers generous space, comfortable bedding layouts, and a warm atmosphere. Enjoy dedicated sitting spaces, pristine mountain views, and easy access to local trails and café amenities.",
    capacity: "4 Adults",
    bedType: "2 Queen Beds",
    view: "Valley & Pine Forest View",
    pricePerNight: "₹4,299",
    featuredImage: "/images/collection/Family%20Room/20260714_100744.jpg",
    images: [
      "/images/collection/Family%20Room/20260714_100744.jpg",
      "/images/collection/Family%20Room/20260714_100750.jpg",
      "/images/collection/Family%20Room/20260714_100758.jpg",
      "/images/collection/Family%20Room/20260714_100802.jpg",
      "/images/collection/Family%20Room/20260714_100849.jpg",
      "/images/collection/Family%20Room/20260714_101010.jpg",
      "/images/collection/Family%20Room/20260714_101148.jpg"
    ],
    amenities: [
      "High-Speed Fiber WiFi",
      "Spacious Attached Bathroom",
      "Tea/Coffee Maker",
      "Seating Area with Table",
      "24/7 Hot Water",
      "Daily Housekeeping"
    ],
    features: [
      "Comfortable for 4-5 Guests",
      "Quiet Pine Forest Setting",
      "Child-Friendly Environment"
    ]
  },
  {
    id: "double-family-room",
    slug: "double-family-room",
    name: "Grand Double Family Villa Suite",
    shortDescription: "Premium double-connected family suite offering maximum privacy, multiple beds, and sprawling mountain vistas.",
    fullDescription: "Our Grand Double Family Villa Suite is the ultimate stay experience at Draft Hotel. Designed for larger families or retreats, it pairs two interconnected spacious rooms with double bathrooms, expansive seating options, and unblocked views of the Bir Billing sky filled with paragliders.",
    capacity: "4-6 Guests",
    bedType: "2 King Beds + Extra Bedding Available",
    view: "Panoramic Billing Paragliding Takeoff & Landing View",
    pricePerNight: "₹5,499",
    featuredImage: "/images/collection/Double%20Family%20Room%20/20260714_102055.jpg",
    images: [
      "/images/collection/Double%20Family%20Room%20/20260714_102055.jpg",
      "/images/collection/Double%20Family%20Room%20/20260714_102118.jpg",
      "/images/collection/Double%20Family%20Room%20/20260714_102123.jpg",
      "/images/collection/Double%20Family%20Room%20/20260714_102152.jpg",
      "/images/collection/Double%20Family%20Room%20/20260714_102204.jpg",
      "/images/collection/Double%20Family%20Room%20/20260714_102239.jpg",
      "/images/collection/Double%20Family%20Room%20/20260714_102335.jpg"
    ],
    amenities: [
      "2 Connected Private Bedrooms",
      "Dual Bathrooms with Hot Showers",
      "High-Speed Fiber WiFi",
      "Private Viewing Lounge",
      "Tea/Coffee Amenities",
      "Room Service & Café Access"
    ],
    features: [
      "Maximum Space & Privacy",
      "Best Sunset & Paraglider Views",
      "Ideal for Group Vacations"
    ]
  }
];

export const EXPERIENCES_DATA: ExperienceType[] = [
  {
    id: "paragliding",
    title: "Tandem Paragliding at Billing",
    subtitle: "Fly high over the Dhauladhar ranges from Asia's #1 paragliding site.",
    description: "Experience the thrill of a lifetime soaring high over Bir Billing, the world's 2nd highest paragliding takeoff site. Accompanied by certified tandem pilots, glide effortlessly over lush tea gardens and snow-capped peaks before landing right near Draft Hotel.",
    icon: "🪂",
    image: "/images/collection/Paragliding%20and%20Sunset%20/20260608_190909.jpg",
    duration: "15-30 mins flight (2-3 hrs total)",
    bestTime: "October to June (Sunrise or Sunset flights)",
    highlights: [
      "Takeoff at 2,400 meters altitude in Billing",
      "Certified & experienced tandem pilots",
      "GoPro flight footage available on request",
      "Landing just 3 minutes from Draft Hotel"
    ]
  },
  {
    id: "sunset-views",
    title: "Bir Landing Site Sunsets",
    subtitle: "Chasing gold-hued sunsets surrounded by paragliders landing.",
    description: "The sunset at Bir Landing Site is world famous. Watch as the sun dips behind the pine ridges, bathing the sky in pink, orange, and purple hues while gliders land silently around you. Enjoy a warm cup of Himachali tea right from our café deck.",
    icon: "🌅",
    image: "/images/collection/Paragliding%20and%20Sunset%20/20260704_192511.jpg",
    duration: "1-2 Hours (Every evening)",
    bestTime: "5:30 PM - 7:00 PM",
    highlights: [
      "Walking distance from Draft Hotel",
      "Unmatched photographic opportunities",
      "Vibrant evening vibe with global travelers"
    ]
  },
  {
    id: "monasteries-culture",
    title: "Tibetan Monasteries & Cultural Trails",
    subtitle: "Explore peaceful monasteries, stupas, and Tibetan art institutes.",
    description: "Bir is home to a thriving Tibetan refugee settlement. Visit Chokling Monastery, Sherab Ling Monastery, and Nyingma Monastery to witness peaceful prayer chants, intricate butter sculpture art, and traditional architecture.",
    icon: "🏛️",
    image: "/images/collection/Outdoor%20View%20/20260704_192604.jpg",
    duration: "Half-day Exploration",
    bestTime: "Morning & Afternoon",
    highlights: [
      "Chokling Monastery stupa views",
      "Peaceful prayer sessions & butter lamps",
      "Local Tibetan handicraft markets"
    ]
  },
  {
    id: "nature-treks",
    title: "Waterfall & Pine Forest Treks",
    subtitle: "Unwind on serene forest trails and hidden mountain streams.",
    description: "Embark on gentle nature walks through aromatic pine forests, oak woods, and terraced tea gardens. Hike up to Gunehar River pool and Bangoru Waterfalls for a refreshing dip in crystal clear mountain water.",
    icon: "🥾",
    image: "/images/collection/Outdoor%20View%20/20260702_081827.jpg",
    duration: "2-4 Hours",
    bestTime: "Early Morning / Afternoon",
    highlights: [
      "Bangoru & Gunehar Waterfall trails",
      "Birdwatching & pine forest therapy",
      "Scenic village trail walks"
    ]
  },
  {
    id: "workation",
    title: "Mountain Workation & Remote Work",
    subtitle: "High-speed optical fiber, comfortable desks, and inspiring views.",
    description: "Combine productivity with peace. Draft Hotel features reliable high-speed fiber internet, power backup, ergonomic seating, and fresh specialty coffee from Draft Café to fuel your workday.",
    icon: "💻",
    image: "/images/collection/Outdoor%20View%20/20260704_192837.jpg",
    duration: "Flexible (Long Stays Available)",
    bestTime: "All Year Round",
    highlights: [
      "100+ Mbps Fiber WiFi",
      "Quiet workspaces with view",
      "Special weekly & monthly workation rates"
    ]
  }
];

export const GALLERY_COLLECTION: GalleryItem[] = [
  // Outdoor & Views
  { src: "/images/collection/Outdoor%20View%20/20260702_081827.jpg", category: "outdoor", title: "Pine Forest Trail View", alt: "Draft Hotel Bir Billing Pine Forest Trails and Mountain View" },
  { src: "/images/collection/Outdoor%20View%20/20260702_082525.jpg", category: "outdoor", title: "Morning Sunshine Deck", alt: "Morning sun hitting Draft Hotel mountain patio" },
  { src: "/images/collection/Outdoor%20View%20/20260702_085222.jpg", category: "outdoor", title: "Dhauladhar Mountain Skyline", alt: "Scenic view of Dhauladhar mountain range from Draft Hotel" },
  { src: "/images/collection/Outdoor%20View%20/20260704_192524.jpg", category: "outdoor", title: "Twilight Mountain Ridge", alt: "Evening lights and mountain silhouette in Bir Billing" },
  { src: "/images/collection/Outdoor%20View%20/20260704_192652.jpg", category: "outdoor", title: "Draft Hotel Exterior & Courtyard", alt: "Courtyard view of Draft Hotel Bir Billing" },
  { src: "/images/collection/Outdoor%20View%20/20260712_192922.jpg", category: "outdoor", title: "Golden Hour Mountain Valley", alt: "Golden hour sunset over Bir valley" },

  // Paragliding & Sunset
  { src: "/images/collection/Paragliding%20and%20Sunset%20/20260608_190909.jpg", category: "paragliding", title: "Paraglider in Flight", alt: "Paraglider floating over Bir Billing valley" },
  { src: "/images/collection/Paragliding%20and%20Sunset%20/20260704_192511.jpg", category: "paragliding", title: "Sunset Sky at Landing Site", alt: "Vibrant orange sunset sky at Bir paragliding landing site" },
  { src: "/images/collection/Paragliding%20and%20Sunset%20/20260704_192602.jpg", category: "paragliding", title: "Sunset Horizon with Gliders", alt: "Paragliders landing during dusk in Bir Billing" },
  { src: "/images/collection/Paragliding%20and%20Sunset%20/20251024_172843.jpg", category: "paragliding", title: "Golden Sunset Silhouette", alt: "Mountain silhouette during golden hour in Bir" },
  { src: "/images/collection/Paragliding%20and%20Sunset%20/20230109_174507.jpg", category: "paragliding", title: "Pink Sky Dusk", alt: "Dusk colors over Bir Billing mountains" },

  // Boutique Rooms
  { src: "/images/collection/Boutique%20room/20260709_163408.jpg", category: "boutique", title: "Boutique Suite Bed & Decor", alt: "Spacious boutique suite king bed at Draft Hotel" },
  { src: "/images/collection/Boutique%20room/20260709_163017.jpg", category: "boutique", title: "Artisan Interior Design", alt: "Clean wooden finishes inside Boutique Room" },
  { src: "/images/collection/Boutique%20room/20260709_163536.jpg", category: "boutique", title: "Balcony & Window View", alt: "Mountain window view from Boutique Suite Room" },
  { src: "/images/collection/Boutique%20room/20260710_204104.jpg", category: "boutique", title: "Warm Evening Room Ambience", alt: "Cozy ambient lighting in Boutique Room" },

  // Standard Rooms
  { src: "/images/collection/Standard%20Rooms/20260709_163526.jpg", category: "standard", title: "Standard Deluxe Room Layout", alt: "Comfortable standard deluxe room bed and decor" },
  { src: "/images/collection/Standard%20Rooms/20260709_162959.jpg", category: "standard", title: "Cozy Queen Bed Setup", alt: "Queen bed setup in Standard Room" },
  { src: "/images/collection/Standard%20Rooms/20260709_163607.jpg", category: "standard", title: "Room Amenities & Desk", alt: "Desk setup and clean room interior" },

  // Family Room
  { src: "/images/collection/Family%20Room/20260714_100744.jpg", category: "family", title: "Family Suite Layout", alt: "Large family room layout with double bedding" },
  { src: "/images/collection/Family%20Room/20260714_100750.jpg", category: "family", title: "Family Room Window View", alt: "Window view and seating in Family Suite" },
  { src: "/images/collection/Family%20Room/20260714_100849.jpg", category: "family", title: "Seating Area & Decor", alt: "Comfortable seating area in Family Room" },

  // Double Family Room
  { src: "/images/collection/Double%20Family%20Room%20/20260714_102055.jpg", category: "double-family", title: "Grand Double Family Villa", alt: "Grand Double Family Suite at Draft Hotel Bir" },
  { src: "/images/collection/Double%20Family%20Room%20/20260714_102118.jpg", category: "double-family", title: "Dual Bedroom Setup", alt: "Spacious connected bedroom layout in Double Family Room" },
  { src: "/images/collection/Double%20Family%20Room%20/20260714_102204.jpg", category: "double-family", title: "Private View Balcony Area", alt: "View balcony area of Grand Double Family Villa" }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ultimate-bir-billing-paragliding-guide",
    title: "The Ultimate Guide to Paragliding in Bir Billing (2026 Edition)",
    excerpt: "Everything you need to know about flying in Bir Billing: best season, safety tips, takeoff at Billing, landing site etiquette, and cost breakdowns.",
    readTime: "6 min read",
    publishedDate: "January 15, 2026",
    author: "Draft Mountain Team",
    category: "Adventure & Paragliding",
    image: "/images/collection/Paragliding%20and%20Sunset%20/20260608_190909.jpg",
    content: `
      Bir Billing is globally recognized as the **paragliding capital of India** and ranks as the 2nd highest takeoff site in the world. Whether you are a first-time tandem flyer or an experienced solo pilot, Bir offers smooth thermal currents, breathtaking Dhauladhar mountain backdrops, and world-class safety standards.

      ### 1. Why Bir Billing is Special for Flying
      Billing sits at an elevation of 2,400 meters (7,874 ft) above sea level, providing ideal wind launch conditions. The landing ground in Bir sits at 1,525 meters (5,003 ft), giving gliders nearly 900 meters of pure vertical descent over terraced tea gardens and pine valleys.

      ### 2. Best Time for Paragliding in Bir
      - **October to November**: Peak autumn season with crystal clear blue skies and stable winds.
      - **March to June**: Spring and summer season with excellent thermal lift for longer flights.
      - **Monsoon Caution (July to September)**: Paragliding remains closed during heavy monsoons for safety reasons.

      ### 3. What to Expect During a Tandem Flight
      - **Drive to Takeoff**: A scenic 45-minute drive up through winding mountain roads from Bir to Billing.
      - **Briefing**: Your certified pilot equips you with a helmet and harness and gives a brief 5-minute running instruction.
      - **Takeoff**: A short 5-step run down the grassy slope, and you're airborne!
      - **In-flight**: Enjoy 15 to 30 minutes of smooth gliding with 360-degree views of Himalayas.

      ### 4. Stay Close to the Action at Draft Hotel
      After landing, there's nothing better than walking just 3 minutes to **Draft Hotel Bir Billing**, grabbing a hot artisan cappuccino at Draft Café, and relaxing in your mountain view room.
    `
  },
  {
    slug: "top-cafes-and-workation-stays-in-bir",
    title: "Top Cafes, Workation Vibe, & Hidden Gems in Bir Himachal Pradesh",
    excerpt: "Why Bir has become India's favorite mountain workation hub. Discover local cafe culture, high-speed WiFi stays, and slow travel trails.",
    readTime: "5 min read",
    publishedDate: "January 28, 2026",
    author: "Draft Mountain Team",
    category: "Workation & Travel",
    image: "/images/collection/Outdoor%20View%20/20260704_192837.jpg",
    content: `
      In recent years, Bir has evolved from a quiet eco-village into a bustling magnet for digital nomads, remote workers, artists, and slow travelers.

      ### The Workation Magic of Bir
      Unlike over-crowded hill stations, Bir maintains a serene, eco-conscious pace. You can write code or host client meetings under the shadow of the Dhauladhars, then head out at 5:00 PM for sunset gliders at the landing site.

      ### Essential Workation Checklist
      1. **High-Speed Optical Fiber Internet**: Essential for seamless video calls. Draft Hotel provides 100+ Mbps dual-band fiber connection.
      2. **Power Backup & Ergonomic Seating**: Stay uninterrupted regardless of mountain weather.
      3. **Fresh Culinary Options**: From Himachali Siddu and local thalis to artisan espresso and wood-fired pizzas at Draft Café.

      ### Hidden Gems to Explore After Work
      - **Gunehar River Bed Walk**: A tranquil 20-minute walk from Bir.
      - **Chokling Monastery Stupa**: Ideal for quiet evening meditation.
      - **Sunset Point**: Sip hot tea as the sky turns gold and purple.
    `
  },
  {
    slug: "how-to-plan-3-day-weekend-trip-to-bir-from-delhi",
    title: "How to Plan a Perfect 3-Day Weekend Trip to Bir Billing from Delhi",
    excerpt: "Complete itinerary for an unforgettable weekend escape: Volvo bus bookings, itinerary breakdown, cost estimation, and local dining tips.",
    readTime: "7 min read",
    publishedDate: "February 2, 2026",
    author: "Draft Mountain Team",
    category: "Itineraries & Tips",
    image: "/images/collection/Outdoor%20View%20/20260712_192922.jpg",
    content: `
      Escaping the city hustle for a long weekend in Bir is easier than ever. Here is your step-by-step guide to spending 3 dreamy days in the mountains.

      ### Getting Here from Delhi
      - **Overnight Volvo Bus**: Departs Delhi (ISBT Kashmiri Gate / Majnu ka Tilla) around 8:00 PM and reaches Bir Chowk by 7:30 AM next morning.
      - **By Air**: Flight from Delhi to Gaggal Airport (Dharamshala/Kangra), followed by a 1.5-hour taxi ride to Bir.

      ### Day 1: Arrival, Cafe Hopping & Sunset Gliders
      - Check-in to **Draft Hotel Bir Billing** (early check-in options available).
      - Enjoy a hearty breakfast at Draft Café.
      - Take a relaxed walk to Chokling Monastery and Bir Tibetan Colony.
      - End your day watching the sunset at the landing ground.

      ### Day 2: Paragliding Adventure & Forest Waterfall Trail
      - Head up to Billing in the morning for your tandem paragliding flight.
      - Enjoy lunch at local cafes.
      - Afternoon trek to Bangoru Waterfall or Gunehar Eco Art Village.
      - Bonfire & stargazing evening back at Draft Hotel.

      ### Day 3: Souvenir Shopping & Departure
      - Morning yoga or peaceful balcony tea.
      - Buy organic Himachali tea, handmade Tibetan prayer flags, and local jams.
      - Board the evening Volvo back to Delhi.
    `
  }
];

export const TESTIMONIALS = [
  {
    quote: "Draft Hotel is hands down the best place to stay in Bir! The rooms are immaculate, the view of Dhauladhar ranges is breathtaking, and being 3 mins from the landing ground made our paragliding trip effortless.",
    author: "Aarav Sharma",
    location: "New Delhi",
    rating: 5,
    roomStayed: "Boutique Suite Room"
  },
  {
    quote: "Spent 2 weeks working remotely from Draft Hotel. The high-speed WiFi was rock solid, the coffee at Draft Cafe was amazing, and the staff treated us like family. Highly recommend!",
    author: "Priya Nair",
    location: "Bengaluru",
    rating: 5,
    roomStayed: "Standard Deluxe Room"
  },
  {
    quote: "We stayed in the Grand Double Family Suite with our kids and parents. So spacious, clean, and warm! Waking up to paragliders floating over the mountains was unforgettable.",
    author: "Vikram & Neha Kapoor",
    location: "Chandigarh",
    rating: 5,
    roomStayed: "Grand Double Family Suite"
  }
];

export const FAQS = [
  {
    question: "How far is Draft Hotel from the Bir Paragliding Landing Site?",
    answer: "Draft Hotel Bir Billing is located just 3 to 5 minutes walk from the famous Bir Paragliding Landing Ground, making it incredibly convenient to watch gliders, catch sunsets, or land right near your room."
  },
  {
    question: "Do you help arrange tandem paragliding flights and pilot bookings?",
    answer: "Yes! We partner directly with certified, highly experienced tandem paragliding pilots. We can arrange your flight pickup from Billing, safety harness check, GoPro video recording, and smooth landing."
  },
  {
    question: "Is high-speed WiFi available for workation guests?",
    answer: "Absolutely. We offer high-speed optical fiber WiFi (100+ Mbps) with power backup across all rooms, balconies, and Draft Café, making us a top choice for remote workers and digital nomads."
  },
  {
    question: "What food options are available at Draft Café?",
    answer: "Draft Café serves freshly brewed artisan coffees, organic teas, healthy breakfast bowls, Himachali local specialties, continental snacks, pastas, sandwiches, and wood-fired style pizzas."
  },
  {
    question: "How can I book a room or inquire about rates?",
    answer: "You can book directly by calling us at +91 78075 85316 or messaging us on WhatsApp. Booking directly guarantees the best available rates and custom stay packages."
  }
];
