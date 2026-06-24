export interface Certification {
  title: string;
  organization: string;
  description: string;
  icon: string;
}

export const certifications: Certification[] = [
  {
    title: "Front-End Development",
    organization: "Jawan Pakistan",
    description:
      "Complete front-end development course covering HTML, CSS, JavaScript, and modern frameworks.",
    icon: "💻",
  },
  {
    title: "Back-End Development",
    organization: "Decotech",
    description:
      "Complete back-end development course covering JavaScript, NodeJS and modern frameworks.",
    icon: "🏆",
  },
  {
    title: "ReactJS Course",
    organization: "DevTown",
    description:
      "Comprehensive React.js training covering components, hooks, state management, and modern development practices.",
    icon: "⚛️",
  },
];
