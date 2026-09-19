"use client";

import { useState } from "react";

export default function FadeInImage({ src, alt, className = "", ...props }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      className={`transition-opacity duration-700 ease-out ${
        loaded ? "opacity-100" : "opacity-0"
      } ${className}`}
      onLoad={() => setLoaded(true)}
      {...props}
    />
  );
}
