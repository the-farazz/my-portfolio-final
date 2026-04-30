import { Github, ExternalLink } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      title: "Enterprise Resource Planning (ERP – Karsaaz)",
      description: "Built responsive ERP interfaces with seamless FastAPI integration and efficient Redux state management. Currently developing a CRM module with 50+ screens including a full User Management system consuming Java-based REST APIs with PostgreSQL.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Next.js", "Tailwind CSS", "Material UI", "Redux", "FastAPI"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Zanora Fashion (E-Commerce)",
      description: "Built a fully responsive fashion e-commerce frontend featuring product listings, filtering, and a shopping cart with Redux state management. Integrated a WhatsApp-based order redirect flow for seamless customer-to-seller order placement.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Next.js", "Tailwind CSS", "Redux", "WhatsApp API"],
      githubLink: "#",
      liveLink: "https://zanora-fashion.vercel.app"
    },
    {
      title: "Franchise Management System (FMS – Xenasys)", 
      description: "Developed 10+ responsive screens for a Zong Franchise Management System including Retailer Easy Load Records and SIM purchase tracking modules. Ensured high standards of UI consistency and user experience.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Next.js", "Tailwind CSS", "Material UI"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Human Resource System (HRS – DevLogix)",
      description: "Developed the landing page and contributed to multiple UI screens for an HR Management System. Built responsive and reusable components ensuring consistent user experience across the application.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Next.js", "Tailwind CSS", "Material UI"],
      githubLink: "#",
      liveLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 lg:px-8 bg-[rgb(40,40,40)] light:bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white light:text-gray-900">Featured Projects</h2>
          <div className="w-20 h-1 bg-[yellow] mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto light:text-gray-600">
            Check out my ReactJS projects below, each designed to be user friendly and visually appealing.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[rgb(30,30,30)] rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl light:bg-white light:border light:border-gray-200"
            >
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[yellow] mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed light:text-gray-600">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[rgb(40,40,40)] text-[yellow] text-sm rounded-full light:bg-gray-100 light:text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.githubLink}
                    className="text-[yellow] hover:text-white transition-colors duration-300 flex items-center light:hover:text-gray-700"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                  <a 
                    href={project.liveLink}
                    className="text-[yellow] hover:text-white transition-colors duration-300 flex items-center light:hover:text-gray-700"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <button className="bg-white text-[rgb(30,30,30)] px-8 py-3 rounded-lg font-medium hover:bg-[yellow] transition-colors duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
