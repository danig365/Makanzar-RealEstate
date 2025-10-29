"use client";

import React, { useState } from "react";
import { Check, ChevronsUpDown, MapPin, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

import { CITIES } from '../constants/cities'

export function Cityfilters({ setCityId, cityId }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700 flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span>City Location</span>
            </label>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-full sm:w-[240px] h-11 justify-between border-2 border-gray-300 hover:border-blue-500 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 bg-white shadow-sm hover:shadow-md transition-all duration-200 font-medium text-gray-700"
                    >
                        <span className="flex items-center gap-2 truncate">
                            <MapPin className="h-4 w-4 text-blue-600 flex-shrink-0" />
                            <span className={cityId ? "text-gray-800" : "text-gray-500"}>
                                {cityId
                                    ? CITIES.find((city) => city.id === cityId)?.name
                                    : "Select a city..."}
                            </span>
                        </span>
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 text-gray-400" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full sm:w-[240px] p-0 shadow-xl border-2 border-gray-200 rounded-lg">
                    <Command>
                        <div className="flex items-center border-b-2 border-gray-200 px-3">
                            <Search className="mr-2 h-4 w-4 shrink-0 text-blue-600" />
                            <CommandInput 
                                placeholder="Search city..." 
                                className="border-0 focus:ring-0 h-11"
                            />
                        </div>
                        <CommandList className="max-h-[300px]">
                            <CommandEmpty className="py-6 text-center text-sm text-gray-500 font-medium">
                                <div className="flex flex-col items-center gap-2">
                                    <MapPin className="h-8 w-8 text-gray-300" />
                                    <p>No city found.</p>
                                </div>
                            </CommandEmpty>
                            <CommandGroup className="p-2">
                                {CITIES.map((city) => (
                                    <CommandItem
                                        key={city.id}
                                        value={city.name}
                                        onSelect={(currentValue) => {
                                            const selectedCity = CITIES.find(
                                                (city) => city.name.toLowerCase() === currentValue.toLowerCase()
                                            );
                                            setCityId(
                                                selectedCity?.id === cityId ? "" : selectedCity?.id
                                            );
                                            setOpen(false);
                                        }}
                                        className="cursor-pointer rounded-md hover:bg-blue-50 aria-selected:bg-blue-100 transition-colors duration-150 py-2.5 px-3 font-medium text-gray-700"
                                    >
                                        <Check
                                            className={cn(
                                                "mr-2 h-4 w-4 text-blue-600 font-bold",
                                                cityId === city.id ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                        <MapPin className="mr-2 h-3.5 w-3.5 text-gray-400" />
                                        {city.name}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    );
}