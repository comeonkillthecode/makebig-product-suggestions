import type { Brand } from "@/types/product"

export const brands: Brand[] = [
  // Electronics - Smartphones
  { id: "apple", name: "Apple", productIds: ["smartphone", "tablet", "laptop", "smart-watch", "earbuds"] },
  { id: "samsung", name: "Samsung", productIds: ["smartphone", "tablet", "smart-tv", "earbuds", "smart-watch", "refrigerator"] },
  { id: "oneplus", name: "OnePlus", productIds: ["smartphone", "earbuds", "smart-tv", "smart-watch"] },
  { id: "xiaomi", name: "Xiaomi", productIds: ["smartphone", "tablet", "smart-tv", "earbuds", "power-bank", "router"] },
  { id: "oppo", name: "Oppo", productIds: ["smartphone", "earbuds", "smart-watch"] },
  { id: "vivo", name: "Vivo", productIds: ["smartphone", "earbuds"] },
  { id: "realme", name: "Realme", productIds: ["smartphone", "earbuds", "smart-tv", "power-bank"] },
  { id: "google", name: "Google", productIds: ["smartphone", "tablet"] },
  { id: "nothing", name: "Nothing", productIds: ["smartphone", "earbuds"] },
  { id: "motorola", name: "Motorola", productIds: ["smartphone"] },
  { id: "nokia", name: "Nokia", productIds: ["smartphone"] },

  // Electronics - Laptops & Computers
  { id: "dell", name: "Dell", productIds: ["laptop", "desktop-computer", "keyboard", "mouse"] },
  { id: "hp", name: "HP", productIds: ["laptop", "desktop-computer", "keyboard", "mouse"] },
  { id: "lenovo", name: "Lenovo", productIds: ["laptop", "desktop-computer", "tablet", "keyboard", "mouse"] },
  { id: "asus", name: "Asus", productIds: ["laptop", "desktop-computer", "router", "keyboard", "mouse"] },
  { id: "acer", name: "Acer", productIds: ["laptop", "desktop-computer"] },
  { id: "msi", name: "MSI", productIds: ["laptop", "desktop-computer", "keyboard", "mouse"] },
  { id: "alienware", name: "Alienware", productIds: ["laptop", "desktop-computer"] },
  { id: "razer", name: "Razer", productIds: ["laptop", "keyboard", "mouse", "headphones"] },
  { id: "microsoft", name: "Microsoft", productIds: ["laptop", "tablet", "gaming-console"] },

  // Electronics - Audio
  {
    id: "sony",
    name: "Sony",
    productIds: ["headphones", "earbuds", "speaker", "camera", "smart-tv", "gaming-console"],
  },
  { id: "bose", name: "Bose", productIds: ["headphones", "earbuds", "speaker"] },
  { id: "sennheiser", name: "Sennheiser", productIds: ["headphones", "earbuds"] },
  { id: "jbl", name: "JBL", productIds: ["headphones", "earbuds", "speaker"] },
  { id: "beats", name: "Beats", productIds: ["headphones", "earbuds"] },
  { id: "boat", name: "boAt", productIds: ["headphones", "earbuds", "speaker", "smart-watch", "power-bank"] },

  // Electronics - TV & Display
  { id: "lg", name: "LG", productIds: ["smart-tv", "refrigerator", "washing-machine", "air-conditioner", "microwave"] },
  { id: "tcl", name: "TCL", productIds: ["smart-tv"] },
  { id: "hisense", name: "Hisense", productIds: ["smart-tv"] },
  { id: "panasonic", name: "Panasonic", productIds: ["smart-tv", "microwave", "air-conditioner", "camera"] },

  // Electronics - Gaming
  { id: "nintendo", name: "Nintendo", productIds: ["gaming-console"] },
  { id: "valve", name: "Valve", productIds: ["gaming-console"] },

  // Electronics - Networking
  { id: "tp-link", name: "TP-Link", productIds: ["router"] },
  { id: "netgear", name: "Netgear", productIds: ["router"] },
  { id: "linksys", name: "Linksys", productIds: ["router"] },
  { id: "d-link", name: "D-Link", productIds: ["router"] },

  // Electronics - Accessories
  { id: "anker", name: "Anker", productIds: ["power-bank", "car-charger"] },
  { id: "logitech", name: "Logitech", productIds: ["keyboard", "mouse"] },
  { id: "corsair", name: "Corsair", productIds: ["keyboard", "mouse", "desktop-computer"] },
  { id: "steelseries", name: "SteelSeries", productIds: ["keyboard", "mouse", "headphones"] },
  { id: "hyperx", name: "HyperX", productIds: ["keyboard", "mouse", "headphones"] },

  // Home Appliances
  { id: "whirlpool", name: "Whirlpool", productIds: ["refrigerator", "washing-machine", "microwave", "dishwasher"] },
  { id: "godrej", name: "Godrej", productIds: ["refrigerator", "washing-machine", "air-conditioner", "microwave"] },
  { id: "haier", name: "Haier", productIds: ["refrigerator", "washing-machine", "air-conditioner"] },
  { id: "bosch", name: "Bosch", productIds: ["refrigerator", "washing-machine", "dishwasher", "food-processor"] },
  { id: "ifb", name: "IFB", productIds: ["washing-machine", "microwave", "dishwasher"] },
  { id: "daikin", name: "Daikin", productIds: ["air-conditioner"] },
  { id: "voltas", name: "Voltas", productIds: ["air-conditioner", "refrigerator", "dishwasher"] },
  { id: "blue-star", name: "Blue Star", productIds: ["air-conditioner"] },
  { id: "carrier", name: "Carrier", productIds: ["air-conditioner"] },
  { id: "hitachi", name: "Hitachi", productIds: ["air-conditioner", "refrigerator"] },

  // Home Appliances - Small Appliances
  {
    id: "bajaj",
    name: "Bajaj",
    productIds: ["microwave", "mixer-grinder", "iron", "ceiling-fan", "water-heater", "induction-cooktop"],
  },
  { id: "prestige", name: "Prestige", productIds: ["induction-cooktop", "food-processor", "mixer-grinder"] },
  {
    id: "philips",
    name: "Philips",
    productIds: [
      "microwave",
      "food-processor",
      "mixer-grinder",
      "iron",
      "air-purifier",
      "hair-dryer",
      "electric-toothbrush",
    ],
  },
  { id: "morphy-richards", name: "Morphy Richards", productIds: ["microwave", "food-processor", "iron"] },
  {
    id: "havells",
    name: "Havells",
    productIds: ["ceiling-fan", "water-heater", "induction-cooktop", "iron", "hair-dryer"],
  },
  { id: "crompton", name: "Crompton", productIds: ["ceiling-fan", "water-heater", "induction-cooktop", "iron"] },
  { id: "usha", name: "Usha", productIds: ["ceiling-fan", "water-heater", "iron"] },
  { id: "orient", name: "Orient", productIds: ["ceiling-fan", "water-heater", "iron"] },

  // Home Appliances - Cleaning
  { id: "dyson", name: "Dyson", productIds: ["vacuum-cleaner", "air-purifier", "hair-dryer"] },
  { id: "eureka-forbes", name: "Eureka Forbes", productIds: ["vacuum-cleaner", "air-purifier"] },
  { id: "black-decker", name: "Black+Decker", productIds: ["vacuum-cleaner", "iron", "garden-tools"] },
  { id: "karcher", name: "Karcher", productIds: ["vacuum-cleaner"] },
  { id: "kent", name: "Kent", productIds: ["air-purifier"] },
  { id: "honeywell", name: "Honeywell", productIds: ["air-purifier"] },
  { id: "sharp", name: "Sharp", productIds: ["air-purifier", "refrigerator"] },

  // Fashion - Sportswear
  { id: "nike", name: "Nike", productIds: ["t-shirt", "sneakers", "running-shoes", "shorts", "jacket", "football"] },
  {
    id: "adidas",
    name: "Adidas",
    productIds: ["t-shirt", "sneakers", "running-shoes", "shorts", "jacket", "football", "cricket-bat"],
  },
  { id: "puma", name: "Puma", productIds: ["t-shirt", "sneakers", "running-shoes", "shorts", "jacket", "cricket-bat"] },
  { id: "reebok", name: "Reebok", productIds: ["sneakers", "running-shoes", "shorts"] },
  { id: "under-armour", name: "Under Armour", productIds: ["t-shirt", "sneakers", "running-shoes", "shorts"] },
  { id: "fila", name: "Fila", productIds: ["sneakers", "t-shirt"] },

  // Fashion - Casual Wear
  { id: "zara", name: "Zara", productIds: ["t-shirt", "jeans", "dress", "jacket", "shirt"] },
  { id: "hm", name: "H&M", productIds: ["t-shirt", "jeans", "dress", "jacket", "shirt", "shorts"] },
  { id: "uniqlo", name: "Uniqlo", productIds: ["t-shirt", "jeans", "shirt", "shorts"] },
  { id: "gap", name: "Gap", productIds: ["t-shirt", "jeans", "shirt"] },
  { id: "levis", name: "Levi's", productIds: ["jeans", "t-shirt", "jacket"] },
  { id: "wrangler", name: "Wrangler", productIds: ["jeans"] },
  { id: "lee", name: "Lee", productIds: ["jeans"] },

  // Fashion - Formal Wear
  { id: "arrow", name: "Arrow", productIds: ["shirt", "formal-shoes"] },
  { id: "van-heusen", name: "Van Heusen", productIds: ["shirt"] },
  { id: "peter-england", name: "Peter England", productIds: ["shirt"] },
  { id: "louis-philippe", name: "Louis Philippe", productIds: ["shirt"] },
  { id: "raymond", name: "Raymond", productIds: ["shirt"] },
  { id: "park-avenue", name: "Park Avenue", productIds: ["shirt"] },
  { id: "allen-solly", name: "Allen Solly", productIds: ["shirt"] },

  // Fashion - Shoes
  { id: "clarks", name: "Clarks", productIds: ["formal-shoes", "shoes"] },
  { id: "woodland", name: "Woodland", productIds: ["formal-shoes", "shoes"] },
  { id: "red-tape", name: "Red Tape", productIds: ["formal-shoes"] },
  { id: "hush-puppies", name: "Hush Puppies", productIds: ["formal-shoes"] },
  { id: "bata", name: "Bata", productIds: ["formal-shoes", "shoes"] },
  { id: "liberty", name: "Liberty", productIds: ["formal-shoes"] },
  { id: "converse", name: "Converse", productIds: ["sneakers", "shoes"] },
  { id: "vans", name: "Vans", productIds: ["sneakers", "shoes"] },
  { id: "new-balance", name: "New Balance", productIds: ["sneakers", "running-shoes", "cricket-bat"] },
  { id: "skechers", name: "Skechers", productIds: ["sneakers", "running-shoes", "shoes"] },

  // Fashion - Indian Wear
  { id: "fabindia", name: "Fabindia", productIds: ["saree", "kurta"] },
  { id: "biba", name: "Biba", productIds: ["saree", "kurta", "dress"] },
  { id: "w", name: "W", productIds: ["saree", "kurta", "dress"] },
  { id: "global-desi", name: "Global Desi", productIds: ["saree", "kurta", "dress"] },
  { id: "aurelia", name: "Aurelia", productIds: ["saree", "kurta"] },
  { id: "manyavar", name: "Manyavar", productIds: ["kurta"] },

  // Fashion - Accessories
  { id: "fossil", name: "Fossil", productIds: ["watch", "handbag", "wallet"] },
  { id: "titan", name: "Titan", productIds: ["watch"] },
  { id: "fastrack", name: "Fastrack", productIds: ["watch", "sunglasses"] },
  { id: "casio", name: "Casio", productIds: ["watch"] },
  { id: "timex", name: "Timex", productIds: ["watch"] },
  { id: "ray-ban", name: "Ray-Ban", productIds: ["sunglasses"] },
  { id: "oakley", name: "Oakley", productIds: ["sunglasses"] },
  { id: "tommy-hilfiger", name: "Tommy Hilfiger", productIds: ["t-shirt", "jeans", "shirt", "wallet"] },
  { id: "calvin-klein", name: "Calvin Klein", productIds: ["t-shirt", "jeans", "perfume"] },

  // Sports Equipment
  { id: "asics", name: "Asics", productIds: ["running-shoes"] },
  { id: "brooks", name: "Brooks", productIds: ["running-shoes"] },
  { id: "saucony", name: "Saucony", productIds: ["running-shoes"] },
  { id: "hoka", name: "Hoka", productIds: ["running-shoes"] },
  { id: "mizuno", name: "Mizuno", productIds: ["running-shoes"] },
  { id: "yonex", name: "Yonex", productIds: ["badminton-racket", "tennis-racket"] },
  { id: "victor", name: "Victor", productIds: ["badminton-racket"] },
  { id: "li-ning", name: "Li-Ning", productIds: ["badminton-racket"] },
  { id: "wilson", name: "Wilson", productIds: ["tennis-racket", "football"] },
  { id: "head", name: "Head", productIds: ["tennis-racket", "badminton-racket"] },
  { id: "babolat", name: "Babolat", productIds: ["tennis-racket", "badminton-racket"] },

  // Sports Equipment - Cricket
  { id: "mrf", name: "MRF", productIds: ["cricket-bat"] },
  { id: "ss", name: "SS", productIds: ["cricket-bat"] },
  { id: "kookaburra", name: "Kookaburra", productIds: ["cricket-bat"] },
  { id: "gray-nicolls", name: "Gray-Nicolls", productIds: ["cricket-bat"] },
  { id: "sg", name: "SG", productIds: ["cricket-bat"] },
  { id: "gm", name: "GM", productIds: ["cricket-bat"] },

  // Sports Equipment - Fitness
  { id: "bowflex", name: "Bowflex", productIds: ["gym-equipment", "treadmill"] },
  { id: "nordictrack", name: "NordicTrack", productIds: ["gym-equipment", "treadmill"] },
  { id: "peloton", name: "Peloton", productIds: ["gym-equipment"] },
  { id: "life-fitness", name: "Life Fitness", productIds: ["gym-equipment"] },
  { id: "precor", name: "Precor", productIds: ["gym-equipment", "treadmill"] },
  { id: "matrix", name: "Matrix", productIds: ["gym-equipment", "treadmill"] },
  { id: "sole", name: "Sole", productIds: ["treadmill"] },
  { id: "horizon", name: "Horizon", productIds: ["treadmill"] },

  // Sports Equipment - Outdoor
  { id: "trek", name: "Trek", productIds: ["bicycle"] },
  { id: "giant", name: "Giant", productIds: ["bicycle"] },
  { id: "specialized", name: "Specialized", productIds: ["bicycle"] },
  { id: "cannondale", name: "Cannondale", productIds: ["bicycle"] },
  { id: "scott", name: "Scott", productIds: ["bicycle"] },
  { id: "hero-cycles", name: "Hero", productIds: ["bicycle"] },
  { id: "firefox", name: "Firefox", productIds: ["bicycle"] },
  { id: "hercules", name: "Hercules", productIds: ["bicycle"] },

  // Sports Equipment - Accessories
  { id: "manduka", name: "Manduka", productIds: ["yoga-mat"] },
  { id: "gaiam", name: "Gaiam", productIds: ["yoga-mat"] },
  { id: "jade-yoga", name: "Jade Yoga", productIds: ["yoga-mat"] },
  { id: "decathlon", name: "Decathlon", productIds: ["yoga-mat", "backpack", "camping-tent"] },
  { id: "wildcraft", name: "Wildcraft", productIds: ["backpack", "wallet"] },
  { id: "american-tourister", name: "American Tourister", productIds: ["backpack"] },
  { id: "the-north-face", name: "The North Face", productIds: ["jacket", "backpack", "camping-tent"] },
  { id: "patagonia", name: "Patagonia", productIds: ["jacket", "backpack"] },
  { id: "coleman", name: "Coleman", productIds: ["camping-tent"] },

  // Fitness Trackers & Wearables
  { id: "fitbit", name: "Fitbit", productIds: ["fitness-tracker", "smart-watch"] },
  { id: "garmin", name: "Garmin", productIds: ["fitness-tracker", "smart-watch", "gps-navigator"] },
  { id: "amazfit", name: "Amazfit", productIds: ["smart-watch", "fitness-tracker"] },
  { id: "polar", name: "Polar", productIds: ["fitness-tracker"] },
  { id: "suunto", name: "Suunto", productIds: ["fitness-tracker"] },
  { id: "noise", name: "Noise", productIds: ["smart-watch"] },
  { id: "fire-boltt", name: "Fire-Boltt", productIds: ["smart-watch"] },

  // Water Bottles & Hydration
  { id: "hydro-flask", name: "Hydro Flask", productIds: ["water-bottle"] },
  { id: "yeti", name: "Yeti", productIds: ["water-bottle"] },
  { id: "nalgene", name: "Nalgene", productIds: ["water-bottle"] },
  { id: "contigo", name: "Contigo", productIds: ["water-bottle"] },
  { id: "swell", name: "S'well", productIds: ["water-bottle"] },
  { id: "thermos", name: "Thermos", productIds: ["water-bottle"] },
  { id: "camelbak", name: "CamelBak", productIds: ["water-bottle"] },
  { id: "milton", name: "Milton", productIds: ["water-bottle"] },

  // Health & Beauty - Skincare
  { id: "loreal", name: "L'Oreal", productIds: ["skincare-product", "makeup", "hair-care-product", "shampoo"] },
  { id: "olay", name: "Olay", productIds: ["skincare-product", "moisturizer", "sunscreen"] },
  { id: "neutrogena", name: "Neutrogena", productIds: ["skincare-product", "moisturizer", "sunscreen", "face-wash"] },
  { id: "cetaphil", name: "Cetaphil", productIds: ["skincare-product", "moisturizer", "sunscreen", "face-wash"] },
  { id: "the-ordinary", name: "The Ordinary", productIds: ["skincare-product"] },
  { id: "cerave", name: "CeraVe", productIds: ["skincare-product"] },
  { id: "nivea", name: "Nivea", productIds: ["skincare-product", "moisturizer"] },
  {
    id: "garnier",
    name: "Garnier",
    productIds: ["skincare-product", "hair-care-product", "moisturizer", "face-wash", "shampoo"],
  },
  { id: "lakme", name: "Lakme", productIds: ["skincare-product", "makeup", "moisturizer", "sunscreen", "face-wash"] },
  { id: "himalaya", name: "Himalaya", productIds: ["skincare-product", "moisturizer", "face-wash"] },
  { id: "biotique", name: "Biotique", productIds: ["skincare-product", "moisturizer", "face-wash"] },

  // Health & Beauty - Makeup
  { id: "maybelline", name: "Maybelline", productIds: ["makeup"] },
  { id: "mac", name: "MAC", productIds: ["makeup"] },
  { id: "urban-decay", name: "Urban Decay", productIds: ["makeup"] },
  { id: "too-faced", name: "Too Faced", productIds: ["makeup"] },
  { id: "nars", name: "NARS", productIds: ["makeup"] },
  { id: "colorbar", name: "Colorbar", productIds: ["makeup"] },
  { id: "sugar-cosmetics", name: "Sugar Cosmetics", productIds: ["makeup"] },

  // Health & Beauty - Hair Care
  { id: "pantene", name: "Pantene", productIds: ["hair-care-product", "shampoo"] },
  { id: "head-shoulders", name: "Head & Shoulders", productIds: ["hair-care-product", "shampoo"] },
  { id: "herbal-essences", name: "Herbal Essences", productIds: ["hair-care-product", "shampoo"] },
  { id: "tresemme", name: "TRESemme", productIds: ["hair-care-product", "shampoo"] },
  { id: "matrix", name: "Matrix", productIds: ["hair-care-product", "shampoo"] },
  { id: "schwarzkopf", name: "Schwarzkopf", productIds: ["hair-care-product", "shampoo"] },

  // Health & Beauty - Fragrances
  { id: "chanel", name: "Chanel", productIds: ["perfume"] },
  { id: "dior", name: "Dior", productIds: ["perfume"] },
  { id: "tom-ford", name: "Tom Ford", productIds: ["perfume"] },
  { id: "versace", name: "Versace", productIds: ["perfume", "sunglasses"] },
  { id: "hugo-boss", name: "Hugo Boss", productIds: ["perfume"] },
  { id: "davidoff", name: "Davidoff", productIds: ["perfume"] },
  { id: "fogg", name: "Fogg", productIds: ["perfume"] },
  { id: "wild-stone", name: "Wild Stone", productIds: ["perfume"] },

  // Health & Beauty - Personal Care Appliances
  { id: "conair", name: "Conair", productIds: ["hair-dryer"] },
  { id: "revlon", name: "Revlon", productIds: ["hair-dryer"] },
  { id: "babyliss", name: "BaByliss", productIds: ["hair-dryer"] },
  { id: "remington", name: "Remington", productIds: ["hair-dryer"] },
  { id: "nova", name: "Nova", productIds: ["hair-dryer"] },
  { id: "oral-b", name: "Oral-B", productIds: ["electric-toothbrush"] },
  { id: "philips-sonicare", name: "Philips Sonicare", productIds: ["electric-toothbrush"] },
  { id: "waterpik", name: "Waterpik", productIds: ["electric-toothbrush"] },

  // Health & Beauty - Fitness & Wellness
  { id: "theragun", name: "Theragun", productIds: ["massage-gun"] },
  { id: "hyperice", name: "Hyperice", productIds: ["massage-gun"] },
  { id: "timtam", name: "TimTam", productIds: ["massage-gun"] },
  { id: "renpho", name: "Renpho", productIds: ["massage-gun"] },
  { id: "omron", name: "Omron", productIds: ["weighing-scale"] },
  { id: "dr-trust", name: "Dr. Trust", productIds: ["weighing-scale"] },
  { id: "healthsense", name: "HealthSense", productIds: ["weighing-scale"] },

  // Books & Media - Publishers
  { id: "penguin-random-house", name: "Penguin Random House", productIds: ["fiction-book", "non-fiction-book"] },
  { id: "harpercollins", name: "HarperCollins", productIds: ["fiction-book", "non-fiction-book"] },
  { id: "simon-schuster", name: "Simon & Schuster", productIds: ["fiction-book", "non-fiction-book"] },
  { id: "macmillan", name: "Macmillan", productIds: ["fiction-book", "non-fiction-book"] },
  { id: "hachette", name: "Hachette", productIds: ["fiction-book", "non-fiction-book"] },
  { id: "scholastic", name: "Scholastic", productIds: ["fiction-book", "educational-book"] },
  { id: "oxford", name: "Oxford", productIds: ["non-fiction-book", "educational-book"] },
  { id: "cambridge", name: "Cambridge", productIds: ["educational-book"] },
  { id: "mcgraw-hill", name: "McGraw-Hill", productIds: ["educational-book"] },
  { id: "pearson", name: "Pearson", productIds: ["educational-book"] },

  // Books & Media - Comics & Entertainment
  { id: "marvel", name: "Marvel", productIds: ["comic-book"] },
  { id: "dc-comics", name: "DC Comics", productIds: ["comic-book"] },
  { id: "amar-chitra-katha", name: "Amar Chitra Katha", productIds: ["comic-book"] },
  { id: "diamond-comics", name: "Diamond Comics", productIds: ["comic-book"] },

  // Books & Media - Digital
  { id: "amazon-kindle", name: "Amazon Kindle", productIds: ["e-reader"] },
  { id: "kobo", name: "Kobo", productIds: ["e-reader"] },
  { id: "audible", name: "Audible", productIds: ["audiobook"] },
  { id: "spotify", name: "Spotify", productIds: ["audiobook"] },

  // Books & Media - Games & Toys
  { id: "hasbro", name: "Hasbro", productIds: ["board-game", "action-figure", "doll"] },
  { id: "mattel", name: "Mattel", productIds: ["board-game", "action-figure", "doll"] },
  { id: "ravensburger", name: "Ravensburger", productIds: ["board-game", "puzzle"] },
  { id: "lego", name: "LEGO", productIds: ["building-blocks"] },
  {
    id: "melissa-doug",
    name: "Melissa & Doug",
    productIds: ["puzzle", "educational-toy", "art-craft-kit", "musical-toy"],
  },

  // Books & Media - Art Supplies
  { id: "faber-castell", name: "Faber-Castell", productIds: ["art-supplies"] },
  { id: "staedtler", name: "Staedtler", productIds: ["art-supplies"] },
  { id: "prismacolor", name: "Prismacolor", productIds: ["art-supplies"] },
  { id: "crayola", name: "Crayola", productIds: ["art-supplies", "art-craft-kit"] },
  { id: "camel", name: "Camel", productIds: ["art-supplies"] },

  // Automotive - Car Manufacturers
  { id: "maruti-suzuki", name: "Maruti Suzuki", productIds: ["car"] },
  { id: "hyundai", name: "Hyundai", productIds: ["car"] },
  { id: "tata", name: "Tata", productIds: ["car"] },
  { id: "mahindra", name: "Mahindra", productIds: ["car"] },
  { id: "honda", name: "Honda", productIds: ["car", "motorcycle"] },
  { id: "toyota", name: "Toyota", productIds: ["car"] },
  { id: "ford", name: "Ford", productIds: ["car"] },
  { id: "volkswagen", name: "Volkswagen", productIds: ["car"] },
  { id: "skoda", name: "Skoda", productIds: ["car"] },
  { id: "nissan", name: "Nissan", productIds: ["car"] },

  // Automotive - Motorcycle Manufacturers
  { id: "hero-motocorp", name: "Hero", productIds: ["motorcycle"] },
  { id: "bajaj-auto", name: "Bajaj", productIds: ["motorcycle"] },
  { id: "tvs", name: "TVS", productIds: ["motorcycle"] },
  { id: "yamaha", name: "Yamaha", productIds: ["motorcycle"] },
  { id: "royal-enfield", name: "Royal Enfield", productIds: ["motorcycle"] },
  { id: "ktm", name: "KTM", productIds: ["motorcycle"] },
  { id: "suzuki", name: "Suzuki", productIds: ["motorcycle"] },
  { id: "kawasaki", name: "Kawasaki", productIds: ["motorcycle"] },

  // Automotive - Accessories & Parts
  { id: "3m", name: "3M", productIds: ["car-accessories", "car-care-products"] },
  { id: "osram", name: "Osram", productIds: ["car-accessories"] },
  { id: "hella", name: "Hella", productIds: ["car-accessories"] },
  { id: "denso", name: "Denso", productIds: ["car-accessories"] },
  { id: "ngk", name: "NGK", productIds: ["car-accessories"] },
  { id: "mobil", name: "Mobil", productIds: ["car-accessories"] },
  { id: "shell", name: "Shell", productIds: ["car-accessories"] },

  // Automotive - Helmets
  { id: "arai", name: "Arai", productIds: ["helmet"] },
  { id: "shoei", name: "Shoei", productIds: ["helmet"] },
  { id: "hjc", name: "HJC", productIds: ["helmet"] },
  { id: "agv", name: "AGV", productIds: ["helmet"] },
  { id: "bell", name: "Bell", productIds: ["helmet"] },
  { id: "ls2", name: "LS2", productIds: ["helmet"] },
  { id: "vega", name: "Vega", productIds: ["helmet"] },
  { id: "steelbird", name: "Steelbird", productIds: ["helmet"] },
  { id: "studds", name: "Studds", productIds: ["helmet"] },

  // Automotive - Car Care
  { id: "meguiars", name: "Meguiar's", productIds: ["car-care-products"] },
  { id: "chemical-guys", name: "Chemical Guys", productIds: ["car-care-products"] },
  { id: "mothers", name: "Mothers", productIds: ["car-care-products"] },
  { id: "turtle-wax", name: "Turtle Wax", productIds: ["car-care-products"] },
  { id: "armor-all", name: "Armor All", productIds: ["car-care-products"] },

  // Automotive - Electronics
  { id: "tomtom", name: "TomTom", productIds: ["gps-navigator"] },
  { id: "pioneer", name: "Pioneer", productIds: ["gps-navigator"] },
  { id: "kenwood", name: "Kenwood", productIds: ["gps-navigator"] },
  { id: "nextbase", name: "Nextbase", productIds: ["dash-cam"] },
  { id: "blackvue", name: "BlackVue", productIds: ["dash-cam"] },
  { id: "thinkware", name: "Thinkware", productIds: ["dash-cam"] },
  { id: "70mai", name: "70mai", productIds: ["dash-cam"] },
  { id: "belkin", name: "Belkin", productIds: ["car-charger"] },
  { id: "aukey", name: "Aukey", productIds: ["car-charger"] },
  { id: "ravpower", name: "RAVPower", productIds: ["car-charger"] },

  // Home & Garden - Furniture
  {
    id: "ikea",
    name: "IKEA",
    productIds: ["furniture", "sofa", "bed", "dining-table", "chair", "wardrobe", "curtains", "lighting", "home-decor"],
  },
  { id: "ashley", name: "Ashley", productIds: ["furniture", "sofa", "bed", "dining-table"] },
  {
    id: "urban-ladder",
    name: "Urban Ladder",
    productIds: ["furniture", "sofa", "bed", "dining-table", "chair", "wardrobe", "curtains", "home-decor"],
  },
  {
    id: "pepperfry",
    name: "Pepperfry",
    productIds: ["furniture", "sofa", "bed", "dining-table", "chair", "wardrobe", "home-decor"],
  },
  {
    id: "godrej-interio",
    name: "Godrej Interio",
    productIds: ["furniture", "sofa", "bed", "dining-table", "wardrobe"],
  },
  { id: "durian", name: "Durian", productIds: ["furniture", "sofa", "bed", "dining-table"] },
  { id: "nilkamal", name: "Nilkamal", productIds: ["furniture", "chair", "wardrobe"] },

  // Home & Garden - Seating
  { id: "la-z-boy", name: "La-Z-Boy", productIds: ["sofa"] },
  { id: "flexsteel", name: "Flexsteel", productIds: ["sofa"] },
  { id: "natuzzi", name: "Natuzzi", productIds: ["sofa"] },
  { id: "herman-miller", name: "Herman Miller", productIds: ["chair"] },
  { id: "steelcase", name: "Steelcase", productIds: ["chair"] },
  { id: "humanscale", name: "Humanscale", productIds: ["chair"] },

  // Home & Garden - Bedding
  { id: "sealy", name: "Sealy", productIds: ["bed", "mattress"] },
  { id: "serta", name: "Serta", productIds: ["bed", "mattress"] },
  { id: "tempur-pedic", name: "Tempur-Pedic", productIds: ["bed", "mattress"] },
  { id: "purple", name: "Purple", productIds: ["mattress"] },
  { id: "casper", name: "Casper", productIds: ["mattress"] },
  { id: "wakefit", name: "Wakefit", productIds: ["mattress"] },
  { id: "sleepycat", name: "SleepyCat", productIds: ["mattress"] },
  { id: "kurl-on", name: "Kurl-on", productIds: ["mattress"] },

  // Home & Garden - Decor
  {
    id: "west-elm",
    name: "West Elm",
    productIds: ["furniture", "sofa", "dining-table", "curtains", "lighting", "home-decor"],
  },
  { id: "pottery-barn", name: "Pottery Barn", productIds: ["curtains", "home-decor"] },
  { id: "cb2", name: "CB2", productIds: ["furniture", "dining-table", "curtains", "lighting", "home-decor"] },
  { id: "home-centre", name: "Home Centre", productIds: ["curtains", "home-decor"] },

  // Home & Garden - Lighting
  { id: "syska", name: "Syska", productIds: ["lighting"] },

  // Home & Garden - Plants & Gardening
  { id: "nursery-live", name: "Nursery Live", productIds: ["plants"] },
  { id: "ugaoo", name: "Ugaoo", productIds: ["plants"] },
  { id: "ferns-n-petals", name: "Ferns N Petals", productIds: ["plants"] },
  { id: "craftsman", name: "Craftsman", productIds: ["garden-tools"] },
  { id: "fiskars", name: "Fiskars", productIds: ["garden-tools"] },
  { id: "corona", name: "Corona", productIds: ["garden-tools"] },
  { id: "husqvarna", name: "Husqvarna", productIds: ["garden-tools"] },
  { id: "stihl", name: "STIHL", productIds: ["garden-tools"] },

  // Toys & Games - Action Figures & Dolls
  { id: "bandai", name: "Bandai", productIds: ["action-figure"] },
  { id: "mcfarlane", name: "McFarlane", productIds: ["action-figure"] },
  { id: "neca", name: "NECA", productIds: ["action-figure"] },
  { id: "hot-toys", name: "Hot Toys", productIds: ["action-figure"] },
  { id: "american-girl", name: "American Girl", productIds: ["doll"] },
  { id: "our-generation", name: "Our Generation", productIds: ["doll"] },

  // Toys & Games - Building & Construction
  { id: "mega-construx", name: "Mega Construx", productIds: ["building-blocks"] },
  { id: "knex", name: "K'NEX", productIds: ["building-blocks"] },
  { id: "playmobil", name: "Playmobil", productIds: ["building-blocks"] },
  { id: "magformers", name: "Magformers", productIds: ["building-blocks"] },

  // Toys & Games - Board Games
  { id: "days-of-wonder", name: "Days of Wonder", productIds: ["board-game", "board-game-toys"] },
  { id: "fantasy-flight", name: "Fantasy Flight", productIds: ["board-game", "board-game-toys"] },
  { id: "rio-grande-games", name: "Rio Grande Games", productIds: ["board-game", "board-game-toys"] },

  // Toys & Games - Video Games
  { id: "electronic-arts", name: "Electronic Arts", productIds: ["video-game"] },
  { id: "activision", name: "Activision", productIds: ["video-game"] },
  { id: "ubisoft", name: "Ubisoft", productIds: ["video-game"] },
  { id: "rockstar", name: "Rockstar", productIds: ["video-game"] },

  // Toys & Games - Educational
  { id: "leapfrog", name: "LeapFrog", productIds: ["educational-toy", "musical-toy"] },
  { id: "vtech", name: "VTech", productIds: ["educational-toy", "musical-toy"] },
  { id: "fisher-price", name: "Fisher-Price", productIds: ["educational-toy", "musical-toy"] },
  { id: "learning-resources", name: "Learning Resources", productIds: ["educational-toy"] },
  { id: "educational-insights", name: "Educational Insights", productIds: ["educational-toy"] },

  // Toys & Games - Remote Control
  { id: "traxxas", name: "Traxxas", productIds: ["remote-control-toy"] },
  { id: "hpi-racing", name: "HPI Racing", productIds: ["remote-control-toy"] },
  { id: "tamiya", name: "Tamiya", productIds: ["remote-control-toy"] },
  { id: "axial", name: "Axial", productIds: ["remote-control-toy"] },

  // Toys & Games - Puzzles
  { id: "buffalo-games", name: "Buffalo Games", productIds: ["puzzle", "puzzle-toys"] },
  { id: "white-mountain", name: "White Mountain", productIds: ["puzzle", "puzzle-toys"] },
  { id: "springbok", name: "Springbok", productIds: ["puzzle", "puzzle-toys"] },
  { id: "cobble-hill", name: "Cobble Hill", productIds: ["puzzle", "puzzle-toys"] },

  // Toys & Games - Arts & Crafts
  { id: "alex-toys", name: "Alex Toys", productIds: ["art-craft-kit"] },
  { id: "creativity-for-kids", name: "Creativity for Kids", productIds: ["art-craft-kit"] },
  { id: "klutz", name: "Klutz", productIds: ["art-craft-kit"] },
  { id: "national-geographic", name: "National Geographic", productIds: ["art-craft-kit"] },

  // Toys & Games - Musical
  { id: "hape", name: "Hape", productIds: ["musical-toy"] },
  { id: "baby-einstein", name: "Baby Einstein", productIds: ["musical-toy"] },

  // Food & Beverages - Snacks
  { id: "lays", name: "Lay's", productIds: ["snacks"] },
  { id: "pringles", name: "Pringles", productIds: ["snacks"] },
  { id: "doritos", name: "Doritos", productIds: ["snacks"] },
  { id: "cheetos", name: "Cheetos", productIds: ["snacks"] },
  { id: "haldirams", name: "Haldiram's", productIds: ["snacks"] },
  { id: "bikaji", name: "Bikaji", productIds: ["snacks"] },
  { id: "balaji", name: "Balaji", productIds: ["snacks"] },
  { id: "parle", name: "Parle", productIds: ["snacks", "breakfast-cereal"] },

  // Food & Beverages - Beverages
  { id: "coca-cola", name: "Coca-Cola", productIds: ["beverages"] },
  { id: "pepsi", name: "Pepsi", productIds: ["beverages"] },
  { id: "red-bull", name: "Red Bull", productIds: ["beverages"] },
  { id: "monster", name: "Monster", productIds: ["beverages"] },
  { id: "tropicana", name: "Tropicana", productIds: ["beverages"] },
  { id: "real", name: "Real", productIds: ["beverages"] },
  { id: "minute-maid", name: "Minute Maid", productIds: ["beverages"] },
  { id: "frooti", name: "Frooti", productIds: ["beverages"] },

  // Food & Beverages - Hot Beverages
  { id: "tata-tea", name: "Tata Tea", productIds: ["tea"] },
  { id: "brooke-bond", name: "Brooke Bond", productIds: ["tea"] },
  { id: "lipton", name: "Lipton", productIds: ["tea"] },
  { id: "tetley", name: "Tetley", productIds: ["tea"] },
  { id: "wagh-bakri", name: "Wagh Bakri", productIds: ["tea"] },
  { id: "girnar", name: "Girnar", productIds: ["tea"] },
  { id: "organic-india", name: "Organic India", productIds: ["tea", "organic-food"] },
  { id: "nescafe", name: "Nescafe", productIds: ["coffee"] },
  { id: "bru", name: "Bru", productIds: ["coffee"] },
  { id: "tata-coffee", name: "Tata Coffee", productIds: ["coffee"] },
  { id: "continental-coffee", name: "Continental Coffee", productIds: ["coffee"] },
  { id: "blue-tokai", name: "Blue Tokai", productIds: ["coffee"] },
  { id: "third-wave-coffee", name: "Third Wave Coffee", productIds: ["coffee"] },

  // Food & Beverages - Spices & Cooking
  { id: "mdh", name: "MDH", productIds: ["spices"] },
  { id: "everest", name: "Everest", productIds: ["spices"] },
  { id: "catch", name: "Catch", productIds: ["spices"] },
  { id: "red-label", name: "Red Label", productIds: ["spices"] },
  { id: "shan", name: "Shan", productIds: ["spices"] },
  { id: "eastern", name: "Eastern", productIds: ["spices"] },
  { id: "badshah", name: "Badshah", productIds: ["spices"] },
  { id: "fortune", name: "Fortune", productIds: ["cooking-oil"] },
  { id: "saffola", name: "Saffola", productIds: ["cooking-oil", "breakfast-cereal"] },
  { id: "sundrop", name: "Sundrop", productIds: ["cooking-oil"] },
  { id: "oleev", name: "Oleev", productIds: ["cooking-oil"] },
  { id: "dhara", name: "Dhara", productIds: ["cooking-oil"] },
  { id: "gemini", name: "Gemini", productIds: ["cooking-oil"] },

  // Food & Beverages - Breakfast & Cereals
  { id: "kelloggs", name: "Kellogg's", productIds: ["breakfast-cereal"] },
  { id: "nestle", name: "Nestle", productIds: ["breakfast-cereal", "health-drink"] },
  { id: "quaker", name: "Quaker", productIds: ["breakfast-cereal"] },
  { id: "bagrrys", name: "Bagrry's", productIds: ["breakfast-cereal"] },

  // Food & Beverages - Health & Nutrition
  { id: "optimum-nutrition", name: "Optimum Nutrition", productIds: ["protein-supplement"] },
  { id: "dymatize", name: "Dymatize", productIds: ["protein-supplement"] },
  { id: "bsn", name: "BSN", productIds: ["protein-supplement"] },
  { id: "muscletech", name: "MuscleTech", productIds: ["protein-supplement"] },
  { id: "muscleblaze", name: "MuscleBlaze", productIds: ["protein-supplement"] },
  { id: "isopure", name: "Isopure", productIds: ["protein-supplement"] },
  { id: "cellucor", name: "Cellucor", productIds: ["protein-supplement"] },
  { id: "horlicks", name: "Horlicks", productIds: ["health-drink"] },
  { id: "bournvita", name: "Bournvita", productIds: ["health-drink"] },
  { id: "complan", name: "Complan", productIds: ["health-drink"] },
  { id: "boost", name: "Boost", productIds: ["health-drink"] },
  { id: "protinex", name: "Protinex", productIds: ["health-drink"] },
  { id: "pediasure", name: "Pediasure", productIds: ["health-drink"] },
  { id: "ensure", name: "Ensure", productIds: ["health-drink"] },

  // Food & Beverages - Organic & Natural
  { id: "24-mantra", name: "24 Mantra", productIds: ["organic-food"] },
  { id: "pro-nature", name: "Pro Nature", productIds: ["organic-food"] },
  { id: "conscious-food", name: "Conscious Food", productIds: ["organic-food"] },
  { id: "down-to-earth", name: "Down to Earth", productIds: ["organic-food"] },
  { id: "patanjali", name: "Patanjali", productIds: ["spices", "cooking-oil", "breakfast-cereal", "organic-food"] },

  // Food & Beverages - Dairy & Processed
  { id: "britannia", name: "Britannia", productIds: ["snacks"] },
  { id: "amul", name: "Amul", productIds: ["beverages"] },
  { id: "itc", name: "ITC", productIds: ["snacks"] },
]
