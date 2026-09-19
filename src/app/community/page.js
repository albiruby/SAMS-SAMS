import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Community — Samsara Group",
};

const concepts = [
  {
    title: "Member Events",
    description:
      "Exclusive gatherings designed to deepen connections among our community members. From intimate dinners to curated experiences, every event fosters meaningful exchange.",
  },
  {
    title: "Creative Workshops",
    description:
      "Hands-on sessions led by artisans and thought leaders. Explore new disciplines, refine your craft, and discover inspiration within a supportive creative circle.",
  },
  {
    title: "Cultural Gatherings",
    description:
      "Celebrations of art, heritage, and shared narratives. These moments bring people together to honor tradition while embracing contemporary expression.",
  },
];

export default function CommunityPage() {
  return (
    <>
      <Header />
      <main className="bg-surface pt-28">
        <section className="max-w-[1520px] mx-auto px-6 lg:px-10 pb-24">
          <ScrollReveal>
            <p className="font-label text-xs tracking-[0.2em] uppercase text-on-surface-variant mb-6">
              <Link href="/worlds" className="hover:text-terracotta transition-colors">
                Worlds
              </Link>
              <span className="mx-3">/</span>
              <span className="text-on-surface">Community</span>
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-normal text-on-surface tracking-tight leading-none mb-8">
              COMMUNITY
            </h1>
          </ScrollReveal>
          <ScrollReveal>
            <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
              More than a network — a living tapestry of connection and belonging.
              Where shared values create spaces that feel like home.
            </p>
          </ScrollReveal>
        </section>

        <section className="bg-surface-container-low py-24">
          <div className="max-w-[1520px] mx-auto px-6 lg:px-10">
            <ScrollReveal>
              <p className="font-label text-xs tracking-[0.2em] uppercase text-terracotta mb-6">
                Philosophy
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal text-on-surface tracking-tight leading-tight mb-8">
                CONNECT. GROW. BELONG.
              </h2>
            </ScrollReveal>
            <ScrollReveal>
              <p className="font-body text-base md:text-lg text-on-surface-variant max-w-3xl leading-relaxed">
                At the heart of Samsara Group lies a belief that meaningful
                experiences are born from genuine connection. Our community is
                cultivated with intention — a place where ideas are exchanged
                freely, creativity thrives, and every individual finds their
                place within something larger.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="max-w-[1520px] mx-auto px-6 lg:px-10 py-24">
          <ScrollReveal>
            <p className="font-label text-xs tracking-[0.2em] uppercase text-on-surface-variant mb-12">
              How We Gather
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {concepts.map((concept) => (
              <ScrollReveal key={concept.title}>
                <div className="border-t border-outline-variant pt-8">
                  <h3 className="font-display text-2xl md:text-3xl font-normal text-on-surface tracking-tight mb-4">
                    {concept.title}
                  </h3>
                  <p className="font-body text-sm md:text-base text-on-surface-variant leading-relaxed">
                    {concept.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="max-w-[1520px] mx-auto px-6 lg:px-10 pb-32">
          <ScrollReveal>
            <div className="bg-primary rounded-sm p-12 md:p-16 text-center">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-normal text-on-primary tracking-tight mb-6">
                Join Our Community
              </h2>
              <p className="font-body text-base text-on-primary/80 max-w-xl mx-auto mb-10 leading-relaxed">
                Begin your journey with Samsara Group. Reach out to learn more
                about membership and upcoming events.
              </p>
              <Link
                href="/contact"
                className="inline-block font-label text-xs tracking-[0.2em] uppercase bg-on-primary text-primary px-10 py-4 hover:bg-on-primary/90 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
