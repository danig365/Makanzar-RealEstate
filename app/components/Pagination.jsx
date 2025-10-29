"use client";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({
  page = 1,
  pageSize = 20,
  total = 0,
  onPageChange,
  onPageSizeChange,
}) {
  const totalPages = Math.max(1, Math.ceil((total || 0) / pageSize));

  function go(p) {
    if (!onPageChange) return;
    const next = Math.min(Math.max(1, p), totalPages);
    if (next !== page) onPageChange(next);
  }

  // make a compact window of page numbers
  const pages = [];
  const window = 2; // pages around current
  const start = Math.max(1, page - window);
  const end = Math.min(totalPages, page + window);
  for (let i = start; i <= end; i++) pages.push(i);

  const showingFrom = total === 0 ? 0 : (page - 1) * pageSize + 1;
  const showingTo = Math.min(page * pageSize, total || page * pageSize);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t pt-4">
      {/* Left: showing + page size */}
      <div className="flex items-center gap-3 text-sm text-gray-600">
        <span>
          Showing <span className="font-medium">{showingFrom}</span>–<span className="font-medium">{showingTo}</span>
          {typeof total === "number" && total > 0 ? <> of <span className="font-medium">{total}</span></> : null}
        </span>

        <div className="hidden sm:flex items-center gap-2">
          <span className="text-gray-500">•</span>
          <label className="text-gray-600">Per page</label>
          <select
            className="border rounded-md px-2 py-1 text-sm"
            value={pageSize}
            onChange={(e) => onPageSizeChange && onPageSizeChange(Number(e.target.value))}
          >
            {[10, 20, 30, 40, 50].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Right: pager */}
      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={() => go(page - 1)}
          disabled={page <= 1}
          className="inline-flex items-center gap-1 border rounded-md px-2.5 py-1.5 text-sm disabled:opacity-50"
        >
          <ChevronLeft className="w-4 h-4" />
          Prev
        </button>

        {/* first page + dots */}
        {start > 1 && (
          <>
            <PageBtn n={1} active={page === 1} onClick={() => go(1)} />
            {start > 2 ? <Ellipses /> : null}
          </>
        )}

        {pages.map((n) => (
          <PageBtn key={n} n={n} active={n === page} onClick={() => go(n)} />
        ))}

        {/* dots + last page */}
        {end < totalPages && (
          <>
            {end < totalPages - 1 ? <Ellipses /> : null}
            <PageBtn n={totalPages} active={page === totalPages} onClick={() => go(totalPages)} />
          </>
        )}

        <button
          type="button"
          onClick={() => go(page + 1)}
          disabled={page >= totalPages}
          className="inline-flex items-center gap-1 border rounded-md px-2.5 py-1.5 text-sm disabled:opacity-50"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function PageBtn({ n, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`min-w-[36px] h-9 px-2.5 text-sm rounded-md border ${
        active
          ? "bg-gray-900 text-white border-gray-900"
          : "bg-white text-gray-800 hover:bg-gray-50 border-gray-300"
      }`}
    >
      {n}
    </button>
  );
}

function Ellipses() {
  return <span className="px-2 text-gray-500">…</span>;
}
