"use client";

import { useEffect, useRef } from "react";

export default function ScrollReveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      el.classList.add("revealed");
      const imgs = el.querySelectorAll(".img-reveal");
      imgs.forEach((img) => img.classList.add("revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay > 0) {
              setTimeout(() => {
                entry.target.classList.add("revealed");
              }, delay);
            } else {
              entry.target.classList.add("revealed");
            }
            observer.unobserve(entry.target);

            const imgs = entry.target.querySelectorAll(".img-reveal");
            imgs.forEach((img) => {
              if (delay > 0) {
                setTimeout(() => img.classList.add("revealed"), delay);
              } else {
                img.classList.add("revealed");
              }
            });
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
