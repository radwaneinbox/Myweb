import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online shopping platform built with React and Node.js',
    image: 'https://cdn.pixabay.com/photo/2016/12/20/22/32/holiday-shopping-1921658_1280.jpg',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: '#',
    live: '#'
  },
  {
    title: 'Task Management App',
    description: 'A productivity app for managing daily tasks and projects',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Redux', 'Firebase'],
    github: '#',
    live: '#'
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather information with interactive maps',
    image: 'https://cdn.pixabay.com/photo/2015/05/15/01/48/computer-767776_1280.jpg',
    tags: ['React', 'OpenWeather API'],
    github: '#',
    live: '#'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-xl overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.github}
                    className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition-colors"
                  >
                    <Github className="text-white" size={20} />
                  </a>
                  <a
                    href={project.live}
                    className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition-colors"
                  >
                    <ExternalLink className="text-white" size={20} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}