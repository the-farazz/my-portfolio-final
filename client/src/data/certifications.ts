export interface Certification {
  title: string;
  organization: string;
  description: string;
  icon: string;
}

export const certifications: Certification[] = [
  {
    title: "Front End Web Development",
    organization: "Jawan Pakistan",
    description:
      "Completed Front End Web Development Course covering HTML, CSS, JavaScript, and modern frameworks.",
    icon: "💻",
  },
  {
    title: "Back End Development",
    organization: "DecoTech",
    description:
      "Completed Back End Development Course covering Node.js, JavaScript, and modern backend frameworks.",
    icon: "🏆",
  },
  {
    title: "ReactJS Bootcamp",
    organization: "DevTown",
    description:
      "Completed ReactJS Bootcamp covering components, hooks, state management, and modern React development practices.",
    icon: "⚛️",
  },
];

export const CERTIFICATES_DRIVE_LINK =
  "https://drive.google.com/drive/folders/1Bsev4PGvp2hsA6-dFwgIlHSoBkuKgdO9";
