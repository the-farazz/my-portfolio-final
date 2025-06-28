'use client'

import { motion } from 'framer-motion'
import { Linkedin, Github, Mail, Phone } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/muhammad-zain0453',
      label: 'LinkedIn',
    },
    {
      icon: Github,
      href: 'https://github.com',
      label: 'GitHub',
    },
    {
      icon: Mail,
      href: 'mailto:zainkhan0453@gmail.com',
      label: 'Email',
    },
    {
      icon: Phone,
      href: 'tel:03102608198',
      label: 'Phone',
    },
  ]

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <motion.h3
            className="text-2xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Muhammad Zain
          </motion.h3>

          <motion.p
            className="text-gray-400 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Front-End Developer | React.js Specialist
          </motion.p>

          <motion.div
            className="flex justify-center space-x-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="border-t border-gray-800 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-sm">
              © {currentYear} Muhammad Zain. All rights reserved. Built with React.js and passion.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}