'use client';

import { Check, Zap, Shield, Clock } from 'lucide-react';

export default function Pricing() {
  const features = [
    'Unlimited gym access 24/7',
    'Personal training sessions',
    'Group fitness classes',
    'Nutrition coaching & meal plans',
    'Progress tracking & analytics',
    'Mobile app access',
    'Locker & shower facilities',
    'Free guest passes',
  ];

  const trustBadges = [
    { icon: Zap, text: 'Instant Access' },
    { icon: Shield, text: 'Money-Back Guarantee' },
    { icon: Clock, text: 'Cancel Anytime' },
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full font-semibold text-sm mb-6">
            Simple Pricing
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            One Plan,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              Everything Included
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            No hidden fees, no complicated tiers. Just one comprehensive membership that gives you access to everything.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Popular Badge */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                🔥 Most Popular
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl border-2 border-orange-500/20 overflow-hidden">
              {/* Card Header */}
              <div className="bg-gradient-to-br from-orange-500 to-red-500 p-12 text-center">
                <h3 className="text-3xl font-bold text-white mb-4">Premium Membership</h3>
                <div className="flex items-end justify-center space-x-2 mb-4">
                  <span className="text-6xl font-bold text-white">$29</span>
                  <span className="text-2xl text-orange-100 pb-2">/month</span>
                </div>
                <p className="text-orange-100 text-lg">Billed monthly • Cancel anytime</p>
              </div>

              {/* Card Body */}
              <div className="p-12">
                {/* Features List */}
                <div className="space-y-5 mb-12">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href="https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-8 py-5 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-bold text-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl mb-8"
                >
                  Start Your Free Trial
                </a>

                {/* Trust Badges */}
                <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
                  {trustBadges.map((badge, index) => {
                    const Icon = badge.icon;
                    return (
                      <div key={index} className="text-center">
                        <Icon className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                        <p className="text-xs text-gray-600 font-medium">{badge.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">🎁 <strong>Limited Time Offer:</strong> First 100 members get 14 days free trial</p>
          <p className="text-sm text-gray-500">No credit card required for trial • Full access to all features</p>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h3>
          <div className="space-y-6">
            {[
              {
                q: 'Can I cancel anytime?',
                a: 'Yes! Cancel your membership anytime with no penalties or hidden fees. We believe in earning your business every month.',
              },
              {
                q: 'What\'s included in the free trial?',
                a: 'Full access to all facilities, classes, and services for 14 days. Experience everything before committing.',
              },
              {
                q: 'Do you offer corporate memberships?',
                a: 'Yes! We offer special corporate rates for teams of 5 or more. Contact us for custom pricing.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 text-lg mb-2">{faq.q}</h4>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}