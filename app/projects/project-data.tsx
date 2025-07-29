  export interface Project {
    slug: string;
    title: string;
    year: string;   // change to string
    description: string;
    details: string;
      logo: string;
    type: "flutter" | "n8n";
    banner: string;
    overview: string;
  techStack: { name: string; color: string }[];
    images: { src: string; label: string; description: string }[];
  }

  export const projects: Project[] = [
    {
      slug: "fitxol",
      title: "Fitxol – Health Tracking application",
      year: "Feb 2025 - June 2025", // string now
      type: "flutter",
      logo: "/flutter-apps/fitxol/logo.png", // ✅ your app logo
      description: "Fitxol is a cutting-edge health tracker IoT application that enables live height and weight tracking.",
      banner: "/flutter-apps/fitxol/banner.png",
      overview:
        "Fitxol is a gym & trainer booking app with live tracking, Google Pay, and schedule management features.",
      details: "Used by fitness enthusiasts to streamline bookings and track sessions with ease.",
      images: [
        {
          src: "/flutter-apps/fitxol/image1.png",
          label: "Login Screen",
          description: "Users can sign in using Google or phone authentication.",
        },
        {
          src: "/flutter-apps/fitxol/image1.png",
          label: "Home Dashboard",
          description: "A personalized home with gym listings, featured sessions, and progress tracking.",
        },
        {
          src: "/flutter-apps/fitxol/image1.png",
          label: "Trainer Booking",
          description: "Schedule sessions, view trainer profiles, and confirm using in-app calendar.",
        },
      ],
      techStack: [
        { name: "Flutter", color: "#02569B" },    // blue
        { name: "Firebase", color: "#FF6F00" },   // orange
        { name: "Google Maps", color: "#DD4B3E" }, // green
        { name: "Google Pay", color: "#0F9D58" }, // dark green/blue
      ],
    },
  ];
