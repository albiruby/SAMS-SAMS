import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Svarga — Samsara Group",
  description: "Highland sanctuary. Elevation 1,140m. Volcanic stone, cool air, ceremonial ritual.",
};

export default function SvargaPage() {
  return (
    <>
      <Header />

      <section className="bg-surface pt-32 pb-16 max-w-[1520px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <span className="mb-4 block text-label-caps-sm uppercase tracking-[0.2em] text-on-surface-variant">WORLDS</span>
          <h1 className="text-display-md-mobile md:text-display-md font-display uppercase leading-[0.95] text-on-surface">SVARGA</h1>
          <p className="mt-6 max-w-lg text-body-md text-on-surface-variant leading-relaxed">
            Nature. Dining. Escape. Highland stillness at 1,140m.
          </p>
        </ScrollReveal>
      </section>

      <section className="bg-surface max-w-[1520px] mx-auto px-6 lg:px-10 pb-16">
        <ScrollReveal>
          <div className="w-full aspect-[21/9] overflow-hidden">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxmAlsOQm3o_ps7vQB4K0A2jyRwPcLthVB15dNACEJwDfaH9tVn4VOMqJB_6Th6WpKBFsKEX4CgkANSxgmWT049ncxex_GO4n4hD0mKR4OlbLtndGlqeV1ZNZOtVozjR4rXLtVoFMHfYD0rZQy5sfWSE1K-XNJWEbBAa419OORXKrwCitXqhC8xXJhvq47iPpVfh3P7tGZCwhpgJVObeAtgjOYw6Rbc-qVCdfu3uVCk4KM7gXlSBHo" alt="Svarga Estate" className="h-full w-full object-cover" />
          </div>
        </ScrollReveal>
      </section>

      <section className="bg-surface max-w-[1520px] mx-auto px-6 lg:px-10 pb-28">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ScrollReveal>
              <div className="space-y-12">
                <div>
                  <p className="text-body-md text-on-surface-variant leading-relaxed">
                    Perched on the volcanic ridge of Kintamani. Three hectares of terraced gardens, ancient banyan groves, and open-air pavilions built from locally quarried stone. Days begin before dawn with a fire ceremony and end with a listening session in the stone chamber.
                  </p>
                </div>

                <div className="border-t border-outline-variant pt-8">
                  <h2 className="mb-6 text-headline-sm font-display uppercase tracking-wide text-on-surface">SPECIFICATIONS</h2>
                  <div className="space-y-4">
                    {[
                      ["Elevation", "1,140m above sea level"],
                      ["Suites", "6 private, 2 communal pavilions"],
                      ["Rituals", "Fire ceremony, sound immersion"],
                      ["Dining", "Estate-to-table, fire-driven"],
                    ].map(([label, value]) => (
                      <div key={label} className="flex justify-between border-b border-outline-variant pb-4">
                        <span className="text-label-caps-sm uppercase tracking-wider text-on-surface-variant">{label}</span>
                        <span className="text-body-md text-on-surface">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5">
            <ScrollReveal>
              <div className="space-y-8">
                <div className="w-full aspect-[4/5] overflow-hidden">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxmAlsOQm3o_ps7vQB4K0A2jyRwPcLthVB15dNACEJwDfaH9tVn4VOMqJB_6Th6WpKBFsKEX4CgkANSxgmWT049ncxex_GO4n4hD0mKR4OlbLtndGlqeV1ZNZOtVozjR4rXLtVoFMHfYD0rZQy5sfWSE1K-XNJWEbBAa419OORXKrwCitXqhC8xXJhvq47iPpVfh3P7tGZCwhpgJVObeAtgjOYw6Rbc-qVCdfu3uVCk4KM7gXlSBHo" alt="Svarga Suite" className="h-full w-full object-cover" />
                </div>
                <Link href="/contact" className="inline-flex w-full items-center justify-center gap-3 bg-primary px-8 py-4 text-label-caps-sm uppercase tracking-widest text-on-primary transition-colors hover:bg-primary-container">
                  RESERVE
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 6h10M7 2l4 4-4 4" /></svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
