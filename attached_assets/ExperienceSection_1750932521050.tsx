'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experiences = [
    {
      title: 'Front-End Developer',
      company: 'Karsaaz Solutions',
      period: 'Jan 2025 - Present',
      description: 'Currently working on exciting new projects and enhancing existing React applications. Focusing on modern development practices and scalable architecture solutions. Details to be updated as projects progress.',
      responsibilities: [],
      current: true,
    },
    {
      title: 'React.js Developer',
      company: 'KCOMPUTE (Pvt) Ltd.',
      period: 'June 2023 - Dec 2024',
      description: 'Enhanced UX and functionality in React projects, focusing on user-centered design principles. Successfully migrated desktop systems to scalable web platforms with secure authentication mechanisms.',
      responsibilities: [
        'Migrated POS system to web-based platform for hotels and inventory management',
        'Implemented secure user authentication and authorization systems',
        'Improved application performance and user experience',
        'Collaborated with cross-functional teams using Agile methodologies',
      ],
      current: false,
    },
    {
      title: 'Junior Developer',
      company: 'Eyecon Consultant',
      period: 'Jan 2023 - May 2023',
      description: 'Gained valuable experience in integrating REST APIs and managing application state with Redux. Developed foundational skills in modern web development practices.',
      responsibilities: [
        'Integrated REST APIs with React applications',
        'Implemented state management using Redux',
        'Collaborated on responsive web application development',
        'Learned Agile development methodologies',
      ],
      current: false,
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </motion.div>

        <div className="relative" ref={ref}>
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative flex items-start"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <motion.div
                  className={`absolute left-6 w-4 h-4 rounded-full border-4 border-white shadow-lg ${
                    exp.current ? 'bg-black' : 'bg-gray-400'
                  }`}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                />
                <motion.div
                  className="ml-20 bg-gray-50 p-6 rounded-lg"
                  whileHover={{ boxShadow: '0 10px 25px rgba(0,0,0,0.1)', y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-semibold text-black">{exp.title}</h3>
                    <span className="text-sm text-gray-500 font-medium">{exp.period}</span>
                  </div>
                  <h4 className="text-lg text-gray-700 font-medium mb-3">{exp.company}</h4>
                  <p className="text-gray-600 leading-relaxed mb-3">{exp.description}</p>
                  {exp.responsibilities.length > 0 && (
                    <ul className="text-gray-600 space-y-1">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: index * 0.2 + 0.5 + idx * 0.1 }}
                        >
                          • {responsibility}
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}