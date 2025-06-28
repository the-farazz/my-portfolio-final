'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Award, Plus } from 'lucide-react'

export default function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const education = {
    degree: 'BS in Software Engineering',
    institution: 'University of Karachi',
    period: '2022 - 2025',
    description: 'Pursuing comprehensive studies in software development, algorithms, data structures, and modern programming paradigms with focus on web technologies.',
  }

  const certifications = [
    {
      title: 'Web Development Certificate',
      institution: 'BMJ Institute',
      subjects: 'HTML, CSS, JavaScript, React.js',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
      completed: true,
    },
    {
      title: 'More Certifications Coming',
      institution: 'Currently pursuing additional certifications in React Native and TypeScript',
      subjects: '',
      technologies: [],
      completed: false,
    },
  ]

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Education & Certifications</h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8" ref={ref}>
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h3 className="text-2xl font-semibold text-black mb-6">Education</h3>
            <motion.div
              className="bg-gray-50 p-6 rounded-xl"
              whileHover={{ boxShadow: '0 10px 25px rgba(0,0,0,0.1)', y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start space-x-4">
                <motion.div
                  className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <GraduationCap size={20} />
                </motion.div>
                <div className="flex-1">
                  <motion.h4
                    className="text-lg font-semibold text-black mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {education.degree}
                  </motion.h4>
                  <motion.p
                    className="text-gray-600 mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {education.institution}
                  </motion.p>
                  <motion.p
                    className="text-gray-500 text-sm mb-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    {education.period}
                  </motion.p>
                  <motion.p
                    className="text-gray-600"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    {education.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-black mb-6">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className={`bg-gray-50 p-6 rounded-xl transition-all duration-300 ${
                    !cert.completed ? 'opacity-60' : ''
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: cert.completed ? 1 : 0.6, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  whileHover={cert.completed ? { boxShadow: '0 10px 25px rgba(0,0,0,0.1)', y: -2 } : {}}
                >
                  <div className="flex items-start space-x-4">
                    <motion.div
                      className={`w-12 h-12 text-white rounded-lg flex items-center justify-center ${
                        cert.completed ? 'bg-black' : 'bg-gray-400'
                      }`}
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      {cert.completed ? <Award size={20} /> : <Plus size={20} />}
                    </motion.div>
                    <div className="flex-1">
                      <motion.h4
                        className={`text-lg font-semibold mb-2 ${
                          cert.completed ? 'text-black' : 'text-gray-500'
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      >
                        {cert.title}
                      </motion.h4>
                      <motion.p
                        className={cert.completed ? 'text-gray-600 mb-2' : 'text-gray-400'}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      >
                        {cert.institution}
                      </motion.p>
                      {cert.subjects && (
                        <motion.p
                          className="text-gray-500 text-sm mb-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                        >
                          {cert.subjects}
                        </motion.p>
                      )}
                      {cert.technologies.length > 0 && (
                        <motion.div
                          className="flex flex-wrap gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                        >
                          {cert.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              className="px-2 py-1 bg-white text-gray-700 text-xs rounded border"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : {}}
                              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 + techIndex * 0.05 }}
                              whileHover={{ scale: 1.05 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}