"use client";
import React, { useState } from 'react';
import {Quote, Star } from 'lucide-react';

const ChevronRight = ({ className }) => (
  <svg 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M9 5l7 7-7 7" 
    />
  </svg>
);

export default function AboutUs() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Working with this team was an absolute pleasure. They understood exactly what we were looking for and made the entire process seamless. We found our dream home within weeks!",
      author: "Jennifer & Mark Thompson",
      property: "Luxury Villa Purchase",
      rating: 5
    },
    {
      quote: "Professional, knowledgeable, and genuinely caring. They guided us through every step of selling our family home and made what could have been stressful into a positive experience.",
      author: "Robert Sullivan",
      property: "Estate Sale",
      rating: 5
    },
    {
      quote: "As first-time buyers, we had so many questions. The team was patient, educational, and truly invested in finding us the perfect starter home. Couldn't recommend them more!",
      author: "Amanda & Chris Lee",
      property: "First Home Purchase",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full px-3 py-8 sm:px-4 sm:py-12 bg-gray-50 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-6 sm:mb-8 lg:mb-12">
            <p className="text-xs sm:text-sm text-gray-600 mb-1.5 sm:mb-2 font-medium">About Our Company</p>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              Your Trusted Partner in<br />Finding Your Dream Home
            </h1>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-12">
            <div className="text-center">
              <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-blue-600 mb-0.5 sm:mb-1">500+</p>
              <p className="text-[10px] sm:text-xs lg:text-sm text-gray-600">Properties Sold</p>
            </div>
            <div className="text-center">
              <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-blue-600 mb-0.5 sm:mb-1">1.2k+</p>
              <p className="text-[10px] sm:text-xs lg:text-sm text-gray-600">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-blue-600 mb-0.5 sm:mb-1">15+</p>
              <p className="text-[10px] sm:text-xs lg:text-sm text-gray-600">Years Experience</p>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {/* Image Card */}
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop" 
                alt="Modern luxury home exterior"
                className="w-full h-56 sm:h-64 md:h-80 lg:h-full object-cover"
              />
            </div>

            {/* Services Cards */}
            <div className="flex flex-col gap-4 sm:gap-6">
              {/* Property Listing Services */}
              <div className="bg-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
                <h3 className="text-base sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                  Property Listing Services
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                  We showcase your property to thousands of potential buyers through premium listings, professional photography, and strategic marketing to ensure maximum visibility and quick sales.
                </p>
                <button className="flex items-center gap-2 text-blue-600 font-semibold text-xs sm:text-sm lg:text-base hover:gap-3 transition-all">
                  Read More <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
              </div>

              {/* Buyer Consultation */}
              <div className="bg-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
                <h3 className="text-base sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                  Buyer Consultation
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                  Our experienced agents provide personalized guidance throughout your home buying journey, from property selection to negotiation, ensuring you find the perfect home within your budget.
                </p>
                <button className="flex items-center gap-2 text-blue-600 font-semibold text-xs sm:text-sm lg:text-base hover:gap-3 transition-all">
                  Read More <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
              </div>

              {/* Investment Advisory */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-md">
                <h3 className="text-base sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                  Investment Advisory
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                  Our expert real estate advisors help you identify lucrative investment opportunities, analyze market trends, and build a profitable property portfolio. Partner with us to make informed decisions and maximize your returns.
                </p>
                <button className="flex items-center gap-2 text-blue-600 font-semibold text-xs sm:text-sm lg:text-base hover:gap-3 transition-all">
                  Read More <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-10 sm:py-12 lg:py-16 xl:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4 px-4">What Our Clients Say</h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Don't just take our word for it—hear from the families we've helped find home.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300">
                <Quote className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-blue-600 mb-3 sm:mb-4" />
                <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed mb-4 sm:mb-5 lg:mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-gray-200 pt-3 sm:pt-4">
                  <p className="text-sm sm:text-base font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-xs sm:text-sm text-gray-600">{testimonial.property}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-12 lg:py-16 xl:py-24 bg-gradient-to-r from-blue-600 to-blue-500">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-5 lg:mb-6 px-4">Ready to Find Your Dream Home?</h2>
          <p className="text-sm sm:text-base lg:text-lg text-blue-100 max-w-2xl mx-auto mb-6 sm:mb-7 lg:mb-8 px-4">
            Join thousands of satisfied clients who trusted us with their real estate journey. Let's write your success story together.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4">
            <button className="px-5 py-2.5 sm:px-6 sm:py-3 bg-white text-blue-600 rounded-lg text-sm sm:text-base font-medium hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg">
              Browse Properties
            </button>
            <button className="px-5 py-2.5 sm:px-6 sm:py-3 bg-blue-700 text-white rounded-lg text-sm sm:text-base font-medium hover:bg-blue-800 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg border-2 border-white">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}