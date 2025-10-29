// "use client";
// import React from "react";

// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"



// const priceRanges = [
//   { min: 0, max: 500000, label: "Up to 5 Lac" },
//   { min: 500000, max: 1000000, label: "5 Lac – 10 Lac" },
//   { min: 1000000, max: 2000000, label: "10 Lac – 20 Lac" },
//   { min: 2000000, max: 5000000, label: "20 Lac – 50 Lac" },
//   { min: 5000000, max: 10000000, label: "50 Lac – 1 Crore" },
//   { min: 10000000, max: 20000000, label: "1 Crore – 2 Crore" },
//   { min: 20000000, max: null, label: "Above 2 Crore" },
// ];

// export default function PriceDropdown({ selectedRange, setSelectedRange }) {
//   return (
//     <div className="flex flex-col gap-1 w-full">
//       <label className="text-xs font-medium text-gray-600">Price Range</label>
//       <Select
//         value={selectedRange?.label || ""}
//         onChange={(e) => {
//           const range = priceRanges.find((r) => r.label === e.target.value);
//           setSelectedRange(range);
//         }}
//         className="w-full rounded-lg border border-gray-300 bg-white py-2.5 px-3 text-sm"
//       >

//         <SelectTrigger className="w-[180px]">
//           <SelectValue placeholder="Select a Price" />
//         </SelectTrigger>

//         <SelectContent>
//           <SelectGroup>
//             <SelectLabel>Price</SelectLabel>
//             {priceRanges.map((range) => (
//               <SelectItem key={range.label} value={range.label}>
//                 {range.label}
//               </SelectItem>
//             ))}
//           </SelectGroup>
//         </SelectContent>
//       </Select>
//     </div>
//   );
// }




"use client";
import React from "react";
import { DollarSign } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const priceRanges = [
  { min: 0, max: 500000, label: "Up to 5 Lac" },
  { min: 500000, max: 1000000, label: "5 Lac – 10 Lac" },
  { min: 1000000, max: 2000000, label: "10 Lac – 20 Lac" },
  { min: 2000000, max: 5000000, label: "20 Lac – 50 Lac" },
  { min: 5000000, max: 10000000, label: "50 Lac – 1 Crore" },
  { min: 10000000, max: 20000000, label: "1 Crore – 2 Crore" },
  { min: 20000000, max: null, label: "Above 2 Crore" },
];

export default function PriceDropdown({ selectedRange, setSelectedRange }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-xs font-medium text-gray-700 flex items-center gap-2">
        <DollarSign className="w-4 h-4 text-blue-600" />
        Price Range
      </label>
      <Select
        value={selectedRange?.label || ""}
        onValueChange={(value) => {
          const range = priceRanges.find((r) => r.label === value);
          setSelectedRange(range);
        }}
      >
        <SelectTrigger className="w-full md:w-[200px] h-11 border-2 border-gray-200 hover:border-blue-500 focus:border-blue-600 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-200 font-medium text-gray-900">
          <SelectValue placeholder="Select a Price" />
        </SelectTrigger>

        <SelectContent className="rounded-lg border-2 border-gray-200 shadow-xl">
          <SelectGroup>
            <SelectLabel className="text-xs font-semibold text-gray-700 uppercase tracking-wide px-3 py-2 bg-blue-50">
              Budget Range
            </SelectLabel>
            {priceRanges.map((range) => (
              <SelectItem 
                key={range.label} 
                value={range.label}
                className="cursor-pointer hover:bg-blue-50 focus:bg-blue-100 transition-colors duration-200 font-medium text-gray-900 px-3 py-2.5 rounded-md my-1"
              >
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-blue-600" />
                  {range.label}
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}