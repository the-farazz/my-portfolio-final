export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  current: boolean;
}

export const experiences: Experience[] = [
  {
    title: "Front End Developer – Mid Level Developer",
    company: "Karsaaz Entire Business Solutions",
    location: "Karachi, Pakistan",
    period: "Jan. 2025 – Present",
    description:
      "Developing and maintaining multiple enterprise-grade platforms across ERP, fintech, and digital payment domains.",
    achievements: [
      "• Developed and maintained platforms including ERP, Karsaaz EBS Corporate Website, Karsaaz EBS Fintech, Karsaaz Wallet, and Karsaaz Agent Platform using Next.js, Tailwind CSS, Material UI, and REST APIs.",
      "• Built dynamic admin panel–driven applications, enabling teams to manage and update content independently.",
      "• Developed responsive and scalable user interfaces for enterprise, fintech, and digital payment solutions.",
      "• Built reusable components and collaborated with backend teams to ensure seamless API integration.",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Material UI", "Redux", "REST APIs"],
    current: true,
  },
  {
    title: "Front End Developer – Internship",
    company: "Xenasys Pvt. Ltd",
    location: "Karachi, Pakistan",
    period: "Oct. 2024 – Dec. 2024",
    description:
      "Contributed to the development of a Franchise Management System (FMS) for Zong.",
    achievements: [
      "• Developed and enhanced frontend modules for the Franchise Management System using ReactJS, Tailwind CSS, and Material UI.",
      "• Contributed to a live production application, ensuring responsive and consistent user experiences.",
    ],
    technologies: ["React.js", "Tailwind CSS", "Material UI"],
    current: false,
  },
  {
    title: "Front End Developer – Internship",
    company: "DevLogix",
    location: "Karachi, Pakistan",
    period: "Jul. 2024 – Oct. 2024",
    description: "Gained hands-on experience building an HR Management System from scratch.",
    achievements: [
      "• Developed responsive interfaces for the Human Resource System using ReactJS, Tailwind CSS, and Material UI.",
      "• Contributed to requirement gathering, SRS documentation, and frontend implementation throughout the project lifecycle.",
    ],
    technologies: ["React.js", "Tailwind CSS", "Material UI", "Git"],
    current: false,
  },
];
