// "use client";
// import React from "react";

// const areaRanges = [
//   { min: 0, max: 5, label: "Up to 5 Marla" },
//   { min: 5, max: 10, label: "5 – 10 Marla" },
//   { min: 10, max: 20, label: "10 – 20 Marla" },
//   { min: 20, max: 40, label: "20 – 40 Marla" },
//   { min: 40, max: 80, label: "40 Marla – 2 Kanal" },
//   { min: 80, max: 200, label: "2 – 10 Kanal" },
//   { min: 200, max: null, label: "Above 10 Kanal" },
// ];


// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"



// export default function AreaDropdown({ selectedRange, setSelectedRange }) {
//   return (
//     <div className="flex flex-col gap-1">
//       <label className="text-xs font-medium text-gray-600">Area Range</label>
//       <Select
//         value={selectedRange?.label || ""}
//         onChange={(e) => {
//           const range = areaRanges.find((r) => r.label === e.target.value);
//           setSelectedRange(range);
//         }}
//         className="w-full rounded-lg border border-gray-300 bg-white py-2.5 px-3 text-sm"
//       >
//         <SelectTrigger className="w-[180px]">
//           <SelectValue placeholder="Select a Area" />
//         </SelectTrigger>
//         <SelectContent>
//           <SelectGroup>
//             <SelectLabel>Area</SelectLabel>
//             {areaRanges.map((range) => (
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
import { Maximize2 } from "lucide-react";

const areaRanges = [
  { min: 0, max: 5, label: "Up to 5 Marla" },
  { min: 5, max: 10, label: "5 – 10 Marla" },
  { min: 10, max: 20, label: "10 – 20 Marla" },
  { min: 20, max: 40, label: "20 – 40 Marla" },
  { min: 40, max: 80, label: "40 Marla – 2 Kanal" },
  { min: 80, max: 200, label: "2 – 10 Kanal" },
  { min: 200, max: null, label: "Above 10 Kanal" },
];

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AreaDropdown({ selectedRange, setSelectedRange }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-medium text-gray-700 flex items-center gap-2">
        <Maximize2 className="w-4 h-4 text-blue-600" />
        Area Range
      </label>
      <Select
        value={selectedRange?.label || ""}
        onValueChange={(value) => {
          const range = areaRanges.find((r) => r.label === value);
          setSelectedRange(range);
        }}
      >
        <SelectTrigger className="w-full md:w-[200px] h-11 border-2 border-gray-200 hover:border-blue-500 focus:border-blue-600 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-200 font-medium text-gray-900">
          <SelectValue placeholder="Select area range" />
        </SelectTrigger>
        <SelectContent className="rounded-lg border-2 border-gray-200 shadow-xl">
          <SelectGroup>
            <SelectLabel className="text-xs font-semibold text-gray-700 uppercase tracking-wide px-3 py-2 bg-blue-50">
              Area Size
            </SelectLabel>
            {areaRanges.map((range) => (
              <SelectItem 
                key={range.label} 
                value={range.label}
                className="cursor-pointer hover:bg-blue-50 focus:bg-blue-100 transition-colors duration-200 font-medium text-gray-900 px-3 py-2.5 rounded-md my-1"
              >
                {range.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}