"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const categories = [
  { label: "ALL", count: 6, href: "/" },
  { label: "MUSIC", count: null, href: "/music" },
  { label: "DINING", count: null, href: "/dining" },
  { label: "HOSPITALITY", count: null, href: "/hospitality" },
  { label: "DESIGN", count: null, href: "/design" },
  { label: "LIFESTYLE", count: null, href: "/lifestyle" },
  { label: "COMMUNITY", count: null, href: "/community" },
];

const darkPages = ["/", "/collaborations", "/samsara", "/svvara", "/nocturne"];

export default function FloatingFilter() {
  const [active, setActive] = useState("ALL");
  const [hovered, setHovered] = useState(false);
  const pathname = usePathname();
  const isDark = darkPages.includes(pathname);

  const activeCat = categories.find((c) => c.label === active);
  const logoSrc = isDark ? "/logodoangdark.png" : "/logodoanglight.png";

  return (
    <div
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`backdrop-blur-2xl border shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
          isDark
            ? "bg-white/30 border-black/10"
            : "bg-black/60 border-white/10"
        } ${
          hovered
            ? "rounded-[28px] w-[200px] py-5 px-3"
            : "rounded-[28px] w-[72px] h-[72px] flex items-center justify-center"
        }`}
      >
        {!hovered ? (
          <Link href="/" className="flex items-center justify-center w-full h-full p-2">
            <img src={logoSrc} alt="Samsara" className="w-full h-full object-contain" />
          </Link>
        ) : (
          <div className="flex flex-col gap-1">
            {categories.map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                onClick={() => setActive(cat.label)}
                className={`w-full text-left font-label text-[11px] tracking-[0.18em] uppercase py-2.5 px-4 rounded-full transition-all duration-200 ${
                  active === cat.label
                    ? isDark
                      ? "bg-on-surface text-surface"
                      : "bg-surface text-on-surface"
                    : isDark
                      ? "text-on-surface/70 hover:text-on-surface hover:bg-black/5"
                      : "text-surface/70 hover:text-surface hover:bg-white/10"
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
