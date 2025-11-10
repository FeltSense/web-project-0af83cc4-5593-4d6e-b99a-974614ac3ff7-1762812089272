'use client';

import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Marketing Executive',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      quote: 'FitCore completely transformed my life. I lost 35 pounds and gained confidence I never knew I had. The trainers are incredible!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Software Engineer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      quote: 'Best investment I\'ve ever made. The flexible scheduling works perfectly with my busy lifestyle, and the results speak for themselves.',
      rating: 5,
    },
    {
      name: 'Jessica Rodriguez',
      role: 'Teacher',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      quote: 'The community here is amazing. I\'ve made lifelong friends while achieving fitness goals I thought were impossible. Highly recommend!',
      rating: 5,
    },
    {
      name: 'David Thompson',
      role: 'Business Owner',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      quote: 'After trying countless gyms, FitCore is the only one that delivered real results. The personalized approach makes all the difference.',
      rating: 5,
    },
    {
      name: 'Emily Watson',
      role: 'Nurse',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
      quote: 'The nutrition coaching combined with training has been life-changing. I have more energy than ever and feel incredible every day.',
      rating: 5,
    },
    {
      name: 'James Anderson',
      role: 'Accountant',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      quote: 'From day one, the team made me feel welcome. Six months later, I\'m in the best shape of my life at 45. Never too late to start!',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 bg-orange-500/20 border border-orange-500/30 text-orange-400 rounded-full font-semibold text-sm mb-6">
            Success Stories
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Real People,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
              Real Results
            </span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Join thousands of members who've transformed their lives with FitCore. Your success story starts here.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 group"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-10 h-10 text-orange-500 opacity-50" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4 pt-6 border-t border-gray-700">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-orange-500/50 group-hover:ring-orange-500 transition-all duration-300"
                />
                <div>
                  <div className="font-bold text-white text-lg">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 text-lg mb-6">Ready to write your own success story?</p>
          <a
            href="#pricing"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-bold text-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-orange-500/50"
          >
            <span>Start Your Transformation</span>
          </a>
        </div>
      </div>
    </section>
  );
}