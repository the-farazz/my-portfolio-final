import { GraduationCap, BookOpen, Code2, Brain, TrendingUp } from 'lucide-react';

const education = [
  {
    degree: "Bachelor of Computer Science – BSCS",
    institution: "University of Karachi, UBIT",
    location: "Karachi, Pakistan",
    period: "Feb. 2021 – Apr. 2024",
    status: "Completed",
    description:
      "Successfully completed graduation in Computer Science, gaining strong expertise in software development, data structures, algorithms, and technical problem solving.",
    Icon: GraduationCap,
  },
  {
    degree: "Intermediate – Pre-Engineering",
    institution: "Govt. Dehli College",
    location: "Karachi, Pakistan",
    period: "Apr. 2017 – Apr. 2019",
    status: "Completed",
    description:
      "Gained a strong academic foundation in Pre-Engineering, developing analytical and problem-solving skills through a structured curriculum that fostered academic and professional growth.",
    Icon: BookOpen,
  },
];

const foundations = [
  { Icon: Code2,      title: 'Software Development', desc: 'Strong foundation in programming principles and software engineering' },
  { Icon: Brain,      title: 'Problem Solving',       desc: 'Analytical thinking and systematic approach to technical challenges' },
  { Icon: TrendingUp, title: 'Academic Excellence',   desc: 'Consistent academic performance and dedication to learning' },
];

export default function EducationSection() {
  return (
    <section className="py-20 px-4 lg:px-8 bg-[rgb(40,40,40)] light:bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white light:text-gray-900">
            Education
          </h2>
          <div className="w-20 h-1 bg-[yellow] mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[yellow] hidden md:block"></div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative flex items-start">
                <div className="absolute left-6 w-4 h-4 rounded-full bg-[yellow] border-4 border-[rgb(40,40,40)] hidden md:block"></div>
                <div className="md:ml-20 bg-[rgb(30,30,30)] p-8 rounded-xl w-full hover:shadow-xl transition-all duration-300 hover:scale-[1.02] light:bg-white light:border light:border-gray-200">
                  <div className="flex items-start space-x-6">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-[yellow] rounded-full flex items-center justify-center flex-shrink-0">
                      <edu.Icon className="w-7 h-7 text-[rgb(30,30,30)]" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-semibold text-[yellow]">{edu.degree}</h3>
                        <span className="text-sm text-gray-400 font-medium mt-1 md:mt-0">{edu.period}</span>
                      </div>
                      <h4 className="text-lg text-white font-medium light:text-gray-900">{edu.institution}</h4>
                      <p className="text-sm text-gray-500 mb-3">{edu.location}</p>
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-[rgb(40,40,40)] text-[yellow] text-sm rounded-full border border-[yellow]">
                          {edu.status}
                        </span>
                      </div>
                      <p className="text-gray-400 leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Foundation */}
        <div className="mt-16 bg-[rgb(30,30,30)] p-8 rounded-xl light:bg-white light:border light:border-gray-200">
          <h3 className="text-xl font-semibold text-[yellow] mb-6 text-center">Academic Foundation</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {foundations.map(({ Icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="w-12 h-12 bg-[yellow] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-[rgb(30,30,30)]" />
                </div>
                <h4 className="font-semibold text-white mb-2 light:text-gray-900">{title}</h4>
                <p className="text-gray-400 text-sm light:text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}