"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Bedrooms Filter
export const BedFilter = ({ setBedrooms, bedrooms }) => {
  const bedOptions = [1, 2, 3, 4];

  return (
    <div className="bg-white  w-full rounded-lg" >
      <Select value={bedrooms} onValueChange={setBedrooms}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Bedrooms" />
        </SelectTrigger>
        <SelectContent>
          {bedOptions.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

// Bathrooms Filter
export const BathFilter = ({ setBathrooms, bathrooms }) => {
  const bathOptions = [1, 2, 3, 4];

  return (
    <div className="bg-white w-full rounded-lg" >
      <Select value={bathrooms} onValueChange={setBathrooms}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Bathrooms" />
        </SelectTrigger>
        <SelectContent>
          {bathOptions.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
