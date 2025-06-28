'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, GraduationCap, Code, Heart, Linkedin, Github, Mail } from 'lucide-react'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const quickFacts = [
    { icon: MapPin, text: 'Karachi, Pakistan' },
    { icon: GraduationCap, text: 'BS Software Engineering' },
    { icon: Code, text: '3+ Years Experience' },
    { icon: Heart, text: 'React.js Enthusiast' },
  ]

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/muhammad-zain0453', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Mail, href: 'mailto:zainkhan0453@gmail.com', label: 'Email' },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">About Me</h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-700 leading-relaxed"
            >
              I'm a passionate Front-End Developer with expertise in JavaScript, React.js, and modern web technologies.
              My journey in software development has been driven by a desire to create intuitive, efficient, and scalable web applications.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-700 leading-relaxed"
            >
              Currently pursuing my BS in Software Engineering from the University of Karachi, I've gained hands-on experience
              working with companies like Karsaaz Solutions and KCOMPUTE, where I've contributed to enhancing user experiences
              and migrating legacy systems to modern web platforms.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-700 leading-relaxed"
            >
              One of my key achievements includes successfully migrating a desktop POS system to a web-based platform
              with secure user authentication, serving hotels and inventory management needs. This project showcased
              my ability to work with complex requirements and deliver robust solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex space-x-4 pt-4"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 p-8 rounded-xl"
          >
            <h3 className="text-xl font-semibold text-black mb-6">Quick Facts</h3>
            <div className="space-y-4">
              {quickFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                >
                  <fact.icon className="text-black w-6 h-6 mr-3" />
                  <span className="text-gray-700">{fact.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}