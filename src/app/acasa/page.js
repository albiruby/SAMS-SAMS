import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Acasa — Samsara Group",
  description: "Stay. Move. Play. Where the body remembers its rhythm.",
};

export default function AcasaPage() {
  return (
    <>
      <Header />

      <section className="bg-surface pt-32 pb-16 max-w-[1520px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <span className="mb-4 block text-label-caps-sm uppercase tracking-[0.2em] text-on-surface-variant">WORLDS</span>
          <h1 className="text-display-md-mobile md:text-display-md font-display uppercase leading-[0.95] text-on-surface">ACASA</h1>
          <p className="mt-6 max-w-lg text-body-md text-on-surface-variant leading-relaxed">
            Stay. Move. Play. Where the body remembers its rhythm.
          </p>
        </ScrollReveal>
      </section>

      <section className="bg-surface max-w-[1520px] mx-auto px-6 lg:px-10 pb-16">
        <ScrollReveal>
          <div className="w-full aspect-[21/9] overflow-hidden">
            <img src="https://lh3.googleusercontent.com/aida/AEtjO1V_sLNydkRNgm0GCMvP_kCWbHCi4TKmSsxtgSZe-Rl3i6jNx-T-e5DDp4nW7v9B7lRbNqdJhaIfDULWVpGbS6ZmHepkFaY8Fp-4oQvCcGIPEZIGggV4yyX6x0Q7gKgULguF4Ix_EKOtQS7_YChvHm-pZBuq42yuAJyPz6Pal9cO0SHH6TdeS2N-6ClpXmFVNDgYDxMMYMTyd_SHp3FI8qMs493bOPZ3aKD9NmTyLfZIBD1C3JUh3Ww6sBM" alt="Acasa" className="h-full w-full object-cover" />
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
                    Movement as ritual. Padel courts, cold plunge protocols, and sunrise yoga woven into the fabric of intentional leisure. Acasa is where the body remembers its natural rhythm.
                  </p>
                </div>

                <div className="border-t border-outline-variant pt-8">
                  <h2 className="mb-6 text-headline-sm font-display uppercase tracking-wide text-on-surface">OFFERINGS</h2>
                  <div className="space-y-4">
                    {[
                      ["Padel Courts", "3 regulation courts, evening floodlights"],
                      ["Cold Plunge", "Nordic-style, 2°C mineral plunge"],
                      ["Sunrise Practice", "Dawn yoga, breathwork, sound healing"],
                      ["Rooftop Gathering", "Communal sunset ritual"],
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
                  <img src="https://lh3.googleusercontent.com/aida/AEtjO1V_sLNydkRNgm0GCMvP_kCWbHCi4TKmSsxtgSZe-Rl3i6jNx-T-e5DDp4nW7v9B7lRbNqdJhaIfDULWVpGbS6ZmHepkFaY8Fp-4oQvCcGIPEZIGggV4yyX6x0Q7gKgULguF4Ix_EKOtQS7_YChvHm-pZBuq42yuAJyPz6Pal9cO0SHH6TdeS2N-6ClpXmFVNDgYDxMMYMTyd_SHp3FI8qMs493bOPZ3aKD9NmTyLfZIBD1C3JUh3Ww6sBM" alt="Acasa Interior" className="h-full w-full object-cover" />
                </div>
                <Link href="/contact" className="inline-flex w-full items-center justify-center gap-3 bg-primary px-8 py-4 text-label-caps-sm uppercase tracking-widest text-on-primary transition-colors hover:bg-primary-container">
                  JOIN THE RITUAL
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
