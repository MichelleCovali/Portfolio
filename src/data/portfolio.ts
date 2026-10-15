export type Experience = {
  role: string;
  company: string;
  logo: { src: string; alt: string };
  location: string;
  period: string;
  url: string;
  websiteAction: string;
  websiteContribution: string;
  websitePreview: { src: string; alt: string };
  contributionTitles: string[];
  responsibilities: string[];
  technologies: string[];
};
export const profile = {
  name: "Mihaela Covali",
  title: "Information Technology Student & Aspiring Software Developer",
  email: "mihaela.covali@student.nhlstenden.com",
  github: "https://github.com/MichelleCovali",
  linkedin: "https://www.linkedin.com/in/mihaelacovali/",
  introduction:
    "A fourth-year IT student turning curiosity into useful digital experiences. Looking for an HBO graduation internship where I can contribute, learn, and build something meaningful.",
  availability: "Open to graduation internships",
  location: "Based in the Netherlands",
  mobility:
    "Open to relocating nationwide in the Netherlands, and to opportunities in Italy and Spain.",
  about: [
    "I’m a fourth-year Information Technology student at NHL Stenden University of Applied Sciences. I enjoy software development and the process of turning an idea into a useful digital solution.",
    "My internship at MetaChef gave me hands-on experience in a professional development team, from building internal tools to implementing a website’s frontend. I’m now looking for a graduation internship where I can put that experience to work, explore new technologies, and keep developing my skills.",
  ],
};
export const experience: Experience[] = [
  {
    role: "Software Developer Intern",
    company: "MetaChef",
    logo: { src: "/images/companies/metachef.svg", alt: "MetaChef logo" },
    location: "Enschede, Netherlands",
    period: "September 2025 – January 2026",
    url: "https://metachef.nl/",
    websiteAction: "View the website",
    websiteContribution: "Frontend implementation & UI/UX contribution",
    websitePreview: {
      src: "/images/companies/metachef-website.jpg",
      alt: "MetaChef’s live website showing its education sector homepage",
    },
    contributionTitles: [
      "Internal tools",
      "Frontend development",
      "UI/UX collaboration",
    ],
    responsibilities: [
      "Developed internal administration interfaces and tools for managing and updating the company’s digital products.",
      "Independently implemented the frontend of the company’s new website, translating design concepts into a functional and consistent user interface.",
      "Contributed to UI/UX design by extending the initial homepage design across the website, collaborating with the Product Owner on design decisions and feedback.",
    ],
    technologies: [
      "React",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "Strapi",
      "Git",
      "GitHub",
      "Scrum",
    ],
  },
];
export const skills = [
  {
    name: "Programming",
    items: ["JavaScript", "TypeScript", "Java", "HTML", "CSS"],
  },
  { name: "Frameworks & runtime", items: ["React", "Next.js", "Node.js"] },
  { name: "Databases", items: ["MongoDB", "PostgreSQL"] },
  {
    name: "Tools & platforms",
    items: ["Git", "GitHub", "GitLab", "Figma", "Strapi", "REST APIs"],
  },
  { name: "Methodologies", items: ["Scrum", "Agile Development"] },
];
export const education = [
  {
    school: "NHL Stenden University of Applied Sciences",
    degree: "Bachelor’s Degree in Information Technology",
    period: "September 2023 – Present",
    location: "Netherlands",
  },
  {
    school: "Hanze University of Applied Sciences",
    degree: "Minor in Spanish Language and Culture",
    period: "February 2026 – August 2026",
    location: "Groningen, Netherlands",
  },
];
export const languages = [
  { name: "Romanian", level: "Native" },
  { name: "English", level: "Full professional proficiency" },
  { name: "Russian, Spanish, Italian", level: "Intermediate (B1)" },
];
export const navigation = [
  "Home",
  "About",
  "Experience",
  "Projects",
  "Skills",
  "Education",
  "Contact",
];
