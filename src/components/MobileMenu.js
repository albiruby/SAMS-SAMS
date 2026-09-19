"use client";

import { useEffect } from "react";
import Link from "next/link";

const mobileLinks = [
  { label: "THE GROUP", href: "/about" },
  { label: "JOURNAL", href: "/journal" },
  { label: "EVENTS", href: "/events" },
  { label: "CAREERS", href: "/careers" },
  { label: "CONTACT", href: "/contact" },
];

const worldsSubLinks = [
  { label: "Samsara", href: "/samsara" },
  { label: "Svvara", href: "/svvara" },
  { label: "Svarga", href: "/svarga" },
  { label: "Acasa", href: "/acasa" },
];

export default function MobileMenu({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className={`mobile-menu-overlay ${isOpen ? "open" : ""}`}>
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
        aria-label="Close menu"
      >
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M6 6l12 12M6 18L18 6" />
        </svg>
      </button>

      <nav className="flex flex-col items-center gap-6">
        {mobileLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={onClose}
            className="text-white text-[13px] tracking-[0.22em] font-medium uppercase hover:text-terracotta transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <div className="flex flex-col items-center gap-4 mt-2">
          <span className="text-white/50 text-[11px] tracking-[0.25em] uppercase">
            WORLDS
          </span>
          {worldsSubLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={onClose}
              className="text-white/70 text-[12px] tracking-[0.2em] uppercase hover:text-terracotta transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      <p className="absolute bottom-8 text-white/30 text-[10px] tracking-[0.3em] uppercase">
        SAMSARA GROUP – NUSANTARA ARCHIPELAGO
      </p>
    </div>
  );
}
