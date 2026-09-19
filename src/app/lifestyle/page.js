import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Lifestyle — Samsara Group",
  description:
    "Curated living across sound, food, movement, and nature. A lifestyle rooted in intention and material truth.",
};

export default function LifestylePage() {
  return (
    <>
      <Header />
      <main className="pt-28 max-w-[1520px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <p className="font-label text-xs tracking-[0.2em] uppercase text-on-surface-variant mb-6">
            <Link href="/" className="hover:text-primary transition-colors">
              Worlds
            </Link>{" "}
            &gt; Lifestyle
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[6.5rem] font-medium tracking-tight text-on-surface leading-[0.95] mb-10">
            Lifestyle
          </h1>
          <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-32">
            The way we move through each day shapes everything. We design
            experiences that turn ordinary moments into deliberate rituals,
            elevating the everyday into something worth remembering.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="border-t border-outline-variant pt-16 mb-32">
            <p className="font-label text-xs tracking-[0.2em] uppercase text-terracotta mb-6">
              Philosophy
            </p>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-on-surface leading-[1.05] max-w-4xl">
              Ritual. Practice. Intention.
            </h2>
            <p className="font-body text-base md:text-lg text-on-surface-variant max-w-2xl leading-relaxed mt-8">
              We believe that a well-lived life is not accidental. It is the
              result of small, consistent choices — the temperature of the
              water, the weight of the linen, the order in which a morning
              unfolds. Our work is to curate the details so that each day
              carries a quiet sense of purpose.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-variant mb-32">
            <div className="bg-surface p-8 md:p-12">
              <p className="font-label text-xs tracking-[0.2em] uppercase text-terracotta mb-4">
                01
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-medium text-on-surface mb-4">
                Daily Rituals
              </h3>
              <p className="font-body text-sm md:text-base text-on-surface-variant leading-relaxed">
                Morning and evening sequences designed around light, breath, and
                texture. Small acts that anchor the day and give it shape.
              </p>
            </div>
            <div className="bg-surface p-8 md:p-12">
              <p className="font-label text-xs tracking-[0.2em] uppercase text-terracotta mb-4">
                02
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-medium text-on-surface mb-4">
                Wellness Programs
              </h3>
              <p className="font-body text-sm md:text-base text-on-surface-variant leading-relaxed">
                Movement, stillness, and recovery tailored to the individual.
                Not trends, but practices that sustain and restore.
              </p>
            </div>
            <div className="bg-surface p-8 md:p-12">
              <p className="font-label text-xs tracking-[0.2em] uppercase text-terracotta mb-4">
                03
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-medium text-on-surface mb-4">
                Curated Objects
              </h3>
              <p className="font-body text-sm md:text-base text-on-surface-variant leading-relaxed">
                Every object in a Samsara space earns its place. Materials,
                proportions, and function are held to the same standard —
                nothing is arbitrary.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-surface-container-low py-24 px-8 md:px-16 text-center mb-32">
            <p className="font-label text-xs tracking-[0.2em] uppercase text-on-surface-variant mb-6">
              Begin
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-on-surface mb-8">
              Start the Conversation
            </h2>
            <p className="font-body text-base text-on-surface-variant max-w-lg mx-auto mb-10">
              Whether you are shaping a home, a retreat, or a brand — we would
              like to hear what matters to you.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary text-on-primary font-label text-xs tracking-[0.15em] uppercase px-10 py-5 hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </Link>
          </div>
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
