import React, { useState } from 'react';
import { ChevronRight, Eye, FileText, DollarSign } from 'lucide-react';

const FAQ_ITEMS = [
  {
    id: "viewing",
    question: "How do I schedule a property viewing?",
    answer: "You can schedule a property viewing by contacting us through our website, calling our office, or using the WhatsApp chat feature. Our agents will coordinate with you to find a convenient time for the viewing.",
    icon: Eye,
  },
  {
    id: "documents",
    question: "What documents are required for property purchase?",
    answer: "The required documents vary by property type and location, but generally include proof of identity, proof of income, tax documents, and for some properties, a pre-approval letter from your bank. Our agents will provide you with a complete checklist based on your specific situation.",
    icon: FileText,
  },
  {
    id: "valuation",
    question: "Do you provide property valuation services?",
    answer: "Yes, we offer professional property valuation services to help you determine the market value of your property. Our valuation considers location, property condition, market trends, and comparable properties in the area.",
    icon: DollarSign,
  },
];

export default function FAQSection() {
  const [expandedId, setExpandedId] = useState("viewing");
  const [hoveredId, setHoveredId] = useState(null);

  const toggleItem = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="w-full px-3 py-8 sm:px-4 sm:py-12 bg-gradient-to-br lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl sm:rounded-3xl border-2 border-gray-200 px-4 py-8 sm:px-6 sm:py-10 lg:px-16 lg:py-16">
          {/* Header */}
          <div className="mb-8 sm:mb-12">
            <div className="inline-block border-2 border-gray-300 rounded-full px-3 py-1 sm:px-5 sm:py-1.5 mb-6 sm:mb-8">
              <span className="text-[10px] sm:text-xs font-semibold text-gray-600 uppercase tracking-widest">
                FAQ
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 items-start">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Frequently Asked Questions
              </h1>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed lg:pt-2">
                Find answers to common questions about our services and processes. We're here to help you make informed decisions.
              </p>
            </div>
          </div>

          {/* FAQ List */}
          <div className="space-y-3 sm:space-y-4 mt-8 sm:mt-16">
            {FAQ_ITEMS.map((item) => {
              const IconComponent = item.icon;
              const isExpanded = expandedId === item.id;
              const isHovered = hoveredId === item.id;
              
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => toggleItem(item.id)}
                  className={`
                    relative rounded-xl sm:rounded-2xl overflow-hidden transition-all border duration-500 ease-in-out cursor-pointer
                    transform hover:scale-[1.01]
                    ${isExpanded 
                      ? 'bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 shadow-2xl shadow-blue-200' 
                      : 'bg-white border-2 border-gray-200 hover:border-gray-300 shadow-md hover:shadow-xl'
                    }
                  `}
                  style={{
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <div className="p-4 sm:p-6 lg:p-8">
                    <div className="flex items-start justify-between gap-3 sm:gap-6">
                      <div className="flex-1 min-w-0">
                        <h3 className={`
                          text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 transition-all duration-500
                          ${isExpanded ? 'text-white' : 'text-gray-900'}
                        `}>
                          {item.question}
                        </h3>
                        
                        {/* Answer with smooth height animation */}
                        <div 
                          className={`
                            grid transition-all duration-500 ease-in-out
                            ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
                          `}
                        >
                          <div className="overflow-hidden">
                            <p className={`
                              text-xs sm:text-sm lg:text-base leading-relaxed pt-1
                              ${isExpanded ? 'text-blue-50' : 'text-gray-600'}
                              transition-colors duration-500
                            `}>
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Arrow Button */}
                      <div className={`
                        flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center
                        transition-all duration-500 ease-in-out
                        ${isExpanded 
                          ? 'bg-white rotate-90 scale-110' 
                          : 'bg-blue-600 hover:bg-blue-700 hover:scale-110'
                        }
                        ${isHovered && !isExpanded ? 'scale-110' : ''}
                      `}>
                        <ChevronRight className={`
                          w-5 h-5 sm:w-6 sm:h-6 transition-all duration-500
                          ${isExpanded ? 'text-blue-600' : 'text-white'}
                        `} />
                      </div>
                    </div>
                  </div>

                  {/* Subtle gradient overlay on hover */}
                  {!isExpanded && isHovered && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-transparent pointer-events-none transition-opacity duration-300" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-8 sm:mt-16 text-center">
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg px-4">
              Still have questions? Our team is here to help!
            </p>
            <button className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform">
              <span>Contact Support</span>
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}