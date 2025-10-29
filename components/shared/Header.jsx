"use client";

import React, { useEffect, useState } from "react";
import { Search, Phone, MapPin, Home, Building2, BedDouble, IndianRupee, ChevronDown, Menu } from "lucide-react";
import Image from "next/image";

export default function RealEstateHeroHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mode, setMode] = useState("buy"); // "buy" | "rent" | "projects"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 1);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative h-[120vh] w-full overflow-hidden bg-black">
      {/* Hero image */}
      <Image
        src="/img.jpg" // put a wide city/house image in /public
        alt="Real Estate Hero"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Top utility bar */}
      <div className="fixed inset-x-0 top-0 z-50">
        <div className={`hidden md:block transition-all ${scrolled ? "bg-black/70 backdrop-blur" : "bg-black/40"}`}>
          <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6 text-[12px] text-white/80">
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-1"><Phone size={14} /> Helpline: <a href="tel:+920000000000" className="text-white hover:underline">(00) 000 0000</a></span>
              <span className="hidden lg:inline">Mon–Sat, 9am–9pm</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white">Blog</a>
              <a href="#" className="hover:text-white">Help & Support</a>
              <button className="rounded-full bg-white/10 px-3 py-1 hover:bg-white/20">عربی</button>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div className={`transition-all duration-200 ${scrolled ? "bg-black/70 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
            {/* Left: logo */}
            <div className="flex items-center gap-3">
              <button className="md:hidden" aria-label="Toggle menu" onClick={() => setMobileOpen(v => !v)}>
                <Menu />
              </button>
              <a href="#" className="text-white text-2xl font-extrabold tracking-wide">ZMEENLY</a>
            </div>

            {/* Center: nav */}
            <nav className="hidden md:flex items-center gap-6 text-[13px] uppercase tracking-[0.15em]">
              {[
                { label: "Buy", href: "#buy" },
                { label: "Rent", href: "#rent" },
                { label: "Commercial", href: "#commercial" },
                { label: "Projects", href: "#projects" },
                { label: "Plot Finder", href: "#plots" },
                { label: "Agents", href: "#agents" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <a key={item.label} href={item.href} className="text-white/90 hover:text-white">{item.label}</a>
              ))}
            </nav>

            {/* Right: actions */}
            <div className="flex items-center gap-3">
              <button className="hidden md:inline-flex items-center rounded-full border border-white/20 px-3 py-1 text-white/90 hover:bg-white/10">Login</button>
              <button className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-black text-xs font-semibold uppercase tracking-widest hover:bg-white/90">
                Post Property
              </button>
            </div>
          </div>

          {/* Mobile sheet */}
          {mobileOpen && (
            <div className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur">
              <div className="mx-auto max-w-7xl px-4 py-3 text-sm text-white/90">
                <div className="grid grid-cols-2 gap-3">
                  {["Buy", "Rent", "Commercial", "Projects", "Plot Finder", "Agents", "Blog", "Contact"].map((i) => (
                    <a key={i} href="#" className="rounded-lg bg-white/10 px-3 py-2 hover:bg-white/15">
                      {i}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Search panel (hero center) */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 md:px-6">
        <div className="w-full">
          <h1 className="mb-4 text-center text-3xl md:text-5xl font-bold text-white">Find Your Next Home</h1>
          <p className="mb-6 text-center text-white/80">Buy, rent, or explore new projects across the city</p>

          <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white/95 p-3 shadow-2xl">
            {/* Tabs */}
            <div className="flex items-center gap-2 p-1">
              {[
                { key: "buy", label: "Buy", icon: <Home size={16} /> },
                { key: "rent", label: "Rent", icon: <BedDouble size={16} /> },
                { key: "projects", label: "Projects", icon: <Building2 size={16} /> },
              ].map((t) => (
                <button
                  key={t.key}
                  onClick={() => setMode(t.key)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${
                    mode === t.key ? "bg-black text-white" : "bg-black/5 text-black hover:bg-black/10"
                  }`}
                >
                  {t.icon}
                  {t.label}
                </button>
              ))}
            </div>

            {/* Inputs */}
            <div className="mt-2 grid grid-cols-1 gap-2 md:grid-cols-12">
              {/* Location */}
              <div className="md:col-span-4">
                <label className="sr-only">Location</label>
                <div className="flex items-center gap-2 rounded-xl border border-black/10 bg-white px-3 py-2">
                  <MapPin size={18} />
                  <input
                    placeholder="City, area or project"
                    className="w-full bg-transparent text-sm outline-none placeholder:text-black/50"
                  />
                </div>
              </div>

              {/* Property type */}
              <div className="md:col-span-3">
                <label className="sr-only">Property Type</label>
                <button className="flex w-full items-center justify-between rounded-xl border border-black/10 bg-white px-3 py-2 text-left text-sm">
                  <span className="inline-flex items-center gap-2"><Home size={18} /> Property Type</span>
                  <ChevronDown size={16} />
                </button>
              </div>

              {/* Price */}
              <div className="md:col-span-3">
                <label className="sr-only">Price Range</label>
                <button className="flex w-full items-center justify-between rounded-xl border border-black/10 bg-white px-3 py-2 text-left text-sm">
                  <span className="inline-flex items-center gap-2"><IndianRupee size={18} /> Price</span>
                  <ChevronDown size={16} />
                </button>
              </div>

              {/* Beds (only for buy/rent) */}
              {mode !== "projects" && (
                <div className="md:col-span-2">
                  <label className="sr-only">Beds</label>
                  <button className="flex w-full items-center justify-between rounded-xl border border-black/10 bg-white px-3 py-2 text-left text-sm">
                    <span className="inline-flex items-center gap-2"><BedDouble size={18} /> Beds</span>
                    <ChevronDown size={16} />
                  </button>
                </div>
              )}

              {/* Search button */}
              <div className={`${mode !== "projects" ? "md:col-span-12 md:col-start-auto md:row-start-auto" : ""} md:col-span-2`}>
                <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-black px-4 py-3 text-sm font-semibold uppercase tracking-widest text-white hover:bg-black/90">
                  <Search size={18} /> Search
                </button>
              </div>
            </div>

            {/* Quick filters */}
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {["House", "Flat", "Plot", "Commercial", "New Project"].map((chip) => (
                <button key={chip} className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs hover:bg-black/10">
                  {chip}
                </button>
              ))}
            </div>
          </div>

          {/* Trust bar */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-white/80">
            <span>Trusted by 10,000+ buyers</span>
            <span className="hidden md:inline">•</span>
            <span>Verified listings • Secure messaging • Expert agents</span>
          </div>
        </div>
      </div>
    </section>
  );
}
