import React from 'react';
import { Briefcase } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <Briefcase size={48} className="animate-bounce" />
        </div>
        <h1 className="text-5xl font-bold mb-4">Build Your Portfolio</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Create a professional portfolio in minutes. Showcase your work, skills, and experience with our easy-to-use builder.
        </p>
        <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
          Start Building Now
        </button>
      </div>
    </header>
  );
}