import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';

const posts = [
  {
    title: 'The Future of React Development',
    excerpt: 'Exploring the latest features and best practices in React development',
    date: 'Mar 15, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Mastering TypeScript',
    excerpt: 'Essential TypeScript features every developer should know',
    date: 'Mar 10, 2024',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Building Responsive Layouts',
    excerpt: 'Tips and tricks for creating perfect responsive designs',
    date: 'Mar 5, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

export function Blog() {
  return (
    <section id="blog" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Latest Blog Posts</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-xl overflow-hidden group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400">{post.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}