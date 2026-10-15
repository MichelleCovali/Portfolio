export type ProjectImage = {
  src: string;
  alt: string;
  fit?: "cover" | "contain";
};

export type Project = {
  id: string;
  title: string;
  description: string;
  category?: string;
  roles?: string[];
  screenshot?: ProjectImage;
  secondaryImage?: ProjectImage;
  videos?: { src: string; title: string; poster?: string }[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
};

// Content and original imagery from Mihaela's earlier university portfolio.
// Add repository, live-demo, and case-study URLs only when verified and available.
export const projectSource = "https://mihaelacovali.my.canva.site/";

export const projects: Project[] = [
  {
    id: "covali-smart-bag",
    videos: [
      {
        src: "/videos/covali-demonstration.mp4",
        title: "Physical demonstration",
      },
      {
        src: "/videos/covali-app.mp4",
        title: "Mobile app demo",
        poster: "/images/projects/covali-app.jpg",
      },
    ],
    title: "Covali — Smart Bag",
    category: "University project · Mobile & connected devices",
    description:
      "A smart bag and companion mobile app project exploring how to help people avoid forgetting personal items. The concept uses NFC technology and a Raspberry Pi to track belongings inside a bag, with a React Native app to display their status.",
    roles: ["Innovator", "Full Stack Developer", "Tester"],
    screenshot: {
      src: "/images/projects/covali-smart-bag.png",
      alt: "Blue Covali smart bag prototype with gold branding",
    },
    secondaryImage: {
      src: "/images/projects/covali-app.jpg",
      alt: "Covali mobile app demonstration showing a bag and the status of personal belongings",
      fit: "contain",
    },
    technologies: [
      "React Native",
      "Expo",
      "JavaScript",
      "Raspberry Pi",
      "NFC",
      "Figma",
    ],
  },
  {
    id: "circle-solutions",
    videos: [
      {
        src: "/videos/circle-solutions.mp4",
        title: "Website walkthrough",
        poster: "/images/projects/circle-solutions.jpg",
      },
    ],
    title: "Circle Solutions",
    category: "University project · Web development",
    description:
      "A bilingual website project for Circle Solutions, designed to introduce its services to an international audience through a clear, user-friendly interface. My role focused on UI design and frontend development.",
    roles: ["UI Designer", "Frontend Developer"],
    screenshot: {
      src: "/images/projects/circle-solutions.jpg",
      alt: "Circle Solutions website homepage with service navigation and a globe illustration",
      fit: "contain",
    },
    technologies: ["HTML", "CSS", "PHP", "JavaScript"],
  },
  {
    id: "battlebot",
    videos: [
      {
        src: "/videos/battlebot.mp4",
        title: "Robot in the maze",
        poster: "/images/projects/battlebot.jpg",
      },
    ],
    title: "BattleBot — Physical Maze Solver",
    category: "University project · Robotics",
    description:
      "An Arduino robot project with the goal of autonomously navigating a physical maze. I worked on development and testing, using real-time sensor inputs to detect walls and decide how the robot should move.",
    roles: ["Developer", "Tester"],
    screenshot: {
      src: "/images/projects/battlebot.jpg",
      alt: "Arduino-based BattleBot robot inside a physical maze at NHL Stenden",
      fit: "contain",
    },
    technologies: ["C++", "Arduino"],
  },
  {
    id: "ar-web-app",
    videos: [
      {
        src: "/videos/ar-web-app.mp4",
        title: "AR web app demonstration",
        poster: "/images/projects/ar-web-app.jpg",
      },
    ],
    title: "AR Web App",
    category: "University project · Web & real-time communication",
    description:
      "A university AR web application project combining HTML, CSS, and JavaScript with MQTT for real-time data communication and TwinCAT for PLC simulation. My responsibilities included research, full stack development, and testing.",
    roles: ["Researcher", "Full Stack Developer", "Tester"],
    screenshot: {
      src: "/images/projects/ar-web-app.jpg",
      alt: "Original AR Web App demonstration showing the physical machinery setup",
      fit: "contain",
    },
    technologies: ["HTML", "CSS", "JavaScript", "MQTT", "TwinCAT"],
  },
];
