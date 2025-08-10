export const productPlaceholders: {
  [productId: string]: {
    primaryUseCase: string
    secondaryUseCase: string
    preferredFeatures: string
  }
} = {
  // Electronics
  smartphone: {
    primaryUseCase: "e.g., Daily communication, Photography, Social media",
    secondaryUseCase: "e.g., Gaming, Content creation, Navigation",
    preferredFeatures: "e.g., High-resolution camera, Long battery life, Fast processor, AMOLED display",
  },
  laptop: {
    primaryUseCase: "e.g., Office work, Programming, Video editing",
    secondaryUseCase: "e.g., Gaming, Online learning, Graphic design",
    preferredFeatures: "e.g., Powerful CPU, Dedicated GPU, Large RAM, SSD storage, Backlit keyboard",
  },
  "desktop-computer": {
    primaryUseCase: "e.g., High-performance computing, Gaming, Professional design",
    secondaryUseCase: "e.g., Home office, Media consumption",
    preferredFeatures: "e.g., Latest generation processor, Expandable RAM, Liquid cooling, Multiple storage drives",
  },
  tablet: {
    primaryUseCase: "e.g., Content consumption, E-reading, Light productivity",
    secondaryUseCase: "e.g., Digital art, Note-taking, Portable gaming",
    preferredFeatures: "e.g., High-resolution display, Long battery life, Stylus support, Lightweight design",
  },
  "smart-tv": {
    primaryUseCase: "e.g., Streaming movies/shows, Gaming, Home entertainment",
    secondaryUseCase: "e.g., Smart home hub, Video calls",
    preferredFeatures: "e.g., 4K/8K resolution, HDR support, Smart OS (Android TV/WebOS), Multiple HDMI ports",
  },
  headphones: {
    primaryUseCase: "e.g., Music listening, Commuting, Noise cancellation",
    secondaryUseCase: "e.g., Gaming, Studio monitoring, Calls",
    preferredFeatures: "e.g., Active noise cancellation, High-fidelity audio, Comfortable earcups, Long battery life",
  },
  earbuds: {
    primaryUseCase: "e.g., On-the-go music, Workouts, Hands-free calls",
    secondaryUseCase: "e.g., Noise cancellation, Transparency mode",
    preferredFeatures: "e.g., True wireless, Secure fit, Water resistance, Good microphone quality, Fast charging",
  },
  "smart-watch": {
    primaryUseCase: "e.g., Fitness tracking, Notifications, Timekeeping",
    secondaryUseCase: "e.g., Health monitoring (ECG, SpO2), GPS tracking, Mobile payments",
    preferredFeatures: "e.g., AMOLED display, Long battery life, Heart rate monitor, GPS, Water resistance",
  },
  camera: {
    primaryUseCase: "e.g., Photography, Videography, Vlogging",
    secondaryUseCase: "e.g., Professional shoots, Travel photography",
    preferredFeatures:
      "e.g., High megapixel count, 4K video, Image stabilization, Interchangeable lenses, Fast autofocus",
  },
  "gaming-console": {
    primaryUseCase: "e.g., Playing video games, Online multiplayer",
    secondaryUseCase: "e.g., Media streaming, Blu-ray playback",
    preferredFeatures:
      "e.g., 4K gaming, High frame rates, Large storage, Exclusive game titles, Backward compatibility",
  },
  speaker: {
    primaryUseCase: "e.g., Music playback, Home audio, Party entertainment",
    secondaryUseCase: "e.g., Portable use, Smart assistant integration",
    preferredFeatures: "e.g., High bass, Clear vocals, Bluetooth connectivity, Water resistance, Multi-room audio",
  },
  router: {
    primaryUseCase: "e.g., Home internet, Wi-Fi coverage, Multiple device support",
    secondaryUseCase: "e.g., Gaming, Streaming 4K content, Smart home devices",
    preferredFeatures: "e.g., Wi-Fi 6/7, Mesh capability, Gigabit Ethernet ports, Parental controls, Easy setup",
  },
  "power-bank": {
    primaryUseCase: "e.g., Charging mobile devices on-the-go, Emergency power",
    secondaryUseCase: "e.g., Charging laptops, Multiple device charging",
    preferredFeatures: "e.g., High capacity (mAh), Fast charging (PD/QC), Multiple output ports, Compact size",
  },
  keyboard: {
    primaryUseCase: "e.g., Typing, Gaming, Programming",
    secondaryUseCase: "e.g., Ergonomics, Customization",
    preferredFeatures: "e.g., Mechanical switches, Backlighting (RGB), Wireless connectivity, Programmable macros",
  },
  mouse: {
    primaryUseCase: "e.g., Navigation, Gaming, Graphic design",
    secondaryUseCase: "e.g., Ergonomics, Precision",
    preferredFeatures: "e.g., High DPI, Programmable buttons, Wireless, Ergonomic design, Long battery life",
  },

  // Home Appliances
  refrigerator: {
    primaryUseCase: "e.g., Food preservation, Daily use",
    secondaryUseCase: "e.g., Ice dispenser, Smart features, Large capacity",
    preferredFeatures: "e.g., Frost-free, Inverter compressor, Multi-door, Water dispenser, Convertible freezer",
  },
  "washing-machine": {
    primaryUseCase: "e.g., Laundry, Clothes cleaning",
    secondaryUseCase: "e.g., Quick wash, Delicate cycles, Energy efficiency",
    preferredFeatures: "e.g., Front-load/Top-load, Inverter motor, Steam wash, Child lock, High spin speed",
  },
  "air-conditioner": {
    primaryUseCase: "e.g., Cooling, Temperature control",
    secondaryUseCase: "e.g., Heating, Air purification, Energy saving",
    preferredFeatures: "e.g., Inverter technology, High star rating, Sleep mode, Anti-bacterial filter, Wi-Fi control",
  },
  microwave: {
    primaryUseCase: "e.g., Reheating food, Defrosting",
    secondaryUseCase: "e.g., Grilling, Baking, Convection cooking",
    preferredFeatures: "e.g., Convection, Grill function, Child lock, Auto cook menus, Large capacity",
  },
  dishwasher: {
    primaryUseCase: "e.g., Dish cleaning, Time saving",
    secondaryUseCase: "e.g., Sanitization, Energy efficiency",
    preferredFeatures: "e.g., Half-load option, Delay start, Intensive wash, Child lock, Low noise",
  },
  "vacuum-cleaner": {
    primaryUseCase: "e.g., Floor cleaning, Dust removal",
    secondaryUseCase: "e.g., Pet hair removal, Car cleaning, Wet & dry cleaning",
    preferredFeatures: "e.g., Bagless, HEPA filter, Cordless, Powerful suction, Lightweight",
  },
  "air-purifier": {
    primaryUseCase: "e.g., Air quality improvement, Allergy relief",
    secondaryUseCase: "e.g., Odor removal, Pet dander filtration",
    preferredFeatures: "e.g., HEPA filter, Activated carbon filter, CADR rating, Quiet operation, Smart features",
  },
  "water-heater": {
    primaryUseCase: "e.g., Hot water for bathing, Kitchen use",
    secondaryUseCase: "e.g., Energy efficiency, Instant heating",
    preferredFeatures: "e.g., Storage/Instant, BEE star rating, Glass-lined tank, Safety features, Digital display",
  },
  "induction-cooktop": {
    primaryUseCase: "e.g., Fast cooking, Energy efficient cooking",
    secondaryUseCase: "e.g., Portable cooking, Safety features",
    preferredFeatures: "e.g., Multiple cooking zones, Touch controls, Auto shut-off, Child lock, Preset menus",
  },
  "food-processor": {
    primaryUseCase: "e.g., Chopping, Slicing, Grating",
    secondaryUseCase: "e.g., Dough kneading, Juicing, Blending",
    preferredFeatures: "e.g., Multiple attachments, Powerful motor, Safety lock, Easy to clean, Compact design",
  },
  "mixer-grinder": {
    primaryUseCase: "e.g., Grinding spices, Blending smoothies",
    secondaryUseCase: "e.g., Juicing, Wet grinding, Chutney making",
    preferredFeatures: "e.g., Multiple jars, Powerful motor, Overload protection, Durable blades, Compact design",
  },
  iron: {
    primaryUseCase: "e.g., Ironing clothes, Wrinkle removal",
    secondaryUseCase: "e.g., Steam ironing, Vertical steaming",
    preferredFeatures: "e.g., Steam/Dry, Non-stick soleplate, Auto shut-off, Anti-drip, Vertical steam",
  },
  "ceiling-fan": {
    primaryUseCase: "e.g., Air circulation, Cooling",
    secondaryUseCase: "e.g., Energy efficiency, Aesthetic appeal",
    preferredFeatures: "e.g., High air delivery, Remote control, Inverter motor, Decorative design, LED light",
  },

  // Clothing & Fashion
  "t-shirt": {
    primaryUseCase: "e.g., Casual wear, Everyday comfort",
    secondaryUseCase: "e.g., Workout, Layering",
    preferredFeatures: "e.g., 100% cotton, Breathable fabric, Regular fit, Crew neck, Durable stitching",
  },
  jeans: {
    primaryUseCase: "e.g., Casual wear, Durable everyday pants",
    secondaryUseCase: "e.g., Workwear, Fashion statement",
    preferredFeatures: "e.g., Stretch denim, Slim fit, High-waist, Distressed look, Classic blue wash",
  },
  dress: {
    primaryUseCase: "e.g., Party wear, Casual outing, Formal event",
    secondaryUseCase: "e.g., Office wear, Beachwear",
    preferredFeatures: "e.g., Floral print, A-line, Midi length, Breathable fabric, Comfortable fit",
  },
  shoes: {
    primaryUseCase: "e.g., Everyday walking, Casual outings",
    secondaryUseCase: "e.g., Formal events, Sports activities",
    preferredFeatures: "e.g., Comfortable sole, Durable material, Slip-on, Lace-up, Good arch support",
  },
  sneakers: {
    primaryUseCase: "e.g., Casual wear, Sports activities, Walking",
    secondaryUseCase: "e.g., Running, Gym workouts",
    preferredFeatures: "e.g., Cushioned sole, Breathable upper, Lightweight, Stylish design, Good grip",
  },
  "formal-shoes": {
    primaryUseCase: "e.g., Office wear, Formal events, Weddings",
    secondaryUseCase: "e.g., Business casual",
    preferredFeatures: "e.g., Leather material, Oxford/Derby style, Comfortable fit, Durable sole, Polished finish",
  },
  jacket: {
    primaryUseCase: "e.g., Winter warmth, Rain protection, Fashion statement",
    secondaryUseCase: "e.g., Sports, Travel",
    preferredFeatures: "e.g., Waterproof, Padded, Hooded, Lightweight, Multiple pockets",
  },
  shirt: {
    primaryUseCase: "e.g., Office wear, Casual outings, Formal events",
    secondaryUseCase: "e.g., Party wear, Travel",
    preferredFeatures: "e.g., Cotton fabric, Slim fit, Full sleeves, Checkered pattern, Breathable",
  },
  shorts: {
    primaryUseCase: "e.g., Casual wear, Summer comfort, Sports",
    secondaryUseCase: "e.g., Beachwear, Loungewear",
    preferredFeatures: "e.g., Cotton material, Elastic waistband, Multiple pockets, Knee-length, Quick-dry",
  },
  saree: {
    primaryUseCase: "e.g., Festive occasions, Weddings, Traditional events",
    secondaryUseCase: "e.g., Daily wear, Office wear",
    preferredFeatures: "e.g., Silk/Cotton, Handloom, Embroidered, Lightweight, Easy to drape",
  },
  kurta: {
    primaryUseCase: "e.g., Casual wear, Festive occasions, Daily comfort",
    secondaryUseCase: "e.g., Office wear, Travel",
    preferredFeatures: "e.g., Cotton/Linen, Straight fit, Embroidered, Full sleeves, Comfortable",
  },
  watch: {
    primaryUseCase: "e.g., Timekeeping, Fashion accessory",
    secondaryUseCase: "e.g., Fitness tracking, Smart features",
    preferredFeatures: "e.g., Analog/Digital, Water resistant, Leather strap, Stainless steel case, Chronograph",
  },
  sunglasses: {
    primaryUseCase: "e.g., Sun protection, Fashion accessory",
    secondaryUseCase: "e.g., Driving, Sports",
    preferredFeatures: "e.g., UV protection, Polarized lenses, Aviator/Wayfarer style, Lightweight frame",
  },
  handbag: {
    primaryUseCase: "e.g., Carrying essentials, Fashion accessory",
    secondaryUseCase: "e.g., Travel, Work",
    preferredFeatures: "e.g., Leather, Multiple compartments, Crossbody, Shoulder strap, Zipper closure",
  },
  wallet: {
    primaryUseCase: "e.g., Storing cash/cards, Organization",
    secondaryUseCase: "e.g., Travel, Minimalist carry",
    preferredFeatures: "e.g., Leather, Bi-fold/Tri-fold, RFID protection, Coin pocket, Multiple card slots",
  },

  // Sports & Outdoors
  "running-shoes": {
    primaryUseCase: "e.g., Daily runs, Marathon training, Trail running",
    secondaryUseCase: "e.g., Gym workouts, Casual wear, Walking",
    preferredFeatures: "e.g., Cushioned sole, Breathable upper, Lightweight, Good grip, Stability control",
  },
  "gym-equipment": {
    primaryUseCase: "e.g., Home workouts, Strength training, Cardio",
    secondaryUseCase: "e.g., Full body workout, Space-saving design",
    preferredFeatures: "e.g., Multi-functional, Durable, Compact, Easy to assemble, Digital display",
  },
  bicycle: {
    primaryUseCase: "e.g., Commuting, Fitness, Leisure riding",
    secondaryUseCase: "e.g., Mountain biking, Road cycling, Touring",
    preferredFeatures: "e.g., Lightweight frame, Multiple gears, Disc brakes, Comfortable seat, Suspension",
  },
  treadmill: {
    primaryUseCase: "e.g., Cardio workouts, Running indoors",
    secondaryUseCase: "e.g., Walking, Incline training",
    preferredFeatures: "e.g., Foldable, Motorized, Heart rate monitor, Preset programs, Cushioned deck",
  },
  "yoga-mat": {
    primaryUseCase: "e.g., Yoga practice, Pilates, Floor exercises",
    secondaryUseCase: "e.g., Meditation, Stretching",
    preferredFeatures: "e.g., Non-slip, Good cushioning, Lightweight, Durable, Easy to clean",
  },
  "cricket-bat": {
    primaryUseCase: "e.g., Playing cricket, Batting practice",
    secondaryUseCase: "e.g., Professional matches, Casual play",
    preferredFeatures: "e.g., English willow, Lightweight, Good balance, Large sweet spot, Durable handle",
  },
  football: {
    primaryUseCase: "e.g., Playing football, Training",
    secondaryUseCase: "e.g., Casual kickabouts, Professional matches",
    preferredFeatures: "e.g., Durable outer, Good grip, Official size, Water resistant, Good air retention",
  },
  "badminton-racket": {
    primaryUseCase: "e.g., Playing badminton, Training",
    secondaryUseCase: "e.g., Professional matches, Casual play",
    preferredFeatures: "e.g., Lightweight, Carbon fiber, Good balance, High string tension, Durable frame",
  },
  "tennis-racket": {
    primaryUseCase: "e.g., Playing tennis, Training",
    secondaryUseCase: "e.g., Professional matches, Casual play",
    preferredFeatures: "e.g., Lightweight, Head size, Grip size, Balance point, Vibration dampening",
  },
  "camping-tent": {
    primaryUseCase: "e.g., Camping, Outdoor adventures, Shelter",
    secondaryUseCase: "e.g., Backpacking, Family trips",
    preferredFeatures: "e.g., Waterproof, Easy setup, Lightweight, Good ventilation, Multiple person capacity",
  },
  backpack: {
    primaryUseCase: "e.g., Carrying essentials, Travel, Hiking",
    secondaryUseCase: "e.g., Laptop carry, Daily commute",
    preferredFeatures:
      "e.g., Water resistant, Multiple compartments, Padded laptop sleeve, Comfortable straps, Durable material",
  },
  "water-bottle": {
    primaryUseCase: "e.g., Hydration, Carrying drinks",
    secondaryUseCase: "e.g., Gym, Travel, Outdoor activities",
    preferredFeatures: "e.g., Leak-proof, Insulated, Stainless steel, Wide mouth, Easy to clean",
  },
  "fitness-tracker": {
    primaryUseCase: "e.g., Step counting, Calorie tracking, Sleep monitoring",
    secondaryUseCase: "e.g., Heart rate monitoring, GPS tracking, Smart notifications",
    preferredFeatures: "e.g., Long battery life, Water resistant, Accurate sensors, Comfortable fit, App integration",
  },

  // Health & Beauty
  "skincare-product": {
    primaryUseCase: "e.g., Acne treatment, Anti-aging, Hydration",
    secondaryUseCase: "e.g., Sun protection, Brightening, Sensitive skin",
    preferredFeatures: "e.g., Non-comedogenic, SPF 30+, Hyaluronic acid, Vitamin C, Fragrance-free",
  },
  makeup: {
    primaryUseCase: "e.g., Daily wear, Special occasions, Enhancing features",
    secondaryUseCase: "e.g., Long-lasting, Waterproof",
    preferredFeatures: "e.g., Matte finish, Full coverage, Hypoallergenic, Cruelty-free, Wide shade range",
  },
  "hair-care-product": {
    primaryUseCase: "e.g., Hair cleansing, Conditioning, Styling",
    secondaryUseCase: "e.g., Hair fall control, Dandruff treatment, Color protection",
    preferredFeatures:
      "e.g., Sulfate-free, Paraben-free, Natural ingredients, Suitable for oily/dry hair, Heat protection",
  },
  perfume: {
    primaryUseCase: "e.g., Daily fragrance, Special occasions",
    secondaryUseCase: "e.g., Long-lasting, Unique scent",
    preferredFeatures: "e.g., Eau de Parfum, Woody notes, Floral scent, Long-lasting, Travel size",
  },
  moisturizer: {
    primaryUseCase: "e.g., Skin hydration, Dry skin relief",
    secondaryUseCase: "e.g., Anti-aging, SPF protection, Sensitive skin",
    preferredFeatures: "e.g., Non-greasy, SPF 30+, Hyaluronic acid, Ceramides, Fragrance-free",
  },
  sunscreen: {
    primaryUseCase: "e.g., UV protection, Preventing sunburn",
    secondaryUseCase: "e.g., Anti-aging, Water resistant, Tinted",
    preferredFeatures: "e.g., SPF 50+, Broad-spectrum, Non-comedogenic, Water resistant, Mineral-based",
  },
  "face-wash": {
    primaryUseCase: "e.g., Daily cleansing, Oil control, Acne prevention",
    secondaryUseCase: "e.g., Deep cleansing, Gentle for sensitive skin",
    preferredFeatures: "e.g., Salicylic acid, Foaming, Gel-based, pH balanced, Fragrance-free",
  },
  shampoo: {
    primaryUseCase: "e.g., Hair cleansing, Scalp health",
    secondaryUseCase: "e.g., Dandruff control, Hair fall reduction, Color protection",
    preferredFeatures: "e.g., Sulfate-free, Paraben-free, Natural ingredients, Suitable for oily/dry hair, Volumizing",
  },
  "hair-dryer": {
    primaryUseCase: "e.g., Hair drying, Styling",
    secondaryUseCase: "e.g., Quick drying, Frizz control",
    preferredFeatures:
      "e.g., Ionic technology, Multiple heat settings, Cool shot button, Lightweight, Diffuser attachment",
  },
  "electric-toothbrush": {
    primaryUseCase: "e.g., Oral hygiene, Effective cleaning",
    secondaryUseCase: "e.g., Gum health, Whitening",
    preferredFeatures: "e.g., Sonic/Oscillating, Pressure sensor, Multiple brushing modes, Long battery life, Timer",
  },
  "massage-gun": {
    primaryUseCase: "e.g., Muscle recovery, Pain relief, Relaxation",
    secondaryUseCase: "e.g., Pre-workout warm-up, Post-workout cool-down",
    preferredFeatures:
      "e.g., Multiple speed settings, Interchangeable heads, Quiet operation, Long battery life, Portable",
  },
  "weighing-scale": {
    primaryUseCase: "e.g., Weight tracking, Fitness monitoring",
    secondaryUseCase: "e.g., Body fat analysis, Muscle mass tracking, Smart features",
    preferredFeatures:
      "e.g., Digital display, High accuracy, Bluetooth connectivity, Body composition analysis, Large platform",
  },

  // Books & Media
  "fiction-book": {
    primaryUseCase: "e.g., Entertainment, Escapism, Storytelling",
    secondaryUseCase: "e.g., Literary analysis, Book club discussions",
    preferredFeatures: "e.g., Engaging plot, Strong character development, Unique world-building, Fast-paced",
  },
  "non-fiction-book": {
    primaryUseCase: "e.g., Learning, Information gathering, Skill development",
    secondaryUseCase: "e.g., Research, Personal growth",
    preferredFeatures:
      "e.g., Well-researched, Clear explanations, Practical advice, Engaging writing style, Expert author",
  },
  "educational-book": {
    primaryUseCase: "e.g., Academic study, Exam preparation, Skill development",
    secondaryUseCase: "e.g., Self-study, Reference material",
    preferredFeatures:
      "e.g., Comprehensive content, Practice questions, Clear diagrams, Latest edition, Solved examples",
  },
  "comic-book": {
    primaryUseCase: "e.g., Entertainment, Storytelling, Collecting",
    secondaryUseCase: "e.g., Art appreciation, Character study",
    preferredFeatures:
      "e.g., Engaging artwork, Compelling storyline, Popular characters, Collectible edition, Graphic novel format",
  },
  magazine: {
    primaryUseCase: "e.g., Current affairs, Hobbies, Entertainment",
    secondaryUseCase: "e.g., Fashion trends, Industry insights",
    preferredFeatures:
      "e.g., Monthly subscription, High-quality images, Diverse topics, Expert articles, Digital access",
  },
  "e-reader": {
    primaryUseCase: "e.g., Reading digital books, Portable library",
    secondaryUseCase: "e.g., Note-taking, Dictionary lookup, Long battery life",
    preferredFeatures: "e.g., E-ink display, Backlight, Lightweight, Large storage, Wi-Fi connectivity",
  },
  audiobook: {
    primaryUseCase: "e.g., Listening to books on-the-go, Multitasking",
    secondaryUseCase: "e.g., Learning, Entertainment during commute",
    preferredFeatures: "e.g., Professional narration, Full-length, Offline playback, Chapter navigation, Speed control",
  },
  "board-game-toys": {
    primaryUseCase: "e.g., Family entertainment, Social gathering, Strategic thinking",
    secondaryUseCase: "e.g., Party game, Educational play",
    preferredFeatures: "e.g., Easy to learn, Replayable, Good for groups, Strategic depth, High-quality components",
  },
  "puzzle-toys": {
    primaryUseCase: "e.g., Mental stimulation, Relaxation, Problem-solving",
    secondaryUseCase: "e.g., Family activity, Decorative display",
    preferredFeatures: "e.g., High piece count, Unique image, Durable pieces, Interlocking fit, Challenging",
  },
  "art-supplies": {
    primaryUseCase: "e.g., Drawing, Painting, Crafting",
    secondaryUseCase: "e.g., Professional art, Hobbyist use",
    preferredFeatures: "e.g., High pigment, Non-toxic, Wide color range, Easy to blend, Durable",
  },

  // Automotive
  car: {
    primaryUseCase: "e.g., Daily commute, Family travel, Long drives",
    secondaryUseCase: "e.g., Off-roading, City driving, Cargo transport",
    preferredFeatures:
      "e.g., High fuel efficiency, Safety features, Spacious interior, Infotainment system, Automatic transmission",
  },
  motorcycle: {
    primaryUseCase: "e.g., Commuting, Leisure riding, Touring",
    secondaryUseCase: "e.g., Off-roading, Sport riding",
    preferredFeatures: "e.g., High mileage, Comfortable seating, ABS, Powerful engine, Stylish design",
  },
  "car-accessories": {
    primaryUseCase: "e.g., Enhancing car functionality, Interior comfort",
    secondaryUseCase: "e.g., Safety, Aesthetics",
    preferredFeatures: "e.g., Dash cam, Car charger, Seat covers, Floor mats, Air freshener",
  },
  helmet: {
    primaryUseCase: "e.g., Safety for riding, Head protection",
    secondaryUseCase: "e.g., Aerodynamics, Comfort",
    preferredFeatures: "e.g., ISI certified, Full face, Lightweight, Good ventilation, Anti-scratch visor",
  },
  "car-care-products": {
    primaryUseCase: "e.g., Car cleaning, Maintenance, Detailing",
    secondaryUseCase: "e.g., Paint protection, Interior cleaning",
    preferredFeatures: "e.g., Car shampoo, Wax, Tire cleaner, Interior cleaner, Microfiber cloths",
  },
  "gps-navigator": {
    primaryUseCase: "e.g., Navigation, Route guidance, Travel",
    secondaryUseCase: "e.g., Traffic updates, Speed alerts",
    preferredFeatures: "e.g., Real-time traffic, Voice guidance, Large screen, Offline maps, Lifetime map updates",
  },
  "dash-cam": {
    primaryUseCase: "e.g., Recording driving, Accident evidence, Security",
    secondaryUseCase: "e.g., Parking monitoring, Loop recording",
    preferredFeatures: "e.g., Full HD, Wide-angle lens, G-sensor, Loop recording, Night vision",
  },
  "car-charger": {
    primaryUseCase: "e.g., Charging mobile devices in car, Powering accessories",
    secondaryUseCase: "e.g., Fast charging, Multiple device charging",
    preferredFeatures: "e.g., Fast charging (PD/QC), Multiple USB ports, Compact design, Overcharge protection",
  },
  "seat-covers": {
    primaryUseCase: "e.g., Protecting car seats, Interior aesthetics",
    secondaryUseCase: "e.g., Comfort, Easy to clean",
    preferredFeatures: "e.g., Leatherette, Custom fit, Water resistant, Easy to install, Airbag compatible",
  },
  "floor-mats": {
    primaryUseCase: "e.g., Protecting car floor, Keeping interior clean",
    secondaryUseCase: "e.g., All-weather protection, Custom fit",
    preferredFeatures: "e.g., All-weather, Custom fit, Anti-slip, Easy to clean, Durable material",
  },

  // Home & Garden
  furniture: {
    primaryUseCase: "e.g., Home decor, Seating, Storage",
    secondaryUseCase: "e.g., Space-saving, Multi-functional",
    preferredFeatures: "e.g., Solid wood, Modern design, Comfortable, Durable, Easy to assemble",
  },
  sofa: {
    primaryUseCase: "e.g., Seating for guests, Relaxation, Living room centerpiece",
    secondaryUseCase: "e.g., Napping, Reading, Watching TV",
    preferredFeatures:
      "e.g., Comfortable cushioning, Durable fabric, Modular design, Reclining function, Storage options",
  },
  bed: {
    primaryUseCase: "e.g., Sleeping, Relaxation, Bedroom centerpiece",
    secondaryUseCase: "e.g., Storage, Guest bed",
    preferredFeatures:
      "e.g., King/Queen size, Storage (hydraulic/drawer), Solid wood, Comfortable headboard, Easy to assemble",
  },
  "dining-table": {
    primaryUseCase: "e.g., Dining, Family meals, Gathering space",
    secondaryUseCase: "e.g., Workstation, Board games",
    preferredFeatures: "e.g., Solid wood, Extendable, Seating capacity, Durable finish, Easy to clean",
  },
  chair: {
    primaryUseCase: "e.g., Seating, Ergonomic support, Desk use",
    secondaryUseCase: "e.g., Dining, Accent piece",
    preferredFeatures: "e.g., Ergonomic, Comfortable cushioning, Adjustable height, Swivel, Lumbar support",
  },
  wardrobe: {
    primaryUseCase: "e.g., Clothes storage, Organization, Bedroom furniture",
    secondaryUseCase: "e.g., Mirror, Drawers",
    preferredFeatures: "e.g., Multiple compartments, Sliding doors, Mirror, Durable material, Easy to assemble",
  },
  mattress: {
    primaryUseCase: "e.g., Comfortable sleep, Back support",
    secondaryUseCase: "e.g., Pressure relief, Cooling",
    preferredFeatures: "e.g., Orthopedic, Memory foam, Spring, Medium firm, Hypoallergenic",
  },
  curtains: {
    primaryUseCase: "e.g., Privacy, Light control, Room decor",
    secondaryUseCase: "e.g., Thermal insulation, Noise reduction",
    preferredFeatures: "e.g., Blackout, Sheer, Cotton/Linen, Rod pocket, Easy to wash",
  },
  lighting: {
    primaryUseCase: "e.g., Illumination, Ambiance, Room decor",
    secondaryUseCase: "e.g., Energy efficiency, Smart control",
    preferredFeatures: "e.g., LED, Dimmable, Warm/Cool light, Smart features, Decorative design",
  },
  plants: {
    primaryUseCase: "e.g., Air purification, Home decor, Greenery",
    secondaryUseCase: "e.g., Stress reduction, Gifting",
    preferredFeatures: "e.g., Low maintenance, Air purifying, Indoor/Outdoor, Flowering, Pet-friendly",
  },
  "garden-tools": {
    primaryUseCase: "e.g., Gardening, Planting, Pruning",
    secondaryUseCase: "e.g., Landscaping, Soil preparation",
    preferredFeatures: "e.g., Durable material, Ergonomic handles, Rust-resistant, Multi-functional, Easy to store",
  },
  "home-decor": {
    primaryUseCase: "e.g., Enhancing home aesthetics, Personalizing space",
    secondaryUseCase: "e.g., Gifting, Thematic decoration",
    preferredFeatures: "e.g., Wall art, Vases, Candles, Cushions, Figurines",
  },

  // Toys & Games
  "action-figure": {
    primaryUseCase: "e.g., Collecting, Display, Play",
    secondaryUseCase: "e.g., Photography, Customization",
    preferredFeatures: "e.g., High articulation, Detailed sculpt, Interchangeable parts, Character accuracy",
  },
  doll: {
    primaryUseCase: "e.g., Imaginative play, Collecting, Gifting",
    secondaryUseCase: "e.g., Role-playing, Fashion styling",
    preferredFeatures: "e.g., Movable joints, Realistic features, Accessories, Durable, Popular character",
  },
  "building-blocks": {
    primaryUseCase: "e.g., Creative play, Motor skill development, Problem-solving",
    secondaryUseCase: "e.g., STEM learning, Collaborative play",
    preferredFeatures: "e.g., Large set, Compatible with other brands, Durable, Easy to assemble, Instruction manual",
  },
  "video-game": {
    primaryUseCase: "e.g., Entertainment, Storytelling, Online multiplayer",
    secondaryUseCase: "e.g., Competitive gaming, Relaxation",
    preferredFeatures: "e.g., Engaging storyline, High-quality graphics, Multiplayer mode, Open world, Cross-platform",
  },
  "educational-toy": {
    primaryUseCase: "e.g., Learning, Skill development, Cognitive growth",
    secondaryUseCase: "e.g., STEM learning, Interactive play",
    preferredFeatures: "e.g., Age-appropriate, Interactive, Durable, Promotes critical thinking, Fun learning",
  },
  "remote-control-toy": {
    primaryUseCase: "e.g., Outdoor play, Entertainment, Skill development",
    secondaryUseCase: "e.g., Racing, Stunts",
    preferredFeatures: "e.g., Durable, Long battery life, Easy to control, High speed, Off-road capability",
  },
  "art-craft-kit": {
    primaryUseCase: "e.g., Creative expression, Hobby, Skill development",
    secondaryUseCase: "e.g., Gifting, Group activity",
    preferredFeatures:
      "e.g., Non-toxic, Multiple projects, Easy to follow instructions, Variety of materials, Age-appropriate",
  },
  "musical-toy": {
    primaryUseCase: "e.g., Musical exploration, Sensory development, Entertainment",
    secondaryUseCase: "e.g., Learning instruments, Rhythm development",
    preferredFeatures: "e.g., Multiple instruments, Durable, Safe for kids, Realistic sounds, Volume control",
  },

  // Food & Beverages
  snacks: {
    primaryUseCase: "e.g., Quick energy boost, Hunger pangs, Entertainment",
    secondaryUseCase: "e.g., Party food, Travel snack",
    preferredFeatures: "e.g., Low sugar, High protein, Gluten-free, Natural ingredients, Crunchy texture",
  },
  beverages: {
    primaryUseCase: "e.g., Hydration, Refreshment, Energy boost",
    secondaryUseCase: "e.g., Party drinks, Health benefits",
    preferredFeatures: "e.g., Low sugar, Natural flavors, Carbonated/Still, Vitamin enriched, Convenient packaging",
  },
  tea: {
    primaryUseCase: "e.g., Daily beverage, Relaxation, Health benefits",
    secondaryUseCase: "e.g., Energy boost, Digestive aid",
    preferredFeatures: "e.g., Green tea, Black tea, Herbal tea, Organic, Loose leaf/Tea bags",
  },
  coffee: {
    primaryUseCase: "e.g., Energy boost, Daily ritual, Flavor enjoyment",
    secondaryUseCase: "e.g., Socializing, Dessert pairing",
    preferredFeatures: "e.g., Arabica/Robusta, Dark roast, Instant/Ground, Organic, Low acidity",
  },
  spices: {
    primaryUseCase: "e.g., Cooking, Flavor enhancement, Traditional recipes",
    secondaryUseCase: "e.g., Health benefits, Gifting",
    preferredFeatures: "e.g., Organic, Whole/Ground, Aromatic, Freshly packed, Authentic blend",
  },
  "cooking-oil": {
    primaryUseCase: "e.g., Frying, Sautéing, Baking",
    secondaryUseCase: "e.g., Health benefits, Flavor enhancement",
    preferredFeatures: "e.g., Refined/Cold-pressed, Low cholesterol, High smoke point, Rich in Omega-3, Neutral flavor",
  },
  "breakfast-cereal": {
    primaryUseCase: "e.g., Quick breakfast, Energy for the day",
    secondaryUseCase: "e.g., Healthy snack, Fiber intake",
    preferredFeatures: "e.g., High fiber, Low sugar, Whole grains, Fortified with vitamins, Crunchy texture",
  },
  "protein-supplement": {
    primaryUseCase: "e.g., Muscle building, Post-workout recovery, Dietary supplement",
    secondaryUseCase: "e.g., Weight management, Meal replacement",
    preferredFeatures: "e.g., Whey/Plant-based, High protein content, Low carb, Good flavor, Easy to mix",
  },
  "health-drink": {
    primaryUseCase: "e.g., Nutritional supplement, Energy boost, Immunity support",
    secondaryUseCase: "e.g., Weight management, Bone health",
    preferredFeatures: "e.g., Vitamin enriched, High protein, Low sugar, Natural ingredients, Good taste",
  },
  "organic-food": {
    primaryUseCase: "e.g., Healthy eating, Chemical-free diet, Sustainable living",
    secondaryUseCase: "e.g., Specific dietary needs, Gifting",
    preferredFeatures: "e.g., Certified organic, Non-GMO, Fresh, Locally sourced, Wide variety",
  },
}
