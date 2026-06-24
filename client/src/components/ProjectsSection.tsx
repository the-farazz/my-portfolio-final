import { Github, ExternalLink } from 'lucide-react';
import { projects } from '@/data/projects';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
}

export default function ProjectsSection() {
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
          {projects.map((project: Project, index: number) => (
            <div
              key={index}
              className="bg-[rgb(30,30,30)] rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl light:bg-white light:border light:border-gray-200"
            >
              <img 
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[yellow] mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed light:text-gray-600">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech: string, i: number) => (
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
                    aria-label={`View source code for ${project.title}`}
                    className="text-[yellow] hover:text-white transition-colors duration-300 flex items-center light:hover:text-gray-700"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                  <a 
                    href={project.liveLink}
                    aria-label={`View live demo for ${project.title}`}
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
          <button className="bg-white text-[rgb(30,30,30)] px-8 py-3 rounded-lg font-medium hover:bg-[yellow] transition-colors duration-300 light:bg-gray-900 light:text-white light:hover:bg-[yellow] light:hover:text-gray-900">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
