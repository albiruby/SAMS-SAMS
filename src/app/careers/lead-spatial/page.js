import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Lead – Spatial Design — Samsara Group",
  description:
    "Lead the spatial and material identity of new Samsara properties.",
};

export default function LeadSpatialPage() {
  return (
    <>
      <Header />

      <section className="bg-surface pt-32 pb-16 max-w-[1520px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <Link
            href="/careers"
            className="mb-8 inline-flex items-center gap-2 text-label-caps-sm uppercase tracking-[0.2em] text-on-surface-variant hover:text-terracotta transition-colors"
          >
            ← ALL ROLES
          </Link>
          <span className="mt-4 mb-4 block text-label-caps-sm uppercase tracking-[0.2em] text-on-surface-variant">
            CANGGU, BALI – FULL TIME
          </span>
          <h1 className="text-display-md-mobile md:text-display-md font-display uppercase leading-[0.95] text-on-surface">
            LEAD – SPATIAL
            <br />
            DESIGN
          </h1>
        </ScrollReveal>
      </section>

      <section className="bg-surface max-w-[1520px] mx-auto px-6 lg:px-10 pb-28">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <ScrollReveal>
              <div className="space-y-12">
                <div>
                  <h2 className="mb-4 text-headline-sm font-display uppercase tracking-wide text-on-surface">
                    ROLE DESCRIPTION
                  </h2>
                  <p className="text-body-md text-on-surface-variant leading-relaxed">
                    Lead the spatial and material identity of new Samsara
                    properties. You will oversee architectural concepts,
                    interior systems, and the sensory layer that defines how our
                    spaces feel. This role sits at the intersection of
                    architecture, design, and experiential hospitality — shaping
                    environments that are felt before they are understood.
                  </p>
                </div>

                <div>
                  <h2 className="mb-6 text-headline-sm font-display uppercase tracking-wide text-on-surface">
                    RESPONSIBILITIES
                  </h2>
                  <ul className="space-y-4 text-body-md text-on-surface-variant leading-relaxed">
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                      Lead architectural and interior concepts for new properties
                      from brief to completion
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                      Develop material palettes, spatial narratives, and sensory
                      systems for each environment
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                      Collaborate with architects, contractors, and artisans to
                      ensure design integrity through construction
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                      Define lighting, acoustics, and scent programs that
                      reinforce the spatial identity
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                      Source bespoke furniture, fixtures, and objects from
                      local and international makers
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                      Maintain and evolve the design language across existing
                      Samsara properties
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="mb-6 text-headline-sm font-display uppercase tracking-wide text-on-surface">
                    REQUIREMENTS
                  </h2>
                  <ul className="space-y-4 text-body-md text-on-surface-variant leading-relaxed">
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                      7+ years in interior design, architecture, or spatial
                      design with hospitality experience
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                      Strong portfolio demonstrating material sensitivity and
                      experience-led environments
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                      Proficiency in AutoCAD, SketchUp, Rhino, or equivalent
                      3D modelling tools
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                      Deep understanding of material sourcing, fabrication
                      processes, and construction detailing
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                      Based in Bali or willing to relocate; comfortable
                      working across multiple project sites
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                      Passion for craft, culture, and the intersection of
                      architecture with lived experience
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-4">
            <ScrollReveal>
              <div className="sticky top-32 border border-outline-variant p-8 bg-surface-container-low">
                <h2 className="mb-6 text-headline-sm font-display uppercase tracking-wide text-on-surface">
                  APPLY NOW
                </h2>
                <form className="space-y-6">
                  <div>
                    <label className="mb-2 block text-label-md uppercase tracking-wider text-on-surface-variant">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border-b border-outline bg-transparent py-3 text-body-md text-on-surface outline-none transition-colors focus:border-terracotta"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-label-md uppercase tracking-wider text-on-surface-variant">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full border-b border-outline bg-transparent py-3 text-body-md text-on-surface outline-none transition-colors focus:border-terracotta"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-label-md uppercase tracking-wider text-on-surface-variant">
                      Portfolio URL
                    </label>
                    <input
                      type="url"
                      required
                      className="w-full border-b border-outline bg-transparent py-3 text-body-md text-on-surface outline-none transition-colors focus:border-terracotta"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-label-md uppercase tracking-wider text-on-surface-variant">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full border-b border-outline bg-transparent py-3 text-body-md text-on-surface outline-none transition-colors focus:border-terracotta resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full mt-4 bg-primary px-8 py-4 text-label-caps-sm uppercase tracking-widest text-on-primary transition-colors hover:bg-primary-container"
                  >
                    SUBMIT APPLICATION
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
