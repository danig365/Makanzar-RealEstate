import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Bath, BedDouble, RulerDimensionLine } from "lucide-react";
import { formatNumber } from "../utils/FormatNumber";

export default function RealEstateCards({ data }) {
  const router = useRouter();
  const [imageErrors, setImageErrors] = useState({});
  const [imageLoading, setImageLoading] = useState({});

  const handleNavigate = (path) => {
    router.push(`/property/${path}`);
  };

  const handleImageLoad = (id) => {
    setImageLoading(prev => ({ ...prev, [id]: false }));
  };

  const handleImageError = (id) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
    setImageLoading(prev => ({ ...prev, [id]: false }));
  };

  const getOptimizedImageUrl = (url) => {
    // If you're using a CDN or image service, you can add query parameters
    // Example for Cloudinary: `${url}?w=600&h=400&c=fill&q_auto&f_auto`
    // Example for imgix: `${url}?w=600&h=400&fit=crop&auto=format`
    return url;
  };

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 tracking-tight">
          Featured Properties
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((l) => {
            const primaryImage = l.images.find((img) => img.isPrimary);
            const imageUrl = primaryImage?.imageUrl;
            
            return (
              <div
                key={l.id}
                className="bg-white border-2 border-gray-200 hover:border-blue-400 transition-all duration-500 rounded-2xl overflow-hidden group relative before:absolute before:inset-0 before:rounded-2xl before:border-2 before:border-transparent hover:before:border-blue-500/20 before:transition-all before:duration-500"
              >
                <div className="relative overflow-hidden bg-gray-200">
                  {/* Image Container with fixed aspect ratio */}
                  <div className="relative w-full" style={{ paddingBottom: '66.67%' }}>
                    {imageUrl && !imageErrors[l.id] ? (
                      <>
                        {imageLoading[l.id] !== false && (
                          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                            <div className="animate-pulse text-gray-400">Loading...</div>
                          </div>
                        )}
                        <img
                          src={getOptimizedImageUrl(imageUrl)}
                          alt={l.title}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          onLoad={() => handleImageLoad(l.id)}
                          onError={() => handleImageError(l.id)}
                          loading="lazy"
                        />
                      </>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                        <div className="text-center text-gray-400">
                          <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                          </svg>
                          <p className="text-sm">No Image</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none"></div>
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-500 pointer-events-none"></div>
                  <span className="absolute top-3 right-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1.5 rounded-xl text-xs font-semibold shadow-2xl backdrop-blur-sm border border-white/20 z-10">
                    {l.listingType}
                  </span>
                </div>

                <div className="p-4 relative">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2 min-h-[1rem] group-hover:text-blue-600 transition-colors duration-300">
                    {l.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-gray-600 mb-1">
                    <span className="text-sm font-medium">
                      {l.area.name}, {l.city.name}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 gap-4 mb-3 pb-3 border-b border-gray-100">
                    <div className="flex items-center gap-1.5 group/item">
                      <div className="w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center group-hover/item:bg-blue-50 transition-colors duration-300">
                        <BedDouble className="w-3.5 h-3.5 text-blue-600" />
                      </div>
                      <span className="font-medium">{l.bedrooms}</span>
                    </div>
                    <div className="flex items-center gap-1.5 group/item">
                      <div className="w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center group-hover/item:bg-blue-50 transition-colors duration-300">
                        <Bath className="w-3.5 h-3.5 text-blue-600" />
                      </div>
                      <span className="font-medium">{l.bathrooms}</span>
                    </div>
                    <div className="flex items-center gap-1.5 group/item">
                      <div className="w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center group-hover/item:bg-blue-50 transition-colors duration-300">
                        <RulerDimensionLine className="w-3.5 h-3.5 text-blue-600" />
                      </div>
                      <span className="font-medium">
                        {l.areaSize} {l.areaUnit}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 font-medium mb-0.5 uppercase tracking-wider">
                        Price
                      </span>
                      <div className="text-xl font-bold text-black">
                        <span className="text-sm font-semibold">Rs </span>
                        {formatNumber(l.price)}
                      </div>
                    </div>
                    <button
                      onClick={() => handleNavigate(l.slug)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 shadow-lg cursor-pointer"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}