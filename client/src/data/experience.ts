export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  current: boolean;
}

export const experiences: Experience[] = [
  {
    title: "Front End Developer – Junior Developer",
    company: "Karsaaz Entire Business Solutions",
    period: "Jan. 2025 – Present",
    description:
      "Leading frontend development for complex business solutions including ERP and CRM systems.",
    achievements: [
      "• Currently building a CRM platform frontend using Next.js, consuming Java-based REST APIs connected to a PostgreSQL database, with 50+ screens including a comprehensive User Management module.",
      "• Developed responsive ERP system interfaces using Next.js, Tailwind CSS, and Material UI, integrating with FastAPI (Python)-based REST APIs.",
      "• Built reusable, modular component architectures to streamline development across both ERP and CRM systems.",
      "• Collaborated closely with backend teams to ensure seamless API integration and consistent data flow.",
    ],
    technologies: ["Next.js", "Redux", "Tailwind CSS", "Material UI", "FastAPI"],
    current: true,
  },
  {
    title: "Front End Developer – Internship",
    company: "Xenasys Pvt. Ltd",
    period: "Oct. 2024 – Dec. 2024",
    description:
      "Contributed to the development of a Franchise Management System (FMS).",
    achievements: [
      "• Developed 10+ responsive and interactive screens for the Franchise Management System using ReactJS, Tailwind CSS, and Material UI.",
      "• Contributed to a live project, ensuring high standards for user experience and interface consistency.",
      "• Adapted UI components to reflect evolving project requirements in an agile development environment.",
    ],
    technologies: ["React.js", "Tailwind CSS", "Material UI"],
    current: false,
  },
  {
    title: "Front End Developer – Internship",
    company: "DevLogix",
    period: "Jul. 2024 – Oct. 2024",
    description: "Gained hands-on experience in building HR Management Systems.",
    achievements: [
      "• Developed responsive, user-friendly interfaces for the HR Management System using ReactJS, Tailwind CSS, and Material UI.",
      "• Collaborated with the team from project inception, contributing to requirement gathering and SRS documentation.",
      "• Gained hands-on experience with the full software development lifecycle from initial planning to implementation.",
    ],
    technologies: ["React.js", "Tailwind CSS", "Material UI", "Git"],
    current: false,
  },
];
