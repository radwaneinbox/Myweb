import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Globe2 } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Building responsive and performant web applications using modern technologies.'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating beautiful and intuitive user interfaces with attention to detail.'
  },
  {
    icon: Globe2,
    title: 'SEO Optimization',
    description: 'Optimizing websites for better search engine rankings and visibility.'
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Passionate Frontend Developer Based in Morocco
            </h3>
            <p className="text-gray-300 mb-6">
              With over 1 years of experience in web development, student at software engineer in Alx Frond-end Developrs I specialize in creating
              modern and user-friendly websites. My approach combines technical expertise
              with creative problem-solving to deliver exceptional digital experiences.
            </p>
            <div className="grid grid-cols-2 gap-4 text-white">
              <div>
                <p className="font-semibold">Name:</p>
                <p className="text-gray-300">Radioane Khoubbane</p>
              </div>
              <div>
                <p className="font-semibold">Email:</p>
                <p className="text-gray-300">redzmourine671@gmail.com</p>
              </div>
              <div>
                <p className="font-semibold">From:</p>
                <p className="text-gray-300">Morocco, Rabat</p>
              </div>
              <div>
                <p className="font-semibold">Experience:</p>
                <p className="text-gray-300">1+ Years</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-xl border border-gray-800"
              >
                <service.icon size={32} className="text-purple-500 mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">{service.title}</h4>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}