"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart, Plus, Minus, MapPinHouse, Loader2 } from "lucide-react"
import Image from "next/image"
import { useParams } from "next/navigation"
import useEmblaCarousel from "embla-carousel-react"
import { useProperties, useProperty } from '@/app/hooks/useProperties';
import WhatsAppButton, { PhoneButton } from "@/app/components/WhatsAppButton"
import ProductInfoCard from "./components/ProductInfoCard"
import RealEstateCards from "@/app/components/RealEstateCards"

const images = [
    "/house1.jpg",
    "/house2.jpg",
    "/house3.jpg",
    "/house4.jpg",
];


const property = () => {
    const { id } = useParams();


    const [emblaRef] = useEmblaCarousel({ loop: true })

    const { data: propertiesData, isLoading: propertiesIsLoading, isError: propertiesIsError } = useProperties({
        page: 2,
        pageSize: 6,
    });

    const items = propertiesData?.items || [];

    const { data, isLoading, error } = useProperty(id);

    if (isLoading) return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
            <div className="flex flex-col items-center gap-4">
                <Loader2 className="w-12 h-12 animate-spin text-blue-600" />
                <span className="text-lg font-medium text-gray-700">Loading property details...</span>
            </div>
        </div>
    );
    
    if (error) return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
            <div className="text-center">
                <p className="text-xl font-semibold text-red-600">Error: {error.message}</p>
            </div>
        </div>
    );

    const p = data.data
    console.log("data", p);



    const productImages = [
        "https://placehold.jp/500x500.png?text=Front",
        "https://placehold.jp/500x500.png?text=Side",
        "https://placehold.jp/500x500.png?text=Back",
    ]

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 p-4 md:p-8 lg:p-12">
                <div className="max-w-7xl mx-auto">
                    {/* Main Content Grid */}
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Product Images Carousel */}
                        <Card className="flex-1 lg:flex-[1.2] shadow-xl hover:shadow-2xl transition-all duration-500 border-gray-100 rounded-2xl overflow-hidden group relative before:absolute before:inset-0 before:rounded-2xl before:border-2 before:border-transparent hover:before:border-blue-500/20 before:transition-all before:duration-500">
                            <CardContent className="p-0 overflow-hidden" ref={emblaRef}>
                                <div className="flex">
                                    {productImages.map((src, i) => (
                                        <div className="flex-[0_0_100%] relative aspect-square" key={i}>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                            <img
                                                src={src}
                                                alt={`Product Image ${i + 1}`}
                                                width={500}
                                                height={500}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Product Info Card */}
                        <div className="flex-1">
                            <ProductInfoCard p={p} />
                        </div>
                    </div>

                    {/* Product Description Section */}
                    <div className="mt-16">
                        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 border border-gray-100 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-600 to-blue-700 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                            <div className="absolute inset-0 bg-blue-50/0 group-hover:bg-blue-50/30 transition-colors duration-500"></div>
                            <div className="relative z-10">
                                <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                                    <span className="w-2 h-8 bg-gradient-to-b from-blue-600 to-blue-700 rounded-full"></span>
                                    Property Description
                                </h2>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {p.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default property;