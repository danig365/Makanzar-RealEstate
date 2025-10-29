"use client";
import React, { useState, useEffect } from "react";

import RealEstateCards from "../components/RealEstateCards";
import UnlimitedPager from "../components/UnlimitedPager";
import { useProperties } from "../hooks/useProperties";
import HeaderFiltersProperties from "../components/HeaderFiltersProperties";
const PAGE_SIZE = 20;

export default function Properties() {
  const [filters, setFilters] = useState({
    listingType: "SALE",
    type: "HOUSE",
    isNegotiable: true,
  });

  const [page, setPage] = useState(1);

  // whenever filters change, reset page to 1

  const { data, isLoading, isError } = useProperties({
    ...filters,
    page,
    pageSize: PAGE_SIZE,
    // sortBy: "createdAt",
    // sortDir: "desc",
    // includeDeleted: false,
    // hasCoords: true,
  });

  const items = data?.items || [];

  return (
    <>
      <HeaderFiltersProperties
        initialFilters={filters}
        onApply={(f) => setFilters((prev) => ({ ...prev, ...f }))}
      />

      <div className="mx-auto px-4 md:px-6 lg:px-8 py-8">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-16 lg:py-24">
            <div className="relative">
              <div className="w-16 h-16 rounded-full border-4 border-blue-200 border-t-blue-600 animate-spin"></div>
            </div>
            <span className="mt-6 text-lg font-medium text-gray-700">Loading properties...</span>
            <p className="mt-2 text-sm text-gray-500">Please wait while we fetch the best properties for you</p>
          </div>
        ) : isError ? (
          <div className="flex flex-col items-center justify-center py-16 lg:py-24">
            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-2">Something went wrong!</h3>
            <p className="text-base text-gray-600">We couldn't load the properties. Please try again later.</p>
          </div>
        ) : (
          <>
            <RealEstateCards data={items} />
            {/* Pagination */}
            <div className="py-8">
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
      </div>
    </>
  );
}