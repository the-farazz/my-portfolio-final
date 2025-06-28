export default function ExperienceSection() {
  const experiences = [
    {
      title: "Front-End Developer",
      company: "Karsaaz Solutions",
      period: "January 2025 – Present",
      description: "Currently contributing to the development and enhancement of a comprehensive ERP system using modern frameworks and tools, with a focus on scalability, efficiency, and seamless user experiences.",
      achievements: [
        "• Developing dynamic ERP modules using NextJS and TypeScript",
        "• Implementing responsive designs with Tailwind CSS",
        "• Building reusable component libraries"
      ],
      technologies: [ "Next.js", "TypeScript", "Tailwind"],
      current: true
    },
    {
      title: "Front-End Developer", 
      company: "Xenasys Pvt. Ltd",
      period: "October 2024 – December 2024",
      description: "Contributed to the development of a Franchise Management System, focusing on responsive design, user-centric interfaces, and efficient state management. Collaborated with cross-functional teams to deliver high quality solutions.",
      achievements: [
        "• Delivered 10+ screens as part of the live Franchise Management System project.", 
        "• Built responsive React components with Material-UI and Tailwind",
        "• Optimized application performance and loading times"
      ],
      technologies: ["React.js", "Material-UI", "Tailwind"],
      current: false
    },
    {
      title: "Junior Front-End Developer",
      company: "DevLogix", 
      period: "July 2024 – October 2024",
      description: "Kickstarted my professional journey by contributing to the development of an HR Management System. Gained hands-on experience with modern web development practices while collaborating with a dynamic team.",
      achievements: [
        "• Built responsive interfaces using React.js.",
        "• Used Git and GitHub for version control and collaboration.",
        "• Delivered designs precisely as provided in Figma."
      ],
            technologies: ["React.js", "Material-UI", "Tailwind"],

      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white light:text-gray-900">Professional Experience</h2>
          <div className="w-20 h-1 bg-[yellow] mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[yellow] hidden md:block"></div>

          {/* Experience Items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                <div className={`absolute left-6 w-4 h-4 rounded-full border-4 border-[rgb(30,30,30)] hidden md:block ${
                  exp.current ? 'bg-[yellow]' : 'bg-gray-400'
                }`}></div>
                <div className="md:ml-20 bg-[rgb(40,40,40)] p-6 rounded-xl w-full hover:shadow-xl transition-shadow duration-300 light:bg-white light:border light:border-gray-200">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className={`text-xl font-semibold ${exp.current ? 'text-[yellow]' : 'text-white light:text-gray-900'}`}>
                      {exp.title}
                    </h3>
                    <span className="text-sm text-gray-400 font-medium light:text-gray-500">{exp.period}</span>
                  </div>
                  <h4 className="text-lg text-gray-300 font-medium mb-3 light:text-gray-600">{exp.company}</h4>
                  <p className="text-gray-400 leading-relaxed mb-4 light:text-gray-500">
                    {exp.description}
                  </p>
                  <ul className="text-gray-400 space-y-2 mb-4 light:text-gray-500">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 text-sm rounded-full border ${
                          exp.current 
                            ? 'bg-[rgb(30,30,30)] text-[yellow] border-[yellow]' 
                            : 'bg-[rgb(30,30,30)] text-gray-300 border-gray-600 light:bg-gray-100 light:text-gray-600 light:border-gray-300'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
