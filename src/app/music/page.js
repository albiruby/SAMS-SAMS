import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Music — Samsara Group",
  description: "Sound, rhythm, and movement across our spaces.",
};

const venues = [
  {
    name: "NOCTURNE",
    location: "Svarga Estate, Bali",
    description: "Deep listening sessions in our volcanic stone chamber. Analog sound. No screens. Only the room breathing together.",
  },
  {
    name: "SVARA",
    location: "Canggu, Bali",
    description: "An open-air stage where electronic and acoustic worlds meet. Weekly rotations of local and international selectors.",
  },
  {
    name: "ACASA",
    location: "Jakarta",
    description: "Late-night frequencies in the city. Intimate sets, vinyl only, floor-to-ceiling speakers. Reservations required.",
  },
];

export default function MusicPage() {
  return (
    <>
      <Header />

      <section className="bg-surface pt-32 pb-16 max-w-[1520px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <div className="mb-8 flex items-center gap-3 text-label-caps-sm uppercase tracking-[0.2em] text-on-surface-variant">
            <Link href="/#worlds" className="hover:text-terracotta transition-colors">WORLDS</Link>
            <span>/</span>
            <span>MUSIC</span>
          </div>
          <h1 className="text-display-md-mobile md:text-display-md font-display uppercase leading-[0.95] text-on-surface">MUSIC</h1>
          <p className="mt-6 max-w-2xl text-body-md text-on-surface-variant leading-relaxed">
            Sound is architecture. We design spaces where frequency becomes atmosphere, where a single note can change the shape of a room.
          </p>
        </ScrollReveal>
      </section>

      <section className="bg-surface max-w-[1520px] mx-auto px-6 lg:px-10 pb-28">
        <ScrollReveal>
          <div className="border-t border-outline-variant pt-16">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <span className="mb-6 block text-label-caps-sm uppercase tracking-[0.2em] text-terracotta">PHILOSOPHY</span>
                <h2 className="text-headline-md md:text-headline-lg font-display uppercase leading-tight text-on-surface">SOUND. RHYTHM. MOVEMENT.</h2>
              </div>
              <div className="flex flex-col justify-center space-y-6">
                <p className="text-body-md text-on-surface-variant leading-relaxed">
                  Every space we create begins with listening. The resonance of stone. The decay of a cymbal in open air. We do not program music. We curate the conditions for it to land.
                </p>
                <p className="text-body-md text-on-surface-variant leading-relaxed">
                  Our approach is slow. We build relationships with artists over years, not seasons. The result is a catalog of moments that cannot be repeated.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="bg-surface-container-low max-w-[1520px] mx-auto px-6 lg:px-10 py-28">
        <ScrollReveal>
          <span className="mb-4 block text-label-caps-sm uppercase tracking-[0.2em] text-terracotta">WHERE WE PLAY</span>
          <h2 className="mb-16 text-headline-md md:text-headline-lg font-display uppercase leading-tight text-on-surface">VENUES</h2>
        </ScrollReveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {venues.map((venue) => (
            <ScrollReveal key={venue.name}>
              <article className="flex h-full flex-col border border-outline-variant bg-surface p-8">
                <span className="mb-2 block text-label-caps-sm uppercase tracking-wider text-on-surface-variant">{venue.location}</span>
                <h3 className="mb-4 text-headline-sm font-display uppercase leading-tight text-on-surface">{venue.name}</h3>
                <p className="text-body-sm text-on-surface-variant leading-relaxed flex-1">{venue.description}</p>
                <div className="mt-8 border-t border-outline-variant pt-6">
                  <Link href="/contact" className="inline-flex w-full items-center justify-center gap-3 border border-on-surface/20 px-6 py-3 text-label-caps-sm uppercase tracking-widest text-on-surface transition-colors hover:bg-primary hover:text-on-primary">
                    INQUIRE
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 6h10M7 2l4 4-4 4" /></svg>
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="bg-primary max-w-[1520px] mx-auto px-6 lg:px-10 py-28">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center">
            <h2 className="mb-8 text-headline-md md:text-headline-lg font-display uppercase leading-tight text-on-primary">
              BOOK A<br />SESSION.
            </h2>
            <p className="mb-10 max-w-lg text-body-md text-on-primary/70 leading-relaxed">
              For private events, artist residencies, or collaborations, reach out directly. We respond within forty-eight hours.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-3 border border-on-primary/30 px-10 py-4 text-label-caps-sm uppercase tracking-widest text-on-primary transition-colors hover:bg-on-primary hover:text-primary">
              CONTACT US
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 6h10M7 2l4 4-4 4" /></svg>
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </>
  );
}
