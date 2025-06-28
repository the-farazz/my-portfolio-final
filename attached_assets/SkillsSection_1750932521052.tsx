'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const programmingSkills = [
    { name: 'JavaScript (ES6+)', level: 90 },
    { name: 'React.js', level: 95 },
    { name: 'TypeScript', level: 85 },
    { name: 'Redux Toolkit', level: 88 },
  ]

  const toolsSkills = [
    { name: 'React Native', level: 80 },
    { name: 'Material-UI', level: 92 },
    { name: 'REST APIs', level: 87 },
    { name: 'Flutter', level: 75 },
  ]

  const skillIcons = [
    { name: 'React', icon: '⚛️' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Git', icon: '📝' },
  ]

  const SkillBar = ({ skill, index }: { skill: { name: string; level: number }; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="skill-item"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700 font-medium">{skill.name}</span>
        <span className="text-gray-500">{skill.level}%</span>
      </div>
      <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
        <motion.div
          className="bg-black h-2 rounded-full"
          initial={{ width: '0%' }}
          animate={isInView ? { width: `${skill.level}%` } : { width: '0%' }}
          transition={{ duration: 2, ease: 'easeOut', delay: 0.5 + index * 0.1 }}
        />
      </div>
    </motion.div>
  )

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12" ref={ref}>
          {/* Programming Languages */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-black mb-6">Languages & Frameworks</h3>
            <div className="space-y-4">
              {programmingSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-black mb-6">Tools & Technologies</h3>
            <div className="space-y-4">
              {toolsSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skill Icons Grid */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {skillIcons.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="text-center"
              initial={{ opacity: 0, scale: 0.3 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.8 + index * 0.1,
                type: 'spring',
                stiffness: 100,
              }}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <p className="text-sm text-gray-600">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}