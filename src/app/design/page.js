import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Design — Samsara Group",
};

const concepts = [
  {
    title: "Svvara Objects",
    description:
      "Curated objects that carry intention. Each piece selected for its material truth, its quiet presence, its ability to shift the mood of a room.",
    href: "/svvara",
  },
  {
    title: "Samsara Interiors",
    description:
      "Spaces designed around the rituals of daily life. Light, proportion, and flow arranged to support stillness and movement in equal measure.",
    href: "/samsara",
  },
  {
    title: "Acasa Living",
    description:
      "Furniture and fixtures built to last beyond trend. Rooted in craft, refined through use, honest in material and form.",
    href: "/acasa",
  },
];

export default function DesignPage() {
  return (
    <>
      <Header />
      <main className="pt-28 max-w-[1520px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <p className="font-label text-xs tracking-[0.2em] uppercase text-on-surface-variant mb-4">
            <Link href="/" className="hover:text-terracotta transition-colors">
              Worlds
            </Link>{" "}
            &gt; Design
          </p>
          <h1 className="font-display text-5xl lg:text-7xl text-on-surface mb-6">
            Design
          </h1>
          <p className="font-body text-lg lg:text-xl text-on-surface-variant max-w-2xl mb-32">
            The act of shaping objects and spaces with care. We believe design
            begins with listening — to material, to context, to the way a body
            moves through a room.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="border-t border-outline-variant pt-16 mb-32">
            <p className="font-label text-xs tracking-[0.2em] uppercase text-on-surface-variant mb-4">
              Philosophy
            </p>
            <h2 className="font-display text-3xl lg:text-5xl text-on-surface mb-8">
              Object. Space. Material.
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 max-w-4xl">
              <p className="font-body text-on-surface-variant">
                Every object tells a story of how it was made. We honor that
                story by choosing pieces where the hand of the maker is
                visible — where grain, texture, and weight carry meaning beyond
                surface.
              </p>
              <p className="font-body text-on-surface-variant">
                Space is not decoration. It is the frame through which life
                happens. Our interiors strip away the unnecessary, leaving only
                what serves the moment — light that falls correctly, surfaces
                that invite touch, proportions that feel inevitable.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mb-32">
            <p className="font-label text-xs tracking-[0.2em] uppercase text-on-surface-variant mb-12">
              Worlds of Design
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {concepts.map((concept) => (
                <Link
                  key={concept.title}
                  href={concept.href}
                  className="group border-t border-outline-variant pt-8 block"
                >
                  <h3 className="font-display text-2xl text-on-surface mb-4 group-hover:text-terracotta transition-colors">
                    {concept.title}
                  </h3>
                  <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                    {concept.description}
                  </p>
                  <span className="font-label text-xs tracking-[0.15em] uppercase text-on-surface-variant mt-6 inline-block group-hover:text-terracotta transition-colors">
                    Explore
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-surface-container-low py-20 px-8 lg:px-16 mb-20 text-center">
            <p className="font-label text-xs tracking-[0.2em] uppercase text-on-surface-variant mb-4">
              Begin a Conversation
            </p>
            <h2 className="font-display text-3xl lg:text-4xl text-on-surface mb-6">
              Have a space that needs shaping?
            </h2>
            <p className="font-body text-on-surface-variant mb-8 max-w-lg mx-auto">
              We work with a limited number of projects each year. Reach out
              to discuss how design can serve your vision.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary text-on-primary font-label text-xs tracking-[0.15em] uppercase px-10 py-4 hover:bg-terracotta transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
