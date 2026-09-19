import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Dining — Samsara Group",
  description:
    "Discover the culinary worlds of Samsara Group. A curated collection of dining experiences rooted in taste, craft, and territory.",
};

const concepts = [
  {
    name: "Samsara Kitchen",
    description:
      "The flagship. Contemporary cuisine drawn from local harvests, where every plate tells a story of the land it came from.",
    href: "/dining/samsara-kitchen",
  },
  {
    name: "Acasa Garden",
    description:
      "Open-air dining among tropical greenery. Mediterranean-inspired dishes served beneath canopies of light and leaf.",
    href: "/dining/acasa-garden",
  },
  {
    name: "Svarga Table",
    description:
      "Communal feasts elevated. Shared plates, seasonal pairings, and the warmth of gathering around a single table.",
    href: "/dining/svarga-table",
  },
];

export default function DiningPage() {
  return (
    <>
      <Header />

      <main className="bg-surface pt-32">
        <div className="max-w-[1520px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="py-8 lg:py-12">
              <p className="font-label text-xs tracking-[0.2em] uppercase text-on-surface-variant">
                Worlds &gt; Dining
              </p>
              <h1 className="mt-6 font-display text-[clamp(3rem,8vw,7.5rem)] leading-[0.9] tracking-tight text-on-surface">
                DINING
              </h1>
              <p className="mt-8 max-w-xl font-body text-base lg:text-lg leading-relaxed text-on-surface-variant">
                Where taste meets intention. Our restaurants are not just places
                to eat — they are worlds to step into, each with its own rhythm,
                its own voice, its own truth.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="py-16 lg:py-24 border-t border-outline-variant">
              <p className="font-label text-xs tracking-[0.2em] uppercase text-terracotta">
                Philosophy
              </p>
              <h2 className="mt-6 font-display text-4xl lg:text-6xl tracking-tight text-on-surface leading-[1.05]">
                TASTE. CRAFT.
                <br />
                TERRITORY.
              </h2>
              <div className="mt-10 grid lg:grid-cols-2 gap-10 lg:gap-20">
                <p className="font-body text-base lg:text-lg leading-relaxed text-on-surface-variant">
                  We believe a meal is only as honest as its source. Every
                  ingredient is traced back to the hands that grew it, the soil
                  that shaped it. We do not chase trends — we honour what is
                  real, what is seasonal, what is alive.
                </p>
                <p className="font-body text-base lg:text-lg leading-relaxed text-on-surface-variant">
                  Our kitchens are workshops. Our chefs are makers. Each dish is
                  composed not to impress, but to connect — to land, to memory,
                  to the quiet pleasure of something done well.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="py-16 lg:py-24 border-t border-outline-variant">
              <p className="font-label text-xs tracking-[0.2em] uppercase text-on-surface-variant">
                Our Restaurants
              </p>
              <div className="mt-12 grid md:grid-cols-3 gap-8 lg:gap-10">
                {concepts.map((concept) => (
                  <Link
                    key={concept.name}
                    href={concept.href}
                    className="group block bg-surface-container-low rounded-sm p-8 lg:p-10 transition-colors duration-300 hover:bg-primary"
                  >
                    <h3 className="font-display text-2xl lg:text-3xl tracking-tight text-on-surface group-hover:text-on-primary transition-colors duration-300">
                      {concept.name}
                    </h3>
                    <p className="mt-4 font-body text-sm lg:text-base leading-relaxed text-on-surface-variant group-hover:text-on-primary/80 transition-colors duration-300">
                      {concept.description}
                    </p>
                    <span className="mt-6 inline-block font-label text-xs tracking-[0.15em] uppercase text-terracotta group-hover:text-on-primary transition-colors duration-300">
                      Explore &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="py-20 lg:py-32 border-t border-outline-variant text-center">
              <h2 className="font-display text-3xl lg:text-5xl tracking-tight text-on-surface">
                Begin Your Experience
              </h2>
              <p className="mt-6 max-w-lg mx-auto font-body text-base lg:text-lg text-on-surface-variant">
                Reserve a table, inquire about private dining, or simply learn
                more about what we are building.
              </p>
              <Link
                href="/contact"
                className="mt-10 inline-block bg-primary text-on-primary font-label text-xs tracking-[0.15em] uppercase px-10 py-4 rounded-sm transition-opacity duration-300 hover:opacity-80"
              >
                Get in Touch
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </main>

      <Footer />
    </>
  );
}
