"use client";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function UnlimitedPager({
  page = 1,
  onPrev,
  onNext,
  loading = false,
}) {
  return (
    <div className="flex items-center justify-between border-t pt-4">
      <div className="text-sm text-gray-600">
        Page <span className="font-medium">{page}</span> • Per page{" "}
        <span className="font-medium">20</span>
      </div>

      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={onPrev}
          disabled={loading || page <= 1}
          className="inline-flex items-center gap-1 border rounded-md px-2.5 py-1.5 text-sm disabled:opacity-50"
        >
          <ChevronLeft className="w-4 h-4" />
          Prev
        </button>

        <button
          type="button"
          onClick={onNext}
          disabled={loading}
          className="inline-flex items-center gap-1 border rounded-md px-2.5 py-1.5 text-sm disabled:opacity-50"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
