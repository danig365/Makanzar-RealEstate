"use client";
import React, { useState, useEffect } from "react";
import { useProperties } from "./hooks/useProperties";
import RealEstateCards from "./components/RealEstateCards";
import HeaderFilters from "./components/HeaderFilters";
import UnlimitedPager from "./components/UnlimitedPager";
import FAQCard from "@/components/shared/FAQCard";

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

const PAGE_SIZE = 20;

export default function Home() {
  const [filters, setFilters] = useState({
    listingType: "SALE",
    type: "HOUSE",
    isNegotiable: true,
  });

  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useProperties({
    ...filters,
    page,
    pageSize: PAGE_SIZE,
  });

  const items = data?.items || [];

  const services = [
    {
      id: 1,
      title: "Property Listing",
      description: "Explore our range of exclusive real estate listings across prime locations",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      ),
      featured: true
    },
    {
      id: 2,
      title: "Market Analysis",
      description: "Expert guidance to optimize your financial performance",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
      ),
      featured: false
    },
    {
      id: 3,
      title: "Virtual Tours",
      description: "Innovative tech strategies to enhance operational efficiency",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
        </svg>
      ),
      featured: false
    },
    {
      id: 4,
      title: "Investment Planning",
      description: "Identify, assess, and mitigate risks to protect your assets",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
        </svg>
      ),
      featured: false
    }
  ];

  return (
    <>
      <HeaderFilters
        initialFilters={filters}
        onApply={(f) => setFilters((prev) => ({ ...prev, ...f }))}
      />

      <div className="mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-12 sm:py-16 lg:py-24">
            <div className="relative">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-blue-200 border-t-blue-600 animate-spin"></div>
            </div>
            <span className="mt-4 sm:mt-6 text-base sm:text-lg font-medium text-gray-700 text-center px-4">Loading properties...</span>
            <p className="mt-2 text-xs sm:text-sm text-gray-500 text-center px-4">Please wait while we fetch the best properties for you</p>
          </div>
        ) : isError ? (
          <div className="flex flex-col items-center justify-center py-12 sm:py-16 lg:py-24">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-red-100 flex items-center justify-center mb-3 sm:mb-4">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 text-center px-4">Something went wrong!</h3>
            <p className="text-sm sm:text-base text-gray-600 text-center px-4">We couldn&apos;t load the properties. Please try again later.</p>
          </div>
        ) : (
          <>
            <RealEstateCards data={items} />
            <div className="py-6 sm:py-8">
              <UnlimitedPager
                page={page}
                loading={isLoading}
                onPrev={() => {
                  if (page > 1) {
                    setPage((p) => p - 1);
                    if (typeof window !== "undefined") {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }
                }}
                onNext={() => {
                  setPage((p) => p + 1);
                  if (typeof window !== "undefined") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
              />
            </div>
          </>
        )}

        <section className="w-full px-3 py-8 sm:px-4 sm:py-12 bg-gradient-to-br lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl sm:rounded-3xl border-2 border-gray-200 px-4 py-8 sm:px-6 sm:py-10 lg:px-16 lg:py-16">
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16">
                <div className="flex flex-col justify-between">
                  <div className="mb-6 sm:mb-8">
                    <div className="inline-block mb-3 sm:mb-4">
                      <span className="px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-semibold text-gray-700 bg-gray-100 rounded-full border border-gray-300">
                        SERVICES
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                      Explore our comprehensive service offerings
                    </h2>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                      Focused on your unique needs, our team delivers solutions that blend deep industry knowledge and cutting-edge strategies to ensure lasting growth.
                    </p>
                  </div>

                  <div>
                    <button className="flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-blue-600 text-white text-sm sm:text-base font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-md">
                      Get Started
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:gap-4">
                  {services.map((service) => (
                    <div 
                      key={service.id}
                      className={`rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all hover:scale-105 ${
                        service.featured 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-50 text-gray-900'
                      }`}
                    >
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-3 sm:mb-4 ${
                        service.featured 
                          ? 'bg-white/20' 
                          : 'bg-blue-600 text-white'
                      }`}>
                        {service.icon}
                      </div>

                      <h3 className={`text-base sm:text-lg lg:text-xl font-bold mb-1.5 sm:mb-2 ${
                        service.featured ? 'text-white' : 'text-gray-900'
                      }`}>
                        {service.title}
                      </h3>
                      <p className={`text-xs sm:text-sm leading-relaxed ${
                        service.featured ? 'text-white/90' : 'text-gray-600'
                      }`}>
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        <FAQCard />
      </div>
    </>
  );
}