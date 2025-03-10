import React from 'react';
import { Layout, Palette, Monitor, Download } from 'lucide-react';

const features = [
  {
    icon: Layout,
    title: 'Professional Templates',
    description: 'Choose from a variety of professionally designed templates'
  },
  {
    icon: Palette,
    title: 'Customizable Design',
    description: 'Personalize colors, fonts, and layout to match your style'
  },
  {
    icon: Monitor,
    title: 'Responsive Design',
    description: 'Your portfolio looks great on all devices'
  },
  {
    icon: Download,
    title: 'Easy Export',
    description: 'Download your portfolio or host it online'
  }
];

export function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Builder?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-purple-600 mb-4">
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}