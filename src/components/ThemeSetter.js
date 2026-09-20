"use client";

import { useEffect } from "react";
import { useTheme } from "@/components/ThemeProvider";

export default function ThemeSetter({ theme = "dark" }) {
  const { setTheme } = useTheme();
  useEffect(() => { setTheme(theme); return () => setTheme("light"); }, [setTheme, theme]);
  return null;
}
