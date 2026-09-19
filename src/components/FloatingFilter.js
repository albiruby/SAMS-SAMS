"use client";

import { useState } from "react";
import Link from "next/link";

const categories = [
  { label: "ALL", count: 6, href: "/" },
  { label: "MUSIC", count: null, href: "/music" },
  { label: "DINING", count: null, href: "/dining" },
  { label: "HOSPITALITY", count: null, href: "/hospitality" },
  { label: "DESIGN", count: null, href: "/design" },
  { label: "LIFESTYLE", count: null, href: "/lifestyle" },
  { label: "COMMUNITY", count: null, href: "/community" },
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
        className={`bg-white/30 backdrop-blur-2xl border border-black/5 shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
          hovered
            ? "rounded-[28px] w-[200px] py-5 px-3"
            : "rounded-[28px] w-auto min-w-[100px] h-[72px] flex items-center justify-center px-6"
        }`}
      >
        {!hovered ? (
          <div className="flex items-center gap-2">
            <span className="font-label text-[11px] tracking-[0.2em] uppercase text-on-surface whitespace-nowrap">
              {activeCat.label}
            </span>
            {activeCat.count !== null && (
              <span className="font-label text-[10px] text-on-surface-variant whitespace-nowrap">
                ({activeCat.count})
              </span>
            )}
          </div>
        ) : (
          <div className="flex flex-col gap-1">
            {categories.map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                onClick={() => setActive(cat.label)}
                className={`w-full text-left font-label text-[11px] tracking-[0.18em] uppercase py-2.5 px-4 rounded-full transition-all duration-200 ${
                  active === cat.label
                    ? "bg-on-surface text-surface"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-black/5"
                }`}
              >
                {cat.label}
                {cat.count !== null && (
                  <span className="ml-1.5 text-[9px] opacity-50">({cat.count})</span>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
