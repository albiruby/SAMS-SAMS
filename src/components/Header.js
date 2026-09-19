"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "THE GROUP", href: "/" },
  { label: "JOURNAL", href: "/journal" },
];

const worldsLinks = [
  { label: "Samsara", href: "/samsara" },
  { label: "Svvara", href: "/svvara" },
  { label: "Svarga", href: "/svarga" },
  { label: "Acasa", href: "/acasa" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = !isHome || scrolled;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        dark
          ? "bg-surface/30 backdrop-blur-xl border-b border-outline-variant/10"
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex items-center justify-between h-28 lg:h-36 px-6 lg:px-10">
        <Link href="/" className="flex-shrink-0 flex items-center">
          {dark ? (
            <img src="/logosamsdark.png" alt="Samsara" className="h-24 lg:h-32 w-auto" />
          ) : (
            <img src="/logosamslight.png" alt="Samsara" className="h-24 lg:h-32 w-auto" />
          )}
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`font-label text-body-sm tracking-[0.12em] transition-colors duration-200 ${
                dark
                  ? "text-on-surface-variant hover:text-on-surface"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div id="worlds-dropdown" className="relative group">
            <span className={`font-label text-body-sm tracking-[0.12em] cursor-pointer transition-colors duration-200 flex items-center gap-1.5 ${
              dark
                ? "text-on-surface-variant hover:text-on-surface"
                : "text-white/70 hover:text-white"
            }`}>
              WORLDS
              <svg className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 4.5L6 7.5L9 4.5" />
              </svg>
            </span>
            <div className="dropdown-menu absolute top-full left-0 mt-0 min-w-[180px] z-[200] pt-2">
              <div className="bg-surface border border-outline-variant shadow-lg py-2">
                {worldsLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block px-5 py-2.5 font-label text-label-sm tracking-[0.14em] uppercase text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className={`hidden sm:inline-block font-label text-body-sm tracking-[0.12em] px-6 py-2.5 border transition-colors duration-200 ${
              dark
                ? "border-on-surface/30 text-on-surface hover:bg-on-surface hover:text-surface"
                : "border-white/40 text-white hover:bg-white hover:text-primary"
            }`}
          >
            CONTACT NOW
          </Link>

          <button
            onClick={() => setMenuOpen(true)}
            className={`lg:hidden flex items-center gap-2 font-label text-label-uppercase transition-colors duration-200 ${
              dark
                ? "text-on-surface-variant hover:text-on-surface"
                : "text-white/70 hover:text-white"
            }`}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
