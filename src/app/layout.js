import { Inter } from "next/font/google";
import "./globals.css";
import FloatingFilter from "@/components/FloatingFilter";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Samsara Group – Cultural Institution & Lifestyle House",
  description:
    "A cultural sanctuary and lifestyle institute preserving Indonesian architectural heritage, artisanal tactility, and contemporary hospitality.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-surface font-sans text-on-surface antialiased">
        {children}
        <FloatingFilter />
      </body>
    </html>
  );
}
