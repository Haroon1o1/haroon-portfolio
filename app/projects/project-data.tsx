export interface Project {
  slug: string;
  title: string;
  year: string;
  description: string;
  smallDescription: string;
  logo: string;
  type: "flutter" | "n8n";
  banner: string;
  techStack: { name: string; color: string }[];
  images: { src: string }[];
  features: string[]; // ✅ NEW
}


  export const projects: Project[] = [
    {


    features: [
  "Live height & weight tracking",
  "IoT device integration",
  "Height & weight's Goal Tracker",
  "Firebase authentication",
  "Responsive Flutter UI",
  "Graph based analysis",
],


      slug: "fitxol",
      title: "Fitxol – Health Tracking application",
      year: "Feb 2025 - June 2025", // string now
      type: "flutter",
      logo: "/flutter-apps/fitxol/logo.png", // ✅ your app logo
      description: "Fitxol is an innovative health tracking IoT application designed to provide real-time monitoring of your height and weight. It offers insightful, graph-based analysis to help you understand your progress over time. With secure user authentication, seamless profile management, and a personalized goal-setting tracker, Fitxol empowers you to take control of your health journey with ease and confidence.",
      banner: "/flutter-apps/fitxol/banner.png",
     smallDescription: "Fitxol offers real-time height and weight tracking with smart analysis, secure profiles, and goal-setting for better health management",
      images: [
        {
          src: "/flutter-apps/fitxol/image1.png",

        },
        {
          src: "/flutter-apps/fitxol/image2.png",

        },

        {
          src: "/flutter-apps/fitxol/image3.png",

        },
      ],
      techStack: [
        { name: "Flutter", color: "#02569B" },    // blue
        { name: "Firebase", color: "#FF6F00" },   // orange
        { name: "Google Pay", color: "#0F9D58" }, // dark green/blue
        { name: "Iot device connection", color: "#9D0F9BFF" }, // dark green/blue
      ],
    },












  {
features: [
  "Audio & video player integration",
  "User-friendly digital book reading",
  "Stage management with Getx",
  "Firebase Data handling",
  "Deployment to iOS & Android",
],

  slug: "qalb-e-saleem",
  title: "Qalb-e-Saleem – Arabic Audiobook",
  year: "Sep 2024 - Dec 2024",
  type: "flutter",
  logo: "/flutter-apps/qalb/logo.png",
  description:
    "Qalb-e-Saleem is a sophisticated Arabic digital book application designed to present data visually with an intuitive and user-friendly interface. It seamlessly integrates audio and video playback, allowing users to engage deeply with the content. The app efficiently manages PDFs and other digital resources through a robust Firebase database backend, ensuring fast access and smooth performance. With a focus on optimization, Qalb-e-Saleem offers a beautifully crafted user interface that enhances readability and navigation, making the experience immersive and accessible for users of all ages.",

  banner: "/flutter-apps/qalb/banner.png",

  smallDescription:
    "Qalb-e-Saleem is a digital audiobook with audios and videos in it for reader with an attractive user interface.",

  images: [
    {
      src: "/flutter-apps/qalb/image1.png",
     },
    {
      src: "/flutter-apps/qalb/image2.png",},
    {
      src: "/flutter-apps/qalb/image3.png",

    },

  ],

  techStack: [
    { name: "Flutter", color: "#02569B" },
    { name: "Firebase", color: "#FF6F00" },
    { name: "GetX state management", color: "#7E57C2" },
  ],
},







  {
features: [
  "Sound Processing to amplifies surrounding sounds",
  "User-friendly interface",
  "Audiometery test based on realtime - medical tests",
  "Graph based results for left/right ears",
  "PDF report results after test completion",
  "User authentication and profile management",
],

  slug: "Hearmate",
  title: "HearMate – An hearing aid application",
  year: "Jan 2025 - May 2025",
  type: "flutter",
  logo: "/flutter-apps/hearmate/icon.png",
  description:
    "This advanced hearing application is designed to enhance auditory health through real-time sound processing and medical-grade audiometry tests. It offers a user-friendly interface, allowing users to perform accurate hearing tests and receive graph-based results for both left and right ears. After completing the test, users can download a detailed PDF report of their results. The app also includes secure user authentication and profile management, ensuring a personalized and streamlined experience.",

  banner: "/flutter-apps/hearmate/banner.png",

  smallDescription:
    "HearMate application is designed for people with hearing problems and can't afford to buy expensive setups for ears",

  images: [
    {
      src: "/flutter-apps/hearmate/image1.png",
     },
    {
      src: "/flutter-apps/hearmate/image2.png",},
    {
      src: "/flutter-apps/hearmate/image3.png",

    },
    {
      src: "/flutter-apps/hearmate/image4.png",

    },
    {
      src: "/flutter-apps/hearmate/image5.png",

    },

  ],

  techStack: [
    { name: "Flutter", color: "#02569B" },
    { name: "Firebase", color: "#FF6F00" },
    { name: "Provider state management", color: "#7E57C2" },
    { name: "Graphs", color: "#C2C057FF" },
    { name: "Sound Management", color: "#C25763FF" },
    { name: "PDF Generation", color: "#57C263FF" },
  ],
    },




   {
features: [
  "Role based Authentication",
  "Inventory  system",
  "Stage management with Getx",
  "Ai-based Face KYC integration",
  "Order management & payment gateway",
],

  slug: "RentAnything",
  title: "RentAnything – Rent out your stuff now",
  year: "Jan 2025 - March 2025",
  type: "flutter",
  logo: "/flutter-apps/rent/logo.png",
  description:
    "RentAnything is a user-friendly platform that allows people to easily rent out items they no longer use and earn extra income. It comes with role-based authentication for secure access, a complete inventory system to manage listings, and efficient stage management with GetX for smooth app performance. The platform also integrates AI-powered Face KYC for identity verification, along with order management and a payment gateway to ensure safe and seamless transactions for both owners and renters.",

  banner: "/flutter-apps/rent/banner.png",

  smallDescription:
    "RentAnything is a plateform to rent out your stuff easily that you dont need and earn money.",

  images: [
    {
      src: "/flutter-apps/rent/image1.png",
     },
    {
      src: "/flutter-apps/rent/image2.png",},
    {
      src: "/flutter-apps/rent/image3.png",

    },

  ],

  techStack: [
    { name: "Flutter", color: "#02569B" },
    { name: "Firebase", color: "#FF6F00" },
    { name: "Provider State-management", color: "#7E57C2" },
    { name: "Fast API", color: "#0c16a2ff" },
    { name: "Stripe Payment gateway", color: "#15be61ff" },
  ],
},


   {
  "features": [
    "Role based Authentication",
    "Nearby chefs discovery",
    "Real-time order tracking",
    "Order management & payment gateway",
    "Category based filtering (Veg/Non-Veg/Discounts)"
  ],

  "slug": "Cooksy",
  "title": "Cooksy – Homemade meals from local chefs",
  "year": "Nov 2024 - Jan 2025",
  "type": "flutter",
  "logo": "/flutter-apps/cooksy/logo.png",
  "description":
    "Cooksy connects you with local home chefs, making it easy to order fresh, homemade meals and track your delivery in real time. The app comes with role-based authentication, real-time order management, and nearby chef discovery to make finding authentic meals convenient. Users can filter by categories like vegetarian, non-vegetarian, and discounts, while secure payments ensure a smooth and reliable experience.",

  "banner": "/flutter-apps/cooksy/banner.png",

  "smallDescription":
    "Cooksy is a platform to order homemade meals from local chefs with real-time delivery tracking.",

  "images": [
    { "src": "/flutter-apps/cooksy/image1.png" },
    { "src": "/flutter-apps/cooksy/image2.png" },
    { "src": "/flutter-apps/cooksy/image3.png" },
    { "src": "/flutter-apps/cooksy/image4.png" },
    { "src": "/flutter-apps/cooksy/image5.png" },
    { "src": "/flutter-apps/cooksy/image6.png" },
  ],

  "techStack": [
    { "name": "Flutter", "color": "#02569B" },
    { "name": "Firebase", "color": "#FF6F00" },
    { "name": "GetX State-management", "color": "#7E57C2" },
    { "name": "Google Maps API", "color": "#4285F4" },
    { "name": "Stripe Payment Gateway", "color": "#15be61ff" }
  ]
    },

   {
  "features": [
    "Role based Authentication",
    "Property discovery & search",
    "Nearby property listings",
    "Property booking system",
    "Profile & account management",
    "Photo gallery for properties"
  ],

  "slug": "Dwella",
  "title": "Dwella – Real Estate Application",
  "year": "Jan 2025 - March 2025",
  "type": "flutter",
  "logo": "/flutter-apps/dwella/logo.png",
  "description":
    "Dwella is a modern real estate application built with Flutter, designed to help users discover, explore, and book properties seamlessly. With an intuitive interface, users can browse property details, view high-quality photos, and book their dream homes with ease. Dwella also offers powerful search and filtering options, account management, and a smooth booking process to make house-hunting stress-free.",

  "banner": "/flutter-apps/dwella/banner.png",

  "smallDescription":
    "Dwella is a real estate app that makes it simple to discover, explore, and book properties seamlessly.",

  "images": [
    { "src": "/flutter-apps/dwella/image1.png" },
    { "src": "/flutter-apps/dwella/image2.png" },
    { "src": "/flutter-apps/dwella/image3.png" },
    { "src": "/flutter-apps/dwella/image4.png" },
    { "src": "/flutter-apps/dwella/image5.png" },
    { "src": "/flutter-apps/dwella/image6.png" },
  ],

  "techStack": [
    { "name": "Flutter", "color": "#02569B" },
    { "name": "Firebase", "color": "#FF6F00" },
    { "name": "GetX State-management", "color": "#7E57C2" },
    { "name": "Google Maps API", "color": "#4285F4" },
    { "name": "Cloud Firestore", "color": "#039BE5" }
  ]
    },

   {
  "features": [
    "Role based Authentication",
    "Movie discovery & details",
    "Seat selection system",
    "Showtime & format selection (2D/3D)",
    "Ticket booking & management",
    "Integrated payment gateway"
  ],

  "slug": "CinemaPlex",
  "title": "CinemaPlex – Ticket Booking Application",
  "year": "Dec 2024 - Feb 2025",
  "type": "flutter",
  "logo": "/flutter-apps/cinemaplex/logo.png",
  "description":
    "CinemaPlex is a ticket booking application developed in Flutter for cinemas to enhance user experience and ticket management. The app allows users to explore movies, view details such as ratings, genres, and durations, and conveniently select showtimes and seats. With integrated secure payment options and smooth ticket management, CinemaPlex provides a modern and efficient cinema booking experience.",

  "banner": "/flutter-apps/cinemaplex/banner.png",

  "smallDescription":
    "CinemaPlex is a modern ticket booking app for cinemas with seat selection, showtime booking, and integrated payments.",

  "images": [
    { "src": "/flutter-apps/cinemaplex/image1.png" },
    { "src": "/flutter-apps/cinemaplex/image2.png" },
    { "src": "/flutter-apps/cinemaplex/image3.png" },
    { "src": "/flutter-apps/cinemaplex/image4.png" },
    { "src": "/flutter-apps/cinemaplex/image5.png" },
  ],

  "techStack": [
    { "name": "Flutter", "color": "#02569B" },
    { "name": "Firebase", "color": "#FF6F00" },
    { "name": "GetX State-management", "color": "#7E57C2" },
    { "name": "Stripe Payment Gateway", "color": "#15be61ff" },
    { "name": "Cloud Firestore", "color": "#039BE5" }
  ]
    },

   {
  "features": [
    "Role based Authentication",
    "Real-time bike tracking",
    "Parking areas & zone management",
    "Lock & unlock functionality",
    "Payment integration",
    "Ride history & usage analytics"
  ],

  "slug": "Volt",
  "title": "Volt – Electric Bikes Tracking Application",
  "year": "Feb 2025 - April 2025",
  "type": "flutter",
  "logo": "/flutter-apps/volt/logo.png",
  "description":
    "Volt is a Flutter-based application designed to track electric bikes in the city. It allows users to discover and unlock nearby e-bikes, manage parking areas, and monitor zones with real-time movement updates. With features like secure payments, lock/unlock functionality, and ride history, Volt provides a seamless and modern solution for urban micro-mobility management.",

  "banner": "/flutter-apps/volt/banner.png",

  "smallDescription":
    "Volt is a smart e-bike tracking and management app with real-time monitoring, payments, and lock/unlock functionality.",

  "images": [
    { "src": "/flutter-apps/volt/image1.png" },
    { "src": "/flutter-apps/volt/image2.png" },
    { "src": "/flutter-apps/volt/image3.png" },
    { "src": "/flutter-apps/volt/image4.png" },
  ],

  "techStack": [
    { "name": "Flutter", "color": "#02569B" },
    { "name": "Firebase", "color": "#FF6F00" },
    { "name": "GetX State-management", "color": "#7E57C2" },
    { "name": "Google Maps API", "color": "#4285F4" },
    { "name": "Stripe Payment Gateway", "color": "#15be61ff" }
  ]
    },

   {
  "features": [
    "Role based Authentication",
    "AI-powered virtual try-on",
    "E-commerce shopping features",
    "Product catalog & categories",
    "Cart & checkout system",
    "Profile & order history management"
  ],

  "slug": "PerfectFit",
  "title": "PerfectFit – AI based Virtual Try-On Application",
  "year": "March 2025 - May 2025",
  "type": "flutter",
  "logo": "/flutter-apps/perfectfit/logo.png",
  "description":
    "PerfectFit is a Flutter-based application integrated with AI models to allow customers to virtually try on clothes before purchasing. Along with AI-powered try-on, it includes full e-commerce functionality such as product catalog, cart, secure checkout, and profile management. PerfectFit enhances online shopping by giving users a realistic preview of how clothes will look on them, improving confidence in online purchases.",

  "banner": "/flutter-apps/perfectfit/banner.png",

  "smallDescription":
    "PerfectFit lets users virtually try clothes using AI before buying, combined with full e-commerce shopping features.",

  "images": [
    { "src": "/flutter-apps/perfectfit/image1.png" },
    { "src": "/flutter-apps/perfectfit/image2.png" },
    { "src": "/flutter-apps/perfectfit/image3.png" },
    { "src": "/flutter-apps/perfectfit/image4.png" },
    { "src": "/flutter-apps/perfectfit/image5.png" },
  ],

  "techStack": [
    { "name": "Flutter", "color": "#02569B" },
    { "name": "Firebase", "color": "#FF6F00" },
    { "name": "GetX State-management", "color": "#7E57C2" },
    { "name": "AI Model Integration", "color": "#00C853" },
    { "name": "Stripe Payment Gateway", "color": "#15be61ff" }
  ]
}






  ];
