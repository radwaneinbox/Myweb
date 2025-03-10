import React, { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Blog', 'Contact'];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Code2 size={32} className="text-purple-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
              DevPortfolio
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-purple-500 transition-colors"
              >
                {item}
              </a>
            ))}
            {/* Update "Download CV" button to link */}
            <a
              href="https://www.linkedin.com/in/khoubbane-radioane-09a8ab245/"  
              className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white hover:opacity-90 transition-opacity"
              target="_blank"  
              rel="noopener noreferrer" 
            >
              Download CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-black/95 rounded-lg p-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-white hover:text-purple-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            {/* Mobile Download CV link */}
            <a
              href="https://www.linkedin.com/in/khoubbane-radioane-09a8ab245/" 
              className="w-full mt-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white hover:opacity-90 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
