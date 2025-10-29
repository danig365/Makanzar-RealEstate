"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, MessageCircle, Home, Building2, Info, DollarSign, FileText, Shield } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 lg:px-8 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2 transition-transform duration-300 hover:scale-105 m-2">
          <img
            src="/logo.jpg"
            alt="Makanzar Logo"
            className="w-40 md:w-48 lg:w-52"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-base font-medium text-gray-700">
          <Link href="/" className="hover:text-blue-600 transition-colors duration-200 flex items-center gap-2 group ">
            <Home className="w-4 h-4 group-hover:scale-110 transition-transform duration-200 " />
            <span>Home</span>
          </Link>
          <Link href="/properties" className="hover:text-blue-600 transition-colors duration-200 flex items-center gap-2 group">
            <Building2 className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
            <span>All Properties</span>
          </Link>
          <Link href="/about" className="hover:text-blue-600 transition-colors duration-200 flex items-center gap-2 group">
            <Info className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
            <span>About Us</span>
          </Link>
          <Link href="/procedures" className="hover:text-blue-600 transition-colors duration-200 flex items-center gap-2 group">
            <Shield className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
            <span>Procedures</span>
          </Link>
          <Link href="/contact" className="hover:text-blue-600 transition-colors duration-200 flex items-center gap-2 group">
            <FileText className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
            <span>Contact Us</span>
          </Link>
        </nav>

        {/* WhatsApp Button (Desktop) */}
        <div className="hidden md:block">
          <WhatsAppButton/>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-blue-50 transition-colors duration-200">
                <Menu className="h-6 w-6 text-gray-700" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 p-6 bg-white shadow-2xl flex flex-col">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-200">
                <span className="font-bold text-xl text-gray-900">Makanzar</span>
              </div>

              {/* Mobile Nav Links */}
              <nav className="flex flex-col gap-2 text-gray-700 font-medium flex-1">
                <a href="/" className="hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 p-3 rounded-lg flex items-center gap-3 ">
                  <Home className="w-5 h-5" />
                  <span>Home</span>
                </a>
                <a href="/properties" className="hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 p-3 rounded-lg flex items-center gap-3">
                  <Building2 className="w-5 h-5" />
                  <span>All Properties</span>
                </a>
                <a href="/about" className="hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 p-3 rounded-lg flex items-center gap-3">
                  <Info className="w-5 h-5" />
                  <span>About Us</span>
                </a>
                <a href="/procedures" className="hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 p-3 rounded-lg flex items-center gap-3">
                  <Shield className="w-5 h-5" />
                  <span>Procedures</span>
                </a>
                <a href="/contact" className="hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 p-3 rounded-lg flex items-center gap-3">
                  <FileText className="w-5 h-5" />
                  <span>Contact Us</span>
                </a>
              </nav>

              {/* WhatsApp Button (Mobile) - Fixed at bottom */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <WhatsAppButton/>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}