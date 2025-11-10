'use client';

import { Dumbbell, Users, Calendar, TrendingUp, Heart, Award } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Dumbbell,
      title: 'Personal Training',
      description: 'One-on-one coaching tailored to your goals with certified trainers who push you to achieve more.',
      color: 'orange',
    },
    {
      icon: Users,
      title: 'Group Classes',
      description: 'High-energy group sessions that build community while delivering incredible results.',
      color: 'red',
    },
    {
      icon: Calendar,
      title: 'Flexible Scheduling',
      description: 'Train on your schedule with 24/7 access and convenient booking through our mobile app.',
      color: 'orange',
    },
    {
      icon: TrendingUp,
      title: 'Progress Tracking',
      description: 'Advanced analytics and metrics to monitor your transformation and celebrate every milestone.',
      color: 'red',
    },
    {
      icon: Heart,
      title: 'Nutrition Coaching',
      description: 'Personalized meal plans and nutrition guidance to fuel your body for optimal performance.',
      color: 'orange',
    },
    {
      icon: Award,
      title: 'Results Guarantee',
      description: 'We're committed to your success with proven programs that deliver measurable results.',
      color: 'red',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full font-semibold text-sm mb-6">
            Our Services
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Everything You Need to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              Succeed
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Comprehensive fitness solutions designed to help you reach your goals faster and maintain them for life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`inline-flex p-4 rounded-xl mb-6 bg-gradient-to-br ${
                  service.color === 'orange' 
                    ? 'from-orange-500 to-red-500' 
                    : 'from-red-500 to-orange-500'
                } shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gray-900 text-white rounded-full font-bold text-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-xl"
          >
            <span>Schedule a Free Consultation</span>
          </a>
        </div>
      </div>
    </section>
  );
}