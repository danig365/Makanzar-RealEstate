"use client"
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone } from "lucide-react"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Copy, Check } from "lucide-react"

export default function WhatsAppButton({ phoneNumber }) {
    // Ensure proper WhatsApp URL format
    const whatsappUrl = `https://wa.me/${phoneNumber}`

    return (
        <Button
            asChild
            size={"lg"}
            variant="outline"
            className="flex-2 border-2 border-blue-500 bg-white hover:bg-blue-50 rounded-lg px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
        >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />

                <span className="text-blue-600 font-semibold text-base">
                    WhatsApp
                </span>
            </a>
        </Button>
    )
}




export function PhoneButton({ phoneNumber }) {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(phoneNumber)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    size={"lg"}
                    className="flex-1 relative overflow-hidden border-2 border-blue-500 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 rounded-lg px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                    {/* Ripple effect layer */}
                    <span className="absolute inset-0 bg-white/20 animate-ping rounded-lg"></span>

                    {/* Button content */}
                    <Phone className="w-5 h-5 text-white relative z-10" />
                    <span className="text-white font-semibold text-base relative z-10">Call Now</span>
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-md rounded-2xl shadow-2xl border-2 border-gray-200">
                <DialogHeader className="space-y-3">
                    <DialogTitle className="text-2xl lg:text-3xl font-bold text-blue-600 flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                            <Phone className="w-6 h-6 text-blue-600" />
                        </div>
                        Contact Number
                    </DialogTitle>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                        <p className="font-mono text-lg font-semibold text-gray-900 text-center">
                            {phoneNumber}
                        </p>
                    </div>
                    <Button
                        size="lg"
                        variant="outline"
                        className="w-full flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 rounded-lg px-6 py-3 transition-all duration-300 hover:scale-105"
                        onClick={handleCopy}
                    >
                        {copied ? (
                            <>
                                <Check className="h-5 w-5 text-blue-600" />
                                <span className="font-semibold text-base text-blue-600">Copied!</span>
                            </>
                        ) : (
                            <>
                                <Copy className="h-5 w-5 text-gray-700" />
                                <span className="font-semibold text-base text-gray-700">Copy Number</span>
                            </>
                        )}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}