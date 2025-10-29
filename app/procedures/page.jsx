import React from 'react';

export default function Procedures() {
  const steps = [
    {
      step: "STEP 1",
      title: "BROWSE PROPERTIES",
      description: "Explore our extensive collection of premium properties tailored to your needs and budget preferences"
    },
    {
      step: "STEP 2",
      title: "SCHEDULE VIEWING",
      description: "Book a personal tour with our expert agents to visit and inspect your selected properties"
    },
    {
      step: "STEP 3",
      title: "CLOSE THE DEAL",
      description: "Complete your purchase with our seamless transaction process and comprehensive legal support"
    }
  ];

  return (
    <section className="w-full px-3 py-8 sm:px-4 sm:py-12 bg-gray-50 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* White Content Container */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border-2 border-gray-200 px-4 py-8 sm:px-6 sm:py-10 lg:px-16 lg:py-16">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 px-2">
              Let's See How it Works
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 max-w-xl mx-auto px-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Image Section */}
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="bg-gray-100 rounded-xl sm:rounded-2xl p-3 sm:p-4 overflow-hidden shadow-md w-full">
                <img 
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=800&fit=crop" 
                  alt="Beautiful residential building"
                  className="w-full h-64 sm:h-80 lg:h-96 xl:h-[500px] object-cover rounded-lg sm:rounded-xl"
                />
              </div>
            </div>

            {/* Steps Section */}
            <div className="order-1 lg:order-2 space-y-4 sm:space-y-6 lg:space-y-8">
              {steps.map((item, index) => (
                <div key={index} className="flex gap-3 sm:gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-blue-600 shadow-lg flex items-center justify-center">
                      <svg 
                        className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] sm:text-xs lg:text-sm text-gray-500 font-semibold mb-1">
                      {item.step}
                    </p>
                    <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-gray-900 mb-1.5 sm:mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}