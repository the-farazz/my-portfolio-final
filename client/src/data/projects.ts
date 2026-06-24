export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
}

export const projects: Project[] = [
  {
    title: "Enterprise Resource Planning (ERP – Karsaaz)",
    description:
      "Built responsive ERP interfaces with seamless FastAPI integration and efficient Redux state management. Currently developing a CRM module with 50+ screens including a full User Management system consuming Java-based REST APIs with PostgreSQL.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Next.js", "Tailwind CSS", "Material UI", "Redux", "FastAPI"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    title: "Zanora Fashion (E-Commerce)",
    description:
      "Built a fully responsive fashion e-commerce frontend featuring product listings, filtering, and a shopping cart with Redux state management. Integrated a WhatsApp-based order redirect flow for seamless customer-to-seller order placement.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Next.js", "Tailwind CSS", "Redux", "WhatsApp API"],
    githubLink: "#",
    liveLink: "https://zanora-fashion.vercel.app",
  },
  {
    title: "Franchise Management System (FMS – Xenasys)",
    description:
      "Developed 10+ responsive screens for a Zong Franchise Management System including Retailer Easy Load Records and SIM purchase tracking modules. Ensured high standards of UI consistency and user experience.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Next.js", "Tailwind CSS", "Material UI"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    title: "Human Resource System (HRS – DevLogix)",
    description:
      "Developed the landing page and contributed to multiple UI screens for an HR Management System. Built responsive and reusable components ensuring consistent user experience across the application.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Next.js", "Tailwind CSS", "Material UI"],
    githubLink: "#",
    liveLink: "#",
  },
];
