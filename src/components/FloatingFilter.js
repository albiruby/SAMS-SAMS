"use client";

import { useState } from "react";

const categories = [
  { label: "ALL", count: 6 },
  { label: "MUSIC", count: null },
  { label: "DINING", count: null },
  { label: "HOSPITALITY", count: null },
  { label: "DESIGN", count: null },
  { label: "LIFESTYLE", count: null },
  { label: "COMMUNITY", count: null },
];

export default function FloatingFilter() {
  const [active, setActive] = useState("ALL");
  const [hovered, setHovered] = useState(false);

  const activeCat = categories.find((c) => c.label === active);

  return (
    <div
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`bg-surface/70 backdrop-blur-xl border border-outline-variant/40 shadow-[0_8px_32px_rgba(0,0,0,0.15)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
          hovered
            ? "rounded-[28px] w-[180px] py-5 px-3"
            : "rounded-full w-[72px] h-[72px] flex items-center justify-center"
        }`}
      >
        {!hovered ? (
          <div className="flex flex-col items-center gap-0.5">
            <span className="font-label text-[10px] tracking-[0.2em] uppercase text-on-surface">
              {activeCat.label}
            </span>
            {activeCat.count !== null && (
              <span className="font-label text-[9px] text-on-surface-variant">
                ({activeCat.count})
              </span>
            )}
          </div>
        ) : (
          <div className="flex flex-col gap-1">
            {categories.map((cat) => (
              <button
                key={cat.label}
                onClick={() => setActive(cat.label)}
                className={`w-full text-left font-label text-[11px] tracking-[0.18em] uppercase py-2.5 px-4 rounded-full transition-all duration-200 ${
                  active === cat.label
                    ? "bg-primary text-on-primary"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low"
                }`}
              >
                {cat.label}
                {cat.count !== null && (
                  <span className="ml-1.5 text-[9px] opacity-50">({cat.count})</span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
