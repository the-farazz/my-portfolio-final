import { Github, ExternalLink } from 'lucide-react';
import { keyProjects, vibeCodingProjects, type Project } from '@/data/projects';

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-[rgb(30,30,30)] rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl light:bg-white light:border light:border-gray-200 flex flex-col">
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-[yellow] mb-3">{project.title}</h3>
        <p className="text-gray-400 mb-3 leading-relaxed light:text-gray-600 text-sm">
          {project.description}
        </p>
        <ul className="text-gray-500 text-sm mb-4 space-y-1 flex-1">
          {project.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-[yellow] mt-1 shrink-0">▸</span>
              {b}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-[rgb(40,40,40)] text-[yellow] text-xs rounded-full light:bg-gray-100 light:text-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          {project.githubLink !== '#' && (
            <a
              href={project.githubLink}
              aria-label={`View source code for ${project.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[yellow] hover:text-white transition-colors duration-300 flex items-center text-sm light:hover:text-gray-700"
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </a>
          )}
          {project.liveLink !== '#' && (
            <a
              href={project.liveLink}
              aria-label={`View live demo for ${project.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[yellow] hover:text-white transition-colors duration-300 flex items-center text-sm light:hover:text-gray-700"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 lg:px-8 bg-[rgb(40,40,40)] light:bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white light:text-gray-900">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-[yellow] mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto light:text-gray-600">
            A collection of professional and freelance projects — each designed for performance, usability, and scale.
          </p>
        </div>

        {/* Key Projects */}
        <div className="mb-14">
          <h3 className="text-2xl font-semibold text-[yellow] mb-6">
            Key Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        {/* Vibe Coding */}
        <div>
          <h3 className="text-2xl font-semibold text-[yellow] mb-6">
            Vibe Coding
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vibeCodingProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
