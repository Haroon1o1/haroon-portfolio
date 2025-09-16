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

  ];
