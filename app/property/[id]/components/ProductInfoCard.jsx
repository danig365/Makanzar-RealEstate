"use client"

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { MapPinHouse } from "lucide-react"
import WhatsAppButton, { PhoneButton } from "@/app/components/WhatsAppButton"

export default function ProductInfoCard({ p }) {
    return (
        <Card className="flex-1 shadow-md rounded-2xl border">
            {/* Header */}
            <CardHeader>
                <CardTitle className="text-2xl font-bold">{p.title}</CardTitle>
            </CardHeader>

            {/* Content */}
            <CardContent className="space-y-4">
                {/* Contact Buttons */}
                <div className="flex gap-2">
                    {p.contactWhatsapp && <WhatsAppButton phoneNumber={p.contactWhatsapp} />}
                    {p.owner.phone && <PhoneButton phoneNumber={p.owner.phone} />}
                </div>

                {/* Price & Location */}
                <div className="flex flex-nowrap  items-center justify-between">
                    <p className="text-lg font-semibold">
                        <span className="text-gray-600">PKR </span>{p.price}
                    </p>
                    <div className="flex flex-nowrap  gap-1 text-gray-600">
                        <MapPinHouse className="w-4 h-4 text-black " />
                        <p className=" text-sm " >{p.area.name}</p>
                    </div>
                </div>

                <Separator />

                {/* Basic Info */}
                <div className="grid grid-cols-2 gap-2 text-sm">
                    <p><span className="font-extrabold">Type:</span> {p.type}</p>
                    <p><span className="font-extrabold">Listing:</span> {p.listingType}</p>
                    <p><span className="font-extrabold">Bedrooms:</span> {p.bedrooms}</p>
                    <p><span className="font-extrabold">Bathrooms:</span> {p.bathrooms}</p>
                    <p className="col-span-2">
                        <span className="font-extrabold">Area Size:</span> {p.areaSize} {p.areaUnit}
                    </p>
                </div>

                <Separator />

                {/* Features */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">Features</h2>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                        <p><span className="font-extrabold">Facing:</span> {p.featuresJson.facing}</p>
                        <p><span className="font-extrabold">Flooring:</span> {p.featuresJson.flooring}</p>
                    </div>
                </div>

                <Separator />

                {/* Amenities */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">Amenities</h2>
                    <div className="flex flex-wrap gap-2">
                        {p.amenities.map((item) => (
                            <Badge key={item.amenity.id} variant="secondary">
                                {item.amenity.key}
                            </Badge>
                        ))}
                    </div>
                </div>
            </CardContent>

            {/* Footer */}
            <CardFooter className="flex justify-end">
                <p className="text-xs text-gray-500">Listed by: {p.owner.name}</p>
            </CardFooter>
        </Card>
    )
}
