"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Search,
  MapPin,
  Building2,
  Menu,
  Phone,
  Filter,
  Bed,
  Bath,
  Tag,
  Home,
} from "lucide-react";
import { Switch } from "@/components/ui/switch";
import PriceDropdown from "./PriceFilter";
import AreaDropdown from "./AreaFilter";
import { Cityfilters } from "./Cityfilters";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label"

const cities = [
  { id: 1, name: "Lahore" },
  { id: 2, name: "Karachi" },
  { id: 3, name: "Islamabad" },
];

const propertyTypes = [
  "HOUSE",
  "APARTMENT",
  "PLOT",
  "COMMERCIAL",
  "FARMHOUSE",
  "UPPER_PORTION",
  "LOWER_PORTION",
];

const areaUnits = ["Marla", "Kanal", "Sqft"];

export default function HeaderFilters({ initialFilters = {}, onApply }) {
  const [moreFilters, setMoreFilters] = useState(false);

  const [q, setQ] = useState(initialFilters.q || "");
  const [cityId, setCityId] = useState(initialFilters.cityId || "");
  const [listingType, setListingType] = useState(initialFilters.listingType || "SALE");
  const [type, setType] = useState(initialFilters.type || "HOUSE");
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [minPrice, setMinPrice] = useState(initialFilters.minPrice || "");
  const [maxPrice, setMaxPrice] = useState(initialFilters.maxPrice || "");
  const [selectedAreaRange, setSelectedAreaRange] = useState(null);
  const [minAreaSize, setMinAreaSize] = useState(initialFilters.minAreaSize || "");
  const [maxAreaSize, setMaxAreaSize] = useState(initialFilters.maxAreaSize || "");
  const [areaUnit, setAreaUnit] = useState(initialFilters.areaUnit || "Marla");
  const [bedrooms, setBedrooms] = useState(initialFilters.bedrooms || "");
  const [bathrooms, setBathrooms] = useState(initialFilters.bathrooms || "");
  const [isNegotiable, setIsNegotiable] = useState(
    typeof initialFilters.isNegotiable === "boolean" ? initialFilters.isNegotiable : true
  );

  console.log("selectedPriceRange", selectedPriceRange);

  function handleApply(e) {
    e.preventDefault();
    const filters = {
      q: q || undefined,
      cityId: cityId || undefined,
      listingType,
      type,
      minPrice: selectedPriceRange?.min || undefined,
      maxPrice: selectedPriceRange?.max || undefined,
      minAreaSize: selectedAreaRange?.min || undefined,
      maxAreaSize: selectedAreaRange?.max || undefined,
      areaUnit,
      bedrooms,
      bathrooms,
      isNegotiable,
    };
    onApply && onApply(filters);
  }

  return (
    <div className="relative px-4 md:px-6 lg:px-8 flex justify-center items-center mb-8">
      {/* Background */}
      <div className="relative h-[400px] md:h-[500px] lg:h-[550px] rounded-2xl w-full overflow-hidden shadow-2xl">
        <Image
          src="/baner.jpeg"
          alt="Find your next home"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Desktop Filters */}
      <div className="absolute hidden md:flex flex-1 max-w-5xl mx-auto justify-center items-center">
        <div
          onSubmit={handleApply}
          className="backdrop-blur-lg bg-white/95 flex flex-col gap-4 border-2 border-gray-200 w-full rounded-2xl shadow-2xl p-6 lg:p-8"
        >
          <div className="flex w-full gap-4 justify-between items-center">
            {/* Listing Type Buttons */}
            <div className="flex gap-2">
              {["SALE", "RENT"].map((lt) => (
                <button
                  key={lt}
                  type="button"
                  onClick={() => setListingType(lt)}
                  className={`px-6 py-3 rounded-lg text-base font-semibold border-2 transition-all duration-300 ${
                    listingType === lt
                      ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white border-blue-600 shadow-lg"
                      : "bg-white text-gray-700 hover:bg-blue-50 hover:border-blue-300 border-gray-300"
                  }`}
                >
                  {lt}
                </button>
              ))}
            </div>
            
            {/* Property Type Dropdown */}
            <div className="flex gap-2 items-center">
              <Label className="text-xs font-medium text-gray-700 flex items-center gap-2" htmlFor="propertyType">
                <Building2 className="w-4 h-4 text-blue-600" />
                Property Type
              </Label>
              <Select value={type} onValueChange={(val) => setType(val)}>
                <SelectTrigger id="propertyType" className="w-[160px] h-11 rounded-lg border-2 border-gray-200 hover:border-blue-500 transition-all duration-200 font-medium">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent className="rounded-lg border-2 border-gray-200 shadow-xl">
                  {propertyTypes.map((pt) => (
                    <SelectItem key={pt} value={pt} className="cursor-pointer hover:bg-blue-50 font-medium">
                      {pt.replace("_", " ")}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Search */}
          <div>
            <label className="text-xs font-medium text-gray-700 flex items-center gap-2 mb-2">
              <Search className="w-4 h-4 text-blue-600" />
              Search Keywords
            </label>
            <div className="flex items-center gap-3 rounded-lg border-2 border-gray-200 hover:border-blue-500 focus-within:border-blue-600 bg-white px-4 transition-all duration-200 shadow-sm">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="e.g. Corner 3 Marla, brand new, park facing"
                className="w-full py-3 outline-none placeholder:text-gray-400 text-base bg-transparent font-medium"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* City Dropdown */}
            <Cityfilters setCityId={setCityId} cityId={cityId} />

            {/* Price Range */}
            <PriceDropdown
              selectedRange={selectedPriceRange}
              setSelectedRange={setSelectedPriceRange}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Area Filter */}
            <div className="flex gap-2">
              <AreaDropdown
                selectedRange={selectedAreaRange}
                setSelectedRange={setSelectedAreaRange}
              />
              <div className="flex flex-col gap-2">
                <label className="text-xs font-medium text-gray-700">Unit</label>
                <Select
                  onChange={(e) => setAreaUnit(e.target.value)}
                  className="rounded-lg"
                >
                  <SelectTrigger className="w-[120px] h-11 border-2 border-gray-200 hover:border-blue-500 rounded-lg transition-all duration-200 font-medium">
                    <SelectValue placeholder="Unit" />
                  </SelectTrigger>
                  <SelectContent className="rounded-lg border-2 border-gray-200 shadow-xl">
                    <SelectGroup>
                      <SelectLabel className="text-xs font-semibold text-gray-700 uppercase tracking-wide px-3 py-2 bg-blue-50">Area Unit</SelectLabel>
                      {areaUnits.map((u) => (
                        <SelectItem key={u} value={u} className="cursor-pointer hover:bg-blue-50 font-medium">
                          {u}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex gap-2">
              {/* Bedrooms Dropdown */}
              <div className="flex flex-col gap-2 flex-1">
                <label className="text-xs font-medium text-gray-700 flex items-center gap-2">
                  <Bed className="w-4 h-4 text-blue-600" />
                  Bedrooms
                </label>
                <Select
                  value={bedrooms || ""}
                  onValueChange={(value) => setBedrooms(Number(value))}
                >
                  <SelectTrigger className="h-11 border-2 border-gray-200 hover:border-blue-500 rounded-lg transition-all duration-200 font-medium">
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent className="rounded-lg border-2 border-gray-200 shadow-xl">
                    <SelectGroup>
                      <SelectLabel className="text-xs font-semibold text-gray-700 uppercase tracking-wide px-3 py-2 bg-blue-50">Bedrooms</SelectLabel>
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <SelectItem key={n} value={n} className="cursor-pointer hover:bg-blue-50 font-medium">
                          {n}+
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Bathrooms Dropdown */}
              <div className="flex flex-col gap-2 flex-1">
                <label className="text-xs font-medium text-gray-700 flex items-center gap-2">
                  <Bath className="w-4 h-4 text-blue-600" />
                  Bathrooms
                </label>
                <Select
                  value={bathrooms || ""}
                  onValueChange={(value) => setBathrooms(Number(value))}
                >
                  <SelectTrigger className="h-11 border-2 border-gray-200 hover:border-blue-500 rounded-lg transition-all duration-200 font-medium">
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent className="rounded-lg border-2 border-gray-200 shadow-xl">
                    <SelectGroup>
                      <SelectLabel className="text-xs font-semibold text-gray-700 uppercase tracking-wide px-3 py-2 bg-blue-50">Bathrooms</SelectLabel>
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <SelectItem key={n} value={n} className="cursor-pointer hover:bg-blue-50 font-medium">
                          {n}+
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center pt-2">
            {/* Negotiable Switch */}
            <div className="flex items-center gap-3 bg-blue-50 px-4 py-2.5 rounded-lg">
              <Switch className="data-[state=checked]:bg-blue-600" checked={isNegotiable} onCheckedChange={setIsNegotiable} />
              <label className="text-sm font-medium text-gray-900 flex items-center gap-2">
                <Tag className="w-4 h-4 text-blue-600" />
                Negotiable Price
              </label>
            </div>

            {/* Submit */}
            <button
              type="button"
              onClick={handleApply}
              className="rounded-lg flex justify-center gap-2 items-center bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 py-3 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Search className="w-5 h-5" />
              Search Properties
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Filters */}
      <div className="absolute md:hidden px-4 w-full flex justify-center items-center">
        <div className="backdrop-blur-lg bg-white/95 p-4 flex flex-col gap-3 border-2 border-gray-200 w-full rounded-2xl shadow-2xl">
          {/* Listing Type Buttons */}
          <div className="flex gap-2">
            {["SALE", "RENT"].map((lt) => (
              <button
                key={lt}
                type="button"
                onClick={() => setListingType(lt)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold border-2 transition-all duration-300 ${
                  listingType === lt
                    ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white border-blue-600 shadow-lg"
                    : "bg-white text-gray-700 hover:bg-blue-50 border-gray-300"
                }`}
              >
                {lt}
              </button>
            ))}
          </div>

          {/* Search */}
          <div>
            <label className="text-xs font-medium text-gray-700 mb-2 flex items-center gap-2">
              <Search className="w-4 h-4 text-blue-600" />
              Search
            </label>
            <div className="flex items-center gap-2 rounded-lg border-2 border-gray-200 bg-white px-3 shadow-sm">
              <Search className="w-4 h-4 text-gray-400" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search properties..."
                className="w-full py-2.5 outline-none placeholder:text-gray-400 text-sm bg-transparent"
              />
            </div>
          </div>

          <div className="flex gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="flex-shrink-0 border-2 border-gray-200 hover:border-blue-500 rounded-lg h-11 px-4 shadow-sm hover:shadow-md transition-all duration-200">
                  <Filter className="w-5 h-5 mr-2 text-blue-600" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="h-[85vh] overflow-y-auto p-6 rounded-t-2xl">
                <SheetHeader className="mb-6">
                  <SheetTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <Filter className="w-6 h-6 text-blue-600" />
                    Advanced Filters
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 pb-24">
                  <div className="flex gap-2">
                    {["SALE", "RENT"].map((lt) => (
                      <button
                        key={lt}
                        type="button"
                        onClick={() => setListingType(lt)}
                        className={`px-6 py-3 rounded-lg text-base font-semibold border-2 transition-all duration-300 ${
                          listingType === lt
                            ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white border-blue-600 shadow-lg"
                            : "bg-white text-gray-700 hover:bg-blue-50 border-gray-300"
                        }`}
                      >
                        {lt}
                      </button>
                    ))}
                  </div>

                  <div>
                    <label className="text-xs font-medium text-gray-700 mb-2 flex items-center gap-2">
                      <Search className="w-4 h-4 text-blue-600" />
                      Search
                    </label>
                    <div className="flex items-center gap-2 rounded-lg border-2 border-gray-200 bg-white px-3">
                      <Search className="w-4 h-4 text-gray-400" />
                      <input
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        placeholder="e.g. Corner 3 Marla, brand new"
                        className="w-full py-3 outline-none placeholder:text-gray-400 text-sm bg-transparent"
                      />
                    </div>
                  </div>

                  <Cityfilters setCityId={setCityId} cityId={cityId} />

                  <PriceDropdown
                    selectedRange={selectedPriceRange}
                    setSelectedRange={setSelectedPriceRange}
                  />

                  <div className="flex flex-col gap-2">
                    <Label className="text-xs font-medium text-gray-700 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-blue-600" />
                      Property Type
                    </Label>
                    <Select value={type} onValueChange={(val) => setType(val)}>
                      <SelectTrigger className="h-11 border-2 border-gray-200 hover:border-blue-500 rounded-lg font-medium">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent className="rounded-lg border-2 border-gray-200 shadow-xl">
                        {propertyTypes.map((pt) => (
                          <SelectItem key={pt} value={pt} className="cursor-pointer hover:bg-blue-50 font-medium">
                            {pt.replace("_", " ")}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex gap-2">
                    <AreaDropdown
                      selectedRange={selectedAreaRange}
                      setSelectedRange={setSelectedAreaRange}
                    />
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-medium text-gray-700">Unit</label>
                      <Select onChange={(e) => setAreaUnit(e.target.value)}>
                        <SelectTrigger className="w-[120px] h-11 border-2 border-gray-200 hover:border-blue-500 rounded-lg font-medium">
                          <SelectValue placeholder="Unit" />
                        </SelectTrigger>
                        <SelectContent className="rounded-lg border-2 border-gray-200 shadow-xl">
                          <SelectGroup>
                            <SelectLabel className="text-xs font-semibold text-gray-700 uppercase tracking-wide px-3 py-2 bg-blue-50">Area Unit</SelectLabel>
                            {areaUnits.map((u) => (
                              <SelectItem key={u} value={u} className="cursor-pointer hover:bg-blue-50 font-medium">
                                {u}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-medium text-gray-700 flex items-center gap-2">
                      <Bed className="w-4 h-4 text-blue-600" />
                      Bedrooms
                    </label>
                    <Select
                      value={bedrooms || ""}
                      onValueChange={(value) => setBedrooms(Number(value))}
                    >
                      <SelectTrigger className="h-11 border-2 border-gray-200 hover:border-blue-500 rounded-lg font-medium">
                        <SelectValue placeholder="Any" />
                      </SelectTrigger>
                      <SelectContent className="rounded-lg border-2 border-gray-200 shadow-xl">
                        <SelectGroup>
                          <SelectLabel className="text-xs font-semibold text-gray-700 uppercase tracking-wide px-3 py-2 bg-blue-50">Bedrooms</SelectLabel>
                          {[1, 2, 3, 4, 5, 6].map((n) => (
                            <SelectItem key={n} value={n} className="cursor-pointer hover:bg-blue-50 font-medium">
                              {n}+
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-medium text-gray-700 flex items-center gap-2">
                      <Bath className="w-4 h-4 text-blue-600" />
                      Bathrooms
                    </label>
                    <Select
                      value={bathrooms || ""}
                      onValueChange={(value) => setBathrooms(Number(value))}
                    >
                      <SelectTrigger className="h-11 border-2 border-gray-200 hover:border-blue-500 rounded-lg font-medium">
                        <SelectValue placeholder="Any" />
                      </SelectTrigger>
                      <SelectContent className="rounded-lg border-2 border-gray-200 shadow-xl">
                        <SelectGroup>
                          <SelectLabel className="text-xs font-semibold text-gray-700 uppercase tracking-wide px-3 py-2 bg-blue-50">Bathrooms</SelectLabel>
                          {[1, 2, 3, 4, 5, 6].map((n) => (
                            <SelectItem key={n} value={n} className="cursor-pointer hover:bg-blue-50 font-medium">
                              {n}+
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center gap-3 bg-blue-50 px-4 py-3 rounded-lg">
                    <Switch className="data-[state=checked]:bg-blue-600" checked={isNegotiable} onCheckedChange={setIsNegotiable} />
                    <label className="text-sm font-medium text-gray-900 flex items-center gap-2">
                      <Tag className="w-4 h-4 text-blue-600" />
                      Negotiable Price
                    </label>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <button
              type="button"
              onClick={handleApply}
              className="flex-1 rounded-lg flex justify-center gap-2 items-center bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 py-3 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Search className="w-4 h-4" />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}