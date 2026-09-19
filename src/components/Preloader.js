"use client";

import { useState, useEffect } from "react";

export default function Preloader() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const hideTimer = setTimeout(() => setHidden(true), 1600);
    const removeTimer = setTimeout(() => setRemoved(true), 2200);
    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (removed) return null;

  return (
    <div
      className={`preloader ${hidden ? "hidden" : ""}`}
      style={hidden ? { pointerEvents: "none" } : undefined}
    >
      <div className="preloader-logo">
        <img
          src="/teslogosamsara1.png"
          alt="Samsara Group"
          className="h-56 w-auto object-contain"
        />
      </div>
      <div className="preloader-bar">
        <div className="preloader-bar-inner" />
      </div>
    </div>
  );
}
