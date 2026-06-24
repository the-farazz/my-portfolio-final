export interface Project {
  title: string;
  description: string;
  bullets: string[];
  image: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
  category: "key" | "vibe";
}

export const projects: Project[] = [
  // ── KEY PROJECTS ──────────────────────────────────────────────
  {
    title: "Enterprise Resource Planning (Karsaaz)",
    description:
      "ERP platform with CRM modules built with Next.js, consuming Java-based REST APIs and PostgreSQL.",
    bullets: [
      "Developed ERP interfaces with FastAPI integration and Redux-based state management.",
      "Contributed to CRM modules including User Management, Roles, and Access Control using Java-based REST APIs and PostgreSQL.",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=400",
    technologies: ["Next.js", "Tailwind CSS", "Material UI", "Redux", "FastAPI"],
    githubLink: "#",
    liveLink: "#",
    category: "key",
  },
  {
    title: "Human Resource System (DevLogix)",
    description:
      "Full-featured HR Management System with responsive, reusable component architecture.",
    bullets: [
      "Developed responsive interfaces and reusable components for a Human Resource Management System.",
      "Collaborated on frontend implementation to deliver a consistent and user-friendly experience.",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=400",
    technologies: ["Next.js", "Tailwind CSS", "Material UI"],
    githubLink: "#",
    liveLink: "#",
    category: "key",
  },
  {
    title: "Franchise Management System (Xenasys)",
    description:
      "Zong Franchise Management System with responsive modules for retailer tracking and SIM purchase records.",
    bullets: [
      "Developed and enhanced frontend modules for a Zong Franchise Management System.",
      "Built responsive interfaces while maintaining consistency and usability across the application.",
    ],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=400",
    technologies: ["Next.js", "Tailwind CSS", "Material UI"],
    githubLink: "#",
    liveLink: "#",
    category: "key",
  },

  // ── VIBE CODING ───────────────────────────────────────────────
  {
    title: "Karsaaz EBS Corporate Website",
    description:
      "Dynamic corporate website with CMS-driven content management and an administrative dashboard for seamless content updates.",
    bullets: [
      "Developed a dynamic corporate website with CMS-driven content management, enabling seamless content updates through an administrative dashboard.",
    ],
    image: "/project_images/Karsaaz EBS Corporate Website.jpeg",
    technologies: ["Next.js", "Tailwind CSS", "Material UI"],
    githubLink: "#",
    liveLink: "https://karsaazebs.com",
    category: "vibe",
  },
  {
    title: "Karsaaz EBS Fintech",
    description:
      "Dynamic fintech platform integrated with an admin panel, allowing non-technical teams to update content without developer involvement.",
    bullets: [
      "Developed a dynamic fintech platform integrated with an admin panel, allowing non-technical teams to update content without developer involvement.",
    ],
    image: "/project_images/Karsaaz EBS Fintech.jpeg",
    technologies: ["Next.js", "Tailwind CSS", "Material UI"],
    githubLink: "#",
    liveLink: "https://webtest.karsaazsolutions.com",
    category: "vibe",
  },
  {
    title: "Karsaaz Wallet",
    description:
      "Digital wallet platform with admin-managed content and responsive user interfaces.",
    bullets: [
      "Developed a dynamic digital wallet platform with admin-managed content and responsive user interfaces.",
    ],
    image: "/project_images/Karsaaz Wallet.jpeg",
    technologies: ["Next.js", "Tailwind CSS", "Material UI"],
    githubLink: "#",
    liveLink: "https://karsaazwallet.com",
    category: "vibe",
  },
  {
    title: "Karsaaz Agent Platform",
    description:
      "Responsive website showcasing AI-powered agent solutions and business automation services.",
    bullets: [
      "Developed a responsive website showcasing AI-powered agent solutions and business automation services.",
    ],
    image: "/project_images/Karsaaz Agent Platform.jpeg",
    technologies: ["Next.js", "Tailwind CSS", "Material UI"],
    githubLink: "#",
    liveLink: "https://www.karsaazagent.com",
    category: "vibe",
  },
  {
    title: "FS Visuals Photography Website",
    description:
      "Modern photography portfolio website showcasing creative work and services, built for a freelance client.",
    bullets: [
      "Designed and developed a modern photography portfolio website showcasing creative work and services.",
    ],
    image: "/project_images/FS Visuals Photography Website.jpeg",
    technologies: ["Next.js", "Tailwind CSS"],
    githubLink: "#",
    liveLink: "https://www.thefsvisuals.com",
    category: "vibe",
  },
  {
    title: "Zanora Fashion – E-Commerce Platform",
    description:
      "Fully responsive fashion e-commerce frontend with product listing, filtering, cart, and WhatsApp order flow.",
    bullets: [
      "Built a fully responsive fashion e-commerce frontend with product listing, filtering, and cart system.",
      "Integrated WhatsApp-based order flow for direct customer-to-seller communication.",
    ],
    image: "/project_images/Zanora Fashion – E-Commerce Platform.jpeg",
    technologies: ["Next.js", "Tailwind CSS", "Redux"],
    githubLink: "#",
    liveLink: "https://zanora-fashion-pqzedr7jn-faraz-alams-projects-9d827bcd.vercel.app",
    category: "vibe",
  },
  {
    title: "Budget Calculator",
    description:
      "Fintech-style budget calculator web app for income vs expense tracking and financial planning.",
    bullets: [
      "Developed a fintech-style budget calculator web application for income vs expense tracking and financial planning.",
    ],
    image: "/project_images/Budget Calculator.jpeg",
    technologies: ["Next.js", "Tailwind CSS"],
    githubLink: "#",
    liveLink: "https://fintech-budget-portal.vercel.app",
    category: "vibe",
  },
  {
    title: "Personal Portfolio",
    description:
      "Personal portfolio website showcasing projects, skills, and experience with a clean, modern UI.",
    bullets: [
      "Designed and developed a personal portfolio website showcasing projects, skills, and experience with a clean UI.",
    ],
    image: "/project_images/Personal Portfolio.jpeg",
    technologies: ["Next.js", "Tailwind CSS"],
    githubLink: "#",
    liveLink: "https://farazalamportfolio.vercel.app",
    category: "vibe",
  },
];

export const keyProjects = projects.filter((p) => p.category === "key");
export const vibeCodingProjects = projects.filter((p) => p.category === "vibe");
