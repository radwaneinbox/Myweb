import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML5', level: 90 },
  { name: 'CSS3/SASS', level: 85 },
  { name: 'JavaScript', level: 70 },
  { name: 'React.js', level: 70 },
  { name: 'TypeScript', level: 60 },
  { name: 'Node.js', level: 50 },
  { name: 'Next.js', level: 40 },
  { name: 'Tailwind css', level: 80 },
  { name: 'Figam', level: 50 },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-2 flex justify-between items-center">
                <span className="text-white font-semibold">{skill.name}</span>
                <span className="text-gray-400">{skill.level}%</span>
              </div>
              <div className="h-3 bg-gray-900 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}