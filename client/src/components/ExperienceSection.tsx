export default function ExperienceSection() {
  const experiences = [
    {
      title: "Front End Developer – Junior Developer",
      company: "Karsaaz Entire Business Solutions",
      period: "Jan. 2025 – Present",
      description: "Leading frontend development for complex business solutions including ERP and CRM systems.",
      achievements: [
        "• Currently building a CRM platform frontend using Next.js, consuming Java-based REST APIs connected to a PostgreSQL database, with 50+ screens including a comprehensive User Management module.",
        "• Developed responsive ERP system interfaces using Next.js, Tailwind CSS, and Material UI, integrating with FastAPI (Python)-based REST APIs.",
        "• Built reusable, modular component architectures to streamline development across both ERP and CRM systems.",
        "• Collaborated closely with backend teams to ensure seamless API integration and consistent data flow."
      ],
      technologies: ["Next.js", "Redux", "Tailwind CSS", "Material UI", "FastAPI"],
      current: true
    },
    {
      title: "Front End Developer – Internship", 
      company: "Xenasys Pvt. Ltd",
      period: "Oct. 2024 – Dec. 2024",
      description: "Contributed to the development of a Franchise Management System (FMS).",
      achievements: [
        "• Developed 10+ responsive and interactive screens for the Franchise Management System using ReactJS, Tailwind CSS, and Material UI.", 
        "• Contributed to a live project, ensuring high standards for user experience and interface consistency.",
        "• Adapted UI components to reflect evolving project requirements in an agile development environment."
      ],
      technologies: ["React.js", "Tailwind CSS", "Material UI"],
      current: false
    },
    {
      title: "Front End Developer – Internship",
      company: "DevLogix", 
      period: "Jul. 2024 – Oct. 2024",
      description: "Gained hands-on experience in building HR Management Systems.",
      achievements: [
        "• Developed responsive, user-friendly interfaces for the HR Management System using ReactJS, Tailwind CSS, and Material UI.",
        "• Collaborated with the team from project inception, contributing to requirement gathering and SRS documentation.",
        "• Gained hands-on experience with the full software development lifecycle from initial planning to implementation."
      ],
      technologies: ["React.js", "Tailwind CSS", "Material UI", "Git"],
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
