import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900 via-black to-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-purple-500 text-xl font-semibold mb-4">Hello, I'm</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Radioane<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Khoubbane</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Frontend Developer specializing in building exceptional digital experiences.
              Focused on creating responsive and performant web applications.
            </p>
            <div className="flex space-x-4 mb-8">
              <a href="#" className="text-white hover:text-purple-500 transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-white hover:text-purple-500 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-white hover:text-purple-500 transition-colors">
                <Mail size={24} />
              </a>
            </div>
            <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white font-semibold hover:opacity-90 transition-opacity">
              View My Work
            </button>
          </motion.div>
          
          <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="relative flex justify-center"
>
  <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500/40 to-blue-900/40 blur-3xl absolute" />
  <img
    src="https://media.licdn.com/dms/image/v2/D4E03AQHpOZPVmEouAA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730480292291?e=1747267200&v=beta&t=7CsRAV52Gn7H-1jfYfwYnrP8WOj50vqmiCD3qLxQgEE"
    alt="Profile"
    className="w-[400px] h-[400px] object-cover rounded-full border-8 border-purple-500 shadow-3xl relative z-10"
  />
</motion.div>


        </div>
      </div>
    </section>
  );
}