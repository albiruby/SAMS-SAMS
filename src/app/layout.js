import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import FloatingFilter from "@/components/FloatingFilter";
import PageTransition from "@/components/PageTransition";

export const metadata = {
  title: "Samsara Group – Cultural Institution & Lifestyle House",
  description:
    "A cultural sanctuary and lifestyle institute preserving Indonesian architectural heritage, artisanal tactility, and contemporary hospitality.",
  openGraph: {
    title: "Samsara Group – Cultural Institution & Lifestyle House",
    description:
      "A cultural sanctuary and lifestyle institute preserving Indonesian architectural heritage, artisanal tactility, and contemporary hospitality.",
    url: "https://samsaragroup.co.id",
    siteName: "Samsara Group",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samsara Group – Cultural Institution & Lifestyle House",
    description:
      "A cultural sanctuary and lifestyle institute preserving Indonesian architectural heritage, artisanal tactility, and contemporary hospitality.",
  },
  metadataBase: new URL("https://samsaragroup.co.id"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Samsara Group",
              url: "https://samsaragroup.co.id",
              description:
                "A cultural sanctuary and lifestyle institute preserving Indonesian architectural heritage, artisanal tactility, and contemporary hospitality.",
              sameAs: [
                "https://www.instagram.com/samsara.bogor",
                "https://www.instagram.com/svarga.samsara",
                "https://www.instagram.com/acasa.samsara",
              ],
            }),
          }}
        />
      </head>
      <body className="bg-surface font-sans text-on-surface antialiased">
        <ThemeProvider>
          <PageTransition>
            {children}
          </PageTransition>
          <FloatingFilter />
        </ThemeProvider>
      </body>
    </html>
  );
}
